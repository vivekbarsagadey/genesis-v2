import React, { useState, useEffect } from "react";

interface FormItem {
  value?: string;
  name?: string;
  isValid?: boolean;
}

const useForm = () => {
  const [formItems, setFormItems] = useState<FormItem[]>([]);
  //const [formState, register] = useState<string>("");

  const register = (name: string) => {
    const formItem: FormItem = { name, value: "", isValid: true };
    formItems.push(formItem);
    return formItem;
  };

  const formState = (name: string) => {
    return formItems?.find((f) => f.name === name);
  };

  return { formState, register };
};

export { useForm };
