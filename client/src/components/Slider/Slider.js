import React from 'react';
import './Slider.scss';
import Title from '../ui/Title/Title';

const Slider = () => {
    return (
        <div className='round'>
            <div className='container'>
                <div className='round__block'>
                    <Title>Round-up</Title>
                    <div className='round__content'>
                        <div className='round__img'></div>
                        <div className='round__list'>
                            <ul>
                                <li className='list_active'>
                                    Mercuryo’s Business Development in the USA
                                </li>
                                <li>
                                    Fresh Challenges in a New Recruitment
                                    Paradigm
                                </li>
                                <li>
                                    Banking-as-a-Service: Crypto for the Masses
                                </li>
                                <li>
                                    Opportunities in a Bear Market: Report by
                                    Mercuryo
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;
