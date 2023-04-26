'use client';
import React, { useState } from 'react';
import PivotTableUI from 'react-pivottable/PivotTableUI';
import 'react-pivottable/pivottable.css';
import TableRenderers from 'react-pivottable/TableRenderers';
import Plot from 'react-plotly.js';
import createPlotlyRenderers from 'react-pivottable/PlotlyRenderers';

const PlotlyRenderers = createPlotlyRenderers(Plot);

const CustomerReportComponent = ({ customer }: any) => {
    const [settings, setSettings] = useState({});
  return (
    <div>
       <PivotTableUI
        data={customer}
        onChange={(s) => setSettings(s)}
        cols={["createdAt"]}
        rows={["firstName", "lastName","address","country",'mobile']}
        vals={["aos_pax_total"]}
        aggregatorName="Integer Sum"
         renderers={Object.assign({}, TableRenderers, PlotlyRenderers)}
        {...settings}
        hiddenAttributes={[
          "pvtRenderers",
          "pvtAxisContainer",
          "pvtVals",
          "pvtAxisContainer"
        ]}
        hiddenFromAggregators={["id", "companyid"]}
      /> 
    </div>
  );
};

export default CustomerReportComponent;
