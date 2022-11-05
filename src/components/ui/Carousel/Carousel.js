import React from 'react';
import './Carousel.scss';
import { useState, useRef, useEffect } from 'react';
import { ReactComponent as LeftArrow } from '../../../img/icons/leftArrow.svg';
import debounce from 'lodash.debounce';
import cn from 'classnames';

const Carousel = ({ arrAuthors, onClick, active }) => {
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    const listRef = useRef(null);

    const checkForScrollPosition = () => {
        const { current } = listRef;
        if (current) {
            const { scrollLeft, scrollWidth, clientWidth } = current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft !== scrollWidth - clientWidth);
        }
    };

    const debounceCheckForScrollPosition = debounce(
        checkForScrollPosition,
        200
    );

    const scrollContainerBy = (distance) =>
        listRef.current?.scrollBy({ left: distance, behavior: 'smooth' });

    useEffect(() => {
        const { current } = listRef;
        checkForScrollPosition();
        current?.addEventListener('scroll', debounceCheckForScrollPosition);

        return () => {
            current?.removeEventListener(
                'scroll',
                debounceCheckForScrollPosition
            );
            debounceCheckForScrollPosition.cancel();
        };
    }, []);

    return (
        arrAuthors && (
            <div className='box'>
                <div className='scrollableContainer'>
                    <button
                        type='button'
                        disabled={!canScrollLeft}
                        onClick={() => scrollContainerBy(-200)}
                        className={cn('authors__button', 'buttonLeft', {
                            'button--hidden': !canScrollLeft,
                        })}
                    >
                        <LeftArrow />
                    </button>
                    <ul className='carousel_list' ref={listRef}>
                        {arrAuthors.map((item, index) => (
                            <li
                                key={index}
                                onClick={() => onClick(item)}
                                className={
                                    item.id === active ? 'item active' : 'item'
                                }
                            >
                                {item.name}
                            </li>
                        ))}
                    </ul>

                    <button
                        type='button'
                        disabled={!canScrollRight}
                        onClick={() => scrollContainerBy(200)}
                        className={cn('authors__button', 'buttonRight', {
                            'button--hidden': !canScrollRight,
                        })}
                    >
                        <LeftArrow />
                    </button>
                </div>
            </div>
        )
    );
};
export default Carousel;
