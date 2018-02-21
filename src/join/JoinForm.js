import React from 'react';
import { Field, reduxForm } from 'redux-form';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
        <label>
            {label}
            <input {...input} placeholder={label} type={type} />
            {touched && error && <span>{error}</span>}
        </label>
    </div>
)

const JoinForm = props => {
    const { handleSubmit, submitting, error } = props;

    return (
        <form onSubmit={handleSubmit}>
            <Field 
                name='room'
                component={renderField}
                type='text'
                label='Room'
            />

            <Field 
                name='name'
                component={renderField}
                type='text'
                label='Name'
            />

            <Field 
                name='isCreator'
                component={renderField}
                type='checkbox'
                label='Creator'
            />
            
            {error && <div><strong>{error}</strong></div>}
            <button type='submit' disabled={submitting}>Join Room</button>
        </form>
    );
};

export default reduxForm({ form: 'join' })(JoinForm);