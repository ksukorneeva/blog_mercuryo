import React from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import './Subscribe.scss';

const Subscribe = () => {
    return (
        <div className='subscribe'>
            <div className='container'>
                <div className='subscribe__block'>
                    <div className='subscribe__content'>
                        <div className='subscribe__subtitle'>
                            Subscribe to our newsletter to keep up with the
                            latest crypto trends
                        </div>
                        <form>
                            <Input label='Email' />
                            <div className='subscribe__button'>
                                <Button>Subscribe</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;
