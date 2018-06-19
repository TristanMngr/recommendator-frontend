import React from 'react'
import SpecialityElement from './speciality_element'

export default class ListSpecialities extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let specialities = null
        if (this.props.specialities) {
            if (this.props.specialities[0].matching_modules) {
                specialities = this.props.specialities.map(
                    (spe, i) => {
                        return (
                            <SpecialityElement key={i} name={spe.speciality.name} matching={spe.matching} matching_modules={spe.matching_modules} />
                        )
                    }
                )
            }
            if (this.props.specialities[0].speciality.matching_jobs) {
                specialities = this.props.specialities.map(
                    (spe, i) => {
                        return (
                            <SpecialityElement key={i} name={spe.speciality.name} matching={spe.matching} matching_jobs={spe.speciality.matching_jobs} />
                        )
                    }
                )
                
            }
        }

        return(
            <div>
                {specialities}
            </div>
        )
    }
}
