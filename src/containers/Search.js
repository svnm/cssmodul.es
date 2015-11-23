import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { fetchModules, fetchModuleDetails } from '../actions/actions'
import SearchInput from '../components/SearchInput';
import ModuleItem from '../components/ModuleItem';
import styles from './Search.css';

class SearchApp extends Component {
  constructor(props) {
    super(props)
    this.fetchModuleDetails = this.fetchModuleDetails.bind(this)
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchModules('reactjs'))
  }

  componentWillReceiveProps(nextProps) {
  }

  fetchModuleDetails(name) {
    const { dispatch } = this.props
    dispatch(fetchModuleDetails(name))
  }

  render() {
    const { items, item, isFetching, isSelected } = this.props

    return (
      <div className={styles.search}>

        <SearchInput fetchModuleDetails={this.fetchModuleDetails}
                     isFetching ={isFetching}
                     items={items} />

        { 
          isSelected && item !== undefined && 
            <ModuleItem item={item} />
        }        
        
      </div>
    )
  }
}

SearchApp.propTypes = {
  item: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  isSelected: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const { items, item, isFetching, isSelected } = state.npmModules || { 
    isFetching: true, 
    item: {}, 
    items: [], 
    isSelected: false 
  }
  return { items, item, isFetching, isSelected }
}

export default connect(mapStateToProps)(SearchApp)
