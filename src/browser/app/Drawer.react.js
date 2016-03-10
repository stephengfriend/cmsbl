import Component from 'react-pure-render/component';
import React from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    return (
      <div className="mdl-layout__drawer">
        <span className="mdl-layout-title">Navigation</span>
        <nav className="mdl-navigation">
          <a className="mdl-navigation__link" href="">Teams</a>
          <a className="mdl-navigation__link" href="">League Info</a>
          <a className="mdl-navigation__link" href="">Hall of Fame</a>
          <a className="mdl-navigation__link" href="">Field Directions</a>
          <a className="mdl-navigation__link" href="">Sponsors</a>
        </nav>
      </div>
    );
  }

}

export default connect()(Header);
