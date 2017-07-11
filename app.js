const https = require('https')
const http = require('http');
const routes = require('./routes.js')

const port = 3000;

const server = http.createServer((req, res) => {
    routes.home(req, res)
    routes.bbc(req, res)

    res.on('error', (err)=>{console.error(err)})
});


server.listen(port, () => {
  console.log(`Server running at localhost:/${port}/`);
});


function getData() {
  const APIKey = 'ad1400a20bc04355897d7a2608b2a174'
  const requestAddress = 'https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey='
  const fullReqAdd = requestAddress + APIKey

  const request = https.get(fullReqAdd,
    (res) => {
      let body = ''
      res.on('data', (data)=>{
        body += data.toString()
      })

      res.on('end', ()=> {
        body = JSON.parse(body)
        body.articles.forEach((article)=>{
          const title = article.title
          const description = article.description
          const url = article.url
          const imageUrl = article.urlToImage

          console.log(`BBC reports: ${title}: ${description}`)
        })
      })
    }
  )
}
