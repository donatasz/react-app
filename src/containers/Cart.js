import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ShoppingCart from '../components/ShoppingCart';

class Cart extends Component {
    render() {
        return (
            <ReactCSSTransitionGroup
                transitionName="fade"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnter={false}
                transitionLeave={false}>
                <ShoppingCart />
            </ReactCSSTransitionGroup>
        );
    }
}

export default Cart;
