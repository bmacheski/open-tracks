import fetch from 'isomorphic-fetch'

const base = '//api.soundcloud.com/tracks?linked_partitioning=1&client_id='
const options = '&limit=20&offset=0&q='
const clientID = '8ca138fc92a12343bd9e25b297b5d35e'
const scUrl = `${base}${clientID}${options}`

function receiveSongs(query, json) {
  return {
    type: 'RECEIVE_SONGS',
    query: query,
    songs: json.collection
  }
}

function requestSongs(query) {
  return {
    type: 'REQUEST_SONGS',
    query: query
  }
}

export default function fetchSongs(query) {
  return dispatch => {
    dispatch(requestSongs(query))
    return fetch(`${scUrl}${query}`)
      .then(response => response.json())
      .then(json => dispatch(receiveSongs(query, json)))
  }
}
