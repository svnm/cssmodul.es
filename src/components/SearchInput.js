import React, { Component, PropTypes } from 'react';
import styles from './SearchInput.css';

export default class SearchInput extends Component {

  static propTypes = {
    findModule: PropTypes.func.isRequired
  }

  render () {
    return (

      <div className={styles.search}>

        <input
          className={styles.searchInput}
          type="text"
          autoFocus="true"
          placeholder="Search for a css module"
          value={this.state.name}
          onChange={this.handleChange.bind(this)}
          onKeyDown={this.handleSubmit.bind(this)} />

        <i className={styles.searchButton}></i>

      </div>

    );
  }

  constructor (props, context) {
    super(props, context);
    this.state = {
      name: this.props.name || '',
      items: ['ruby', 'javascript', 'lua', 'go', 'julia', 'c', 'scala','haskell']
    };
  }

  handleChange (e) {
    this.setState({ name: e.target.value });
  }

  handleSubmit (e) {
    const name = e.target.value.trim();
    if (e.which === 13) {
      this.props.findModule(name);
      this.setState({ name: '' });
    }
  }

}
