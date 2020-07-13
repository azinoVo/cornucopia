import React from 'react';
import Calendar from './Calendar';

const Home = () => {
    return (
        <section className='main-content'>
            <h1 className='tab-header'>Welcome to Cornucopia!</h1>
            <div className='home'> 
                <h1>Welcome to Cornucopia! An apple a day keeps the addiction away.</h1>
                <Calendar />               

                <h2>Quality Assurance Team</h2>
                <p>Special thanks to the following for playing my game and giving me feedback.</p>
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
