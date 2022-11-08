import './App.scss';
import React, { useState, useEffect, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Allposts from './pages/Allposts/Allposts';
import Article from './pages/Article/Article';
import { AppContext } from './context/AppContext';
import { useApp } from './hooks/app.hook';
import axios from 'axios';
import Search from './components/Search/Search';

function App() {
    const { search, setSearch } = useApp();
    const [articlePosts, setArticlePosts] = useState();
    const [insightsPosts, setInsightsPosts] = useState();
    const [successPosts, setSuccessPosts] = useState();
    const [annonsPosts, setAnnonsPosts] = useState();
    const [roundPosts, setRoundPosts] = useState();
    const [mediaPosts, setMediaPosts] = useState();
    const [partnersPosts, setPartnersPosts] = useState();
    const [users, setUsers] = useState();

    const gettingPosts = useCallback(async () => {
        const articles = await axios.get(
            'https://zazhigay.com/wp-json/wp/v2/posts?categories=5&per_page=50'
        );
        const annonsment = await axios.get(
            'https://zazhigay.com/wp-json/wp/v2/posts?categories=8&per_page=50'
        );
        const insights = await axios.get(
            'https://zazhigay.com/wp-json/wp/v2/posts?categories=6&per_page=50'
        );
        const media = await axios.get(
            'https://zazhigay.com/wp-json/wp/v2/posts?categories=10&per_page=50'
        );
        const roundUp = await axios.get(
            'https://zazhigay.com/wp-json/wp/v2/posts?categories=9&per_page=50'
        );
        const success = await axios.get(
            'https://zazhigay.com/wp-json/wp/v2/posts?categories=7&per_page=50'
        );
        const partners = await axios.get(
            'https://zazhigay.com/wp-json/wp/v2/posts?categories=148&per_page=50'
        );
        const userdata = await axios.get(
            'https://zazhigay.com/wp-json/wp/v2/users'
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
    }, []);

    useEffect(() => {
        gettingPosts();
    }, [gettingPosts]);

    return (
        <AppContext.Provider value={{ search, setSearch }}>
            <div className='App'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route
                        path='/articles'
                        element={
                            <Allposts
                                title='Articles'
                                view='page'
                                arrPosts={articlePosts}
                            />
                        }
                    />
                    <Route path='/search' element={<Search />} />
                    <Route
                        path='/authors/:id'
                        element={
                            <Allposts
                                type='authors'
                                view='page'
                                arrPosts={users}
                            />
                        }
                    />
                    <Route
                        path='/insights'
                        element={
                            <Allposts
                                title='Insights'
                                view='page'
                                arrPosts={insightsPosts}
                            />
                        }
                    />
                    <Route
                        path='/success%20stories'
                        element={
                            <Allposts
                                title='Success stories'
                                view='page'
                                arrPosts={successPosts}
                            />
                        }
                    />
                    <Route
                        path='/media'
                        element={
                            <Allposts
                                title='Media'
                                view='page'
                                arrPosts={mediaPosts}
                            />
                        }
                    />
                    <Route
                        path='/announcements'
                        element={
                            <Allposts
                                title='Announcements'
                                view='page'
                                arrPosts={annonsPosts}
                            />
                        }
                    />
                    <Route
                        path='/round-up'
                        element={
                            <Allposts
                                title='Round-up'
                                view='page'
                                arrPosts={roundPosts}
                            />
                        }
                    />
                    <Route
                        path='/partners'
                        element={
                            <Allposts
                                title='Partners'
                                view='page'
                                arrPosts={partnersPosts}
                            />
                        }
                    />
                    <Route path='/articles/:id' element={<Article />} />
                    <Route path='/authors/:id' element={<Article />} />
                    <Route path='/insights/:id' element={<Article />} />
                    <Route
                        path='/success%20stories/:id'
                        element={<Article />}
                    />
                    <Route path='/announcements/:id' element={<Article />} />
                    <Route path='/media/:id' element={<Article />} />
                    <Route path='/round-up/:id' element={<Article />} />
                </Routes>
            </div>
        </AppContext.Provider>
    );
}

export default App;
