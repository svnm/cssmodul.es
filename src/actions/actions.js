import fetch from 'isomorphic-fetch'

export const REQUEST_MODULES = 'REQUEST_MODULES'
export const RECEIVE_MODULES = 'RECEIVE_MODULES'
export const RECEIVE_MODULE_DETAILS = 'RECEIVE_MODULE_DETAILS'


function requestModules(keyword) {
  return {
    type: REQUEST_MODULES,
    keyword
  }
}

/* all modules */

function receiveModules(keyword, json) {
  
  const items = json.modules.rows.map( (c,k) => {
    return { 
      keyword: c.key[0],
      title: c.key[1],
      description: c.key[2]
    };
  })

  return {
    type: RECEIVE_MODULES,
    items: items,
    receivedAt: Date.now()
  }
}

export function fetchModules(keyword) {
  return dispatch => {
    dispatch(requestModules(keyword))
    return fetch('http://127.0.0.1:3000/api/modules?keyword=css-module')
      .then(req => req.json())
      .then(json => dispatch(receiveModules(keyword, json)))
  }
}

/* module details */

function receiveModuleDetails(json) {
  return {
    type: RECEIVE_MODULE_DETAILS,
    item: json.module,
    starCount: json.starCount,
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
