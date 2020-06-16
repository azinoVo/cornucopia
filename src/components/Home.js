import React from 'react';
import Character from './Character';
// import CharacterDisplay from './CharacterDisplay';
import BattleMenu from './BattleMenu';
import GameLog from './GameLog'

const Home = () => {
    return (
        <section className='main-content'>
            <h1 className='tab-header'>Welcome to Cornucopia!</h1>
            <div className='home'>
                <Character />
                <BattleMenu />



                <h2>Design and Quality Assurance Team</h2>
                <ul>
                    <li>D'Michael Watson</li>
                    <li>Alec Castillo</li>
                    <li>Will Berlin</li>
                </ul>
            </div>
        </section>
    );
}

export default Home;
