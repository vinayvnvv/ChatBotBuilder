var BotInitModel = function(data) {
	if(!data) {  //first time init call with null as data values, so that we have to reset it's value
		data = {
			style: {}
		}
	}
	this.bot_name = (data.bot_name ? data.bot_name : "Help Assistant");
	this.msg = (data.msg ? data.msg : ["Welcome!"]);
	this.shortcut = (data.shortcut ? data.shortcut : null);
	this.shortcutData = (data.shortcutData ? data.shortcutData : null);
	this.style = {
		bgcolor: (data.style.bgcolor ? data.style.bgcolor : "#607D8B"),
		color: (data.style.color ? data.style.color : "#ffffff"),
		height: (data.style.height ? data.style.height : "100"),
		width: (data.style.width ? data.style.width : "350px"),
		positionX: (data.style.positionX ? data.style.positionX : "right"),
		positionY: (data.style.positionY ? data.style.positionY : "bottom")
	}
	
};

module.exports = BotInitModel;