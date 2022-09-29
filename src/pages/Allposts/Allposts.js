import React from 'react';
import Authors from '../../components/Authors/Authors';
import Section from '../../components/Section/Section';
import NavBar from '../../components/ui/NavBar/NavBar';

const Allposts = ({ type, title, view, arrPosts }) => {
    return (
        arrPosts && (
            <>
                <NavBar />
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
        )
    );
};

export default Allposts;
