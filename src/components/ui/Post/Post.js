import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Post.scss';

const Post = ({ classname, type, postInfo }) => {
    const navigate = useNavigate();
    const [post] = useState(postInfo);
    const handelClick = () => {
        navigate(`/articles/id${postInfo.id}`);
    };
    const data = new Date(post?.date).toDateString().slice(4, 10);
    return (
        post && (
            <div className={classname} onClick={handelClick}>
                <div className={type === 'anons' ? 'post__data' : 'close'}>
                    {data}
                </div>

                <div className={type === 'post' ? 'post__img' : 'close'}>
                    <img src={post.x_featured_media_large} alt='postImage' />
                </div>
                <div className='post__title'>{post.title?.rendered}</div>
            </div>
        )
    );
};

export default Post;
