import React from "react"
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';

// react-pro-sidebar
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarFooter } from 'react-pro-sidebar';


type SidebarProps =
{
	userIsLoggedIn: boolean
}

const Sidebar: React.FC<SidebarProps> = ({userIsLoggedIn}) => 
{
	// login and logout
	let loginMenuItem = userIsLoggedIn ? 
		(<MenuItem>
			Logout
			<Link to="/logout" />
		</MenuItem>):
		(<MenuItem>
			Login
			<Link to="/login" />
		</MenuItem>);

	return (
		<ProSidebar collapsed={false} image="">
			<SidebarHeader>
				<h1 className="text-center m-2">
					&#x2657;&#x265D;
					&#x265D;&#x2657;
				</h1>
			</SidebarHeader>
			<Menu iconShape="square">
				{ loginMenuItem }
				<SubMenu title="Components">
					<MenuItem>Component 1</MenuItem>
					<MenuItem>Component 2</MenuItem>
				</SubMenu>
			</Menu>
			<SidebarFooter style={{ textAlign: 'center' }}>
				<p className="text-center">
					<Link to="/about">About</Link>
				</p>
				<div className="sidebar-btn-wrapper" style={{ padding: '20px 24px' }} >
					<a
						href="https://github.com/jpkrieg/checkmate"
						target="_blank"
						className="sidebar-btn"
						rel="noopener noreferrer"
					>
						<FaGithub />
					</a>
				</div>
			</SidebarFooter>
		</ProSidebar>
	)
}

export default Sidebar;