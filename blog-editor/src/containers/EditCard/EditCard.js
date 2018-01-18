import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import classes from './EditCard.css';

class EditCard extends PureComponent {
    preventDefault = (event) => {
        event.stopPropagation();
        event.preventDefault();
    }

    render() {
        let card = {...this.props.cards[this.props.props.cardIndex -1]};
        let imgElement = card.elements.find((obj) => {return obj.type === 'img'});
        let textElement = card.elements.find((obj) => {return obj.type === 'text'});

        return(
            <NavLink to="/" exact className={classes.Edit} key={card.id} onClick={this.props.props.edit}>
                <div onClick={this.preventDefault}>
                    <ul className={classes.Header}>
                        <li>
                            <p>Title:</p></li>
                            <li><input type="text" name="title" value={card.title} onChange={(event) => this.props.onCardChange('TITLE', event.target.value, card.id)}/></li>
                            <li><h4>{card.title}</h4>
                        </li>
                        <li>
                            <p>Subtitle:</p></li>
                            <li><input type="text" name="subtitle" value={card.subtitle}  onChange={(event) => this.props.onCardChange('SUBTITLE', event.target.value, card.id)}/></li>
                            <li><h5>{card.subtitle}</h5>
                        </li>
                    </ul>
                    <hr/>
                    <ul className={classes.Body}>
                        <li>
                            <p>Image src:</p></li>
                            <li><input type="text" name="src" value={imgElement.src} onChange={(event) => this.props.onCardChange('IMG_SRC', event.target.value, card.id)}/></li>
                            <li className={classes.FigResults}><figure>
                                <img src={imgElement.src} alt={imgElement.name} height={imgElement.height}/>
                                <figcaption>{imgElement.description}</figcaption>
                            </figure>
                        </li>
                        <li>
                            <p>Image name:</p></li>
                            <li><input type="text" name="name" value={imgElement.name} onChange={(event) => this.props.onCardChange('IMG_NAME', event.target.value, card.id, card.id)}/>
                        </li>
                        <li>
                            <p>Image description:</p></li>
                            <li><input type="text" name="description" value={imgElement.description} onChange={(event) => this.props.onCardChange('IMG_DESC', event.target.value, card.id)}/>
                        </li>
                        <li>
                            <p>Text:</p></li>
                            <li><textarea value={textElement.text} onChange={(event) => this.props.onCardChange('TEXT_TEXT', event.target.value, card.id)}/></li>
                            <li className={classes.TextResults}><div name={textElement.name} className={classes.displayLineBreak}>{textElement.text}</div>
                        </li>
                        <li>
                            <p>Text name:</p></li>
                            <li><input type="text" name="name" value={textElement.name} onChange={(event) => this.props.onCardChange('TEXT_NAME', event.target.value, card.id)}/>
                        </li>
                     </ul>
                </div>
            </NavLink>
        );
    }
}

const mapStateToProps = state => {
    return {
        cards: state.cards,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onCardChange: (prop, value, cardId) => dispatch({type: prop, value: value, cardID: cardId})
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (EditCard);