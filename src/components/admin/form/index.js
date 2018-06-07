import React from 'react'
import PutForm from './put_form'
import SpecialityPostForm from './post_form/speciality'
import ModulePostForm from './post_form/module'
import ConceptPostForm from './post_form/concept'
import SpecialityPutForm from './put_form/speciality'
import ModulePutForm from './put_form/module'
import ConceptPutForm from './put_form/concept'
import AddModuleToSpecialityForm from './add_form/add_module_to_speciality'
import AddConceptToModuleForm from './add_form/add_concept_to_module'

export default class Form extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        const SPECIALITY = this.props.type === "specialities";
        const MODULE = this.props.type === "modules";
        const CONCEPT = this.props.type === "concepts";
        let form;

        switch (this.props.method) {
            case "put":
                if (SPECIALITY)
                    form = <SpecialityPutForm />
                else if (MODULE)
                    form = <ModulePutForm />
                else if (CONCEPT)
                    form = <ConceptPutForm />
                break;
            case "post":
                if (SPECIALITY)
                    form = <SpecialityPostForm />
                else if (MODULE)
                    form = <ModulePostForm />
                else if (CONCEPT)
                    form = <ConceptPostForm />
                break;
            case "add":
                if (SPECIALITY) {
                    form = <AddModuleToSpecialityForm />
                }
                else if (MODULE) {
                    form = <AddConceptToModuleForm />
                }
                break;
        }

        return(
            <div>{form}</div>
        )
    }
}
