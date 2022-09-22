import React from 'react';
import Carousel from '../ui/Carousel/Carousel';
import Title from '../ui/Title/Title';

const Partners = ({ arrPosts }) => {
    const handelClick = () => {
        console.log(arrPosts);
    };
    return (
        <div className='partners'>
            <Title>Partners</Title>
            <Carousel arrAuthors={arrPosts} onClick={handleClick} />
        </div>
    );
};

export default Partners;
