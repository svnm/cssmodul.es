import React, { Component, PropTypes } from 'react'
import styles from './SearchInput.css'

import Search from 'react-search'

export default class SearchInput extends Component {

  static propTypes = {
    fetchModuleDetails: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired
  }

  render () {

    const keys = ['title']
    const searchKey = 'title'

    return (

      <div className={styles.search} >

        {/* 
          would love this...
          <Search className={styles.searchInput} 
         */}

        <Search items={this.props.items} 
                keys={keys} 
                searchKey={searchKey} 
                placeholder='Search for a css module' 
                onChange={this.handleChange.bind(this)}
                onClick={this.handleSubmit.bind(this)} />

        <i className='fa fa-star-o' />

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
    const name = e.target.text
    this.setState({ name: '' })
    this.props.fetchModuleDetails(name)
  }

}
