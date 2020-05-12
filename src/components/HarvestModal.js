import React from "react";
import Popup from "reactjs-popup";
import { Table } from 'reactstrap';

export default ({ plotInfo, cropPrices, storeCropHandler, sellCropHandler, amountHarvested, dateEntry }) => (
    <Popup trigger={<button className="button">Harvest</button>} modal>
        {close => (
            <div className="harvest-modal">
                {
                    (!plotInfo.product.includes('Heart') && plotInfo.plotType.includes('seed')) ?
                        <img src={require(`../assets/plants/${plotInfo['plotType']}_harvest.gif`)} alt="modal plot" /> :
                        !plotInfo.plotType.includes('sapling') && <img src={require(`../assets/plants/${plotInfo['plotType']}_heart.gif`)} alt="modal plot" />
                }

                {
                    (!plotInfo.product.includes('Essence_of_the_One') && plotInfo.plotType.includes('sapling')) ?
                        <span>Regular harvest img</span> :
                        plotInfo.product.includes('Essence_of_the_One') && <span>Special Essence of the One Harvest</span>
                }

                <div className="content">
                    <h2>{plotInfo.product}</h2>

                    <Table bordered>
                        <thead>
                            <tr>
                                <th>Category</th>
                                <th>Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Base Value</td>
                                <td>{cropPrices[`${plotInfo.plotType}`][`${plotInfo.product}`]}</td>
                            </tr>

                            {plotInfo.plotType.includes('seed') && <tr>
                                <td>Seasonal Bonus</td>
                                {dateEntry === plotInfo.plotType && <td>+ {Math.ceil(cropPrices[`${plotInfo.plotType}`][`${plotInfo.product}`] * 1.5)}</td>}
                                {dateEntry === `max_${plotInfo.plotType}` && <td>+ {Math.ceil(cropPrices[`${plotInfo.plotType}`][`${plotInfo.product}`] * 2)}</td>}

                            </tr>}

                            <tr>
                                <td>Water Bonus</td>
                                <td>+ {Math.ceil(cropPrices[`${plotInfo.plotType}`][`${plotInfo.product}`] * plotInfo.water * 0.0015)}</td>
                            </tr>

                            <tr>
                                <td>Health Bonus</td>
                                <td>+ {Math.ceil(cropPrices[`${plotInfo.plotType}`][`${plotInfo.product}`] * plotInfo.health * 0.0025)}</td>
                            </tr>

                            <tr>
                                <td>Quality Bonus</td>
                                <td>+ {Math.ceil(cropPrices[`${plotInfo.plotType}`][`${plotInfo.product}`] * [plotInfo.quality / 100])}</td>
                            </tr>

                            <tr>
                                <td>Amount Harvested</td>
                                <td>x {amountHarvested}</td>
                            </tr>

                            <tr>
                                <td>Total Value</td>
                                <td>{
                                    Math.ceil((cropPrices[`${plotInfo.plotType}`][`${plotInfo.product}`] +
                                        Math.ceil(cropPrices[`${plotInfo.plotType}`][`${plotInfo.product}`] * plotInfo.water * 0.0015) +
                                        Math.ceil(cropPrices[`${plotInfo.plotType}`][`${plotInfo.product}`] * plotInfo.health * 0.0025) +
                                        Math.ceil(cropPrices[`${plotInfo.plotType}`][`${plotInfo.product}`] * [plotInfo.quality / 100])) +
                                        (dateEntry === plotInfo.plotType && Math.ceil(cropPrices[`${plotInfo.plotType}`][`${plotInfo.product}`] * 1.5)) +
                                        (dateEntry === `max_${plotInfo.plotType}` && Math.ceil(cropPrices[`${plotInfo.plotType}`][`${plotInfo.product}`] * 2))
                                        * amountHarvested)
                                } Mana Essences</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>

                <div className="actions">
                    <button
                        className="button"
                        onClick={() => {
                            console.log("store in inventory then close");
                            storeCropHandler({
                                name: plotInfo.product,
                                amount: amountHarvested,
                                value: Math.ceil((cropPrices[`${plotInfo.plotType}`][`${plotInfo.product}`] +
                                    Math.ceil(cropPrices[`${plotInfo.plotType}`][`${plotInfo.product}`] * plotInfo.water * 0.0015) +
                                    Math.ceil(cropPrices[`${plotInfo.plotType}`][`${plotInfo.product}`] * plotInfo.health * 0.0025) +
                                    Math.ceil(cropPrices[`${plotInfo.plotType}`][`${plotInfo.product}`] * [plotInfo.quality / 100])) +
                                    (dateEntry === plotInfo.plotType && Math.ceil(cropPrices[`${plotInfo.plotType}`][`${plotInfo.product}`] * 1.5)) +
                                    (dateEntry === `max_${plotInfo.plotType}` && Math.ceil(cropPrices[`${plotInfo.plotType}`][`${plotInfo.product}`] * 2))
                                    *amountHarvested)
                            }, plotInfo.id)
                            close();
                        }}
                    >
                        Store & Close
                    </button>

                    <button
                        className="button"
                        onClick={() => {
                            console.log("sell then close");
                            sellCropHandler({
                                name: plotInfo.product,
                                id: Date.now(),
                                amount: amountHarvested,
                                value: Math.ceil((cropPrices[`${plotInfo.plotType}`][`${plotInfo.product}`] +
                                    Math.ceil(cropPrices[`${plotInfo.plotType}`][`${plotInfo.product}`] * plotInfo.water * 0.0015) +
                                    Math.ceil(cropPrices[`${plotInfo.plotType}`][`${plotInfo.product}`] * plotInfo.health * 0.0025) +
                                    Math.ceil(cropPrices[`${plotInfo.plotType}`][`${plotInfo.product}`] * [plotInfo.quality / 100])) +
                                    (dateEntry === plotInfo.plotType && Math.ceil(cropPrices[`${plotInfo.plotType}`][`${plotInfo.product}`] * 1.5)) +
                                    (dateEntry === `max_${plotInfo.plotType}` && Math.ceil(cropPrices[`${plotInfo.plotType}`][`${plotInfo.product}`] * 2))
                                    *amountHarvested)
                            }, plotInfo.id)
                            close();
                        }}
                    >
                        Sell & Close
                    </button>
                </div>
            </div>
        )}
    </Popup>
);