import React, { useState } from 'react';
import Popup from "reactjs-popup";
import { numberWin } from '../actions';
import { useDispatch } from 'react-redux';


const NumberGame = () => {
    const [number, setNumber] = useState(0)
    const [gameNumber, setGameNumber] = useState(0.5)
    const [timesPlayed, setTimesPlayed] = useState(0)
    const [playing, setPlaying] = useState(false)


    const dispatch = useDispatch()


    const rollDie = () => {
        let randomNumber = Math.floor((Math.random() * 10) + 1);
        let gameNumber = Math.floor((Math.random() * 10) + 1);



        setNumber(randomNumber)
        setGameNumber(gameNumber)
        setTimesPlayed(timesPlayed+1)
        setPlaying(true)

        if(number  === gameNumber) {
            dispatch(numberWin())
        } else {
            return
        }
        
    }


    return (
        <Popup trigger={<button className="button">Game of Numbers</button>} modal>

            {close => (
                <div className="number-modal">
                    <h1>Game of Numbers</h1>
                    <p>Roll a Number. If your number is the same as mine, I'll give you a gift.</p>
                    { timesPlayed < 10 ? <p>Let's play!</p> : <p>I'm done playing for now.</p> }

                    <div className="content">
                        {
                            (gameNumber === number && playing) ? 
                            <h1>Seems you've strike it rich. Check your inventory for something special.</h1> :
                            playing && <h1>Try again.</h1>
                        }
                        {
                            (number && gameNumber) ? <h1>Yours: {number} Mine: {gameNumber}</h1> : <span>Roll your Die</span>
                        }


                        <p>Time is of the essence child. Do you want to play?</p>

                        {
                            timesPlayed < 10 ? <button onClick={() => rollDie()}>Roll Number</button> : <span>You've lost my interest.</span>
                        }
                    </div>

                    <div className="actions">
                        <button
                            className="button"
                            onClick={() => {
                                close();
                            }}
                        >
                            Leave
            </button>

                    </div>
                </div>
            )}
        </Popup>

    )
};


export default NumberGame;