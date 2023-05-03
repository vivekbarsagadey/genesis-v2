{% set app_cap = app['name'].capitalize() -%}
{% set app_Sm = app['name'] -%}

'use client';

import React, { use } from 'react';
import {{app_cap}}ComponentHome from '.';
import { findAll } from '../../services/api.service';
import { I{{app_cap}} } from './models/{{app_Sm}}.model';

const URL = '{{app_Sm}}';

function Page() {
  const {{app_Sm}} = use<Array<I{{app_cap}}>>(findAll(URL));
  return <{{app_cap}}ComponentHome {{app_Sm}}={ {{app_Sm}} } />;
}

export default Page;
