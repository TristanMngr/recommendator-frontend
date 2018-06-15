import React from 'react'
import ParcoursTile from './parcours_tile'
import speciality from '../../admin/custom_list/custom_item/speciality';

export default class ParcoursList extends React.Component {
    render() {
        return(
            <div>
                {this.props.specialities.map(speciality => <ParcoursTile />)}
            </div>
        )
    }
}