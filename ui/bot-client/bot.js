var id_f = document.querySelectorAll('script');
console.log(id_f)
for(i=0;i<id_f.length;i++) {
	if(id_f[i].attributes.getNamedItem('chat-bot-id') != null) {
		id = id_f[i].attributes.getNamedItem('chat-bot-id').value;
		break;
	}
}



if(!id) {
	console.error("Id Error!");
} else {
	startBot();
}

function startBot() {
	link=document.createElement('chat-bot-link');
	link.setAttribute('id', id);
	document.getElementsByTagName('head')[0].appendChild(link);
	loadXMLDoc();
	}



function loadXMLDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    	var s = document.createElement('eee');
        s.innerHTML = this.responseText; // file contains alert("hello!");
        document.body.appendChild(s);
      loadScript();
    }
  };
  xhttp.open("GET", "http://127.0.0.1:3000", true);
  xhttp.send();;
}



function loadScript() { 

  console.log("loading script..")

	var s = document.createElement('script');	
        s.type = "text/javascript";
        s.src = "http://127.0.0.1:3000/build/script.js"; // file contains alert("hello!");
        document.body.appendChild(s);
}