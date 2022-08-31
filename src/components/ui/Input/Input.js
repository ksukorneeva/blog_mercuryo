import React from 'react';
import './Input.scss';
import { ReactComponent as Blot } from '../../../img/icons/blot.svg';

const Input = ({ label, handlerKey, onBlur, refInput }) => {
    return (
        <div className='input'>
            <input
                type='text'
                placeholder={label}
                onKeyDown={handlerKey}
                onBlur={onBlur}
                ref={refInput}
            />
            <Blot />
        </div>
    );
};

export default Input;
