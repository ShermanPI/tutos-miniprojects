import {promises as fs} from 'fs'
import { createServer } from 'http'

const methodTypes = Object.freeze({
    get: 'GET',
    post: 'POST'
})

const server = createServer(async (req, res)=>{
    console.log(req.url) // prints out the path od the url
    req.method == methodTypes.get ?
            res.end(await fs.readFile('reqs.txt'))
        :
            await fs.appendFile('reqs.txt', `${req}\n`)
            return res.end('the text was saved in the file')
})

const host = 'localhost',
    port = '5000'

server.listen(port, host, ()=> console.log(`The server is listening on http://${host}:${port}/`))


