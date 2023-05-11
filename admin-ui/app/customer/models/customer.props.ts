/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import { ICustomer } from './customer.model';

interface ICustomerComponentProps {
  items: Array<ICustomer>;
  itemsCallBackHandler?: (_items: Array<ICustomer>) => void;
}
export type { ICustomerComponentProps };
