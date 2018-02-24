import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as setAppState from '../actions/appState';
import PropTypes from 'prop-types';

class Home extends Component {
    render() {
        return (
            <div>
                <h1>You are home!</h1>
                <p>
                    <input
                        type="text"
                        placeholder="Value from redux state"
                        value={this.props.app_state}
                        onChange={e => this.props.actions.setAppState(e.target.value)}/>
                </p>
                <Link to='/contact'>Contact me!</Link>
            </div>
        )
    }
}

Home.propTypes = {
    actions: PropTypes.object.isRequired,
    app_state: PropTypes.string.isRequired
};

function mapStateToProps(state) {
    return {app_state: state.appStateReducer.app_state};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(setAppState, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);