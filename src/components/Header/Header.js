import React from 'react';
import './Header.scss';
import { ReactComponent as Logo } from '../../img/icons/logo.svg';
import { ReactComponent as Dot } from '../../img/icons/dot.svg';
import { useState } from 'react';
import Popup from '../ui/Popup/Popup';
import BG from '../../img/bg.png';
import BACK from '../../img/bg.svg';
// import LINE from '../../img/bgline.svg';

const Header = () => {
    const [popup, setPopup] = useState(false);
    const handelClick = () => {
        setPopup(!popup);
        console.log(popup);
    };
    return (
        <>
            <header className={popup ? 'header header__bg' : 'header'}>
                <img src={BG} alt='bg' className='header__img_left' />
                <img src={BACK} alt='bg' className='header__img_center' />
                {/* <img src={LINE} alt='bg' className='header__img_line' /> */}
                <div className='container'>
                    <div className='header-top'>
                        <div className='header-top__logo'>
                            <Logo />
                        </div>
                        <div className='header-top__menu'>
                            <div className='header-top__button'>Sign In</div>
                            <button
                                className='header-top__button-menu'
                                onClick={handelClick}
                            >
                                <Dot />
                                <Dot />
                                <Dot />
                            </button>
                        </div>
                    </div>
                    {popup ? (
                        <Popup />
                    ) : (
                        <div className='header-content'>
                            <div className='header-content__block'>
                                <div className='header-content__title'>
                                    Business payments <br /> made easy
                                </div>
                                <div className='header-content__subtitle'>
                                    Cryptopowered by Mercuryo
                                </div>
                                <button className='header-content__button'>
                                    Contact Sales
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </header>
        </>
    );
};

export default Header;
