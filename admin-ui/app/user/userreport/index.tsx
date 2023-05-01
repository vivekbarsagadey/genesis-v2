'use client';

import React, { useState } from 'react';
import PivotTableUI from 'react-pivottable/PivotTableUI';
import 'react-pivottable/pivottable.css';
import TableRenderers from 'react-pivottable/TableRenderers';
import Plot from 'react-plotly.js';
import createPlotlyRenderers from 'react-pivottable/PlotlyRenderers';

const PlotlyRenderers = createPlotlyRenderers(Plot);
function UserReportComponent({ user }:any) {
	const [settings, setSettings] = useState({});
	return (
  <div>
  <PivotTableUI
  data={user}
  onChange={(s) => setSettings(s)}
  cols={['createdAt']}
  rows={['firstName', 'lastName', 'address', 'country', 'mobile', 'name']}
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
			/>
		</div>
	);
}

export default UserReportComponent;
