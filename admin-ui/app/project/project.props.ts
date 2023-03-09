import IProject from "./project.model";

interface IProjectComponentProps {
    items: Array<IProject>;
    itemsCallBackHandler? : ((_items: Array<IProject> ) => void
};

export default IProjectComponentProps