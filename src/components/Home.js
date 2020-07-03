import React from 'react';
import BattleMenu from './BattleMenu';
import Healing from './Healing';

const Home = () => {
    return (
        <section className='main-content'>
            <h1 className='tab-header'>Welcome to Cornucopia!</h1>
            <div className='home'>
                <h1>In Progress</h1>
                
                <Healing />
                <BattleMenu />

                <h2>Quality Assurance Team</h2>
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
