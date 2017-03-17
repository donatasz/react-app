import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Todo extends Component {
    render() {
        return (
            <ReactCSSTransitionGroup
                transitionName="fade"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnter={false}
                transitionLeave={false}>
                <div>
                    <h1>Tasks</h1>
                </div>
            </ReactCSSTransitionGroup>
        );
    }
}

export default Todo;
