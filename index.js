const core = require('@actions/core')
const github = require('@actions/github')
const http = require('http')

try {

  const country = core.getInput("country").replace(/\s/g,"+")

  console.log("Country: " + country)

  http.get('http://universities.hipolabs.com/search?country=' + country, (resp) => {
    let data = ''

    resp.on('data', (chunk) => {
      data += chunk
    });

    resp.on('end', () => {
      var dataJSON = JSON.parse(data)
      for(university in dataJSON) {
        console.log(dataJSON[university].name + " - " + dataJSON[university].web_pages)
      }
    });
  }).on("error", (err) => {
    console.log("Error: " + err.message)
  });
} catch (error) {
  core.setFailed(error.message)
}
