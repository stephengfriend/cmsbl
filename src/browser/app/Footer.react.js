import Component from 'react-pure-render/component';
import React from 'react';
import { connect } from 'react-redux';

class Footer extends Component {
  render() {
    return (
      <footer className="cmsbl-footer mdl-mega-footer">
        <div className="cmsbl-footer-contents">
          <div className="mdl-mega-footer__middle-section mdl-typography--text-center">
            <div className="mdl-mega-footer__drop-down-section">
              <input className="mdl-mega-footer__heading-checkbox" type="checkbox" checked />
              <h1
                className="mdl-mega-footer__heading mdl-typography--text-center"
                style={{ paddingRight: '0px' }}
              >Features</h1>
              <ul className="mdl-mega-footer__link-list">
                <li><a href="#">About</a></li>
                <li><a href="#">Terms</a></li>
                <li><a href="#">Partners</a></li>
                <li><a href="#">Updates</a></li>
              </ul>
            </div>

            <div className="mdl-mega-footer__drop-down-section">
              <input className="mdl-mega-footer__heading-checkbox" type="checkbox" checked />
              <h1
                className="mdl-mega-footer__heading mdl-typography--text-center"
                style={{ paddingRight: '0px' }}
              >Details</h1>
              <ul className="mdl-mega-footer__link-list">
                <li><a href="#">Specs</a></li>
                <li><a href="#">Tools</a></li>
                <li><a href="#">Resources</a></li>
              </ul>
            </div>

            <div className="mdl-mega-footer__drop-down-section">
              <input className="mdl-mega-footer__heading-checkbox" type="checkbox" checked />
              <h1
                className="mdl-mega-footer__heading mdl-typography--text-center"
                style={{ paddingRight: '0px' }}
              >Technology</h1>
              <ul className="mdl-mega-footer__link-list">
                <li><a href="#">How it works</a></li>
                <li><a href="#">Patterns</a></li>
                <li><a href="#">Usage</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">Contracts</a></li>
              </ul>
            </div>

            <div className="mdl-mega-footer__drop-down-section">
              <input className="mdl-mega-footer__heading-checkbox" type="checkbox" checked />
              <h1
                className="mdl-mega-footer__heading mdl-typography--text-center"
                style={{ paddingRight: '0px' }}
              >FAQ</h1>
              <ul className="mdl-mega-footer__link-list">
                <li><a href="#">Questions</a></li>
                <li><a href="#">Answers</a></li>
                <li><a href="#">Contact us</a></li>
              </ul>
            </div>

          </div>
          <div className="mdl-mega-footer__bottom-section">
            <div className="mdl-logo">Chesapeake MSBL, Inc.</div>
            <ul className="mdl-mega-footer__link-list">
              <li><a href="#">Help</a></li>
              <li><a href="#">Privacy & Terms</a></li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }

}

export default connect()(Footer);
