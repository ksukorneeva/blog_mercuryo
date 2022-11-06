import React from 'react';
import './Input.scss';
import { ReactComponent as Blot } from '../../../img/icons/blot.svg';

const Input = ({
    type = 'text',
    label,
    handlerKey,
    onBlur,
    refInput,
    onChange,
    cl,
}) => {
    return (
        <div className='input'>
            <input
                className={type === 'email' || cl === 'black' ? 'black' : ''}
                type={type}
                placeholder={label}
                onKeyDown={handlerKey}
                onBlur={onBlur}
                ref={refInput}
                onChange={onChange}
            />
            <Blot />
        </div>
    );
};

export default Input;
