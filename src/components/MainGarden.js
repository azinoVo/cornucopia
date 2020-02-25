import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

const MainGarden = ({ mainGarden }) => {
    const [plot, setPlot] = useState([])

    useEffect(() => {
        setPlot(mainGarden)
    }, [mainGarden])

    return (
        <section className='main-content'>
            <h1 className='tab-header'>Main Garden</h1>
            <div className='main'>
                {plot.map((plot, index) => {
                    if (plot) {
                        return <div key={`mainGarden${plot}${index}`} className='plot'><img src={require(`../assets/plants/${plot}`)} alt="plot" /></div>
                    } else {
                        return <div className='plot'><img src={require('../assets/plants/empty_plot.png')} alt="plot" /></div>
                    }
                })}
            </div>
        </section>
    );
}

const mapStateToProps = state => ({
    mainGarden: state.mainGarden,
});

export default connect(mapStateToProps, {})(MainGarden);
