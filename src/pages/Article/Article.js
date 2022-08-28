import React from 'react';
import './Article.scss';
import Paragraph from '../../components/ui/Paragraph/Paragraph';
// import Subscribe from '../../components/ui/Subscribe/Subscribe';
import Authors from '../../components/Authors/Authors';
import NavBar from '../../components/ui/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import { post } from '../../api/post1';
import Section from '../../components/Section/Section';
import twit from '../../img/icons/twit.png';
import facebook from '../../img/icons/facebook.png';

const Article = () => {
    // console.log(post.post_content);
    // const someProps = {
    //     greeting: post.post_content,
    // };
    console.log(post.post_content);
    return (
        <>
            <NavBar />
            <header className='header-art'>
                <div className='wrap'>
                    <div className='header-art__img'></div>
                    <div className='header-art__title'>
                        {/* Legal Round-Up #18: CryptoPunks Acquisition */}
                        {post.post_title}
                    </div>
                    <div className='header-art__description'>
                        Adam Berker on the details of the recent CryptoPunks
                        acquisition by Yuga Labs.
                        {/* {post.post_content} */}
                    </div>
                </div>
            </header>
            <div className='content-art'>
                <Paragraph quote='true' />
                {/* <Subscribe /> */}
                <div className='container'>
                    <div className='author-info'>
                        <div className='author-info__img'></div>
                        <div className='author-info__name'>Alisa Tkach</div>
                        <div className='author-info__icons'>
                            <img src={twit} alt='twit' />
                            <img src={facebook} alt='facebook' />
                        </div>
                        <div className='author-info__description'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Pellentesque sodales at nunc quis semper.
                        </div>
                        <Section title='More from Alisa Tkach' />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Article;
