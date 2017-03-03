var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var header = require('./../header');

var MainDB = function() {
   console.log("called MainDB")

   var getDoc = function(db, id, callback_suc, callback_err) {
	   db.collection('id' + id).find().toArray(function(err, docs) {
        assert.equal(null, err);
        if(err) { callback_err(err); return }
        callback_suc(docs);
      });
	};

   
   this.getData = function(id, callback) {
   	MongoClient.connect(header.db.url, function(err, db) {
		  
		  assert.equal(null, err);
		  getDoc(
		  	 db, 
		  	 id,
		  	 function(result) {
			  	  callback(result[0]);
			      db.close();
		     }, 
		     function(err) {
		     	  console.log(err)
			  	  //res.json({success:0,msg:err});
			      db.close();
		     }
		   );

		});
   }


}

module.exports = MainDB;