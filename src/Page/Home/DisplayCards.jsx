import React from 'react';
import housings from '../../assets/data/logements'
import Card from './Card'

const DisplayCards = () => {
    return(
        <section className='housings_container'>
            <ul className='housings_list'>
                {housings.map(({ id, title, cover }) => (
                    <Card
                        key={id}
                        id={id}
                        title={title}
                        cover={cover}
                    />
                ))}
            </ul>
        </section>
    )
}

export default DisplayCards;