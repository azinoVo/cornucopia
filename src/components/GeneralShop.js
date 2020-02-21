import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';


const GeneralShop = ({ shop }) => {
    const [gameShop, setShop] = useState([])


    useEffect(() => {
        console.log("shop", shop)
        setShop(shop)
    }, [shop])

    return (
        <section className='main-content'>
            <div className='shop-header'>Welcome to the Shop</div>
            <div className='general'>
                <ul className='shop-list'>
                    <li>
                        <span>Item</span>
                        <span>Inventory Amount</span>
                        <span>Buy Item</span>
                        <span>Sell Item</span>
                    </li>
                    {
                        gameShop.map((item, index) => {
                            return <li key={`shopItem${index}`}>
                                <span>itemicon {item}</span>
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
});

export default connect(mapStateToProps, {})(GeneralShop);
