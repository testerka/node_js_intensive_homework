'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.use((0, _cors2.default)());
app.get('/task2A', function (req, res) {
    var a = req.query.a;
    var b = req.query.b;
    if (a != undefined && b != undefined) {
        return res.send('' + (+a + +b));
    } else if (a != undefined || b != undefined) {
        return res.send(a != undefined ? a : b);
    } else {
        return res.send('0');
    }
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

//# sourceMappingURL=index-compiled.js.map