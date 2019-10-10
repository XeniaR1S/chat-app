import React from 'react';
import './Contact.css'


const Contact = props =>(
    <div className="Contact">
        <img className="avatar" src ={props.avatar}></img>
        <div>
            <p className="name">{props.name}</p>
            <div className="status">  
                <div className={props.online ? "status-online" : "status-offline"}></div>      
                <div className="status-text">{props.online ? "Online" : "Offline"}</div>
            </div>
        </div>
    </div>

); 

export default Contact;