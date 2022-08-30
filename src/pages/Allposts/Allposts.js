import React from 'react';
import Authors from '../../components/Authors/Authors';
import Section from '../../components/Section/Section';
import Slider from '../../components/Slider/Slider';
import NavBar from '../../components/ui/NavBar/NavBar';

const Allposts = ({ type, title, view }) => {
    return (
        <>
            <NavBar />
            {type === 'authors' ? (
                <Authors view='page' />
            ) : type === 'slider' ? (
                <Slider />
            ) : (
                <Section title={title} view={view} />
            )}
        </>
    );
};

export default Allposts;
