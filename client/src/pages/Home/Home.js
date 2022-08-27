import React from 'react';
import NavBar from '../../components/ui/NavBar/NavBar';
import Header from '../../components/Header/Header';
import Section from '../../components/Section/Section';
import Authors from '../../components/Authors/Authors';
import Contacts from '../../components/ui/Contacts/Contacts';
import Footer from '../../components/Footer/Footer';
// import Subscribe from '../../components/ui/Subscribe/Subscribe';
import Slider from '../../components/Slider/Slider';

const Desctop = () => {
    return (
        <>
            <Header />
            <NavBar />
            <Section size='small' type='post' />
            <Authors />
            {/* <Subscribe /> */}
            <Section size='large' type='post' />
            <Section size='medium' type='post' bg='light' />
            <Section size='medium' type='anons' bg='dark' />
            <Slider />
            <Section size='small' type='post' />
            <Contacts />
            <Footer />
        </>
    );
};

export default Desctop;
