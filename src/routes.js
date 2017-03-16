// import {Route} from 'react-router';

import App from 'containers/app';
import Home from 'components/Home';

export function getRoutes() {
    return (
        <div>
            <Route component={App}>
                <Route component={Home} path="/"/>
            </Route>
        </div>
    );
}
