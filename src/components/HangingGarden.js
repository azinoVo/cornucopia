import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

const HangingGarden = ({ hanging }) => {
    const [plot, setPlot] = useState([])

    useEffect(() => {
        setPlot(hanging)
    }, [hanging])

    return (
        <section className='main-content'>
            <h1 className='tab-header'>Hanging Garden</h1>

            <div className='hanging'>
                {plot.map((plot, index) => {
                    if (plot) {
                        return <div key={`hanging${plot}${index}`} className='plot'>
                            <img src={require(`../assets/hanging/${plot}`)} alt="plot" />
                        </div>
                    } else {
                        return <div className='plot'>
                            <img src={require('../assets/plants/empty_plot.png')} alt="plot" />
                        </div>
                    }
                })}
            </div>
        </section>
    );
}

const mapStateToProps = state => ({
    hanging: state.hangingGarden,
});

export default connect(mapStateToProps, {})(HangingGarden);
