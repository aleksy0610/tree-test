import React, { useState  } from 'react';

import { FiSettings } from 'react-icons/fi';
import { BiInfoCircle } from 'react-icons/bi';

function CompletedSignUpsHeader(props) {
    const { dataMode, setDataMode } = props;
    return (
        <div className="px-3 py-2 border-bottom d-flex justify-content-between align-items-center">
            <div>
                Completed sign-ups over time
                <span className="ml-2"><BiInfoCircle className="small-icon" data-testid="info-circle" /></span>
            </div>
            <div className="flex-center">
                <select
                    className="mr-2 form-control btn-branch"
                    data-testid="select-date"
                    value={dataMode}
                    onChange={event => setDataMode(event.target.value)}>

                    <option value="0">Choose data sample</option>
                    <option value="1">Last 30 days</option>
                    <option value="2">24 Hours</option>

                </select>
                <FiSettings />
            </div>
        </div>
    )
  }
  
  export default CompletedSignUpsHeader;