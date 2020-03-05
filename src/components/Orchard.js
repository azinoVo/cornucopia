import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';


const Orchard = ({ orchard, user, limits, interactList, energyReq, cropList, cropPrices }) => {
    const [orchardPlot, setOrchard] = useState([])
    const [userInfo, setUserInfo] = useState({})
    const [availableSeeds, setAvailableSeeds] = useState({})


    const dispatch = useDispatch()


    useEffect(() => {
        setOrchard(orchard)
    }, [orchard])


    useEffect(() => {
        setUserInfo(user)
    }, [user])

    const plantSeedHandler = (set) => {

        let sapling = ""
        let randomNumber = Math.floor((Math.random() * 10) + 1);
        if (randomNumber <= 4) {
            sapling = cropList['trees'][0]

        } else if (randomNumber > 4 && randomNumber <= 6) {
            sapling = cropList['trees'][1]

        } else if (randomNumber > 6 && randomNumber < 8) {
            sapling = cropList['trees'][2]

        } else if (randomNumber >= 8 && randomNumber < 9) {
            sapling = cropList['trees'][3]

        } else if (randomNumber >= 9) {
            sapling = cropList['trees'][4]

        } else {
            return sapling
        }

        console.log(set, randomNumber, sapling)

        setAvailableSeeds({})

    }

    return (
        <section className='main-content'>
            <h1 className='tab-header'>Tree Orchard</h1>
            <div className='reuseGarden-status'>
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

            <div className='orchard'>
                {
                    orchardPlot.map((plot, index) => {
                        let newInteractOptions = [...interactList]

                        // If water conditions not met, Water will not be an option within Interact
                        if ((userInfo.water - [100 - plot.water]) >= 0 && plot.water !== 100 && plot.harvest < 100 && userInfo.energy >= energyReq.water) {
                            newInteractOptions = [...newInteractOptions, { value: "water", label: "Water 5⚡", id: plot.id }]
                        } else {
                            newInteractOptions = [...newInteractOptions]
                        }

                        const seedList = Object.entries(user.inventory).map(entry => {
                            if (entry[0].includes("sapling") && entry[1] >= 1) {
                                return { value: entry[0], label: `${entry[0]}: ${entry[1]} in inventory`, id: plot.id }
                            } else {
                                return ""
                            }
                        }).filter(item => item !== "")

                        if (plot) {
                            return <div key={`orchard${plot['plotType']}${index}`} className='plot'>
                                <img src={require(`../assets/plants/${plot['plotType']}${plot['plotStatus']}.${plot['fileType']}`)} alt="orchard plot" />
                                {plot['plotStatus'] !== "_lock" && <span>Plot: {plot["plotType"]}</span>}
                                {
                                    (plot['plotStatus'] !== "_lock" && plot['plotType'] !== "empty_plot") &&
                                    <span>Water: {plot.water}% | Health: {plot.health}% | Quality: +{plot.quality}% </span>
                                }

                                {
                                    (plot['plotStatus'] !== "_lock" && plot['plotType'] !== "empty_plot") &&
                                    <Progress
                                        percent={plot.water >= 100 ? 100 : plot.water}
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
                                    (plot['plotStatus'] !== "_lock" && plot['plotType'] !== "empty_plot") &&
                                    <Progress
                                        percent={plot.health >= 100 ? 100 : plot.health}
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
                                    (plot['plotStatus'] !== "_lock" && plot['plotType'] !== "empty_plot") &&
                                    <Progress
                                        percent={plot.quality >= 100 ? 100 : plot.quality}
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

                                    (plot['plotStatus'] !== "_lock" && plot['plotType'] !== "empty_plot") &&
                                    <Progress
                                        percent={plot.harvest >= 100 ? 100 : plot.harvest}
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

                                {
                                    (userInfo.energy >= energyReq.plant_sapling) ?

                                        (
                                            plot['plotStatus'] !== "_lock" &&
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

                                {
                                    (
                                        availableSeeds['id'] === plot.id &&
                                        availableSeeds['value'] !== undefined &&
                                        plot['plotStatus'] !== "_lock" &&
                                        plot['plotType'] === "empty_plot") &&
                                    <button onClick={() => plantSeedHandler(availableSeeds, index)}>Plant uses <span role='img' aria-label='energyReqWater'>25⚡</span></button>
                                }

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
    orchard: state.user.orchard_plot,
    user: state.user,
    limits: state.user.limits,
    interactList: state.game.interact_list,
    energyReq: state.game.energyReq,
    cropList: state.game.cropList,
    cropPrices: state.game.cropPrices

});

export default connect(mapStateToProps, {})(Orchard);