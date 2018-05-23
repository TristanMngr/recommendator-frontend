import React from 'react'
import SpecialityElement from './speciality_element'

export default class ListSpecialities extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        const specialities = this.props.specialities.map(
                (spe, i) => {
                    return (
                        <SpecialityElement key={i} name={spe.speciality.name} matching={spe.matching} matching_concepts={spe.matching_concepts} />
                    )
                }
            );

        return(
            <div>
                {specialities}
            </div>
        )
    }
}
