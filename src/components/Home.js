import React from 'react';
import Calendar from './Calendar';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <section className='main-content'>
            <h1 className='tab-header'>Welcome to Cornucopia!</h1>
            <div className='home'>
                <h1>Welcome to Cornucopia! Below are the basic commands.</h1>
                <ol>
                    <li><Calendar /> Changing the date will affect growth of plots, trigger seasonal bonuses, and reset maximum energy.</li>
                    <li><NavLink to="/character"><button>Character</button></NavLink> Displays character stats. Stats Allocation is required for combat.</li>
                    <li><NavLink to="/inventory"><button>Inventory</button></NavLink> Stores acquired items and view plot progress.</li>
                    <li><NavLink to="/shop"><button>Shop</button></NavLink> Use essences to buy seeds and extra plots.</li>
                    <li><NavLink to="/main"><button>Garden</button></NavLink> Plots used to plant seasonal crops. Fast growing. Small to Medium rewards.</li>
                    <li><NavLink to="/orchard"><button>Orchard</button></NavLink> Plots used to plant trees. Slow growing but yield great rewards.</li>
                    <li><NavLink to="/forest"><button>Forest</button></NavLink> Collect bounties of the forest or challenge various encounters in combat.</li>
                    <li><NavLink to="/cornucopia"><button>Cornucopia</button></NavLink> Offer Mana to the Goddess for a blessing.</li>
                </ol>

                <h2>Quality Assurance Team</h2>
                <p>Special thanks to the following for playing my game and giving me feedback.</p>
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
