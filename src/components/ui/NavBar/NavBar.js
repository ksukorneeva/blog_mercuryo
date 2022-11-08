import React, { useState, useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';
import { ReactComponent as Search } from '../../../img/icons/search.svg';
import { ReactComponent as Menu } from '../../../img/icons/menu.svg';
import Input from '../Input/Input';
import { listNav } from '../../../data';
import { AppContext } from '../../../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Logo } from '../../../img/icons/logo_white.svg';
import { ReactComponent as Cross } from '../../../img/cross.svg';

const NavBar = ({ classNB }) => {
    const app = useContext(AppContext);

    const navigate = useNavigate();
    const inputElement = useRef(null);
    const [search, setSearch] = useState(false);
    const [open, setOpen] = useState(false);
    // const [popup, setPopup] = useState(false);

    const handelSearch = () => {
        setSearch(!search);
        inputElement.current.focus();
    };

    const handelKey = (e) => {
        e.key === 'Enter' && setSearch(!search);
        e.key === 'Escape' && setSearch(!search);
        if (e.key === 'Enter') {
            navigate('/search');
            // setPopup(true);
        }
    };

    const openMenuHandler = () => {
        setOpen(!open);
    };
    const handleBlur = () => {
        setSearch(!search);
    };

    return (
        <>
            <nav
                className={
                    classNB === 'white'
                        ? 'navbar navbar_white'
                        : !open
                        ? 'navbar'
                        : 'navbar navbar_black'
                }
            >
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
                                <Logo />
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
                                        <Link to={item.href} target='_blank'>
                                            {item.title}
                                        </Link>
                                    </li>
                                ))}
                                <li>
                                    {!search && (
                                        <Search onClick={handelSearch} />
                                    )}
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
                                    cl={classNB === 'white' ? 'black' : ''}
                                    label='search'
                                    handlerKey={handelKey}
                                    onBlur={handleBlur}
                                    refInput={inputElement}
                                    onChange={(e) =>
                                        app.setSearch(e.target.value)
                                    }
                                />
                            </div>

                            <div
                                className={search ? 'navbar__cross' : 'none'}
                                onClick={handleBlur}
                            >
                                <Cross
                                    className='none'
                                    style={
                                        classNB === 'white'
                                            ? { fill: '#000' }
                                            : { fill: '#fff' }
                                    }
                                />
                            </div>
                        </div>

                        <Menu className='dots' onClick={openMenuHandler} />
                    </div>
                </div>
            </nav>
            {/* {popup ? <Search /> : 'jh'} */}
        </>
    );
};

export default NavBar;
