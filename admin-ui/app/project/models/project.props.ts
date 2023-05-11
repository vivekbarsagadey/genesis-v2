/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import IProject from '../project.model';

interface IProjectComponentProps {
  items: Array<IProject>;
  itemsCallBackHandler?: (_items: Array<IProject>) => void;
}
export type { IProjectComponentProps };
