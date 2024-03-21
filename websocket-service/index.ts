import express from 'express'
import http from 'http'
import WebSocket from 'ws'

const app = express()
const server = http.createServer(app)
const websocketService = new WebSocket.Server({ server })

websocketService.on('connection', (webSocket) => {
  webSocket.on('message', (message) => {
    console.log(`Received message => ${JSON.stringify(message)}`)
    webSocket.send(`Hello, you sent => ${JSON.stringify(message)}`)
  })
  webSocket.send('Hi there, I am a WebSocket server')
})

server.listen(8999, () => {
  console.log('Server started on http://localhost:8999')
})
