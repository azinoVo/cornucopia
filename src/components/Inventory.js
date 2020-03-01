import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Table } from 'reactstrap';
import { Progress } from 'react-sweet-progress';
import GameLog from './GameLog';

const Inventory = ({ user, prices, limits, main_garden_plot }) => {
    const [userInfo, setUserInfo] = useState({})
    const [userInventory, setInventory] = useState({})
    const [shopPrices, setPrices] = useState({})
    const [mainGarden, setMainGarden] = useState([])


    useEffect(() => {
        setUserInfo(user)
    }, [user])

    useEffect(() => {
        setInventory(user.inventory)
    }, [user])

    useEffect(() => {
        setPrices(prices)
    }, [prices])

    useEffect(() => {
        setMainGarden(main_garden_plot)
    }, [main_garden_plot])

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
                                    </tr>
                                }
                                return ""
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
                                    (plot.plotType !== "empty_plot.png" && plot.plotType !== "empty_plot_lock.png") ?
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
                                    /> : <span> Please purchase the plot and plant a seed to track progress.</span>
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
    user: state.user
});

export default connect(mapStateToProps, {})(Inventory);

