import React from 'react';

import SingleCard from './SingleCard/SingleCard';
import Aux from '../../hoc/Aux';

const cards = (props) => {
    return props.cards.map( (card, index) => {
        return <Aux key={card.id}>
            <SingleCard
                click={props.click}
                cardID={card.id}/>
            <hr/>
        </Aux>
    } );
};

export default cards;