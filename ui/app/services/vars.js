app.service('URLVars', ['$rootScope', '$location', function($rootScope, $location){

	 console.log("called Vars Service");

	 this.templateUrl = {
         chatBotTemplateUrl:"http://127.0.0.1:3000/app/directives/templates/chat-bot.html",
         chatBotTemplateMsgs:"http://127.0.0.1:3000/app/directives/templates/chat-msgs.html",
	 }

     this.soundUrl = {
     	bot:"http://127.0.0.1:3000/sound/bot.mp3",
     	user:"http://127.0.0.1:3000/sound/user.mp3"
     }
     this.suggestionTemplateUrl = {
     	option:"http://127.0.0.1:3000/app/directives/templates/option.html",
     	list:"http://127.0.0.1:3000/app/directives/templates/list.html",
     	user_card:"http://127.0.0.1:3000/app/directives/templates/user_card.html"
     }
	
}])