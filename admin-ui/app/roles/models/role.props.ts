/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import { IRole } from './role.model';

interface IRoleComponentProps {
  items: Array<IRole>;
  itemsCallBackHandler?: (_items: Array<IRole>) => void;
}
export type { IRoleComponentProps };
