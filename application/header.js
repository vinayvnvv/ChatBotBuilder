module.exports = {

  db:{
  	url: (!process.env.PORT ? "mongodb://localhost:27017/bot" : "mongodb://vinay:12345@ds121896.mlab.com:21896/bot")
  },

  responseTimeout: 1700,

  collections: {
    track:"track",
    templates: "templates",
    module:function(id) {
    	return "module_" + id;
    },
    msgs:function(id) {
    	return "msgs_" + id;
    }
  }
  
}