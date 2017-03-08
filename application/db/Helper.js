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

    this.trackStatus = function(uuid, callback_suc, callback_err) {  // return true if tracking exists, otherwise returns false
    	console.log("tracking status...")
      
      MongoClient.connect(header.db.url, function(err, db) {
		  
		  assert.equal(null, err);
		  if(err) return callback_err(err);
		   var collection = db.collection(header.collections.track);
				  collection.find({"uuid":uuid}).toArray( function(err, doc) {
				  	if(doc.length == 0) return callback_suc(false, null);
				  	if(err) return callback_err(err);
				  	if(doc[0].cleared == 'false' || doc[0].cleared == false) return callback_suc(true, doc[0]);
				  	else return callback_suc(false, doc[0]);
				});
			});

    }

    this.constructTrackModel = function(model) {
    	console.log("constructing track model")
    	console.log(model)
	    var doc = {};
	    if(model.uuid != undefined ) 			doc.uuid = model.uuid;
	    if(model.client_id != undefined )  		doc.client_id = model.client_id;
	    if(model.module_id != undefined ) 		doc.module_id = model.module_id;
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

    this.insertTrack = function(uuid, c_id, callback_suc, callback_err) {
    	var doc_ = {
    		   "uuid":uuid,
               "client_id":c_id,
               "module_id":"",
               "current_module":"init",
               "validated":"true",
               "answers":[],
               "cleared":"false"
           };
       MongoClient.connect(header.db.url, function(err, db) {
		  
		  assert.equal(null, err);
		  if(err) return callback_err(err);
		   var collection = db.collection(header.collections.track);
				  collection.insert(
				  	doc_,
				    function(err, res) {

					  	if(err) { return callback_err(err); }
					  	else    { console.log("updated track info that bot is init with init msg");
					  	          return callback_suc(true); 
					  	        }
				});
			});
    }

    this.getInitModule = function(c_id, callback_suc, callback_err) {
    	MongoClient.connect(header.db.url, function(err, db) {
		  
		  assert.equal(null, err);
		  if(err) return callback_err(err);
		   var collection = db.collection(header.collections.module(c_id));
				  collection.find({"type":"init"}).toArray( function(err, doc) {
				  	if(err) return callback_err(err);
				  	else return callback_suc(doc[0]);
				});
			});
    }

    this.generateModuleForWeb = function(module_) {
    	console.log(module_)
    	var module = {};
    	if(module_.msg!= undefined && module_.msg!= null)                module.msg = module_.msg; 
    	if(module_.beforeMsg!= undefined && module_.beforeMsg!= null) 
    		 if(module_.beforeMsg.length != 0)                           module.beforeMsg = module_.beforeMsg;
        if(module_.afterMsg!= undefined && module_.afterMsg!= null) 
    		 if(module_.afterMsg.length != 0)                            module.afterMsg = module_.afterMsg;
        if(module_.shortcut != undefined && module_.shortcut != null) {
															        	 module.shortcut = module_.shortcut;
															        	 module.shortcutData = module_.shortcutData;
       																  } 
        return {"module":module};  																  		 		
    }



 }

 module.exports = Helper;