import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

export default class navbar extends Component {
    render() {
        return (
            <div>
                <div className="nav-container">
                    <div>My Site</div>
                    <ul>
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/about'>About</NavLink></li>
                        <li><NavLink to='/contact'>Contact</NavLink></li>
                    </ul>
                </div>
            </div>
        )
    }
}
