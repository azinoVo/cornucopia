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
                    <li>Add in Inventory <strong>DONE 2/25</strong></li>
                    <li>Remove the ability to sell plots <strong>DONE 2/26</strong>
                        </li>
                    <li>Add the Hanging Garden <strong>DONE 2/26</strong></li>
                    <li>Add the Sculpture Garden and Favor currency <strong>DONE 2/26</strong></li>
                    <li>Add a game window that displays the action that was just done so users can have a log of it</li>
                    <li>Update the Main Garden, Orchard, and Hanging Garden to display the correct
                        number of plots
                        </li>
                    <li>
                        Update the Main Garden, Orchard, and Hanging Garden to progress: plant, water, nurture, and harvest
                        </li>
                    <li>Add Animals to Barnyard where animals are raised and animal products are harvested</li>
                    <li>Add bonuses to users when certain sculptures are restored</li>
                    <li>Add concept of Seasons where crops gain bonuses</li>
                    <li>Possible addition of Male/Female animals and Breeding</li>
                    <li>Adding a possible Forest Stage that has specific trees/animals/items depending on Season</li>
                    <li>Alternate Endings Depending on your choices when playing the game</li>
                </ul>

                <h2>Known Bugs to Fix</h2>
                <ul>
                    <li>TBA</li>
                </ul>
            </div>
        </section>
    );
}

export default Home;
