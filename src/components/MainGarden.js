import React, { Component } from 'react';
import adult_tree from '../assets/plants/Green Tree with Flowers.png';
import empty_plot from '../assets/plants/Empty Plot.png';
import seed_down from '../assets/plants/Seed Down.gif';

export default class MainGarden extends Component {
    constructor() {
        super();
        this.state = {
            plot: [adult_tree, adult_tree, empty_plot, seed_down, empty_plot, empty_plot]
        };
    }

    render() {
        return (
            <section className='main-content'>
                <div className='main'>
                    {this.state.plot.map((plot, index) => {
                        if(plot) {
                            console.log("index", index)
                            return <div key={index} className='plot'><img src={plot} alt="plot"/></div>
                        } else {
                            return <div className='plot'>Makeshift Plot</div>
                        }
                    })}
                </div>
            </section>
        );
    }
}
