import React from 'react';
import './Article.scss';
import Paragraph from '../../components/ui/Paragraph/Paragraph';
import Subscribe from '../../components/ui/Subscribe/Subscribe';
import Authors from '../../components/Authors/Authors';
import NavBar from '../../components/ui/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';

const Article = () => {
    return (
        <>
            <NavBar />
            <header className='header-art'>
                <div className='wrap'>
                    <div className='header-art__img'></div>
                    <div className='header-art__title'>
                        Legal Round-Up #18: CryptoPunks Acquisition
                    </div>
                    <div className='header-art__description'>
                        Adam Berker on the details of the recent CryptoPunks
                        acquisition by Yuga Labs.
                    </div>
                </div>
            </header>
            <div className='content-art'>
                <Paragraph quote='true' />
                <div className='wrap'>
                    <div className='content-art__img'></div>
                </div>
                <Paragraph bg='light' />
                <Paragraph />

                <Authors />
                {/* <Subscribe /> */}
            </div>
            <Footer />
        </>
    );
};

export default Article;
