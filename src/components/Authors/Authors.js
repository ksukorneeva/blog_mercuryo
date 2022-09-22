import React, { useEffect, useState } from 'react';
import './Authors.scss';
import Title from '../ui/Title/Title';
import Post from '../ui/Post/Post';

import { ReactComponent as IconRead } from '../../img/icons/iconread.svg';
import twit from '../../img/icons/twit.png';
import facebook from '../../img/icons/facebook.png';
import Carousel from '../ui/Carousel/Carousel';
import { slice, concat } from 'lodash';
import { useNavigate } from 'react-router';
import { useCallback } from 'react';

const Authors = ({ view, authors, allallPosts }) => {
    const [user, setUser] = useState();
    const [users, setUsers] = useState();
    const navigate = useNavigate();
    const [authorPosts, setAuthorPosts] = useState();
    const [allPosts, setAllPosts] = useState();

    const LENGTH = 10;
    const LIMIT = 6;

    const [showMore, setShowMore] = useState(true);
    const [DATA, setDATA] = useState();
    const [list, setList] = useState(slice(DATA, 0, LIMIT));
    const [index, setIndex] = useState(LIMIT);

    const handleClick = (user) => {
        setUser(user);
        const userPosts = allPosts.filter((post) => post.author === user.id);
        setAuthorPosts(userPosts);
        setDATA(userPosts);
        setList(slice(userPosts, 0, LIMIT));
    };
    const gettingUsers = useCallback(() => {
        setAllPosts(allallPosts);
        setUser(authors[0]);
        const authorAllPosts = allallPosts.filter(
            (post) => post.author === authors[0].id
        );
        setAuthorPosts(authorAllPosts);
        setDATA(authorAllPosts);
        setList(slice(authorAllPosts, 0, LIMIT));
        setUsers(authors);
    }, [allallPosts, authors]);
    useEffect(() => {
        gettingUsers();
    }, [gettingUsers]);

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
        user &&
        users && (
            <section
                className={view === 'page' ? 'authors authors_view' : 'authors'}
            >
                <div className='container'>
                    <div className='authors__header'>
                        <Title>Authors</Title>
                        <div className='authors__list'>
                            <Carousel
                                arrAuthors={users}
                                onClick={handleClick}
                                active={user.id}
                            />
                        </div>
                    </div>
                    <div className='authors__content'>
                        <div className='row'>
                            <div className='authors__info info'>
                                <div className='info__img'>
                                    <img
                                        src={user?.avatar_urls[96]}
                                        alt='user_avatar'
                                    />
                                </div>
                                <div className='info__text'>
                                    <div className='info__title'>
                                        {user?.name}
                                    </div>
                                    <div className='info__subtitle'>
                                        {user?.description}
                                    </div>
                                    <div className='info__icons'>
                                        <img src={twit} alt='twit' />
                                        <img src={facebook} alt='facebook' />
                                    </div>
                                </div>
                            </div>
                            <div className='authors__posts'>
                                {view === 'page'
                                    ? authorPosts?.map((post, index) =>
                                          index === 1 || index === 0 ? (
                                              <Post
                                                  key={index}
                                                  classname='post post_small'
                                                  type='post'
                                                  postInfo={post}
                                              />
                                          ) : (
                                              ''
                                          )
                                      )
                                    : list?.map((post, index) =>
                                          index === 1 || index === 0 ? (
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
                            {view === 'page'
                                ? authorPosts.map((post, index) =>
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
                                  )
                                : list.map((post, index) =>
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
                                <button
                                    onClick={
                                        showMore
                                            ? loadMore
                                            : navigate(`/authors`)
                                    }
                                >
                                    Read more
                                </button>
                                <IconRead />
                            </div>
                        </div>
                    )}
                </div>
            </section>
        )
    );
};

export default Authors;
