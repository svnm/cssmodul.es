import * as types from '../constants/ActionTypes';

const initialState = {
  resultsAdded: 3,
  results: [ 
    {
      id: 1,
      name: 'react-search',
      starred: false
    },
    {
      id: 2,
      name: 'react-fuzzy-search',
      starred: false
    },
    {
      id: 3,
      name: 'react-search-bar',
      starred: false
    }
  ]
}

export default function friends(state = initialState, action) {

  switch (action.type) {

    case types.FIND_MODULE:
      return state;
      console.log(action.vlake)
      /*
      const starredFriends = state.friends.map(function(friend) {
        if(friend.id === action.id){
          friend.starred = true;
        }
        return friend;
      });

      return {
        ...state,
        friends: starredFriends
      }
      */

    default:
      return state;
  }
}
