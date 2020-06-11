import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

const CharacterDisplay = ({ stats }) => {
    const [charStats, setCharStats] = useState({})


    useEffect(() => {
        setCharStats(stats)
    }, [stats])

    return (
        <div className='character-display'>
            <h1>Character Stats</h1>
            <p>{charStats['gender']}, INSERT IMAGE OF GENDER</p>

            <div className='stats-block'>
                <p>Character Level: {charStats['level']}</p>
                <p>Constitution: {charStats['constitution']}, Health: {Math.ceil(charStats['constitution']*6.25)}</p>
                <p>Attack: {charStats['attack']}, Attack Power: {Math.ceil(charStats['attack']*1.35)}</p>
                <p>Defense: {charStats['defense']}, Damage Reduction: {Math.ceil(charStats['defense']*1.65)}%</p>
                <p>Dexterity: {charStats['dexterity']}, Dodge Chance: {Math.ceil(charStats['dexterity']*1.25)}%</p>
                <p>Intelligence: {charStats['intelligence']}, Magic Power: {Math.ceil(charStats['intelligence']*1.35)}</p>
                <p>Speed: {charStats['speed']}, Turn Speed: {Math.ceil(charStats['speed']*1.15)}</p>
            </div>

        </div>
    );
}

const mapStateToProps = state => ({
    stats: state.user.stats,
});

export default connect(mapStateToProps, {})(CharacterDisplay);
