import Component from 'react-pure-render/component';
import Helmet from 'react-helmet';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

class Page extends Component {

  static propTypes = {
    msg: PropTypes.object.isRequired
  };

  render() {
    const { msg } = this.props;

    return (
      <div className="home">
        <Helmet title={msg.title} />
      </div>
    );
  }

}

export default connect(state => ({
  msg: state.intl.msg.home
}))(Page);
