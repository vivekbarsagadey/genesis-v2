type IProjects = {
  id: string;
  name: string;
  firstName: string;
  lastName: string;
  mobile: string;
  email: string;
  address?: string;
  country?: string;
  state?: string;
  city?: string;
  pincode?: string;
  website?: string;
  createdAt: number;
  updatedAt: number;
  status: string;
  ownerName: string;
  items:string;
  customerName:string;
  application:string;
  copyProjectData:string;

};

export type { IProjects };
