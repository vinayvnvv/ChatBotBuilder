var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var header = require('./../header');


 var Helper = function() {

    this.isCollectionExists = function(collection, callback_suc, callback_err) {
    	//db.system.namespaces.find( { name: 'test.test' } );
    	MongoClient.connect(header.db.url, function(err, db) {
		  
		  assert.equal(null, err);
		  db.system.namespaces.find( { name: 'test.test' }, function() );
		});
    }


 }

 module.exports = Helper;