'use client';

import React, { useState } from 'react';
import PivotTableUI from 'react-pivottable/PivotTableUI';
import 'react-pivottable/pivottable.css';
import TableRenderers from 'react-pivottable/TableRenderers';
import createPlotlyRenderers from 'react-pivottable/PlotlyRenderers';
import Plot from 'react-plotly.js';

const PlotlyRenderers = createPlotlyRenderers(Plot);
function CompanyReportComponent({ company }:any) {
	const [settings, setSettings] = useState({});

	return (
  <div>
  <PivotTableUI
  data={company}
  onChange={(s) => setSettings(s)}
  cols={['createdAt']}
  rows={['name', 'firstName', 'lastName', 'email', 'mobile', 'address']}
  vals={['aos_pax_total']}
  aggregatorName="Integer Sum"
  renderers={({ ...TableRenderers, ...PlotlyRenderers })}
  {...settings}
  hiddenAttributes={[
					'pvtRenderers',
					'pvtAxisContainer',
					'pvtVals',
					'pvtAxisContainer',
				]}
  hiddenFromAggregators={['id', 'companyid']}
			/>
		</div>
	);
}

export default CompanyReportComponent;
