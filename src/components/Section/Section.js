import React, { useState, useEffect } from 'react';
import './Section.scss';
import { ReactComponent as IconRead } from '../../img/icons/iconread.svg';
import Title from '../ui/Title/Title';
import Post from '../ui/Post/Post';

import { slice, concat } from 'lodash';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Section = ({ title, size = 'small', type = 'post', bg, view }) => {
    const [posts, setPosts] = useState();
    const [showMore, setShowMore] = useState(true);

    const cls = ['post'];
    const bgc = ['section'];
    size && cls.push(`post_${size}`);
    bg && bgc.push(`section_${bg}`);
    const classname = cls.join(' ');

    let LENGTH = 8;
    let LIMIT = 4;
    if (size === 'small') {
        LENGTH = 8;
        LIMIT = 4;
    } else if (size === 'medium') {
        LENGTH = 6;
        LIMIT = 3;
    } else if (size === 'large') {
        LENGTH = 4;
        LIMIT = 2;
    }
    const [DATA, setDATA] = useState();
    const [list, setList] = useState([]);
    const [index, setIndex] = useState(LIMIT);

    const gettingPosts = async () => {
        const data = await axios.get(
            'https://mercuryo.zazhigay.com/wp-json/wp/v2/posts'
        );
        setPosts(data.data);
        setDATA(data.data);
        setList(slice(data.data, 0, LIMIT));
    };

    useEffect(() => {
        gettingPosts();
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
        posts && (
            <section className={bgc.join(' ')}>
                {view === 'page' ? (
                    <div className='container'>
                        <div className='section__title'>
                            <Title>{title}</Title>
                        </div>
                        <div
                            className={`section__posts section__posts_${size}`}
                        >
                            {posts.map((item, index) => {
                                return (
                                    <Post
                                        classname={classname}
                                        type={type}
                                        key={index}
                                        postInfo={item}
                                    />
                                );
                            })}
                        </div>
                    </div>
                ) : (
                    <div className='container'>
                        <div className='section__title'>
                            <Title>{title}</Title>
                        </div>
                        <div
                            className={`section__posts section__posts_${size}`}
                        >
                            {list.map((item, index) => {
                                return (
                                    <Post
                                        classname={classname}
                                        type={type}
                                        key={index}
                                        postInfo={item}
                                    />
                                );
                            })}
                        </div>
                        {bg === 'dark' ? (
                            <div className='section__button section__button_dark'>
                                {showMore ? (
                                    <button onClick={loadMore}>
                                        Read more
                                    </button>
                                ) : (
                                    <button>
                                        <Link to={`/${title.toLowerCase()}`}>
                                            Read more
                                        </Link>
                                    </button>
                                )}

                                <IconRead />
                            </div>
                        ) : (
                            <div className='section__button section__button'>
                                {showMore ? (
                                    <button onClick={loadMore}>
                                        Read more
                                    </button>
                                ) : (
                                    <button>
                                        <Link to={`/${title.toLowerCase()}`}>
                                            Read more
                                        </Link>
                                    </button>
                                )}
                                <IconRead />
                            </div>
                        )}
                    </div>
                )}
            </section>
        )
    );
};

export default Section;
