import React, { Component } from 'react';
import adult_tree from '../assets/plants/Green Tree with Flowers.png';

export default class MainGarden extends Component {
    constructor(props) {
        super(props);
        this.state = {
            plot: [adult_tree, adult_tree, undefined, undefined, undefined, undefined]
        };
    }
    render() {
        return (
            <section className='main-content'>
                <div className='main'>
                    {this.state.plot.map(plot => {
                        if(plot) {
                            return <div className='plot'><img src={plot} alt={plot}/></div>
                        } else {
                            return <div className='plot'>Makeshift Plot</div>
                        }
                    })}
                </div>
            </section>
        );
    }
}
