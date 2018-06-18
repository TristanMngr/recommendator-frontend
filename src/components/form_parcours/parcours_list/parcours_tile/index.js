import React from 'react'

export default class ParcoursTile extends React.Component {
    render() {
            const data = this.props.data
            return(
                <div>
                    {data.name}
                </div>
            )
    }
}
