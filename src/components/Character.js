import React, { useState, useEffect } from 'react';
import { setCharacterStats } from '../actions';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';

const Character = ({ skillPoint, userBase, userBattleStats }) => {
    const [statPoints, setStatPoints] = useState(30)
    const [gender, setGender] = useState('Male')
    const [constitution, setConstitution] = useState(0)
    const [attack, setAttack] = useState(0)
    const [defense, setDefense] = useState(0)
    const [dexterity, setDexterity] = useState(0)
    const [intelligence, setIntelligence] = useState(0)
    const [speed, setSpeed] = useState(0)

    const dispatch = useDispatch()

    const controlStatsIncrease = (stat) => {
        // stat is the stat that will be controlled
        switch (stat) {
            case 'constitution':
                setConstitution(constitution + 1)
                setStatPoints(statPoints - 1)
                break;
            case 'attack':
                setAttack(attack + 1)
                setStatPoints(statPoints - 1)
                break;
            case 'defense':
                setDefense(defense + 1)
                setStatPoints(statPoints - 1)
                break;
            case 'dexterity':
                setDexterity(dexterity + 1)
                setStatPoints(statPoints - 1)
                break;
            case 'intelligence':
                setIntelligence(intelligence + 1)
                setStatPoints(statPoints - 1)
                break;
            case 'speed':
                setSpeed(speed + 1)
                setStatPoints(statPoints - 1)
                break;
            default:
                console.log('None matches, Check it again.')
        }

    }

    const controlStatsDecrease = (stat) => {
        // stat is the stat that will be controlled

        switch (stat) {
            case 'constitution':
                setConstitution(constitution - 1)
                setStatPoints(statPoints + 1)
                break;
            case 'attack':
                setAttack(attack - 1)
                setStatPoints(statPoints + 1)
                break;
            case 'defense':
                setDefense(defense - 1)
                setStatPoints(statPoints + 1)
                break;
            case 'dexterity':
                setDexterity(dexterity - 1)
                setStatPoints(statPoints + 1)
                break;
            case 'intelligence':
                setIntelligence(intelligence - 1)
                setStatPoints(statPoints + 1)
                break;
            case 'speed':
                setSpeed(speed - 1)
                setStatPoints(statPoints + 1)
                break;
            default:
                console.log('None matches, Check it again.')
        }
    }

    const changeGender = () => {
        if(gender === 'Male') {
            setGender('Female')
        } else {
            setGender('Male')
        }
    }

    const resetPoints = () => {
        setAttack(0)
        setConstitution(0)
        setDefense(0)
        setDexterity(0)
        setIntelligence(0)
        setSpeed(0)
        setStatPoints(skillPoint)
    }

    const confirmStats = () => {
        let stats = {
            'gender': gender,
            'level': 1,
            'constitution': constitution,
            'attack': attack,
            'defense': defense,
            'dexterity': dexterity,
            'intelligence': intelligence,
            'speed': speed
        }

        dispatch(setCharacterStats(stats, statPoints))
        resetPoints()
    }

    useEffect(() => {
        setStatPoints(skillPoint)
    }, [skillPoint])

    return (
        <div>
            <h1>This is the character creation page.</h1>
            <div className='stats'>
                <div>
                    <p>Gender: {gender}</p>
                    <button onClick={() => changeGender()}>Change Gender</button>
                </div>

                <div>
                    <p>Remaining Stat Points: {statPoints}</p>
                </div>

                <div>
                    <button disabled={constitution > 0 ? false : true} onClick={() => controlStatsDecrease('constitution')}>-</button>
                    <span> + {constitution} </span>
                    <button disabled={statPoints > 0 ? false : true} onClick={() => controlStatsIncrease('constitution')}>+</button>
                    <span> Constitution: {userBase.constitution}, Health Points: {userBattleStats.health} <strong>Amount of points before mortality.</strong></span>
                </div>

                <div>
                    <button disabled={attack > 0 ? false : true} onClick={() => controlStatsDecrease('attack')}>-</button>
                    <span> + {attack} </span>
                    <button disabled={statPoints > 0 ? false : true} onClick={() => controlStatsIncrease('attack')}>+</button>
                    <span> Attack: {userBase.attack}, Attack Power: {userBattleStats.attackPower} <strong>Damage of Physical attacks and abilities.</strong></span>
                </div>

                <div>
                    <button disabled={defense > 0 ? false : true} onClick={() => controlStatsDecrease('defense')}>-</button>
                    <span> + {defense} </span>
                    <button disabled={statPoints > 0 ? false : true} onClick={() => controlStatsIncrease('defense')}>+</button>
                    <span> Defense: {userBase.defense}, Damage Reduction: {Math.ceil(userBattleStats.damageReduction*100)}% <strong>Damage Mitigation.</strong></span>

                </div>

                <div>
                    <button disabled={dexterity > 0 ? false : true} onClick={() => controlStatsDecrease('dexterity')}>-</button>
                    <span> + {dexterity} </span>
                    <button disabled={statPoints > 0 ? false : true} onClick={() => controlStatsIncrease('dexterity')}>+</button>
                    <span> Dexterity: {userBase.dexterity}, Dodge Chance: {Math.ceil(userBattleStats.dodge*100)}% <strong>Determines your Dodge Chance.</strong></span>

                </div>

                <div>
                    <button disabled={intelligence > 0 ? false : true} onClick={() => controlStatsDecrease('intelligence')}>-</button>
                    <span> + {intelligence} </span>
                    <button disabled={statPoints > 0 ? false : true} onClick={() => controlStatsIncrease('intelligence')}>+</button>
                    <span> Intelligence: {userBase.intelligence}, Magic Power: {userBattleStats.magicPower} <strong>Damage of Magical abilities.</strong></span>

                </div>

                <div>
                    <button disabled={speed > 0 ? false : true} onClick={() => controlStatsDecrease('speed')}>-</button>
                    <span> + {speed} </span>
                    <button disabled={statPoints > 0 ? false : true} onClick={() => controlStatsIncrease('speed')}>+</button>
                    <span> Speed: {userBase.speed}, Turn Speed: {userBattleStats.turnSpeed} <strong>Turn Priority.</strong></span>
                </div>


                <button disabled={statPoints < skillPoint ? false : true} onClick={() => resetPoints()}>RESET</button>
                {/* add a way so that user can allocate any number of skill points: need counter and subtract counter within reducer */}
                <button disabled={statPoints >= 0 ? false : true} onClick={() => confirmStats()}>CONFIRM</button>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    userBase: state.user.stats,
    userBattleStats: state.user.battleStats,
    skillPoint: state.user.skillPoint

});

export default connect(mapStateToProps, { setCharacterStats })(Character);