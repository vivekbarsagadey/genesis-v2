'use client';
import { Box, Button, Grid } from '@mui/material';
import Link from 'next/link';
import React, { useState } from 'react';
import WidgetsList from './widgets.list';
import { ITemplates } from './templates.props';
import WidgetsGridCol from './widgets.grid.col';
import { Case, Switch } from 'react-if';

const TemplateComponent = ({ template }: ITemplates) => {
  const [copyTemplates, setCopyTemplates] = useState<Array<ITemplates>>([
    ...template,
  ]);

  console.log('templatetemplate', copyTemplates);

  return (
    <Box mt={1} ml={1.5}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Link
            href={'/metadatadashboard/templates/create'}
            passHref
            style={{ textDecoration: 'none' }}
          >
            <Button variant="contained" size="small">
              Create
              <span>+</span>
            </Button>
          </Link>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} spacing={1}>
          {copyTemplates.map((item: any, index: any) => {
            const val = Number(item.column);

            return (
              <Grid
                item
                xs={12}
                key={index}
                p={2}
                mt={1}
                style={{ border: '1px solid black' }}
              >
                <Switch>
                  <Case condition={val == 1}>
                    <Grid item xs={12}>
                      +
                    </Grid>
                  </Case>
                  <Case condition={val == 2}>
                    <Grid item xs={6}>
                      +
                    </Grid>
                    <Grid item xs={6}>
                      +
                    </Grid>
                  </Case>
                  <Case condition={val == 3}>
                    <Grid item xs={4}>
                      +
                    </Grid>
                    <Grid item xs={4}>
                      +
                    </Grid>
                    <Grid item xs={4}>
                      +
                    </Grid>
                  </Case>
                  <Case condition={val == 4}>
                    <Grid container spacing={1}>
                      <Grid item xs={3}>
                        +
                      </Grid>
                      <Grid item xs={3}>
                        +
                      </Grid>
                      <Grid item xs={3}>
                        +
                      </Grid>
                      <Grid item xs={3}>
                        +
                      </Grid>
                    </Grid>
                  </Case>
                </Switch>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Box>
  );
};

export default TemplateComponent;
