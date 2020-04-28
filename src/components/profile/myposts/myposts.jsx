import React from 'react';
import mp from './myposts.module.css';
import Post from './post/post';

const Myposts = (props) => {

	let postElement = props.postData.map( (k) => <Post message = {k.message} like = {k.like} />);

	let elementPost = React.createRef();

	let addPost = () => {
		
		let text = elementPost.current.value;
		props.addPost(text);
		

		
		}

	return(

		<div className={mp.content}>
	      	
	      	<div className="my_post">
	      		Posts
	      		<div className={mp.new_post}>
	      			<div>
	      				<textarea ref={elementPost}></textarea>
	      			</div>
	      			<div>
	      				<button onClick = {addPost}>Опубликовать</button>
	      				<button>Удалить</button>
	      			</div>
	      			

	      		</div>

	      		
				  {[postElement]}
				  

	      	</div>

	      	

	      </div>
		)
}

export default Myposts;