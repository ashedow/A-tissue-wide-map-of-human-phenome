import React from 'react';
import FontAwesome from 'react-fontawesome';
import Message from './Message';


class Button extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activeButton: false,
			meaning: {},
			lastMessageText: '',
			showMessage: true,
		}
		this.handleClick = this.handleClick.bind(this);
		// this.addActiveClass= this.addActiveClass.bind(this);
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
		this.setState({meaning: items[0]})
		this.props.customProp(this.state);
		console.log(String(items[0]))
		return this.sendMessage(
			String(items.splice(0,5))
		);
	}

	sendMessage (msg, style) {
		// Display message box for informing users of errors, etc.
		let styleToColor = {
			"goodnews": "green",
			"badnews": "red",
			"neutral": "#222"
		}

		if (!style) {
			style = "neutral";
		}

		return this.setState({
			lastMessageText: msg,
			lastMessageColor: styleToColor[style]
		});
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
					onClick={() => this.handleClick(index, row)}
					value={value} 
					index={index}
					meaning={meaning}
				/>
				{/* <ToggleDisplay
					show={this.state.showMessage}> */}
					
					<Message
						messageText={this.state.lastMessageText}
						
						/>
				{/* </ToggleDisplay> */}
			</div>
		);
	}
}

export default Button;