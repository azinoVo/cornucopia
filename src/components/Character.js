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

    controlStatsIncrease = (stat) => {
        // stat is the stat that will be controlled
        console.log("Within controlStats INCREASE")
        if(statPoints > 0) {
            switch (stat) {
                case 'attack':
                    setAttack(attack+1)
                    setStatPoints(statPoints-1)
                case 'defense':
                    setDefense(defense+1)
                    setStatPoints(statPoints-1)
                case 'dexterity':
                    setDexterity(dexterity+1)
                    setStatPoints(statPoints-1)
                case 'intelligence':
                    setIntelligence(intelligence+1)
                    setStatPoints(statPoints-1)
                case 'speed':
                    setSpeed(speed+1)
                    setStatPoints(statPoints-1)
                default:
                    console.log('None matches, Check it again.')
            }
        }
        
    }

    controlStatsDecrease = (stat) => {
        // stat is the stat that will be controlled
        console.log("Within controlStats DECREASE")

        if(statPoints <= 30) {
            switch (stat) {
                case 'attack':
                    setAttack(attack-1)
                    setStatPoints(statPoints+1)
                case 'defense':
                    setDefense(defense-1)
                    setStatPoints(statPoints+1)
                case 'dexterity':
                    setDexterity(dexterity-1)
                    setStatPoints(statPoints+1)
                case 'intelligence':
                    setIntelligence(intelligence-1)
                    setStatPoints(statPoints+1)
                case 'speed':
                    setSpeed(speed-1)
                    setStatPoints(statPoints+1)
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
                <button>REDUCE</button>
                <span>Constitution</span>
                <button>INCREASE</button>
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