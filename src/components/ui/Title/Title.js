import React from 'react';
import { Link } from 'react-router-dom';
import './Title.scss';

const Title = ({ children }) => {
    return (
        <Link to={`/${children?.toLowerCase()}`} className='title'>
            {children}
        </Link>
    );
};

export default Title;
