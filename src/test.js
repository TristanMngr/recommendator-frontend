import React from 'react'
import ListSpecialities from './components/list_specialities'

// class used to test specific components
export default class Test extends React.Component {

    render() {

        // data received from the backend should look like this when hitting the form getting spés from concepts
        const test_list = [
            {
                speciality: {
                    speciality_id: 1,
                    name: "spéciality 1 this is a test"
                },
                matching_concepts: [
                    {
                        concept: {
                            concept_id: 2,
                            name: "concept 2"
                        },
                        in_modules: [
                            {
                                module_id: 1,
                                name: "module 1"
                            },
                            {
                                module_id: 2,
                                name: "module 2"
                            }
                        ]
                    },
                    {
                        concept: {
                            concept_id: 4,
                            name: "concept 4"
                        },
                        in_modules: [
                            {
                                module_id: 1,
                                name: "module 1"
                            }
                        ]
                    }
                ],
                matching: 90
            },
            {
                speciality: {
                    speciality_id: 2,
                    name: "spé 2"
                },
                matching_concepts: [
                    {
                        concept: {
                            concept_id: 2,
                            name: "concept 2"
                        },
                        in_modules: [
                            {
                                module_id: 2,
                                name: "module 2"
                            }
                        ]
                    }
                ],
                matching: 60
            },
            {
                speciality: {
                    speciality_id: 3,
                    name: "spé 3"
                },
                matching_concepts: [],
                matching: 0
            }
        ];

        return(

                <ListSpecialities specialities={test_list} />

            )
    }
}
