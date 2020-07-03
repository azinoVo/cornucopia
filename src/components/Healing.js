import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

const Healing = ({ essence }) => {
    const [totalEssence, setTotalEssence] = useState(0)
    const [offering, setOffering] = useState(0)

    const increaseOffering = (value) => {
        setOffering(offering+value)
        setTotalEssence(totalEssence-value)
    }

    const decreaseOffering = (value) => {
        setOffering(offering-value)
        setTotalEssence(totalEssence+value)

    }

    useEffect(() => {
        setTotalEssence(essence)
    }, [essence])

    return (
        <div className='healing'>
            <h2>Statue of the Goddess</h2>
            <p>Offer Mana Essences to ask for a blessing.</p>
            <p>Available Essences: {totalEssence}</p>
            {/* Idea: SKill points or even skills can be obtained here depending on the amount of essences and probability. */}
            <div className='modulate-offering'>
                <button disabled={offering >= 100 ? false : true} onClick={() => decreaseOffering(100)}> -100 </button>
                <button disabled={offering >= 10 ? false : true} onClick={() => decreaseOffering(10)}> -10 </button>
                <button disabled={offering >= 1 ? false : true} onClick={() => decreaseOffering(1)}> -1 </button>
                <span> {offering} </span>
                <button disabled={totalEssence >= 1 ? false : true} onClick={() => increaseOffering(1)}> +1 </button>
                <button disabled={totalEssence >= 10 ? false : true} onClick={() => increaseOffering(10)}> +10 </button>
                <button disabled={totalEssence >= 100 ? false : true} onClick={() => increaseOffering(100)}> +100 </button>
            </div>

            <button>Offer {offering} Mana Essence(s)</button>



        </div>
    );
}

const mapStateToProps = state => ({
    essence: state.user.essence
});

export default connect(mapStateToProps, {})(Healing);
