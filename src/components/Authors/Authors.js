import React, { useState } from 'react';
import './Authors.scss';
import Title from '../ui/Title/Title';
import Post from '../ui/Post/Post';
import { ReactComponent as LeftArrow } from '../../img/icons/leftArrow.svg';
import { ReactComponent as IconRead } from '../../img/icons/iconread.svg';
import twit from '../../img/icons/twit.png';
import facebook from '../../img/icons/facebook.png';
import { arrAuthors } from '../../api/users';
import CarouselRatio from '../ui/Carousel/Carousel';
import { arrPosts } from '../../api/post';
import { slice, concat } from 'lodash';

const Autors = () => {
    const [user, setUser] = useState(arrAuthors[0]);
    const [allPosts] = useState(arrPosts);
    const handleClick = (user) => {
        setUser(user);
    };

    let LENGTH = 10;
    let LIMIT = 6;
    arrPosts.length = LENGTH;
    const DATA = arrPosts;

    const [showMore, setShowMore] = useState(true);
    const [list, setList] = useState(slice(DATA, 0, LIMIT));
    const [index, setIndex] = useState(LIMIT);

    const loadMore = () => {
        const newIndex = index + LIMIT;
        const newShowMore = newIndex < LENGTH - 1;
        const newList = concat(list, slice(DATA, index, newIndex));
        setIndex(newIndex);
        setList(newList);
        setShowMore(newShowMore);
    };

    return (
        <section className='authors'>
            <div className='container'>
                <div className='authors__header'>
                    <Title>Authors</Title>
                    <div className='authors__list'>
                        {/* <ul>
                            {arrAuthors.map((author) => (
                                <li key={author.ID} className='item_active'>
                                    {author.display_name}
                                </li>
                            ))}
                        </ul> */}
                        <CarouselRatio
                            arrAuthors={arrAuthors}
                            onClick={handleClick}
                            active={user.ID}
                        />

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
                                <div className='info__title'>
                                    {user?.display_name}
                                </div>
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
