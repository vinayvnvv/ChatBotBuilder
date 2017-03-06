var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var header = require('./../header');


 var Helper = function() {

    this.isCollectionExists = function(collection_, callback_suc, callback_err) {  //returns true if colllection having docs or returns false

    	MongoClient.connect(header.db.url, function(err, db) {
		  
		  assert.equal(null, err);
		  if(err) return callback_err(err);
		   var collection = db.collection(collection_);
				  collection.count(function(err, count) {
				  	if(err) return callback_err(err);
				  	if(count > 0) return callback_suc(true);
				  	else return callback_suc(false);
				});
			});
    }

    this.isTrack = function(uuid, callback_suc, callback_err) {  // return true if tracking exists, otherwise returns false
      
      MongoClient.connect(header.db.url, function(err, db) {
		  
		  assert.equal(null, err);
		  if(err) return callback_err(err);
		   var collection = db.collection(header.collections.track);
				  collection.find({"uuid":uuid}).toArray( function(err, doc) {
				  	console.log(doc)
				  	if(err) return callback_err(err);
				  	if(doc[0].cleared == 'false' || doc[0].cleared == false) return callback_suc(true);
				  	else return callback_suc(false);
				});
			});

    }

    this.constructTrackModel = function(model) {
	    var doc = {};
	    if(model.uuid != undefined ) 			doc.uuid = model.uuid;
	    if(model.client_id != undefined )  		doc.client_id = model.client_id;
	    if(model.flow_id != undefined ) 		doc.flow_id = model.flow_id;
	    if(model.cleared != undefined ) 		doc.cleared = model.cleared;
	    if(model.current_module != undefined )  doc.current_module = model.current_module;
	    if(model.validated != undefined ) 		doc.validated = model.validated;
	    if(model.answers != undefined ) 		doc.answers = model.answers;

       	return doc;
   
    }

    this.updateTrack = function(uuid, doc, callback_suc, callback_err) {
       MongoClient.connect(header.db.url, function(err, db) {
		  
		  assert.equal(null, err);
		  if(err) return callback_err(err);
		   var collection = db.collection(header.collections.track);
				  collection.update(
				  	{"uuid":uuid},
				  	{$set:doc},
				    function(err, res) {
					  	console.log(res.result)
					  	if(err) return callback_err(err);
					  	else return callback_suc(res.result);
				});
			});
    }




 }

 module.exports = Helper;