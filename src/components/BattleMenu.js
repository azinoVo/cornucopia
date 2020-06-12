import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';

const BattleMenu = ({ encountersList, userBattleStats }) => {
    const [encounter, setEncounter] = useState({})
    const [userStats, setUserStats] = useState({})

    const dispatch = useDispatch()

    useEffect(() => {
        console.log('encounters', encountersList, 'user_stats', userBattleStats)
        setUserStats(userBattleStats)

    }, [userBattleStats])

    return (
        <div>
            <h1>This is the battle menu.</h1>
            {/* This button will randomize a number and pick a 
            creature from within the encounter array to send to currentEncounter within reducer. */}
            <button>Spawn a Random Enemy</button>


            <div className='battle-container'>
                <div className='enemy'>
                    {/* This information will be displayed from currentEncounters within reducer */}
                    <p>Picture Here or Animation</p>
                    <p>Health Amount</p>
                </div>

                <div className='battle-log'>
                    <p>This will be the battle log.</p>
                </div>

                <div className='user'>
                    <button>Auto Attack</button>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    encountersList: state.game.encounters,
    userBattleStats: state.user.battleStats
});

export default connect(mapStateToProps, { })(BattleMenu);