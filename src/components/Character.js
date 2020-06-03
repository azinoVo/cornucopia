import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

const Character = ({ log }) => {
    const [statPoints, setStatPoints] = useState(30)
    const [constitution, setConstitution] = useState(0)
    const [attack, setAttack] = useState(0)
    const [defense, setDefense] = useState(0)
    const [dexterity, setDexterity] = useState(0)
    const [intelligence, setIntelligence] = useState(0)
    const [speed, setSpeed] = useState(0)

    const controlStatsIncrease = (stat) => {
        // stat is the stat that will be controlled
        console.log("Within controlStats INCREASE")
            switch (stat) {
                case 'constitution':
                    setConstitution(constitution+1)
                    setStatPoints(statPoints-1)
                    break;
                case 'attack':
                    setAttack(attack+1)
                    setStatPoints(statPoints-1)
                    break;
                case 'defense':
                    setDefense(defense+1)
                    setStatPoints(statPoints-1)
                    break;
                case 'dexterity':
                    setDexterity(dexterity+1)
                    setStatPoints(statPoints-1)
                    break;
                case 'intelligence':
                    setIntelligence(intelligence+1)
                    setStatPoints(statPoints-1)
                    break;
                case 'speed':
                    setSpeed(speed+1)
                    setStatPoints(statPoints-1)
                    break;
                default:
                    console.log('None matches, Check it again.')
            }
        
    }

    const controlStatsDecrease = (stat) => {
        // stat is the stat that will be controlled
        console.log("Within controlStats DECREASE")

            switch (stat) {
                case 'constitution':
                    setConstitution(constitution-1)
                    setStatPoints(statPoints+1)
                    break;
                case 'attack':
                    setAttack(attack-1)
                    setStatPoints(statPoints+1)
                    break;
                case 'defense':
                    setDefense(defense-1)
                    setStatPoints(statPoints+1)
                    break;
                case 'dexterity':
                    setDexterity(dexterity-1)
                    setStatPoints(statPoints+1)
                    break;
                case 'intelligence':
                    setIntelligence(intelligence-1)
                    setStatPoints(statPoints+1)
                    break;
                case 'speed':
                    setSpeed(speed-1)
                    setStatPoints(statPoints+1)
                    break;
                default:
                    console.log('None matches, Check it again.')
            }
    }

    useEffect(() => {
        console.log("This is the character creation component.")
    }, [log])

    return (
    <div>
        <h1>This is the character creation page.</h1>
        <div className='stats'>
            <div>
                <div>BOY</div>
                <div>GIRL</div>
            </div>

            <div>
                <p>Remaining Stat Points: {statPoints}</p>
            </div>

            <div>
                <span>Constitution: {constitution}</span>
                {constitution > 0 && <button onClick={() => controlStatsDecrease('constitution') }>-</button>}
                {statPoints > 0 && <button onClick={() => controlStatsIncrease('constitution') }>+</button>}
            </div>

            <div>
                <span>Attack: {attack}</span>
                {attack > 0 && <button onClick={() => controlStatsDecrease('attack') }>-</button>}
                {statPoints > 0 && <button onClick={() => controlStatsIncrease('attack') }>+</button>}
            </div>

            <div>
                <span>Defense: {defense}</span>
                {defense > 0 && <button onClick={() => controlStatsDecrease('defense') }>-</button>}
                {statPoints > 0 && <button onClick={() => controlStatsIncrease('defense') }>+</button>}
            </div>

            <div>
                <span>Dexterity: {dexterity}</span>
                {dexterity > 0 && <button onClick={() => controlStatsDecrease('dexterity') }>-</button>}
                {statPoints > 0 && <button onClick={() => controlStatsIncrease('dexterity') }>+</button>}
            </div>

            <div>
                <span>Intelligence: {intelligence}</span>
                {intelligence > 0 && <button onClick={() => controlStatsDecrease('intelligence') }>-</button>}
                {statPoints > 0 && <button onClick={() => controlStatsIncrease('intelligence') }>+</button>}
            </div>

            <div>
                <span>Speed: {speed}</span>
                {speed > 0 && <button onClick={() => controlStatsDecrease('speed') }>-</button>}
                {statPoints > 0 && <button onClick={() => controlStatsIncrease('speed') }>+</button>}
            </div>
        </div>
    </div>
    );
}

const mapStateToProps = state => ({
    log: state.game.log,
});

export default connect(mapStateToProps, {})(Character);