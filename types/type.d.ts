interface SubCategory {
  id: string;
  name: string;
}

export interface Category {
  id: string;
  name: string;
  isSelected: boolean;
  subCategory?: SubCategory[] | null;
}

export interface Label {
  id: string;
  name: string;
}

export interface Record {
  id?: string;
  type: string;
  currency: string;
  amount: number;
  category: Category;
  date: Date;
  remainingBal: number;
  icon?: string;
  time?: Date;
  labels?: Label[] | null;
  payee?: string;
  note?: string;
  paymentType?: string;
  place?: string;
}

export enum AccountType {
  Savings,
  Current,
}

export interface Account {
  id: string | null;
  name: string;
  accType: string;
  currAmount: number;
  currency: string;
  records?: Record[] | null;
  isSelected?: boolean = false;
  color: string;
}

export interface User {
  id: string;
  fullName: string;
  email: string;
  password: string;
  profilePic?: string;
  accounts: Account[] | null;
}

interface State {
  categories: Category[];
  accounts: Account[];
  records: Record[];
}
