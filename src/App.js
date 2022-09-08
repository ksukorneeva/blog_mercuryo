import './App.scss';
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Allposts from './pages/Allposts/Allposts';
import Article from './pages/Article/Article';
import { AppContext } from './context/AppContext';
import { useApp } from './hooks/app.hook';
import axios from 'axios';

function App() {
    const { search, setSearch } = useApp();
    const [articlePosts, setArticlePosts] = useState();
    const [insightsPosts, setInsightsPosts] = useState();
    const [successPosts, setSuccessPosts] = useState();
    const [annonsPosts, setAnnonsPosts] = useState();
    const [roundPosts, setRoundPosts] = useState();
    const [mediaPosts, setMediaPosts] = useState();

    const categoryFilter = (arr, category) => {
        const posts = arr.filter((item) => {
            if (item.x_categories.includes(category)) {
                return item;
            }
        });
        return posts;
    };
    const gettingPosts = async () => {
        const data = await axios.get('/posts');
        const posts = data.data;
        setArticlePosts(categoryFilter(posts, 'Articles'));
        setInsightsPosts(categoryFilter(posts, 'Insights'));
        setSuccessPosts(categoryFilter(posts, 'Success stories'));
        setAnnonsPosts(categoryFilter(posts, 'Announcements'));
        setRoundPosts(categoryFilter(posts, 'Round-up'));
        setMediaPosts(categoryFilter(posts, 'Media'));
    };
    useEffect(() => {
        gettingPosts();
    }, []);
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
                    <Route
                        path='/search'
                        element={
                            <Allposts
                                title='Search'
                                view='page'
                                type='search'
                            />
                        }
                    />
                    <Route
                        path='/authors'
                        element={<Allposts type='authors' view='page' />}
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
                            <Allposts type='slider' arrPosts={roundPosts} />
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
                    <Route path='/round-up/:id' element={<Allposts />} />
                </Routes>
            </div>
        </AppContext.Provider>
    );
}

export default App;
