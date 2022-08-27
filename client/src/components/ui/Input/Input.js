import React from 'react';
import './Input.scss';
import { ReactComponent as Blot } from '../../../img/icons/blot.svg';

const Input = ({ label, handlerKey }) => {
    return (
        <div className='input'>
            <input type='text' placeholder={label} onKeyDown={handlerKey} />
            <Blot />
        </div>
    );
};

export default Input;
