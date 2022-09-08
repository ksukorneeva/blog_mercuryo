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
        { id: 5, text: 'Mercuryo’s Business Development in the USA', img: Img },
        {
            id: 6,
            text: 'Fresh Challenges in a New Recruitment Paradigm',
            img: 'https://klike.net/uploads/posts/2019-05/1556708032_1.jpg',
        },
        {
            id: 7,
            text: 'Banking-as-a-Service: Crypto for the Masses',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz1gzKbjKp3Z94_QdXEA2ZNtS1SNckssQOr-mbatHj&s',
        },
        {
            id: 8,
            text: 'Opportunities in a Bear Market: Report by Mercuryo',
            img: 'https://st2.depositphotos.com/3364363/5972/i/600/depositphotos_59728757-stock-photo-waiting-for-a-new-day.jpg',
        },
        { id: 9, text: 'Mercuryo’s Business Development in the USA', img: Img },
        {
            id: 10,
            text: 'youggyuguygyuturtdrddrdt',
            img: 'https://klike.net/uploads/posts/2019-05/1556708032_1.jpg',
        },
        {
            id: 11,
            text: 'lorem10  knuuygyygytftyfytyfyff',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz1gzKbjKp3Z94_QdXEA2ZNtS1SNckssQOr-mbatHj&s',
        },
        {
            id: 12,
            text: 'lotem10  iuuyytfytftuy',
            img: 'https://st2.depositphotos.com/3364363/5972/i/600/depositphotos_59728757-stock-photo-waiting-for-a-new-day.jpg',
        },
        {
            id: 13,
            text: 'pokppokpopjjjpijip',
            img: Img,
        },
        {
            id: 14,
            text: 'gghgghghgh ghghghg hghghgh ghghghg hghghghgh',
            img: 'https://klike.net/uploads/posts/2019-05/1556708032_1.jpg',
        },
        {
            id: 15,
            text: 'ffffffffffffffffftffttftftff',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz1gzKbjKp3Z94_QdXEA2ZNtS1SNckssQOr-mbatHj&s',
        },
        {
            id: 16,
            text: 'uiihiuhpiopjo[jo',
            img: 'https://st2.depositphotos.com/3364363/5972/i/600/depositphotos_59728757-stock-photo-waiting-for-a-new-day.jpg',
        },
    ];
    const [active, setActive] = useState(0);
    const [activePost, setActivePost] = useState(arrSlider.slice(0, 4));
    const [activeSlide, setActiveSlide] = useState(0);
    const [page] = useState(4);

    const changeSlideHandler = (index) => {
        setActive(index);
    };
    const changeSlideClick = (index) => {
        setActiveSlide(index);
        setActivePost(arrSlider.slice(index * 4, (index + 1) * 4));
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
                                        {slide.text}
                                    </li>
                                ))}
                            </ul>
                            <ul className='slider__icon'>
                                {activePost.map((slide, index) => (
                                    <li
                                        key={index}
                                        className={
                                            activeSlide === index
                                                ? 'active'
                                                : ''
                                        }
                                        onClick={() => changeSlideClick(index)}
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
