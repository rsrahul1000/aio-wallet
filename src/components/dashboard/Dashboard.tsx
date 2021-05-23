import React, { useState } from 'react';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import moment from 'moment';
import { Account, Category, Record, State } from '../../../types/type';
import { Records } from './Records';
import AccountCard from '../accounts/AccountCard';
import { useDispatch, useSelector } from 'react-redux';
import AccountModal from './AccountModal';
import { createAccountActionCreator } from '../../redux/redux-toolkit';
import randomColor from 'randomcolor';
import AccountModalFormik from './AccountModalFormik';
import { PageHeader } from '../PageHeader';

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state: State) => state.categories);
  const accounts = useSelector((state: State) => state.accounts);
  const records = useSelector((state: State) => state.records);

  const handleAccountModalSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    dispatch(createAccountActionCreator(accountModalStates));
    clearAccountModalStates();
    return;
  };

  const clearAccountModalStates = () => {
    setAccountModalStates({
      id: null,
      name: '',
      color: randomColor(),
      accType: '',
      currAmount: 0,
      currency: '',
    });
  };

  const [accountModalStates, setAccountModalStates] = useState<Account>({
    id: null,
    name: '',
    color: '',
    accType: '',
    currAmount: 0,
    currency: '',
  });
  const [selectDateRange, setSelectDateRange] = useState({ start: moment().subtract(29, 'days'), end: moment() });
  const handleDateRangeSelectionCallback = (start: moment.Moment, end: moment.Moment) => {
    setSelectDateRange({ start, end });
  };
  const { start, end } = selectDateRange;
  const label = start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY');

  return (
    <div className='container-fluid'>
      {/* <!-- Page Heading --> */}
      <PageHeader title='Dashboard' />
      <div className='row m-3'>
        <button type='button' className='btn btn-primary' data-bs-toggle='modal' data-bs-target='#accountModal' data-bs-whatever='@mdo'>
          New Account
        </button>
        {/* <AccountModal
          handleAccountModalSubmit={handleAccountModalSubmit}
          accountModalStates={accountModalStates}
          setAccountModalStates={setAccountModalStates}
        /> */}
        <AccountModalFormik />
      </div>

      {/* <!-- Content Row --> */}
      <div className='row'>
        <AccountCard accounts={accounts} />
      </div>
      <Records records={records} />
    </div>
  );
};
export default Dashboard;
