import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { plantSeed, interact } from '../actions';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

const MainGarden = ({ mainGarden, user, limits, energyReq, interactList }) => {
    const [gardenPlot, setGardenPlot] = useState([])
    const [userInfo, setUserInfo] = useState({})
    const [availableSeeds, setAvailableSeeds] = useState({})
    const [plantInteraction, setPlantInteraction] = useState({})

    const dispatch = useDispatch()


    useEffect(() => {
        setGardenPlot(mainGarden)
    }, [mainGarden])

    useEffect(() => {
        setUserInfo(user)
    }, [user])

    const interactFunction = (set) => {
        console.log("set within function", set)
        dispatch(interact(set))

        setPlantInteraction({})
    }

    return (
        <section className='main-content'>
            <h1 className='tab-header'>Main Garden</h1>
            <div className='mainGarden-status'>
                <div>Energy: {Math.floor([userInfo.energy / limits.energy_limit] * 100)}%</div>
                <Progress
                    percent={Math.floor([userInfo.energy / limits.energy_limit] * 100)}
                    theme={{
                        success: {
                            symbol: '‍🔋',
                            color: '#16C60C'
                        },
                        active: {
                            symbol: '⚡',
                            color: '#FCE100'
                        },
                        default: {
                            symbol: '🛏️',
                            color: '#E81224'
                        }
                    }} />
                <div>Available Water: {Math.floor([userInfo.water / limits.water_limit] * 100)}%</div>
                <Progress
                    percent={Math.floor([userInfo.water / limits.water_limit] * 100)}
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

                        // If water conditions not met, Water will not be an option within Interact
                        if ((userInfo.water - [100 - plot.water]) >= 0 && plot.water !== 100 && userInfo.energy >= energyReq.water) {
                            newInteractOptions = [...newInteractOptions, { value: "water", label: "Water 5⚡", id: plot.id }]
                        } else {
                            newInteractOptions = [...newInteractOptions]
                        }

                        // Nourish requires a seed, 10 energy, and 15 water. It increase the overall stats of the plant by a little and triggers premature growth
                        if(userInfo.energy >= energyReq.nourish && plot.water >= 15) {
                            newInteractOptions = [...newInteractOptions, { value: "nourish", label: "Nourish 10⚡", id: plot.id }]
                        } else {
                            newInteractOptions = [...newInteractOptions]
                        }

                        // Condition for harvest is 100% on harvest of plot
                        if(plot.harvest >= 100) {
                            newInteractOptions = [...newInteractOptions, { value: "harvest", label: "Harvest", id: plot.id }]
                        } else {
                            newInteractOptions = [...newInteractOptions]
                        }

                        // Filters the seed List from inventory for ones that are above 1
                        const seedList = Object.entries(user.inventory).map(entry => {
                            if (!entry[0].includes("plot") && entry[1] >= 1) {
                                return { value: entry[0], label: `${entry[0]}: ${entry[1]} in inventory`, id: plot.id }
                            } else {
                                return ""
                            }
                        }).filter(item => item !== "")

                        if (plot) {
                            return <div key={`mainGarden${plot['plotType']}${index}`} className='plot'>
                                <img src={require(`../assets/plants/${plot['plotType']}${plot['plotStatus']}.${plot['fileType']}`)} alt="plot" />

                                {plot['plotType'] !== "empty_plot_lock.png" && <span>Plot: {plot["plotType"]}</span>}
                                {
                                    (plot['plotType'] !== "empty_plot_lock.png" && plot['plotType'] !== "empty_plot") &&
                                    <span>Water: {plot.water}% | Health: {plot.health}% | Quality: +{plot.quality}% </span>
                                }

                                {
                                    (plot['plotType'] !== "empty_plot_lock.png" && plot['plotType'] !== "empty_plot") &&
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
                                    (plot['plotType'] !== "empty_plot_lock.png" && plot['plotType'] !== "empty_plot") &&
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
                                                symbol: '💔',
                                                color: '#E81224'
                                            }
                                        }} />
                                }

                                {
                                    (plot['plotType'] !== "empty_plot_lock.png" && plot['plotType'] !== "empty_plot") &&
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
                                                symbol: '💩',
                                                color: '#FFFFFF'
                                            }
                                        }}
                                    />
                                }
 
                                {
                                        (userInfo.energy >= energyReq.plant_seed) ?

                                    (
                                    plot['plotType'] !== "empty_plot_lock.png" && 
                                    plot['plotType'] === "empty_plot") &&
                                    <Select
                                        components={makeAnimated()}
                                        placeholder={"Select Seed"}
                                        options={seedList}
                                        onChange={setAvailableSeeds}
                                        noOptionsMessage={() => "No Seeds Available. Please buy some."}
                                        autoFocus
                                    /> : plot['plotType'] === "empty_plot" && <span>Please recover more energy.</span>

                                }

                                {/* Planting Seeds button */}
                                {
                                    (
                                        availableSeeds['id'] === plot.id &&
                                        availableSeeds['value'] !== undefined &&
                                        plot['plotType'] !== "empty_plot_lock.png" &&
                                        plot['plotType'] === "empty_plot") &&
                                    <button onClick={() => dispatch(plantSeed(availableSeeds, index))}>Plant uses <span role='img' aria-label='energyReqWater'>5 ⚡</span></button>


                                }

                                {/* Interact with the Seeds */}

                                {

                                    (plot['plotType'] !== "empty_plot_lock.png" && plot['plotType'] !== "empty_plot") &&
                                    <Select
                                        components={makeAnimated()}
                                        placeholder={"Interact"}
                                        options={newInteractOptions}
                                        onChange={setPlantInteraction}
                                        autoFocus

                                    />
                                }

                                {
                                    console.log("energyLogic energyUser and energyPlanting", userInfo.energy, energyReq.plant_seed)
                                }

                                {

                                    (plantInteraction['id'] === plot.id &&
                                        plantInteraction['value'] !== undefined &&
                                        plot['plotType'] !== "empty_plot_lock.png" &&
                                        plot['plotType'] !== "empty_plot") &&
                                    <button onClick={() => interactFunction({ ...plantInteraction, plot })}>{plantInteraction['label']}</button>

                                }

                                {/* Progress Bar before Harvest */}
                                {

                                    (plot['plotType'] !== "empty_plot_lock.png" && plot['plotType'] !== "empty_plot") &&
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
                                <img src={require('../assets/plants/empty_plot_regular.png')} alt="plot" /></div>
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
    interactList: state.game.interact_list,
    limits: state.user.limits,
    energyReq: state.game.energyReq
});

export default connect(mapStateToProps, { plantSeed, interact })(MainGarden);
