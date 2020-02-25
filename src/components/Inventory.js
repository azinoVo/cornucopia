import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Table } from 'reactstrap';

const Inventory = ({ shop, user, prices }) => {
    const [userCurrency, setCurrency] = useState(0)
    const [userInventory, setInventory] = useState({})
    const [shopPrices, setPrices] = useState({})

    useEffect(() => {
        setCurrency(user.currency)
    }, [user])

    useEffect(() => {
        setInventory(user.inventory)
    }, [user])

    useEffect(() => {
        setPrices(prices)
    }, [prices])

    console.log(userCurrency, userInventory, shopPrices)
    return (
        <section className='main-content'>
            <h1 className='tab-header'>Personal Inventory</h1>
            <div className='inventory'>
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
                                        <th>{shopPrices[entry[0]]}</th>
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
    shop: state.game.shop,
    prices: state.game.shopPrices,
    user: state.user
});

export default connect(mapStateToProps, {})(Inventory);

