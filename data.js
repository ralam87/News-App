const https = require('https')
const sources = require('./sources')

function getData(url, req, res) {
  const APIKey = 'ad1400a20bc04355897d7a2608b2a174'
  const requestAddress = 'https://newsapi.org/v1/articles?source=' + sources.sources[url] + '&sortBy=top&apiKey='
  const fullReqAdd = requestAddress + APIKey
  let body = ''
  let articles = []

  const print = () => {
    articles.toString()
    articles.forEach((article)=>{
      res.write('\n' + article.title)
      res.write('\n' + article.description)
      res.write('\n' + article.url)
      res.write('\n')
    })
    res.end('\ncheck ' + url + ' now')
  }

  https.get(fullReqAdd,(response) => {

    response.on('data', (data)=>{
      body += data
    })

    response.on('end', ()=> {
      body = JSON.parse(body)
      body.articles.forEach((article)=>{

        let fullArticle = {
          title: article.title,
          description: article.description,
          url: article.url,
          imageUrl: article.imageUrl
        }
        articles.push(fullArticle)
      })
      print()
    })
  })
}

module.exports.getData = getData
