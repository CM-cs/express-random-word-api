let express = require('express')
let cors = require('cors')
let app = express()
//const PORT = process.env.PORT || 5000
app.use(cors());

let HTTPresponse = ["abstraction", "agile", "algorithm", "API", "application", "array", "artifact", "assertion", "automata", "bandwidth", "benchmark", "binary", "bioinformatics", "bit", "blacklist", "bitmap", "boolean", "booting", "CPU", "cipher", "client", "closure", "cloud", "collection", "compiler", "computation", "cybersecurity", "concatenation", "concurrency", "conditional", "container", "CSV", "daemon", "database", "debugging", "declaration", "DNS", "domain", "encryption", "ethics", "event", "executable", "exception", "expression", "filter", "gigabyte", "handler", "hardware", "hash", "heap", "heapsort", "identifier", "IDE", "inheritance", "integer", "interface", "interpreter", "invariant", "iteration", "kernel", "library", "linker", "linter", "list", "loader", "logic", "matrix", "memory", "mergesort", "method", "modem", "node", "object", "parameter", "peripheral", "pointer", "postcondition", "precondition", "procedure", "Prolog", "Python", "queue", "quicksort", "radix", "record", "recursion", "reference", "regex", "regression", "router", "scalability", "script", "semantics", "sequence", "serialization", "serializability", "set", "software", "stack", "state", "statement", "storage", "stream", "string", "stylesheet", "subroutine", "syntax", "tree", "user", "variable", "waterfall", "spiderbot"];
let JSONresponse = { "word" : ["abstraction",   "agile",   "algorithm",   "API",   "application",   "array",   "artifact",   "assertion",   "automata",   "bandwidth",   "benchmark",   "binary",   "bioinformatics",   "bit",   "blacklist",   "bitmap",   "boolean",   "booting",   "CPU",   "cipher",   "client",   "closure",   "cloud",   "collection",   "compiler",   "computation",   "cybersecurity",   "concatenation",   "concurrency",   "conditional",   "container",   "CSV",   "daemon",   "database",   "debugging",   "declaration",   "DNS",   "domain",   "encryption",   "ethics",   "event",   "executable",   "exception",   "expression",   "filter",   "gigabyte",   "handler",   "hardware",   "hash",   "heap",   "heapsort",   "identifier",   "IDE",   "inheritance",   "integer",   "interface",   "interpreter",   "invariant",   "iteration",   "kernel",   "library",   "linker",   "linter",   "list",   "loader",   "logic",   "matrix",   "memory",   "mergesort",   "method",   "modem",   "node",   "object",   "parameter",   "peripheral",   "pointer",   "postcondition",   "precondition",   "procedure",   "Prolog",   "Python",   "queue",   "quicksort",   "radix",   "record",   "recursion",   "reference",   "regex",   "regression",   "router",   "scalability",   "script",   "semantics",   "sequence",   "serialization",   "serializability",   "set",   "software",   "stack",   "state",   "statement",   "storage",   "stream",   "string",   "stylesheet",   "subroutine",   "syntax",   "tree",   "user",   "variable",   "waterfall",   "spiderbot"]};

// Gives back a random CS related word like:
// java
app.get("/RandomWord", function(req, res) {
    res.send("please kill me");
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


app.listen(3000, function(){
    console.log("Server started...")
});