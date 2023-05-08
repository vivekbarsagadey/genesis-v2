'use client';

import { Box, Button, Grid } from '@mui/material';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { colors } from '../../../../themes';
import { IDashboardTemplate } from './models';

interface DashBoardTemplateComponentProps {
  dashboard: Array<IDashboardTemplate>;
}

function DashBoardComponentHome({ dashboard }: DashBoardTemplateComponentProps) {
  const [copyDashbaord, setCopyDashbaord] = useState<Array<IDashboardTemplate>>([
    ...dashboard,
  ]);

  const myRef = useRef(null);

  return (
    <Box
      ml={1.5}
      style={{
        backgroundColor: colors.white,
        // borderRadius: border_Radius.borderRadius,
      }}
      pl={2}
      pb={1}
      pt={1}
      mr={2.5}
    >
      <Grid mt={1}>
        <Grid item xs={1} mt={1}>
          <Link
            href="/metadata/template/dashboard/create"
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
    </Box>
  );
}

export default DashBoardComponentHome;
