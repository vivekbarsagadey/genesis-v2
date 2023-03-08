import React from 'react'
import {NextButtonComponent} from './next';
import { PreviousButtonComponent } from './previous';
import { ButtonProps } from './props';
import { SaveButtonComponent } from './save';

const ButtonComponent = (props:ButtonProps) => {
    if (props.label == "next") {
        return <NextButtonComponent {...props} />;
      }
    if (props.label == "previous") {
        return <PreviousButtonComponent {...props} />;
      }
    if (props.label == "save") {
        return <SaveButtonComponent {...props} />;
      }
     
  return (
    <>
    </>
  )
}

export {ButtonComponent}