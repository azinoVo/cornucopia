import React from 'react';

const Home = () => {
    return (
        <section className='main-content'>
            <h1 className='tab-header'>Welcome to Cornucopia!</h1>
            <div className='home'>
                <p><strong>Goal</strong>: The goal of the game is to restore all of the statues within the Sculpture garden
                    to their original forms. Players need to accumulate "favor" and "mana essences" to accomplish this task.
                    Favor and Mana can be accumulated by performing tasks such as planting/harvesting crops, raising and harvesting
                    animal products, playing mini-games, etc.
                </p>
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
                    <li>Add Animals into the game and change name of Feeder to Barnyard where animals are raised and harvested</li>
                    <li>Add the Sculpture Garden</li>
                    <li>Add bonuses to users when certain sculptures are restored.</li>
                </ul>
            </div>
        </section>
    );
}

export default Home;
