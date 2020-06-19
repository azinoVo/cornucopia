import React, { useState } from 'react';
import { setEncounterInfo, userBattleAction, encounterBattleAction } from '../actions';
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
        let encounterSkillNumber = Math.floor((Math.random() * encounterStats.abilities.length))

        console.log('userDodge', userDodgeNumber, '<=', userStats.dodge*100, 'encounterDodge', encounterStats.stats.dodge, '<=', encounterDodgeNumber)


        if (encounterDodgeNumber <= encounterStats.stats.dodge * 100
            && ability === 'Auto-Attack'
            ) {
            dispatch(userBattleAction(userStats, encounterStats, 'Encounter-Dodged'))
        } else {
            dispatch(userBattleAction(userStats, encounterStats, ability))
        }

        if (userDodgeNumber <= userStats.dodge*100
            && encounterStats.abilities[encounterSkillNumber] === 'Auto-Attack'
            && ability !== 'Charge'
            && currentEncounter.stats.health > 0
        ) {
            dispatch(encounterBattleAction(userStats, encounterStats, 'User-Dodged'))
        } else {
            dispatch(encounterBattleAction(userStats, encounterStats, encounterStats.abilities[encounterSkillNumber]))
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

                {currentEncounter.stats.health > 0 && <div className='user'>
                    <h2>User Menu</h2>
                    <p>Health: {userBattleStats.health}</p>
                    <p>Attack Power: {userBattleStats.attackPower}</p>
                    <p>Ultimate Points: {userBattleStats.ultimate}</p>
                    {
                        userAbilities.map(ability => {
                            return <button
                                className='ability-button'
                                disabled={((ability.name.includes('Ultimate') && userBattleStats.ultimate === 0) || userBattleStats.health === 0) ? true : false} onClick={() =>
                                    battle(userBattleStats, currentEncounter, ability.name)} key={ability.name}>{ability.name}: {ability.description}</button>
                        })
                    }
                </div>}

                {currentEncounter.stats.health > 0 && <div className='battle-log'>
                    <h2>Battle Log</h2>
                    <BattleLog />
                </div>}

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

export default connect(mapStateToProps, { userBattleAction, setEncounterInfo })(BattleMenu);