import React, { Component, PropTypes } from 'react';
import styles from './Header.css';

export default class SearchInput extends Component {

  render () {
    return (
      <div className={styles.header}>
        <h1 className={styles.headerTitle}>CSS Modules</h1>
        <p className={styles.headerDescription}>
          This is just a header yooo...
        </p>
      </div>
    );
  }

  constructor (props, context) {
    super(props, context);
    this.state = {};
  }

}
