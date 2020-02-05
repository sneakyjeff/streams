import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import history from '../history';
import reducers from '../reducers/index';
import Dashboard from './Dashboard';
import Landing from './Landing';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamShow from './streams/StreamShow';
import NavBarHeader from './layout/NavBarHeader';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

class App extends React.Component {
    render() {
        return(
            <Provider store={store}>
                <div className="ui container">
                    <Router history={history}>
                        <NavBarHeader />
                        <div>
                            <Switch>
                                <Route path="/" exact component={Landing}></Route>
                                <Route path="/dashboard" exact component={Dashboard} />
                                <Route path="/stream/create" exact component={StreamCreate} />
                                <Route path="/stream/delete/:id" exact component={StreamDelete} />
                                <Route path="/stream/edit/:id" exact component={StreamEdit} />
                                <Route path="/stream/:id" exact component={StreamShow} />
                            </Switch>
                        </div>
                    </Router>
                </div>
            </Provider>
        )
    }
}
export default App;