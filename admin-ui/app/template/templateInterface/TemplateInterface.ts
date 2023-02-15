export interface IMenuListSet {
    id: String ;
    name: String;
    icon: String;
    lable: String;
    components: IComponents[];
  }
  
  export interface IComponents {
    id: String;
    name: String;
    image: String;
    lable: String;
    icon: String;
    properties: IProperties[];
  }
  
  export interface IProperties {
    general: IGeneral[];
    css: ICss[];
    model: IModel[];
    api: IApi[];
  }
  export interface IGeneral {
    position: String;
    width: String;
    height: String;
    overflowY: String;
    background: String;
    borderradius: String;
  }
  export interface ICss {
    position: String;
    width: String;
    height: String;
    overflowY: String;
    background: String;
    borderradius: String;
  }
  export interface IModel {
    position: String;
    width: String;
    
  }
  export interface IApi {
      url:String;
  }
  