import React from 'react';
import { useParams } from 'react-router';
import Form from '../ui/Form/Form';
import './Modal.scss';

const Modal = () => {
    const params = useParams();
    return (
        <div className='modal'>
            <Form path={params.id} />
        </div>
    );
};

export default Modal;
