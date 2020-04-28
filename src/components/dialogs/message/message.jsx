import React  from 'react';
import mess from './message.module.css';

const DialogMessage = (props) => {
    return(
        <div class={mess.content}>
            <p>{props.message}</p>
        </div>
    )
}

export default DialogMessage;