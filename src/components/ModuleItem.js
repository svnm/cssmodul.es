import React from 'react'
import styles from './ModuleItem.css'
import marked from 'marked'

function ModuleItem(props) {

    const { name, author, stars, readme } = props.item

    return (

      <div className={styles.item}>

        { 
          name &&
            <h2 className={styles.name}>{name} </h2>        
        }

         <i className='fa fa-star' /><span>13 </span>

        { 
          author.name &&
            <h2 className={styles.authorName}>- {author.name} </h2>        
        }
        
        {
          readme &&
          <div dangerouslySetInnerHTML={{__html: marked(readme) }} />
        }

      </div>

    );
}

export default ModuleItem;
