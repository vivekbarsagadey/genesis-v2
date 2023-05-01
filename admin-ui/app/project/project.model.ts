import moment from 'moment';

interface IProject {
  id: string;
  updatedAt: number;
  name: string;
  customerName: string;
  state: string;
  country: string;
  application: string;
  status: string;
  length: number;
  projectJson: JSON;
  email: string;
  createdAt: string;
  moment: any;
}

export default IProject;
