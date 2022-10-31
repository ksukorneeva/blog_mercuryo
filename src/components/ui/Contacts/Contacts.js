import React from 'react';
import './Contacts.scss';
import Button from '../Button/Button';
import BACK from '../../../img/line.png';

const Contacts = () => {
    return (
        <div className='contacts'>
            <div className='container'>
                <div className='contacts__block'>
                    <div className='contacts__text'>
                        <div className='contacts__title'>We are hiring!</div>
                        <div className='contacts__subtitle'>
                            Want to help us build a game-changing payment
                            solution for crypto services? Apply now, and let's
                            grow together.
                        </div>
                        <Button>Contact us</Button>
                        <img src={BACK} alt='bg' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;
