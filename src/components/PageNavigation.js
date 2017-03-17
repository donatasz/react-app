import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class PageNavigation extends Component {

    render() {
        return (
            <ul className="page-nav">
                <li className="page-nav__item">
                    <NavLink className="page-nav__link" activeClassName="page-nav__link--active" to="/behance">Behance</NavLink>
                </li>
                <li className="page-nav__item">
                    <NavLink className="page-nav__link" activeClassName="page-nav__link--active" to="/todo">Tasks</NavLink>
                </li>
                <li className="page-nav__item">
                    <NavLink className="page-nav__link" activeClassName="page-nav__link--active" to="/cart">Cart</NavLink>
                </li>
            </ul>
        );
    }
}

export default PageNavigation;
