import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

const GameLog = ({ log }) => {
    const [gameLog, setLog] = useState([])

    useEffect(() => {
        if (log.length > 5) {
            const sliced = log.slice(Math.max(log.length - 5, 0))
            setLog(sliced)
        } else {
            setLog(log)
        }
    }, [log])

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