import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

const Character = ({ log }) => {

    useEffect(() => {
        console.log("This is the character creation component.")
    }, [log])

    return (
    <div>
        <h1>This is the character creation page.</h1>
        <div className='stats'>
            <div>Constitution</div>
            <div>Attack</div>
            <div>Defense</div>
            <div>Dexterity</div>
            <div>Intelligence</div>
            <div>Speed</div>
        </div>
    </div>
    );
}

const mapStateToProps = state => ({
    log: state.game.log,
});

export default connect(mapStateToProps, {})(Character);