import React, { useState } from 'react';
import Popup from "reactjs-popup";
import { guessWin } from '../actions';
import { useDispatch } from 'react-redux';


const GuessTheCardModal = () => {
    const [shuffled, setShuffled] = useState([])
    const [win, setWin] = useState(false)
    const [playing, setPlaying] = useState(false)
    const [gameNumber, setGameNumber] = useState(1)


    const dispatch = useDispatch()


    const shuffleCards = () => {
        // The Fischer-Yates Shuffle
        let a = [1, 2, 3]
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }

        setShuffled(a)
    }

    const pickCard = (number) => {
        if (number === 1) {
            setWin(true)
            dispatch(guessWin())
        }

        setPlaying(true)
        setGameNumber(gameNumber + 1)
        shuffleCards()
    }


    return (
        <Popup trigger={<button className="button">Guess The Card</button>} modal>

            {close => (
                <div className="guess-modal">
                    <h1>Find Card #1</h1>
                    {win ? <p>Congratulations, you've won.</p> : <p>If you find the correct card, you will get a reward.</p>}

                    <div className="content">
                        {/* Add the content here */}
                        {(gameNumber < 5 && !win) &&
                            shuffled.map(num => {
                                return <button onClick={() => pickCard(num)} id={num}>Guess Card</button>
                            })
                        }
                        {(!win && (playing === false)) && <button onClick={shuffleCards}>Shuffle Cards</button>}

                    </div>

                    <div className="actions">
                        <button className="button" onClick={() => { close(); }}> Leave</button>
                    </div>
                </div>
            )}
        </Popup>

    )
};


export default GuessTheCardModal;