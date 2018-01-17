var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var header = require('./../../application/header');
var TemplateModel = require('./../models/template_model');

var Main = function() {

	this.getTemplates = function(success_callback, error_callback) {

		MongoClient.connect(header.db.url, function(err, db) {
		  
		  assert.equal(null, err);
		  if(err) return callback_err(err);
		   var collection = db.collection(header.collections.templates);
				  collection.find().toArray( function(err, docs) {
				  	console.log("docs>>>>>>>>>>>>", docs)
				  	 if(err) { error_callback(err); return }

                     success_callback(docs);
				  	
				});
			});

	}

	this.insertTemplates = function(doc, success_callback, error_callback) {
  
  		if(!doc.module) {
  			error_callback({error: true, message: "insert module field!"});
  			return;
  		}
        var template = new TemplateModel(doc);

		MongoClient.connect(header.db.url, function(err, db) {
		  
		  assert.equal(null, err);
		  if(err) return callback_err(err);
		   var collection = db.collection(header.collections.templates);
				  collection.insert(template,  function(err, result) {
				  	 if(err) { error_callback(err); return }
				  	 
                     success_callback(result);
				  	
				});
			});

	}


	this.updateTemplates = function(id, doc, success_callback, error_callback) {
  		
        if(!doc || !doc.module || !doc.name) {
        	error_callback({error: true, message: "missing fields!"});
  			return;
        }

        doc['timestamp.updated'] = new Date();

		MongoClient.connect(header.db.url, function(err, db) {
		  
		  assert.equal(null, err);
		  if(err) return callback_err(err);
		   var collection = db.collection(header.collections.templates);
				  collection.update(
				  	        {"_id": ObjectId(id)},
				  	        { $set : doc, $inc:{'statastics.used':1} },
				  	        function(err, result) {
							  	 if(err) { error_callback(err); return }
			                     success_callback(result);
								}
							);
			});

	}


	this.removeTemplates = function(id, success_callback, error_callback) {

		MongoClient.connect(header.db.url, function(err, db) {
		  
		  assert.equal(null, err);
		  if(err) return callback_err(err);
		   var collection = db.collection(header.collections.templates);
				  collection.remove(
				  	        {"_id": ObjectId(id)},
				  	        function(err, result) {
							  	 if(err) { error_callback(err); return }
			                     success_callback(result);
								}
							);
			});

	}





}


module.exports = new Main();