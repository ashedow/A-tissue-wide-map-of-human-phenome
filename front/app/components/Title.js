import React from 'react';
import FontAwesome from 'react-fontawesome';

class Title extends React.Component {
	constructor() {
		super();
	}
	
	render() {
		let TitleStyle = {
			padding: "10px"
		};

		let TitleTextStyle = {
			color: "white",
			fontSize: "18px",
			fontWeight: "bolder",
			// letterSpacing: "10px",
			textIndent: "5px",
			textTransform: "uppercase",
		}

		return (
			<header
				className="title center-child"
				style={TitleStyle}>
					<h1
						className="title-text md-size-type text-center"
						style={TitleTextStyle}>
						<br/>
						{this.props.name}
					</h1>
			</header>
		);
	}
}

export default Title;