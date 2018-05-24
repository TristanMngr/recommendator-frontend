import React from 'react'
import ListSpecialities from './components/list_specialities'

// class used to test specific components
export default class Test extends React.Component {

    render() {

        // data received from the backend should look like this when hitting the form getting spés from concepts
        const test_list = [
            {
                "speciality": {
                    "name": "Ingenieur Logiciel",
                    "description": "...",
                    "id": 1
                },
                "matching_modules": [
                    {
                        "module": {
                            "name": "Algorithmique et Programmation Avancée",
                            "description": "...",
                            "id": 1
                        },
                        "matching_concepts": [
                            {
                                "name": "Programmation orientée objet",
                                "id": 1
                            },
                            {
                                "name": "Java",
                                "id": 4
                            }
                        ]
                    },
                    {
                        "module": {
                          "name": "Genie Logiciel",
                          "description": "...",
                          "id": 2
                        },
                        "matching_concepts": [
                          {
                            "name": "Java",
                            "id": 4
                          }
                        ]
                    }
                ],
                "matching": 100
            },
            {
                "speciality": {
                    "name": "Business Intelligence",
                    "description": "saleeut",
                    "id": 2
                },
                "matching_modules": [
                    {
                        "module": {
                            "name": "Genie Logiciel",
                            "description": "...",
                            "id": 2
                        },
                        "matching_concepts": [
                            {
                                "name": "Java",
                                "id": 4
                            }
                        ]
                    }
                ],
                "matching": 50
            },
            {
                "speciality": {
                    "name": "Microsystème embarqués",
                    "description": "...",
                    "id": 3
                },
                "matching_modules": [],
                "matching": 0
            }
        ];

        return(

                <ListSpecialities specialities={test_list} />

            )
    }
}
