import React, { useState } from 'react';
import './Section.scss';
import { ReactComponent as IconRead } from '../../img/icons/iconread.svg';
import Title from '../ui/Title/Title';
import Post from '../ui/Post/Post';

const Section = ({ title, posts, size = 'small', type, bg }) => {
    const [readMore, setReadMore] = useState(false);
    const [arrPosts, setArrPosts] = useState([]);
    const cls = ['post'];

    const bgc = ['section'];
    const firstPosts = [1, 2];
    size && cls.push(`post_${size}`);
    bg && bgc.push(`section_${bg}`);
    const classname = cls.join(' ');
    const postsAll = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const countPosts = (size) => {
        if (size === 'small') {
            for (let i = 2; i < 4; i++) {
                firstPosts.push(postsAll[i]);
            }
        } else if (size === 'medium') {
            for (let i = 2; i < 3; i++) {
                firstPosts.push(postsAll[i]);
            }
        }
    };
    countPosts(size);
    const handelClick = () => {
        setReadMore(!readMore);
        readMore ? setArrPosts(postsAll) : setArrPosts(firstPosts);
    };
    return (
        <section className={bgc.join(' ')}>
            <div className='container'>
                <div className='section__title'>
                    <Title>Success stories</Title>
                </div>

                <div className={`section__posts section__posts_${size}`}>
                    {firstPosts.map((item) => (
                        <Post classname={classname} type={type} key={item} />
                    ))}
                </div>
                {bg === 'dark' ? (
                    <div className='section__button section__button_dark'>
                        <button onClick={handelClick}>Read more</button>
                        <IconRead />
                    </div>
                ) : (
                    <div className='section__button section__button'>
                        <button onClick={handelClick}>Read more</button>
                        <IconRead />
                    </div>
                )}
            </div>
        </section>
    );
};

export default Section;
