var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var header = require('./../header');


var DBMsgs = function() {

	this.getMsgs = function(uuid, limit, page, success_callback, error_callback) {

		console.log("getting msgs for : " + uuid);

		limit = ( (limit!=undefined && limit!= null) ? limit : 10);
		var page = ( (page!=undefined && page!= null) ? page : 1);
		var skipTo = limit*(page-1);

		MongoClient.connect(header.db.url, function(err, db) {
		  
		  assert.equal(null, err);
		  if(err) return callback_err(err);
		   var collection = db.collection(header.collections.msgs(uuid));
		   console.log(collection)
				  collection.find().sort({$natural:-1}).limit(limit).skip(skipTo).toArray( function(err, docs) {
				  	console.log(docs)
				  	 if(err) { error_callback(err); return }

                     success_callback(docs);
				  	
				});
			});

	}
   
}


module.exports = new DBMsgs();