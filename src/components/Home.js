import React from 'react';

const Home = () => {
    return (
        <section className='main-content'>
            <h1 className='tab-header'>Welcome to Cornucopia!</h1>
            <div className='home'>
                <h2>To-Do List</h2>
                <ul>
                    <li>Add in Inventory</li>
                    <li>Separate the Plot Expansions into a Different Table
                        and remove the ability to sell plot
                        </li>
                    <li>Add the Hanging Garden</li>
                    <li>Update the Main Garden, Orchard, and Hanging Garden to display the correct
                        number of plots
                        </li>
                    <li>
                        Update the Main Garden, Orchard, and Hanging Garden to progress: plant, water, nurture, and harvest
                        </li>
                    <li>Add Animals into the game and change name of Feeder to Field where animals are raised and harvested</li>
                    <li>Add the Sculpture Garden</li>
                </ul>
            </div>
        </section>
    );
}

export default Home;
