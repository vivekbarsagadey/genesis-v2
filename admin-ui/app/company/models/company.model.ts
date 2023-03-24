type ICompany ={
  _id: String;
  name: String;
  firstName: String;
  lastName: String;
  mobile: String;
  email: String;
  address?: String;
  country?: String;
  state?: String;
  city?: String;
  pincode?: String;
  website?: String;
  createdAt:number;
  updatedAt:number;
  
}

export default ICompany;
