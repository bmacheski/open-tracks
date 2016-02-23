import fetch from 'isomorphic-fetch'
import { client_id } from '../../../secrets'

const base = '//api.soundcloud.com/tracks?linked_partitioning=1&client_id='
const options = '&limit=20&offset=0&q='

const scUrl = `${base}${client_id}${options}`

function updateQuery(query) {
  return {
    type: 'UPDATE_QUERY',
    query: query
  }
}

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
    dispatch(updateQuery(query))
    return fetch(`${scUrl}${query}`)
      .then(response => response.json())
      .then(json => dispatch(receiveSongs(query, json)))
  }
}
