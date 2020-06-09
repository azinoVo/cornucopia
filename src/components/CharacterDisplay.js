import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { setCharacterStats } from '../actions';

const CharacterDisplay = ({ stats }) => {
    const [charStats, setCharStats] = useState({})


    useEffect(() => {
        setCharStats(stats)
    }, [stats])

    return (
        <div className='character-display'>
            <h1>Character Stats</h1>
            <p>INSERT IMAGE OF GENDER</p>

            <div className='stats-block'>
                <p>Character Level: {charStats['level']}</p>
                <p>Constitution: {charStats['constitution']}</p>
                <p>Attack: {charStats['attack']}</p>
                <p>Defense: {charStats['defense']}</p>
                <p>Dexterity: {charStats['dexterity']}</p>
                <p>Intelligence: {charStats['intelligence']}</p>
                <p>Speed: {charStats['speed']}</p>
            </div>

        </div>
    );
}

const mapStateToProps = state => ({
    stats: state.user.stats,
});

export default connect(mapStateToProps, {})(CharacterDisplay);
