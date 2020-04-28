import React from 'react'
import d from './dialogs.module.css';
import DialogItem from './dialogitem/dialogitem.jsx';
import DialogMessage from './message/message.jsx';

const Dialogs = (props) => {

    

    let dialogsElements = props.state.dialogsData.map ( (dialog)=> <DialogItem name={dialog.name} id={dialog.id} />);

    

    let messageElements = props.state.messageData.map ( (message)=> <DialogMessage message={message.message}  />);

    return(
        <div className = {d.block_ms}>
            <div className = {d.suka1}>
                {[dialogsElements]}
            </div>

            <div className = {d.suka2}>
                {[messageElements]}
            </div>

            
        
        </div>

        
        
        
        
        
    )
}

export default Dialogs;