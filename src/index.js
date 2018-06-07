import React from 'react'
import ReactDOM from 'react-dom'
import style from './scss/app.scss'
import {Switch, Router, Route} from "react-router-dom"
import Dashboard from './components/dashboard'
import Login from './components/login'
import LoadingPage from './components/loading_page'
import SpecialityPage from './components/admin/speciality_page'
import ModulePage from './components/admin/module_page'
import ConceptPage from './components/admin/concept_page'
import Admin from './components/admin'
import {createStore, applyMiddleware, compose} from 'redux'
import {Provider, connect} from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import Reducer from './reducers/combine'
import history from './history'
import PrivateRoute from './privateroutes'
import AdminRoute from './adminroutes'
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import { getUser } from './actions/login'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(Reducer, composeEnhancers(applyMiddleware(thunkMiddleware)))


class App extends React.Component {

    constructor() {
        super();
        this.state = {
            can_render: false
        }
    }

    componentDidMount(){
        // on load l'user connecté si il y en a un
        if (localStorage.getItem("id_token")) {
            store.dispatch(getUser(localStorage.getItem("id_token"))).then(
                () => {
                    this.setState({
                        can_render: true
                    })
                }
            )
        }
        else {
            this.setState({
                can_render: true
            })
        }
    }

    render() {
        // si on render direct les route, ça redirige l'user sur dashboard ou login quand on essaye d'acceder a une page admin
        // puisque la data de l'user est pas encore load
        const app = this.state.can_render ?
        (
            <Route render={({location}) => (
                <TransitionGroup>
                    <CSSTransition key={location.pathname.split('/')[1]} classNames="fade" timeout={1000}>
                        <Switch location={location}>
                                <Route exact path="/" component={Login} />
                                <PrivateRoute path="/dashboard" component={Dashboard}/>
                                <AdminRoute exact path="/admin" component={Admin}/>
                                <AdminRoute path="/admin/speciality/:id" component={SpecialityPage}/>
                                <AdminRoute path="/admin/module/:id" component={ModulePage}/>
                                <AdminRoute path="/admin/concept/:id" component={ConceptPage}/>
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            ) }/>
        ) : (
            <LoadingPage />
    )

        return (
            <Provider store={store}>
                <Router history={history}>
                <div className={style.component}>
                    {app}
                </div>
                </Router>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));
