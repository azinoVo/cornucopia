import React, { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';

const MainGarden = ({ mainGarden }) => {
    const [ gardenPlot, setGardenPlot ] = useState([])

    // const dispatch = useDispatch()

    useEffect(() => {
        setGardenPlot(mainGarden)
        console.log("mainGarden", mainGarden[0]['plotType'])
    }, [mainGarden])

    return (
        <section className='main-content'>
            <h1 className='tab-header'>Main Garden</h1>
            <div className='main'>
                {
                    gardenPlot.map((plot, index) => {
                        if (plot) {
                            return <div key={`mainGarden${plot['plotType']}${index}`} className='plot'>
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
    // user: state.user,
    mainGarden: state.user.main_garden_plot,
});

export default connect(mapStateToProps, { })(MainGarden);
