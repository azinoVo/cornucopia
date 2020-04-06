import React, { useState } from 'react';
import Popup from "reactjs-popup";
import { useDispatch } from 'react-redux';


const GuessTheCardModal = () => {

    const dispatch = useDispatch()


    const pickCard = () => {
        // Add code here
        
    }


    return (
        <Popup trigger={<button className="button">Guess The Card</button>} modal>

            {close => (
                <div className="guess-modal">
                    <h1>Guess The Card</h1>
                    

                    <div className="content">
                        {/* Add the content here */}
                    </div>

                    <div className="actions">
                        <button
                            className="button"
                            onClick={() => {
                                close();
                            }}
                        >
                            Leave
            </button>

                    </div>
                </div>
            )}
        </Popup>

    )
};


export default GuessTheCardModal;