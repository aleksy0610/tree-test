import React, { useState } from 'react';
import { nodeMap1, NodeMap2 } from '../../MockData';
import { FiArrowDownCircle, FiSettings } from 'react-icons/fi';
import { BiInfoCircle } from 'react-icons/bi';

function NodeMapViewHeader(props) {

    const { dataMode, changeOption, modes } = props;

    return (
        <div className="px-3 py-2 border-bottom d-flex justify-content-between align-items-center">
            <div>
                Flow dropout per step and service
                <span className="ml-2"><BiInfoCircle className="small-icon" data-testid="info-circle" /></span>
            </div>
            <div className="flex-center">
                <select
                    className="mr-2 form-control btn-branch"
                    data-testid="select-node"
                    value={dataMode}
                    onChange={event => changeOption(event.target.value)}>
                    {
                        modes.map(mode =>
                            <option value={mode}>{mode}</option>
                        )
                    }
                </select>
                <FiSettings />
            </div>
        </div>
    )
}

export default NodeMapViewHeader;
