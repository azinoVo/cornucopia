import React, { useState } from 'react';
import Popup from "reactjs-popup";
import { guessWin } from '../actions';
import { useDispatch } from 'react-redux';


const Calendar = () => {

    const dispatch = useDispatch()

    return (
        <Popup trigger={<button className="button">Calendar</button>} modal>

            {close => (
                <div className="calendar-modal">
                    <h1>Today is "set custom date here"</h1>
                    <p>Description of the date and clues to benefits</p>
                    
                    <div className="content">
                        <h2>Do you want to rest for the day?</h2>
                        <button>Rest</button>
                    </div>

                    <div className="actions">
                        <button
                            className="button"
                            onClick={() => {
                                close();
                            }}
                        >
                            Return
            </button>

                    </div>
                </div>
            )}
        </Popup>

    )
};


export default Calendar;