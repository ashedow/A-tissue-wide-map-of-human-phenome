import React, {Component} from 'react';
import Title from './Title';
import List from './List';


class Sidebar extends Component {
	constructor () {
		super();
	}

	render () {
		let SidebarStyle = {
			overflow: 'auto',
			width: "20%",
			minWidth: "250px",
			height: "100vh",
			margin: "0",
			background: "#111",
		}
		return (
			<nav
				className="sidebar"
				style={SidebarStyle}>
				
				<Title name="Phenotypes" />
				
				<ul>
					<List phenotype={this.props.phenotype} 
						data={this.props.data} />
				</ul>
			</nav>
		);
	}
}

export default Sidebar;