import React, { Component } from 'react';

export default class Orchard extends Component {
    render() {
        return (
            <div className='orchard'>
                <img src={require('../assets/plants/Green Tree with Flowers.png')} alt="loading..." />
            </div>
        );
    }
}