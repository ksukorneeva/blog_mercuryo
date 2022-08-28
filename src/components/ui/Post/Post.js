import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Post.scss';

const Post = ({ classname, type, postInfo }) => {
    // console.log(postInfo);
    const navigate = useNavigate();
    const [post, setPost] = useState(postInfo);
    console.log(postInfo);
    // setPost(postInfo);
    const handelClick = () => {
        navigate(`/articles/id${postInfo.ID}`);
    };
    return (
        <div className={classname} onClick={handelClick}>
            <div className={type === 'anons' ? 'post__data' : 'close'}>
                {postInfo?.post_date || '20 Apr'}
            </div>
            <div className='post__title'>
                {postInfo?.post_title ||
                    'Fresh Challenges in a New Recruitment Paradigm'}
            </div>
            <div className={type === 'post' ? 'post__img' : 'close'}></div>
        </div>
    );
};

export default Post;
