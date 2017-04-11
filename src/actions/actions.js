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
  console.log(json)

  const items = json.results.map( (r,k) => {
    return {
      keyword: r.package.keywords ? r.package.keywords[0] : '',
      title: r.package.name,
      description: r.package.description
    }
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
    return fetch(`https://api.npms.io/v2/search?q=${keyword}`)
      .then(req => req.json())
      .then(json => dispatch(receiveModules(keyword, json)))
  }
}

/* module details */

function receiveModuleDetails(json) {
  console.log(json)
  let starCount = json.collected.github
    ? json.collected.github.starsCount
    : json.collected.npm.starsCount
  return {
    type: RECEIVE_MODULE_DETAILS,
    item: json.collected.metadata,
    starCount: starCount,
    receivedAt: Date.now()
  }
}

export function fetchModuleDetails(name) {
  return dispatch => {
    dispatch(requestModules(name))
    return fetch(`https://api.npms.io/v2/package/${name}`)
      .then(req => req.json())
      .then(json => dispatch(receiveModuleDetails(json)))
  }
}
