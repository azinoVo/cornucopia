import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

const Orchard = ({ orchard }) => {
    const [orchardList, setOrchard] = useState([])

    useEffect(() => {
        console.log("orchard", orchard)
        setOrchard(orchard)
    }, [orchard])

    return (
        <section className='main-content'>
            <h1 className='tab-header'>Tree Orchard</h1>
            <div className='orchard'>
                {
                    orchardList.map((plot, index) => {
                        if (plot) {
                            return (
                                <div key={`orchard${plot}${index}`} className='plot'><img src={require(`../assets/plants/${plot}`)} alt="plot" /></div>
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