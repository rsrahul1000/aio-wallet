import { configureStore, createSlice, PayloadAction, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { Category, Record, Account } from '../../types/type';
import { v4 as uuid } from 'uuid';
import randomColor from 'randomcolor';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const categories: Category[] = [
  {
    id: uuid(),
    name: 'Food',
    isSelected: false,
    subCategory: [],
  },
];

const RecordData: Record[] = [
  {
    id: uuid(),
    type: 'Income',
    currency: 'INR',
    amount: 100,
    category: categories.filter(category => category.name === 'Food')[0],
    date: new Date(),
    remainingBal: 5000,
  },
  {
    id: uuid(),
    type: 'Income',
    currency: 'INR',
    amount: 10000,
    category: categories.filter(category => category.name === 'Food')[0],
    date: new Date(),
    remainingBal: 5000,
  },
  {
    id: uuid(),
    type: 'Income',
    currency: 'INR',
    amount: 1000,
    category: categories.filter(category => category.name === 'Food')[0],
    date: new Date(),
    remainingBal: 5000,
  },
];

const AccountData: Account[] = [
  {
    id: uuid(),
    name: 'State Bank of India',
    accType: 'Savings Bank Account',
    currency: 'INR',
    currAmount: 10000,
    records: RecordData,
    isSelected: true,
    color: randomColor(),
  },
];

const categorySlice = createSlice({
  name: 'category',
  initialState: categories,
  reducers: {
    create: {
      reducer: (state, { payload }: PayloadAction<{ id: string; name: string; isSelected: boolean }>) => {
        state.push(payload);
      },
      prepare: ({
        name,
        accType,
        color,
        currAmount,
        currency,
      }: {
        name: string;
        accType: string;
        currAmount: number;
        currency: string;
        color: string;
      }) => ({
        payload: {
          id: uuid(),
          name,
          color,
          currAmount,
          currency,
          accType,
          isSelected: true,
        },
      }),
    },
    edit: (state, { payload }: PayloadAction<{ id: string; name: string }>) => {
      const categoryEdit = state.find(category => category.id === payload.id);
      if (categoryEdit) {
        categoryEdit.name = payload.name;
      }
    },
    remove: (state, { payload }: PayloadAction<{ id: string }>) => {
      const categoryDeleteIndex = state.findIndex(category => category.id === payload.id);
      if (categoryDeleteIndex !== -1) {
        state.splice(categoryDeleteIndex, 1);
      }
    },
    get: (state, { payload }: PayloadAction<{ id: string }>) => {
      const category = state.find(category => category.id === payload.id);
      // const result = state
      //   .map(category => ({
      //     ...state,
      //     subCategory: category.subCategory.filter(child => payload.id.includes(payload.id): null,
      //   }))
      //   .filter(category => category.subCategory.length > 0);
      if (category) {
        category;
      }
    },
  },
});

const accountSlice = createSlice({
  name: 'account',
  initialState: AccountData,
  reducers: {
    create: {
      reducer: (state, { payload }: PayloadAction<Account>) => {
        state.push(payload);
      },
      prepare: ({
        name,
        accType,
        currency,
        currAmount,
        color,
      }: // isSelected,
      // records,
      {
        name: string;
        accType: string;
        currency: string;
        currAmount: number;
        color: string;
        // records: Record[] | null;
      }) => ({
        payload: {
          id: uuid(),
          name,
          accType,
          currency,
          currAmount,
          isSelected: true,
          color,
          records: null,
        },
      }),
    },
  },
});

const recordSlice = createSlice({
  name: 'record',
  initialState: RecordData,
  reducers: {
    create: {
      reducer: (state, { payload }: PayloadAction<Record>) => {
        state.push(payload);
      },
      prepare: ({ amount, category, currency, date, remainingBal, type, icon, labels, note, payee, paymentType, place, time }: Record) => ({
        payload: {
          id: uuid(),
          amount,
          category,
          currency,
          date,
          remainingBal,
          type,
          icon,
          labels,
          note,
          payee,
          paymentType,
          place,
          time,
        },
      }),
    },
    edit: (state, { payload }: PayloadAction<Record>) => {
      const recordEdit = state.find(record => record.id === payload.id);
      if (recordEdit) {
        recordEdit.amount = payload.amount;
        recordEdit.category = payload.category;
        recordEdit.currency = payload.currency;
        recordEdit.date = payload.date;
        recordEdit.type = payload.type;
        recordEdit.icon = payload?.icon;
        recordEdit.labels = payload?.labels;
        recordEdit.note = payload?.note;
        recordEdit.payee = payload?.payee;
        recordEdit.paymentType = payload?.paymentType;
        recordEdit.place = payload?.place;
        recordEdit.time = payload?.time;
      }
    },
    remove: (state, { payload }: PayloadAction<{ id: string }>) => {
      const removeDeleteIndex = state.findIndex(record => record.id === payload.id);
      if (removeDeleteIndex !== -1) {
        state.splice(removeDeleteIndex, 1);
      }
    },
  },
});

export const {
  create: createAccountActionCreator,
  /*, edit: editAccountActionCreator, */
} = accountSlice.actions;

const reducer = {
  categories: categorySlice.reducer,
  accounts: accountSlice.reducer,
  records: recordSlice.reducer,
};

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  },
});

export default configureStore({
  reducer,
  middleware: [thunk, logger], //customizedMiddleware,
});
