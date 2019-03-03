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
			width: "20%",
			height: "100%",
			float: "left",
			background: "#111",
			overflow: 'auto',
		}
		let SidebarTmpStyle = {
			width: "50%",
			height: "100%",
			// float: "center",
			left: "25%",
			position: 'relative',
			background: "#111",
			overflow: 'auto',
		}
		return (
			<nav
				className="sidebar"
				style={SidebarTmpStyle}>
				
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