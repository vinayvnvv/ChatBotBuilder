var BotFiles = function() {

  this.lib = [
  	"bot/bower_components/rivets/dist/rivets.bundled.min.js",
  	"bot/bower_components/alight/alight.debug.js"
  ];

  this.al_app_js = [
  	"bot/app/**/*.js"
  ]

  this.app_js = [
      "bot/env.js",
      "bot/utilities/*",
      "bot/boot.js",
      "bot/root.js"
  ];

  this.watch = [
  	"bot/**"
  ]

  this.js = (this.lib.concat(this.al_app_js).concat(this.app_js));
    


}


module.exports = BotFiles;