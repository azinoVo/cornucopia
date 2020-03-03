import React from "react";
import Popup from "reactjs-popup";

export default ({ plotInfo, cropPrices }) => (
    <Popup trigger={<button className="button">Harvest</button>} modal>
        {close => (
            <div className="harvest-modal">
                <img src={require(`../assets/plants/${plotInfo['plotType']}${plotInfo['plotStatus']}.${plotInfo['fileType']}`)} alt="modal plot" />
                <h1>Harvest Breakdown</h1>
                <div className="content">

                    <div>Crop: {plotInfo.product}</div>
                    <div>Base Price: {cropPrices[`${plotInfo.plotType}`][`${plotInfo.product}`]}</div>
                    <div>Water Bonus: {Math.ceil(cropPrices[`${plotInfo.plotType}`][`${plotInfo.product}`] * plotInfo.water * 0.0015)}</div>
                    <div>Health Bonus: {Math.ceil(cropPrices[`${plotInfo.plotType}`][`${plotInfo.product}`] * plotInfo.health * 0.0025)}</div>
                    <div>Quality Bonus: {Math.ceil(cropPrices[`${plotInfo.plotType}`][`${plotInfo.product}`] * [plotInfo.quality/100])}</div>
                    <div>Sell Price: {
                        Math.ceil(cropPrices[`${plotInfo.plotType}`][`${plotInfo.product}`] + 
                        Math.ceil(cropPrices[`${plotInfo.plotType}`][`${plotInfo.product}`] * plotInfo.water * 0.0015)+
                        Math.ceil(cropPrices[`${plotInfo.plotType}`][`${plotInfo.product}`] * plotInfo.health * 0.0025)+
                        Math.ceil(cropPrices[`${plotInfo.plotType}`][`${plotInfo.product}`] * [plotInfo.quality/100]))
                        } Mana Essences</div>
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