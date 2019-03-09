import React from 'react';
import {Liver, Kidney, Skin, SunSkin, Stomach} from '../img/human';
import ReactSVG from 'react-svg'


class Tissue extends React.Component {
	constructor(props) {
		super(props);
	  }

	render() {
		const style = {
			zIndex: 3,
			position: 'absolute',
			objectFit: "cover",
			height: "100%",
			wight: 'auto',
			margin: "auto",
		};
		const {src, index} = this.props;
		return (
			<ReactSVG src={src}
				index={index}
				svgStyle={style} />
		);
	}
}

export default Tissue;