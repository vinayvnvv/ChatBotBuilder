__c_b_app.addService("Helper", function() {


	this.decodeId = function(id) {
	     var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9+/=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/rn/g,"n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}
		 return Base64.decode(id);
  	}


  	this.generateUUID = function () {
	    var d = new Date().getTime();
	    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
	        var r = (d + Math.random()*16)%16 | 0;
	        d = Math.floor(d/16);
	        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
	    });
	    return uuid;
	};
 

	this.setCookie = function(key, value) {
	 	document.cookie = key + "=" + value + "; expires=Fri, 31 Dec 9999 23:59:59 GMT";
	}

	this.getCookie = function(key) {
	    var name = key + "=";
	    var ca = document.cookie.split(';');
	    for(var i = 0; i < ca.length; i++) {
	        var c = ca[i];
	        while (c.charAt(0) == ' ') {
	            c = c.substring(1);
	        }
	        if (c.indexOf(name) == 0) {
	            return c.substring(name.length, c.length);
	        }
	    }
	    return null;

	}

	this.deleteCookie = function(key) {
	    document.cookie = key + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
	};

	this.setUpBotStyle = function(data) {
        console.log("called theme config")
        if(data == null || data == undefined ) return;
        var align = (data.positionX == 'left' ? "left" : "right") + ":0;" + (data.positionY == 'top' ? "top" : "bottom") + ":0";
        console.log("align", align)
        var style = document.createElement('style');
		style.type = 'text/css';
		style.setAttribute(__c_b_app.env.ref.root.style.name, "");
		
                css = `
                       ._c_b_app ._tpbr  { background-color: ` + data.bgcolor +  `; color:` + data.color +  `; }
                       ._c_b_app ._tpbr ._cls path { fill:` + data.color +  `; }
                       ._c_b_app ._fld ._inpt ._fab { background-color: ` + data.bgcolor +  `; color:` + data.color +  `; }
                       ._c_b_app_tglbtn { background-color: ` + data.bgcolor +  `; color:` + data.color +  `; }
                       ._c_b_app ._ic path { fill:` + data.color +  `; }
                       ._c_b_app ._msg ._item { background-color: ` + data.bgcolor +  `; color:` + data.color + `; border-color:` + data.bgcolor + `; }
                       ._c_b_app ._sgtn ._itm:hover { background-color: ` + data.bgcolor +  `; color:` + data.color +  `; }
                       ._c_b_app ._sgtn  { border-color: ` + data.bgcolor + `; }
                       ._c_b_app ._sgtn._option ._itm { border-color: ` + data.bgcolor +  `; color:` + data.bgcolor +  `; }
                       ._c_b_app ._sgtn._option ._itm:hover { background-color: ` + data.bgcolor +  `; color:` + data.color +  `; }
                       ._c_b_app .d{ background-color: ` + data.bgcolor +  `; color:` + data.color +  `; }
                       ._c_b_app .d{ background-color: ` + data.bgcolor +  `; color:` + data.color +  `; }
                       ._c_b_app .d{ background-color: ` + data.bgcolor +  `; color:` + data.color +  `; }
                       ._c_b_app { height:` + data.height +  `%; width:` + data.width +  `; }
                       ._c_b_app { ` + align + ` }
                `;
                        style.innerHTML = css;
        document.getElementsByTagName('head')[0].appendChild(style);
  	}
})