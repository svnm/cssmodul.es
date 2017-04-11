import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { fetchModules, fetchModuleDetails } from '../actions/actions'
import SearchInput from '../components/SearchInput';
import ModuleItem from '../components/ModuleItem';
import styles from './Search.css';
import CSSModules from 'react-css-modules'

@connect(mapStateToProps)
@CSSModules(styles, { allowMultiple: true })
export default class extends Component {
  constructor(props) {
    super(props)
    this.fetchModuleDetails = this.fetchModuleDetails.bind(this)
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchModules('css-modules'))
  }

  fetchModuleDetails(name) {
    const { dispatch } = this.props
    dispatch(fetchModuleDetails(name))
  }

  render() {
    const { items, item, starCount, isFetching, isSelected } = this.props

    return (
      <div styleName='Search'>

        <SearchInput fetchModuleDetails={this.fetchModuleDetails}
                     isFetching ={isFetching}
                     items={items} />

        {
          isSelected && item !== undefined &&
            <ModuleItem item={item} starCount={starCount} />
        }

      </div>
    )
  }
}

function mapStateToProps(state) {
  const { items, item, starCount, isFetching, isSelected } = state.npmModules || {
    isFetching: true,
    item: {},
    starCount: 0,
    items: [],
    isSelected: false
  }
  return { items, item, starCount, isFetching, isSelected }
}
