import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Table } from 'reactstrap';
import { Progress } from 'react-sweet-progress';
import { useDispatch } from 'react-redux';
import { sellCropInventory } from '../actions';
import GameLog from './GameLog';

const Inventory = ({ user, prices, limits, main_garden_plot, orchard_plot, crops }) => {
    const [userInfo, setUserInfo] = useState({})
    const [userInventory, setInventory] = useState({})
    const [shopPrices, setPrices] = useState({})
    const [mainGarden, setMainGarden] = useState([])
    const [orchardPlots, setOrchardPlots] = useState([])
    const [cropsList, setCrops] = useState([])

    


    const dispatch = useDispatch()

    useEffect(() => {
        setUserInfo(user)
    }, [user])

    useEffect(() => {
        setCrops(crops)
    }, [crops])

    useEffect(() => {
        setInventory(user.inventory)
    }, [user])

    useEffect(() => {
        setPrices(prices)
    }, [prices])

    useEffect(() => {
        setMainGarden(main_garden_plot)
    }, [main_garden_plot])

    useEffect(() => {
        setOrchardPlots(orchard_plot)
    }, [orchard_plot])

    return (
        <section className='main-content'>
            <h1 className='tab-header'>Personal Inventory</h1>
            <div className='inventory'>
                <div className='user-info'>
                    <ul>
                        <li>Energy: {userInfo.energy}/{limits.energy_limit}</li>
                        <li>Water Capacity: {userInfo.water}</li>
                        <li>Mana Essences: {userInfo.essence}</li>
                        <li>Favor: {userInfo.favor} </li>
                    </ul>
                </div>
                <Table bordered>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Quantity</th>
                            <th>Value</th>
                            <th>Sell</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Object.entries(userInventory).map((entry, index) => {
                                if (entry[1]) {
                                    return <tr className='shop-item' key={`inventoryItem${index}`}>
                                        <th>{entry[0]}</th>
                                        {<th>{entry[1]}</th>}
                                        <th>{shopPrices[entry[0]]} Mana Essences</th>
                                        {!entry[0].includes('plot') ? <th>Sell within Shop</th> : <th>Cannot Sell</th>}
                                    </tr>
                                }
                                return ""
                            })
                        }

                        {
                            cropsList.map((crop, index) => {
                                return <tr className='shop-item' key={`inventoryCrop${index}`}>
                                    <th>{crop.name}</th>
                                    <th>{crop.amount}</th>
                                    <th>{crop.value} Mana Essences</th>
                                    {!crop.name.includes('plot') ? <th><button onClick={() => dispatch(sellCropInventory(crop))}>Sell</button></th> : <th>Cannot Sell</th>}
  
                                </tr>
                            })
                        }
                    </tbody>
                </Table>
                <div className='plot-status'>
                    <h2 className='tab-header'>Main Garden Progress</h2>
                    {
                        mainGarden.map((plot, index) => {
                            return <div style={{"padding": "0.3% 0"}} key={`mainProgress${index}`}>
                                <span style={{"paddingRight": "0.5%"}}>Plot # {index}</span>
                                {
                                    (plot.plotType !== "empty_plot.png" && plot.plotStatus !== "_lock") ?
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
                                    /> : <span> Please purchase the plot and plant a seed to track progress.</span>
                                }

                            </div>
                        })
                    }
                </div>

                <div className='plot-status'>
                    <h2 className='tab-header'>Orchard Progress</h2>
                    {
                        orchardPlots.map((plot, index) => {
                            return <div style={{"padding": "0.3% 0"}} key={`mainProgress${index}`}>
                                <span style={{"paddingRight": "0.5%"}}>Plot # {index}</span>
                                {
                                    (plot.plotType !== "empty_plot.png" && plot.plotStatus !== "_lock") ?
                                    <Progress
                                        percent={plot.harvest >= 100 ? 100 : plot.harvest}
                                        theme={{
                                            success: {
                                                symbol: '‍🌸',
                                                color: '#0F9200'
                                            },
                                            active: {
                                                symbol: '🌳',
                                                color: '#30CB00'
                                            },
                                            default: {
                                                symbol: '🌱',
                                                color: '#4AE54A'
                                            }
                                        }}
                                    /> : <span> Please purchase the plot and plant a sapling to track progress.</span>
                                }

                            </div>
                        })
                    }
                </div>

                <GameLog />
            </div>
        </section>
    );
}

const mapStateToProps = state => ({
    prices: state.game.shopPrices,
    main_garden_plot: state.user.main_garden_plot,
    limits: state.user.limits,
    crops: state.user.crops,
    user: state.user,
    orchard_plot: state.user.orchard_plot
});

export default connect(mapStateToProps, { sellCropInventory })(Inventory);

