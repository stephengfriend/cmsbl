import './Page.scss';
import Hero from './Hero.react';
import Footer from '../app/Footer.react';
import Component from 'react-pure-render/component';
import Helmet from 'react-helmet';
import React from 'react';
import { connect } from 'react-redux';

class Page extends Component {
  render() {
    return (
      <main className="cmsbl-content mdl-layout__content">
        <Helmet title="Home" />
        <Hero />
        <div className="cmsbl-play-ball-section">
          <div className="cmsbl-play-ball-band mdl-color--indigo-900">
            <div className="cmsbl-play-ball-band-text">
              <div className="mdl-typography--display-2 mdl-typography--font-thin">
                Take me out to the ball game
              </div>
              <p className="mdl-typography--headline mdl-typography--font-thin">
                Chesapeake MSBL is home to over 30 teams in 4 divisions, ranging
                in ages from 18+ to 45+ and hosts 2 annual tournaments.
              </p>
              <button className={'mdl-button mdl-js-button mdl-button--raised ' +
                'mdl-js-ripple-effect  mdl-button--accent'}
              >
                View Teams&nbsp;<i className="material-icons">chevron_right</i>
              </button>
            </div>
          </div>
        </div>
        <div className="cmsbl-more-section">
          <div className="mdl-grid">
            <div className="mdl-cell mdl-cell--4-col mdl-card mdl-shadow--3dp">
              <div className="mdl-card__title">
                <h4 className="mdl-card__title-text">We're so cool!</h4>
              </div>
              <div className="mdl-card__supporting-text">
                <span className="mdl-typography--font-light mdl-typography--subhead">
                  This is the supporting text for the card.
                </span>
              </div>
              <div className="mdl-card__actions">
                <a
                  className="android-link mdl-button mdl-js-button mdl-typography--text-uppercase"
                  href="#"
                  data-upgraded=",MaterialButton"
                >
                   Get Action!
                   <i className="material-icons">chevron_right</i>
                 </a>
              </div>
            </div>
            <div className="mdl-cell mdl-cell--4-col mdl-card mdl-shadow--3dp">
              <div className="mdl-card__title">
                <h4 className="mdl-card__title-text">We're so cool!</h4>
              </div>
              <div className="mdl-card__supporting-text">
                <span className="mdl-typography--font-light mdl-typography--subhead">
                  This is the supporting text for the card.
                </span>
              </div>
              <div className="mdl-card__actions">
                <a
                  className="android-link mdl-button mdl-js-button mdl-typography--text-uppercase"
                  href="#"
                  data-upgraded=",MaterialButton"
                >
                   Get Action!
                   <i className="material-icons">chevron_right</i>
                 </a>
              </div>
            </div>
            <div className="mdl-cell mdl-cell--4-col mdl-card mdl-shadow--3dp">
              <div className="mdl-card__title">
                <h4 className="mdl-card__title-text">We're so cool!</h4>
              </div>
              <div className="mdl-card__supporting-text">
                <span className="mdl-typography--font-light mdl-typography--subhead">
                  This is the supporting text for the card.
                </span>
              </div>
              <div className="mdl-card__actions">
                <a
                  className="android-link mdl-button mdl-js-button mdl-typography--text-uppercase"
                  href="#"
                  data-upgraded=",MaterialButton"
                >
                   Get Action!
                   <i className="material-icons">chevron_right</i>
                 </a>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

}

export default connect(state => ({
  msg: state.intl.msg.home
}))(Page);
