import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class GameTabs extends Component {
    render() {
        return (
            <>
            <ul className='mainTab'>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/inventory">Inventory</NavLink></li>
                <li><NavLink to="/shop">Shop</NavLink></li>
                <li><NavLink to="/main">Main Garden</NavLink></li>
                <li><NavLink to="/hanging">Hanging Garden</NavLink></li>
                <li><NavLink to="/orchard">Orchard</NavLink></li>
                <li><NavLink to="/feeder">Feeder</NavLink></li>
                <li><NavLink to="/sculpture">Sculpture Garden</NavLink></li>
            </ul>
            </>
        );
    }
}