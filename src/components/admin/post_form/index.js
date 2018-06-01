import React from 'react'
import { addSpeciality } from '../../../actions/speciality';
import { addModule} from '../../../actions/module';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'


//used to use the correct action
let post_function;
let type;

class PostForm extends React.Component {

    constructor(props) {
        super(props);
        type = props.type;
        switch (props.type) {
            case "specialities":
                this.state = {
                    name: ' ',
                    description: ' ',
                }
                post_function = addSpeciality;
                break;
            case "modules":
                this.state = {
                    name: '',
                    description: '',
                }
                post_function = addModule;
                break;
        }
    }

    updateInfo(e){
        let state = {};
        state[e.target.name] = e.target.value;
        this.setState(state)
    }

    submitForm(e){
            e.preventDefault()
            this.props.post(this.state);
    }

    render() {

        console.log(this.state);
        return(

                <div>
                    <form>
                        {
                            Object.keys(this.state).map(
                                (field, i) => {
                                    console.log(field)
                                    return (
                                        <input key={i} type="text" name={field} value={this.state[field]}
                                            onChange={this.updateInfo.bind(this)} />
                                        )
                                })
                        }
                        <button onClick={this.submitForm.bind(this)}>Ajouter</button>
                    </form>

                </div>

        );
    }
}

const mapStateToProps = state => {
    let isFetching
    switch (type) {
        case "specialities":
            isFetching = state.speciality.isFetching
            break;
        case "modules":
            isFetching = state.modules.isFetching
            break;
    }

    return {
        isFetching: isFetching,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        post: (infos) => {
            dispatch(post_function(infos))
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostForm))
