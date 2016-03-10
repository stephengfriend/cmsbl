import Component from 'react-pure-render/component';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { login, logoutUser } from '../../common/auth/actions';

class Header extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string
  }

  constructor(props) {
    super(props);
    this.signIn = this.signIn.bind(this);
    this.logout = this.logout.bind(this);
  }

  signIn(evt) {
    evt.preventDefault();
    this.props.dispatch(login());
  }

  logout(evt) {
    evt.preventDefault();
    this.props.dispatch(logoutUser());
  }

  render() {
    const { isAuthenticated } = this.props;

    return (
      <header className="cmsbl-header mdl-layout__header">
        <div className="mdl-layout-icon"></div>
        <div className="mdl-layout__header-row">
          <span className="mdl-layout-title">Chesapeake Men's Senior Baseball League</span>
          <div className="mdl-layout-spacer"></div>
          <nav className="mdl-navigation mdl-layout--large-screen-only">
            <a
              className="mdl-navigation__link mdl-typography--text-uppercase"
              href="#"
            >News</a>
            <a
              className="mdl-navigation__link mdl-typography--text-uppercase"
              href="#"
            >Scores</a>
            <a
              className="mdl-navigation__link mdl-typography--text-uppercase"
              href="#"
            >Standings</a>
            <a
              className="mdl-navigation__link mdl-typography--text-uppercase"
              href="#"
            >FAQ</a>
            <a
              className="mdl-navigation__link mdl-typography--text-uppercase"
              href="#"
            >Contact</a>
            {!isAuthenticated
              ?
              <a
                className="mdl-navigation__link mdl-typography--text-uppercase"
                href=""
                onClick={this.signIn}
              >Sign In</a>
              :
              <a
                className="mdl-navigation__link mdl-typography--text-uppercase"
                href=""
                onClick={this.logout}
              >Logout</a>
            }
          </nav>
        </div>
      </header>
    );
  }

}

export default connect()(Header);
