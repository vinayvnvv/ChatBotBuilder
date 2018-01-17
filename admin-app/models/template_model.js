var TemplateModel = function(template) {
	this.name = ( template.name ? template.name : "Un-Named Template" );
	this.timestamp = {
		updated: new Date(),
		created: new Date()
	};
	this.statastics = {
		used: 0
	};
	this.module = ( template.module ? template.module : {} );

};
module.exports = TemplateModel;