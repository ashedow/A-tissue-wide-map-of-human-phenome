import React from 'react';
import Tissue from './Tissue';
import Canvas from './Canvas';
import {Liver, Kidney, Skin, SunSkin, Stomach} from '../img/human';


class HumanDisplay extends React.Component {
	constructor () {
		super();
	}

	render () {
		let DataDisplayStyle = {
			height: "100vh",
			width: 'auto',
			margin: "auto",
		}
		const {data, tissue} = this.props;
		return (
			<div style={DataDisplayStyle}>
			{tissue.map((item, index) => (
				<Tissue src={item} index={index}/>
			))}
				<Canvas />
			</div>
		);
	}
}

export default HumanDisplay;