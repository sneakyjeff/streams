import React from 'react';
// Field is a React component and reduxForm is a function that is similar to react-redux connect() function
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

import './StreamForm.css';

class StreamForm extends React.Component {
    renderErrorMessage = (meta) => {
        if(meta.touched && meta.error) {
            return (
                <div>{meta.error}</div>
            )
        }
    }

    renderInput = (formProps) => {
        const classNameForError = `field ${(formProps.meta.touched && formProps.meta.error) ? 'error' : ''}`
        return(
            <div className={classNameForError}>
                <label>
                    {formProps.label}
                </label>
                <input autoComplete="off" type='text' {...formProps.input} />
                <div>{this.renderErrorMessage(formProps.meta)}</div>
            </div>
        )
    }

    onSubmitForm = (formValues) => {
        this.props.onSubmit(formValues);
    }

    render(){
        return(
            <form className="ui form" onSubmit={this.props.handleSubmit(this.onSubmitForm)}>
                <Field name="title" component={this.renderInput} label="Enter Title" />
                <Field name="description" component={this.renderInput} label="Enter a Description" />
                <div className="button-actions">
                    <button className="ui button primary">Submit</button>
                    <Link to="/" className="ui button">Cancel</Link>
                </div>
            </form>
        )
    }
}

const validate = (formValues) => {
    const errors = {};

    if(!formValues.title) {
        errors.title = "You need to enter in a title";
    }
    if(!formValues.description) {
        errors.description = "You need to enter in a description";
    }

    return errors;
}

export default reduxForm({ form: 'streamForm', validate: validate })(StreamForm);