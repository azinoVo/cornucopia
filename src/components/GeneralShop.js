import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';


const GeneralShop = ({ shop, user }) => {
    const [gameShop, setShop] = useState([])
    const [userInfo, setUser] = useState({})

    useEffect(() => {
        console.log("shop", shop)
        setShop(shop)
    }, [shop])

    useEffect(() => {
        console.log("user", user)
        setUser(user)
    }, [user])


    return (
        <section className='main-content'>
            <div className='shop-header'>Welcome to the Shop</div>
            <div className='general'>
                <div className='user-info'>
                    <span>Mana Essence Amount: {userInfo.currency}</span>
                </div>
                <ul className='shop-list'>
                    <li style={{"text-decoration": "underline"}}>
                        <span>Item</span>
                        <span>Inventory Amount</span>
                        <span>Buy Item</span>
                        <span>Sell Item</span>
                    </li>
                    {
                        gameShop.map((item, index) => {
                            return <li className='shop-item' key={`shopItem${index}`}>
                                <span>itemIcon {item}</span>
                                <span>x Inventory Amount</span>
                                <button>Buy</button>
                                <button>Sell</button>
                            </li>
                        })
                    }
                </ul>
            </div>
        </section>
    );
}

const mapStateToProps = state => ({
    shop: state.game.shop,
    user: state.user
});

export default connect(mapStateToProps, {})(GeneralShop);
