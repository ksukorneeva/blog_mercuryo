import React, { useEffect, useState } from 'react';
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

import axios from 'axios';
import { useNavigate } from 'react-router';

const Autors = ({ view }) => {
    const [user, setUser] = useState();
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
    const [authorPosts, setAuthorPosts] = useState([]);
    const [allPosts, setAllPosts] = useState([]);

    let LENGTH = 10;
    let LIMIT = 6;
    arrPosts.length = LENGTH;

    const [showMore, setShowMore] = useState(true);
    const [DATA, setDATA] = useState();
    const [list, setList] = useState(slice(DATA, 0, LIMIT));
    const [index, setIndex] = useState(LIMIT);

    const handleClick = (user) => {
        setUser(user);
        setAuthorPosts(allPosts.filter((post) => post.author === user.id));
        setDATA(allPosts.filter((post) => post.author === user.id));
        setList(
            slice(
                allPosts.filter((post) => post.author === user.id),
                0,
                LIMIT
            )
        );
    };
    const gettingUsers = async () => {
        const arrUsers = await axios.get(
            'https://mercuryo.zazhigay.com/wp-json/wp/v2/users'
        );
        setUsers(arrUsers.data);
        setUser(arrUsers.data[0]);
        const arrPost = await axios.get(
            'https://mercuryo.zazhigay.com/wp-json/wp/v2/posts'
        );
        setAllPosts(arrPost.data);
        setAuthorPosts(
            arrPost.data.filter((post) => post.author === arrUsers.data[0].id)
        );
        setDATA(
            arrPost.data.filter((post) => post.author === arrUsers.data[0].id)
        );
        setList(
            slice(
                arrPost.data.filter(
                    (post) => post.author === arrUsers.data[0].id
                ),
                0,
                LIMIT
            )
        );
    };
    useEffect(() => {
        gettingUsers();
    }, []);

    const loadMore = () => {
        const newIndex = index + LIMIT;
        const newShowMore = newIndex < LENGTH - 1;
        const newList = concat(list, slice(DATA, index, newIndex));
        setIndex(newIndex);
        setList(newList);
        setShowMore(newShowMore);
    };

    return (
        authorPosts &&
        user && (
            <section
                className={view === 'page' ? 'authors authors_view' : 'authors'}
            >
                <div className='container'>
                    <div className='authors__header'>
                        <Title>Authors</Title>
                        <div className='authors__list'>
                            <CarouselRatio
                                arrAuthors={users}
                                onClick={handleClick}
                                active={user.id}
                            />

                            <div className='authors__button'>
                                <LeftArrow />
                            </div>
                        </div>
                    </div>
                    <div className='authors__content'>
                        <div className='row'>
                            <div className='authors__info info'>
                                <div className='info__img'>
                                    <img
                                        src={user.avatar_urls[96]}
                                        alt='user_avatar'
                                    />
                                </div>
                                <div className='info__text'>
                                    <div className='info__title'>
                                        {user.name}
                                    </div>
                                    <div className='info__subtitle'>
                                        {user.description}
                                    </div>
                                    <div className='info__icons'>
                                        <img src={twit} alt='twit' />
                                        <img src={facebook} alt='facebook' />
                                    </div>
                                </div>
                            </div>

                            <div className='authors__posts'>
                                {authorPosts?.map((post, index) =>
                                    index === 1 ? (
                                        <Post
                                            key={index}
                                            classname='post post_small'
                                            type='post'
                                            postInfo={post}
                                        />
                                    ) : index === 0 ? (
                                        <Post
                                            key={index}
                                            classname='post post_small'
                                            type='post'
                                            postInfo={post}
                                        />
                                    ) : (
                                        ''
                                    )
                                )}
                            </div>
                        </div>
                        <div className='row_posts'>
                            {authorPosts?.map((post, index) =>
                                index > 1 ? (
                                    <Post
                                        key={index}
                                        classname='post post_small'
                                        type='post'
                                        postInfo={post}
                                    />
                                ) : (
                                    ''
                                )
                            )}
                        </div>
                    </div>

                    {view !== 'page' && (
                        <div className='authors__bottom bottom'>
                            <div className='bottom__button'>
                                {showMore ? (
                                    <button onClick={loadMore}>
                                        Read more
                                    </button>
                                ) : (
                                    <button onClick={navigate(`/authors`)}>
                                        {/* <Link to={`/${.toLowerCase()}`}> */}
                                        Read more
                                        {/* </Link> */}
                                    </button>
                                )}
                                <IconRead />
                            </div>
                        </div>
                    )}
                </div>
            </section>
        )
    );
};

export default Autors;
