const options_1 = {
  theme: "light2",
  animationEnabled: true,
  axisX: {
    valueFormatString: "MMM DD",
    tickLength: 10,
    tickColor: "white",
    lineDashType: "dot",
  },
  axisY: {
    suffix: "k",
    gridDashType: "dot",
  },
  data: [{
    xValueFormatString: "MMMM",
    type: "spline",
    dataPoints: [
      { x: new Date(2017, 9, 1), y: 1.5060 },
      { x: new Date(2017, 9, 2), y: 2.7980 },
      { x: new Date(2017, 9, 3), y: 4.2800 },
      { x: new Date(2017, 9, 4), y: 3.2400 },
      { x: new Date(2017, 9, 5), y: 3.5260 },
      { x: new Date(2017, 9, 6), y: 2.3900 },
      { x: new Date(2017, 9, 7), y: 4.5000 },
      { x: new Date(2017, 9, 8), y: 5.2500 },
      { x: new Date(2017, 9, 9), y: 3.2300 },
      { x: new Date(2017, 9, 10), y: 4.2000 },
      { x: new Date(2017, 9, 11), y: 3.7160 },
      { x: new Date(2017, 9, 12), y: 3.8400 }
    ]
  }]
};

const options_2 = {
  theme: "light2",
  animationEnabled: true,
  axisX: {
    valueFormatString: "hh TT K",
    tickLength: 10,
    tickColor: "white",
    lineDashType: "dot",
  },
  axisY: {
    suffix: "k",
    gridDashType: "dot",
  },
  data: [{
    // xValueFormatString: "MMMM",
    type: "spline",
    dataPoints: [
      { x: new Date(2017, 9, 1, 1, 0), y: 5.5060 },
      { x: new Date(2017, 9, 1, 2, 0), y: 3.7980 },
      { x: new Date(2017, 9, 1, 3, 0), y: 4.2800 },
      { x: new Date(2017, 9, 1, 4, 0), y: 4.8400 },
      { x: new Date(2017, 9, 1, 5, 0), y: 6.5260 },
      { x: new Date(2017, 9, 1, 6, 0), y: 2.3900 },
      { x: new Date(2017, 9, 1, 7, 0), y: 2.7000 },
      { x: new Date(2017, 9, 1, 8, 0), y: 5.2500 },
      { x: new Date(2017, 9, 1, 9, 0), y: 3.2300 },
      { x: new Date(2017, 9, 1, 10, 0), y: 4.2000 },
      { x: new Date(2017, 9, 1, 11, 0), y: 3.7160 },
      { x: new Date(2017, 9, 1, 12, 0), y: 3.8400 }
    ]
  }]
};

const nodeMap1 = {
  "node1": {
    label: "Contact Info",
    value: 100,
    type: "BASIC",
    adjList: ["node3", "node2"]
  },
  "node2": {
    label: "NemID",
    value: 95,
    type: "SERVICE",
    adjList: ["node4", "node6"]
  },
  "node3": {
    label: "Personal Address",
    value: 40,
    type: "BASIC",
    adjList: ["node5"]
  },
  "node4": {
    label: "Node Label 4",
    value: 60,
    type: "BASIC",
    adjList: []

  },
  "node5": {
    label: "Node Label 5",
    value: 80,
    type: "BASIC",
    adjList: []
  },
  "node6": {
    label: "Node Label 6",
    value: 75,
    type: "BASIC",
    adjList: ["node7", "node10"]
  },
  "node7": {
    label: "Node Label 7",
    value: 60,
    type: "SERVICE",
    adjList: ["node8", "node9"]
  },
  "node8": {
    label: "Node Label 8",
    value: 50,
    type: "BASIC",
    adjList: []
  },
  "node9": {
    label: "Node Label 9",
    value: 40,
    type: "BASIC",
    adjList: []
  },
  "node10": {
    label: "Node Label 10",
    value: 30,
    type: "SERVICE",
    adjList: ["node11"]
  },
  "node11": {
    label: "Node Label 11",
    value: 100,
    type: "BASIC",
    adjList: []
  }
};


const NodeMap2 = {
	"node1": {
		label: "Contact Info",
		value: 100,
		type: "BASIC",
		adjList: ["node2"]
	},
	"node2": {
		label: "NemID",
		value: 95,
		type: "SERVICE",
		adjList: ["node3", "nodeBranch2"]
	},
	"node3": {
		label: "Personal Address",
		value: 95,
		type: "BASIC",
		adjList: []
	},

	"nodeBranch2":  {
		label: "Branch 2",
		value: 55,
		type: "BASIC",
		adjList: ["nodeBranch3"]
		
	},
	"nodeBranch3":  {
		label: "Branch 3",
		value: 25,
		type: "BASIC",
		adjList: []
		
	}

}

export {
  options_1,
  options_2,
  nodeMap1,
  NodeMap2
}
