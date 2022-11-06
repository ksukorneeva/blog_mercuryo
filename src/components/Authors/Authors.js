import React, { useEffect, useState } from 'react';
import './Authors.scss';
import Title from '../ui/Title/Title';
import Post from '../ui/Post/Post';
import axios from 'axios';
import { ReactComponent as IconRead } from '../../img/icons/iconread.svg';
import twit from '../../img/icons/twit.png';
import facebook from '../../img/icons/linkedin.png';
import Carousel from '../ui/Carousel/Carousel';
import { slice, concat } from 'lodash';
import { useNavigate } from 'react-router';
import { useCallback } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Authors = ({ view, authors }) => {
    const [user, setUser] = useState();
    const [users, setUsers] = useState();
    const navigate = useNavigate();
    const [authorPosts, setAuthorPosts] = useState();
    console.log(user?.yoast_head_json.schema['@graph'][3].sameAs);
    const LENGTH = 10;
    const LIMIT = 6;

    const [showMore, setShowMore] = useState(true);
    const [DATA, setDATA] = useState();
    const [list, setList] = useState(slice(DATA, 0, LIMIT));
    const [index, setIndex] = useState(LIMIT);

    const handleClick = async (user) => {
        setUser(user);
        const userPosts = await axios.get(
            `https://zazhigay.com/wp-json/wp/v2/posts?author=${user.id}&per_page=10`
        );
        setAuthorPosts(userPosts.data);
        setDATA(userPosts.data);
        setList(slice(userPosts.data, 0, LIMIT));
    };
    const gettingUsers = useCallback(async () => {
        const autorsPosts = await axios.get(
            `https://zazhigay.com/wp-json/wp/v2/posts?author=${
                authors[0].id
            }&per_page=${view === 'page' ? 100 : 10}`
        );
        setUser(authors[0]);
        setAuthorPosts(autorsPosts.data);
        setDATA(autorsPosts.data);
        setList(slice(autorsPosts.data, 0, LIMIT));
        setUsers(authors);
    }, [authors, view]);

    AOS.init();
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });

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

    console.log(user);

    return (
        authorPosts &&
        user &&
        users && (
            <section
                className={view === 'page' ? 'authors authors_view' : 'authors'}
                data-aos='fade-up'
                data-aos-duration='2500'
                data-aos-anchor-placement='top-bottom'
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
                                        src={
                                            user?.yoast_head_json.schema[
                                                '@graph'
                                            ][3].sameAs[0]
                                        }
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
                                        <a
                                            href={
                                                user.yoast_head_json.schema[
                                                    '@graph'
                                                ][3].sameAs[2]
                                            }
                                        >
                                            {' '}
                                            <img src={twit} alt='twit' />
                                        </a>
                                        <a
                                            href={
                                                user.yoast_head_json.schema[
                                                    '@graph'
                                                ][3].sameAs[1]
                                            }
                                        >
                                            {' '}
                                            <img
                                                src={facebook}
                                                alt='facebook'
                                            />
                                        </a>
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
