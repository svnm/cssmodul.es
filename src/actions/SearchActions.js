import request from 'superagent'
import * as types from '../constants/ActionTypes'


function getModuleData (cb) {

    let url = 'http://127.0.0.1:3000/api/books?';
    url += 'keyword=' + 'react-component';
    const results = [];

    request
    .get(url)
    .end(function(err, res){

        let components = res.body.components.rows;
        console.log(components)

        components.map((r, i) => {
            results.push(r.key[1])
        })

        return cb(results)

    }.bind(this));


}


export function findModule(id) {
  console.log('u found yourself a css module...')
  getModuleData(function (results) {
      
      let vlake = 'yeah'
      return {
        type: types.FIND_MODULE,
        vlake
      };

  })



}
