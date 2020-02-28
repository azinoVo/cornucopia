import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { plantSeed } from '../actions';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

const MainGarden = ({ mainGarden, user }) => {
    const [gardenPlot, setGardenPlot] = useState([])
    // const [userInventory, setInventory] = useState({})
    const [seedSelect, setSeedSelect] = useState([])
    const [availableSeeds, setAvailableSeeds] = useState({})


    const dispatch = useDispatch()

    useEffect(() => {
        setGardenPlot(mainGarden)
    }, [mainGarden])

    useEffect(() => {
        // setInventory(user.inventory)

        const seedList = Object.entries(user.inventory).map(entry => {
            if (!entry[0].includes("plot") && entry[1] >= 1) {
                return { value: entry[0], label: `${entry[0]}: ${entry[1]} in inventory` }
            } else {
                return ""
            }
        }).filter(item => item !== "")

        console.log("SeedList", seedList)
        setSeedSelect(seedList)
    }, [user])

    console.log("availableSeeds", availableSeeds)

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
                                {
                                    (plot['plotType'] !== "empty_plot_lock.png" && plot['plotType'] !== "empty_plot.png") &&
                                    <span>Water: {plot.water} | Health: {plot.health} | Quality: {plot.quality} </span>
                                }

                                {
                                    (plot['plotType'] !== "empty_plot_lock.png" && plot['plotType'] !== "empty_plot.png") &&
                                    <Progress
                                        percent={100}
                                        theme={{
                                            success: {
                                                symbol: '‍💙',
                                                color: '#009DFF'
                                            },
                                            active: {
                                                symbol: '💦',
                                                color: '#59BFFF'
                                            },
                                            default: {
                                                symbol: '💧',
                                                color: '#BFE6FF'
                                            }
                                        }} />
                                }

                                {
                                    (plot['plotType'] !== "empty_plot_lock.png" && plot['plotType'] !== "empty_plot.png") &&
                                    <Progress
                                        percent={100}
                                        theme={{
                                            success: {
                                                symbol: '‍💚',
                                                color: '#009F4E'
                                            },
                                            active: {
                                                symbol: '🐛',
                                                color: 'rgb(19, 140, 228)'
                                            },
                                            default: {
                                                symbol: '🐛🐛',
                                                color: '##EE320C'
                                            }
                                        }} />
                                }

                                {
                                    (plot['plotType'] !== "empty_plot_lock.png" && plot['plotType'] !== "empty_plot.png") &&
                                    <Progress
                                        percent={100}
                                        theme={{
                                            success: {
                                                symbol: '‍💲💲💲',
                                                color: '#0F9200'
                                            },
                                            active: {
                                                symbol: '💲💲',
                                                color: '#30CB00'
                                            },
                                            default: {
                                                symbol: '💲',
                                                color: '#4AE54A'
                                            }
                                        }}
                                    />
                                }


                                {
                                    (plot['plotType'] !== "empty_plot_lock.png" && plot['plotType'] === "empty_plot.png") &&
                                    <Select
                                        components={makeAnimated()}
                                        placeholder={"Select Seed"}
                                        options={seedSelect}
                                        onChange={setAvailableSeeds}
                                        noOptionsMessage={() => "No Seeds Available. Please buy some."}
                                        autoFocus
                                    />

                                }
                                {
                                    (plot['plotType'] !== "empty_plot_lock.png" && plot['plotType'] === "empty_plot.png") &&
                                    <button onClick={() => dispatch(plantSeed(availableSeeds, index))}>Plant</button>

                                }
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
