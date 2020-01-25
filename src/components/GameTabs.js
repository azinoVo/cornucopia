import React, { Component } from 'react';

class GameTabs extends Component {
    render() {
        return (
            <>
            <ul className='mainTab'>
                <li>Main</li>
                <li>Shop</li>
                <li>Main Garden</li>
                <li>Hanging Garden</li>
                <li>Orchard</li>
                <li>Feeder</li>
                <li>Sculpture Garden</li>
            </ul>
            </>
        );
    }
}

export default GameTabs;