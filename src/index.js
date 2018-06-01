import React from 'react'
import ReactDOM from 'react-dom'
import style from './scss/app.scss'
import {Switch, Router, Route} from "react-router-dom"
import Dashboard from './components/dashboard'
import Login from './components/login'
import Speciality from './components/admin/speciality'
import Module from './components/admin/module'
import Admin from './components/admin'
import {createStore, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import Reducer from './reducers/combine'
import history from './history'
import PrivateRoute from './privateroutes'
import {TransitionGroup, CSSTransition} from 'react-transition-group'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(Reducer, composeEnhancers(applyMiddleware(thunkMiddleware)))


class App extends React.Component {

    constructor() {
        super();

    }


    render() {
        // TODO les routes /admin les rendre accessible juste pour les admins <AdminRoute>
        return(
            <Provider store={store}>
                <Router history={history}>
                <div className={style.component}>
                <Route render={({location}) => (
                    <TransitionGroup>
                        <CSSTransition key={location.pathname.split('/')[1]} classNames="fade" timeout={1000}>
                            <Switch location={location}>
                                    <Route exact path="/" component={Login} />
                                    <PrivateRoute path="/dashboard" component={Dashboard}/>
                                    <Route exact path="/admin" component={Admin}/>
                                    <Route path="/admin/speciality/:id" component={Speciality}/>
                                    <Route path="/admin/module/:id" component={Module}/>
                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>
                ) }/>
                </div>
                </Router>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));
