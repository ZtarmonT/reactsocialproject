import React, { PropTypes } from 'react';
import './profile.css';
import Myposts from './myposts/myposts.jsx';
import ProfileInfo from './profileinfo/profileinfo.jsx';
const Profile = (props) => {



	

	return(

		<div className="content">
	      	

			<ProfileInfo />

	      	<Myposts postData={props.state.postData} addPost={props.addPost} />

	      	

	      </div>
		)
}

export default Profile;