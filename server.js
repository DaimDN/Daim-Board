const express = require('express');
const app = express();
const cors = require('cors');
const connection = require('./config/dbconnector');
const chalk = require('chalk');
const config = require('config');
const hdfs = require('./hadoop/hdfs');
const fastcsv = require("fast-csv");
const fs = require("fs");
const csv=require('csvtojson')

connection.connect(function(err){

    if(err) throw err;

    connection.query("CREATE DATABASE Dashboard", function(err, result){        
        console.log("Database Created successfully");
    });

    console.log("..................................")
    console.log(chalk.bgGreen("Successfully connected to Databases"));
})


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.set('view engine', 'ejs');
app.use(cors());
app.use('/', require('./Routes/Routing'));


if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }

app.use(function(req, res, next){
    res.status(404);
    if(req.accepts('json')){
        res.json(errormessage);
    }
    if(req.accepts('html')){
        res.render('error');
    }
    if(req.accepts('text')){
        res.send(errormessage);
    }
})

//check the files
const date = new Date();
const today = date.toLocaleDateString().split("/").join("");
const path = './files/' + today + ".csv";

  if (fs.existsSync(path)) {
    var filename = path;
    csv()
        .fromFile(filename)
        .then((CsvFileData)=>{
           
            connection.query("SELECT * FROM users", function(error, data, fields) {
                if (error) throw error;
            
                const MYSQLdata = JSON.parse(JSON.stringify(data));
                

                if (MYSQLdata.length == CsvFileData.length){
                    console.log("File is already there");
                    var localFileStream= fs.createReadStream(path);
                    var remoteFileStream = hdfs.createWriteStream(path);
                    
                    localFileStream.pipe(remoteFileStream);
 
                    remoteFileStream.on('error', function onError (err) {
                        console.log("error");
                    });
                    
                    remoteFileStream.on('finish', function onFinish () {
                            console.log("finished");
                    });              
                }
                else{
                    const ws = fs.createWriteStream(path);


                    connection.query("SELECT * FROM users", function(error, data, fields) {
                      if (error) throw error;
                  
                      const jsonData = JSON.parse(JSON.stringify(data));

                      fastcsv
                        .write(jsonData, { headers: true })
                        .on("finish", function() {
                          console.log(path +" path has been written successfully");
                        })
                        .pipe(ws);
                    });
                }
                
        
            });
        
        })
  }else{     
    const ws = fs.createWriteStream(path);


        connection.query("SELECT * FROM users", function(error, data, fields) {
          if (error) throw error;
      
          const jsonData = JSON.parse(JSON.stringify(data));
      
          fastcsv
            .write(jsonData, { headers: true })
            .on("finish", function() {
              console.log(path +" path has been written successfully");
            })
            .pipe(ws);
        });

  }


module.exports = app;