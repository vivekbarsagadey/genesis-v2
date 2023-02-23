import { useState, useEffect } from 'react';

interface InputHolder {
  name: string;
  value: string;
}
const form: Map<string, any> = new Map();

const useForm = () => {
  const [message, setMessage] = useState('');

  const register = (f: InputHolder) => {
    // console.log('>>>>', f.name);
    // console.log('set value', form.set(f.name, f.value));
    
    form.set(f.name, f.value);

    return update;
  };

  useEffect(() => {
    setMessage('This is test message');
  }, []);

  const update = (f: InputHolder) => {
    console.log('update call', f.name, form.get(f.value).name);

    form.get(f.name).value = f.value;
    console.log(form.get(f.name).value);
    
  };

  const submit = () => {
    console.log('this is form',form);
    form.forEach((f) => {
      console.log('this is f from', f);
    });
  };

  return { message, register, submit, update };
};

export { useForm };