'use client';

import { InputComponent } from '../../component/ui/base/input';
import { useForm } from '../../hooks/from';

function TestComponent() {
	const { register } = useForm();
	return (
  <>
  <InputComponent
  type="email"
  placeHolder="Enter             email"
  label="Email"
  id="email"
  register={register}
			/>
			<InputComponent
      type="number"
      placeHolder="Enter number"
      label="Number"
      id="number"
    />

  <InputComponent
  type="password"
  placeHolder="Enter Password"
  label="Password"
  id="password"
			/>

  <InputComponent
  type="text"
  placeHolder="Enter Text"
  label="Text"
  id="text"
			/>

		</>
	);
}

const page = () => (
  <TestComponent />
);

export default page;
