import React, { useEffect } from 'react';
import './Contacts.scss';
import Button from '../Button/Button';
import BACK from '../../../img/line.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contacts = () => {
    AOS.init();
    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, []);
    return (
        <div
            className='contacts'
            data-aos='fade-up'
            data-aos-duration='10000'
            data-aos-anchor-placement='top-bottom'
        >
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
