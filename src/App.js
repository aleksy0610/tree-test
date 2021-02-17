import React from 'react'
import './App.css';

import { CompletedSignUps, NodeMapView } from './component';

function App() {

	return (
		<div className="App">
			<div className="main-container">
				<CompletedSignUps />
				<NodeMapView />
			</div>
		</div>
	);
}

export default App;
