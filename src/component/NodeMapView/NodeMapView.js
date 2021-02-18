import React, { useState } from 'react';
import { nodeMap1, NodeMap2 } from '../../MockData';
import { FiArrowDownCircle, FiSettings } from 'react-icons/fi';
import { BiInfoCircle } from 'react-icons/bi';
import NodeMapViewHeader from './NodeMapViewHeader';

function NodeMapView() {
  const [nodeMap, setNodeMap] = useState(nodeMap1);
  const leaves = Object.keys(nodeMap).filter(key => !nodeMap[key].adjList.length);
  const [dataMode, setDataMode] = useState(leaves[0]);

  const root = Object.keys(nodeMap)[0];
  const routeFromRoot = (obj, target, key = root) => {
    if (key === target) {
      return [key];
    }
    if (obj[key].adjList.length < 1) return [];

    const childRoute = obj[key].adjList.reduce((prev, next) => {
      const childRoute = routeFromRoot(obj, target, next);
      return [...prev, ...childRoute];
    }, []);
    if (childRoute.length) return [key, ...childRoute];
    return [];
  };

  const sortedKeys = routeFromRoot(nodeMap, dataMode);
  const changeOption = (value) => {
    setDataMode(value);
  }

  const getDecreaseRate = (currentKey, nextKey) => {
    const currentValue = nodeMap[currentKey]?.value;
    const nextValue = nodeMap[nextKey]?.value;
    return ((nextValue - currentValue) * 100 / currentValue).toFixed(1);
  }

  return (
    <div className="px-5 pt-2 pb-5">
      <div className="bg-white border-rounded">

        <NodeMapViewHeader
          dataMode={dataMode}
          modes={leaves}
          changeOption={(e) => changeOption(e)}
        />

        <div className="p-5 bar-chart-wrapper d-flex" data-testid="bar-chart-wrapper">
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
