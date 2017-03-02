app.service('URLVars', ['$location', function($location){

	 var host = "http://127.0.0.1" + ":3000/";

	 this.templateUrl = {
         chatBotTemplateUrl:host + "app/directives/templates/chat-bot.html",
         chatBotTemplateMsgs:host + "app/directives/templates/chat-msgs.html",
	 }

     this.soundUrl = {
     	bot:host + "sound/bot.mp3",
     	user:host + "sound/user.mp3"
     }
     this.suggestionTemplateUrl = {
     	option:host + "app/directives/templates/option.html",
     	list:host + "app/directives/templates/list.html",
     	user_card:host + "app/directives/templates/user_card.html"
     }
     this.sokectsUrl = {
     	bot:host + "sockets/bot"
     }
	
}])