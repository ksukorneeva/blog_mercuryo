import React, { useEffect } from 'react';
import './Button.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Button = ({ children }) => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div
            className='button'
            data-aos='fade-up'
            data-aos-duration='2500'
            data-aos-anchor-placement='top-bottom'
        >
            {children}
        </div>
    );
};

export default Button;
