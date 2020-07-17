import React from 'react';

const Quests = () => {
    return (
        <section className='quest-container'>
            <h2>Quests and Achievements</h2>
            {/* This will store the quest system of the game, a set number of quests that will let user progress the game. */}
            <ul>
                <li><strong>Mana Addict</strong>: Have 10,000 Mana Essence in your inventory.</li>

                <li><strong>Thirsty</strong>: Achieve 5000 Water Capacity.</li>

                <li><strong>Master of Crops</strong>: Harvest 100 crops within the Main Garden.</li>

                <li><strong>Master of the Orchard</strong>: Harvest 100 fruits within the Orchard.</li>

                <li><strong>Spacious Garden</strong>: Unlock six Main Garden plots.</li>

                <li><strong>Spacious Orchard</strong>: Unlock six Orchard plots.</li>

                <li><strong>Master Scavenger</strong>: Collect 100 bounties within the Forest.</li>

                <li><strong>Bounty Hunter</strong>: Defeat 100 encounters within the Forest.</li>

                <li><strong>Devout</strong>: Offer a total of 100,000 Mana Essences to the Goddess.</li>

            </ul>



        </section>
    );
}

export default Quests;
