import React from 'react';
import Title from './Title';
// import Phenotype from './Phenotype';
import List from './List';
// import FileDisplay from './FileDisplay';

class Sidebar extends React.Component {
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
			// float: "left",
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