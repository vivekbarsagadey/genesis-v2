'use client';

import { Box, Button, Grid } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import { border_Radius, colors } from '../../../../themes';
import { ViewTypes } from '../../../utility';
import DashBoardTemplateListScreen from './list/list.screen';
import { IDashboardTemplate } from './models';

interface DashBoardTemplateComponentProps {
  dashboard: Array<IDashboardTemplate>;
}

function DashBoardComponentHome({ dashboard }: DashBoardTemplateComponentProps) {
  const [copyDashbaord, setCopyDashbaord] = useState<Array<IDashboardTemplate>>([
    ...dashboard,
  ]);
  const [viewType, setViewType] = useState<ViewTypes>(ViewTypes.LIST);
  const [show, setShow] = useState(false);
  const onSearchHandler = (c: Array<IDashboardTemplate>) => {
    setCopyDashbaord(c);
  };

  const onViewSelect = (view: ViewTypes) => {
    setViewType(view);
  };

  const myRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => myRef.current,
  });
  const router = useRouter();

  return (
    <Box
      ml={1.5}
      style={{
        backgroundColor: colors.white,
        borderRadius: border_Radius.borderRadius,
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
