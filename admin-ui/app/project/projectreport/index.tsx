'use client';
import React, { useState } from 'react';
import PivotTableUI from 'react-pivottable/PivotTableUI';
import 'react-pivottable/pivottable.css';
import TableRenderers from 'react-pivottable/TableRenderers';
import createPlotlyRenderers from 'react-pivottable/PlotlyRenderers';
import createPlotlyComponent from 'react-plotly.js/factory';
import Plot from 'react-plotly.js';
import moment from 'moment';

// const Plot = createPlotlyComponent(window.Plotly);
const PlotlyRenderers = createPlotlyRenderers(Plot);
export default function ReportButtonComponent({ projects }: any) {
  const [settings, setSettings] = useState({});
  console.log('projects >>at report ', projects);
  const date = moment(new Date()).format('DD/MM/YYYY');

 

  return (
    <>
      <PivotTableUI
        data={data}
        onChange={(s) => setSettings(s)}
        cols={['createdAt']}
        rows={['name', 'customerName', 'application', 'status']}
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
