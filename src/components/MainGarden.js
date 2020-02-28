import React, { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { plantSeed } from '../actions';

const MainGarden = ({ mainGarden, user }) => {
    const [gardenPlot, setGardenPlot] = useState([])
    const [userInventory, setInventory] = useState({})
    // const [seedSelect, setSeedSelect] = useState("")


    // const dispatch = useDispatch()

    useEffect(() => {
        setGardenPlot(mainGarden)
    }, [mainGarden])

    useEffect(() => {
        setInventory(user.inventory)
    }, [user])

    // const changeHandler = (ev) => {
    //     console.log(seedSelect)
    //     setSeedSelect(ev.target.value)
    // }

    // const SubmitHandler = (event, set) => {
    //     event.preventDefault();
    //     console.log("set", set)
    //     dispatch(plantSeed(set))
    // }

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
                                {/* {
                                    (plot['plotType'] !== "empty_plot_lock.png") &&

                                    <form>
                                        <div className='seed-form'>
                                            <select
                                                value={seedSelect}
                                                onChange={changeHandler}
                                            >
                                                {
                                                    Object.entries(userInventory).map((entry, index) => {
                                                        if (!entry[0].includes('plot')) {
                                                            return <option key={`seedEntry${index}`} value={entry[0]}>{entry[0]}</option>
                                                        } else {
                                                            return ""
                                                        }
                                                    })
                                                }
                                            </select>
                                            <button type='submit' onClick={(event) => SubmitHandler((event))}>Plant</button>
                                        </div>
                                    </form>
                                } */}

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
    mainGarden: state.user.main_garden_plot,
    user: state.user,
});

export default connect(mapStateToProps, { plantSeed })(MainGarden);
