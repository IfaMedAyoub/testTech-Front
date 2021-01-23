import React, { Component } from 'react';
import './Event.css';

class Event extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    render() {
        return (
            <div className="event-container">
                <div className="container">
                    <div className="event-info">
                        <div className="event-avatar">
                            { 
                                this.props.currentUser.imageUrl ? (
                                    <img src={this.props.event.image} alt={this.props.currentUser.username}/>
                                ) : (
                                    <div className="text-avatar">
                                        <span>{this.props.currentUser.name && this.props.currentUser.name[0]}</span>
                                    </div>
                                    
                                )
                            }
                        </div>
                        <div className="event-name">
                           <h2>{this.props.currentUser.label}</h2>
                           <p className="event-email">{this.props.currentUser.description}</p>
                        </div>
                    </div>
                </div>    
            </div>
        );
    }
}

export default Event