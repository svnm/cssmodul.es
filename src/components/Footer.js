import React, { Component, PropTypes } from 'react';
import styles from './Footer.css';

export default class Footer extends Component {

  render () {
    return (
      <div className={styles.footer}>
        <p className={styles.footerDescription}>
          Copyright 2015 isekivace.<span className={styles.domain}>nz</span>
        </p>
      </div>
    );
  }

  constructor (props, context) {
    super(props, context);
    this.state = {};
  }

}
