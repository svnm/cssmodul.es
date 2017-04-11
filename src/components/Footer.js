import React, { Component, PropTypes } from 'react';
import styles from './Footer.css';
import CSSModules from 'react-css-modules'

@CSSModules(styles, { allowMultiple: true })
export default class Footer extends Component {
  render () {
    return (
      <div styleName='footer'>

            <div styleName='group'>
              <span>made with </span>

              <span className='icon'>
                <i className='fa fa-1x fa-heart' />
              </span>

              <span> by </span>

              <a target='_blank'
                 styleName='yellow'
                 href='http://vace.nz/'>
                <span>vace.</span>
                <span styleName='yellow'>nz</span>
              </a>
            </div>

            <div styleName='group'>
              <span>check out </span>
              <a target='_blank'
                 href='https://github.com/StevenIseki/css-module-npm-boilerplate'>
                 css module npm boilerplate
              </a>
            </div>

            <div styleName='group'>
              <a target='_blank'
                 styleName='yellow'
                 href='https://github.com/StevenIseki/cssmodules.com'>
                <span styleName='white'>
                  <i className='fa fa-1x fa-github' />
                </span>
              </a>
            </div>
      </div>
    );
  }

  constructor (props, context) {
    super(props, context);
    this.state = {};
  }

}
