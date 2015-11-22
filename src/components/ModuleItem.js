import React from 'react';
import styles from './ModuleItem.css';

function ModuleItem(props) {

    const { name, author } = props.item

    return (

      <div className={styles.item}>

        <span>{name}</span>
        <span>{author.name}</span>        
        
        { /*
        <button className={styles.btnDefault} onClick={() => findModule(props.id)}>
          <i className='fa fa-star' />
        </button>
        */}

      </div>

    );
}

export default ModuleItem;
