import React, { useState, useEffect } from 'react';
import { setEncounterInfo } from '../actions';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';

const BattleMenu = ({ encountersList, userBattleStats, currentEncounter }) => {
    const [inBattle, setInBattle] = useState(false)

    

    const dispatch = useDispatch()

    const randomEncounter = () => {
        let randomNumber = Math.floor((Math.random() * encountersList.length));
        console.log('randomNumber', randomNumber)

        dispatch(setEncounterInfo(encountersList[randomNumber]))
        setInBattle(!inBattle)
    }

    return (
        <div>
            <h1>This is the battle menu.</h1>
            {/* This button will randomize a number and pick a 
            creature from within the encounter array to send to currentEncounter within reducer. */}
            <button onClick={() => randomEncounter()}>Spawn a Random Enemy</button>


            {inBattle && <div className='battle-container'>
                <div className='enemy'>
                    {/* This information will be displayed from currentEncounters within reducer */}
                    <h2>Enemy Menu</h2>
                    {currentEncounter ? <p>{currentEncounter.name}</p> : 'No Encounters'}
                    <p>Picture Here or Animation</p>
                    {currentEncounter && <p>Health: {currentEncounter.stats['health']}</p>}
                </div>

                <div className='battle-log'>
                    <h2>Battle Log</h2>
                    <p>This will be the battle log.</p>
                </div>

                <div className='user'>
                    <h2>User Menu</h2>
                    <p>Health: {userBattleStats.health}</p>
                    <button>Auto Attack</button>
                </div>
            </div>}
        </div>
    );
}

const mapStateToProps = state => ({
    encountersList: state.game.encounters,
    currentEncounter: state.game.currentEncounter,
    userBattleStats: state.user.battleStats
});

export default connect(mapStateToProps, { })(BattleMenu);