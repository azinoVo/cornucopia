import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
// import adult_tree from '../assets/plants/Green Tree with Flowers.png';
// import empty_plot from '../assets/plants/Empty Plot.png';

const Orchard = ({ orchard }) => {
    // const [orchard, setOrchard] = useState([adult_tree, adult_tree, adult_tree, adult_tree, adult_tree, adult_tree])
    const [orchardList, setOrchard] = useState([])

    useEffect(() => {
        console.log("orchard", orchard)
        setOrchard(orchard)
    }, [orchard])

    return (
        <section className='main-content'>
            <div className='orchard'>
                {
                    orchardList.map((plot, index) => {
                        if (plot) {
                            return (
                                <div key={`${plot}${index}`} className='plot'><img src={require(`../assets/plants/${plot}`)} alt="plot" /></div>
                            )
                        } else {
                            return <div className='plot'><img src={require('../assets/plants/empty_plot.png')} alt="plot" /></div>
                        }

                    })
                }
            </div>
        </section>
    );
}

const mapStateToProps = state => ({
    orchard: state.orchard,
});

export default connect(mapStateToProps, {})(Orchard);