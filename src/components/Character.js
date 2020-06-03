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
        if(statPoints >= 1) {
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
        
    }

    const controlStatsDecrease = (stat) => {
        // stat is the stat that will be controlled
        console.log("Within controlStats DECREASE")

        if(statPoints <= 29) {
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
                <button onClick={() => controlStatsDecrease('constitution') }>REDUCE</button>
                <span>Constitution: {constitution}</span>
                <button onClick={() => controlStatsIncrease('constitution') }>INCREASE</button>
            </div>

            <div>
                <button>REDUCE</button>
                <span>Attack</span>
                <button>INCREASE</button>
            </div>

            <div>
                <button>REDUCE</button>
                <span>Defense</span>
                <button>INCREASE</button>
            </div>

            <div>
                <button>REDUCE</button>
                <span>Dexterity</span>
                <button>INCREASE</button>
            </div>

            <div>
                <button>REDUCE</button>
                <span>Intelligence</span>
                <button>INCREASE</button>
            </div>

            <div>
                <button>REDUCE</button>
                <span>Speed</span>
                <button>INCREASE</button>
            </div>
        </div>
    </div>
    );
}

const mapStateToProps = state => ({
    log: state.game.log,
});

export default connect(mapStateToProps, {})(Character);