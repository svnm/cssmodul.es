/*
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as SearchActions from '../actions/SearchActions';

import SearchInput from '../components/SearchInput';
import ModuleList from '../components/ModuleList';
import styles from './Search.css';

function Search( props) {

    const actions = {
    }

    return (
        <div className={styles.search}>
            <SearchInput findModule={props.findModule} />
        </div>
    );
}

export default connect(
    state => ({ results: state.results }),
    dispatch => bindActionCreators(SearchActions, dispatch)
)(Search);
*/

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { fetchPosts } from '../actions/actions'
import Posts from '../components/Posts'
import SearchInput from '../components/SearchInput';
import styles from './Search.css';

class AsyncApp extends Component {
  constructor(props) {
    super(props)
    this.handleRefreshClick = this.handleRefreshClick.bind(this)
    this.search = this.search.bind(this)
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchPosts('reactjs'))
  }

  componentWillReceiveProps(nextProps) {
  }

  handleRefreshClick(e) {
    e.preventDefault()
    const { dispatch } = this.props
    dispatch(fetchPosts('reactjs'))
  }

  search(e) {
    const { dispatch } = this.props
    dispatch(fetchPosts('reactjs'))
  }

  render() {
    const { items, isFetching } = this.props

    return (
      <div className={styles.search}>

        <SearchInput findModule={this.search} />

        <p> 
        { !isFetching && <a href='#' onClick={this.handleRefreshClick}>Search</a> }
        </p>

        { isFetching && items.length === 0 && <h2>Loading...</h2> }
        
        { !isFetching && items.length === 0 && <h2>No results.</h2> }
        
        { items.length > 0 && <Posts posts={items} /> }

      </div>
    )
  }
}

AsyncApp.propTypes = {
  items: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const { isFetching, items } = state.posts || { isFetching: true, items: [] }
  return { items, isFetching }
}

export default connect(mapStateToProps)(AsyncApp)
