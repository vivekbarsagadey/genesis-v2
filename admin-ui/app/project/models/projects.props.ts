import {IProjects } from './projects.model';

interface IProjectsComponentProps {
  projects: Array<IProjects>;
  itemsCallBackHandler?: (_items: Array<IProjects>) => void;
}
export type { IProjectsComponentProps };
