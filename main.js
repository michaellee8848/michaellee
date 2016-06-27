/**
 * Created by Michael on 2016/6/27.
 */
var express = require("express");
//load express module
var app = express();
//creat an instance of Express application

//process command line argument
//-p port
//-d dir
//-v
var port=3000;
var staticDir = __dirname + "/public";
var version = 1;

var i = 2;
while (i < process.argv.length) {
    switch (process.argv[i]) {
        case "-v":
            console.info("Version :%d", version);
            break;
        case "-p":
            i = i + 1;
            port = process.argv[i];
            break;
        case "-d":
            i = i + 1;
            staticDir = process.argv[i];
            break;
        default:
    }
    i = i + 1;
}

//use public directo for static files
app.use (express.static(staticDir));

app.set("port", port);

app.use(
    express.static(__dirname + "/public")
);
//use this directory for static files.
//use public directory for static files
//we use "/" for directory, avoid conflict in linux environment

console.info("__dirname: %s", __dirname);
// %s replace it with a string
//dirname tells the path of main.js, referrence to the positon of the main program, the directory contains the main file.

for (var i = 0; i < process.argv.length; i++)
    console.info("argv: %d = %s", i, process.argv[i]);
//%d for the i, and %s for the process.argv[i]. first to the first, second to the second

var name = "fred";

//set a port
app.set("port",
     process.argv[2]  || 3000);
//start the server on port
//the current process, give me the second argument.


app.listen(
    app.get("port"),
    function() {
        console.info("applicatoin started on port" + app.get("port"));
        //the two expresss are the same
        console.info("application started on port %d", app.get("port"));
    //    %d: inteprete it as a number, replace it with the "%d"
        
        console.info("application written by %s on port %d", name, app.get("port"));
    }
)








