import React from 'react'
import { Form } from 'semantic-ui-react'

export default class PutForm extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const button = this.props.isFetching ? <Form.Button loading onClick={this.props.submitForm}>Modifier</Form.Button> :
        <Form.Button onClick={this.props.submitForm}>Modifier</Form.Button>;

        return (
            <React.Fragment>
                <Form>
                    <Form.Group widths='equal'>
                        {
                            Object.keys(this.props.fields).map(
                                (field, i) => {
                                    return (
                                        <Form.Input key={i} label={field} type="text" name={field} value={this.props.fields[field]}
                                            onChange={this.props.updateInfo} />
                                        )
                                })
                        }
                    </Form.Group>
                    {button}
                </Form>
            </React.Fragment>
        )
    }
}
