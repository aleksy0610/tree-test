import React, {Component} from 'react';
const CanvasJS = require('./canvasjs.min');

class CanvasJSChart extends Component {
	static _cjsContainerId = 0

	constructor(props) {
		super(props);
		this.options = props.options || {};
		this.containerProps = props.containerProps ? props.containerProps : {width: "100%", position: "relative"};
		this.containerProps.height = props.containerProps && props.containerProps.height ? props.containerProps.height : this.options.height ? this.options.height + "px" : "320px";
		this.chartContainerId = "canvasjs-react-chart-container-" + CanvasJSChart._cjsContainerId++;
	}

	componentDidMount() {
		if(!this.props.NODE_ENV){
			this.forceUpdate();
		}
	}

	shouldComponentUpdate(nextProps, nextState) {
		return !(nextProps.options === this.options);
	}

	componentDidUpdate() {
		const canvas_lib = window?.CanvasJS || CanvasJS;
		this.chart = new canvas_lib.Chart(this.chartContainerId, this.options);
		this.chart.options = this.props.options;
		this.chart.render();
	}

	componentWillUnmount() {
		if (this.chart && this.chart !== undefined) {
			this.chart.destroy();
		}
	}

	render() {
		return <div id={this.chartContainerId} style={this.containerProps}/>
	}
}

const CanvasJSReact = {
	CanvasJSChart: CanvasJSChart,
	CanvasJS: CanvasJS
};

export default CanvasJSReact;
