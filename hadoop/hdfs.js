
var WebHDFS = require('webhdfs');

var hdfs = WebHDFS.createClient({
  user: 'root', 
  host: 'localhost', 
  port: 9870,
  path: '/nodejsfile'
});

module.exports = hdfs;