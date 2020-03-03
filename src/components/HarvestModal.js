import React from "react";
import Popup from "reactjs-popup";
import { Table } from 'reactstrap';

export default ({ plotInfo, cropPrices }) => (
    <Popup trigger={<button className="button">Harvest</button>} modal>
        {close => (
            <div className="harvest-modal">
                <img src={require(`../assets/plants/${plotInfo['plotType']}${plotInfo['plotStatus']}.${plotInfo['fileType']}`)} alt="modal plot" />
                <h1>Harvest Breakdown</h1>
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
                                <td>x 1</td>
                            </tr>

                            <tr>
                                <td>Total Value</td>
                                <td>{
                                    Math.ceil(cropPrices[`${plotInfo.plotType}`][`${plotInfo.product}`] +
                                        Math.ceil(cropPrices[`${plotInfo.plotType}`][`${plotInfo.product}`] * plotInfo.water * 0.0015) +
                                        Math.ceil(cropPrices[`${plotInfo.plotType}`][`${plotInfo.product}`] * plotInfo.health * 0.0025) +
                                        Math.ceil(cropPrices[`${plotInfo.plotType}`][`${plotInfo.product}`] * [plotInfo.quality / 100]))
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
                            close();
                        }}
                    >
                        Store & Close
                    </button>

                    <button
                        className="button"
                        onClick={() => {
                            console.log("sell then close");
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