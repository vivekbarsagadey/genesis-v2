import ICompany from "./company.model";

interface ICompanyComponentProps {
    items: Array<ICompany>;
    itemsCallBackHandler? : (_items: Array<ICompany> ) => void;
}

export default ICompanyComponentProps