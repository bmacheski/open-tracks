import axios from 'axios'
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

function receiveSongs(query, songs) {
  return {
    type: 'RECEIVE_SONGS',
    query: query,
    songs: songs
  }
}

function requestSongs(query) {
  return {
    type: 'REQUEST_SONGS',
    query: query
  }
}

export function fetchSongs(query) {
  return dispatch => {
    dispatch(requestSongs(query))
    dispatch(updateQuery(query))
    return axios
      .get(`${scUrl}${query}`)
      .then(response => response.data.collection)
      .then(res => dispatch(receiveSongs(query, res)))
  }
}
