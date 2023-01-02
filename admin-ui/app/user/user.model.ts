
interface IUser{
    _id:string;
    firstName: string;
    lastName: string;
    email: string;
    mobile: string;
    address: string;
    state: string;
    country: string;
    pinCode: string;
    name ?:string
}


export default IUser