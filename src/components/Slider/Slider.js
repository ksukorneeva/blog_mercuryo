import React from 'react';
import './Slider.scss';
import Title from '../ui/Title/Title';
import Img from '../../img/article.png';
import { ReactComponent as Dot } from '../../img/icons/dot.svg';

const Slider = () => {
    const arrSlider = [
        { id: 1, text: 'Mercuryo’s Business Development in the USA', img: '/' },
        { id: 2, text: 'Mercuryo’s Business Development in the USA', img: '/' },
        { id: 3, text: 'Mercuryo’s Business Development in the USA', img: '/' },
        { id: 4, text: 'Mercuryo’s Business Development in the USA', img: '/' },
    ];
    return (
        <div className='slider'>
            <div className='container'>
                <div className='slider__block'>
                    <Title>Round-up</Title>
                    <div className='slider__content'>
                        <div className='slider__img'>
                            <img src={Img} alt='image' />
                        </div>
                        <div className='slider__list'>
                            <ul className='slider__text'>
                                <li className='active'>
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
                            <ul className='slider__icon'>
                                <li className='active'>
                                    <Dot />
                                </li>
                                <li>
                                    <Dot />
                                </li>
                                <li>
                                    <Dot />
                                </li>
                                <li>
                                    <Dot />
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
