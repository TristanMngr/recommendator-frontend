import React from 'react'
import PutForm from './put_form'
import PostForm from './post_form'
import AddForm from './add_form'

let SPECIALITY
let MODULE

export default class Form extends React.Component {

    constructor(props) {
        super(props);
        SPECIALITY = this.props.type === "specialities";
        MODULE = this.props.type === "modules";
    }

    render() {

        let form;

        switch (this.props.method) {
            case "put":
                form = <PutForm type={this.props.type} object={this.props.object} />
                break;
            case "post":
                if (SPECIALITY)
                    form = <PostForm type="speciality" />
                else if (MODULE)
                    form = <PostForm type="module" />
                break;
            case "add":
                if (SPECIALITY) {
                    form = <AddForm toAdd="modules" in={this.props.type} object={this.props.object} selectValue="Choisir un cours" />
                }
                else if (MODULE) {
                    form = <AddForm toAdd="concepts" in={this.props.type} object={this.props.object} selectValue="Choisir un concept" />
                }
                break;
        }

        return(
            <div>{form}</div>
        )
    }
}
