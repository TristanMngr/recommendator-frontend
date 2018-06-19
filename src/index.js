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
import JobPage from './components/admin/job_page'
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
import FormParcours from './components/form_parcours'
import FormJob from './components/form_job'
import Error404 from './components/404'
import Menu from './components/ui/menu'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(Reducer, composeEnhancers(applyMiddleware(thunkMiddleware)))

const DiscoverForm = ({match, location}) => {
    return(
    <div>
        <Switch location={location}>
            <Route path={`${match.url}/parcours`} component={FormParcours} />
            <Route path={`${match.url}/jobs`} component={FormJob} />
            <Route component={Error404} />
        </Switch>
    </div>)

}

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
                                <PrivateRoute path="/discover/" component={DiscoverForm}/>
                                <AdminRoute exact path="/admin" component={Admin}/>
                                <AdminRoute path="/admin/speciality/:id" component={SpecialityPage}/>
                                <AdminRoute path="/admin/module/:id" component={ModulePage}/>
                                <AdminRoute path="/admin/concept/:id" component={ConceptPage}/>
                                <AdminRoute path="/admin/job/:id" component={JobPage}/>
                                <Route component={Error404} />
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
                <div className={style.component} >
                    {app}
                </div>
                </Router>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));
