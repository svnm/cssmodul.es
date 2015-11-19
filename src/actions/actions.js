import fetch from 'isomorphic-fetch'

export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'


function requestPosts(reddit) {
  return {
    type: REQUEST_POSTS,
    reddit
  }
}

function receivePosts(reddit, json) {

  const items = json.components.rows.map( (c,k) => {
    return { 
      keyword: c.key[0],  
      title: c.key[1],  
      description: c.key[2]
    };
  })

  return {
    type: RECEIVE_POSTS,
    reddit,
    components: items,
    receivedAt: Date.now()
  }
}

export function fetchPosts(reddit) {
  return dispatch => {
    dispatch(requestPosts(reddit))

    return fetch('http://127.0.0.1:3000/api/books?keyword=react-component')
      .then(req => req.json())
      .then(json => dispatch(receivePosts(reddit, json)))
  }
}
