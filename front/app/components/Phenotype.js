import React from 'react';
import FontAwesome from 'react-fontawesome';

class Phenotype extends React.Component {
	constructor(props) {
		super(props);
	  }

	render() {
		let ListTextStyle = {
			color: "white",
			fontSize: "16px",
			letterSpacing: "10px",
			textIndent: "5px",
			borderRadius: "25px",
			borderColor: "white",

		}
		return (
			<div>
				
				<li
					className="title-text md-size-type text-center"
					style={ListTextStyle}>
						{this.props.phenotype}
				</li>
			</div>
		);
	}
}

export default Phenotype;