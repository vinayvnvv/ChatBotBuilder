module.exports = {

  db:{
  	url: (!process.env.PORT ? "mongodb://localhost:27017/bot" : "mongodb://vinay:vinay123@cluster0-shard-00-00.3zxqu.mongodb.net:27017,cluster0-shard-00-01.3zxqu.mongodb.net:27017,cluster0-shard-00-02.3zxqu.mongodb.net:27017/botflow?ssl=true&replicaSet=atlas-jw92m4-shard-0&authSource=admin&retryWrites=true&w=majority")
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