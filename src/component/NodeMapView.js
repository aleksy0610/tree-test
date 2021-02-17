import React, { useState } from 'react';
import { nodeMap1, NodeMap2 } from '../MockData';
import { FiArrowDownCircle, FiSettings } from 'react-icons/fi';
import { BiInfoCircle } from 'react-icons/bi';

function NodeMapView() {

  const [dataMode, setDataMode] = useState("0");
  const [nodeMap, setNodeMap] = useState(nodeMap1);
  const deepFirstLoop = (obj, key) => {
		if (obj[key].adjList.length < 1) return [key];
		return [key, ...obj[key].adjList.reduce((prev, next) => {
			return [...prev, ...deepFirstLoop(obj, next)];
		}, [])];
	};
	const sortedKeys = deepFirstLoop(nodeMap, "node1");
  const changeOption = (value) => {
    setDataMode(value);
    setNodeMap(value === '0' ? nodeMap1 : NodeMap2);
  }

	const getDecreaseRate = (currentKey, nextKey) => {
		const currentValue = nodeMap[currentKey]?.value;
		const nextValue = nodeMap[nextKey]?.value;
		return ((nextValue - currentValue) * 100 / currentValue).toFixed(1);
	}

  return (
    <div className="px-5 pt-2 pb-5">
      <div className="bg-white border-rounded">
        <div className="px-3 py-2 border-bottom d-flex justify-content-between align-items-center">
          <div>
            Flow dropout per step and service
            <span className="ml-2"><BiInfoCircle className="small-icon" /></span>
          </div>
          <div className="flex-center">
            <select 
              className="mr-2 form-control btn-branch"
              value={dataMode}
              onChange={event => changeOption(event.target.value)}>
              <option value="0">Node1</option>
              <option value="1">Node2</option>
            </select>
            <FiSettings />
          </div>
        </div>
        <div className="p-5 bar-chart-wrapper d-flex">
          {sortedKeys.map((currentKey, idx) => {
            const nextKey = sortedKeys[idx + 1];

            return (
              <div key={`${idx}`} className="chart-item d-flex">
                <div>
                  <div className="bar-box flex-center">
                    <div
                      className="bar flex-center"
                      style={{
                        backgroundColor: nodeMap[currentKey].type === 'SERVICE' ? '#d4eeea' : '#d7ebff',
                        height: `${nodeMap[currentKey].value}%`
                      }}
                    >
                      <div className="bar-content">
                        {nodeMap[currentKey].label}
                      </div>
                    </div>
                  </div>
                  <div className="bar-label flex-center">
                    {nodeMap[currentKey].value}%
                  </div>
                </div>
                {idx < (sortedKeys.length - 1) && (
                  <div>
                    <div className="bar-box flex-center px-3">
                      <div className="decrease-icon-box flex-center">
                        <FiArrowDownCircle />
                        <div className="decrease-rate">
                          {getDecreaseRate(currentKey, nextKey)}%
                        </div>
                      </div>
                    </div>
                    <div className="bar-label" />
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>

  )
}

export default NodeMapView;
