import React, { Component } from 'react';

class ListItem extends Component {

    render() {

        const props = this.props;

        return (
            <li className="project" key={props.item.id}>
                <a className="project__link" href={props.item.url}>
                    <img className="project__image" src={props.item.covers[404]} alt={props.item.name} title={props.item.name} />
                </a>
            </li>
        );
    }
}

export default ListItem;
