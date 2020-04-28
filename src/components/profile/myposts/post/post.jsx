import React from 'react';
import p from './post.module.css';

const Post = (props) => {
	return(

	
	      	
	      		<div className={p.new_posts}>
	      			

					<div className={p.left_img}>
						<img src="http://i59.fastpic.ru/big/2013/0928/09/cbaacb47cd776075831fdf2cd081c609.jpg"/>
						
					</div>
					<div className={p.right_text}>
						<p className={p.text_post}>{props.message} </p>
						<button>Like {props.like}</button>
					</div>

	      			
	      				 
		      		
		      		
	      		</div>

	      	
		)
}

export default Post;