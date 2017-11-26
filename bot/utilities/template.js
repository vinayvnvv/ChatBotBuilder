function __c_b_envTemplateAttachByUrl(url, el, callback) {
	__c_b_env.http.get(url, function(res) {
		el.innerHTML = res;
		if(callback) callback();
	}, function(err) {
		console.log(err);
	})
}

__c_b_env.template = {
	attachByUrl: __c_b_envTemplateAttachByUrl
}