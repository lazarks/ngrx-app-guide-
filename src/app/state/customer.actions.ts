import { Action } from '@ngrx/store';
import { Customer } from '../modules/customers/customer.model';

export enum CustomerActionTypes {
  LOAD_CUSTOMERS = '[Customer] Load Customers',
  LOAD_CUSTOMERS_SUCCESS = '[Customer] Load Customers Success',
  LOAD_CUSTOMERS_Fail = '[Customer] Load Customers Fail',
}

export class LoadCustomers implements Action {
  readonly type = CustomerActionTypes.LOAD_CUSTOMERS;
}

export class LoadCustomerssSuccess implements Action {
  readonly type = CustomerActionTypes.LOAD_CUSTOMERS_SUCCESS;

  constructor(public payload: Customer[]) {}
}

export class LoadCustomerssFail implements Action {
  readonly type = CustomerActionTypes.LOAD_CUSTOMERS_Fail;

  constructor(public payload: string) {}
}

export type CustomerAction =
  | LoadCustomers
  | LoadCustomerssSuccess
  | LoadCustomerssFail;
