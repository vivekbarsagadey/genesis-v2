'use client';

import React, { useState } from 'react';
import PivotTableUI from 'react-pivottable/PivotTableUI';
import 'react-pivottable/pivottable.css';
import TableRenderers from 'react-pivottable/TableRenderers';
import createPlotlyRenderers from 'react-pivottable/PlotlyRenderers';
import Plot from 'react-plotly.js';
import { Grid } from '@mui/material';

const PlotlyRenderers = createPlotlyRenderers(Plot);
function CompanyReportComponent({ company }: any) {
  const [settings, setSettings] = useState({});

  return (
    
    <Grid ml={2} mt={2}>
      <PivotTableUI
        data={company}
        onChange={(s) => setSettings(s)}
        cols={['createdAt']}
        rows={['name', 'firstName', 'lastName', 'email', 'mobile', 'address']}
        vals={['aos_pax_total']}
        aggregatorName="Integer Sum"
        renderers={{ ...TableRenderers, ...PlotlyRenderers }}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...settings}
        hiddenAttributes={[
          'pvtRenderers',
          'pvtAxisContainer',
          'pvtVals',
          'pvtAxisContainer',
        ]}
        hiddenFromAggregators={['id', 'companyid']}
      />
    </Grid>
  );
}

export default CompanyReportComponent;
