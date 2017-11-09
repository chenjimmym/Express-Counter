var express = require("express");
var session = require("express-session");
var app = express();

app.use(session({secret: "codingdojorocks"}));

app.get('/', function(request, response) {
    request.session.count += 1;
    console.log(request.session.count);
    response.send(`<h1>Counter</h1><p>${request.session.count} times.</p>`);
})

app.listen(8000, function() {
    console.log("nihao, listenning from port 8000!");
})