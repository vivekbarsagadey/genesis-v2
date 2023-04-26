'use client';
import React, { useState } from 'react';
import PivotTableUI from 'react-pivottable/PivotTableUI';
import 'react-pivottable/pivottable.css';
import TableRenderers from 'react-pivottable/TableRenderers';
import createPlotlyRenderers from 'react-pivottable/PlotlyRenderers';
import Plot from 'react-plotly.js';

const PlotlyRenderers = createPlotlyRenderers(Plot);


export default function CompanyReportComponent({ companies }: any) {
  const [settings, setSettings] = useState({});

  return (
    <>
      <PivotTableUI
        data={companies}
        onChange={(s) => setSettings(s)}
        cols={['createdAt']}
        rows={[
          'name',
          'address',
          'email',
          'mobile' ]}
        vals={['aos_pax_total']}
        aggregatorName="Integer Sum"
        renderers={Object.assign({}, TableRenderers, PlotlyRenderers)}
        {...settings}
        hiddenAttributes={[
          'pvtRenderers',
          'pvtAxisContainer',
          'pvtVals',
          'pvtAxisContainer',
        ]} 
      />
        </>
  );
    }