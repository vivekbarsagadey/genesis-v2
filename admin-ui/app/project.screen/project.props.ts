import IProject from "./project.model";

interface IUserComponentProps {
    items: Array<IProject>;
    itemsCallBackHandler? : (_project: Array<IProject> ) => void;
}

export default IProjectComponentProps