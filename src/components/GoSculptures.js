import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

const GoSculptures = ({ sculpture }) => {
    const [statue, setSculpture] = useState([])

    useEffect(() => {
        setSculpture(sculpture)
    }, [sculpture])

    return (
        <section className='main-content'>
            <h1 className='tab-header'>Sculpture Garden</h1>

            <div className='sculpture'>
                {statue.map((plot, index) => {
                    if (plot) {
                        return <div key={`statue${plot}${index}`} className='plot'>
                            <img src={require(`../assets/sculpture/${plot}`)} alt="plot" />
                        </div>
                    } else {
                        return <div className='plot'>
                            <img src={require('../assets/plants/empty_plot.png')} alt="plot" />
                        </div>
                    }
                })}
            </div>
        </section>
    );
}

const mapStateToProps = state => ({
    sculpture: state.sculpture,
});

export default connect(mapStateToProps, {})(GoSculptures);
