
import React,{use} from 'react';
import SignIn from '.';
import { findAll } from '../../services/api.service';

const URL = 'user';
const page = () => {
	const userInfo = use(findAll(URL));
	return <SignIn    userInfo={userInfo} />;
};

export default page;
