import React from 'react';
import './Header.scss';
import { ReactComponent as Logo } from '../../img/icons/logo_header.svg';
// import { ReactComponent as Dot } from '../../img/icons/dot.svg';
import { useState } from 'react';
// import Popup from '../ui/Popup/Popup';
import BG from '../../img/starbg.svg';
import BACK from '../../img/bg.svg';
// import LINE from '../../img/bgline.svg';

const Header = () => {
    const [popup, setPopup] = useState(false);
    // const handelClick = () => {
    //     setPopup(!popup);
    //     console.log(popup);
    // };
    return (
        <>
            <header className={popup ? 'header header__bg' : 'header'}>
                <img
                    src={BG}
                    alt='bg'
                    className={!popup ? 'header__img_left' : 'header__img_none'}
                />
                <img
                    src={BACK}
                    alt='bg'
                    className={
                        !popup ? 'header__img_center' : 'header__img_none'
                    }
                />
                {/* <img src={LINE} alt='bg' className='header__img_line' /> */}
                <div className='container'>
                    <div className='header-top'>
                        <div
                            className={
                                !popup
                                    ? 'header-top__logo'
                                    : 'header-top__logo header-top__logo_black'
                            }
                        >
                            <Logo />
                        </div>
                        {/* <div className='header-top__menu'>
                            <div className='header-top__button'>Sign In</div>
                            <button
                                className='header-top__button-menu'
                                onClick={handelClick}
                            >
                                <Dot />
                                <Dot />
                                <Dot />
                            </button>
                        </div> */}
                    </div>
                    {/* {popup ? (
                        <Popup />
                    ) : ( */}
                    <div className='header-content'>
                        <div className='header-content__block'>
                            <div className='header-content__title'>
                                Explore with <br /> Mercuryo
                            </div>
                            <div className='header-content__subtitle'>
                                Discover the latest insights in web3, crypto and
                                payments and join Mercuryo on a ride to
                                cryptopower the future
                            </div>
                            {/* <button className='header-content__button'>
                                    Contact Sales
                                </button> */}
                        </div>
                    </div>
                    {/* )} */}
                </div>
            </header>
        </>
    );
};

export default Header;
