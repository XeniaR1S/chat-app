import React from 'react';
import './Contact.css'


class Contact extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            online : props.online,
        }
    }
    render () {
        return (
            <div className="Contact">
                <img className="avatar" src ={this.props.image }></img>
                <div>
                <p className="name">{this.props.character}</p>
                <div className="status"
                    onClick={event => {
                    const newStatus = !this.state.online;
                    this.setState({ online: newStatus });
                }}>  
                    <div className={this.state.online ? "status-online" : "status-offline"}></div>      
                    <div className="status-text">{this.state.online ? "Online" : "Offline"}</div>
                </div>
                </div>
            </div>
    )}
};

export default Contact;