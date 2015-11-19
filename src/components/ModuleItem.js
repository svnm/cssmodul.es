import React from 'react';
import styles from './ModuleItem.css';

function ModuleItem(props) {
    const { name, starred, findModule } = props;

    let starClassName = 'fa fa-star-o'
    if(starred){
      starClassName = 'fa fa-star'
    }

    return (

      <li className={styles.item}>
          <div>
            <span>{props.name}</span>
          </div>

          <button className={styles.btnDefault} onClick={() => findModule(props.id)}>
            <i className={starClassName} />
          </button>

      </li>

    );
}

export default ModuleItem;
