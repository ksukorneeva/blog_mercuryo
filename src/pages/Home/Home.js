import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import NavBar from '../../components/ui/NavBar/NavBar';
import Header from '../../components/Header/Header';
import Section from '../../components/Section/Section';
import Authors from '../../components/Authors/Authors';
import Contacts from '../../components/ui/Contacts/Contacts';
import Footer from '../../components/Footer/Footer';
import Slider from '../../components/Slider/Slider';
import Subscribe from '../../components/ui/Subscribe/Subscribe';

const Desctop = () => {
    const [articlePosts, setArticlePosts] = useState();
    const [insightsPosts, setInsightsPosts] = useState();
    const [successPosts, setSuccessPosts] = useState();
    const [annonsPosts, setAnnonsPosts] = useState();
    const [roundPosts, setRoundPosts] = useState();
    const [mediaPosts, setMediaPosts] = useState();
    // const [partnersPosts, setPartnersPosts] = useState();
    const [users, setUsers] = useState();
    const gettingPosts = useCallback(async () => {
        const articles = await axios.get(
            'https://mercuryo.zazhigay.com/wp-json/wp/v2/posts?categories=5&per_page=8'
        );
        const annonsment = await axios.get(
            'https://mercuryo.zazhigay.com/wp-json/wp/v2/posts?categories=8&per_page=12'
        );
        const insights = await axios.get(
            'https://mercuryo.zazhigay.com/wp-json/wp/v2/posts?categories=6&per_page=4'
        );
        const media = await axios.get(
            'https://mercuryo.zazhigay.com/wp-json/wp/v2/posts?categories=10&per_page=8'
        );
        const roundUp = await axios.get(
            'https://mercuryo.zazhigay.com/wp-json/wp/v2/posts?categories=9&per_page=16'
        );
        const success = await axios.get(
            'https://mercuryo.zazhigay.com/wp-json/wp/v2/posts?categories=7&per_page=6'
        );
        const userdata = await axios.get(
            'http://mercuryo.zazhigay.com/wp-json/wp/v2/users?per_page=100'
        );

        const users = Array.from(userdata.data);

        const newArrUsers = users
            .filter((user) => user.id !== 10)
            .filter((user) => user.id !== 1);
        setUsers(newArrUsers);

        setArticlePosts(articles.data);
        setInsightsPosts(insights.data);
        setSuccessPosts(success.data);
        setAnnonsPosts(annonsment.data);
        setRoundPosts(roundUp.data);
        setMediaPosts(media.data);
        // setPartnersPosts(categoryFilter(posts, 'Part'));
    }, []);

    useEffect(() => {
        gettingPosts();
    }, [gettingPosts]);

    return (
        <>
            <Header />
            <NavBar />

            {articlePosts && (
                <Section
                    title='Articles'
                    size='small'
                    type='post'
                    arrPosts={articlePosts}
                />
            )}
            {users && <Authors authors={users} />}
            <Subscribe />
            {insightsPosts && (
                <Section
                    title='Insights'
                    size='large'
                    type='post'
                    arrPosts={insightsPosts}
                />
            )}

            {successPosts && (
                <Section
                    title='Success stories'
                    size='medium'
                    type='post'
                    bg='light'
                    arrPosts={successPosts}
                />
            )}
            {annonsPosts && (
                <Section
                    title='Announcements'
                    size='medium'
                    type='anons'
                    bg='dark'
                    arrPosts={annonsPosts}
                />
            )}
            {roundPosts && <Slider arrPosts={roundPosts} />}
            {mediaPosts && (
                <Section
                    title='Media'
                    size='small'
                    type='post'
                    arrPosts={mediaPosts}
                />
            )}
            <Contacts />
            <Footer />
        </>
    );
};

export default Desctop;
