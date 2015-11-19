import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { fetchPosts, invalidateReddit } from '../actions/actions'

import Picker from '../components/Picker'
import Posts from '../components/Posts'

class AsyncApp extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleRefreshClick = this.handleRefreshClick.bind(this)
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

  render() {
    const { items, isFetching } = this.props

    return (
      <div>

        <Picker value='reactjs'
                onChange={this.handleChange}
                options={[ 'reactjs', 'frontend' ]} />

        <p>
          {
            !isFetching && <a href='#' onClick={this.handleRefreshClick}>Refresh</a>
          }

        </p>

        {
          isFetching && items.length === 0 && <h2>Loading...</h2>
        }
        
        {
          !isFetching && items.length === 0 && <h2>Empty.</h2>
        }
        
        {
          items.length > 0 && <Posts posts={items} />
        }

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
