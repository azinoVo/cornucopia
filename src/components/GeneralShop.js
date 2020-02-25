import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Table } from 'reactstrap';
import { buyItem } from '../actions';

const GeneralShop = ({ shop, user, prices }) => {
    const [gameShop, setShop] = useState([])
    const [userInfo, setUser] = useState({})
    const [shopPrices, setPrices] = useState({})


    useEffect(() => {
        setShop(shop)
    }, [shop])

    useEffect(() => {
        setUser(user)
    }, [user])

    useEffect(() => {
        setPrices(prices)
    }, [prices])


    return (
        <section className='main-content'>
            <h1 className='shop-header'>Welcome to the Shop!</h1>
            <div className='general'>
                <div className='user-info'>
                    <span>Mana Essences: {userInfo.currency}</span>
                </div>

                <Table bordered>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Inventory</th>
                            <th>Price</th>
                            <th>Buy</th>
                            <th>Sell</th>
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
                                {shop[userInfo.inventory[item]] ? <th>{userInfo.inventory[item]}</th> : <th>0</th>}
                                <th>{shopPrices[item]} Essences</th>
                                {(userInfo.currency >= shopPrices[item]) ? <th><button onClick={() => buyItem(set)}>Buy</button></th> : <th>Not enough Essences</th>}
                                {shop[userInfo.inventory[item]] ? <th><button>Sell</button></th> : <th>None to Sell</th>}
                            </tr>
                        })
                    }
                        
                    </tbody>
                </Table>
            </div>
        </section>
    );
}

const mapStateToProps = state => ({
    shop: state.game.shop,
    prices: state.game.shopPrices,
    user: state.user
});

export default connect(mapStateToProps, {buyItem})(GeneralShop);
