import React, { useState, useEffect } from 'react';
import Popup from "reactjs-popup";
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';


const Calendar = ({ calendarList, date }) => {
    const [calendar, setCalendar] = useState([])
    const [day, setDay] = useState("")


    useEffect(() => {
        setCalendar(calendarList)
    }, [calendarList])

    useEffect(() => {
        setDay(date)
    }, [date])


    const dispatch = useDispatch()

    return (
        <Popup trigger={<button className="button">Calendar</button>} modal>

            {close => (
                <div className="calendar-modal">
                    <h1>Today is {calendar[day].date}</h1>
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

const mapStateToProps = state => ({
    date: state.game.date,
    calendarList: state.game.calendar
});

export default connect(mapStateToProps, {})(Calendar);
