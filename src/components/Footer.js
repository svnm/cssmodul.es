import React, { Component, PropTypes } from 'react';
import styles from './Footer.css';

export default class Footer extends Component {

  render () {
    return (
      <div className={styles.footer}>
        <p className={styles.footerDescription}>

            <span>made with </span>

            <span className={styles.icon}>
              <i className='fa fa-1x fa-heart' />
            </span>

            <span> by </span>

            <a target='_blank' 
               className={styles.github} 
               href='https://github.com/StevenIseki/cssmodules.com'>
              <span>steven iseki isekivace.</span>
              <span className={styles.extension}>nz</span>
            </a>
        
          <br /><br />          

          <span>check out </span>
          <a target='_blank' 
             href='https://github.com/StevenIseki/css-module-npm-boilerplate'>
             css module npm boilerplate
          </a>


        </p>


      </div>
    );
  }

  constructor (props, context) {
    super(props, context);
    this.state = {};
  }

}
