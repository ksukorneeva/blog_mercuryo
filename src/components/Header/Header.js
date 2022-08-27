import React from 'react';
import NavBar from '../ui/NavBar/NavBar';
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
                                <li>
                                    <a href='https://mercuryo.io/products/'>
                                        Products
                                    </a>
                                </li>
                                <li>
                                    <a href='https://blog.mercuryo.io/'>Blog</a>
                                </li>
                                <li>
                                    <a href='https://help.mercuryo.io/en/collections/1549864-customer-support-help-center'>
                                        Help
                                    </a>
                                </li>
                            </ul>
                            <div className='header-top__button'>Sign In</div>
                        </div>
                    </div>

                    <div className='header-content'>
                        {/* <NavBar /> */}
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
