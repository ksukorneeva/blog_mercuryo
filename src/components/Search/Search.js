import React, { useState, useEffect, useContext, useCallback } from 'react';
import Title from '../ui/Title/Title';
import Post from '../ui/Post/Post';
import { AppContext } from '../../context/AppContext';
import axios from 'axios';

const Search = () => {
    const app = useContext(AppContext);
    const [arrSearch, setArrSearch] = useState();

    const gettingPosts = useCallback(async () => {
        const data = await axios.get(
            'https://zazhigay.com/wp-json/wp/v2/posts?page=1&per_page=100'
        );
        const data2 = await axios.get(
            'https://zazhigay.com/wp-json/wp/v2/posts?page=2&per_page=100'
        );
        const posts = [].concat(data.data, data2.data);

        const arsearch = posts.filter((post) => {
            if (
                post.title.rendered
                    .toLowerCase()
                    .includes(app.search.toLowerCase())
            ) {
                return post;
            }
            return false;
        });
        setArrSearch(arsearch);
        console.log(arsearch);
    }, [app]);
    useEffect(() => {
        gettingPosts();
    }, [app, gettingPosts]);
    return (
        arrSearch && (
            <section className='section'>
                <div className='container'>
                    <div className='section__title'>
                        <Title>Search</Title>
                    </div>
                    <div className='section__posts section__posts_small'>
                        {arrSearch.map((item, index) => {
                            return (
                                <Post
                                    key={index}
                                    postInfo={item}
                                    classname='post_small'
                                    type='post'
                                />
                            );
                        })}
                    </div>
                </div>
            </section>
        )
    );
};

export default Search;
