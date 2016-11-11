import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.get('/task2C', (req, res) => {
  const url = req.query.username;

  if (url != undefined) {
    const regexp = new RegExp('@?(https?:)?(\/\/)?(www\.)?([^\/]*/)?([a-z\._@]*)');
    const username = url.match(regexp)[5];
    if (username) {
      if (username.charAt(0) == '@') {
        return res.send(username);
      } else {
        return res.send('@' + username);
      }
    }
  }
  return res.send('Invalid username');
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
