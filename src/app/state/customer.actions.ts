import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Customer } from '../modules/customers/customer.model';

export enum CustomerActionTypes {
  LOAD_CUSTOMERS = '[Customer] Load Customers',
  LOAD_CUSTOMERS_SUCCESS = '[Customer] Load Customers Success',
  LOAD_CUSTOMERS_Fail = '[Customer] Load Customers Fail',

  LOAD_CUSTOMER = '[Customer] Load Customer',
  LOAD_CUSTOMER_SUCCESS = '[Customer] Load Customer Success',
  LOAD_CUSTOMER_Fail = '[Customer] Load Customer Fail',

  CREATE_CUSTOMER = '[Customer] Create Customer',
  CREATE_CUSTOMER_SUCCESS = '[Customer] Create Customer Success',
  CREATE_CUSTOMER_Fail = '[Customer] Create Customer Fail',

  UPDATE_CUSTOMER = '[Customer] Update Customer',
  UPDATE_CUSTOMER_SUCCESS = '[Customer] Update Customer Success',
  UPDATE_CUSTOMER_Fail = '[Customer] Update Customer Fail',

  DELETE_CUSTOMER = '[Customer] Delete Customer',
  DELETE_CUSTOMER_SUCCESS = '[Customer] Delete Customer Success',
  DELETE_CUSTOMER_Fail = '[Customer] Delete Customer Fail',
}

// LOAD CUSTOMERS
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

// LOAD CUSTOMER
export class LoadCustomer implements Action {
  readonly type = CustomerActionTypes.LOAD_CUSTOMER;

  constructor(public payload: number) {}
}

export class LoadCustomerSuccess implements Action {
  readonly type = CustomerActionTypes.LOAD_CUSTOMER_SUCCESS;

  constructor(public payload: Customer) {}
}

export class LoadCustomerFail implements Action {
  readonly type = CustomerActionTypes.LOAD_CUSTOMER_Fail;

  constructor(public payload: string) {}
}

// CREATE CUSTOMER
export class CreateCustomer implements Action {
  readonly type = CustomerActionTypes.CREATE_CUSTOMER;

  constructor(public payload: Customer) {}
}

export class CreateCustomerSuccess implements Action {
  readonly type = CustomerActionTypes.CREATE_CUSTOMER_SUCCESS;

  constructor(public payload: Customer) {}
}

export class CreateCustomerFail implements Action {
  readonly type = CustomerActionTypes.CREATE_CUSTOMER_Fail;

  constructor(public payload: string) {}
}

// UPDATE CUSTOMER
export class UpdateCustomer implements Action {
  readonly type = CustomerActionTypes.UPDATE_CUSTOMER;

  constructor(public payload: Customer) {}
}

export class UpdateCustomerSuccess implements Action {
  readonly type = CustomerActionTypes.UPDATE_CUSTOMER_SUCCESS;

  constructor(public payload: Update<Customer>) {}
}

export class UpdateCustomerFail implements Action {
  readonly type = CustomerActionTypes.UPDATE_CUSTOMER_Fail;

  constructor(public payload: string) {}
}

// DELETE CUSTOMER
export class DeleteCustomer implements Action {
  readonly type = CustomerActionTypes.DELETE_CUSTOMER;

  constructor(public payload: number) {}
}

export class DeleteCustomerSuccess implements Action {
  readonly type = CustomerActionTypes.DELETE_CUSTOMER_SUCCESS;

  constructor(public payload: number) {}
}

export class DeleteCustomerFail implements Action {
  readonly type = CustomerActionTypes.DELETE_CUSTOMER_Fail;

  constructor(public payload: string) {}
}

export type CustomerAction =
  | LoadCustomers
  | LoadCustomerssSuccess
  | LoadCustomerssFail
  | LoadCustomer
  | LoadCustomerSuccess
  | LoadCustomerFail
  | CreateCustomer
  | CreateCustomerSuccess
  | CreateCustomerFail
  | UpdateCustomer
  | UpdateCustomerSuccess
  | UpdateCustomerFail
  | DeleteCustomer
  | DeleteCustomerSuccess
  | DeleteCustomerFail;
