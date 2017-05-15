var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var header = require('./../header');
var Utility = new (require('./../services/utility.js')) ();
var DBHelper = new (require('./../db/Helper')) ();
var Validator = new (require('./../services/validator')) ();
var Parser = require('./../services/Parser');
var Strings = require('./../string');
var BotService = require('./../services/BotService');
var MainDB = function() {
   console.log("called MainDB")


   this.matchModule = function(c_id, uuid, query, callback_suc, callback_err) {
   	   console.log("matching module......")


      MongoClient.connect(header.db.url, function(err, db) {
		  
		  assert.equal(null, err);
		  if(err) return callback_err(err);
		   var collection = db.collection(header.collections.module(c_id));
				  collection.find({"type":"flow"}).toArray( function(err, docs) {
				  	var matched = Utility.matchQuery(query, docs);
				  	if(matched == false) {
				  	   console.log("no modules are matched with query:" + query + ", under client id:" + c_id)
                       callback_suc(false)
				  	} else {
				  		console.log("matched module with id:" + matched._id + ", under client_id:" + c_id);
              //update stats
              DBHelper.updateModuleStatsOnMatch(c_id, matched)
				  		console.log(matched.welcome)
				  		//update track details
				  		DBHelper.updateTrack(
				  			  uuid, DBHelper.constructTrackModel( {module_id: matched._id, current_module:"0"} ), 
				  			  function(res) { callback_suc(matched.welcome); }, 
				  			  function(err) {}
				  			  );

				  	}
				});
			});



   }


   this.matchMenu = function(c_id, uuid, query, callback_suc, callback_err) {
       console.log("matching module......")


      MongoClient.connect(header.db.url, function(err, db) {
      
      assert.equal(null, err);
      if(err) return callback_err(err);
       var collection = db.collection(header.collections.module(c_id));
          collection.find({"type":"menu"}).toArray( function(err, docs) {

            console.log("matched*************\n***************\n************", docs)

            var matched = Utility.matchQuery(query, docs);
            console.log("matched", matched);
            
            if(matched == false) {
               console.log("no menu are matched with query:" + query + ", under client id:" + c_id)
                       callback_suc(false)
            } else {
              console.log("matched module with id:" + matched._id + ", under client_id:" + c_id);
              //update stats
              DBHelper.updateModuleStatsOnMatch(c_id, matched)
              callback_suc({msg:Strings.common.selectMenu, shortcut:"list", shortcutData:matched.menus});
            }
        });
      });



   }



   this.getModule = function(track, query, callback_suc, callback_err) {

   	console.log("getting modules....")

   	MongoClient.connect(header.db.url, function(err, db) {

   		 assert.equal(null, err);
		  if(err) return callback_err(err);
		   var collection = db.collection(header.collections.module(track.client_id));

   	    if(track.current_module == 'final') {
   	   	     collection.find({_id:track.module_id}).toArray( function(err, docs) {
             var doc = docs[0];

             if(doc.modules[track.validate].validate != null && doc.modules[track.validate].validate != undefined) {
              console.log("entering for validation...")
                   if(!Validator.isValid(query, doc.modules[track.validate].validate, callback_suc)) {  //not validated , return
                      console.log("validated Errr, Sending Validated Err Msg...")
                      callback_suc({msg:doc.modules[track.validate].validateErrMsg});
                      return;
                   }
              }


              if( query != null || query != undefined ) track.answers.push(query);

              delete track['last_track_details']; //delete last track details from track to update current one



             DBHelper.updateTrack(
             	                   track.uuid,
             	                   DBHelper.constructTrackModel({
             	                   	                             current_module:"init",
             	                   	                             module_id : "",
                                                               answers:[],
                                                               last_track_details:track,
                                                               validate:"0"
             	                   	                           }),
             	                   function(res) {  
                                                  callback_suc(Parser.ansParser(doc.final, track.answers));
                                                  if(doc.services != undefined && doc.services != null) 
                                                    BotService.send(Parser.ansParser(doc.services, track.answers));
                                               },
             	                   function() {}

             	                 );
             
          })


   	   } else {
          console.log("track doc:")
          console.log(track)

   	   	  collection.find({_id:track.module_id}).toArray( function(err, docs) {
             var doc = docs[0];
             console.log(doc)
              //check for validation

            console.log("Validation:" + doc.modules[track.validate].validate)  
             if(doc.modules[track.validate].validate != null && doc.modules[track.validate].validate != undefined) {
              console.log("entering for validation...")
                   if(!Validator.isValid(query, doc.modules[track.validate].validate, callback_suc)) {  //not validated , return
                      console.log("validated Errr, Sending Validated Err Msg...")
                      callback_suc({
                          msg:doc.modules[track.validate].validateErrMsg, 
                          shortcut:doc.modules[track.validate].shortcut,
                          shortcutData:doc.modules[track.validate].shortcutData
                        });
                      return;
                   }
              }
             var cur_modl = Utility.incObj(track.current_module);
             var answers = track.answers;
             if( query != null || query != undefined ) answers.push(query);
             var update_track_obj = {
                                      current_module:cur_modl,
                                      answers:answers,
                                      validate:cur_modl-1
             						};
             if(cur_modl == doc.modules.length) { // check for last module in a array
             	console.log("called last module in a array");
             	update_track_obj.current_module = "final";

             }
             console.log("answers......", answers)
             DBHelper.updateTrack(
             	                   track.uuid,
             	                   DBHelper.constructTrackModel(update_track_obj),
             	                   function(res) {  callback_suc(Parser.ansParser(doc.modules[cur_modl - 1], answers)); },
             	                   function() {}

             	                 );
             
          })

   	   } 

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