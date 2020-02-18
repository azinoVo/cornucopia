import React, { useState } from 'react';
import adult_tree from '../assets/plants/Green Tree with Flowers.png';

const Orchard = () => {
    const [orchard, setOrchard] = useState([adult_tree, adult_tree, adult_tree, adult_tree, adult_tree, adult_tree])

        return (
            <section className='main-content'>
                <div className='orchard'>
                    {
                        orchard.map(plot => {
                            return (
                                <div className='plot'><img src={plot} alt="plot"/></div>
                            )
                        })
                    }
                </div>
            </section>
        );
}

export default Orchard;
