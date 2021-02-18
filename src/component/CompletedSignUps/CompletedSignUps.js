import React, { useState  } from 'react';
import CanvasJSReact from '../../lib/canvasjs.react';

import { options_1, options_2 } from '../../MockData';

import CompletedSignUpsHeader from './CompletedSignUpsHeader';
import CompletedSignUpsLeft from './CompletedSignUpsLeft';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

function CompletedSignUps({NODE_ENV}) {

  const [dataMode, setDataMode] = useState("1");
  return (
    <div className="px-5 pt-5 pb-3">
      <div className="bg-white border-rounded">
        <CompletedSignUpsHeader
          dataMode={dataMode}
          setDataMode={(e) => setDataMode(e)}
        />
        <div className="p-3">
          <div className="d-flex">
            <CompletedSignUpsLeft/>
            <div className="graph-part p-3">
              <CanvasJSChart NODE_ENV={NODE_ENV} options={dataMode === "1" ? options_1 : options_2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompletedSignUps;
