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
                <ul>
                    {
                        gameShop.map((item, index) => {
                            return <li key={`shopItem${index}`}>{item}</li>
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
