import React from 'react';

const Barnyard = () => {

    return (
        <section className='main-content'>
            <h1 className='tab-header'>Barnyard</h1>

            <div className='barnyard'>
                <img src={require(`../assets/barnyard/empty_bucket.png`)} alt="plot" />
            </div>
        </section>
    );
}

export default Barnyard;
