import { IDashboardTemplate } from './dashboard.model';

interface IDashboardTemplateComponentProps {
  items: Array<IDashboardTemplate>;
  itemsCallBackHandler?: (_items: Array<IDashboardTemplate>) => void;
}
export type { IDashboardTemplateComponentProps };
