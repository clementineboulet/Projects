import React, { Component } from 'react';
import { Redirect, NavLink, withRouter, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Cards from '../../components/Cards/Cards';
import Aux from '../../hoc/Aux';
import EditCard from '../EditCard/EditCard';
import PropsRoute from '../../components/PropsRoute/PropsRoute';

import classes from './Blog.css';

class Blog extends Component {
    state = {
        hasCards: Boolean(this.props.cards.length),
        hasEdit: this.props.location.pathname === '/edit',
        toEditCardIndex: 1,
        toRedirect: false
    }

    hasCardsFunction = () => {
        return Boolean(this.props.cards.length);
    }

    editCard = (e, props) => {
        if(props) {
            this.setState({'toEditCardIndex': props});
            this.setState({'hasEdit': true});
            this.setState({'toRedirect': true});
        } else {
            this.setState({'hasEdit': false});
            this.setState({'toRedirect': false});
        }
    }

    render() {
        let cards = null;
        let editCard = null;
        let editProps = {
            cardIndex: this.state.toEditCardIndex,
            edit: this.editCard
        }

        if ( this.state.hasCards ) {
            cards = <Cards
              cards={this.props.cards}
              click={this.editCard} />;
        }

        if(this.state.hasEdit) {
            editCard = <Redirect to="/edit"/>;
        }

        return (
            <Aux>
                <div className={classes.Blog + ' ' + (this.state.hasEdit ? classes.HasEdit : null)}>
                    <header>
                        <nav>
                            <ul>
                                <li><NavLink to="/" exact>Home</NavLink></li>
                                <li><NavLink to="/new-post" exact>New Post</NavLink></li>
                            </ul>
                        </nav>
                    </header>
                    <h1>{this.props.title}</h1>
                    <h4>{this.props.subtitle} by {this.props.author}</h4>
                    <hr/>
                    {cards}
                </div>
                <Switch>
                    <PropsRoute path="/edit" exact component={EditCard} props={editProps}/>
                    {editCard}
                </Switch>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        title: state.title,
        subtitle: state.subtitle,
        cards: state.cards,
        author: state.author
    };
};

export default withRouter(connect(mapStateToProps) (Blog));