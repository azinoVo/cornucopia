import React, { Component } from 'react';
import adult_tree from '../assets/plants/Green Tree with Flowers.png';

export default class Orchard extends Component {
    constructor() {
        super();
        this.state = {
            orchard: [adult_tree, adult_tree, adult_tree, adult_tree, adult_tree, adult_tree]
        };
    }

    render() {
        return (
            <section className='main-content'>
                <div className='orchard'>
                    {
                        this.state.orchard.map(plot => {
                            return (
                                <div className='plot'><img src={plot} alt="plot"/></div>
                            )
                        })
                    }
                </div>
            </section>
        );
    }
}
