import React from 'react';
import s from './sidebar.module.css';
import {NavLink} from "react-router-dom";
import ProfSidebar from './propsidebar/profsidebar.jsx'
const Sidebar = (props) => {



let SideBarUsersElements = props.state.SideBarBameUsers.map(sideusers => <ProfSidebar name={sideusers.name} />);

	return(


<div className={s.nav}>

		<nav >

	      	<div className="item">
			  <NavLink to="/profile">Profile</NavLink>
			</div>

	      	<div className="item">
			  <NavLink to="/dialogs">Messages</NavLink>
			</div>

	      	<div className="item">
			  < NavLink to="/news">News</NavLink>
			</div>
			
	      	<div className="item">
			  < NavLink to="/music">Music</NavLink>
			</div>

	      	<br/>
	      	<div><NavLink to="/settings">Settings</NavLink></div>
	      </nav>
				<div className={s.profSidebar}>
						{SideBarUsersElements}
						
				</div>

				</div>
		)
}

export default Sidebar;