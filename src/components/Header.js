import React, { Component, PropTypes } from 'react';
import styles from './Header.css';

export default class Header extends Component {

  render () {
    return (
      <div className={styles.header}>

        <a href='http://cssmodul.es'><div className={styles.logo}></div></a>

        <p className={styles.description}>
          Search for any css modules on npm... 
          make sure you include the 
          <code className={styles.dark}>css-module</code> 
          keyword in your 
          <code className={styles.light}>package.json</code>
        </p>

      </div>
    );
  }

  constructor (props, context) {
    super(props, context);
    this.state = {};
  }

}
