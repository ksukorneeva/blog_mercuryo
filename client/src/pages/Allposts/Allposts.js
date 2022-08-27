import React from 'react';
import Authors from '../../components/Authors/Authors';
import Section from '../../components/Section/Section';
import Slider from '../../components/Slider/Slider';
import NavBar from '../../components/ui/NavBar/NavBar';

const Allposts = ({ type }) => {
    return (
        <>
            <NavBar />
            {type === 'authors' ? (
                <Authors />
            ) : type === 'slider' ? (
                <Slider />
            ) : (
                <Section />
            )}
        </>
    );
};

export default Allposts;
