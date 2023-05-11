/* eslint-disable import/prefer-default-export */
type IProject = {
  id: string;
  name: string;
  firstName: string;
  lastName: string;
  mobile: string;
  email: string;
  address?: any;
  country?: string;
  state?: string;
  city?: string;
  pincode?: string;
  website?: string;
  createdAt: number;
  updatedAt: number;
  status: string;
};

export type { IProject };
