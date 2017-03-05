var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var header = require('./../header');


 var Helper = function() {

    this.isCollectionExists = function(collection, callback_suc, callback_err) {  //returns true if colllection having docs or returns false

    	MongoClient.connect(header.db.url, function(err, db) {
		  
		  assert.equal(null, err);
		  if(err) return callback_err(err);
		   var collection = db.collection("a");
				  collection.count(function(err, count) {
				  	if(err) return callback_err(err);
				  	if(count > 0) return callback_suc(true);
				  	else return callback_suc(false);
				});
			});
    }


 }

 module.exports = Helper;