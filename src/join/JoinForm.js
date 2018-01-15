import React from 'react';
import { Field, reduxForm } from 'redux-form';

const JoinForm = props => {
    const { handleSubmit } = props;

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='room'>Room
                <Field name='room' component='input' type='text' />
            </label>

            <br />
            <label htmlFor='name'>Name
                <Field name='name' component='input' type='text' />
            </label>

            <br />
            <label htmlFor='isCreator'>Creator
                <Field name='isCreator' component='input' type='checkbox' />
            </label>

            <br />
            <button type='submit'>Join Room</button>
        </form>
    );
};

export default reduxForm({form: 'join'})(JoinForm);