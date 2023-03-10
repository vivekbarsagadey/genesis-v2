"use client";
import { Button } from "@mui/material";
import React, { useState } from "react";
import { ButtonProps } from "./props";

const data = [
  { id: 1, content: "alpha" },
  { id: 2, content: "beta" },
  { id: 3, content: "gyama" },
  { id: 4, content: "delta" },
  { id: 5, content: "theta" },
];

var counterLength = data.length;
const NextButtonComponent = ({ label, counter, setCounter }: ButtonProps) => {
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

      {data[counter].content}
    </>
  );
};

export { NextButtonComponent };
