var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var header = require('./../header');
var Utility = new (require('./../services/utility.js')) ();
var DBHelper = new (require('./../db/Helper')) ();

var MainDB = function() {
   console.log("called MainDB")


   this.matchModule = function(c_id, uuid, query, callback_suc, callback_err) {
   	   console.log("matching module......")


      MongoClient.connect(header.db.url, function(err, db) {
		  
		  assert.equal(null, err);
		  if(err) return callback_err(err);
		   var collection = db.collection(header.collections.module(c_id));
				  collection.find({"type":{$ne:"init"}}).toArray( function(err, docs) {
				  	var matched = Utility.matchQuery(query, docs);
				  	if(matched == false) {
				  	   console.log("no modules are matched with query:" + query + ", under client id:" + c_id)
                       callback_suc(false)
				  	} else {
				  		console.log("matched module with id:" + matched._id + ", under client_id:" + c_id);
				  		console.log(matched.welcome)
				  		//update track details
				  		DBHelper.updateTrack(
				  			  uuid, DBHelper.constructTrackModel( {module_id: matched._id, current_module:"-1"} ), 
				  			  function(res) { callback_suc(matched.welcome); }, 
				  			  function(err) {}
				  			  );

				  	}
				});
			});



   }

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