import React from 'react';
import { connect } from 'react-redux';
import GameLog from './GameLog';
import NumberModal from './NumberModal';


const Cornucopia = () => {

    return (
        <section className='main-content'>
            <div className='cornucopia'>
                <div className='deity-wrapper'>
                <img src={require(`../assets/plants/adult_tree.png`)} alt="modal plot" />

                    <div className='deity-actions'>
                        <NumberModal />


                        <button>Action II</button>
                        <button>Action III</button>
                    </div>
                </div>
                <GameLog />
            </div>

        </section>
    );
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps, {})(Cornucopia);
