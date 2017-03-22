import React, { Component } from 'react';

class ListItem extends Component {

    render() {

        // ES6 destructuring
        const { id, url, covers, name } = this.props.item;

        return (
            <li className="project" key={id}>
                <a className="project__link" href={url}>
                    <img className="project__image" src={covers[404]} alt={name} title={name} />
                </a>
            </li>
        );
    }
}

export default ListItem;
