import React, { useState  } from 'react';
import CanvasJSReact from '../lib/canvasjs.react';
import { FiArrowUp, FiSettings } from 'react-icons/fi';
import { BiInfoCircle } from 'react-icons/bi';
import { options_1, options_2 } from '../MockData';
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

function CompletedSignUps() {

  const [dataMode, setDataMode] = useState("1");
  return (
    <div className="px-5 pt-5 pb-3">
      <div className="bg-white border-rounded">
        <div className="px-3 py-2 border-bottom d-flex justify-content-between align-items-center">
          <div>
            Completed sign-ups over time
                                <span className="ml-2"><BiInfoCircle className="small-icon" /></span>
          </div>
          <div className="flex-center">
            <select
              className="mr-2 form-control btn-branch"
              value={dataMode}
              onChange={event => setDataMode(event.target.value)}
            >
              <option value="0">Choose data sample</option>
              <option value="1">Last 30 days</option>
              <option value="2">24 Hours</option>
            </select>
            <FiSettings />
          </div>
        </div>
        <div className="p-3">
          <div className="d-flex">
            <div className="side-part">
              <div className="display-4 font-weight-bold">1327</div>
              <div className="font-weight-bold p-1">Sign-ups completed</div>
              <div className="d-flex align-items-center">
                <div className="up-arrow-icon flex-center">
                  <FiArrowUp className="text-success" />
                </div>
                <div className="small ml-2">You have a 11% growth in comparison with previous
                month.
                    </div>
              </div>
            </div>
            <div className="graph-part p-3">
              <CanvasJSChart options={dataMode === "1" ? options_1 : options_2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompletedSignUps;
