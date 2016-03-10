import Component from 'react-pure-render/component';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import './Hero.scss';

import { register } from '../../common/auth/actions';

class Hero extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.registerUser = this.registerUser.bind(this);
  }

  registerUser(evt) {
    evt.preventDefault();
    this.props.dispatch(register());
  }

  render() {
    return (
      <div className="hero-section mdl-typography--text-center">
        <div className="hero-content">
          <img src={require('./logo.png')} />
          <h1>
            The premier amatuer baseball league in Maryland, since 1989
          </h1>
          <button
            className={'mdl-button ' +
              'mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent' }
            onClick={this.registerUser}
          >
            Register to Play!
          </button>
        </div>
      </div>
    );
  }

}

export default connect()(Hero);
