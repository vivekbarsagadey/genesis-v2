'use client';
import React, { useEffect, useState } from 'react';
import { use } from 'react';
import WidgetEditComponent from '.';
import { findById } from '../../../../services/api.service';

type Widgets = {
  id: string;
  name: string;
  code: string;
  description: string;
  Query: string;
  Image: string;
};
const Page = ({ params }: any) => {
	const id = params.id;

	const widgets = use<Widgets>(findById('widgets', id));
	return <>{widgets && <WidgetEditComponent widgets={widgets} id={id} />}</>;
};

export default Page;
