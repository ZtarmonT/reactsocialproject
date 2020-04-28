import React from 'react';
import dit from './dialogitem.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return(
        
        <div className={dit.content}>
            <ul>
                <li><NavLink to={path}>{props.name}</NavLink></li>
            </ul>
        </div>
    )
}

export default DialogItem;