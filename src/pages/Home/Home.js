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
import Loader from '../../components/ui/Loader/Loader';

const Desctop = () => {
    const [articlePosts, setArticlePosts] = useState();
    const [insightsPosts, setInsightsPosts] = useState();
    const [successPosts, setSuccessPosts] = useState();
    const [annonsPosts, setAnnonsPosts] = useState();
    const [roundPosts, setRoundPosts] = useState();
    const [mediaPosts, setMediaPosts] = useState();
    const [partnersPosts, setPartnersPosts] = useState();
    const [users, setUsers] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const gettingPosts = useCallback(async () => {
        const articles = await axios.get(
            'https://zazhigay.com/wp-json/wp/v2/posts?categories=5&per_page=8'
        );
        const annonsment = await axios.get(
            'https://zazhigay.com/wp-json/wp/v2/posts?categories=8&per_page=12'
        );
        const insights = await axios.get(
            'https://zazhigay.com/wp-json/wp/v2/posts?categories=6&per_page=4'
        );
        const media = await axios.get(
            'https://zazhigay.com/wp-json/wp/v2/posts?categories=10&per_page=8'
        );
        const roundUp = await axios.get(
            'https://zazhigay.com/wp-json/wp/v2/posts?categories=9&per_page=16'
        );
        const success = await axios.get(
            'https://zazhigay.com/wp-json/wp/v2/posts?categories=7&per_page=6'
        );
        const userdata = await axios.get(
            'https://zazhigay.com/wp-json/wp/v2/users?per_page=50'
        );
        const partners = await axios.get(
            'https://zazhigay.com/wp-json/wp/v2/posts?categories=148&per_page=50'
        );

        const users = Array.from(userdata.data);
        const newArrUsers = users
            .filter((user) => user.id !== 10)
            .filter((user) => user.id !== 1);
        const usersSort = newArrUsers.sort(function (a, b) {
            return (
                Number(a.yoast_head_json.schema['@graph'][3].sameAs) -
                Number(b.yoast_head_json.schema['@graph'][3].sameAs)
            );
        });
        setUsers(usersSort);

        setArticlePosts(articles.data);
        setInsightsPosts(insights.data);
        setSuccessPosts(success.data);
        setAnnonsPosts(annonsment.data);
        setRoundPosts(roundUp.data);
        setMediaPosts(media.data);
        setPartnersPosts(partners.data);
        // setPartnersPosts(categoryFilter(posts, 'Part'));
        setIsLoading(false);
    }, []);

    useEffect(() => {
        gettingPosts();
    }, [gettingPosts]);

    return (
        <>
            {isLoading ? (
                <>
                    <Loader />
                </>
            ) : (
                <>
                    <Header />
                    <NavBar />

                    {articlePosts?.length && (
                        <Section
                            title='Articles'
                            size='small'
                            type='post'
                            arrPosts={articlePosts}
                        />
                    )}
                    {users?.length && <Authors authors={users} />}
                    <Subscribe />
                    {insightsPosts?.length && (
                        <Section
                            title='Insights'
                            size='large'
                            type='post'
                            arrPosts={insightsPosts}
                        />
                    )}

                    {successPosts?.length && (
                        <Section
                            title='Success stories'
                            size='medium'
                            type='post'
                            bg='light'
                            arrPosts={successPosts}
                        />
                    )}
                    {annonsPosts?.length && (
                        <Section
                            title='Announcements'
                            size='medium'
                            type='anons'
                            bg='dark'
                            arrPosts={annonsPosts}
                        />
                    )}
                    {roundPosts?.length && <Slider arrPosts={roundPosts} />}
                    {mediaPosts?.length && (
                        <Section
                            title='Media'
                            size='small'
                            type='post'
                            arrPosts={mediaPosts}
                        />
                    )}
                    {partnersPosts?.length && (
                        <Section
                            title='Partners'
                            size='small'
                            type='post'
                            arrPosts={partnersPosts}
                        />
                    )}
                    <Contacts />
                    <Footer />
                </>
            )}
        </>
    );
};

export default Desctop;
