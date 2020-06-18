import React, { useState, useEffect } from 'react';
import { setEncounterInfo, userBattleAction } from '../actions';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import BattleLog from './GameLog';

const BattleMenu = ({ encountersList, userBattleStats, currentEncounter, userAbilities }) => {
    const [inBattle, setInBattle] = useState(false)

    

    const dispatch = useDispatch()

    const randomEncounter = () => {
        let randomNumber = Math.floor((Math.random() * encountersList.length));

        dispatch(setEncounterInfo(encountersList[randomNumber]))
        setInBattle(!inBattle)
    }

    const battle = (userStats, encounterStats, ability) => {
        let encounterDodgeNumber = Math.floor((Math.random() * 100) + 1)
        let userDodgeNumber = Math.floor((Math.random() * 100) + 1)


        if(encounterDodgeNumber <= encounterStats.stats.dodge*100 && ability === 'Auto-Attack') {
            dispatch(userBattleAction(userStats, encounterStats, 'Dodged'))
        } else {
            dispatch(userBattleAction(userStats, encounterStats, ability))
        }
        

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

                <div className='user'>
                    <h2>User Menu</h2>
                    <p>Health: {userBattleStats.health}</p>
                    <p>Attack Power: {userBattleStats.attackPower}</p>
                    <p>Ultimate Points: {userBattleStats.ultimate}</p>
                    {
                        userAbilities.map(ability => {
                            return <button disabled={(ability.name.includes('Ultimate') && userBattleStats.ultimate === 0) ? true : false} onClick={() => battle(userBattleStats, currentEncounter, ability.name)} key={ability.name}>{ability.name}: {ability.description}</button>
                        })
                    }
                </div>

                <div className='battle-log'>
                    <h2>Battle Log</h2>
                    <BattleLog />
                </div>

            </div>}
        </div>
    );
}

const mapStateToProps = state => ({
    encountersList: state.game.encounters,
    currentEncounter: state.game.currentEncounter,
    userBattleStats: state.user.battleStats,
    userAbilities: state.user.abilities
});

export default connect(mapStateToProps, { userBattleAction, setEncounterInfo})(BattleMenu);