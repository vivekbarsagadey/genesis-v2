'use client';

import React, { useState } from 'react';
import PivotTableUI from 'react-pivottable/PivotTableUI';
import 'react-pivottable/pivottable.css';
import TableRenderers from 'react-pivottable/TableRenderers';
import createPlotlyRenderers from 'react-pivottable/PlotlyRenderers';
import Plot from 'react-plotly.js';

// const Plot = createPlotlyComponent(window.Plotly);
const PlotlyRenderers = createPlotlyRenderers(Plot);
export default function ReportButtonComponent({ projects }: any) {
  const [settings, setSettings] = useState({});
  console.log('projects >>at report ', projects);

  return (
    <PivotTableUI
      projects={projects}
      onChange={(s) => setSettings(s)}
      cols={['createdAt']}
      rows={['name', 'customerName', 'application', 'status']}
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
    />
  );
}
