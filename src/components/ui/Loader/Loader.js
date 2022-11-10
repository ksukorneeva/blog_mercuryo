import React from 'react';
import './Loader.scss';
import { ReactComponent as Logo } from '../../../img/icons/logo_white.svg';
const Loader = () => {
    return (
        <div className='loader'>
            <div className='lds-facebook'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <Logo style={{ fill: '#000' }} />
        </div>
    );
};

export default Loader;
