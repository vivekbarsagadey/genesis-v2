'use client';
import React, { use } from 'react';
import TemplateComponent from '.';
import { ITemplates } from './templates.props';
import { findAll } from '../../../services/api.service';

const URL = 'templates';

const Page = () => {
	const template = use<Array<ITemplates>>(findAll(URL));
	return (<TemplateComponent template={template} />);
};

export default Page;