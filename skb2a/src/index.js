import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.get('/task2A', (req, res) => {
    const a = req.query.a;
    const b = req.query.b;
    if (a != undefined && b != undefined) {
        return res.send('' + (+a + +b));
    } else if (a != undefined || b != undefined) {
        return res.send((a != undefined ? a : b));
    }
    else {
        return res.send('0');
    }
})
;


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
