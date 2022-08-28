import React from 'react';
import Authors from '../../components/Authors/Authors';
import Section from '../../components/Section/Section';
import Slider from '../../components/Slider/Slider';
import NavBar from '../../components/ui/NavBar/NavBar';
import { useParams } from 'react-router';

const Allposts = ({ type, title, view }) => {
    const params = useParams();
    console.log(params);
    return (
        <>
            <NavBar />
            {type === 'authors' ? (
                <Authors />
            ) : type === 'slider' ? (
                <Slider />
            ) : (
                <Section title={title} view={view} />
            )}
        </>
    );
};

export default Allposts;
