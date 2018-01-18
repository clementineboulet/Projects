import React, {PureComponent} from 'react';
import { connect } from 'react-redux';

import classes from './SingleCard.css';
import Element  from '../Element/Element'

class SingleCard extends PureComponent {

    render () {
        let card = this.props.cards[this.props.cardID -1];
        let elements = card.elements.map( (element, index) => {
            return (
                <Element 
                    element={element}
                    key={index}/>
            );
        });

        return (
            <div className={classes.Card} onDoubleClick={(e) => this.props.click(e, this.props.cardID)}>
                <h3>{card.title}</h3>
                <h5>{card.subtitle}</h5>
                {elements}
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        cards: state.cards,
    };
};

export default connect(mapStateToProps) (SingleCard);