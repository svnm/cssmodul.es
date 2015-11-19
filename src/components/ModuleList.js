import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from 'redux-router5';

import styles from './ModuleList.css';
import ModuleItem from '../components/ModuleItem';

function ModuleList(props) {
    return (
        <ul className={styles.list}>
            { 
            	props.results.map(
            		res => <ModuleItem {...res}
                                    findModule={ () => doNothing(res.id) }                                    
            						key={res.id} />
            	) 
        	}
        </ul>
    );
}

function doNothing () {
    console.log('this does nothing')
}

export default connect(
    state => ({ results: state.SearchReducer.results })
)(ModuleList);
