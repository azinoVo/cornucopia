import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Table } from 'reactstrap';


const GeneralShop = ({ shop, user, prices }) => {
    const [gameShop, setShop] = useState([])
    const [userInfo, setUser] = useState({})
    const [shopPrices, setPrices] = useState({})


    useEffect(() => {
        console.log("shop", shop)
        setShop(shop)
    }, [shop])

    useEffect(() => {
        console.log("user", user)
        setUser(user)
    }, [user])

    useEffect(() => {
        console.log("prices", prices)
        setPrices(prices)
    }, [prices])


    return (
        <section className='main-content'>
            <h1 className='shop-header'>Welcome to the Shop!</h1>
            <div className='general'>
                <div className='user-info'>
                    <span>Mana Essences: {userInfo.currency}</span>
                </div>
                {/* <ul className='shop-list'>
                    <li style={{ "text-decoration": "underline" }}>
                        <span>Item</span>
                        <span>Inventory Amount</span>
                        <span>Price</span>
                        <span>Buy Item</span>
                        <span>Sell Item</span>
                    </li>
                    {
                        gameShop.map((item, index) => {
                            console.log("gameshop", shop[userInfo.inventory[item]])
                            return <li className='shop-item' key={`shopItem${index}`}>
                                <span>itemIcon {item}</span>
                                {shop[userInfo.inventory[item]] ? <span>{userInfo.inventory[item]}</span> : <span>0</span>}
                                <span>{shopPrices[item]} Essences</span>
                                {(userInfo.currency >= shopPrices[item]) ? <button>Buy</button> : <span>Not enough Essences</span>}
                                {shop[userInfo.inventory[item]] ? <button>Sell</button> : <span>None to Sell</span>}
                            </li>
                        })
                    }
                </ul> */}

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
                            console.log("gameshop", shop[userInfo.inventory[item]])
                            return <tr className='shop-item' key={`shopItem${index}`}>
                                <th>itemIcon {item}</th>
                                {shop[userInfo.inventory[item]] ? <th>{userInfo.inventory[item]}</th> : <th>0</th>}
                                <th>{shopPrices[item]} Essences</th>
                                {(userInfo.currency >= shopPrices[item]) ? <th><button>Buy</button></th> : <th>Not enough Essences</th>}
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

export default connect(mapStateToProps, {})(GeneralShop);
