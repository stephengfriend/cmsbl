import React, { Component, PropTypes } from 'react';

export default class Html extends Component {

  static propTypes = {
    appCssFilename: PropTypes.string,
    bodyHtml: PropTypes.string.isRequired,
    googleAnalyticsId: PropTypes.string.isRequired,
    helmet: PropTypes.object.isRequired,
    isProduction: PropTypes.bool.isRequired,
  };

  render() {
    const {
      appCssFilename, bodyHtml, googleAnalyticsId, isProduction, helmet
    } = this.props;

    const linkStyles = appCssFilename &&
      <link
        href={appCssFilename}
        rel="stylesheet"
      />;

    const analytics = isProduction && googleAnalyticsId !== 'UA-XXXXXXX-X' &&
      <script
        dangerouslySetInnerHTML={{ __html: `
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', '${googleAnalyticsId}', 'auto'); ga('send', 'pageview');` }}
      />;

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
            name="viewport"
          />
          <meta content="ie=edge" httpEquiv="x-ua-compatible" />
          {helmet.title.toComponent()}
          {helmet.base.toComponent()}
          {helmet.meta.toComponent()}
          {helmet.link.toComponent()}
          {helmet.script.toComponent()}
          <link
            rel="stylesheet"
            href="//fonts.googleapis.com/css?family=Roboto:300,400,500,700"
            type="text/css"
          />
          <link rel="stylesheet" href="//fonts.googleapis.com/icon?family=Material+Icons" />
          <link rel="stylesheet" href="//code.getmdl.io/1.1.2/material.red-indigo.min.css" />
          <script defer src="//code.getmdl.io/1.1.2/material.min.js" />
          {linkStyles}
          {analytics}
        </head>
        <body dangerouslySetInnerHTML={{ __html: bodyHtml }} />
      </html>
    );
  }

}
