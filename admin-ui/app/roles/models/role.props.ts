import { IRole } from './role.model';

interface IRoleComponentProps {
    items: Array<IRole>;
    itemsCallBackHandler? : (_items: Array<IRole>) => void;
}
export type { IRoleComponentProps };
