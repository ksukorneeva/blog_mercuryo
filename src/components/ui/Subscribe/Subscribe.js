import React, { useState, useEffect } from 'react';
// import Button from '../Button/Button';
import Input from '../Input/Input';
import './Subscribe.scss';
import emailjs from '@emailjs/browser';
import Logo_1 from '../../../img/logop_1.png';
import Logo_2 from '../../../img/logop_2.png';
import Logo_3 from '../../../img/logop_3.png';
import Logo_4 from '../../../img/logop_4.png';
import Sub_1 from '../../../img/sub_1.png';
import Sub_2 from '../../../img/sub_2.png';
import Sub_3 from '../../../img/sub_3.png';
import Sub_4 from '../../../img/sub_4.png';
import Sub_5 from '../../../img/sub_5.png';
import Sub_mob_1 from '../../../img/sub_mob_1.svg';
import Sub_mob_2 from '../../../img/sub_mob_2.svg';
import Sub_mob_3 from '../../../img/sub_mob_3.svg';
import Sub_mob_4 from '../../../img/sub_mob_4.svg';
import Sub_mob_5 from '../../../img/sub_mob_5.svg';
import Sub_mob_6 from '../../../img/sub_mob_6.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Subscribe = () => {
    const [email, setEmail] = useState('');

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    const submitFormHandler = async (e) => {
        e.preventDefault();
        await emailjs.send(
            'service_b3x2qji',
            'template_x1gbcms',
            {
                email: email,
            },
            '9sEXn4I6vXMgNMMTp'
        );
    };
    AOS.init();
    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, []);
    return (
        <div
            className='subscribe'
            data-aos='fade-up'
            data-aos-duration='10000'
            data-aos-anchor-placement='top-bottom'
        >
            <div className='container'>
                <img className='sub sub_1' src={Sub_1} alt='' />
                <img className='sub sub_2' src={Sub_2} alt='' />
                <img className='sub sub_3' src={Sub_3} alt='' />
                <img className='sub sub_4' src={Sub_4} alt='' />
                <img className='sub sub_5' src={Sub_5} alt='' />
                <img className='sum_mob sub_mob_1' src={Sub_mob_1} alt='' />
                <img className='sum_mob sub_mob_2' src={Sub_mob_2} alt='' />
                <img className='sum_mob sub_mob_3' src={Sub_mob_3} alt='' />
                <img className='sum_mob sub_mob_4' src={Sub_mob_4} alt='' />
                <img className='sum_mob sub_mob_5' src={Sub_mob_5} alt='' />
                <img className='sum_mob sub_mob_6' src={Sub_mob_6} alt='' />

                <div className='subscribe__block'>
                    <div className='subscribe__content'>
                        <div className='subscribe__title'>
                            Explained by Mercuryo
                        </div>
                        <div className='subscribe__subtitle'>
                            Analytics, reports and insights on fintech,
                            blockchain and cryptocurrencies. Delivered weekly to
                            your inbox
                        </div>
                    </div>
                    <div className='subscribe__form'>
                        <form onSubmit={submitFormHandler}>
                            <Input
                                label='E-mail'
                                type='email'
                                onChange={handleChange}
                            />
                            <div className='subscribe__button'>
                                <button className='subscribe__button'>
                                    Subscribe
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className='subscribe__partners'>
                        <p>Read by people from:</p>
                        <div className='subscribe__logo'>
                            <img src={Logo_1} alt='' />
                            <img src={Logo_2} alt='' />
                            <img src={Logo_3} alt='' />
                            <img src={Logo_4} alt='' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;
