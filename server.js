const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res) => {
  path = req.url == '/' ? '/index.html' : req.url;
  path = 'public' + path;

  res.writeHead(200);
  fs.readFile(path, (err, data) => {
    if (err) {
      res.end()
    } else {
      res.end(data)
    }
  })
})

server.listen(process.env.PORT || 3000, (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('Server running')
  }
})
