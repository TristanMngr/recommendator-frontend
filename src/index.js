import React from 'react'
import ReactDOM from 'react-dom'
import style from './scss/app.scss'

class App extends React.Component {
    
    constructor() {
        super();

    }

    render() {
        return(

            <div class="app" style={style}>
                <p>test</p>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));
