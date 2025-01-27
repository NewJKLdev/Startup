const express = require('express')
const app = express()
const port = 3001

var redis = require("redis");
    client = redis.createClient();

const { promisify } = require("util");
const getAsync = promisify(client.get).bind(client); 

app.get('/jobs', async (req, res) => {
    const jobs = await getAsync('github');
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    return res.send(jobs)
})
app.set('port', process.env.PORT || 3000);

app.listen(port, function(){
console.log(`App listening on ${port}!`);
});