import React from 'react';
import Table from './Table';
import DataDisplay from "./DataDisplay";
import TissuePoint from './TissuePoint';
// import {Liver} from '../img/human';
// import SVG from 'react-inlinesvg';


class HumanDisplay extends React.Component {
	constructor () {
		super();
	}

	render () {
		let DataDisplayStyle = {
			height: "100%",
			width: "80%",
			float: "right",
			padding: "10px"
		}
		let point = {
			position: 'absolute',
			backgroundColor: 'red',
			height: '10px',
			width: '10px',
			top: '50%',
			left: '50%'
		}
		const {data} = this.props;
		return (
			<main
				className="data-display"
				style={DataDisplayStyle}>
				
				{/* <SVG src={Liver} /> */}
				
				{/* <div style={point} key='0'></div> */}
			</main>
		);
	}
}

export default HumanDisplay;