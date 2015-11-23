import React, { Component, PropTypes } from 'react';
import styles from './Header.css';

export default class Header extends Component {

  render () {
    return (
      <div className={styles.header}>

        <div className={styles.logo}></div>  
        <p className={styles.headerDescription}>
          Search for any css modules on npm...
        </p>
      </div>
    );
  }

  constructor (props, context) {
    super(props, context);
    this.state = {};
  }

}
