import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';
import { ReactComponent as Search } from '../../../img/icons/search.svg';
import { ReactComponent as Menu } from '../../../img/icons/menu.svg';
import Input from '../Input/Input';
import { listNav } from '../../../data';

const NavBar = () => {
    const inputElement = useRef(null);
    const [search, setSearch] = useState(false);
    const [open, setOpen] = useState(false);

    const handelSearch = () => {
        setSearch(!search);
        inputElement.current.focus();
    };

    const handelKey = (e) => {
        e.key === 'Enter' && setSearch(!search);
        e.key === 'Escape' && setSearch(!search);
    };

    const openMenuHandler = () => {
        setOpen(!open);
    };
    const handleBlur = () => {
        setSearch(!search);
    };

    console.log(inputElement.current);

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
                            {listNav.map((item, index) => (
                                <li key={index}>
                                    <Link to={item.href}>{item.title}</Link>
                                </li>
                            ))}
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
                            <Input
                                label='search'
                                handlerKey={handelKey}
                                onBlur={handleBlur}
                                refInput={inputElement}
                            />
                        </div>
                    </div>

                    <Menu className='dots' onClick={openMenuHandler} />
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
