'use client';

import React, { use } from 'react';
import { findAll } from '../../../../services/api.service';
import { IWidgets } from './widgets.props';
import WidgetsHomeComponents from '.';

const URL = 'widgets';

const page = () => {
  const widgets = use<Array<IWidgets>>(findAll(URL));
  return <WidgetsHomeComponents widgets={widgets} />;
};

export default page;
