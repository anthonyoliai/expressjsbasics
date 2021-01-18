const http = require('http')
const fs = require('fs')

// The HTTP module has a createServer method, which takes 1 argument.
// 1. Callback, which has two arguments, the request and the response.
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' })
    const homePageHTML = fs.readFileSync('node.html')
    res.write(homePageHTML)
    res.end()
  } else if (req.url === '/nodejs.png') {
    res.writeHead(200, { 'content-type': 'image/png' })
    const image = fs.readFileSync('nodejs.png')
    res.write(image)
    res.end()
  } else if (req.url === '/styles.css') {
    res.writeHead(200, { 'content-type': 'text/css' })
    const css = fs.readFileSync('styles.css')
    res.write(css)
    res.end()
  } else {
    res.writeHead(404, { 'content-type': 'text/html' })
    res.write('<h4>Sorry, this is not the page you are looking for</h4>')
    res.end()
  }
  // Get stuff out of the request ob ject and add stuff to the response object
  //Respond to the requester
})

//createServer returns an object with a listen method. The listen method takes one argument, on which port it has to listen.
server.listen(3000)
