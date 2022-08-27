import React from 'react';
import './Post.scss';

const Post = ({ classname, type }) => {
    return (
        <div className={classname}>
            <div className={type === 'anons' ? 'post__data' : 'close'}>
                20 Apr
            </div>
            <div className='post__title'>
                Fresh Challenges in a New Recruitment Paradigm
            </div>
            <div className={type === 'post' ? 'post__img' : 'close'}></div>
        </div>
    );
};

export default Post;
