import React, {Component} from 'react';
import logo from '../assets/images/logo.svg';

class PageHeader extends Component {

    render() {
        return (
            <header className="page-header">
                <img src={logo} className="page-header__logo" alt="logo"/>
                <h1 className="page-header__project-name">React App</h1>
                <h2 className="page-header__project-tagline">This project was built with React, Redux and ES6.</h2>
                <a className="btn" href="https://github.com/donatasz/react-app" target="_blank" alt="View on GitHub" title="View on GitHub">View on GitHub</a>
            </header>
        );
    }
}

export default PageHeader;
