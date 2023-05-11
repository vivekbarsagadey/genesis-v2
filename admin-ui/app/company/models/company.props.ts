/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import { ICompany } from './company.model';

interface ICompanyComponentProps {
  items: Array<ICompany>;
  itemsCallBackHandler?: (_items: Array<ICompany>) => void;
}
export type { ICompanyComponentProps };
