const http = require('http');
const dataControl = (req,res) => {
    res.write("<h1>Code step by step <h1>");
    res.end();
}

http.createServer(dataControl).listen(5000);