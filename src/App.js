import React from 'react';
import './App.css';
import Header from './components/header/header.jsx';
import Sidebar from './components/sidebar/sidebar.jsx';
import Profile from './components/profile/profile.jsx';
import Dialogs from './components/dialogs/dialogs.jsx';
import Music from './components/music/music.jsx';
import News from './components/news/news.jsx';
import Settings from './components/settings/settings.jsx';
import {Route} from 'react-router-dom';
import Footer from './components/footer/footer.jsx'



	

const App = (props) => {

// let FooterSocSeti = [
//             {name: 'VK'},
//             {name: 'Facebook'},
//             {name: 'Instagram'}
//         ]
    

// debugger;

let ItemSocFooter = props.appstate.SocSeti.FooterSocSeti.map( s => <Footer name={s.name} />)
    
      return(

      	<div>
				
					<div className="app-wrapper" >
						<Header />
						<Sidebar state = {props.appstate.sideBar} />
						
						<Route path="/dialogs" render={() => 
							<Dialogs 
								state ={props.appstate.dialogsPage} /> } />

						<Route path="/profile" render={() => 
							<Profile 
								state={ props.appstate.profilePage } 
								addPost={props.addPost} />} />
						
						<Route path="/news" render={() => <News /> } />
						<Route path="/music" render={() => <Music /> } />
						<Route path="/settings" render={() => <Settings /> } />

						
						
						
					</div>

					{ItemSocFooter}

					</div>
				 

      )
    
}

export default App;
