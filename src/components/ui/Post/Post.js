import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Post.scss';

const Post = ({ classname, type, postInfo }) => {
    const navigate = useNavigate();
    const [post] = useState(postInfo);
    const handelClick = () => {
        navigate(`/articles/id${postInfo.id}`);
    };
    console.log(post);
    return (
        post && (
            <div className={classname} onClick={handelClick}>
                <div className={type === 'anons' ? 'post__data' : 'close'}>
                    {post?.date || '20 Apr'}
                </div>
                <div className='post__title'>{post.title.rendered}</div>
                <div className={type === 'post' ? 'post__img' : 'close'}>
                    <img src={post.x_featured_media_medium} alt='postImage' />
                </div>
            </div>
        )
    );
};

export default Post;
