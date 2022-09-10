import React, { useState } from 'react';
import './Slider.scss';
import Title from '../ui/Title/Title';
import Img from '../../img/article.png';
import { ReactComponent as Dot } from '../../img/icons/dot.svg';

const Slider = ({ arrPosts }) => {
    arrPosts.length = Math.trunc(arrPosts.length / 4) * 4;
    const dots = arrPosts.slice(0, Math.trunc(arrPosts.length / 4));

    const [active, setActive] = useState(0);
    const [activePost, setActivePost] = useState(arrPosts.slice(0, 4));
    const [activeSlide, setActiveSlide] = useState(0);

    const changeSlideHandler = (index) => {
        setActive(index);
    };
    const changeSlideClick = (index) => {
        setActiveSlide(index);
        setActivePost(arrPosts.slice(index * 4, (index + 1) * 4));
    };
    return (
        arrPosts && (
            <div className='slider'>
                <div className='container'>
                    <div className='slider__block'>
                        <Title>Round-up</Title>
                        <div className='slider__content'>
                            <div className='slider__img'>
                                <img
                                    src={
                                        arrPosts[active].x_featured_media_large
                                    }
                                    alt='image'
                                />
                            </div>
                            <div className='slider__list'>
                                <ul className='slider__text'>
                                    {activePost.map((slide, index) => (
                                        <li
                                            key={index}
                                            className={
                                                active === index ? 'active' : ''
                                            }
                                            onMouseEnter={() =>
                                                changeSlideHandler(index)
                                            }
                                        >
                                            {slide.title.rendered}
                                        </li>
                                    ))}
                                </ul>
                                <ul className='slider__icon'>
                                    {dots.map((slide, index) => (
                                        <li
                                            key={index}
                                            className={
                                                activeSlide === index
                                                    ? 'active'
                                                    : ''
                                            }
                                            onClick={() =>
                                                changeSlideClick(index)
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
        )
    );
};

export default Slider;
