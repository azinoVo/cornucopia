import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

const MainGarden = ({ mainGarden, user }) => {

    const [userInfo, setUserInfo] = useState({})
    const [userInventory, setInventory] = useState({})
    const [limits, setLimits] = useState({})
    const [plot, setPlot] = useState([])


    useEffect(() => {
        setUserInfo(user)
    }, [user])

    useEffect(() => {
        setInventory(user.inventory)
    }, [user])

    useEffect(() => {
        setLimits(user.limits)
    }, [user])

    useEffect(() => {
        console.log("limit", limits.main_garden_plot_limit)
        let plots = []
        for (let index = 0; index < 6; index++) {
            if( index < limits.main_garden_plot_limit) {
                plots.push("empty_plot.png")
            } else {
                plots.push("empty_plot_lock.png")
            }
        }

        console.log("plots", plots)
        setPlot(plots)
    }, [limits.main_garden_plot_limit])



    return (
        <section className='main-content'>
            <h1 className='tab-header'>Main Garden</h1>
            <div className='main'>
                {
                    plot.map((plot, index) => {
                        if (plot) {
                            return <div key={`mainGarden${plot}${index}`} className='plot'>
                                <img src={require(`../assets/plants/${plot}`)} alt="plot" />
                            </div>
                        } else {
                            return <div className='plot'>
                                <img src={require('../assets/plants/empty_plot.png')} alt="plot" />
                            </div>
                        }
                    })

                }
            </div>
        </section>
    );
}

const mapStateToProps = state => ({
    mainGarden: state.mainGarden,
    user: state.user,
});

export default connect(mapStateToProps, {})(MainGarden);
