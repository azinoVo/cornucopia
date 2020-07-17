import React from 'react';

const Quests = () => {
    return (
        <section className='quest-container'>
            {/* This will store the quest system of the game, a set number of quests that will let user progress the game. */}
            <ul>
                {/* Have 10000 mana essence in your inventory */}
                <li>Mana Addict: Have 10,000 Mana Essence in your inventory.</li>

                {/* Have 10000 water capacity. */}
                <li>Thirsty: Achieve 5000 Water Capacity.</li>

                {/* Harvest _____ crops. This may need a counter within the store. */}
                <li>Master of Crops: Harvest 100 crops within the Main Garden.</li>

                {/* Harvest _____ fruits from trees. Also require a counter in store. */}
                <li>Master of the Orchard: Harvest 100 fruits within the Orchard.</li>

                {/* Have maximum number of garden plots. */}
                <li>Spacious Garden: Unlock six Main Garden plots.</li>

                {/* Have maximum number of orchard plots. */}
                <li>Spacious Orchard: Unlock six Orchard plots.</li>

                {/* Have all Hearts within your inventory. Reward possibly a massive amount of money and a new feature. */}

                {/* Harvest a _____ from Main Garden. */}

                {/* Harvest a _____ from Orchard. */}
            </ul>



        </section>
    );
}

export default Quests;
