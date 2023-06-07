import {promises as fs} from 'fs'
import { createServer } from 'http'

const methodTypes = Object.freeze({
    get: 'GET',
    post: 'POST'
})

const server = createServer(async (req, res)=>{
    if(req.method == methodTypes.get){
        res.setHeader('Content-Type', 'text/plain')
        res.write(await fs.readFile('reqs.txt'))
        res.end()
        return
    }
    
    if(req.method == methodTypes.post){
        let body = [];
        req
        .on('data', (chunk) => {
          body.push(chunk);
        })
        .on('end', async () => {
            body = Buffer.concat(body).toString();
            await fs.appendFile('reqs.txt', `${body}\n`)
            res.end('the text was saved in the file')
        });
        
        return
    }

    console.log(`request: ${req.method} '${req.url}' by ${req.socket.remoteAddress}`)


})

const host = 'localhost',
    port = '5000'

server.listen(port, host, ()=> console.log(`The server is listening on http://${host}:${port}/`))


