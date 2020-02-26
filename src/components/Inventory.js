import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Table } from 'reactstrap';

const Inventory = ({ user, prices }) => {
    const [userInfo, setUserInfo] = useState({})
    const [userInventory, setInventory] = useState({})
    const [shopPrices, setPrices] = useState({})

    useEffect(() => {
        setUserInfo(user)
    }, [user])

    useEffect(() => {
        setInventory(user.inventory)
    }, [user])

    useEffect(() => {
        setPrices(prices)
    }, [prices])

    return (
        <section className='main-content'>
            <h1 className='tab-header'>Personal Inventory</h1>
            <div className='inventory'>
                <div className='user-info'>
                    <ul>
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
            </div>
        </section>
    );
}

const mapStateToProps = state => ({
    prices: state.game.shopPrices,
    user: state.user
});

export default connect(mapStateToProps, {})(Inventory);

