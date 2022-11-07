import React, { useEffect, useState } from 'react';
import './Article.scss';
import Paragraph from '../../components/ui/Paragraph/Paragraph';
import NavBar from '../../components/ui/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import twit from '../../img/icons/twit.png';
import facebook from '../../img/icons/facebook.png';
import { useParams } from 'react-router';
import axios from 'axios';
import Post from '../../components/ui/Post/Post';
import { Link } from 'react-router-dom';
import { ReactComponent as IconRead } from '../../img/icons/iconread.svg';
import { useCallback } from 'react';
import Loader from '../../components/ui/Loader/Loader';

const Article = () => {
    const params = useParams();
    const [post, setPost] = useState();
    const [user, setUser] = useState();
    const [userPosts, setUserPosts] = useState();
    const [classNB, setClassNB] = useState('white');
    const [isLoading, setIsLoading] = useState('true');

    const gettingPosts = useCallback(async () => {
        const data = await axios.get(
            'https://zazhigay.com/wp-json/wp/v2/posts?page=1&per_page=100'
        );
        const data2 = await axios.get(
            'https://zazhigay.com/wp-json/wp/v2/posts?page=2&per_page=100'
        );
        const dataUsers = await axios.get(
            'https://zazhigay.com/wp-json/wp/v2/users?per_page=100'
        );
        const dataPosts = [].concat(data.data, data2.data);

        const post = dataPosts.filter(
            (post) => post.id === +params.id.slice(2)
        );
        setPost(post[0]);
        const user = dataUsers.data.filter(
            (user) => user.id === post[0].author
        );
        setUser(user[0]);

        setUserPosts(dataPosts.filter((post) => post.author === user[0].id));
        setIsLoading(false);
    }, [params]);

    const GreetingComponent = (props) => {
        const innerHtml = { __html: props };
        return <div dangerouslySetInnerHTML={innerHtml}></div>;
    };

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                setClassNB('black');
            }
            if (window.scrollY < 50) {
                setClassNB('white');
            }
        });
        gettingPosts();
    }, [gettingPosts]);

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <NavBar classNB={classNB} />
                    {user && post && params && (
                        <>
                            <header className='header-art'>
                                <div className='wrap'>
                                    <div className='header-art__img'>
                                        <img
                                            src={post.x_featured_media_large}
                                            alt='posts_img'
                                        />
                                    </div>
                                    <div className='header-art__title'>
                                        {post.title.rendered}
                                    </div>
                                    <div className='header-art__description'>
                                        {GreetingComponent(
                                            post.excerpt.rendered
                                        )}
                                    </div>
                                </div>
                            </header>
                            <div className='content-art'>
                                <Paragraph content={post.content.rendered} />
                                <div className='container'>
                                    <div className='author-info'>
                                        <div className='author-info__name'>
                                            via {user.name}
                                        </div>

                                        {/* <section className='section'>
                                            <div className='container'>
                                                <div className='section-title'>
                                                    <Link to='/authors'>{`More from ${user.name}`}</Link>
                                                </div>
                                                <div
                                                    className={`section__posts section__posts_small`}
                                                >
                                                    {userPosts
                                                        .slice(0, 8)
                                                        .map((item, index) => {
                                                            return (
                                                                <Post
                                                                    type='post'
                                                                    key={index}
                                                                    postInfo={
                                                                        item
                                                                    }
                                                                />
                                                            );
                                                        })}
                                                </div>

                                                <div className='section__button section__button'>
                                                    <button>
                                                        <Link to={`/authors`}>
                                                            Read more
                                                        </Link>
                                                    </button>

                                                    <IconRead />
                                                </div>
                                            </div>
                                        </section> */}
                                        <div className='authors__content'>
                                            <div className='row'>
                                                <div className='authors__info info'>
                                                    <div className='info__img'>
                                                        <Link to='/authors'>
                                                            {' '}
                                                            <img
                                                                src={
                                                                    user
                                                                        ?.yoast_head_json
                                                                        .schema[
                                                                        '@graph'
                                                                    ][3]
                                                                        .sameAs[0]
                                                                }
                                                                alt='user_avatar'
                                                            />
                                                        </Link>
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
                                                                    user
                                                                        .yoast_head_json
                                                                        .schema[
                                                                        '@graph'
                                                                    ][3]
                                                                        .sameAs[2]
                                                                }
                                                            >
                                                                {' '}
                                                                <img
                                                                    src={twit}
                                                                    alt='twit'
                                                                />
                                                            </a>
                                                            <a
                                                                href={
                                                                    user
                                                                        .yoast_head_json
                                                                        .schema[
                                                                        '@graph'
                                                                    ][3]
                                                                        .sameAs[1]
                                                                }
                                                            >
                                                                {' '}
                                                                <img
                                                                    src={
                                                                        facebook
                                                                    }
                                                                    alt='facebook'
                                                                />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='authors__posts'>
                                                    {userPosts
                                                        .slice(0, 6)
                                                        .map((post, index) =>
                                                            index === 1 ||
                                                            index === 0 ? (
                                                                <Post
                                                                    key={index}
                                                                    classname='post post_small'
                                                                    type='post'
                                                                    postInfo={
                                                                        post
                                                                    }
                                                                />
                                                            ) : (
                                                                ''
                                                            )
                                                        )}
                                                </div>
                                            </div>
                                            <div className='row_posts'>
                                                {userPosts
                                                    .slice(0, 6)
                                                    .map((post, index) =>
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
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                    <Footer />
                </>
            )}
        </>
    );
};

export default Article;
