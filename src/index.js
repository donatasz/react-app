import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import App from './containers/App';
import PageHeader from './components/PageHeader';
import PageFooter from './components/PageFooter';
import Todo from './containers/Todo';
import Cart from './containers/Cart';
import Store from './store';

const StoreInstance = Store();

ReactDOM.render(
    <Provider store={StoreInstance}>
        <Router>
            <div>
                <PageHeader/>
                <div className="page-container">
                    <section className="main-content">
                        <ul className="page-navigation">
                            <li className="page-navigation__link"><Link to="/">Behance</Link></li>
                            <li className="page-navigation__link"><Link to="/todo">Todo</Link></li>
                            <li className="page-navigation__link"><Link to="/cart">Cart</Link></li>
                        </ul>
                        <Route exact path="/" component={App} />
                        <Route path="/todo" component={Todo} />
                        <Route path="/cart" component={Cart} />
                        <PageFooter/>
                    </section>
                </div>
            </div>
        </Router>
    </Provider>,
  document.getElementById('root')
);
