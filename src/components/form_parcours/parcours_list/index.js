import React from 'react'
import ParcoursTile from './parcours_tile'
import {Transition, List} from 'semantic-ui-react'
import {TransitionGroup, CSSTransition} from 'react-transition-group'

export default class ParcoursList extends React.Component {
    render() {
        return(
            <TransitionGroup>
                
                {this.props.specialities ? this.props.specialities.map((speciality, index) => {
                    let duration = 0.115 * index
                    return(
                                    <CSSTransition appear={true} classNames="fade" timeout={0}> 
                                        <ParcoursTile key={speciality.id} delay={duration} data={speciality} /> 
                </CSSTransition>)})
                
                : ""}
               
            </TransitionGroup>
        )
    }
}
