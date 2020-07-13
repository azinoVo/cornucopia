import React, { useState, useEffect } from 'react';
import Popup from "reactjs-popup";
import { progressDate } from '../actions';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';


const Calendar = ({ calendarList, date }) => {
    const [calendar, setCalendar] = useState([])
    const [day, setDay] = useState("")


    const dispatch = useDispatch()

    useEffect(() => {
        setCalendar(calendarList)
    }, [calendarList])

    useEffect(() => {
        setDay(date)
    }, [date])

    return (
        <Popup trigger={<button className="button">Calendar</button>} modal>

            {close => (
                <div className="calendar-modal">
                    <h1>Today is {calendar[day].date}</h1>
                    <p>{calendar[day].benefit}</p>
                    
                    <div className="content">
                        <h2>Do you want to rest for the day?</h2>
                        <p>Changing the date will progress one day of the current season up to Day V.</p>
                        <button onClick={() => dispatch(progressDate(date))}>Rest</button>
                        {/* Possibly add a feature here that will display a calendar? */}
                    </div>

                    <div className="actions">
                        <button className="button" onClick={() => { close(); }}>Return </button>
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
