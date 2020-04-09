import React, { useState } from 'react';
import Popup from "reactjs-popup";
import { useDispatch } from 'react-redux';


const GuessTheCardModal = () => {
    const [shuffled, setShuffled] = useState([])


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


    return (
        <Popup trigger={<button className="button">Guess The Card</button>} modal>

            {close => (
                <div className="guess-modal">
                    <h1>Guess The Card</h1>
                    
                    <div className="content">
                        {/* Add the content here */}
                        {
                            shuffled.map(num => {
                                return <button id={num}>Card #{num}</button>
                            })
                        }
                        <button onClick={shuffleCards}>Shuffle Cards</button>

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


export default GuessTheCardModal;