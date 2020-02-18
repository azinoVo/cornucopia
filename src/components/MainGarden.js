import React, { useState } from 'react';
import adult_tree from '../assets/plants/Green Tree with Flowers.png';
import empty_plot from '../assets/plants/Empty Plot.png';
import seed_down from '../assets/plants/Seed Down.gif';
import watered from '../assets/plants/Watered Seed.png';
import watering from '../assets/plants/Watering.gif';

const MainGarden = () => {
    const [plot, setPlot] = useState([adult_tree, empty_plot, seed_down, watered, watering, watered])

        return (
            <section className='main-content'>
                <div className='main'>
                    {plot.map((plot, index) => {
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

export default MainGarden;
