import React from 'react'
import styles from './ModuleItem.css'
import marked from 'marked'
import CSSModules from 'react-css-modules'

function ModuleItem(props) {
    const { name, repoLink, author, readme } = props.item

    let authorName = null
    if(author !== undefined){
      if(author.name !== undefined){
        authorName = author.name
      }
    }

    return (

      <div styleName='item'>
        {
          name && repoLink &&
            <a target='_blank' styleName='link' href={repoLink}>
              <h2 styleName='name'>{name} </h2>
            </a>
        }

        <i className='fa fa-3x fa-star' />
        <span styleName='count'> {props.starCount} </span>

        {
          authorName &&
            <h2 styleName='authorName'>by {authorName} </h2>
        }

        {
          readme &&
          <div dangerouslySetInnerHTML={{__html: marked(readme) }} />
        }

      </div>
    );
}

export default CSSModules(ModuleItem, styles)
