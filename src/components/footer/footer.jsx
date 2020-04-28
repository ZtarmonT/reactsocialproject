import React from 'react';
import f from './footer.module.css';


const Footer = (props) => {

	return(
			<div className={f.container}>
				<li>{props.name}</li>
			</div>
		)
}


export default Footer;