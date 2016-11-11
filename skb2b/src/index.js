import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.get('/task2B', (req, res) => {
    var fullname = req.query.fullname;
    if (fullname != undefined) {
      fullname = fullname.trim();
      if (fullname) {
        fullname = fullname.replace(new RegExp('\\s+', 'g'), ' ');
        if (fullname.length == fullname.replace(new RegExp('[0-9_\/]', 'g'), '').length) {
          fullname = fullname.toLowerCase();

          var nameparts = fullname.split(' ');

          nameparts = nameparts.map(s => {
            return s.charAt(0).toUpperCase() + s.substr(1);
          });

          console.log(fullname);
          console.log(nameparts);

          if (nameparts.length < 4) {
            if (nameparts.length == 3) {
              return res.send(nameparts[2] + ' ' + nameparts[0].substring(0, 1) + '. ' + nameparts[1].substring(0, 1) + '.');
            } else if (nameparts.length == 2) {
              return res.send(nameparts[1] + ' ' + nameparts[0].substring(0, 1) + '.');
            } else if (nameparts.length == 1) {
              return res.send(nameparts[0]);
            }
          }
        }
      }
    }

    return res.send('Invalid fullname');
  }
);


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
