import Button from '@mui/material/Button';
import React from 'react'
import { ButtonProps } from './props';

const SaveButtonComponent = ({label}:ButtonProps) => {

  const handleSubmit = (event:any) => {
    event.preventDefault();
  
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: "",
      })
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  };
  
  return (
    <>
      <form onSubmit={handleSubmit}>
    <Button type='submit'>{label}</Button>
  </form>
    </>
  )
}

export {SaveButtonComponent}