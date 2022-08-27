import React from 'react';
import './Paragraph.scss';
import { ReactComponent as Blot } from '../../../img/icons/blot.svg';
import Quote from '../Quote/Quote';

const Paragraph = ({ quote, bg }) => {
    const bgc = ['paragraph'];
    bg && bgc.push(`paragraph_${bg}`);
    return (
        <div className={bgc.join(' ')}>
            <div className='wrap'>
                <div className='paragraph__title'>
                    <Blot />
                    <h1>
                        Yuga Labs Will Grant the Commercial Rights to Cryptopunk
                        and Meebit NFTs to Their Owners
                    </h1>
                    <Blot />
                </div>
                <div className='paragraph__content'>
                    Yuga Labs, a company that created The Bored Ape Yacht Club,
                    bought the brands, copyright in the art and other
                    Intellectual Property (IP) rights for the CryptoPunk and
                    Meebit NFT collections. Then, they announced the plans to
                    grant these collections’ commercial rights to the owners of
                    respective NFTs. <br /> However, Yuga Labs failed to mention
                    how it will organise the rights’ granting process. They may
                    attempt to conclude an IP assignment agreement, creating a
                    legal basis for their current holders’ commercial use of
                    NFTs. Nevertheless, it might also require the current owners
                    to sign the same deal with subsequent owners when selling
                    the tokens. This way, the IP rights and NFTs
                    <a> could be transferred simultaneously</a>.
                    {quote ? <Quote /> : ''}
                    Another possible solution is to grant a CC0 license allowing
                    IP owners to waive their rights and place the property in
                    the public domain. Previously, projects like Nouns,
                    Cryptoadz, and mfers have already tried this approach. On
                    the one hand, it may release the owners from the obligation
                    to conclude a contract for every NFT transfer. hird parties
                    since the CC0 license allows everyone to freely build upon,
                    enhance, and reuse the works for any purposes without
                    restriction under copyright or database law.
                </div>
            </div>
        </div>
    );
};

export default Paragraph;
