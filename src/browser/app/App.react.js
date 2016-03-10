/* eslint-disable global-require */
import './App.scss';
import Header from './Header.react';
import Drawer from './Drawer.react';
import Component from 'react-pure-render/component';
import Helmet from 'react-helmet';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

class App extends Component {

  static propTypes = {
    children: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string
  };

  render() {
    const { children, dispatch, location, isAuthenticated, errorMessage } = this.props;

    return (
      <div>
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
          <Helmet
            link={[
              { rel: 'shortcut icon', href: require('./favicon.ico') }
            ]}
            meta={[{
              name: 'description',
              content: 'Founded in 1989, the Chesapeake MSBL is a ' +
                '501(c)3 Non-Profit Corporation located in Maryland ' +
                'and celebrates 28 years of amateur adult baseball in 2016.'
            }]}
            titleTemplate="%s - Chesapeake Men's Senior Baseball League"
          />
          {/* Pass location to ensure header active links are updated. */}
          <Header
            dispatch={dispatch}
            location={location}
            isAuthenticated={isAuthenticated}
            errorMessage={errorMessage}
          />
          <Drawer />
          {children}
        </div>
      </div>
    );
  }

}

function mapStateToProps(state) {
  const { auth } = state;
  const { isAuthenticated, errorMessage } = auth;

  return {
    isAuthenticated,
    errorMessage
  };
}

// Just inject dispatch.
export default connect(mapStateToProps)(App);
