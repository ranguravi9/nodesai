let express = require('express');

let app = express();

app.get('/',(req, res)=> {
    res.send("mysql connextion soon...!");
});

app.get('/saiteja',(req, res)=> {
    res.send("saiteja route");
});

app.get('/raviteja',(req, res)=> {
    res.send("raviteja route");
});

app.get('/raviteja',(req, res)=> {
    res.send("raviteja route");
});
app.listen(8080);
console.log('listen on 8080');