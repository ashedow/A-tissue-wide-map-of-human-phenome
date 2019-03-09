import React from 'react';
import { connect } from 'unistore/react';
import Actions from '../store/actions';


class Button extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activeButton: false,
			meaning: {},
			showMessage: true,
		}
		this.handleClick = this.handleClick.bind(this);
	  }

	handleClick(index, row) {
		this.setState({activeButton: !this.state.activeButton}) 
		// meaning = this.state.data
		var items = Object.keys(row).slice(1).map((key) => {
			return [key, row[key]];
		});
		items.sort(function(first, second) {
			return second[1] - first[1];
		});
		// let meaning = {'id': index, 'meaning': items}
		let meaning = {'meaning': items}
		this.props.addTeasureMean(index);
		this.setState(state => {
			const meaning = [...state.meaning];
		})
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
		// console.log(this.props.row)

		return (
			<div>
				<input
					type="button"
					style= {activeButton ? ActiveButtonStyle : ButtonStyle}
					value={value} 
					index={index}
					onClick={() => this.handleClick(index, row)}
					disabled={!this.state.meaning}
				/>
			</div>
		);
	}
}

export default connect(
	state => state,
	Actions
  )(Button);