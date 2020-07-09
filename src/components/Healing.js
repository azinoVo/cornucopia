import React, { useState, useEffect } from 'react';
import { offerEssence } from '../actions';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';

const Healing = ({ essence }) => {
    const [totalEssence, setTotalEssence] = useState(0)
    const [offering, setOffering] = useState(0)

    const dispatch = useDispatch()


    const increaseOffering = (value) => {
        setOffering(offering+value)
        setTotalEssence(totalEssence-value)
    }

    const decreaseOffering = (value) => {
        setOffering(offering-value)
        setTotalEssence(totalEssence+value)

    }

    const sendOffering = (amount) => {
        
        if(amount < 100) {
            // low tier reward
            // heals 25% max health
            dispatch(offerEssence(amount, 'low', 0))
            setOffering(0)
    
        } else if (amount >= 100 && amount <= 550) {
            // medium tier reward
            // Heals 50% Max health
            dispatch(offerEssence(amount, 'med', 0))
            setOffering(0)


        } else if (amount > 550 && amount < 1500) {
            // high tier reward
            // Full Heal
            dispatch(offerEssence(amount, 'high', 0))
            setOffering(0)


        } else {
            // Greatest reward above 1500 mana essences
            // Full Heal with skill point per 1000 above 1500
            let skillPoint = Math.floor([amount-1500]/1000)
            dispatch(offerEssence(amount, 'max', skillPoint))
            setOffering(0)

        }

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
                <button disabled={offering >= 1000 ? false : true} onClick={() => decreaseOffering(1000)}> -1000 </button>
                <button disabled={offering >= 100 ? false : true} onClick={() => decreaseOffering(100)}> -100 </button>
                <button disabled={offering >= 10 ? false : true} onClick={() => decreaseOffering(10)}> -10 </button>
                <button disabled={offering >= 1 ? false : true} onClick={() => decreaseOffering(1)}> -1 </button>
                <span> {offering} </span>
                <button disabled={totalEssence >= 1 ? false : true} onClick={() => increaseOffering(1)}> +1 </button>
                <button disabled={totalEssence >= 10 ? false : true} onClick={() => increaseOffering(10)}> +10 </button>
                <button disabled={totalEssence >= 100 ? false : true} onClick={() => increaseOffering(100)}> +100 </button>
                <button disabled={totalEssence >= 1000 ? false : true} onClick={() => increaseOffering(1000)}> +1000 </button>

            </div>

            <button disabled={offering > 0 ? false : true} onClick={() => sendOffering(offering)}>Offer {offering} Mana Essence(s)</button>



        </div>
    );
}

const mapStateToProps = state => ({
    essence: state.user.essence
});

export default connect(mapStateToProps, {})(Healing);
