import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import App from './containers/App';
import PageHeader from './components/PageHeader';
import PageNavigation from './components/PageNavigation';
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
                        <PageNavigation/>
                        <Route path="/behance" component={App} />
                        <Route path="/todo" component={Todo} />
                        <Route path="/cart" component={Cart} />
                        <Redirect from="/" to="/behance"/>
                        <PageFooter/>
                    </section>
                </div>
            </div>
        </Router>
    </Provider>,
  document.getElementById('root')
);
