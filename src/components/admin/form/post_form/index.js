import React from 'react'
import { Form } from 'semantic-ui-react'

export default class PostForm extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const button = this.props.isFetching ? <Form.Button loading onClick={this.props.submitForm}>Ajouter</Form.Button> :
        <Form.Button onClick={this.props.submitForm}>Ajouter</Form.Button>;

        return(
            <React.Fragment>
                <Form>
                    <Form.Group widths='equal'>
                        {
                            Object.keys(this.props.fields).map(
                                (field, i) => {
                                    return (
                                        <Form.Input key={i} type="text" label={field} name={field} value={this.props.fields[field]} placeholder={field}
                                            onChange={this.props.updateInfo} />
                                        )
                                })
                        }
                    </Form.Group>
                    {button}
                </Form>
            </React.Fragment>
        );
    }
}
