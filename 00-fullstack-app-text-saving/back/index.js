import { promises as fs } from 'fs'
import { createServer } from 'http'

const methodTypes = Object.freeze({
  get: 'GET',
  post: 'POST'
})

const server = createServer(async (req, res) => {
  //  CORS
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET,POST'
  )
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization'
  )

  if (req.method === methodTypes.get) {
    res.setHeader('Content-Type', 'text/plain')
    res.write(await fs.readFile('reqs.txt', 'utf-8'))
    res.end()
    return
  }

  if (req.method === methodTypes.post) {
    let body = ''
    req.on('data', (chunk) => {
      body += chunk
    })

    req.on('end', async () => {
      await fs.appendFile('reqs.txt', `${body}`)
      res.end('The text was saved in the file')
    })

    return
  }

  console.log(
    `Request: ${req.method} '${req.url}' by ${req.socket.remoteAddress}`
  )
})

const host = 'localhost'
const port = 5000

server.listen(port, host, () => {
  console.log(`The server is listening on http://${host}:${port}/`)
})
