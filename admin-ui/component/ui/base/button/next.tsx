"use client";
import { Button } from "@mui/material";
import React, { useState } from "react";
import { ButtonProps } from "./props";




const NextButtonComponent = ({ label, counter, setCounter,dummydata,counterLength}: ButtonProps) => {
  const [disable, setDisable] = useState(false);
  const nextHandler = () => {
    if (counter < counterLength - 1) {
      setCounter(counter + 1);
    }
    if (counter >= counterLength - 1) {
      setDisable(true);
    }
  };

  return (
    <>
      <Button disabled={disable} onClick={nextHandler}>
        {label}
      </Button>

      {dummydata[counter].content}
    </>
  );
};

export { NextButtonComponent };
