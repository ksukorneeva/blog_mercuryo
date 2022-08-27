import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';
import { ReactComponent as Search } from '../../../img/icons/search.svg';
import { ReactComponent as Menu } from '../../../img/icons/menu.svg';
import Input from '../Input/Input';

const NavBar = () => {
    const [search, setSearch] = useState(false);
    const [open, setOpen] = useState(false);

    const handelSearch = () => {
        setSearch(!search);
    };

    const handelKey = (e) => {
        e.key === 'Enter' && setSearch(!search);
    };

    const openMenuHandler = () => {
        setOpen(!open);
    };

    return (
        <nav className={!open ? 'navbar' : 'navbar navbar_black'}>
            <div className='container'>
                <div
                    className={
                        !open
                            ? 'navbar__wrap'
                            : 'navbar__wrap navbar__wrap_black'
                    }
                >
                    <div className='navbar__logo'>
                        <Link to='/' className={open ? 'black' : ' '}>
                            blog.mercuryo
                        </Link>
                    </div>

                    <div
                        className={
                            !open
                                ? 'navbar__menu'
                                : 'navbar__menu navbar__menu_show'
                        }
                    >
                        <ul
                            className={
                                !search
                                    ? 'navbar__list'
                                    : 'navbar__list navbar__list_hide'
                            }
                        >
                            <li>
                                <Link to='/articles'>Articles</Link>
                            </li>
                            <li>
                                <Link to='/insights'>Insights</Link>
                            </li>
                            <li>
                                <Link to='/success%20stories'>
                                    Success stories
                                </Link>
                            </li>
                            <li>
                                <Link to='/announcements'>Announcements</Link>
                            </li>
                            <li>
                                <Link to='/round-up'>Round-up</Link>
                            </li>
                            <li>
                                {!search && <Search onClick={handelSearch} />}
                            </li>
                        </ul>

                        <div
                            className={
                                !search
                                    ? 'navbar__search'
                                    : 'navbar__search navbar__search_show'
                            }
                        >
                            <Input label='search' handlerKey={handelKey} />
                        </div>
                    </div>

                    <Menu className='dots' onClick={openMenuHandler} />
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
