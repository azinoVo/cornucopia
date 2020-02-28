import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

const Orchard = ({ orchard }) => {
    const [orchardPlot, setOrchard] = useState([])

    useEffect(() => {
        setOrchard(orchard)
    }, [orchard])

    return (
        <section className='main-content'>
            <h1 className='tab-header'>Tree Orchard</h1>
            <div className='orchard'>
                {
                    orchardPlot.map((plot, index) => {
                        if (plot) {
                            return <div key={`orchard${plot['plotType']}${index}`} className='plot'>
                                <img src={require(`../assets/plants/${plot["plotType"]}`)} alt="plot" />
                                {plot['plotType'] !== "empty_plot_lock.png" && <span>Plot: {plot["plotType"].substring(0, plot["plotType"].length - 4)}</span>}
                                {(plot['plotType'] !== "empty_plot_lock.png" && plot['plotType'] !== "empty_plot.png") && <span>Water: {plot.water} | Quality: {plot.quality} | Health: {plot.health} </span>}
                            </div>
                        } else {
                            return <div className='plot'>
                                <img src={require('../assets/plants/empty_plot.png')} alt="plot" />
                            </div>
                        }
                    })
                }
            </div>
        </section>
    );
}

const mapStateToProps = state => ({
    orchard: state.user.orchard_plot,
});

export default connect(mapStateToProps, {})(Orchard);