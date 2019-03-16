import React, {Component} from 'react';
import { inject } from 'alfa';

class Button extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeButton: false,
			meaning: {}
		}
		this.handleClick = this.handleClick.bind(this)
	  }

	handleClick = (index, row) => {
		if (this.state.activeButton){
			this.setState({
				meaning: {},
				activeButton: this.state.activeButton=false
			}, () => this.props.deleteTissue({'id': index}))
		} else {
			var items = Object.keys(row).slice(1).map((key) => {
				return [key, row[key]];
			});
			items.sort(function(first, second) {
				return second[1] - first[1];
			});
			this.setState({
				meaning: {'id': index, 'meaning': items[0]},
				activeButton: this.state.activeButton=true
			},() => this.props.addTissue({'id': index, 'meaning':items[0]}))
		}
	}

	render() {
		let ButtonStyle = {
			padding: '5px',
			color: "white",
			fontSize: "16px",
			width: '100%',
			background: 'black',
			borderRadius: '5px',
			border: '2px solid gray'
		}
		let ActiveButtonStyle = {
			padding: '5px',
			color: "white",
			width: '100%',
			fontSize: "16px",
			background: 'gray',
			border: '2px solid gray'
		}
		const {activeButton, meaning} = this.state;
		const {row, value, index} = this.props;
		return (
			<div>
				<input
					type="button"
					style= {activeButton ? ActiveButtonStyle : ButtonStyle}
					value={value} 
					index={index}
					onClick={() => this.handleClick(index, row)}
				/>
			</div>
		);
	}
}

export default inject(
	Button,
	['addTissue', 'deleteTissue'],
	['tissuelist']
  )