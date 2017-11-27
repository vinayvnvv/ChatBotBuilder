var BotFiles = function() {

  this.lib = [
  	"bot/bower_components/sightglass/index.js",
  	"bot/bower_components/rivets/dist/rivets.min.js"
  ];

  this.app_js = [
      "bot/env.js",
      "bot/utilities/*",
      "bot/boot.js",
      "bot/root.js"
  ];

  this.js = this.lib.concat(this.app_js);
    


}


module.exports = BotFiles;