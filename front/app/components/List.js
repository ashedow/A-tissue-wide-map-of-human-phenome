import React from 'react';
import FontAwesome from 'react-fontawesome';
import Button from './Button';


class List extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			meaning: []
		}
		this.handleData = this.handleData.bind(this)
	  }

	  handleData(meaning) {
		this.setState({ meaning: meaning })
	}
	// callBack = (dataFromChild)

	render() {
		const {phenotype, data} = this.props;
		return (
			<div>
			{phenotype.map((item, index) => (
				<li className="title-text text-center">
					<Button value={item} index={index} 
						row={data[index]}
						customProp={this.handleData}
						/>
				</li>
			))}
		</div>
		);
	}
}

export default List;