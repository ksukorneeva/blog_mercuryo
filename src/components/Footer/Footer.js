import React from 'react';
import './Footer.scss';
import { ReactComponent as IconVisa } from '../../img/icons/iconvisa.svg';
import { ReactComponent as Visa } from '../../img/icons/visa.svg';

import { listFooter } from '../../data';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container'>
                <div className='footer__lists'>
                    {listFooter.map((item, index) => (
                        <div key={index} className='footer__list list'>
                            <div className='list__title'>{item.title}</div>
                            <div className='list__items'>
                                <ul>
                                    {item.items.map((li, index) => (
                                        <li key={10000 + index}>
                                            <a href={li.href}>{li.title}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='footer__bottom'>
                    <div className='footer__icon'>
                        <IconVisa />
                        <Visa />
                    </div>
                    <div className='footer__text'>
                        Cryptocurrency buy and sell services are provided, where
                        applicable, by MoneyAmber UAB (registered in Lithuania,
                        incorporation number 305963633), MoneyMaple Tech LTD.
                        (registered in Canada under incorporation number
                        BC1306168, MSB registration number: M21565803),
                        MoneySwap OÜ (registered in Estonia under incorporation
                        number 14461101, License number: 14461101) Fiat pay-in
                        and pay-out services are provided by MoneyTea LTD
                        (operating under the laws of England and Wales,
                        registered in the FCA as PSD Agent (FCA Reference
                        number: 850523) of Cauri LTD, an authorized Payment
                        Institution with FCA firm reference number: 683817) IBAN
                        services are provided by Monetley, operating under the
                        laws of England and Wales, registered in the FCA as
                        Electronic Money Institution (EMI) (FCA Reference
                        number: 900921). Be aware of scams: Mercuryo provides
                        its services only via mercuryo.io and the official
                        mobile application. Mercuryo is not affiliated with any
                        other similar website domains and is not responsible for
                        any acts taken by their owners.
                    </div>
                    <div className='footer__menu'>
                        <ul>
                            <li>
                                <a href='https://mercuryo.io/legal/cookies/'>
                                    Cookies policy
                                </a>
                            </li>
                            <li>
                                <a href='https://mercuryo.io/legal/terms/'>
                                    Terms of Service
                                </a>
                            </li>
                            <li>
                                <a href='https://mercuryo.io/legal/privacy/'>
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href='https://mercuryo.io/legal/referral/'>
                                    Referral Program TOS
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
