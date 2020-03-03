import React from "react";
import Popup from "reactjs-popup";

export default ({ plotInfo }) => (
    <Popup trigger={<button className="button">Harvest</button>} modal>
        {close => (
            <div className="harvest-modal">
                <img src={require(`../assets/plants/${plotInfo['plotType']}${plotInfo['plotStatus']}.${plotInfo['fileType']}`)} alt="modal plot" />

                <h1>Harvest Breakdown</h1>
                <div className="content">
                    CONTENTS HERE
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