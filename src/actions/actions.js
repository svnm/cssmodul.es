import fetch from 'isomorphic-fetch'

export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const SELECT_ITEM = 'SELECT_ITEM'


function requestModules(keyword) {
  return {
    type: REQUEST_POSTS,
    keyword
  }
}

function receiveModules(keyword, json) {
  
  const items = json.modules.rows.map( (c,k) => {
    return { 
      keyword: c.key[0],
      title: c.key[1],
      description: c.key[2]
    };
  })

  return {
    type: RECEIVE_POSTS,
    items: items,
    receivedAt: Date.now()
  }
}

export function fetchModules(keyword) {
  return dispatch => {
    dispatch(requestModules(keyword))
    return fetch('http://127.0.0.1:3000/api/modules?keyword=react-component')
      .then(req => req.json())
      .then(json => dispatch(receiveModules(keyword, json)))
  }
}


function receiveModuleDetails(json) {

  return {
    type: SELECT_ITEM,
    item: json.module,
    receivedAt: Date.now()
  }
}


export function fetchModuleDetails(name) {
  return dispatch => {
    return fetch('http://127.0.0.1:3000/api/moduleDetails?module=' + name)
      .then(req => req.json())
      .then(json => dispatch(receiveModuleDetails(json)))
  }
}
