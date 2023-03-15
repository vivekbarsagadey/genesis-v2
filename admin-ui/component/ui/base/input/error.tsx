"use client";
import { InputStyle } from "./";

interface ErrorComponentProps {
  message: string;
}

const ErrorComponent = ({ message }: ErrorComponentProps) => {
  return <p style={InputStyle.error.item}>{message}</p>;
};

export { ErrorComponent };
