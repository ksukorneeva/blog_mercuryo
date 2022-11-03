import React from 'react';
import './Popup.scss';
import { listHeader, listFooter } from '../../../data';

const Popup = () => {
    console.log(listFooter);
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
                    {console.log(listFooter)}
                    {listFooter[0].items.map((item, index) => (
                        <li key={index}>
                            <a href={item.href}>{item.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='popup-footer'>
                <ul className='popup__social'>
                    <li>
                        <a href='https://www.linkedin.com/company/mercuryo-io'>
                            LinkedIn
                        </a>
                    </li>
                    <li>
                        <a href='https://twitter.com/Mercuryo_io'>Twitter</a>
                    </li>
                    <li>
                        <a href='https://www.facebook.com/mercuryo.io'>
                            Facebook
                        </a>
                    </li>
                </ul>
                <ul className='popup__app'>
                    <li>
                        <a href='https://apps.apple.com/US/app/id1446533733?mt=8'>
                            App Store
                        </a>
                    </li>
                    <li>
                        <a href='https://play.google.com/store/apps/details?id=com.mercuryo.app&referrer=af_tranid%3DlIX_5TuPEmnr46D4cCsajg%26shortlink%3D11453def%26pid%3Dmercuryo.io%20%28main%20page%29'>
                            Goodle Play
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Popup;
