module.exports = {

  db:{
  	url:"mongodb://localhost:27017/bot"
  },

  collections: {
    track:"track",
    module:function(id) {
    	return "module_" + id;
    },
    msgs:function(id) {
    	return "msgs_" + id;
    }
  }
  
}