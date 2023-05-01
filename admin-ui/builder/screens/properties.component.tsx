import { Grid, Typography } from '@mui/material';

import React, { useState } from 'react';
import { Case, Switch } from 'react-if';
import { ProjectContext } from '..';
import genisys from '../../data/genisys.json';
import ButtonApiComponent from '../components/button/api.component';
import ButtonCssComponent from '../components/button/css.component';
import ButtonModelComponent from '../components/button/model.component';
import ButtonPropertiesComponent from '../components/button/properties.component';
import CheckboxApiComponent from '../components/checkbox/api.component';
import CheckboxCssComponent from '../components/checkbox/css.component';
import CheckboxModelComponent from '../components/checkbox/model.component';
import CheckboxPropertiesComponent from '../components/checkbox/properties.component';
import ConfirmPasswordApiComponent from '../components/confirm.password/api.component';
import ConfirmPasswordCssComponent from '../components/confirm.password/css.component';
import ConfirmPasswordModelComponent from '../components/confirm.password/model.component';
import ConfirmPasswordPropertiesComponent from '../components/confirm.password/properties.component';
import DropdownApiComponent from '../components/dropdown/api.component';
import DropdownCssComponent from '../components/dropdown/css.component';
import DropdownModelComponent from '../components/dropdown/model.component';
import DropdownPropertiesComponent from '../components/dropdown/properties.component';
import EmailApiComponent from '../components/email/api.component';
import EmailCssComponent from '../components/email/css.component';
import EmailModelComponent from '../components/email/model.component';
import EmailPropertiesComponent from '../components/email/properties.component';
import NumberApiComponent from '../components/number/api.component';
import NumberCssComponent from '../components/number/css.component';
import NumberModelComponent from '../components/number/model.component';
import NumberPropertiesComponent from '../components/number/properties.component';
import PasswordApiComponent from '../components/password/api.component';
import PasswordCssComponent from '../components/password/css.component';
import PasswordModelComponent from '../components/password/model.component';
import PasswordPropertiesComponent from '../components/password/properties.component';
import TextApiComponent from '../components/text/api.component';
import TextCssComponent from '../components/text/css.component';
import TextModelComponent from '../components/text/model.component';
import TextPropertiesComponent from '../components/text/properties.component';

function PropertiesComponent() {
  const value = React.useContext(ProjectContext); // component id
  const [sectionType, setSectionType] = useState<string>('');
  const updateSection = (typeRecv: string) => {
    setSectionType(typeRecv);
  };

  const getComponentMetaData = genisys?.component.filter(
    (ele) => ele.id == value,
  );
  const metaData = getComponentMetaData[0];

  return (
    <Grid container>
      <Grid
        item
        xs={12}
        style={{ background: '#e2e8f0', padding: '0.3rem', display: 'flex' }}
      >
        <Grid item xs={4}>
          <Typography
            onClick={() => updateSection('properties')}
            style={{ cursor: 'pointer' }}
            textAlign="center"
          >
            Properties
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography
            onClick={() => updateSection('css')}
            style={{ cursor: 'pointer' }}
            textAlign="center"
          >
            Css
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography
            onClick={() => updateSection('model')}
            style={{ cursor: 'pointer' }}
            textAlign="center"
          >
            Model
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography
            onClick={() => updateSection('api')}
            style={{ cursor: 'pointer' }}
            textAlign="center"
          >
            Api
          </Typography>
        </Grid>
      </Grid>

      <Switch>
        <Case condition={sectionType === 'properties'}>
          <Switch>
            <Case condition={value === 'buttons'}>
              <ButtonPropertiesComponent
                metaData={metaData?.property}
                sectionType={sectionType}
              />
            </Case>
            <Case condition={value === 'emails'}>
              <EmailPropertiesComponent metaData={metaData?.property} />
            </Case>
            <Case condition={value === 'passwords'}>
              <PasswordPropertiesComponent metaData={metaData?.property} />
            </Case>
            <Case condition={value === 'cnfrmpasswords'}>
              <ConfirmPasswordPropertiesComponent
                metaData={metaData?.property}
              />
            </Case>
            <Case condition={value === 'numbers'}>
              <NumberPropertiesComponent metaData={metaData?.property} />
            </Case>
            <Case condition={value === 'checkboxes'}>
              <CheckboxPropertiesComponent metaData={metaData?.property} />
            </Case>
            <Case condition={value === 'dropdowns'}>
              <DropdownPropertiesComponent metaData={metaData?.property} />
            </Case>
            <Case condition={value === 'text'}>
              <TextPropertiesComponent metaData={metaData?.property} />
            </Case>
          </Switch>
        </Case>
        <Case condition={sectionType === 'css'}>
          <Switch>
            <Case condition={value === 'buttons'}>
              <ButtonCssComponent metaData={metaData?.css} />
            </Case>
            <Case condition={value === 'emails'}>
              <EmailCssComponent metaData={metaData?.css} />
            </Case>
            <Case condition={value === 'passwords'}>
              <PasswordCssComponent metaData={metaData?.css} />
            </Case>
            <Case condition={value === 'cnfrmpasswords'}>
              <ConfirmPasswordCssComponent metaData={metaData?.css} />
            </Case>
            <Case condition={value === 'numbers'}>
              <NumberCssComponent metaData={metaData?.css} />
            </Case>
            <Case condition={value === 'checkboxes'}>
              <CheckboxCssComponent metaData={metaData?.css} />
            </Case>
            <Case condition={value === 'dropdowns'}>
              <DropdownCssComponent metaData={metaData?.css} />
            </Case>
            <Case condition={value === 'text'}>
              <TextCssComponent metaData={metaData?.css} />
            </Case>
          </Switch>
        </Case>
        <Case condition={sectionType === 'model'}>
          <Switch>
            <Case condition={value === 'buttons'}>
              <ButtonModelComponent metaData={metaData?.model} />
            </Case>
            <Case condition={value === 'emails'}>
              <EmailModelComponent metaData={metaData?.model} />
            </Case>
            <Case condition={value === 'passwords'}>
              <PasswordModelComponent metaData={metaData?.model} />
            </Case>
            <Case condition={value === 'cnfrmpasswords'}>
              <ConfirmPasswordModelComponent metaData={metaData?.model} />
            </Case>
            <Case condition={value === 'numbers'}>
              <NumberModelComponent metaData={metaData?.model} />
            </Case>
            <Case condition={value === 'checkboxes'}>
              <CheckboxModelComponent metaData={metaData?.model} />
            </Case>
            <Case condition={value === 'dropdowns'}>
              <DropdownModelComponent metaData={metaData?.model} />
            </Case>
            <Case condition={value === 'text'}>
              <TextModelComponent metaData={metaData?.model} />
            </Case>
          </Switch>
        </Case>
        <Case condition={sectionType === 'api'}>
          <Switch>
            <Case condition={value === 'buttons'}>
              <ButtonApiComponent metaData={metaData?.api} />
            </Case>
            <Case condition={value === 'emails'}>
              <EmailApiComponent metaData={metaData?.api} />
            </Case>
            <Case condition={value === 'passwords'}>
              <PasswordApiComponent metaData={metaData?.api} />
            </Case>
            <Case condition={value === 'cnfrmpasswords'}>
              <ConfirmPasswordApiComponent metaData={metaData?.api} />
            </Case>
            <Case condition={value === 'numbers'}>
              <NumberApiComponent metaData={metaData?.api} />
            </Case>
            <Case condition={value === 'checkboxes'}>
              <CheckboxApiComponent metaData={metaData?.api} />
            </Case>
            <Case condition={value === 'dropdowns'}>
              <DropdownApiComponent metaData={metaData?.api} />
            </Case>
            <Case condition={value === 'text'}>
              <TextApiComponent metaData={metaData?.api} />
            </Case>
          </Switch>
        </Case>
      </Switch>
    </Grid>
  );
}
export default PropertiesComponent;
