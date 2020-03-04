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
                    <li>Add way to move to next day - this will progress all plants by certain amount.</li>
                    <li>Have a property tax that is collected the first or last day of the month as you progress in days. Buy plots sparingly.</li>
                    <li>Seasonal bonuses</li>
                    <li>
                        Update the Main Garden, Orchard, and Hanging Garden to progress: plant, water, nurture, and harvest
                        </li>
                    <li>Add Animals to Barnyard where animals are raised and animal products are harvested</li>
                    <li>Add bonuses to users when certain sculptures are restored</li>
                    <li>Possible addition of Male/Female animals and Breeding</li>
                    <li>Adding a possible Forest Stage that has specific trees/animals/items depending on Season</li>
                    <li>Add the ability to battle: Need Character creation, stats, abilities, and weapons.</li>
                    <li>Past the Forest is a dungeon where you can battle monsters for loot.</li>
                    <li>Alternate Endings Depending on your choices when playing the game</li>
                </ul>

                <h2> Additional Ideas</h2>
                <ul>
                    <li>Seed Maker that generates higher quality seeds: Require additional field called seed quality that has multiplier.</li>
                    <li>Alchemy Station where one can craft certain items such as generate higher level seeds, high quality fertilizer, etc.</li>
                    <li>Starting a new day will automatically save the game if the user has created an account.</li>
                </ul>

                <h2>Known Bugs to Fix</h2>
                <ul>
                    <li>Nourish can make plant go above 100% for some stats. Have limits to these stats.</li>
                </ul>

                <h2>Design and Quality Assurance Team</h2>
                <ul>
                    <li>D'Michael Watson</li>
                    <li>Alec Castillo</li>
                    <li>Will Berlin</li>
                </ul>
            </div>
        </section>
    );
}

export default Home;
