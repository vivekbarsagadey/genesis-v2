/* eslint-disable import/prefer-default-export */
type ICompany = {
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

};

export type { ICompany };
