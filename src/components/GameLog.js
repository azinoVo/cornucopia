import React, { useState, useEffect } from 'react';
import { setLogEntry } from '../actions';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';


const GameLog = ({ log }) => {
    const [gameLog, setLog] = useState([])

    const dispatch = useDispatch()


    useEffect(() => {
        if (log.length > 3) {
            const sliced = log.slice(Math.max(log.length - 3, 0))
            setLog(sliced)
            dispatch(setLogEntry(sliced))
        } else {
            setLog(log)
        }
    }, [log, dispatch])

    return (
        <div className='game-log'>
            <h2 className='tab-header'>Game Log</h2>
            <div className='log'>
                <ul>
                    {
                        gameLog.map((entry, index) => {
                            return <li key={`logEntry${index}`}>{entry}</li>
                        })
                    }
                </ul>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    log: state.game.log,
});

export default connect(mapStateToProps, {})(GameLog);