import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { plantSeed, interact } from '../actions';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

const MainGarden = ({ mainGarden, user, interactList }) => {
    const [gardenPlot, setGardenPlot] = useState([])
    const [userInfo, setUserInfo] = useState({})
    const [seedSelect, setSeedSelect] = useState([])
    const [availableSeeds, setAvailableSeeds] = useState({})
    const [plantInteraction, setPlantInteraction] = useState({})

    const dispatch = useDispatch()


    useEffect(() => {
        setGardenPlot(mainGarden)
    }, [mainGarden])

    useEffect(() => {
        setUserInfo(user)
    }, [user])

    useEffect(() => {
        // setInventory(user.inventory)

        const seedList = Object.entries(user.inventory).map(entry => {
            if (!entry[0].includes("plot") && entry[1] >= 1) {
                return { value: entry[0], label: `${entry[0]}: ${entry[1]} in inventory` }
            } else {
                return ""
            }
        }).filter(item => item !== "")

        setSeedSelect(seedList)
    }, [user])

    return (
        <section className='main-content'>
            <h1 className='tab-header'>Main Garden</h1>
            <div className='mainGarden-status'>
                Available Water: {userInfo.water}%
                <Progress
                    percent={userInfo.water}
                    theme={{
                        success: {
                            symbol: '‍💦',
                            color: '#009DFF'
                        },
                        active: {
                            symbol: '💧',
                            color: '#59BFFF'
                        },
                        default: {
                            symbol: '💧',
                            color: '#BFE6FF'
                        }
                    }} />
            </div>

            <div className='main'>
                {
                    gardenPlot.map((plot, index) => {

                        let newInteractOptions = [...interactList]

                        if ((userInfo.water - [100 - plot.water]) > 0 && plot.water !== 100) {
                            newInteractOptions = [...newInteractOptions, { value: "water", label: "Water" }]
                        } else {
                            newInteractOptions = [...interactList]
                        }

                        if (plot) {
                            return <div key={`mainGarden${plot['plotType']}${index}`} className='plot'>
                                <img src={require(`../assets/plants/${plot["plotType"]}`)} alt="plot" />
                                {plot['plotType'] !== "empty_plot_lock.png" && <span>Plot: {plot["plotType"].substring(0, plot["plotType"].length - 4)}</span>}
                                {
                                    (plot['plotType'] !== "empty_plot_lock.png" && plot['plotType'] !== "empty_plot.png") &&
                                    <span>Water: {plot.water}% | Health: {plot.health}% | Quality: +{plot.quality}% </span>
                                }

                                {
                                    (plot['plotType'] !== "empty_plot_lock.png" && plot['plotType'] !== "empty_plot.png") &&
                                    <Progress
                                        percent={plot.water}
                                        theme={{
                                            success: {
                                                symbol: '‍💙',
                                                color: '#009DFF'
                                            },
                                            active: {
                                                symbol: '💧',
                                                color: '#59BFFF'
                                            },
                                            default: {
                                                symbol: '🐪',
                                                color: '#BFE6FF'
                                            }
                                        }}

                                    />
                                }

                                {
                                    (plot['plotType'] !== "empty_plot_lock.png" && plot['plotType'] !== "empty_plot.png") &&
                                    <Progress
                                        percent={plot.health}
                                        theme={{
                                            success: {
                                                symbol: '‍💚',
                                                color: '#16C60C'
                                            },
                                            active: {
                                                symbol: '💛',
                                                color: '#FCE100'
                                            },
                                            default: {
                                                symbol: '❤️',
                                                color: '#E81224'
                                            }
                                        }} />
                                }

                                {
                                    (plot['plotType'] !== "empty_plot_lock.png" && plot['plotType'] !== "empty_plot.png") &&
                                    <Progress
                                        percent={plot.quality}
                                        theme={{
                                            success: {
                                                symbol: '‍👑',
                                                color: '#F8BA00'
                                            },
                                            active: {
                                                symbol: '💰',
                                                color: '#F8D670'
                                            },
                                            default: {
                                                symbol: '🤡',
                                                color: '#FFFFFF'
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

                                {/* Planting Seeds button */}
                                {
                                    (plot['plotType'] !== "empty_plot_lock.png" && plot['plotType'] === "empty_plot.png") &&
                                    <button onClick={() => dispatch(plantSeed(availableSeeds, index))}>Plant</button>

                                }

                                {/* Interact with the Seeds */}

                                {

                                    (plot['plotType'] !== "empty_plot_lock.png" && plot['plotType'] !== "empty_plot.png") &&
                                    <Select
                                        components={makeAnimated()}
                                        placeholder={"Interact"}
                                        options={newInteractOptions}
                                        onChange={setPlantInteraction}
                                        autoFocus

                                    />
                                }

                                {

                                    (plot['plotType'] !== "empty_plot_lock.png" && plot['plotType'] !== "empty_plot.png") &&
                                    <button onClick={() => dispatch(interact({ ...plantInteraction, plot }))}>Interact</button>

                                }

                                {/* Progress Bar before Harvest */}
                                {

                                    (plot['plotType'] !== "empty_plot_lock.png" && plot['plotType'] !== "empty_plot.png") &&
                                    <Progress
                                        percent={plot.harvest}
                                        theme={{
                                            success: {
                                                symbol: '‍🌻',
                                                color: '#0F9200'
                                            },
                                            active: {
                                                symbol: '🌱',
                                                color: '#30CB00'
                                            },
                                            default: {
                                                symbol: '🌰',
                                                color: '#4AE54A'
                                            }
                                        }}
                                    />

                                }

                            </div>


                        } else {
                            return <div className='plot'>
                                <img src={require('../assets/plants/empty_plot.png')} alt="plot" /></div>
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
    interactList: state.game.interact_list
});

export default connect(mapStateToProps, { plantSeed, interact })(MainGarden);
