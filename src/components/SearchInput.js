import React, { Component, PropTypes } from 'react'
import styles from './SearchInput.css'
import loader from 'css-block-loader'
Object.assign(styles, loader)

import Search from 'react-search'

export default class SearchInput extends Component {

  static propTypes = {
    fetchModuleDetails: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired
  }

  render () {

    const keys = ['title', 'description']
    const searchKey = 'title'

    return (

      <div className={styles.search} >

        <Search items={this.props.items} 
                keys={keys} 
                searchKey={searchKey} 
                placeholder='Search for a css module...' 
                onChange={this.handleChange.bind(this)}
                onClick={this.handleSubmit.bind(this)} />

        { 
          this.props.isFetching &&
            <div className={styles.loader}>
              <span className={styles.block}></span>
              <span className={styles.block}></span>
              <span className={styles.block}></span>
              <span className={styles.block}></span>
              <span className={styles.block}></span>
              <span className={styles.block}></span>
              <span className={styles.block}></span>
              <span className={styles.block}></span>
              <span className={styles.block}></span>
            </div>
        }

      </div>

    );
  }

  constructor (props, context) {
    super(props, context);
    this.state = {};
  }

  handleChange (e) {
    this.setState({ name: e.target.text })
  }

  handleSubmit (e) {
    const name = e.currentTarget.children[0].text
    this.setState({ name: '' })
    this.props.fetchModuleDetails(name)
  }

}
