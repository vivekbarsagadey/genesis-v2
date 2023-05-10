'use client';

import React, { Suspense, use } from 'react';
import TemplateComponent from '.';
import { ITemplates } from '../models/templates.props';
import { findAll } from '../../../services/api.service';

const URL = 'templates';

function Page() {
  const template = use<Array<ITemplates>>(findAll(URL));
  return (
    <Suspense>
      <TemplateComponent template={template} />
    </Suspense>
  )
}

export default Page;
