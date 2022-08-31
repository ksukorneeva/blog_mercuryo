import React, { useState } from 'react';
import './Slider.scss';
import Title from '../ui/Title/Title';
import Img from '../../img/article.png';
import { ReactComponent as Dot } from '../../img/icons/dot.svg';

const Slider = () => {
    const arrSlider = [
        { id: 1, text: 'Mercuryo’s Business Development in the USA', img: Img },
        {
            id: 2,
            text: 'Fresh Challenges in a New Recruitment Paradigm',
            img: 'https://klike.net/uploads/posts/2019-05/1556708032_1.jpg',
        },
        {
            id: 3,
            text: 'Banking-as-a-Service: Crypto for the Masses',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz1gzKbjKp3Z94_QdXEA2ZNtS1SNckssQOr-mbatHj&s',
        },
        {
            id: 4,
            text: 'Opportunities in a Bear Market: Report by Mercuryo',
            img: 'https://st2.depositphotos.com/3364363/5972/i/600/depositphotos_59728757-stock-photo-waiting-for-a-new-day.jpg',
        },
    ];
    const [active, setActive] = useState(0);

    const changeSlideHandler = (index) => {
        setActive(index);
    };
    return (
        <div className='slider'>
            <div className='container'>
                <div className='slider__block'>
                    <Title>Round-up</Title>
                    <div className='slider__content'>
                        <div className='slider__img'>
                            <img src={arrSlider[active].img} alt='image' />
                        </div>
                        <div className='slider__list'>
                            <ul className='slider__text'>
                                {arrSlider.map((slide, index) => (
                                    <li
                                        key={index}
                                        className={
                                            active === index ? 'active' : ''
                                        }
                                        onClick={() =>
                                            changeSlideHandler(index)
                                        }
                                    >
                                        {slide.text}
                                    </li>
                                ))}
                            </ul>
                            <ul className='slider__icon'>
                                {arrSlider.map((slide, index) => (
                                    <li
                                        key={index}
                                        className={
                                            active === index ? 'active' : ''
                                        }
                                        onClick={() =>
                                            changeSlideHandler(index)
                                        }
                                    >
                                        <Dot />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;
