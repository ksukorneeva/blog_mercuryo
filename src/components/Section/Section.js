import React, { useState, useEffect, useContext } from 'react';
import './Section.scss';
import { ReactComponent as IconRead } from '../../img/icons/iconread.svg';
import Title from '../ui/Title/Title';
import Post from '../ui/Post/Post';
import { slice, concat } from 'lodash';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AppContext } from '../../context/AppContext';

const Section = ({
    title,
    size = 'small',
    type = 'post',
    bg,
    view,
    arrPosts,
}) => {
    const app = useContext(AppContext);
    const [postSearch, setPostSearch] = useState();
    const [showMore, setShowMore] = useState(true);
    const [hide, setHide] = useState(true);
    const cls = ['post'];
    const bgc = ['section'];
    size && cls.push(`post_${size}`);
    bg && bgc.push(`section_${bg}`);
    const classname = cls.join(' ');
    const navigate = useNavigate();

    let LENGTH = 8;
    let LIMIT = 4;
    if (size === 'small') {
        LENGTH = 8;
        LIMIT = 4;
    } else if (size === 'medium' && type === 'anons') {
        LENGTH = 18;
        LIMIT = 6;
    } else if (size === 'medium') {
        LENGTH = 6;
        LIMIT = 3;
    } else if (size === 'large') {
        LENGTH = 4;
        LIMIT = 2;
    }
    const [DATA] = useState(arrPosts);
    const [list, setList] = useState(slice(DATA, 0, LIMIT));
    const [index, setIndex] = useState(LIMIT);

    const gettingPosts = async () => {
        const data = await axios.get('/posts');

        const search = Array.from(data.data).filter((post) => {
            console.log(post);
            if (post.content.rendered?.includes(app.search)) {
                return post;
            }
            if (post.title.rendered?.includes(app.search)) {
                return post;
            }
        });
        setPostSearch(search);
    };

    useEffect(() => {
        gettingPosts();
    }, []);

    const loadMore = () => {
        const newIndex = index + LIMIT;
        const newShowMore = newIndex < LENGTH - 1;
        const newList = concat(list, slice(DATA, index, newIndex));
        if (type === 'anons') {
            setHide(false);
        }
        if (list.length === newList.length && type !== 'anons') {
            navigate(`/${title.toLowerCase()}`);
        } else {
            setIndex(newIndex);
            setList(newList);
            setShowMore(newShowMore);
        }
    };
    if (title === 'Search') {
        return (
            postSearch && (
                <section className={bgc.join(' ')}>
                    <div className='container'>
                        <div>
                            <Title>{title}</Title>
                        </div>
                        <div
                            className={`section__posts section__posts_${size}`}
                        >
                            {postSearch.map((item, index) => {
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
                </section>
            )
        );
    }
    return (
        arrPosts && (
            <section className={bgc.join(' ')}>
                <div className='container'>
                    <div
                        className={
                            bg === 'dark'
                                ? 'section__title_dark'
                                : 'section__title'
                        }
                    >
                        <Title bg={bg}>{title}</Title>
                    </div>
                    <div className={`section__posts section__posts_${size}`}>
                        {view === 'page'
                            ? arrPosts.map((item, index) => {
                                  return (
                                      <Post
                                          classname={classname}
                                          type={type}
                                          key={index}
                                          postInfo={item}
                                      />
                                  );
                              })
                            : list.map((item, index) => {
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
                    {view !== 'page' && (
                        <div
                            className={
                                bg === 'dark'
                                    ? 'section__button section__button_dark'
                                    : 'section__button'
                            }
                        >
                            {showMore && hide ? (
                                <button onClick={loadMore}>
                                    Read more <IconRead />
                                </button>
                            ) : (
                                ''
                            )}
                        </div>
                    )}
                </div>
            </section>
        )
    );
};

export default Section;
