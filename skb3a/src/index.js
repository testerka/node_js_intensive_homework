import express from 'express';
import cors from 'cors';
require('es6-promise').polyfill();
require('isomorphic-fetch');

const app = express();
app.use(cors());


const baseUrl = "/task3A";
const pcUrl = 'https://gist.githubusercontent.com/isuvorov/ce6b8d87983611482aac89f6d7bc0037/raw/pc.json';
let pc = {};
fetch(pcUrl)
  .then(async (res) => {
    pc = await res.json();

    generateRoutersRecursive(baseUrl, pc);
  })
  .catch(err => {
    console.log('Чтото пошло не так:', err);
  });


function generateRoute(url, value) {
  console.log('generate route ' + url);
  app.get(url, (req, res) => {
    return res.json(value);
  });
}


function generateRoutersRecursive(url, parrent) {
  if (parrent) {
    generateRoute(url, parrent);
    let keys = Object.keys(parrent);
    if (keys.length > 1) {
      keys.forEach(x => {
        generateRoutersRecursive(url + "/" + x, parrent[x]);
      });
    }


    if (false) {
      generateRoute(baseUrl + "/volumes")
    }

  }
}

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
