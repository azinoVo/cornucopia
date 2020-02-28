import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fillWater } from '../actions';
import GameLog from './GameLog';

const Barnyard = ({ barnyard_plot, user }) => {
    const [userInfo, setUserInfo] = useState({})
    const [limits, setLimits] = useState({})
    const [barnPlot, setBarnPlot] = useState([])

    const dispatch = useDispatch()

    useEffect(() => {
        setBarnPlot(barnyard_plot)
    }, [barnyard_plot])

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
            {
                        barnPlot.map((plot, index) => {
                            if (plot) {
                                return <div key={`orchard${plot['plotType']}${index}`} className='plot'>
                                    <img src={require(`../assets/plants/${plot["plotType"]}`)} alt="plot" />
                                    {plot['plotType'] !== "empty_plot_lock.png" && <span>Plot: {plot["plotType"].substring(0, plot["plotType"].length - 4)}</span>}
                                    {(plot['plotType'] !== "empty_plot_lock.png" && plot['plotType'] !== "empty_plot.png") && <span>Water: {plot.water} | Quality: {plot.quality} | Health: {plot.health} </span>}
                                </div>
                            } else {
                                return <div className='plot'>
                                    <img src={require('../assets/plants/empty_plot.png')} alt="plot" />
                                </div>
                            }
                        })
                    }
                <div className='water'>
                    
                    {
                        (userInfo.water === limits.water_limit) ?
                            <img src={require(`../assets/barnyard/filled_bucket_animate.gif`)} alt="plot" /> :
                            <img src={require(`../assets/barnyard/empty_bucket.png`)} alt="plot" />

                    }

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
    barnyard_plot: state.user.barnyard_plot,
    user: state.user
});

export default connect(mapStateToProps, { fillWater })(Barnyard);
