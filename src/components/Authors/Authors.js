import React from 'react';
import './Authors.scss';
import Title from '../ui/Title/Title';
import Post from '../ui/Post/Post';
import { ReactComponent as LeftArrow } from '../../img/icons/leftArrow.svg';
import { ReactComponent as IconRead } from '../../img/icons/iconread.svg';
import twit from '../../img/icons/twit.png';
import facebook from '../../img/icons/facebook.png';

const Autors = () => {
    return (
        <section className='authors'>
            <div className='container'>
                <div className='authors__header'>
                    <Title>Authors</Title>
                    <div className='authors__list'>
                        <ul>
                            <li className='item_active'>Alisa Tkach</li>
                            <li>Adam Berker</li>
                            <li>Alisa Tkach</li>
                            <li>Adam Berker</li>
                            <li>Alisa Tkach</li>
                            <li>Adam Berker</li>
                            <li>Alisa Tkach</li>
                        </ul>
                        <div className='authors__button'>
                            <LeftArrow />
                        </div>
                    </div>
                </div>
                <div className='authors__content'>
                    <div className='row'>
                        <div className='authors__info info'>
                            <div className='info__img'></div>
                            <div className='info__text'>
                                <div className='info__title'>Alisa Tkach</div>
                                <div className='info__subtitle'>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Pellentesque sodales at
                                    nunc quis semper.{' '}
                                </div>
                                <div className='info__icons'>
                                    <img src={twit} alt='twit' />
                                    <img src={facebook} alt='facebook' />
                                </div>
                            </div>
                        </div>
                        <div className='authors__posts'>
                            <Post classname='post post_small' type='post' />
                            <Post classname='post post_small' type='post' />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='authors__posts'>
                            <Post classname='post post_small' type='post' />
                            <Post classname='post post_small' type='post' />
                        </div>
                        <div className='authors__posts'>
                            <Post classname='post post_small' type='post' />
                            <Post classname='post post_small' type='post' />
                        </div>
                    </div>
                </div>

                <div className='authors__bottom bottom'>
                    <div className='bottom__button'>
                        <button>Read more</button>
                        <IconRead />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Autors;
