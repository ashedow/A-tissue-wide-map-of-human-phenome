import React, {Component} from 'react';
import { subscribe } from 'alfa';
import Tissue from './Tissue';
import TmpTissue from './TmpTissue';
import Canvas from './Canvas';
import {Liver, Kidney, Skin, SunSkin, Stomach, Prostate} from '../img/human';


class HumanDisplay extends Component {
	constructor () {
		super();
	}

	showTissue(tissueCount){
		const { tissuelist, completeAll} = this.props;
		if (
			tissuelist.length > 0 &&
			(tissueCount === tissuelist.length || 0 === tissueCount)
		  ) {
			return (
				<Tissue
					src={Prostate}
					index={tissuelist.id}
					content={Object.keys(tissuelist.meaning)}
				/>
			)
		}
	}

	render () {
		const {data, tissue, tissuelist} = this.props;

		let DataDisplayStyle = {
			height: "100vh",
			width: 'auto',
			margin: "auto 0",
		};

		const tissueCount = tissuelist.reduce(
			(count, todo) => (todo.completed ? count + 1 : count),
			0
		);
		return (
			<div style={DataDisplayStyle}>
			{/* {tissue.map((item, index) => (
				<Tissue src={item} index={index}/>
			))} */}
				{this.showTissue(tissueCount)}
				<Canvas />
			</div>
		);
	}
}

export default subscribe(
	HumanDisplay,
	['tissuelist'],
	['tissuelist']
  )
