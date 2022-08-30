import React, { useEffect, useState } from 'react';
import './Paragraph.scss';
import { ReactComponent as Blot } from '../../../img/icons/blot.svg';
import Quote from '../Quote/Quote';

const Paragraph = ({ quote, bg, content }) => {
    const [arrElem, setArrElem] = useState();
    const bgc = ['paragraph'];
    bg && bgc.push(`paragraph_${bg}`);
    const GreetingComponent = (props) => {
        const innerHtml = { __html: props };
        return <p dangerouslySetInnerHTML={innerHtml}></p>;
    };
    let arr = [];
    useEffect(() => {
        setArrElem(
            content
                .replace(/<h3/g, 'prg<h3')
                .replace(/<h2/g, 'prg<h2')
                .split('prg')
        );
    }, []);
    const razdelenie = (item) => {
        const newItem = item
            .replace(/\/h3>/g, '/h3>prg')
            .replace(/\/h2>/g, '/h2>prg')
            .split('prg')
            .filter((index) => index !== '');

        return newItem;
    };

    return (
        arrElem && (
            <>
                {arrElem.map((item, index) =>
                    index % 2 ? (
                        <div key={index} className='paragraph'>
                            <div className='wrap'>
                                {razdelenie(item).map((elem, index) =>
                                    elem.includes('<h3') ? (
                                        <div
                                            key={index}
                                            className='paragraph__title'
                                        >
                                            <Blot />
                                            {GreetingComponent(elem.trim())}
                                            <Blot />
                                        </div>
                                    ) : elem.includes('<h2') ? (
                                        <div
                                            key={index}
                                            className='paragraph__title'
                                        >
                                            <Blot />
                                            {GreetingComponent(elem.trim())}
                                            <Blot />
                                        </div>
                                    ) : (
                                        <div
                                            key={index}
                                            className='paragraph__content'
                                        >
                                            {GreetingComponent(elem.trim())}
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    ) : (
                        <div className='paragraph_light'>
                            <div className='wrap'>
                                {razdelenie(item).map((elem, index) =>
                                    elem.includes('<h3>') ? (
                                        <div
                                            key={index}
                                            className='paragraph__title'
                                        >
                                            <Blot />

                                            {GreetingComponent(elem.trim())}
                                            <Blot />
                                        </div>
                                    ) : elem.includes('<h2>') ? (
                                        <div
                                            key={index}
                                            className='paragraph__title'
                                        >
                                            <Blot />

                                            {GreetingComponent(elem.trim())}
                                            <Blot />
                                        </div>
                                    ) : (
                                        <div
                                            key={index}
                                            className='paragraph__content'
                                        >
                                            {GreetingComponent(elem.trim())}
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    )
                )}
                {/* <div className='wrap'>
                    {GreetingComponent(content)}
                    {arrElem?.map((elem, index) =>
                        elem === '' ? (
                            ''
                        ) : elem.includes('<h3>') ? (
                            <div key={index} className='paragraph__title'>
                                <Blot />
                                {GreetingComponent(elem)}
                                <Blot />
                            </div>
                        ) : (
                            <div key={index} className='paragraph__content'>
                                {GreetingComponent(elem)}
                            </div>
                        )
                    )}
                </div> */}
            </>
        )
    );
};

export default Paragraph;
