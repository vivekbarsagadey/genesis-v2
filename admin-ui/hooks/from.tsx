"use client"
import React from 'react'



type FormStore = {
  name: string;
  value: string;
  errors?: string[];
};

const formStore = new Map<string,FormStore>()
const useForm = () => {
  
  const register = (name: string) => {
    formStore.set(name,{name, value: '',errors:[]})
  };

  const update = ({name,value,errors = []}:FormStore) => {
    formStore.set(name,{name, value,errors})
  };

  const isError = ()=>{
    for(const key of formStore.keys()){
        console.log(key)

    }
}

  return { register, update,isError};
};


export default useForm