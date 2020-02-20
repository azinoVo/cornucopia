import React, { useState } from 'react';
import adult_tree from '../assets/plants/adult_tree.png';
import empty_plot from '../assets/plants/empty_plot.png';
import seed_down from '../assets/plants/seed_down.gif';
import watered from '../assets/plants/watered.gif';
import watering from '../assets/plants/watered_seed.png';

const MainGarden = () => {
    const [plot] = useState([adult_tree, empty_plot, seed_down, watered, watering, watered])

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
