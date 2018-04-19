var AWS = require('aws-sdk');
// Set the region
AWS.config.update({
  region: "ap-southeast-2",
  endpoint: "http://localhost:8000"
});

// Create the DynamoDB service object
    ddb = new AWS.DynamoDB({apiVersion: '2012-10-08'});
//ddb = new AWS.DynamoDB({apiVersion: '2012-10-08'},{endpoint: 'http://localhost:8000'});

// Call DynamoDB to retrieve the list of tables
ddb.listTables({Limit: 10}, function(err, data) {
  if (err) {
    console.log("Error", err.code);
  } else {
    console.log("Table names are ", data);
  }
});