import React from 'react';
import { connect } from 'react-redux';
import { routeNodeSelector } from 'redux-router5';

import styles from './Home.css';

function Home( props) {

    const { route } = props;

    return (
        <div className={styles.home} >

            <h1>Home</h1>
            
        </div>
    );
}

export default connect(
    routeNodeSelector('home')
)(Home);
