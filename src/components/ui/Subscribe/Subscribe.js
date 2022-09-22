import React, { useState } from 'react';
// import Button from '../Button/Button';
import Input from '../Input/Input';
import './Subscribe.scss';
import emailjs from '@emailjs/browser';

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
    return (
        <div className='subscribe'>
            <div className='container'>
                <div className='subscribe__block'>
                    <div className='subscribe__content'>
                        <div className='subscribe__title'>
                            Need more?Subscribe!
                        </div>
                        <div className='subscribe__subtitle'>
                            Subscribe to our newsletter to keep up with the
                            latest crypto trends
                        </div>
                    </div>
                    <form onSubmit={submitFormHandler}>
                        <Input
                            label='Email'
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
            </div>
        </div>
    );
};

export default Subscribe;
