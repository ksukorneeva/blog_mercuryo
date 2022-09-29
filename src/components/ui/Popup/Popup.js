import React from 'react';
import './Popup.scss';
import { listHeader, listFooter } from '../../../data';

const Popup = () => {
    console.log(listFooter[0].items);
    return (
        <div className='popup-block'>
            <div className='popup__lists'>
                <ul className='popup__lists_left'>
                    {listHeader.map((item, index) => (
                        <li key={index}>
                            <a href={item.href}>{item.title}</a>
                        </li>
                    ))}
                </ul>
                <ul className='popup__lists_right'>
                    {listFooter[0].items.map((item, index) => (
                        <li key={index}>
                            <a href='/'>{item}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='popup-footer'>
                <ul className='popup__social'>
                    <li>
                        <a href='/'>LinkedIn</a>
                    </li>
                    <li>
                        <a href='/'>Twitter</a>
                    </li>
                    <li>
                        <a href='/'>Facebook</a>
                    </li>
                </ul>
                <ul className='popup__app'>
                    <li>
                        <a href='/'>App Store</a>
                    </li>
                    <li>
                        <a href='/'>Goodle Play</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Popup;
