export interface IMenuListSet {
    id: string ;
    name: string;
    icon: string;
    lable: string;
    components: IComponents[];
  }
  
  export interface IComponents {
    id: string;
    name: string;
    image: string;
    lable: string;
    icon: string;
    properties: IProperties[];
  }
  
  export interface IProperties {
    general: IGeneral[];
    css: ICss[];
    model: IModel[];
    api: IApi[];
  }
  export interface IGeneral {
    position: string;
    width: string;
    height: string;
    overflowY: string;
    background: string;
    borderradius: string;
  }
  export interface ICss {
    position: string;
    width: string;
    height: string;
    overflowY: string;
    background: string;
    borderradius: string;
  }
  export interface IModel {
    position: string;
    width: string;
    
  }
  export interface IApi {
      url:string;
  }
  