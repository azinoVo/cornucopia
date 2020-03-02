import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

const HangingGarden = ({ hanging_plot }) => {
    const [hangingPlot, setPlot] = useState([])

    useEffect(() => {
        setPlot(hanging_plot)
    }, [hanging_plot])

    return (
        <section className='main-content'>
            <h1 className='tab-header'>Hanging Garden</h1>

            <div className='hanging'>
                {
                    hangingPlot.map((plot, index) => {
                        if (plot) {
                            return <div key={`orchard${plot['plotType']}${index}`} className='plot'>
                                <img src={require(`../assets/plants/${plot['plotType']}${plot['plotStatus']}.${plot['fileType']}`)} alt="plot" />
                                {plot['plotType'] !== "empty_plot_lock.png" && <span>Plot: {plot["plotType"]}</span>}
                                {(plot['plotType'] !== "empty_plot_lock.png" && plot['plotType'] !== "empty_plot.png") && <span>Water: {plot.water} | Quality: {plot.quality} | Health: {plot.health} </span>}
                            </div>
                        } else {
                            return <div className='plot'>
                                <img src={require('../assets/plants/empty_plot_regular.png')} alt="plot" />
                            </div>
                        }
                    })
                }
            </div>
        </section>
    );
}

const mapStateToProps = state => ({
    hanging_plot: state.user.hanging_plot,
});

export default connect(mapStateToProps, {})(HangingGarden);
