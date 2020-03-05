import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Progress } from 'react-sweet-progress';

const Orchard = ({ orchard, user, limits }) => {
    const [orchardPlot, setOrchard] = useState([])
    const [userInfo, setUserInfo] = useState({})


    useEffect(() => {
        setOrchard(orchard)
    }, [orchard])


    useEffect(() => {
        setUserInfo(user)
    }, [user])

    return (
        <section className='main-content'>
            <h1 className='tab-header'>Tree Orchard</h1>
            <div className='reuseGarden-status'>
                <div>Energy: {Math.floor([userInfo.energy / limits.energy_limit] * 100)}%</div>
                <Progress
                    percent={Math.floor([userInfo.energy / limits.energy_limit] * 100)}
                    theme={{
                        success: {
                            symbol: '‍🔋',
                            color: '#16C60C'
                        },
                        active: {
                            symbol: '⚡',
                            color: '#FCE100'
                        },
                        default: {
                            symbol: '🛏️',
                            color: '#E81224'
                        }
                    }} />
                <div>Available Water: {Math.floor([userInfo.water / limits.water_limit] * 100)}%</div>
                <Progress
                    percent={Math.floor([userInfo.water / limits.water_limit] * 100)}
                    theme={{
                        success: {
                            symbol: '‍💦',
                            color: '#009DFF'
                        },
                        active: {
                            symbol: '💧',
                            color: '#59BFFF'
                        },
                        default: {
                            symbol: '💧',
                            color: '#BFE6FF'
                        }
                    }} />
            </div>

            <div className='orchard'>
                {
                    orchardPlot.map((plot, index) => {
                        if (plot) {
                            return <div key={`orchard${plot['plotType']}${index}`} className='plot'>
                                <img src={require(`../assets/plants/${plot['plotType']}${plot['plotStatus']}.${plot['fileType']}`)} alt="plot" />
                                {plot['plotType'] !== "empty_plot_lock.png" && <span>Plot: {plot["plotType"]}</span>}
                                {(plot['plotType'] !== "empty_plot_lock.png" && plot['plotType'] !== "empty_plot.png") && <span>Water: {plot.water} | Quality: {plot.quality} | Health: {plot.health} </span>}
                            </div>
                        } else {
                            return <div className='plot'>
                                <img src={require('../assets/plants/empty_plot_regular.png')} alt="plot" />
                            </div>
                        }
                    })
                }
            </div>
        </section>
    );
}

const mapStateToProps = state => ({
    orchard: state.user.orchard_plot,
    user: state.user,
    limits: state.user.limits,

});

export default connect(mapStateToProps, {})(Orchard);