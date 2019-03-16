import React, {Component} from 'react';
import Button from './Button';


class List extends Component {
	constructor(props) {
		super(props);
	  }

	render() {
		const {phenotype, data} = this.props;
		return (
			<div>
			{phenotype.map((item, index) => (
				<li className="title-text text-center">
					<Button value={item} index={index} 
						row={data[index]}
						/>
				</li>
			))}
		</div>
		);
	}
}

export default List;