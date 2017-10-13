import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

export default function(ComposedComponent) {
  class Authentication extends Component {
  
    componentWillMount() {
      if (!this.props.authenticated) {
        this.props.router.push('/');
      }
    }

    componentWillUpdate(nextProps) {
      console.log(nextProps)
      if (!nextProps.authenticated) {
        this.props.router.push('/');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.authenticated };
  }

  return connect(mapStateToProps)(withRouter(Authentication));
}