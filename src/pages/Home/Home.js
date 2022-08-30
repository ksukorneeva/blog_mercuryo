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
            <Section key={1} title='Articles' size='small' type='post' />
            <Authors />
            {/* <Subscribe /> */}
            <Section key={2} title='Insights' size='large' type='post' />
            <Section
                title='Success stories'
                size='medium'
                type='post'
                bg='light'
            />
            <Section
                key={3}
                title='Announcements'
                size='medium'
                type='anons'
                bg='dark'
            />
            <Slider />
            <Section key={4} title='Media' size='small' type='post' />
            <Contacts />
            <Footer />
        </>
    );
};

export default Desctop;
