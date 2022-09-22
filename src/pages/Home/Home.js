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
    const [partnersPosts, setPartnersPosts] = useState();
    const [posts, setPosts] = useState();
    const [users, setUsers] = useState();

    const categoryFilter = (arr, category) => {
        const post = arr.filter((item) => {
            if (String(item.x_categories).includes(category)) {
                return item;
            }
            return false;
        });
        return post;
    };
    const gettingPosts = useCallback(async () => {
        const data = await axios.get(
            'http://mercuryo.zazhigay.com/wp-json/wp/v2/posts?page=1&per_page=100'
        );
        const data2 = await axios.get(
            'http://mercuryo.zazhigay.com/wp-json/wp/v2/posts?page=2&per_page=100'
        );
        const userdata = await axios.get(
            'http://mercuryo.zazhigay.com/wp-json/wp/v2/users?per_page=100'
        );
        const posts = [].concat(data.data, data2.data);

        const users = Array.from(userdata.data);
        setPosts(posts);

        const newArrUsers = users
            .filter((user) => user.id !== 10)
            .filter((user) => user.id !== 1);
        setUsers(newArrUsers);

        setArticlePosts(categoryFilter(posts, 'Articles'));
        setInsightsPosts(categoryFilter(posts, 'Insights'));
        setSuccessPosts(categoryFilter(posts, 'Success stories'));
        setAnnonsPosts(categoryFilter(posts, 'Announcements'));
        setRoundPosts(categoryFilter(posts, 'Round-up'));
        setMediaPosts(categoryFilter(posts, 'Media'));
        setPartnersPosts(categoryFilter(posts, 'Part'));
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
            {users && posts && <Authors authors={users} allallPosts={posts} />}
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
