import React, { useEffect, useState } from 'react';
import './Article.scss';
import Paragraph from '../../components/ui/Paragraph/Paragraph';
// import Subscribe from '../../components/ui/Subscribe/Subscribe';
import Authors from '../../components/Authors/Authors';
import NavBar from '../../components/ui/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
// import { post } from '../../api/post1';
import Section from '../../components/Section/Section';
import twit from '../../img/icons/twit.png';
import facebook from '../../img/icons/facebook.png';
import { useParams } from 'react-router';
import axios from 'axios';
import Title from '../../components/ui/Title/Title';
import Post from '../../components/ui/Post/Post';
import { Link } from 'react-router-dom';
import { ReactComponent as IconRead } from '../../img/icons/iconread.svg';

const Article = () => {
    const params = useParams();
    const [post, setPost] = useState();
    const [user, setUser] = useState();
    const [userPosts, setUserPosts] = useState();
    const gettingPosts = async () => {
        const dataPosts = await axios.get(
            'https://mercuryo.zazhigay.com/wp-json/wp/v2/posts'
        );
        const dataUsers = await axios.get(
            'https://mercuryo.zazhigay.com/wp-json/wp/v2/users'
        );
        const post = dataPosts.data.filter(
            (post) => post.id === +params.id.slice(2)
        );
        setPost(post[0]);
        const user = dataUsers.data.filter(
            (user) => user.id === post[0].author
        );
        setUser(user[0]);

        setUserPosts(
            dataPosts.data.filter((post) => post.author === user[0].id)
        );
    };

    const GreetingComponent = (props) => {
        const innerHtml = { __html: props };
        return <div dangerouslySetInnerHTML={innerHtml}></div>;
    };

    useEffect(() => {
        gettingPosts();
    }, []);

    return (
        user &&
        post && (
            <>
                <NavBar />
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
                            {GreetingComponent(post.excerpt.rendered)}
                        </div>
                    </div>
                </header>
                <div className='content-art'>
                    <Paragraph quote='true' content={post.content.rendered} />
                    {/* {console.log(post.content)} */}
                    {/* <Subscribe /> */}
                    <div className='container'>
                        <div className='author-info'>
                            <div className='author-info__img'>
                                <img
                                    src={user.avatar_urls[96]}
                                    alt='user_avatar'
                                />
                            </div>
                            <div className='author-info__name'>{user.name}</div>
                            <div className='author-info__icons'>
                                <img src={twit} alt='twit' />
                                <img src={facebook} alt='facebook' />
                            </div>
                            <div className='author-info__description'>
                                {user.description}
                            </div>

                            <section className='section'>
                                <div className='container'>
                                    <div className='section__title'>
                                        <Title>{`More from ${user.name}`}</Title>
                                    </div>
                                    <div
                                        className={`section__posts section__posts_small`}
                                    >
                                        {userPosts.map((item, index) => {
                                            console.log(item);
                                            return (
                                                <Post
                                                    type='post'
                                                    key={index}
                                                    postInfo={item}
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
                            </section>

                            {/* <Section
                                title={`More from ${user.name}`}
                                arr={userPosts}
                            /> */}
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        )
    );
};

export default Article;
