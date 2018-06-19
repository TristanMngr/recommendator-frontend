import React from 'react'
import SpecialityPostForm from './post_form/speciality'
import ModulePostForm from './post_form/module'
import ConceptPostForm from './post_form/concept'
import JobPostForm from './post_form/job'
import SpecialityPutForm from './put_form/speciality'
import ModulePutForm from './put_form/module'
import ConceptPutForm from './put_form/concept'
import JobPutForm from './put_form/job'
import AddModuleToSpecialityForm from './add_form/add_module_to_speciality'
import AddConceptToModuleForm from './add_form/add_concept_to_module'
import AddJobToSpecialityForm from './add_form/add_job_to_speciality'

export default class Form extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        const SPECIALITY = this.props.type === "specialities";
        const MODULE = this.props.type === "modules";
        const CONCEPT = this.props.type === "concepts";
        const JOB = this.props.type === "jobs";
        let form;

        switch (this.props.method) {
            case "put":
                if (SPECIALITY)
                    form = <SpecialityPutForm />
                else if (MODULE)
                    form = <ModulePutForm />
                else if (CONCEPT)
                    form = <ConceptPutForm />
                else if (JOB)
                    form = <JobPutForm />
                break;
            case "post":
                if (SPECIALITY)
                    form = <SpecialityPostForm />
                else if (MODULE)
                    form = <ModulePostForm />
                else if (CONCEPT)
                    form = <ConceptPostForm />
                else if (JOB)
                    form = <JobPostForm />
                break;
            case "add":
                if (SPECIALITY)
                    form = <AddModuleToSpecialityForm />
                else if (MODULE)
                    form = <AddConceptToModuleForm />
                else if (JOB)
                    form = <AddJobToSpecialityForm />
                break;
        }

        return(
            <div>{form}</div>
        )
    }
}
