import IUser from "../user.model";


const deleteUser =async(item:IUser)=>{
       await fetch(`${process.env.NEXT_PUBLIC_API_URL}\\users/${item._id}`, {
      method: "DELETE",
    });
}

const createUser = async (_user:IUser)=>{
  const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(_user),
      };
      await  fetch(`${process.env.NEXT_PUBLIC_API_URL}\\users`, requestOptions)
    
}

const updateUser = async (newUser:IUser)=>{
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newUser),
  }
   await fetch(`${process.env.NEXT_PUBLIC_API_URL}\\users/${newUser._id}`,requestOptions)
     
}

export {deleteUser, createUser, updateUser}