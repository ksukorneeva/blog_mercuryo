import React from 'react';
import { Link } from 'react-router-dom';
import './Title.scss';

const Title = ({ children, bg }) => {
    return (
        <Link
            to={`/${children?.toLowerCase()}`}
            className={bg === 'dark' ? 'title_white' : 'title'}
        >
            {children}
        </Link>
    );
};

export default Title;
