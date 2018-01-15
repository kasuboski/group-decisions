import React from 'react';
import { connect } from 'react-redux';

import { signIn, subscribeToAuthChanges } from 'api';
import { authChanged } from 'auth/authActions';

class Auth extends React.PureComponent {
    componentDidMount() {
        signIn();
        subscribeToAuthChanges(user => this.props.onAuthChanged(user));
    }

    render() {
        return null;
    }
}

const mapDispatchToProps = {
    onAuthChanged: authChanged,
};

export default connect(null, mapDispatchToProps)(Auth);