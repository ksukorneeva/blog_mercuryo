import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Post.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Form from '../Form/Form';

const Post = ({ classname, type, postInfo }) => {
    const navigate = useNavigate();
    const [post, setPost] = useState();
    // console.log(postInfo?.x_metadata?.td_post_theme_settings?.td_source_url);
    const [popup, setPopup] = useState(false);

    const handelClick = () => {
        if (postInfo.x_metadata?.td_post_theme_settings?.td_source_url) {
            window.location =
                postInfo.x_metadata.td_post_theme_settings.td_source_url;
        } else if (post.x_tags === 'block') {
            return;
        } else if (post.x_tags === 'info') {
            setPopup(!popup);
        } else {
            navigate(`/articles/${postInfo.slug}`);
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        }
    };
    const handelOnClick = () => {};
    const data = new Date(post?.date).toDateString().slice(4, 10);
    AOS.init();
    useEffect(() => {
        setPost(postInfo);
        AOS.init();
    }, [postInfo]);
    return (
        post && (
            <>
                {!popup ? (
                    <div
                        className={classname}
                        onClick={handelClick}
                        data-aos='fade-up'
                        data-aos-duration='500'
                        data-aos-anchor-placement='top-bottom'
                    >
                        <div
                            className={
                                type === 'anons' ? 'post__data' : 'close'
                            }
                        >
                            {data}
                        </div>

                        <div
                            className={type === 'post' ? 'post__img' : 'close'}
                        >
                            <img
                                src={post.x_featured_media_large}
                                alt='postImage'
                            />
                        </div>
                        <div className='post__title'>
                            {post.title?.rendered}
                        </div>
                    </div>
                ) : (
                    <div className='modal'>
                        <Form path={postInfo.slug} />
                    </div>
                )}
            </>
        )
    );
};

export default Post;
