import React from 'react';
import { useEffect } from 'react';
import Authors from '../../components/Authors/Authors';
import Footer from '../../components/Footer/Footer';
import Section from '../../components/Section/Section';
import NavBar from '../../components/ui/NavBar/NavBar';

const Allposts = ({ type, title, view, arrPosts }) => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, []);
    return (
        <>
            <NavBar />
            {arrPosts && (
                <>
                    {type === 'authors' ? (
                        <Authors view='page' authors={arrPosts} />
                    ) : (
                        <Section
                            title={title}
                            view={view}
                            arrPosts={arrPosts}
                            type={type}
                        />
                    )}
                </>
            )}
            <Footer />
        </>
    );
};

export default Allposts;
