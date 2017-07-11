function home(req, res) {
    if (req.url === '/') {
      res.statusCode = 200;
      res.write('This is nodeJS\n')
      res.write('I need your clothes boots and your motorcycle\n')
      res.end("I'll be back")
  }
}

function bbc(req, res) {
    if (req.url.slice(1).toLowerCase() === 'bbc') {
      res.statusCode = 200
      res.write('Check the BBC for news\n')
      res.end('Check now')
    }
}

module.exports.home = home
module.exports.bbc = bbc
