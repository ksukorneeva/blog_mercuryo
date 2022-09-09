import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import NavBar from '../../components/ui/NavBar/NavBar';
import Header from '../../components/Header/Header';
import Section from '../../components/Section/Section';
import Authors from '../../components/Authors/Authors';
import Contacts from '../../components/ui/Contacts/Contacts';
import Footer from '../../components/Footer/Footer';
import Slider from '../../components/Slider/Slider';

const Desctop = () => {
    const [articlePosts, setArticlePosts] = useState();
    const [insightsPosts, setInsightsPosts] = useState();
    const [successPosts, setSuccessPosts] = useState();
    const [annonsPosts, setAnnonsPosts] = useState();
    const [roundPosts, setRoundPosts] = useState();
    const [mediaPosts, setMediaPosts] = useState();
    const [posts, setPosts] = useState();
    const [users, setUsers] = useState();

    const categoryFilter = (arr, category) => {
        const post = arr.filter((item) => {
            if (String(item.x_categories).includes(category)) {
                return item;
            }
        });
        return post;
    };
    const gettingPosts = useCallback(async () => {
        const data = await axios.get(
            'https://mercuryo.zazhigay.com/wp-json/wp/v2/posts'
        );
        const userdata = await axios.get(
            'https://mercuryo.zazhigay.com/wp-json/wp/v2/users'
        );
        const posts = Array.from(data.data);
        const users = Array.from(userdata.data);
        setPosts(posts);
        console.log(data.data);

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
    }, []);

    useEffect(() => {
        gettingPosts();
    }, [gettingPosts]);

    return (
        posts &&
        articlePosts &&
        insightsPosts &&
        successPosts &&
        annonsPosts &&
        roundPosts &&
        mediaPosts &&
        users && (
            <>
                <Header />
                <NavBar />
                <Section
                    title='Articles'
                    size='small'
                    type='post'
                    arrPosts={articlePosts}
                />
                <Authors authors={users} allallPosts={posts} />
                <Section
                    title='Insights'
                    size='large'
                    type='post'
                    arrPosts={insightsPosts}
                />
                <Section
                    title='Success stories'
                    size='medium'
                    type='post'
                    bg='light'
                    arrPosts={successPosts}
                />
                <Section
                    title='Announcements'
                    size='medium'
                    type='anons'
                    bg='dark'
                    arrPosts={annonsPosts}
                />
                <Slider arrPosts={roundPosts} />
                <Section
                    title='Media'
                    size='small'
                    type='post'
                    arrPosts={mediaPosts}
                />
                <Contacts />
                <Footer />
            </>
        )
    );
};

export default Desctop;
