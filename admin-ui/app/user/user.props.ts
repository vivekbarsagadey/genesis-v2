import IUser from "./user.model";

interface IUserComponentProps {
    items: Array<IUser>;
    itemsCallBackHandler? : (_items: Array<IUser> ) => void;
}

export default IUserComponentProps