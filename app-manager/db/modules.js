var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var header = require('./../../application/header');
var Model = require('./../models/models');
var Service = require('./../services/services')

var Modules = function() {

	this.get = function(id, success_callback, error_callback) {

		MongoClient.connect(header.db.url, function(err, db) {
		  
		  assert.equal(null, err);
		  if(err) return callback_err(err);
		   var collection = db.collection(header.collections.module(id));
				  collection.find( {"type": { $ne:"init" } } ).toArray( function(err, docs) {
				  	console.log("docs>>>>>>>>>>>>", docs)
				  	 if(err) { error_callback(err); return }

                     success_callback(docs);
				  	
				});
			});

	}

	this.getInit = function(id, success_callback, error_callback) {

		MongoClient.connect(header.db.url, function(err, db) {
		  
		  assert.equal(null, err);
		  if(err) return callback_err(err);
		   var collection = db.collection(header.collections.module(id));
				  collection.find( {"type": "init"} ).toArray( function(err, docs) {
				  	console.log("docs>>>>>>>>>>>>", docs)
				  	 if(err) { error_callback(err); return }

                     success_callback(docs);
				  	
				});
			});

	}






	this.create = function(id, doc, success_callback, error_callback) {
  
        if(doc.type == 'flow') {   //check model validity for flows
			        if((doc = Model.modules_insert(doc)) == false) { 
			        	error_callback('insert flow error');
			        	return;
			        }
   		 } else if(doc.type == 'menu') {  //check model validity for MENUS
   		 	 		if((doc = Model.menu_insert(doc)) == false) {  
			        	error_callback('insert menu error');
			        	return;
			        }
   		 } else {
   		 		    error_callback('insert error');
			        return;
   		 }

        //add timestamp
        doc.timestamp_created = Service.getCreatedTimeStamp();
        doc.timestamp_updated = Service.getUpdatedTimeStamp();

		MongoClient.connect(header.db.url, function(err, db) {
		  
		  assert.equal(null, err);
		  if(err) return callback_err(err);
		   var collection = db.collection(header.collections.module(id));
				  collection.insert(doc,  function(err, result) {
				  	 if(err) { error_callback(err); return }
				  	 
                     success_callback(result);
				  	
				});
			});

	}


	this.update = function(id, module_id, doc, success_callback, error_callback) {

		console.log(module_id)
  
        // if((doc = Model.modules_insert(doc)) == false) {  //check model validity
        // 	error_callback('insert modeule error');
        // 	return;
        // }

        //upadte time stamp
        doc.timestamp_updated = Service.getUpdatedTimeStamp();

		MongoClient.connect(header.db.url, function(err, db) {
		  
		  assert.equal(null, err);
		  if(err) return callback_err(err);
		   var collection = db.collection(header.collections.module(id));
				  collection.update(
				  	        {"_id": ObjectId(module_id)},
				  	        { $set : doc },
				  	        function(err, result) {
							  	 if(err) { error_callback(err); return }
			                     success_callback(result);
								}
							);
			});

	}


	this.updateInit = function(id, doc, success_callback, error_callback) {

       console.log("initializing bot", id) ;
        // if((doc = Model.modules_insert(doc)) == false) {  //check model validity
        // 	error_callback('insert modeule error');
        // 	return;
        // }

        //upadte time stamp
        doc.type="init";
        doc.timestamp_updated = Service.getUpdatedTimeStamp();

		MongoClient.connect(header.db.url, function(err, db) {
		  
		  assert.equal(null, err);
		  if(err) return callback_err(err);
		   var collection = db.collection(header.collections.module(id));
				  collection.update(
				  	        {"type": "init"},
				  	        { $set: doc },
				  	        { upsert:true },
				  	        function(err, result) {
							  	 if(err) { error_callback(err); return }
			                     success_callback(result);
								}
							);
			});



	}



}


module.exports = new Modules();