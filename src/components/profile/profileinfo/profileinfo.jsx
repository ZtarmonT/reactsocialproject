import React from 'react';
import pi from './profileinfo.module.css';

const ProfileInfo = () => {
    return(
        <div className = {pi.content}>
            <p>Main Content</p>
	      	<div className="img_content">
	      		<img src="https://www.baltspace.eu/images/baltspace_research/header_rock_boat_cloud_900_300.jpg" />
	      	</div>
	      	<div className="ava_decr">
	      		<img src="http://i57.fastpic.ru/big/2013/0928/79/f67a3ca3efb78943672da48f2464a379.jpg" />
	      	</div>
        </div>
    )
}

export default ProfileInfo;