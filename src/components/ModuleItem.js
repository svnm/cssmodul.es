import React from 'react'
import styles from './ModuleItem.css'
import marked from 'marked'

function ModuleItem(props) {

    const { name, repoLink, author, readme } = props.item

    let authorName = null
    if(author !== undefined){
      if(author.name !== undefined){
        authorName = author.name
      }
    }

    return (

      <div className={styles.item}>

        { 
          name && repoLink &&
            <a target='_blank' className={styles.link} href={repoLink}>
              <h2 className={styles.name}>{name} </h2>
            </a>
        }

        <i className='fa fa-3x fa-star' />
        <span className={styles.count}> {props.starCount} </span>
 
        { 
          authorName &&
            <h2 className={styles.authorName}>by {authorName} </h2>        
        }
        
        {
          readme &&
          <div dangerouslySetInnerHTML={{__html: marked(readme) }} />
        }

      </div>

    );
}

export default ModuleItem;
