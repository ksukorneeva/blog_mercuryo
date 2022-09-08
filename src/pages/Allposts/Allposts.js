import React from 'react';
import Authors from '../../components/Authors/Authors';
import Section from '../../components/Section/Section';
import Slider from '../../components/Slider/Slider';
import NavBar from '../../components/ui/NavBar/NavBar';

const Allposts = ({ type, title, view, arrPosts }) => {
    return (
        <>
            <NavBar />
            {type === 'authors' ? (
                <Authors view='page' />
            ) : type === 'slider' ? (
                <Slider arrPosts={arrPosts} />
            ) : (
                <Section title={title} view={view} arrPosts={arrPosts} />
            )}
        </>
    );
};

export default Allposts;
