import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { inspectForest, collectForestBounty } from '../actions';
import { Progress } from 'react-sweet-progress';
import { fillWater } from '../actions';
import BattleMenu from './BattleMenu';

const Forest = ({ forest_plot, user }) => {
    const [userInfo, setUserInfo] = useState({})
    const [limits, setLimits] = useState({})
    const [forestPlot, setForestPlot] = useState([])

    const dispatch = useDispatch()

    useEffect(() => {
        setForestPlot(forest_plot)
    }, [forest_plot])

    useEffect(() => {
        setUserInfo(user)
    }, [user])

    useEffect(() => {
        setLimits(user.limits)
    }, [user])

    const inspectPlot = (index) => {
        let rollValue = Math.floor((Math.random() * 100) + 1)
        if(rollValue <= 45) {
            dispatch(inspectForest(index, 'encounter'))
        } else {
            dispatch(inspectForest(index, 'reward'))
        }
    }

    const resetPlot = (index) => {
        dispatch(inspectForest(index, 'reset'))
    }

    const collectBounty = (index) => {
        let rollValue = Math.floor((Math.random() * 100) + 1)
        let lowRoll = Math.floor((Math.random() * 1000) + 1)
        let highRoll = Math.floor((Math.random() * 2000) + 1)

        if (rollValue <= 10) {
            dispatch(collectForestBounty(highRoll))
            resetPlot(index)

        } else {
            dispatch(collectForestBounty(lowRoll))
            resetPlot(index)
        }
    }

    return (
        <section className='main-content'>
            <h1 className='tab-header'>Forest of Dreams</h1>

            <div className='forest'>
            {
                forestPlot.map((plot, index) => {
                            if (plot) {
                                return <div key={`orchard${plot['plotType']}${index}`} className='plot'>
                                    <img src={require(`../assets/plants/${plot['plotType']}${plot['plotStatus']}.${plot['fileType']}`)} alt="plot" />
                                    
                                    {plot.plotStatus === '_regular' &&
                                        <Progress
                                            percent={plot.progress}
                                    />
                                    }

                                    {
                                        plot.progress === 100 && plot.reward === false && plot.encounter === false && <button onClick={() => inspectPlot(index)}>Inspect</button>
                                    }

                                    {
                                        plot.progress === 100 && plot.reward && <div className='forest-options'><button onClick={() => collectBounty(index)}>Collect Bounty</button><button onClick={() => resetPlot(index)}>Refuse Bounty</button></div>
                                    }

                                    {
                                        plot.progress === 100 && plot.encounter && <div className='forest-options'><BattleMenu resetPlot={resetPlot} index={index} /><button onClick={() => resetPlot(index)}>Avoid Encounter</button></div>
                                    }
                                </div>
                            } else {
                                return <div className='plot'>
                                    <img src={require('../assets/plants/empty_plot_regular.png')} alt="plot" />
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
                            (userInfo.water < limits.water_limit) ? <button onClick={() => dispatch(fillWater(user.limits.water_limit))}>Refill to Full</button> : <div>Bucket is 100% Full</div>
                        }
                        <div>Water Capacity: {userInfo.water}</div>
                    </div>

                </div>
            </div>
        </section>
    );
}

const mapStateToProps = state => ({
    forest_plot: state.user.forest_plot,
    user: state.user
});

export default connect(mapStateToProps, { fillWater })(Forest);
