import React, { Component, PropTypes } from 'react';
import styles from './Header.css';
import CSSModules from 'react-css-modules'

@CSSModules(styles, { allowMultiple: true })
export default class Header extends Component {
  render () {
    return (
      <div styleName='header'>
        <a href='http://cssmodul.es'><div styleName='logo'></div></a>

        <p styleName='description'>
          Search for any css modules on npm...
          make sure you include the
          <code styleName='dark'>css-module</code>
          keyword in your
          <code styleName='light'>package.json</code>
        </p>
      </div>
    );
  }

  constructor (props, context) {
    super(props, context);
    this.state = {};
  }
}
