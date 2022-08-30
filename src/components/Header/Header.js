import React from 'react';
import { listHeader } from '../../data';
import './Header.scss';

const Header = () => {
    return (
        <>
            <header className='header'>
                <div className='container'>
                    <div className='header-top'>
                        <div className='header-top__logo'>blog.mercuryo</div>
                        <div className='header-top__menu'>
                            <ul>
                                {listHeader.map((item, index) => (
                                    <li key={index}>
                                        <a href={item.href}>{item.title}</a>
                                    </li>
                                ))}
                            </ul>
                            <div className='header-top__button'>Sign In</div>
                        </div>
                    </div>

                    <div className='header-content'>
                        <div className='header-content__title'>
                            Business payments <br /> made easy
                        </div>
                        <div className='header-content__subtitle'>
                            Cryptopowered by Mercuryo
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
