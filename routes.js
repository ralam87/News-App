const data = require('./data.js')
const sources = require('./sources')

function home(req, res) {
  if (req.url === '/') {
    res.statusCode = 200;
    res.write('This is nodeJS\n')
    res.write('I need your clothes boots and your motorcycle\n')
    res.end("I'll be back")
  }
}

function feed(req, res) {
  var url = req.url.slice(1).toLowerCase()
  for (source in sources.sources) {
    if (source === url) {
      res.statusCode = 200
      var test = data.getData(url, req, res)
      res.end('Check ' + url + ' now')
      }
    }
  res.end('Nothing here')
}

module.exports.home = home
module.exports.feed = feed
