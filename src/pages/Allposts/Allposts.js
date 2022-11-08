import React from 'react';
import { useEffect, useState, useCallback } from 'react';
import Authors from '../../components/Authors/Authors';
import Footer from '../../components/Footer/Footer';
import Section from '../../components/Section/Section';
import Loader from '../../components/ui/Loader/Loader';
import NavBar from '../../components/ui/NavBar/NavBar';
import './Allposts.scss';

const Allposts = ({ type, title, view, arrPosts }) => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
    const [isLoading, setIsLoading] = useState(true);
    // setTimeout(setIsLoading(false), 10000);
    const gettingPosts = useCallback(async () => {
        setTimeout(setIsLoading, 1000, false);
    }, []);

    useEffect(() => {
        gettingPosts();
    }, [gettingPosts]);
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, []);
    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    {arrPosts && (
                        <>
                            {' '}
                            <NavBar />
                            {type === 'authors' ? (
                                <div className='indent'>
                                    <Authors view='page' authors={arrPosts} />
                                </div>
                            ) : (
                                <div className='indent'>
                                    <Section
                                        title={title}
                                        view={view}
                                        arrPosts={arrPosts}
                                        type={type}
                                    />
                                </div>
                            )}
                            <Footer />
                        </>
                    )}
                </>
            )}
        </>
    );
};

export default Allposts;
