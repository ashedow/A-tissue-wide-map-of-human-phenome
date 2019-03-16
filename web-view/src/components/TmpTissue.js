import React from 'react';
import {Liver, Kidney, Skin, SunSkin, Stomach, Prostate} from '../img/human';
import ReactSVG from 'react-svg'


class TmpTissue extends React.Component {
	constructor(props) {
		super(props);
	  }

	render() {
		const style = {
			zIndex: 3,
			position: 'absolute',
			objectFit: "cover",
			height: "100vh",
			wight: 'auto',
			margin: "auto",
		};
		const {src, index} = this.props;
		return (
			<ReactSVG src={Prostate}
				index={index}
				svgStyle={style} />
		);
	}
}

export default TmpTissue;