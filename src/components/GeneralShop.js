import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Table } from 'reactstrap';
import { buyItem, sellItem, buyPlot } from '../actions';
import { useDispatch } from 'react-redux';
import GameLog from './GameLog';

const GeneralShop = ({ shop, user, prices, plot_shop, limits }) => {
    const [gameShop, setShop] = useState([])
    const [plotShop, setPlotShop] = useState([])
    const [userInfo, setUser] = useState({})
    const [shopPrices, setPrices] = useState({})
    const [storeLimit, setLimits] = useState({})


    const dispatch = useDispatch()

    useEffect(() => {
        setShop(shop)
    }, [shop])

    useEffect(() => {
        setUser(user)
    }, [user])

    useEffect(() => {
        setPlotShop(plot_shop)
    }, [plot_shop])

    useEffect(() => {
        setPrices(prices)
    }, [prices])

    useEffect(() => {
        setLimits(limits)
    }, [limits])


    return (
        <section className='main-content'>
            <h1 className='tab-header'>Welcome to the Shop!</h1>
            <div className='general'>
                <div className='user-info'>
                    <span>Mana Essences: {userInfo.essence}</span>
                </div>

                <Table bordered>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Inventory</th>
                            <th>Price</th>
                            <th>Buy</th>
                            <th>Sell for 75% Base</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            gameShop.map((item, index) => {

                                const set = {
                                    item: item,
                                    price: shopPrices[item]
                                }

                                return <tr className='shop-item' key={`shopItem${index}`}>
                                    <th>itemIcon {item}</th>
                                    {userInfo.inventory[item] ? <th>{userInfo.inventory[item]}</th> : <th>0</th>}
                                    <th>{shopPrices[item]} Mana Essences</th>
                                    {(userInfo.essence >= shopPrices[item]) ? <th><button onClick={() => dispatch(buyItem(set))}>Buy using {shopPrices[item]} Mana Essences</button></th> : <th>Not enough Mana Essences</th>}
                                    {(userInfo.inventory[item] && !item.includes('plot')) ? <th><button onClick={() => dispatch(sellItem(set))}>Sell for {Math.ceil(shopPrices[item] * 0.75)} Mana Essences</button></th> : <th>Cannot Sell</th>}
                                </tr>
                            })
                        }
                        {
                            plotShop.map((item, index) => {

                                const plotSet = {
                                    item: item,
                                    index: userInfo.inventory[item],
                                    price: shopPrices[item]
                                }

                                return <tr className='shop-item' key={`shopItem${index}`}>
                                    <th>itemIcon {item}</th>
                                    {userInfo.inventory[item] ? <th>{userInfo.inventory[item]}</th> : <th>0</th>}
                                    <th>{shopPrices[item]} Mana Essences</th>
                                    {(userInfo.essence >= shopPrices[item] && storeLimit[item] > userInfo.inventory[item]) ? <th><button onClick={() => dispatch(buyPlot(plotSet))}>Buy using {shopPrices[item]} Mana Essences</button></th> : <th>Insufficient Essences or Maximum {storeLimit[item]} Reached</th>}
                                    {(userInfo.inventory[item] && !item.includes('plot')) ? <th><button onClick={() => dispatch(sellItem(plotSet))}>Sell for {Math.ceil(shopPrices[item] * 0.75)} Mana Essences</button></th> : <th>Cannot Sell</th>}
                                </tr>
                            })
                        }
                    </tbody>

                </Table>
                <GameLog />

            </div>
        </section>

    );
}

const mapStateToProps = state => ({
    shop: state.game.shop,
    plot_shop: state.game.plot_shop,
    prices: state.game.shopPrices,
    limits: state.user.limits,
    user: state.user
});

export default connect(mapStateToProps, { buyItem, sellItem, buyPlot })(GeneralShop);
