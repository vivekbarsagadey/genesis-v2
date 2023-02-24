import IProject from "./project.model";

interface IProjectComponentProps {
    items: Array<IProject>;
    itemsCallBackHandler? : (_project: Array<IProject> ) => void;
}

export default IProjectComponentProps