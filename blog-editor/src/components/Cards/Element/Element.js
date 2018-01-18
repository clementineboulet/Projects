import React from 'react';
import classes from './Element.css';

const element = (props) => {
    let htmlElement = null;
    const cardElement = {...props.element};
    
     switch(cardElement.type) {
        case 'img':
            htmlElement = <figure>
                <img src={cardElement.src} alt={cardElement.name} height={cardElement.height}/>
                <figcaption>{cardElement.description}</figcaption>
            </figure>
            break;
        case 'text':
            htmlElement = <div name={cardElement.name} className={classes.displayLinebreak}>{cardElement.text}</div>
            break;
        default:
            break;
    }

    return (
        htmlElement
    );
}

export default element;