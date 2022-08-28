import React, { useState } from 'react';
import './Section.scss';
import { ReactComponent as IconRead } from '../../img/icons/iconread.svg';
import Title from '../ui/Title/Title';
import Post from '../ui/Post/Post';
import { arrPosts } from '../../api/post';
import { slice, concat } from 'lodash';
import { Link } from 'react-router-dom';

const Section = ({ title, size = 'small', type = 'post', bg, view }) => {
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
    arrPosts.length = LENGTH;
    const DATA = arrPosts;

    const [showMore, setShowMore] = useState(true);
    const [list, setList] = useState(slice(DATA, 0, LIMIT));
    const [index, setIndex] = useState(LIMIT);
    const [allPosts] = useState(arrPosts);

    const loadMore = () => {
        const newIndex = index + LIMIT;
        const newShowMore = newIndex < LENGTH - 1;
        const newList = concat(list, slice(DATA, index, newIndex));
        setIndex(newIndex);
        setList(newList);
        setShowMore(newShowMore);
    };
    return (
        <section className={bgc.join(' ')}>
            {view === 'page' ? (
                <div className='container'>
                    <div className='section__title'>
                        <Title>{title}</Title>
                    </div>
                    <div className={`section__posts section__posts_${size}`}>
                        {allPosts.map((item, index) => {
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
                    <div className={`section__posts section__posts_${size}`}>
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
                                <button onClick={loadMore}>Read more</button>
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
                                <button onClick={loadMore}>Read more</button>
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
    );
};

export default Section;
