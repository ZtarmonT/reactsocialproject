import React from 'react';
import ps from './profsidebar.module.css';



const ProfSidebar = (props) =>{
    return(
        <div>
            <div className={ps.itemProf}>{props.name}</div>
        </div>
    )
} 

export default ProfSidebar;