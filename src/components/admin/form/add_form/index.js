import React from 'react'
import { Form } from 'semantic-ui-react'

export default class AddForm extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const select_list = this.props.objectsToAdd
            .filter(object => this.props.alreadyInIds.indexOf(object.id) === -1)
            .map((obj, i) => {
            return {key:i, value: obj.id, text: obj.name}
            });

        const button = this.props.isFetching ? <Form.Button loading onClick={this.props.submitForm}>Ajouter</Form.Button> :
        <Form.Button onClick={this.props.submitForm}>Ajouter</Form.Button>;

        const toggle_button = this.props.toAdd === "modules" ?
        <Form.Checkbox onClick={this.props.updateCheckbox} toggle
            label={"cours coeur ?"}
            checked={this.props.is_main} /> : '';

        return (
            <React.Fragment>
                <Form>
                    <Form.Select options={select_list} placeholder={this.props.selectValue}
                        onChange={this.props.updateSelect} />
                    {toggle_button}
                    {button}
                </Form>
            </React.Fragment>
        )
    }
}
