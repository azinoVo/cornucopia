import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fillWater } from '../actions';
import GameLog from './GameLog';

const Barnyard = ({ user }) => {
    const [userInfo, setUserInfo] = useState({})
    const [limits, setLimits] = useState({})

    const dispatch = useDispatch()

    useEffect(() => {
        setUserInfo(user)
    }, [user])

    useEffect(() => {
        setLimits(user.limits)
    }, [user])



    return (
        <section className='main-content'>
            <h1 className='tab-header'>Barnyard</h1>

            <div className='barnyard'>
                <div className='water'>
                    {
                        (userInfo.water === limits.water_limit) ?
                            <img src={require(`../assets/barnyard/filled_bucket_animate.gif`)} alt="plot" /> :
                            <img src={require(`../assets/barnyard/empty_bucket.png`)} alt="plot" />

                    }
                    {/* <img src={require(`../assets/barnyard/empty_bucket.png`)} alt="plot" /> */}
                    <div className='water-commands'>
                        {
                            (userInfo.water < limits.water_limit) ? <button onClick={() => dispatch(fillWater(user.limits.water_limit))}>Refill to Full</button> : <div>Bucket is Full</div>
                        }
                        <div>Water: {userInfo.water}% Full</div>
                    </div>

                    <GameLog />
                </div>
            </div>
        </section>
    );
}

const mapStateToProps = state => ({
    user: state.user,
});

export default connect(mapStateToProps, { fillWater })(Barnyard);
