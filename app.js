let express = require('express')
let cors = require('cors')
let app = express()
const PORT = process.env.PORT || 5000

app.use(cors());

// Gives back a random CS related word like:
// java
app.get("/RandomWord", function(req, res) {

});

// Functions identically as above
app.post("/RandomWord", function(req, res) {

});

// Gives back a random CS related word like:
// { 'word': 'java' }
// with a content type of application/json
app.get("/RandomWord.json", function(req, res) {

});

// Identical to the above
app.post("/RandomWord.json", function(req, res) {

});


app.listen(PORT, function(){
    console.log("Server started...")
});