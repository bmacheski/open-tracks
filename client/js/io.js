import io from 'socket.io-client'
const host = location.origin.replace(/^http/, 'ws')
export const socket = io(host)
