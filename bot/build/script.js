// Rivets.js + Sightglass.js
// version: 0.9.6
// author: Michael Richards
// license: MIT
(function(){function t(t,s,i,h){return new e(t,s,i,h)}function e(t,e,i,h){this.options=h||{},this.options.adapters=this.options.adapters||{},this.obj=t,this.keypath=e,this.callback=i,this.objectPath=[],this.update=this.update.bind(this),this.parse(),s(this.target=this.realize())&&this.set(!0,this.key,this.target,this.callback)}function s(t){return"object"==typeof t&&null!==t}function i(t){throw new Error("[sightglass] "+t)}t.adapters={},e.tokenize=function(t,e,s){var i,h,a=[],o={i:s,path:""};for(i=0;i<t.length;i++)h=t.charAt(i),~e.indexOf(h)?(a.push(o),o={i:h,path:""}):o.path+=h;return a.push(o),a},e.prototype.parse=function(){var s,h,a=this.interfaces();a.length||i("Must define at least one adapter interface."),~a.indexOf(this.keypath[0])?(s=this.keypath[0],h=this.keypath.substr(1)):("undefined"==typeof(s=this.options.root||t.root)&&i("Must define a default root adapter."),h=this.keypath),this.tokens=e.tokenize(h,a,s),this.key=this.tokens.pop()},e.prototype.realize=function(){var t,e=this.obj,i=!1;return this.tokens.forEach(function(h,a){s(e)?("undefined"!=typeof this.objectPath[a]?e!==(t=this.objectPath[a])&&(this.set(!1,h,t,this.update),this.set(!0,h,e,this.update),this.objectPath[a]=e):(this.set(!0,h,e,this.update),this.objectPath[a]=e),e=this.get(h,e)):(i===!1&&(i=a),(t=this.objectPath[a])&&this.set(!1,h,t,this.update))},this),i!==!1&&this.objectPath.splice(i),e},e.prototype.update=function(){var t,e;(t=this.realize())!==this.target&&(s(this.target)&&this.set(!1,this.key,this.target,this.callback),s(t)&&this.set(!0,this.key,t,this.callback),e=this.value(),this.target=t,(this.value()instanceof Function||this.value()!==e)&&this.callback())},e.prototype.value=function(){return s(this.target)?this.get(this.key,this.target):void 0},e.prototype.setValue=function(t){s(this.target)&&this.adapter(this.key).set(this.target,this.key.path,t)},e.prototype.get=function(t,e){return this.adapter(t).get(e,t.path)},e.prototype.set=function(t,e,s,i){var h=t?"observe":"unobserve";this.adapter(e)[h](s,e.path,i)},e.prototype.interfaces=function(){var e=Object.keys(this.options.adapters);return Object.keys(t.adapters).forEach(function(t){~e.indexOf(t)||e.push(t)}),e},e.prototype.adapter=function(e){return this.options.adapters[e.i]||t.adapters[e.i]},e.prototype.unobserve=function(){var t;this.tokens.forEach(function(e,s){(t=this.objectPath[s])&&this.set(!1,e,t,this.update)},this),s(this.target)&&this.set(!1,this.key,this.target,this.callback)},"undefined"!=typeof module&&module.exports?module.exports=t:"function"==typeof define&&define.amd?define([],function(){return this.sightglass=t}):this.sightglass=t}).call(this);
(function(){var t,e,i,n,r,s=function(t,e){return function(){return t.apply(e,arguments)}},o=[].slice,u={}.hasOwnProperty,l=function(t,e){function i(){this.constructor=t}for(var n in e)u.call(e,n)&&(t[n]=e[n]);return i.prototype=e.prototype,t.prototype=new i,t.__super__=e.prototype,t},h=[].indexOf||function(t){for(var e=0,i=this.length;i>e;e++)if(e in this&&this[e]===t)return e;return-1};t={options:["prefix","templateDelimiters","rootInterface","preloadData","handler","executeFunctions"],extensions:["binders","formatters","components","adapters"],"public":{binders:{},components:{},formatters:{},adapters:{},prefix:"rv",templateDelimiters:["{","}"],rootInterface:".",preloadData:!0,executeFunctions:!1,iterationAlias:function(t){return"%"+t+"%"},handler:function(t,e,i){return this.call(t,e,i.view.models)},configure:function(e){var i,n,r,s;null==e&&(e={});for(r in e)if(s=e[r],"binders"===r||"components"===r||"formatters"===r||"adapters"===r)for(n in s)i=s[n],t[r][n]=i;else t["public"][r]=s},bind:function(e,i,n){var r;return null==i&&(i={}),null==n&&(n={}),r=new t.View(e,i,n),r.bind(),r},init:function(e,i,n){var r,s,o;if(null==n&&(n={}),null==i&&(i=document.createElement("div")),e=t["public"].components[e],s=e.template.call(this,i),s instanceof HTMLElement){for(;i.firstChild;)i.removeChild(i.firstChild);i.appendChild(s)}else i.innerHTML=s;return r=e.initialize.call(this,i,n),o=new t.View(i,r),o.bind(),o}}},window.jQuery||window.$?(i=window.jQuery||window.$,r="on"in i.prototype?["on","off"]:["bind","unbind"],e=r[0],n=r[1],t.Util={bindEvent:function(t,n,r){return i(t)[e](n,r)},unbindEvent:function(t,e,r){return i(t)[n](e,r)},getInputValue:function(t){var e;return e=i(t),"checkbox"===e.attr("type")?e.is(":checked"):e.val()}}):t.Util={bindEvent:function(){return"addEventListener"in window?function(t,e,i){return t.addEventListener(e,i,!1)}:function(t,e,i){return t.attachEvent("on"+e,i)}}(),unbindEvent:function(){return"removeEventListener"in window?function(t,e,i){return t.removeEventListener(e,i,!1)}:function(t,e,i){return t.detachEvent("on"+e,i)}}(),getInputValue:function(t){var e,i,n,r;if("checkbox"===t.type)return t.checked;if("select-multiple"===t.type){for(r=[],i=0,n=t.length;n>i;i++)e=t[i],e.selected&&r.push(e.value);return r}return t.value}},t.TypeParser=function(){function t(){}return t.types={primitive:0,keypath:1},t.parse=function(t){return/^'.*'$|^".*"$/.test(t)?{type:this.types.primitive,value:t.slice(1,-1)}:"true"===t?{type:this.types.primitive,value:!0}:"false"===t?{type:this.types.primitive,value:!1}:"null"===t?{type:this.types.primitive,value:null}:"undefined"===t?{type:this.types.primitive,value:void 0}:""===t?{type:this.types.primitive,value:void 0}:isNaN(Number(t))===!1?{type:this.types.primitive,value:Number(t)}:{type:this.types.keypath,value:t}},t}(),t.TextTemplateParser=function(){function t(){}return t.types={text:0,binding:1},t.parse=function(t,e){var i,n,r,s,o,u,l;for(u=[],s=t.length,i=0,n=0;s>n;){if(i=t.indexOf(e[0],n),0>i){u.push({type:this.types.text,value:t.slice(n)});break}if(i>0&&i>n&&u.push({type:this.types.text,value:t.slice(n,i)}),n=i+e[0].length,i=t.indexOf(e[1],n),0>i){o=t.slice(n-e[1].length),r=u[u.length-1],(null!=r?r.type:void 0)===this.types.text?r.value+=o:u.push({type:this.types.text,value:o});break}l=t.slice(n,i).trim(),u.push({type:this.types.binding,value:l}),n=i+e[1].length}return u},t}(),t.View=function(){function e(e,i,n){var r,o,u,l,h,a,p,d,c,f,b,v,m;for(this.els=e,this.models=i,null==n&&(n={}),this.update=s(this.update,this),this.publish=s(this.publish,this),this.sync=s(this.sync,this),this.unbind=s(this.unbind,this),this.bind=s(this.bind,this),this.select=s(this.select,this),this.traverse=s(this.traverse,this),this.build=s(this.build,this),this.buildBinding=s(this.buildBinding,this),this.bindingRegExp=s(this.bindingRegExp,this),this.options=s(this.options,this),this.els.jquery||this.els instanceof Array||(this.els=[this.els]),c=t.extensions,h=0,p=c.length;p>h;h++){if(o=c[h],this[o]={},n[o]){f=n[o];for(r in f)u=f[r],this[o][r]=u}b=t["public"][o];for(r in b)u=b[r],null==(l=this[o])[r]&&(l[r]=u)}for(v=t.options,a=0,d=v.length;d>a;a++)o=v[a],this[o]=null!=(m=n[o])?m:t["public"][o];this.build()}return e.prototype.options=function(){var e,i,n,r,s;for(i={},s=t.extensions.concat(t.options),n=0,r=s.length;r>n;n++)e=s[n],i[e]=this[e];return i},e.prototype.bindingRegExp=function(){return new RegExp("^"+this.prefix+"-")},e.prototype.buildBinding=function(e,i,n,r){var s,o,u,l,h,a,p;return h={},p=function(){var t,e,i,n;for(i=r.match(/((?:'[^']*')*(?:(?:[^\|']*(?:'[^']*')+[^\|']*)+|[^\|]+))|^$/g),n=[],t=0,e=i.length;e>t;t++)a=i[t],n.push(a.trim());return n}(),s=function(){var t,e,i,n;for(i=p.shift().split("<"),n=[],t=0,e=i.length;e>t;t++)o=i[t],n.push(o.trim());return n}(),l=s.shift(),h.formatters=p,(u=s.shift())&&(h.dependencies=u.split(/\s+/)),this.bindings.push(new t[e](this,i,n,l,h))},e.prototype.build=function(){var e,i,n,r,s;for(this.bindings=[],i=function(e){return function(n){var r,s,o,u,l,h,a,p,d,c,f,b,v;if(3===n.nodeType){if(l=t.TextTemplateParser,(o=e.templateDelimiters)&&(p=l.parse(n.data,o)).length&&(1!==p.length||p[0].type!==l.types.text)){for(d=0,f=p.length;f>d;d++)a=p[d],h=document.createTextNode(a.value),n.parentNode.insertBefore(h,n),1===a.type&&e.buildBinding("TextBinding",h,null,a.value);n.parentNode.removeChild(n)}}else 1===n.nodeType&&(r=e.traverse(n));if(!r)for(v=function(){var t,e,i,r;for(i=n.childNodes,r=[],t=0,e=i.length;e>t;t++)u=i[t],r.push(u);return r}(),c=0,b=v.length;b>c;c++)s=v[c],i(s)}}(this),s=this.els,n=0,r=s.length;r>n;n++)e=s[n],i(e);this.bindings.sort(function(t,e){var i,n;return((null!=(i=e.binder)?i.priority:void 0)||0)-((null!=(n=t.binder)?n.priority:void 0)||0)})},e.prototype.traverse=function(e){var i,n,r,s,o,u,l,h,a,p,d,c,f,b,v,m;for(s=this.bindingRegExp(),o="SCRIPT"===e.nodeName||"STYLE"===e.nodeName,b=e.attributes,p=0,c=b.length;c>p;p++)if(i=b[p],s.test(i.name)){if(h=i.name.replace(s,""),!(r=this.binders[h])){v=this.binders;for(u in v)a=v[u],"*"!==u&&-1!==u.indexOf("*")&&(l=new RegExp("^"+u.replace(/\*/g,".+")+"$"),l.test(h)&&(r=a))}r||(r=this.binders["*"]),r.block&&(o=!0,n=[i])}for(m=n||e.attributes,d=0,f=m.length;f>d;d++)i=m[d],s.test(i.name)&&(h=i.name.replace(s,""),this.buildBinding("Binding",e,h,i.value));return o||(h=e.nodeName.toLowerCase(),this.components[h]&&!e._bound&&(this.bindings.push(new t.ComponentBinding(this,e,h)),o=!0)),o},e.prototype.select=function(t){var e,i,n,r,s;for(r=this.bindings,s=[],i=0,n=r.length;n>i;i++)e=r[i],t(e)&&s.push(e);return s},e.prototype.bind=function(){var t,e,i,n;for(n=this.bindings,e=0,i=n.length;i>e;e++)t=n[e],t.bind()},e.prototype.unbind=function(){var t,e,i,n;for(n=this.bindings,e=0,i=n.length;i>e;e++)t=n[e],t.unbind()},e.prototype.sync=function(){var t,e,i,n;for(n=this.bindings,e=0,i=n.length;i>e;e++)t=n[e],"function"==typeof t.sync&&t.sync()},e.prototype.publish=function(){var t,e,i,n;for(n=this.select(function(t){var e;return null!=(e=t.binder)?e.publishes:void 0}),e=0,i=n.length;i>e;e++)t=n[e],t.publish()},e.prototype.update=function(t){var e,i,n,r,s,o;null==t&&(t={});for(i in t)n=t[i],this.models[i]=n;for(o=this.bindings,r=0,s=o.length;s>r;r++)e=o[r],"function"==typeof e.update&&e.update(t)},e}(),t.Binding=function(){function e(t,e,i,n,r){this.view=t,this.el=e,this.type=i,this.keypath=n,this.options=null!=r?r:{},this.getValue=s(this.getValue,this),this.update=s(this.update,this),this.unbind=s(this.unbind,this),this.bind=s(this.bind,this),this.publish=s(this.publish,this),this.sync=s(this.sync,this),this.set=s(this.set,this),this.eventHandler=s(this.eventHandler,this),this.formattedValue=s(this.formattedValue,this),this.parseFormatterArguments=s(this.parseFormatterArguments,this),this.parseTarget=s(this.parseTarget,this),this.observe=s(this.observe,this),this.setBinder=s(this.setBinder,this),this.formatters=this.options.formatters||[],this.dependencies=[],this.formatterObservers={},this.model=void 0,this.setBinder()}return e.prototype.setBinder=function(){var t,e,i,n;if(!(this.binder=this.view.binders[this.type])){n=this.view.binders;for(t in n)i=n[t],"*"!==t&&-1!==t.indexOf("*")&&(e=new RegExp("^"+t.replace(/\*/g,".+")+"$"),e.test(this.type)&&(this.binder=i,this.args=new RegExp("^"+t.replace(/\*/g,"(.+)")+"$").exec(this.type),this.args.shift()))}return this.binder||(this.binder=this.view.binders["*"]),this.binder instanceof Function?this.binder={routine:this.binder}:void 0},e.prototype.observe=function(e,i,n){return t.sightglass(e,i,n,{root:this.view.rootInterface,adapters:this.view.adapters})},e.prototype.parseTarget=function(){var e;return e=t.TypeParser.parse(this.keypath),e.type===t.TypeParser.types.primitive?this.value=e.value:(this.observer=this.observe(this.view.models,this.keypath,this.sync),this.model=this.observer.target)},e.prototype.parseFormatterArguments=function(e,i){var n,r,s,o,u,l,h;for(e=function(){var i,n,s;for(s=[],i=0,n=e.length;n>i;i++)r=e[i],s.push(t.TypeParser.parse(r));return s}(),o=[],n=l=0,h=e.length;h>l;n=++l)r=e[n],o.push(r.type===t.TypeParser.types.primitive?r.value:((u=this.formatterObservers)[i]||(u[i]={}),(s=this.formatterObservers[i][n])?void 0:(s=this.observe(this.view.models,r.value,this.sync),this.formatterObservers[i][n]=s),s.value()));return o},e.prototype.formattedValue=function(t){var e,i,n,r,s,u,l,h,a;for(h=this.formatters,i=u=0,l=h.length;l>u;i=++u)n=h[i],e=n.match(/[^\s']+|'([^']|'[^\s])*'|"([^"]|"[^\s])*"/g),r=e.shift(),n=this.view.formatters[r],s=this.parseFormatterArguments(e,i),(null!=n?n.read:void 0)instanceof Function?t=(a=n.read).call.apply(a,[this.model,t].concat(o.call(s))):n instanceof Function&&(t=n.call.apply(n,[this.model,t].concat(o.call(s))));return t},e.prototype.eventHandler=function(t){var e,i;return i=(e=this).view.handler,function(n){return i.call(t,this,n,e)}},e.prototype.set=function(e){var i;return e=e instanceof Function&&!this.binder["function"]&&t["public"].executeFunctions?this.formattedValue(e.call(this.model)):this.formattedValue(e),null!=(i=this.binder.routine)?i.call(this,this.el,e):void 0},e.prototype.sync=function(){var t,e;return this.set(function(){var i,n,r,s,o,u,l;if(this.observer){if(this.model!==this.observer.target){for(o=this.dependencies,i=0,r=o.length;r>i;i++)e=o[i],e.unobserve();if(this.dependencies=[],null!=(this.model=this.observer.target)&&(null!=(u=this.options.dependencies)?u.length:void 0))for(l=this.options.dependencies,n=0,s=l.length;s>n;n++)t=l[n],e=this.observe(this.model,t,this.sync),this.dependencies.push(e)}return this.observer.value()}return this.value}.call(this))},e.prototype.publish=function(){var t,e,i,n,r,s,u,l,h,a,p,d,c;if(this.observer){for(l=this.getValue(this.el),s=this.formatters.length-1,p=this.formatters.slice(0).reverse(),i=h=0,a=p.length;a>h;i=++h)n=p[i],e=s-i,t=n.split(/\s+/),r=t.shift(),u=this.parseFormatterArguments(t,e),(null!=(d=this.view.formatters[r])?d.publish:void 0)&&(l=(c=this.view.formatters[r]).publish.apply(c,[l].concat(o.call(u))));return this.observer.setValue(l)}},e.prototype.bind=function(){var t,e,i,n,r,s,o;if(this.parseTarget(),null!=(r=this.binder.bind)&&r.call(this,this.el),null!=this.model&&(null!=(s=this.options.dependencies)?s.length:void 0))for(o=this.options.dependencies,i=0,n=o.length;n>i;i++)t=o[i],e=this.observe(this.model,t,this.sync),this.dependencies.push(e);return this.view.preloadData?this.sync():void 0},e.prototype.unbind=function(){var t,e,i,n,r,s,o,u,l,h;for(null!=(o=this.binder.unbind)&&o.call(this,this.el),null!=(u=this.observer)&&u.unobserve(),l=this.dependencies,r=0,s=l.length;s>r;r++)n=l[r],n.unobserve();this.dependencies=[],h=this.formatterObservers;for(i in h){e=h[i];for(t in e)n=e[t],n.unobserve()}return this.formatterObservers={}},e.prototype.update=function(t){var e,i;return null==t&&(t={}),this.model=null!=(e=this.observer)?e.target:void 0,null!=(i=this.binder.update)?i.call(this,t):void 0},e.prototype.getValue=function(e){return this.binder&&null!=this.binder.getValue?this.binder.getValue.call(this,e):t.Util.getInputValue(e)},e}(),t.ComponentBinding=function(e){function i(e,i,n){var r,o,u,l,a,p,d,c;for(this.view=e,this.el=i,this.type=n,this.unbind=s(this.unbind,this),this.bind=s(this.bind,this),this.locals=s(this.locals,this),this.component=this.view.components[this.type],this["static"]={},this.observers={},this.upstreamObservers={},o=e.bindingRegExp(),d=this.el.attributes||[],a=0,p=d.length;p>a;a++)r=d[a],o.test(r.name)||(u=this.camelCase(r.name),l=t.TypeParser.parse(r.value),h.call(null!=(c=this.component["static"])?c:[],u)>=0?this["static"][u]=r.value:l.type===t.TypeParser.types.primitive?this["static"][u]=l.value:this.observers[u]=r.value)}return l(i,e),i.prototype.sync=function(){},i.prototype.update=function(){},i.prototype.publish=function(){},i.prototype.locals=function(){var t,e,i,n,r,s;i={},r=this["static"];for(t in r)n=r[t],i[t]=n;s=this.observers;for(t in s)e=s[t],i[t]=e.value();return i},i.prototype.camelCase=function(t){return t.replace(/-([a-z])/g,function(t){return t[1].toUpperCase()})},i.prototype.bind=function(){var e,i,n,r,s,o,u,l,h,a,p,d,c,f,b,v,m,y,g,w;if(!this.bound){f=this.observers;for(i in f)n=f[i],this.observers[i]=this.observe(this.view.models,n,function(t){return function(e){return function(){return t.componentView.models[e]=t.observers[e].value()}}}(this).call(this,i));this.bound=!0}if(null!=this.componentView)this.componentView.bind();else{for(this.el.innerHTML=this.component.template.call(this),u=this.component.initialize.call(this,this.el,this.locals()),this.el._bound=!0,o={},b=t.extensions,a=0,d=b.length;d>a;a++){if(s=b[a],o[s]={},this.component[s]){v=this.component[s];for(e in v)l=v[e],o[s][e]=l}m=this.view[s];for(e in m)l=m[e],null==(h=o[s])[e]&&(h[e]=l)}for(y=t.options,p=0,c=y.length;c>p;p++)s=y[p],o[s]=null!=(g=this.component[s])?g:this.view[s];this.componentView=new t.View(Array.prototype.slice.call(this.el.childNodes),u,o),this.componentView.bind(),w=this.observers;for(i in w)r=w[i],this.upstreamObservers[i]=this.observe(this.componentView.models,i,function(t){return function(e,i){return function(){return i.setValue(t.componentView.models[e])}}}(this).call(this,i,r))}},i.prototype.unbind=function(){var t,e,i,n,r;i=this.upstreamObservers;for(t in i)e=i[t],e.unobserve();n=this.observers;for(t in n)e=n[t],e.unobserve();return null!=(r=this.componentView)?r.unbind.call(this):void 0},i}(t.Binding),t.TextBinding=function(t){function e(t,e,i,n,r){this.view=t,this.el=e,this.type=i,this.keypath=n,this.options=null!=r?r:{},this.sync=s(this.sync,this),this.formatters=this.options.formatters||[],this.dependencies=[],this.formatterObservers={}}return l(e,t),e.prototype.binder={routine:function(t,e){return t.data=null!=e?e:""}},e.prototype.sync=function(){return e.__super__.sync.apply(this,arguments)},e}(t.Binding),t["public"].binders.text=function(t,e){return null!=t.textContent?t.textContent=null!=e?e:"":t.innerText=null!=e?e:""},t["public"].binders.html=function(t,e){return t.innerHTML=null!=e?e:""},t["public"].binders.show=function(t,e){return t.style.display=e?"":"none"},t["public"].binders.hide=function(t,e){return t.style.display=e?"none":""},t["public"].binders.enabled=function(t,e){return t.disabled=!e},t["public"].binders.disabled=function(t,e){return t.disabled=!!e},t["public"].binders.checked={publishes:!0,priority:2e3,bind:function(e){return t.Util.bindEvent(e,"change",this.publish)},unbind:function(e){return t.Util.unbindEvent(e,"change",this.publish)},routine:function(t,e){var i;return t.checked="radio"===t.type?(null!=(i=t.value)?i.toString():void 0)===(null!=e?e.toString():void 0):!!e}},t["public"].binders.unchecked={publishes:!0,priority:2e3,bind:function(e){return t.Util.bindEvent(e,"change",this.publish)},unbind:function(e){return t.Util.unbindEvent(e,"change",this.publish)},routine:function(t,e){var i;return t.checked="radio"===t.type?(null!=(i=t.value)?i.toString():void 0)!==(null!=e?e.toString():void 0):!e}},t["public"].binders.value={publishes:!0,priority:3e3,bind:function(e){return"INPUT"!==e.tagName||"radio"!==e.type?(this.event="SELECT"===e.tagName?"change":"input",t.Util.bindEvent(e,this.event,this.publish)):void 0},unbind:function(e){return"INPUT"!==e.tagName||"radio"!==e.type?t.Util.unbindEvent(e,this.event,this.publish):void 0},routine:function(t,e){var n,r,s,o,u,l,a;if("INPUT"===t.tagName&&"radio"===t.type)return t.setAttribute("value",e);if(null!=window.jQuery){if(t=i(t),(null!=e?e.toString():void 0)!==(null!=(o=t.val())?o.toString():void 0))return t.val(null!=e?e:"")}else if("select-multiple"===t.type){if(null!=e){for(a=[],r=0,s=t.length;s>r;r++)n=t[r],a.push(n.selected=(u=n.value,h.call(e,u)>=0));return a}}else if((null!=e?e.toString():void 0)!==(null!=(l=t.value)?l.toString():void 0))return t.value=null!=e?e:""}},t["public"].binders["if"]={block:!0,priority:4e3,bind:function(t){var e,i;return null==this.marker?(e=[this.view.prefix,this.type].join("-").replace("--","-"),i=t.getAttribute(e),this.marker=document.createComment(" rivets: "+this.type+" "+i+" "),this.bound=!1,t.removeAttribute(e),t.parentNode.insertBefore(this.marker,t),t.parentNode.removeChild(t)):void 0},unbind:function(){return this.nested?(this.nested.unbind(),this.bound=!1):void 0},routine:function(e,i){var n,r,s,o;if(!!i==!this.bound){if(i){s={},o=this.view.models;for(n in o)r=o[n],s[n]=r;return(this.nested||(this.nested=new t.View(e,s,this.view.options()))).bind(),this.marker.parentNode.insertBefore(e,this.marker.nextSibling),this.bound=!0}return e.parentNode.removeChild(e),this.nested.unbind(),this.bound=!1}},update:function(t){var e;return null!=(e=this.nested)?e.update(t):void 0}},t["public"].binders.unless={block:!0,priority:4e3,bind:function(e){return t["public"].binders["if"].bind.call(this,e)},unbind:function(){return t["public"].binders["if"].unbind.call(this)},routine:function(e,i){return t["public"].binders["if"].routine.call(this,e,!i)},update:function(e){return t["public"].binders["if"].update.call(this,e)}},t["public"].binders["on-*"]={"function":!0,priority:1e3,unbind:function(e){return this.handler?t.Util.unbindEvent(e,this.args[0],this.handler):void 0},routine:function(e,i){return this.handler&&t.Util.unbindEvent(e,this.args[0],this.handler),t.Util.bindEvent(e,this.args[0],this.handler=this.eventHandler(i))}},t["public"].binders["each-*"]={block:!0,priority:4e3,bind:function(t){var e,i,n,r,s;if(null==this.marker)e=[this.view.prefix,this.type].join("-").replace("--","-"),this.marker=document.createComment(" rivets: "+this.type+" "),this.iterated=[],t.removeAttribute(e),t.parentNode.insertBefore(this.marker,t),t.parentNode.removeChild(t);else for(s=this.iterated,n=0,r=s.length;r>n;n++)i=s[n],i.bind()},unbind:function(){var t,e,i,n;if(null!=this.iterated)for(n=this.iterated,e=0,i=n.length;i>e;e++)t=n[e],t.unbind()},routine:function(e,i){var n,r,s,o,u,l,h,a,p,d,c,f,b,v,m,y,g,w,k,x;if(h=this.args[0],i=i||[],this.iterated.length>i.length)for(w=Array(this.iterated.length-i.length),f=0,m=w.length;m>f;f++)s=w[f],c=this.iterated.pop(),c.unbind(),this.marker.parentNode.removeChild(c.els[0]);for(o=b=0,y=i.length;y>b;o=++b)if(l=i[o],r={index:o},r[t["public"].iterationAlias(h)]=o,r[h]=l,null==this.iterated[o]){k=this.view.models;for(u in k)l=k[u],null==r[u]&&(r[u]=l);p=this.iterated.length?this.iterated[this.iterated.length-1].els[0]:this.marker,a=this.view.options(),a.preloadData=!0,d=e.cloneNode(!0),c=new t.View(d,r,a),c.bind(),this.iterated.push(c),this.marker.parentNode.insertBefore(d,p.nextSibling)}else this.iterated[o].models[h]!==l&&this.iterated[o].update(r);if("OPTION"===e.nodeName)for(x=this.view.bindings,v=0,g=x.length;g>v;v++)n=x[v],n.el===this.marker.parentNode&&"value"===n.type&&n.sync()},update:function(t){var e,i,n,r,s,o,u;e={};for(i in t)n=t[i],i!==this.args[0]&&(e[i]=n);for(u=this.iterated,s=0,o=u.length;o>s;s++)r=u[s],r.update(e)}},t["public"].binders["class-*"]=function(t,e){var i;return i=" "+t.className+" ",!e==(-1!==i.indexOf(" "+this.args[0]+" "))?t.className=e?""+t.className+" "+this.args[0]:i.replace(" "+this.args[0]+" "," ").trim():void 0},t["public"].binders["*"]=function(t,e){return null!=e?t.setAttribute(this.type,e):t.removeAttribute(this.type)},t["public"].formatters.call=function(){var t,e;return e=arguments[0],t=2<=arguments.length?o.call(arguments,1):[],e.call.apply(e,[this].concat(o.call(t)))},t["public"].adapters["."]={id:"_rv",counter:0,weakmap:{},weakReference:function(t){var e,i,n;return t.hasOwnProperty(this.id)||(e=this.counter++,Object.defineProperty(t,this.id,{value:e})),(i=this.weakmap)[n=t[this.id]]||(i[n]={callbacks:{}})},cleanupWeakReference:function(t,e){return Object.keys(t.callbacks).length||t.pointers&&Object.keys(t.pointers).length?void 0:delete this.weakmap[e]},stubFunction:function(t,e){var i,n,r;return n=t[e],i=this.weakReference(t),r=this.weakmap,t[e]=function(){var e,s,o,u,l,h,a,p,d,c;u=n.apply(t,arguments),a=i.pointers;for(o in a)for(s=a[o],c=null!=(p=null!=(d=r[o])?d.callbacks[s]:void 0)?p:[],l=0,h=c.length;h>l;l++)e=c[l],e();return u}},observeMutations:function(t,e,i){var n,r,s,o,u,l;if(Array.isArray(t)){if(s=this.weakReference(t),null==s.pointers)for(s.pointers={},r=["push","pop","shift","unshift","sort","reverse","splice"],u=0,l=r.length;l>u;u++)n=r[u],this.stubFunction(t,n);if(null==(o=s.pointers)[e]&&(o[e]=[]),h.call(s.pointers[e],i)<0)return s.pointers[e].push(i)}},unobserveMutations:function(t,e,i){var n,r,s;return Array.isArray(t)&&null!=t[this.id]&&(r=this.weakmap[t[this.id]])&&(s=r.pointers[e])?((n=s.indexOf(i))>=0&&s.splice(n,1),s.length||delete r.pointers[e],this.cleanupWeakReference(r,t[this.id])):void 0},observe:function(t,e,i){var n,r,s;return n=this.weakReference(t).callbacks,null==n[e]&&(n[e]=[],r=Object.getOwnPropertyDescriptor(t,e),(null!=r?r.get:void 0)||(null!=r?r.set:void 0)||(s=t[e],Object.defineProperty(t,e,{enumerable:!0,get:function(){return s},set:function(i){return function(r){var o,u,l,a,p;if(r!==s&&(i.unobserveMutations(s,t[i.id],e),s=r,u=i.weakmap[t[i.id]])){if(n=u.callbacks,n[e])for(p=n[e].slice(),l=0,a=p.length;a>l;l++)o=p[l],h.call(n[e],o)>=0&&o();return i.observeMutations(r,t[i.id],e)}}}(this)}))),h.call(n[e],i)<0&&n[e].push(i),this.observeMutations(t[e],t[this.id],e)},unobserve:function(t,e,i){var n,r,s;return(s=this.weakmap[t[this.id]])&&(n=s.callbacks[e])?((r=n.indexOf(i))>=0&&(n.splice(r,1),n.length||(delete s.callbacks[e],this.unobserveMutations(t[e],t[this.id],e))),this.cleanupWeakReference(s,t[this.id])):void 0},get:function(t,e){return t[e]},set:function(t,e,i){return t[e]=i}},t.factory=function(e){return t.sightglass=e,t["public"]._=t,t["public"]},"object"==typeof("undefined"!=typeof module&&null!==module?module.exports:void 0)?module.exports=t.factory(require("sightglass")):"function"==typeof define&&define.amd?define(["sightglass"],function(e){return this.rivets=t.factory(e)}):this.rivets=t.factory(sightglass)}).call(this);
/**
 * Angular Light 0.14.0
 * (c) 2016 Oleg Nechaev
 * Released under the MIT License.
 * 2017-02-22, http://angularlight.org/ 
 */(function() {
    "use strict";
    function buildAlight() {
        var alight = function(element, data) {
            return alight.bootstrap(element, data);
        }
        alight.version = '0.14.0';
        alight.filters = {};
        alight.text = {};
        alight.core = {};
        alight.utils = {};
        alight.option = {
            globalController: false,
            removeAttribute: true,
            domOptimization: true,
            domOptimizationRemoveEmpty: true,
            fastBinding: true
        };
        alight.debug = {
            scan: 0,
            directive: false,
            watch: false,
            watchText: false,
            parser: false
        };
        alight.ctrl = alight.controllers = {};
        alight.d = alight.directives = {
            al: {},
            bo: {},
            $global: {}
        };
        alight.hooks = {
            directive: [],
            binding: []
        };
        alight.priority = {
            al: {
                app: 2000,
                checked: 20,
                'class': 30,
                css: 30,
                focused: 20,
                'if': 700,
                'ifnot': 700,
                model: 25,
                radio: 25,
                repeat: 1000,
                select: 20,
                stop: -10,
                value: 20,
                on: 10
            },
            $component: 5,
            $attribute: -5
        };
        var f$ = alight.f$ = {};

        var removeItem = function(list, item) {
            var i = list.indexOf(item);
            if(i >= 0) list.splice(i, 1)
            else console.warn('trying to remove not exist item')
        };
        /* next postfix.js */

/* library to work with DOM */
(function(){
    f$.before = function(base, elm) {
        var parent = base.parentNode;
        parent.insertBefore(elm, base)
    };

    f$.after = function(base, elm) {
        var parent = base.parentNode;
        var n = base.nextSibling;
        if(n) parent.insertBefore(elm, n)
        else parent.appendChild(elm)
    };

    f$.remove = function(elm) {
        var parent = elm.parentNode;
        if(parent) parent.removeChild(elm)
    };

    // on / off
    f$.on = function(element, event, callback) {
        element.addEventListener(event, callback, false)
    };
    f$.off = function(element, event, callback) {
        element.removeEventListener(event, callback, false)
    };

    f$.isFunction = function(fn) {
        return (fn && Object.prototype.toString.call(fn) === '[object Function]')
    };

    f$.isObject = function(o) {
        return (o && Object.prototype.toString.call(o) === '[object Object]')
    };

    f$.isPromise = function(p) {
        return p && window.Promise && p instanceof window.Promise;
    };

    f$.isElement = function(el) {
        return el instanceof HTMLElement
    };

    f$.addClass = function(element, name) {
        if(element.classList) element.classList.add(name)
        else element.className += ' ' + name
    };

    f$.removeClass = function(element, name) {
        if(element.classList) element.classList.remove(name)
        else element.className = element.className.replace(new RegExp('(^| )' + name.split(' ').join('|') + '( |$)', 'gi'), ' ')
    };

    f$.rawAjax = function(args) {
        var request = new XMLHttpRequest();
        request.open(args.type || 'GET', args.url, true, args.username, args.password);
        for(var i in args.headers) request.setRequestHeader(i, args.headers[i]);

        if(args.success) {
            request.onload = function() {
                if (request.status >= 200 && request.status < 400){
                    args.success(request.responseText);
                } else {
                    if(args.error) args.error();
                }
            }
        }
        if(args.error) request.onerror = args.error;

        request.send(args.data || null);
    };

    /*
        ajax
            cache
            type
            url
            success
            error
            username
            password
            data
            headers
    */
    f$.ajaxCache = {};
    f$.ajax = function(args) {
        if(args.username || args.password || args.headers || args.data || !args.cache) return f$.rawAjax(args);

        // cache
        var queryType = args.type || 'GET';
        var cacheKey = queryType + ':' + args.url;
        var d = f$.ajaxCache[cacheKey];
        if(!d) f$.ajaxCache[cacheKey] = d = {callback: []};  // data
        if(d.result) {
            if(args.success) args.success(d.result);
            return
        }
        d.callback.push(args);
        if(d.loading) return;
        d.loading = true;
        f$.rawAjax({
            type: queryType,
            url: args.url,
            success: function(result) {
                d.loading = false
                d.result = result;
                for(var i=0;i<d.callback.length;i++)
                    if(d.callback[i].success) d.callback[i].success(result)
                d.callback.length = 0;
            },
            error: function() {
                d.loading = false
                for(var i=0;i<d.callback.length;i++)
                    if(d.callback[i].error) d.callback[i].error()
                d.callback.length = 0;
            }
        })
    };

    // append classes
    (function(){
        var css = '@charset "UTF-8";[al-cloak],[hidden],.al-hide{display:none !important;}';
        var head = document.querySelectorAll('head')[0];

        var s = document.createElement('style');
        s.setAttribute('type', 'text/css');
        if (s.styleSheet) {  // IE
            s.styleSheet.cssText = css;
        } else {
            s.appendChild(document.createTextNode(css));
        }
        head.appendChild(s);
    })();

})();

f$.ready = (function() {
    var callbacks = [];
    var ready = false;
    function onReady() {
        ready = true;
        f$.off(document, 'DOMContentLoaded', onReady);
        for(var i=0;i<callbacks.length;i++)
            callbacks[i]();
        callbacks.length = 0;
    };
    f$.on(document, 'DOMContentLoaded', onReady);
    return function(callback) {
        if(ready) callback();
        else callbacks.push(callback)
    }
})();

if (window.jQuery) {
    window.jQuery.fn.alight = function (data) {
        var elements = [];
        this.each(function (i, el) { return elements.push(el); });
        if (elements.length)
            return alight(elements, data);
    };
}

alight.core.getFilter = function (name, cd) {
    var filter = cd.locals[name];
    if (filter && (f$.isFunction(filter) || filter.init || filter.fn))
        return filter;
    filter = alight.filters[name];
    if (filter)
        return filter;
    throw 'Filter not found: ' + name;
};
function makeSimpleFilter(filter, option) {
    var onStop;
    var values = [];
    var active = false;
    var cd = option.cd;
    var callback = option.callback;
    if (option.filterConf.args.length) {
        var watchers = [];
        option.filterConf.args.forEach(function (exp, i) {
            var w = cd.watch(exp, function (value) {
                values[i + 1] = value;
                handler();
            });
            if (!w.$.isStatic)
                watchers.push(w);
        });
        var planned = false;
        var handler = function () {
            if (!planned) {
                planned = true;
                cd.watch('$onScanOnce', function () {
                    planned = false;
                    if (active) {
                        var result = filter.apply(null, values);
                        if (f$.isPromise(result)) {
                            result.then(function (value) {
                                callback(value);
                                cd.scan();
                            });
                        }
                        else
                            callback(result);
                    }
                });
            }
        };
        if (watchers.length) {
            onStop = function () {
                watchers.forEach(function (w) { return w.stop(); });
            };
        }
    }
    else {
        var handler = function () {
            var result = filter(values[0]);
            if (f$.isPromise(result)) {
                result.then(function (value) {
                    callback(value);
                    cd.scan();
                });
            }
            else
                callback(result);
        };
    }
    var node = {
        onChange: function (value) {
            active = true;
            values[0] = value;
            handler();
        },
        onStop: onStop,
        watchMode: option.watchMode
    };
    return node;
}
alight.core.buildFilterNode = function (cd, filterConf, filter, callback) {
    if (f$.isFunction(filter)) {
        return makeSimpleFilter(filter, { cd: cd, filterConf: filterConf, callback: callback });
    }
    else if (filter.init) {
        return filter.init.call(cd, cd.scope, filterConf.raw, {
            setValue: callback,
            conf: filterConf,
            changeDetector: cd
        });
    }
    else if (f$.isFunction(filter.fn)) {
        return makeSimpleFilter(filter.fn, { cd: cd, filterConf: filterConf, callback: callback, watchMode: filter.watchMode });
    }
    throw 'Wrong filter: ' + filterConf.name;
};
function makeFilterChain(cd, ce, prevCallback, option) {
    var watchMode = null;
    var oneTime = option.oneTime;
    if (option.isArray)
        watchMode = 'array';
    else if (option.deep)
        watchMode = 'deep';
    if (!prevCallback) {
        var watchObject_1 = {
            el: option.element,
            ea: option.elementAttr
        };
        prevCallback = function (value) {
            execWatchObject(cd.scope, watchObject_1, value);
        };
    }
    var chain = alight.utils.parsFilter(ce.filter);
    var onStop = [];
    for (var i = chain.result.length - 1; i >= 0; i--) {
        var filter = alight.core.getFilter(chain.result[i].name, cd);
        var node = alight.core.buildFilterNode(cd, chain.result[i], filter, prevCallback);
        if (node.watchMode)
            watchMode = node.watchMode;
        if (node.onStop)
            onStop.push(node.onStop);
        prevCallback = node.onChange;
    }
    ;
    option = {
        oneTime: oneTime
    };
    if (watchMode === 'array')
        option.isArray = true;
    else if (watchMode === 'deep')
        option.deep = true;
    if (onStop.length) {
        option.onStop = function () {
            onStop.forEach(function (fn) { return fn(); });
            onStop.length = 0;
        };
    }
    return cd.watch(ce.expression, prevCallback, option);
}
;

var ChangeDetector, ErrorValue, Root, WA, displayError, execWatchObject, get_time, innerEvents, notEqual, scanCore, watchAny, watchInitValue;

alight.ChangeDetector = function(scope) {
  var cd, root;
  root = new Root();
  cd = new ChangeDetector(root, scope || {});
  root.topCD = cd;
  return cd;
};

Root = function() {
  this.watchers = {
    any: [],
    finishBinding: [],
    finishScan: [],
    finishScanOnce: [],
    onScanOnce: []
  };
  this.status = null;
  this.extraLoop = false;
  this.finishBinding_lock = false;
  this.lateScan = false;
  this.topCD = null;
  return this;
};

Root.prototype.destroy = function() {
  this.watchers.any.length = 0;
  this.watchers.finishBinding.length = 0;
  this.watchers.finishScan.length = 0;
  this.watchers.finishScanOnce.length = 0;
  this.watchers.onScanOnce.length = 0;
  if (this.topCD) {
    return this.topCD.destroy();
  }
};

ChangeDetector = function(root, scope) {
  this.scope = scope;
  this.locals = scope;
  this.root = root;
  this.watchList = [];
  this.destroy_callbacks = [];
  this.parent = null;
  this.children = [];
  this.rwatchers = {
    any: [],
    finishScan: [],
    elEvents: []
  };
};

ChangeDetector.prototype["new"] = function(scope, option) {
  var Locals, cd, parent;
  option = option || {};
  parent = this;
  if (scope == null) {
    scope = parent.scope;
  }
  cd = new ChangeDetector(parent.root, scope);
  cd.parent = parent;
  if (scope === parent.scope) {
    if (option.locals) {
      Locals = parent._ChildLocals;
      if (!Locals) {
        parent._ChildLocals = Locals = function() {
          this.$$root = scope;
          return this;
        };
        Locals.prototype = parent.locals;
      }
      cd.locals = new Locals();
    } else {
      cd.locals = parent.locals;
    }
  }
  parent.children.push(cd);
  return cd;
};

ChangeDetector.prototype.destroy = function() {
  var cd, child, d, fn, i, j, k, l, len, len1, len2, len3, len4, len5, m, n, o, ref, ref1, ref2, ref3, ref4, ref5, root, wa;
  cd = this;
  root = cd.root;
  cd.scope = null;
  if (cd.parent) {
    removeItem(cd.parent.children, cd);
  }
  ref = cd.destroy_callbacks;
  for (j = 0, len = ref.length; j < len; j++) {
    fn = ref[j];
    fn();
  }
  ref1 = cd.children.slice();
  for (k = 0, len1 = ref1.length; k < len1; k++) {
    child = ref1[k];
    child.destroy();
  }
  cd.destroy_callbacks.length = 0;
  ref2 = cd.watchList;
  for (l = 0, len2 = ref2.length; l < len2; l++) {
    d = ref2[l];
    if (d.onStop) {
      d.onStop();
    }
  }
  cd.watchList.length = 0;
  ref3 = cd.rwatchers.any;
  for (m = 0, len3 = ref3.length; m < len3; m++) {
    wa = ref3[m];
    removeItem(root.watchers.any, wa);
  }
  cd.rwatchers.any.length = 0;
  ref4 = cd.rwatchers.finishScan;
  for (n = 0, len4 = ref4.length; n < len4; n++) {
    wa = ref4[n];
    removeItem(root.watchers.finishScan, wa);
  }
  cd.rwatchers.finishScan.length = 0;
  ref5 = this.rwatchers.elEvents;
  for (o = 0, len5 = ref5.length; o < len5; o++) {
    i = ref5[o];
    f$.off(i[0], i[1], i[2]);
  }
  this.rwatchers.elEvents.length = 0;
  if (root.topCD === cd) {
    root.topCD = null;
    root.destroy();
  }
};

WA = function(callback) {
  return this.cb = callback;
};

watchAny = function(cd, key, callback) {
  var root, wa;
  root = cd.root;
  wa = new WA(callback);
  cd.rwatchers[key].push(wa);
  root.watchers[key].push(wa);
  return {
    stop: function() {
      removeItem(cd.rwatchers[key], wa);
      return removeItem(root.watchers[key], wa);
    }
  };
};

ChangeDetector.prototype.on = function(element, eventName, callback) {
  f$.on(element, eventName, callback);
  return this.rwatchers.elEvents.push([element, eventName, callback]);
};

innerEvents = {
  $any: function(cd, callback) {
    return watchAny(cd, 'any', callback);
  },
  $finishScan: function(cd, callback) {
    return watchAny(cd, 'finishScan', callback);
  },
  $finishScanOnce: function(cd, callback) {
    cd.root.watchers.finishScanOnce.push(callback);
  },
  $onScanOnce: function(cd, callback) {
    cd.root.watchers.onScanOnce.push(callback);
  },
  $destroy: function(cd, callback) {
    cd.destroy_callbacks.push(callback);
  },
  $finishBinding: function(cd, callback) {
    cd.root.watchers.finishBinding.push(callback);
  }
};


/*
    option:
        isArray
        readOnly
        oneTime
        deep
        onStop

        watchText
 */

watchInitValue = function() {};

ChangeDetector.prototype.watch = function(name, callback, option) {
  var cd, ce, d, exp, ie, isFunction, isStatic, key, r, root, scope;
  ie = innerEvents[name];
  if (ie) {
    return ie(this, callback);
  }
  option = option || {};
  if (option === true) {
    option = {
      isArray: true
    };
  }
  if (option.init) {
    console.warn('watch.init is depricated');
  }
  cd = this;
  root = cd.root;
  scope = cd.scope;
  if (f$.isFunction(name)) {
    exp = name;
    key = alight.utils.getId();
    isFunction = true;
  } else {
    isFunction = false;
    exp = null;
    name = name.trim();
    if (name.slice(0, 2) === '::') {
      name = name.slice(2);
      option.oneTime = true;
    }
    key = name;
    if (option.deep) {
      key = 'd#' + key;
    } else if (option.isArray) {
      key = 'a#' + key;
    } else {
      key = 'v#' + key;
    }
  }
  if (alight.debug.watch) {
    console.log('$watch', name);
  }
  isStatic = false;
  if (!isFunction) {
    if (option.watchText) {
      exp = option.watchText.fn;
    } else {
      ce = alight.utils.compile.expression(name);
      if (ce.filter) {
        return makeFilterChain(cd, ce, callback, option);
      }
      isStatic = ce.isSimple && ce.simpleVariables.length === 0;
      exp = ce.fn;
    }
  }
  if (option.deep) {
    option.isArray = false;
  }
  d = {
    isStatic: isStatic,
    isArray: Boolean(option.isArray),
    extraLoop: !option.readOnly,
    deep: option.deep === true ? 10 : option.deep,
    value: watchInitValue,
    callback: callback,
    exp: exp,
    src: '' + name,
    onStop: option.onStop || null,
    el: option.element || null,
    ea: option.elementAttr || null
  };
  if (isStatic) {
    cd.watch('$onScanOnce', function() {
      return execWatchObject(scope, d, d.exp(scope));
    });
  } else {
    cd.watchList.push(d);
  }
  r = {
    $: d,
    stop: function() {
      var e, error;
      if (option.onStop) {
        try {
          option.onStop();
        } catch (error) {
          e = error;
          alight.exceptionHandler(e, "Error in onStop of watcher: " + name, name);
        }
      }
      if (d.isStatic) {
        return;
      }
      return removeItem(cd.watchList, d);
    },
    refresh: function() {
      var value;
      value = d.exp(cd.locals);
      if (value && d.deep) {
        return d.value = alight.utils.clone(value, d.deep);
      } else if (value && d.isArray) {
        return d.value = value.slice();
      } else {
        return d.value = value;
      }
    }
  };
  if (option.oneTime) {
    d.callback = function(value) {
      if (value === void 0) {
        return;
      }
      r.stop();
      return callback(value);
    };
  }
  return r;
};

ChangeDetector.prototype.watchGroup = function(keys, callback) {
  var cd, group, j, key, len, planned;
  cd = this;
  if (!callback && f$.isFunction(keys)) {
    callback = keys;
    keys = null;
  }
  planned = false;
  group = function() {
    if (planned) {
      return;
    }
    planned = true;
    return cd.watch('$onScanOnce', function() {
      planned = false;
      return callback();
    });
  };
  if (keys) {
    for (j = 0, len = keys.length; j < len; j++) {
      key = keys[j];
      cd.watch(key, group);
    }
  }
  return group;
};

get_time = (function() {
  if (window.performance) {
    return function() {
      return Math.floor(performance.now());
    };
  }
  return function() {
    return (new Date()).getTime();
  };
})();

notEqual = function(a, b) {
  var i, j, len, ta, tb, v;
  if (a === null || b === null) {
    return true;
  }
  ta = typeof a;
  tb = typeof b;
  if (ta !== tb) {
    return true;
  }
  if (ta === 'object') {
    if (a.length !== b.length) {
      return true;
    }
    for (i = j = 0, len = a.length; j < len; i = ++j) {
      v = a[i];
      if (v !== b[i]) {
        return true;
      }
    }
  }
  return false;
};

execWatchObject = function(scope, w, value) {
  if (w.el) {
    if (w.ea) {
      w.el.setAttribute(w.ea, value);
    } else {
      w.el.nodeValue = value;
    }
  } else {
    w.callback.call(scope, value);
  }
};

displayError = function(e, cd, w, option) {
  var args, text;
  args = {
    src: w.src,
    scope: cd.scope,
    locals: cd.locals
  };
  if (w.el) {
    args.element = w.el;
  }
  if (option === 1) {
    text = '$scan, error in callback: ';
  } else {
    text = '$scan, error in expression: ';
  }
  return alight.exceptionHandler(e, text + w.src, args);
};

ErrorValue = function() {};

scanCore = function(topCD, result) {
  var a0, a1, cd, changes, e, error, error1, extraLoop, index, j, last, len, locals, mutated, queue, ref, root, total, value, w;
  root = topCD.root;
  extraLoop = false;
  changes = 0;
  total = 0;
  if (!topCD) {
    return;
  }
  queue = [];
  index = 0;
  cd = topCD;
  while (cd) {
    locals = cd.locals;
    total += cd.watchList.length;
    ref = cd.watchList.slice();
    for (j = 0, len = ref.length; j < len; j++) {
      w = ref[j];
      last = w.value;
      try {
        value = w.exp(locals);
      } catch (error) {
        e = error;
        value = ErrorValue;
      }
      if (last !== value) {
        mutated = false;
        if (w.isArray) {
          a0 = Array.isArray(last);
          a1 = Array.isArray(value);
          if (a0 === a1) {
            if (a0) {
              if (notEqual(last, value)) {
                mutated = true;
                w.value = value.slice();
              }
            } else {
              mutated = true;
              w.value = value;
            }
          } else {
            mutated = true;
            if (a1) {
              w.value = value.slice();
            } else {
              w.value = value;
            }
          }
        } else if (w.deep) {
          if (!alight.utils.equal(last, value, w.deep)) {
            mutated = true;
            w.value = alight.utils.clone(value, w.deep);
          }
        } else {
          mutated = true;
          w.value = value;
        }
        if (mutated) {
          mutated = false;
          if (value === ErrorValue) {
            displayError(e, cd, w);
          } else {
            changes++;
            try {
              if (w.el) {
                if (w.ea) {
                  if (value != null) {
                    w.el.setAttribute(w.ea, value);
                  } else {
                    w.el.removeAttribute(w.ea);
                  }
                } else {
                  w.el.nodeValue = value;
                }
              } else {
                if (last === watchInitValue) {
                  last = void 0;
                }
                if (w.callback.call(cd.scope, value, last) !== '$scanNoChanges') {
                  if (w.extraLoop) {
                    extraLoop = true;
                  }
                }
              }
            } catch (error1) {
              e = error1;
              displayError(e, cd, w, 1);
            }
          }
        }
        if (alight.debug.scan > 1) {
          console.log('changed:', w.src);
        }
      }
    }
    queue.push.apply(queue, cd.children);
    cd = queue[index++];
  }
  result.total = total;
  result.changes = changes;
  result.extraLoop = extraLoop;
};

ChangeDetector.prototype.digest = function() {
  var callback, duration, j, len, mainLoop, onScanOnce, result, root, start, totalChanges;
  root = this.root;
  mainLoop = 10;
  totalChanges = 0;
  if (alight.debug.scan) {
    start = get_time();
  }
  result = {
    total: 0,
    changes: 0,
    extraLoop: false,
    src: '',
    scope: null,
    element: null
  };
  while (mainLoop) {
    mainLoop--;
    root.extraLoop = false;
    if (root.watchers.onScanOnce.length) {
      onScanOnce = root.watchers.onScanOnce.slice();
      root.watchers.onScanOnce.length = 0;
      for (j = 0, len = onScanOnce.length; j < len; j++) {
        callback = onScanOnce[j];
        callback.call(root);
      }
    }
    scanCore(this, result);
    totalChanges += result.changes;
    if (!result.extraLoop && !root.extraLoop && !root.watchers.onScanOnce.length) {
      break;
    }
  }
  if (alight.debug.scan) {
    duration = get_time() - start;
    console.log("$scan: loops: (" + (10 - mainLoop) + "), last-loop changes: " + result.changes + ", watches: " + result.total + " / " + duration + "ms");
  }
  result.mainLoop = mainLoop;
  result.totalChanges = totalChanges;
  return result;
};

ChangeDetector.prototype.scan = function(cfg) {
  var callback, cb, finishScanOnce, j, k, l, len, len1, len2, ref, ref1, result, root;
  root = this.root;
  cfg = cfg || {};
  if (alight.option.zone && !cfg.zone) {
    return;
  }
  if (f$.isFunction(cfg)) {
    cfg = {
      callback: cfg
    };
  }
  if (cfg.callback) {
    root.watchers.finishScanOnce.push(cfg.callback);
  }
  if (cfg.late) {
    if (root.lateScan) {
      return;
    }
    root.lateScan = true;
    alight.nextTick(function() {
      if (root.lateScan) {
        return root.topCD.scan();
      }
    });
    return;
  }
  if (root.status === 'scaning') {
    root.extraLoop = true;
    return;
  }
  root.lateScan = false;
  root.status = 'scaning';
  if (root.topCD) {
    result = root.topCD.digest();
  } else {
    result = {};
  }
  if (result.totalChanges) {
    ref = root.watchers.any;
    for (j = 0, len = ref.length; j < len; j++) {
      cb = ref[j];
      cb();
    }
  }
  root.status = null;
  ref1 = root.watchers.finishScan;
  for (k = 0, len1 = ref1.length; k < len1; k++) {
    callback = ref1[k];
    callback();
  }
  finishScanOnce = root.watchers.finishScanOnce.slice();
  root.watchers.finishScanOnce.length = 0;
  for (l = 0, len2 = finishScanOnce.length; l < len2; l++) {
    callback = finishScanOnce[l];
    callback.call(root);
  }
  if (result.mainLoop === 0) {
    throw 'Infinity loop detected';
  }
  return result;
};

alight.core.ChangeDetector = ChangeDetector;

ChangeDetector.prototype.compile = function(expression, option) {
  return alight.utils.compile.expression(expression, option).fn;
};

ChangeDetector.prototype.setValue = function(name, value) {
  var cd, e, error, error1, fn, j, key, len, locals, msg, ref, rx;
  cd = this;
  fn = cd.compile(name + ' = $value', {
    input: ['$value'],
    no_return: true
  });
  try {
    return fn(cd.locals, value);
  } catch (error) {
    e = error;
    msg = "can't set variable: " + name;
    if (alight.debug.parser) {
      console.warn(msg);
    }
    if (('' + e).indexOf('TypeError') >= 0) {
      rx = name.match(/^([\w\d\.]+)\.[\w\d]+$/);
      if (rx && rx[1]) {
        locals = cd.locals;
        ref = rx[1].split('.');
        for (j = 0, len = ref.length; j < len; j++) {
          key = ref[j];
          if (locals[key] === void 0) {
            locals[key] = {};
          }
          locals = locals[key];
        }
        try {
          fn(cd.locals, value);
          return;
        } catch (error1) {

        }
      }
    }
    return alight.exceptionHandler(e, msg, {
      name: name,
      value: value
    });
  }
};

ChangeDetector.prototype["eval"] = function(exp) {
  var fn;
  fn = this.compile(exp);
  return fn(this.locals);
};

ChangeDetector.prototype.getValue = function(name) {
  return this["eval"](name);
};

(function() {

  /*
      Scope.$watchText(name, callback, config)
      args:
          config.readOnly
          config.onStatic
      result:
          isStatic: flag
          $: watch-object
          value: current value
          exp: expression
          stop: function to stop watch
  
  
      kind of expressions
          simple: {{model}}
          text-directive: {{#dir model}} {{=staticModel}} {{::oneTimeBinding}}
          with function: {{fn()}}
          with filter: {{value | filter}}
   */
  var watchText;
  alight.text.$base = function(option) {
    var cd, dir, env, point, scope;
    point = option.point;
    cd = option.cd;
    scope = cd.scope;
    if (scope.$ns && scope.$ns.text) {
      dir = scope.$ns.text[option.name];
    } else {
      dir = alight.text[option.name];
    }
    if (!dir) {
      throw 'No directive alight.text.' + option.name;
    }
    env = {
      changeDetector: cd,
      setter: function(value) {
        if (!option.update) {
          return;
        }
        if (value === null) {
          point.value = '';
        } else {
          point.value = '' + value;
        }
        return option.update();
      },
      setterRaw: function(value) {
        if (!option.updateRaw) {
          return;
        }
        if (value === null) {
          point.value = '';
        } else {
          point.value = '' + value;
        }
        return option.updateRaw();
      },
      "finally": function(value) {
        if (!option["finally"]) {
          return;
        }
        if (value === null) {
          point.value = '';
        } else {
          point.value = '' + value;
        }
        point.type = 'text';
        option["finally"]();
        option.update = null;
        return option["finally"] = null;
      }
    };
    return dir.call(cd, env.setter, option.exp, scope, env);
  };
  watchText = function(expression, callback, config) {
    var canUseSimpleBuilder, cd, ce, d, data, doFinally, doUpdate, doUpdateRaw, exp, fireCallback, fn, i, j, k, l, len, len1, len2, lname, name, noCache, privateValue, resultValue, st, updatePlanned, value, w, watchCount, watchObject;
    config = config || {};
    cd = this;
    if (alight.debug.watchText) {
      console.log('$watchText', expression);
    }
    st = alight.utils.compile.buildSimpleText(expression, null);
    if (st) {
      cd.watch(expression, callback, {
        watchText: st,
        element: config.element,
        elementAttr: config.elementAttr
      });
      return;
    }
    data = alight.utils.parsText(expression);
    watchCount = 0;
    canUseSimpleBuilder = true;
    noCache = false;
    doUpdate = doUpdateRaw = doFinally = function() {};
    for (j = 0, len = data.length; j < len; j++) {
      d = data[j];
      if (d.type === 'expression') {
        exp = d.list.join('|');
        lname = exp.match(/^([^\w\d\s\$"'\(\u0410-\u044F\u0401\u0451]+)/);
        if (lname) {
          d.isDir = true;
          name = lname[1];
          if (name === '#') {
            i = exp.indexOf(' ');
            if (i < 0) {
              name = exp.substring(1);
              exp = '';
            } else {
              name = exp.slice(1, i);
              exp = exp.slice(i);
            }
          } else {
            exp = exp.substring(name.length);
          }
          alight.text.$base({
            name: name,
            exp: exp,
            cd: cd,
            point: d,
            update: function() {
              return doUpdate();
            },
            updateRaw: function() {
              return doUpdateRaw();
            },
            "finally": function() {
              doUpdate();
              return doFinally();
            }
          });
          noCache = true;
          if (d.type !== 'text') {
            canUseSimpleBuilder = false;
          }
        } else {
          ce = alight.utils.compile.expression(exp, {
            string: true
          });
          if (!ce.filter) {
            d.fn = ce.fn;
            if (!ce.rawExpression) {
              throw 'Error';
            }
            if (ce.isSimple && ce.simpleVariables.length === 0) {
              d.type = 'text';
              d.value = d.fn();
            } else {
              d.re = ce.rawExpression;
              watchCount++;
            }
          } else {
            watchCount++;
            canUseSimpleBuilder = false;
            d.watched = true;
            (function(d) {
              return cd.watch(exp, function(value) {
                if (value == null) {
                  value = '';
                }
                d.value = value;
                return doUpdate();
              });
            })(d);
          }
        }
      }
    }
    if (canUseSimpleBuilder) {
      if (!watchCount) {
        value = '';
        for (k = 0, len1 = data.length; k < len1; k++) {
          d = data[k];
          value += d.value;
        }
        cd.watch('$onScanOnce', function() {
          return execWatchObject(cd.scope, {
            callback: callback,
            el: config.element,
            ea: config.elementAttr
          }, value);
        });
        return;
      }
      if (noCache) {
        st = alight.utils.compile.buildSimpleText(null, data);
      } else {
        st = alight.utils.compile.buildSimpleText(expression, data);
      }
      cd.watch(expression, callback, {
        watchText: {
          fn: st.fn
        },
        element: config.element,
        elementAttr: config.elementAttr
      });
      return;
    }
    watchObject = {
      callback: callback,
      el: config.element,
      ea: config.elementAttr
    };
    data.scope = cd.scope;
    fn = alight.utils.compile.buildText(expression, data);
    doUpdateRaw = function() {
      return execWatchObject(cd.scope, watchObject, fn());
    };
    if (watchCount) {
      w = null;
      resultValue = '';
      doUpdate = function() {
        resultValue = fn();
      };
      doFinally = function() {
        var l, len2;
        i = true;
        for (l = 0, len2 = data.length; l < len2; l++) {
          d = data[l];
          if (d.type === 'expression') {
            i = false;
            break;
          }
        }
        if (!i) {
          return;
        }
        cd.watch('$finishScanOnce', function() {
          return w.stop();
        });
        if (config.onStatic) {
          config.onStatic();
        }
      };
      privateValue = function() {
        return resultValue;
      };
      for (l = 0, len2 = data.length; l < len2; l++) {
        d = data[l];
        if (d.type === 'expression') {
          if (d.isDir || d.watched) {
            continue;
          }
          d.watched = true;
          (function(d, exp) {
            return cd.watch(exp, function(value) {
              if (value == null) {
                value = '';
              }
              d.value = value;
              return doUpdate();
            });
          })(d, d.list.join(' | '));
        }
      }
      doUpdate();
      w = cd.watch(privateValue, callback, {
        element: config.element,
        elementAttr: config.elementAttr
      });
    } else {
      updatePlanned = false;
      fireCallback = function() {
        updatePlanned = false;
        return doUpdateRaw();
      };
      doUpdate = function() {
        if (updatePlanned) {
          return;
        }
        updatePlanned = true;
        return cd.watch('$onScanOnce', fireCallback);
      };
      doUpdate();
    }
  };
  return ChangeDetector.prototype.watchText = watchText;
})();

var _optimizeLineElements;

_optimizeLineElements = {
  TR: 1,
  TD: 1,
  LI: 1
};

alight.utils.optmizeElement = function(element, noRemove) {
  var current, d, data, e, exp, i, j, k, len, len1, lname, mark, n, next, prev, prevLineElement, ref, result, text, wrapped;
  if (element.nodeType === 1) {
    noRemove = noRemove || !alight.option.domOptimizationRemoveEmpty;
    if (element.nodeName === 'PRE') {
      noRemove = true;
    }
    e = element.firstChild;
    if (e && e.nodeType === 3 && !e.nodeValue.trim() && !noRemove) {
      f$.remove(e);
      e = element.firstChild;
    }
    prevLineElement = false;
    while (e) {
      next = e.nextSibling;
      if (prevLineElement && e.nodeType === 3 && !e.nodeValue.trim() && !noRemove) {
        f$.remove(e);
      } else {
        prevLineElement = e.nodeType === 1 && _optimizeLineElements[e.nodeName];
        alight.utils.optmizeElement(e, noRemove);
      }
      e = next;
    }
    e = element.lastChild;
    if (e && e.nodeType === 3 && !e.nodeValue.trim() && !noRemove) {
      f$.remove(e);
    }
  } else if (element.nodeType === 3) {
    text = element.data;
    mark = alight.utils.pars_start_tag;
    i = text.indexOf(mark);
    if (i < 0) {
      return;
    }
    if (text.slice(i + mark.length).indexOf(mark) < 0) {
      return;
    }
    prev = 't';
    current = {
      value: ''
    };
    result = [current];
    data = alight.utils.parsText(text);
    for (j = 0, len = data.length; j < len; j++) {
      d = data[j];
      if (d.type === 'text') {
        current.value += d.value;
      } else {
        exp = d.list.join('|');
        wrapped = alight.utils.pars_start_tag + exp + alight.utils.pars_finish_tag;
        lname = exp.match(/^([^\w\d\s\$"'\(\u0410-\u044F\u0401\u0451]+)/);
        if (lname) {
          if (prev === 't' || prev === 'd') {
            current.value += wrapped;
          } else {
            current = {
              value: wrapped
            };
            result.push(current);
          }
          prev = 'd';
        } else if (d.list.length === 1) {
          if (prev === 't' || prev === 'v') {
            current.value += wrapped;
          } else {
            current = {
              value: wrapped
            };
            result.push(current);
          }
          prev = 'v';
        } else {
          if (prev === 't') {
            current.value += wrapped;
          } else {
            current = {
              value: wrapped
            };
            result.push(current);
          }
        }
      }
    }
    if (result.length < 2) {
      return;
    }
    e = element;
    e.data = result[0].value;
    ref = result.slice(1);
    for (k = 0, len1 = ref.length; k < len1; k++) {
      d = ref[k];
      n = document.createTextNode(d.value);
      f$.after(e, n);
      e = n;
    }
  }
};

var Env, attrBinding, bindComment, bindElement, bindNode, bindText, sortByPriority, testDirective;

(function() {
  var ext;
  alight.hooks.attribute = ext = [];
  ext.push({
    code: 'dataPrefix',
    fn: function() {
      if (this.attrName.slice(0, 5) === 'data-') {
        this.attrName = this.attrName.slice(5);
      }
    }
  });
  ext.push({
    code: 'colonNameSpace',
    fn: function() {
      var name, parts;
      if (this.directive || this.name) {
        return;
      }
      parts = this.attrName.match(/^(\w+)[\-\:](.+)$/);
      if (parts) {
        this.ns = parts[1];
        name = parts[2];
      } else {
        this.ns = '$global';
        name = this.attrName;
      }
      parts = name.match(/^([^\.]+)\.(.*)$/);
      if (parts) {
        name = parts[1];
        this.attrArgument = parts[2];
      }
      this.name = name.replace(/(-\w)/g, function(m) {
        return m.substring(1).toUpperCase();
      });
    }
  });
  ext.push({
    code: 'getGlobalDirective',
    fn: function() {
      var path;
      if (this.directive) {
        return;
      }
      path = alight.d[this.ns];
      if (!path) {
        this.result = 'noNS';
        this.stop = true;
        return;
      }
      this.directive = path[this.name];
      if (!this.directive) {
        if (this.ns === '$global') {
          this.result = 'noNS';
        } else {
          this.result = 'noDirective';
        }
        this.stop = true;
      }
    }
  });
  ext.push({
    code: 'cloneDirective',
    fn: function() {
      var dir, k, name, ns, r, v;
      r = this.directive;
      ns = this.ns;
      name = this.name;
      dir = {};
      if (f$.isFunction(r)) {
        dir.init = r;
      } else if (f$.isObject(r)) {
        for (k in r) {
          v = r[k];
          dir[k] = v;
        }
      } else {
        throw 'Wrong directive: ' + ns + '.' + name;
      }
      dir.priority = r.priority || (alight.priority[ns] && alight.priority[ns][name]) || 0;
      dir.restrict = r.restrict || 'A';
      if (dir.restrict.indexOf(this.attrType) < 0) {
        throw 'Directive has wrong binding (attribute/element): ' + name;
      }
      this.directive = dir;
    }
  });
  return ext.push({
    code: 'preprocessor',
    fn: function() {
      var directive, name, ns;
      ns = this.ns;
      name = this.name;
      directive = this.directive;
      directive.$init = function(cd, element, value, env) {
        var doProcess, dscope;
        doProcess = function() {
          var dp, i, j, l, len;
          l = dscope.procLine;
          for (i = j = 0, len = l.length; j < len; i = ++j) {
            dp = l[i];
            dp.fn.call(dscope);
            if (dscope.isDeferred) {
              dscope.procLine = l.slice(i + 1);
              break;
            }
          }
          dscope.async = true;
          return null;
        };
        dscope = {
          element: element,
          value: value,
          cd: cd,
          env: env,
          ns: ns,
          name: name,
          doBinding: false,
          directive: directive,
          isDeferred: false,
          procLine: alight.hooks.directive,
          makeDeferred: function() {
            dscope.isDeferred = true;
            dscope.doBinding = true;
            dscope.retStopBinding = true;
            dscope.async = false;
            return function() {
              dscope.isDeferred = false;
              if (dscope.async) {
                return doProcess();
              }
            };
          }
        };
        if (directive.stopBinding) {
          env.stopBinding = true;
        }
        doProcess();
        if (dscope.retStopBinding) {
          return 'stopBinding';
        }
      };
    }
  });
})();

(function() {
  var ext;
  ext = alight.hooks.directive;
  ext.push({
    code: 'init',
    fn: function() {
      var result;
      if (this.directive.init) {
        if (alight.debug.directive) {
          if (this.directive.scope) {
            console.warn(this.ns + "-" + this.name + " uses scope and init together, probably you need use link instead of init");
          }
        }
        this.env.changeDetector = this.cd;
        result = this.directive.init.call(this.env, this.cd.scope, this.element, this.value, this.env);
        if (result && result.start) {
          result.start();
        }
      }
    }
  });
  ext.push({
    code: 'templateUrl',
    fn: function() {
      var callback, ds;
      ds = this;
      if (this.directive.templateUrl) {
        callback = this.makeDeferred();
        f$.ajax({
          cache: true,
          url: this.directive.templateUrl,
          success: function(html) {
            ds.directive.template = html;
            return callback();
          },
          error: callback
        });
      }
    }
  });
  ext.push({
    code: 'template',
    fn: function() {
      var el;
      if (this.directive.template) {
        if (this.element.nodeType === 1) {
          this.element.innerHTML = this.directive.template;
        } else if (this.element.nodeType === 8) {
          el = document.createElement('p');
          el.innerHTML = this.directive.template.trim();
          el = el.firstChild;
          f$.after(this.element, el);
          this.element = el;
          this.doBinding = true;
        }
      }
    }
  });
  ext.push({
    code: 'scope',
    fn: function() {
      var childCD, parentCD;
      if (!this.directive.scope) {
        return;
      }
      parentCD = this.cd;
      switch (this.directive.scope) {
        case true:
          childCD = parentCD["new"]({
            $parent: parentCD.scope
          });
          break;
        case 'root':
          childCD = alight.ChangeDetector({
            $parent: parentCD.scope
          });
          parentCD.watch('$destroy', function() {
            return childCD.destroy();
          });
          break;
        default:
          throw 'Wrong scope value: ' + this.directive.scope;
      }
      this.env.parentChangeDetector = parentCD;
      this.cd = childCD;
      this.doBinding = true;
      this.retStopBinding = true;
    }
  });
  ext.push({
    code: 'link',
    fn: function() {
      var result;
      if (this.directive.link) {
        this.env.changeDetector = this.cd;
        result = this.directive.link.call(this.env, this.cd.scope, this.element, this.value, this.env);
        if (result && result.start) {
          result.start();
        }
      }
    }
  });
  return ext.push({
    code: 'scopeBinding',
    fn: function() {
      if (this.doBinding && !this.env.stopBinding) {
        alight.bind(this.cd, this.element, {
          skip_attr: this.env.skippedAttr()
        });
      }
    }
  });
})();

testDirective = (function() {
  var addAttr;
  addAttr = function(attrName, args, base) {
    var attr;
    if (args.attr_type === 'A') {
      attr = base || {};
      attr.priority = alight.priority.$attribute;
      attr.is_attr = true;
      attr.name = attrName;
      attr.attrName = attrName;
      attr.element = args.element;
      args.list.push(attr);
    } else if (args.attr_type === 'M') {
      args.list.push(base);
    }
  };
  return function(attrName, args) {
    var attrHook, attrSelf, j, len, ref;
    if (args.skip_attr.indexOf(attrName) >= 0) {
      return addAttr(attrName, args, {
        skip: true
      });
    }
    attrSelf = {
      attrName: attrName,
      attrType: args.attr_type,
      element: args.element,
      cd: args.cd,
      result: null
    };
    ref = alight.hooks.attribute;
    for (j = 0, len = ref.length; j < len; j++) {
      attrHook = ref[j];
      attrHook.fn.call(attrSelf);
      if (attrSelf.stop) {
        break;
      }
    }
    if (attrSelf.result === 'noNS') {
      addAttr(attrName, args);
      return;
    }
    if (attrSelf.result === 'noDirective') {
      if (args.attr_type === 'E') {
        args.list.push({
          name: attrName,
          priority: -10,
          attrName: attrName,
          noDirective: true
        });
        return;
      }
      addAttr(attrName, args, {
        noDirective: true
      });
      return;
    }
    args.list.push({
      name: attrName,
      directive: attrSelf.directive,
      priority: attrSelf.directive.priority,
      attrName: attrName,
      attrArgument: attrSelf.attrArgument
    });
  };
})();

sortByPriority = function(a, b) {
  if (a.priority === b.priority) {
    return 0;
  }
  if (a.priority > b.priority) {
    return -1;
  } else {
    return 1;
  }
};

attrBinding = function(cd, element, value, attrName) {
  var text;
  text = value;
  if (text.indexOf(alight.utils.pars_start_tag) < 0) {
    return;
  }
  cd.watchText(text, null, {
    element: element,
    elementAttr: attrName
  });
  return true;
};

bindText = function(cd, element, option) {
  var text;
  text = element.data;
  if (text.indexOf(alight.utils.pars_start_tag) < 0) {
    return;
  }
  cd.watchText(text, null, {
    element: element
  });
  return text;
};

bindComment = function(cd, element, option) {
  var args, d, dirName, directive, e, env, error, i, list, text, value;
  text = element.nodeValue.trim();
  if (text.slice(0, 10) !== 'directive:') {
    return;
  }
  text = text.slice(10).trim();
  i = text.indexOf(' ');
  if (i >= 0) {
    dirName = text.slice(0, +(i - 1) + 1 || 9e9);
    value = text.slice(i + 1);
  } else {
    dirName = text;
    value = '';
  }
  args = {
    list: list = [],
    element: element,
    attr_type: 'M',
    cd: cd,
    skip_attr: []
  };
  testDirective(dirName, args);
  d = list[0];
  if (d.noDirective) {
    throw "Comment directive not found: " + dirName;
  }
  directive = d.directive;
  env = new Env({
    element: element,
    attrName: d.attrName,
    attributes: list
  });
  if (alight.debug.directive) {
    console.log('bind', d.attrName, value, d);
  }
  try {
    directive.$init(cd, element, value, env);
  } catch (error) {
    e = error;
    alight.exceptionHandler(e, 'Error in directive: ' + d.name, {
      value: value,
      env: env,
      cd: cd,
      scope: cd.scope,
      element: element
    });
  }
  if (env.skipToElement) {
    return {
      directive: 1,
      skipToElement: env.skipToElement
    };
  }
  return {
    directive: 1,
    skipToElement: null
  };
};

Env = function(option) {
  var k, v;
  for (k in option) {
    v = option[k];
    this[k] = v;
  }
  return this;
};

Env.prototype.takeAttr = function(name, skip) {
  var attr, j, len, ref, value;
  if (arguments.length === 1) {
    skip = true;
  }
  ref = this.attributes;
  for (j = 0, len = ref.length; j < len; j++) {
    attr = ref[j];
    if (attr.attrName !== name) {
      continue;
    }
    if (skip) {
      attr.skip = true;
    }
    value = this.element.getAttribute(name);
    return value || true;
  }
};

Env.prototype.skippedAttr = function() {
  var attr, j, len, ref, results;
  ref = this.attributes;
  results = [];
  for (j = 0, len = ref.length; j < len; j++) {
    attr = ref[j];
    if (!attr.skip) {
      continue;
    }
    results.push(attr.attrName);
  }
  return results;
};

Env.prototype.scan = function(option) {
  return this.changeDetector.scan(option);
};

Env.prototype.on = function(element, eventname, callback) {
  return this.changeDetector.on(element, eventname, callback);
};

Env.prototype.watch = function(name, callback, option) {
  return this.changeDetector.watch(name, callback, option);
};

Env.prototype.watchGroup = function(keys, callback) {
  return this.changeDetector.watchGroup(keys, callback);
};

Env.prototype.watchText = function(expression, callback, option) {
  return this.changeDetector.watchText(expression, callback, option);
};

Env.prototype.getValue = function(name) {
  return this.changeDetector.getValue(name);
};

Env.prototype.setValue = function(name, value) {
  return this.changeDetector.setValue(name, value);
};

Env.prototype["eval"] = function(exp) {
  return this.changeDetector["eval"](exp);
};


/*
    env.new(scope, option)
    env.new(scope, true)  - makes locals
    env.new(true)  - makes locals
 */

Env.prototype["new"] = function(scope, option) {
  if (option === true) {
    option = {
      locals: true
    };
  } else if (scope === true && (option == null)) {
    scope = null;
    option = {
      locals: true
    };
  }
  return this.changeDetector["new"](scope, option);
};


/*
    env.bind(cd, element, option)
    env.bind(cd)
    env.bind(element)
    env.bind(element, cd)
    env.bind(option)
    env.bind(env.new(), option)
 */

Env.prototype.bind = function(_cd, _element, _option) {
  var a, cd, count, element, j, len, option;
  this.stopBinding = true;
  count = 0;
  for (j = 0, len = arguments.length; j < len; j++) {
    a = arguments[j];
    if (a instanceof ChangeDetector) {
      cd = a;
      count += 1;
    }
    if (f$.isElement(a)) {
      element = a;
      count += 1;
    }
  }
  option = arguments[count];
  if (!option) {
    option = {
      skip: this.skippedAttr()
    };
  }
  if (!element) {
    element = this.element;
  }
  if (!cd) {
    cd = this.changeDetector;
  }
  return alight.bind(cd, element, option);
};

bindElement = (function() {
  return function(cd, element, config) {
    var args, attr, attrName, attrValue, bindResult, childElement, childNodes, childOption, d, directive, e, env, error, fastBinding, fb, index, j, len, len1, len2, list, n, o, r, ref, ref1, skipChildren, skipToElement, skip_attr, value;
    fb = {
      attr: [],
      dir: [],
      children: []
    };
    bindResult = {
      directive: 0,
      hook: 0,
      skipToElement: null,
      fb: fb
    };
    config = config || {};
    skipChildren = false;
    skip_attr = config.skip_attr;
    if (config.skip === true) {
      config.skip_top = true;
    } else if (!skip_attr) {
      skip_attr = config.skip || [];
    }
    if (!(skip_attr instanceof Array)) {
      skip_attr = [skip_attr];
    }
    if (!config.skip_top) {
      args = {
        list: list = [],
        element: element,
        skip_attr: skip_attr,
        attr_type: 'E',
        cd: cd
      };
      attrName = element.nodeName.toLowerCase();
      testDirective(attrName, args);
      if (attrName === 'script' || attrName === 'style') {
        skipChildren = true;
      }
      args.attr_type = 'A';
      ref = element.attributes;
      for (j = 0, len = ref.length; j < len; j++) {
        attr = ref[j];
        testDirective(attr.name, args);
      }
      if (config.attachDirective) {
        ref1 = config.attachDirective;
        for (attrName in ref1) {
          attrValue = ref1[attrName];
          testDirective(attrName, args);
        }
      }
      list = list.sort(sortByPriority);
      for (n = 0, len1 = list.length; n < len1; n++) {
        d = list[n];
        if (d.skip) {
          continue;
        }
        if (d.noDirective) {
          throw "Directive not found: " + d.name;
        }
        d.skip = true;
        if (config.attachDirective && config.attachDirective[d.attrName]) {
          value = config.attachDirective[d.attrName];
        } else {
          value = element.getAttribute(d.attrName);
        }
        if (d.is_attr) {
          if (attrBinding(cd, element, value, d.attrName)) {
            fb.attr.push({
              attrName: d.attrName,
              value: value
            });
          }
        } else {
          directive = d.directive;
          env = new Env({
            element: element,
            attrName: d.attrName,
            attrArgument: d.attrArgument || null,
            attributes: list,
            stopBinding: false,
            elementCanBeRemoved: config.elementCanBeRemoved,
            fbElement: config.fbElement
          });
          if (alight.debug.directive) {
            console.log('bind', d.attrName, value, d);
          }
          try {
            if (directive.$init(cd, element, value, env) === 'stopBinding') {
              skipChildren = true;
            }
          } catch (error) {
            e = error;
            alight.exceptionHandler(e, 'Error in directive: ' + d.attrName, {
              value: value,
              env: env,
              cd: cd,
              scope: cd.scope,
              element: element
            });
          }
          if (env.fastBinding) {
            if (f$.isFunction(env.fastBinding)) {
              fastBinding = env.fastBinding;
            } else {
              fastBinding = directive.init;
            }
            fb.dir.push({
              fb: fastBinding,
              attrName: d.attrName,
              value: value,
              attrArgument: env.attrArgument,
              fbData: env.fbData
            });
          } else {
            bindResult.directive++;
          }
          if (env.stopBinding) {
            skipChildren = true;
            break;
          }
          if (env.skipToElement) {
            bindResult.skipToElement = env.skipToElement;
          }
        }
      }
    }
    if (!skipChildren) {
      skipToElement = null;
      childNodes = (function() {
        var len2, o, ref2, results;
        ref2 = element.childNodes;
        results = [];
        for (o = 0, len2 = ref2.length; o < len2; o++) {
          childElement = ref2[o];
          results.push(childElement);
        }
        return results;
      })();
      for (index = o = 0, len2 = childNodes.length; o < len2; index = ++o) {
        childElement = childNodes[index];
        if (!childElement) {
          continue;
        }
        if (skipToElement) {
          if (skipToElement === childElement) {
            skipToElement = null;
          }
          continue;
        }
        if (config.fbElement) {
          childOption = {
            fbElement: config.fbElement.childNodes[index]
          };
        }
        r = bindNode(cd, childElement, childOption);
        bindResult.directive += r.directive;
        bindResult.hook += r.hook;
        skipToElement = r.skipToElement;
        if (r.fb) {
          if (r.fb.text || (r.fb.attr && r.fb.attr.length) || (r.fb.dir && r.fb.dir.length) || (r.fb.children && r.fb.children.length)) {
            fb.children.push({
              index: index,
              fb: r.fb
            });
          }
        }
      }
    }
    return bindResult;
  };
})();

bindNode = function(cd, element, option) {
  var h, j, len, r, ref, result, text;
  result = {
    directive: 0,
    hook: 0,
    skipToElement: null,
    fb: null
  };
  if (alight.hooks.binding.length) {
    ref = alight.hooks.binding;
    for (j = 0, len = ref.length; j < len; j++) {
      h = ref[j];
      result.hook += 1;
      r = h.fn(cd, element, option);
      if (r && r.owner) {
        return result;
      }
    }
  }
  if (element.nodeType === 1) {
    r = bindElement(cd, element, option);
    result.directive += r.directive;
    result.hook += r.hook;
    result.skipToElement = r.skipToElement;
    result.fb = r.fb;
  } else if (element.nodeType === 3) {
    text = bindText(cd, element, option);
    if (text) {
      result.fb = {
        text: text
      };
    }
  } else if (element.nodeType === 8) {
    r = bindComment(cd, element, option);
    if (r) {
      result.directive += r.directive;
      result.skipToElement = r.skipToElement;
    }
  }
  return result;
};

alight.nextTick = (function() {
  var exec, list, timer;
  timer = null;
  list = [];
  exec = function() {
    var callback, dlist, e, error, it, j, len, self;
    timer = null;
    dlist = list.slice();
    list.length = 0;
    for (j = 0, len = dlist.length; j < len; j++) {
      it = dlist[j];
      callback = it[0];
      self = it[1];
      try {
        callback.call(self);
      } catch (error) {
        e = error;
        alight.exceptionHandler(e, '$nextTick, error in function', {
          fn: callback,
          self: self
        });
      }
    }
    return null;
  };
  return function(callback) {
    list.push([callback, this]);
    if (timer) {
      return;
    }
    return timer = setTimeout(exec, 0);
  };
})();

alight.bind = function(changeDetector, element, option) {
  var cb, finishBinding, j, len, lst, result, root;
  if (!changeDetector) {
    throw 'No changeDetector';
  }
  if (!element) {
    throw 'No element';
  }
  option = option || {};
  if (alight.option.domOptimization && !option.noDomOptimization) {
    alight.utils.optmizeElement(element);
  }
  root = changeDetector.root;
  finishBinding = !root.finishBinding_lock;
  if (finishBinding) {
    root.finishBinding_lock = true;
    root.bindingResult = {
      directive: 0,
      hook: 0
    };
  }
  result = bindNode(changeDetector, element, option);
  root.bindingResult.directive += result.directive;
  root.bindingResult.hook += result.hook;
  changeDetector.digest();
  if (finishBinding) {
    root.finishBinding_lock = false;
    lst = root.watchers.finishBinding.slice();
    root.watchers.finishBinding.length = 0;
    for (j = 0, len = lst.length; j < len; j++) {
      cb = lst[j];
      cb();
    }
    result.total = root.bindingResult;
  }
  return result;
};

!function () {
    function zoneJSInvoker(_0, zone, _2, task, _4, args) {
        task.callback.apply(null, args);
        var root = zone._properties.root;
        if (root && root.topCD)
            root.topCD.scan({ zone: true });
    }
    var bind = alight.bind;
    alight.bind = function (cd, el, option) {
        var root = cd.root;
        var oz = alight.option.zone;
        if (oz) {
            var Z = oz === true ? Zone : oz;
            var zone = root.zone;
            if (!zone) {
                root.zone = zone = Z.current.fork({
                    name: Z.current.name + '.x',
                    properties: { root: root },
                    onInvokeTask: zoneJSInvoker
                });
            }
            if (Z.current !== zone)
                return root.zone.run(bind, null, [cd, el, option]);
        }
        return bind(cd, el, option);
    };
}();

alight.bootstrap = function (input, data) {
    if (!input) {
        alight.bootstrap('[al-app]');
        alight.bootstrap('[al\\:app]');
        alight.bootstrap('[data-al-app]');
        return;
    }
    var changeDetector;
    if (input instanceof alight.core.ChangeDetector) {
        changeDetector = input;
        input = data;
    }
    else if (data instanceof alight.core.ChangeDetector) {
        changeDetector = data;
    }
    else if (f$.isFunction(data)) {
        var scope = {};
        changeDetector = alight.ChangeDetector(scope);
        data.call(changeDetector, scope);
    }
    else if (data) {
        changeDetector = alight.ChangeDetector(data);
    }
    if (Array.isArray(input)) {
        var result = void 0;
        for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
            var item = input_1[_i];
            result = alight.bootstrap(item, changeDetector);
        }
        return result;
    }
    if (typeof (input) === 'string') {
        var result = void 0;
        var elements = document.querySelectorAll(input);
        for (var _a = 0, elements_1 = elements; _a < elements_1.length; _a++) {
            var element = elements_1[_a];
            result = alight.bootstrap(element, changeDetector);
        }
        return result;
    }
    if (!changeDetector)
        changeDetector = alight.ChangeDetector();
    if (f$.isElement(input)) {
        var ctrlKey, ctrlName;
        for (var _b = 0, _c = ['al-app', 'al:app', 'data-al-app']; _b < _c.length; _b++) {
            ctrlKey = _c[_b];
            ctrlName = input.getAttribute(ctrlKey);
            input.removeAttribute(ctrlKey);
            if (ctrlName)
                break;
        }
        var option;
        if (ctrlName) {
            option = {
                skip_attr: [ctrlKey],
                attachDirective: {}
            };
            if (alight.d.al.ctrl)
                option.attachDirective['al-ctrl'] = ctrlName;
            else
                option.attachDirective[ctrlName + '!'] = '';
        }
        alight.bind(changeDetector, input, option);
        return changeDetector;
    }
    ;
    alight.exceptionHandler('Error in bootstrap', 'Error input arguments', {
        input: input
    });
};

var clone, equal;

alight.utils.getId = (function() {
  var index, prefix;
  prefix = (function() {
    var d, k, n, p, r, symbols;
    symbols = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    n = Math.floor((new Date()).valueOf() / 1000) - 1388512800;
    r = '';
    while (n > 0) {
      d = Math.floor(n / 62);
      p = d * 62;
      k = n - p;
      n = d;
      r = symbols[k] + r;
    }
    return r;
  })();
  index = 1;
  return function() {
    return prefix + '#' + index++;
  };
})();

alight.utils.clone = clone = function(d, lvl) {
  var i, k, r, v;
  if (lvl == null) {
    lvl = 128;
  }
  if (lvl < 1) {
    return null;
  }
  if (!d) {
    return d;
  }
  if (typeof d === 'object') {
    if (d instanceof Array) {
      r = (function() {
        var j, len, results;
        results = [];
        for (j = 0, len = d.length; j < len; j++) {
          i = d[j];
          results.push(clone(i, lvl - 1));
        }
        return results;
      })();
      return r;
    }
    if (d instanceof Date) {
      return new Date(d.valueOf());
    }
    if (d.nodeType && typeof d.cloneNode === "function") {
      return d;
    }
    r = {};
    for (k in d) {
      v = d[k];
      if (k[0] === '$') {
        continue;
      }
      r[k] = clone(v, lvl - 1);
    }
    return r;
  }
  return d;
};

alight.utils.equal = equal = function(a, b, lvl) {
  var i, j, k, len, set, ta, tb, v;
  if (lvl == null) {
    lvl = 128;
  }
  if (lvl < 1) {
    return true;
  }
  if (!a || !b) {
    return a === b;
  }
  ta = typeof a;
  tb = typeof b;
  if (ta !== tb) {
    return false;
  }
  if (ta === 'object') {
    if (a instanceof Array) {
      if (a.length !== b.length) {
        return false;
      }
      for (i = j = 0, len = a.length; j < len; i = ++j) {
        v = a[i];
        if (!equal(v, b[i], lvl - 1)) {
          return false;
        }
      }
      return true;
    }
    if (a instanceof Date) {
      return a.valueOf() === b.valueOf();
    }
    if (a.nodeType && typeof a.cloneNode === "function") {
      return a === b;
    }
    set = {};
    for (k in a) {
      v = a[k];
      if (k[0] === '$') {
        continue;
      }
      set[k] = true;
      if (!equal(v, b[k], lvl - 1)) {
        return false;
      }
    }
    for (k in b) {
      v = b[k];
      if (k[0] === '$') {
        continue;
      }
      if (set[k]) {
        continue;
      }
      if (!equal(v, a[k], lvl - 1)) {
        return false;
      }
    }
    return true;
  }
  return a === b;
};

alight.exceptionHandler = function(e, title, locals) {
  var output;
  output = [];
  if (title) {
    output.push(title);
  }
  if (e && e.message) {
    output.push(e.message);
  }
  if (locals) {
    output.push(locals);
  }
  if (e) {
    output.push(e.stack ? e.stack : e);
  }
  return console.error.apply(console, output);
};

(function() {
  var assignmentOperator, isChar, isDigit, isSign, reserved, toDict;
  toDict = function() {
    var i, k, len, result;
    result = {};
    for (i = 0, len = arguments.length; i < len; i++) {
      k = arguments[i];
      result[k] = true;
    }
    return result;
  };
  reserved = toDict('instanceof', 'typeof', 'in', 'null', 'true', 'false', 'undefined', 'return');
  isChar = (function() {
    var rx;
    rx = /[a-zA-Z\u0410-\u044F\u0401\u0451_\.\$]/;
    return function(x) {
      return x.match(rx);
    };
  })();
  isDigit = function(x) {
    return x.charCodeAt() >= 48 && x.charCodeAt() <= 57;
  };
  isSign = (function() {
    var chars;
    chars = toDict('+', '-', '>', '<', '=', '&', '|', '^', '!', '~');
    return function(x) {
      return chars[x] || false;
    };
  })();
  assignmentOperator = toDict('=', '+=', '-=', '++', '--', '|=', '^=', '&=', '!=', '<<=', '>>=');
  alight.utils.parsExpression = function(expression, option) {
    var build, convert, data, getFirstPart, inputKeywords, pars, ret, splitVariable, toElvis, uniq;
    option = option || {};
    inputKeywords = toDict.apply(null, option.input || []);
    uniq = 1;
    pars = function(option) {
      var a, an, ap, bracket, child, commitText, digit, filter, freeText, index, leftVariable, level, line, original, result, sign, status, stopKey, stringKey, stringValue, variable, variableChildren;
      line = option.line;
      result = option.result || [];
      index = option.index || 0;
      level = option.level || 0;
      stopKey = option.stopKey || null;
      variable = '';
      leftVariable = null;
      variableChildren = [];
      sign = '';
      digit = '';
      status = false;
      original = '';
      stringKey = '';
      stringValue = '';
      freeText = '';
      bracket = 0;
      filter = null;
      commitText = function() {
        if (freeText) {
          result.push({
            type: 'free',
            value: freeText
          });
        }
        return freeText = '';
      };
      while (index <= line.length) {
        ap = line[index - 1];
        a = line[index++] || '';
        an = line[index];
        if ((status && freeText) || (!a)) {
          commitText();
        }
        if (status === 'string') {
          if (a === stringKey && ap !== '\\') {
            stringValue += a;
            result.push({
              type: 'string',
              value: stringValue
            });
            stringValue = '';
            stringKey = '';
            status = '';
            continue;
          }
          stringValue += a;
          continue;
        } else if (status === 'key') {
          if (isChar(a) || isDigit(a)) {
            variable += a;
            continue;
          }
          if (a === '[') {
            variable += a;
            child = pars({
              line: line,
              index: index,
              level: level + 1,
              stopKey: ']'
            });
            if (!child.stopKeyOk) {
              throw 'Error expression';
            }
            index = child.index;
            variable += '###' + child.uniq + '###]';
            variableChildren.push(child);
            continue;
          } else if (a === '?' && (an === '.' || an === '(' || an === '[')) {
            variable += a;
            continue;
          } else if (a === '(') {
            variable += a;
            child = pars({
              line: line,
              index: index,
              level: level + 1,
              stopKey: ')'
            });
            if (!child.stopKeyOk) {
              throw 'Error expression';
            }
            index = child.index;
            variable += '###' + child.uniq + '###)';
            variableChildren.push(child);
            continue;
          }
          leftVariable = {
            type: 'key',
            value: variable,
            start: index - variable.length - 1,
            finish: index - 1,
            children: variableChildren
          };
          result.push(leftVariable);
          status = '';
          variable = '';
          variableChildren = [];
        } else if (status === 'sign') {
          if (isSign(a)) {
            sign += a;
            continue;
          }
          if (sign === '|' && level === 0 && bracket === 0) {
            filter = line.substring(index - 1);
            index = line.length + 1;
            continue;
          }
          if (assignmentOperator[sign] || (sign[0] === '=' && sign[1] !== '=')) {
            leftVariable.assignment = true;
          }
          result.push({
            type: 'sign',
            value: sign
          });
          status = '';
          sign = '';
        } else if (status === 'digit') {
          if (isDigit(a) || a === '.') {
            digit += a;
            continue;
          }
          result.push({
            type: 'digit',
            value: digit
          });
          digit = '';
        }
        if (isChar(a)) {
          status = 'key';
          variable += a;
          continue;
        }
        if (isSign(a)) {
          status = 'sign';
          sign += a;
          continue;
        }
        if (isDigit(a)) {
          status = 'digit';
          digit += a;
          continue;
        }
        if (a === '"' || a === "'") {
          stringKey = a;
          status = 'string';
          stringValue += a;
          continue;
        }
        if (a === stopKey) {
          commitText();
          return {
            result: result,
            index: index,
            stopKeyOk: true,
            uniq: uniq++
          };
        }
        if (a === '(') {
          bracket++;
        }
        if (a === ')') {
          bracket--;
        }
        if (a === '{') {
          commitText();
          child = pars({
            line: line,
            index: index,
            level: level + 1,
            stopKey: '}'
          });
          result.push({
            type: '{}',
            child: child
          });
          index = child.index;
          continue;
        }
        if (a === ':' && stopKey === '}') {
          leftVariable.type = 'free';
        }
        freeText += a;
      }
      commitText();
      return {
        result: result,
        index: index,
        filter: filter
      };
    };
    data = pars({
      line: expression
    });
    ret = {
      isSimple: !data.filter,
      simpleVariables: []
    };
    if (data.filter) {
      ret.expression = expression.substring(0, expression.length - data.filter.length - 1);
      ret.filter = data.filter;
    } else {
      ret.expression = expression;
    }
    splitVariable = function(variable) {
      var parts;
      parts = variable.split(/[\.\[\(\?]/);
      return {
        count: parts.length,
        firstPart: parts[0]
      };
    };
    toElvis = function(name, isReserved) {
      if (isReserved) {
        return '($$=' + name + ',$$==null)?undefined:';
      } else {
        return '($$=$$' + name + ',$$==null)?undefined:';
      }
    };
    getFirstPart = function(name) {
      return name.split(/[\.\[\(\?]/)[0];
    };
    convert = function(variable) {
      var firstPart, full, i, isReserved, last, len, p, parts, ref, result;
      if (variable === 'this') {
        return '$$scope';
      }
      firstPart = getFirstPart(variable);
      isReserved = reserved[firstPart] || inputKeywords[firstPart];
      if (firstPart === 'this') {
        variable = '$$scope' + variable.slice(4);
        isReserved = true;
      }
      parts = variable.split('?');
      if (parts.length === 1) {
        if (isReserved) {
          return variable;
        }
        return '$$scope.' + variable;
      }
      if (isReserved) {
        result = toElvis(parts[0], true);
        full = parts[0];
      } else {
        result = toElvis('scope.' + parts[0]);
        full = 'scope.' + parts[0];
      }
      ref = parts.slice(1, parts.length - 1);
      for (i = 0, len = ref.length; i < len; i++) {
        p = ref[i];
        if (p[0] === '(') {
          result += toElvis(full + p, isReserved);
        } else {
          result += toElvis(p);
          full += p;
        }
      }
      last = parts[parts.length - 1];
      if (last[0] === '(') {
        if (!isReserved) {
          result += '$$';
        }
        result += full + last;
      } else {
        result += '$$' + last;
      }
      return '(' + result + ')';
    };
    build = function(part) {
      var c, childName, d, i, j, key, len, len1, name, ref, ref1, result, sv;
      result = '';
      ref = part.result;
      for (i = 0, len = ref.length; i < len; i++) {
        d = ref[i];
        if (d.type === 'key') {
          if (d.assignment) {
            sv = splitVariable(d.value);
            if (sv.firstPart === 'this') {
              name = '$$scope' + d.value.substring(4);
            } else if (inputKeywords[sv.firstPart]) {
              name = d.value;
            } else if (sv.count < 2) {
              name = '($$scope.$$root || $$scope).' + d.value;
            } else {
              name = '$$scope.' + d.value;
            }
            ret.isSimple = false;
          } else {
            if (reserved[d.value]) {
              name = d.value;
            } else {
              name = convert(d.value);
              ret.simpleVariables.push(name);
            }
          }
          if (d.children.length) {
            ref1 = d.children;
            for (j = 0, len1 = ref1.length; j < len1; j++) {
              c = ref1[j];
              key = "###" + c.uniq + "###";
              childName = build(c);
              name = name.split(key).join(childName);
            }
          }
          result += name;
          continue;
        }
        if (d.type === '{}') {
          result += '{' + build(d.child) + '}';
          continue;
        }
        result += d.value;
      }
      return result;
    };
    ret.result = build(data);
    if (alight.debug.parser) {
      console.log(expression, ret);
    }
    return ret;
  };
  alight.utils.parsFilter = function(text) {
    var d, r, result;
    result = [];
    text = text.trim();
    while (text) {
      d = text.match(/^(\w+)([^\w])(.*)$/);
      if (d) {
        if (d[2] === '|') {
          result.push({
            name: d[1],
            args: [],
            raw: ''
          });
          text = d[3];
        } else {
          r = alight.utils.parsArguments(d[3], {
            stop: '|'
          });
          result.push({
            name: d[1],
            args: r.result,
            raw: d[3].slice(0, r.length)
          });
          text = d[3].slice(r.length + 1).trim();
        }
      } else {
        d = text.match(/^(\w+)$/);
        if (!d) {
          return null;
        }
        result.push({
          name: d[1],
          args: [],
          raw: ''
        });
        break;
      }
    }
    return {
      result: result
    };
  };
  return alight.utils.parsArguments = function(text, option) {
    var a, arg, args, bracket, index, push, string0, string1;
    option = option || {};
    index = 0;
    args = [];
    arg = '';
    bracket = 0;
    string0 = false;
    string1 = false;
    push = function() {
      if (arg) {
        args.push(arg);
        arg = '';
      }
    };
    while (index <= text.length) {
      a = text[index] || '';
      index++;
      if (string0) {
        arg += a;
        if (a === '"') {
          string0 = false;
        }
        continue;
      }
      if (string1) {
        arg += a;
        if (a === "'") {
          string1 = false;
        }
        continue;
      }
      if (a === '"') {
        arg += a;
        string0 = true;
        continue;
      }
      if (a === "'") {
        arg += a;
        string1 = true;
        continue;
      }
      if (bracket) {
        arg += a;
        if (a === '(') {
          bracket++;
        }
        if (a === ')') {
          bracket--;
        }
        continue;
      }
      if (a === ' ' || a === ',') {
        push();
        continue;
      }
      if (option.stop && option.stop === a) {
        push();
        break;
      }
      if (a === '(') {
        bracket = 1;
      }
      arg += a;
    }
    push();
    return {
      result: args,
      length: index - 1
    };
  };
})();

(function() {
  var cache, clone, rawParsText;
  alight.utils.pars_start_tag = '{{';
  alight.utils.pars_finish_tag = '}}';
  rawParsText = function(line) {
    var find_exp, finish_tag, get_part, index, pars, prev_index, result, rexp, start_tag;
    start_tag = alight.utils.pars_start_tag;
    finish_tag = alight.utils.pars_finish_tag;
    result = [];
    index = 0;
    prev_index = 0;
    get_part = function(count) {
      var r;
      count = count || 1;
      r = line.substring(prev_index, index - count);
      prev_index = index;
      return r;
    };
    rexp = null;
    pars = function(lvl, stop, force) {
      var a, a2, an, prev;
      if (!lvl) {
        rexp = {
          type: 'expression',
          list: []
        };
        result.push(rexp);
      }
      prev = null;
      a = null;
      while (index < line.length) {
        prev = a;
        a = line[index];
        index += 1;
        a2 = prev + a;
        an = line[index];
        if (a === stop) {
          return;
        }
        if (force) {
          continue;
        }
        if (a2 === finish_tag && lvl === 0) {
          rexp.list.push(get_part(2));
          return true;
        }
        if (a === '(') {
          pars(lvl + 1, ')');
        } else if (a === '{') {
          pars(lvl + 1, '}');
        } else if (a === '"') {
          pars(lvl + 1, '"', true);
        } else if (a === "'") {
          pars(lvl + 1, "'", true);
        } else if (a === '|') {
          if (lvl === 0) {
            if (an === '|') {
              index += 1;
            } else {
              rexp.list.push(get_part());
            }
          }
        }
      }
    };
    find_exp = function() {
      var a, a2, prev, r, text;
      prev = null;
      a = null;
      while (index < line.length) {
        prev = a;
        a = line[index];
        index += 1;
        a2 = prev + a;
        if (a2 === start_tag) {
          text = get_part(2);
          if (text) {
            result.push({
              type: 'text',
              value: text
            });
          }
          if (!pars(0)) {
            throw 'Wrong expression' + line;
          }
          a = null;
        }
      }
      r = get_part(-1);
      if (r) {
        return result.push({
          type: 'text',
          value: r
        });
      }
    };
    find_exp();
    if (alight.debug.parser) {
      console.log('parsText', result);
    }
    return result;
  };
  cache = {};
  clone = function(result) {
    var i, k, resp;
    resp = (function() {
      var j, len, results;
      results = [];
      for (j = 0, len = result.length; j < len; j++) {
        i = result[j];
        k = {
          type: i.type,
          value: i.value
        };
        if (i.list) {
          k.list = i.list.slice();
        }
        results.push(k);
      }
      return results;
    })();
    return resp;
  };
  return alight.utils.parsText = function(line) {
    var result;
    result = cache[line];
    if (!result) {
      cache[line] = result = rawParsText(line);
    }
    return clone(result);
  };
})();


/*
    src - expression
    cfg:
        scope
        hash        
        no_return   - method without return (exec)
        string      - method will return result as string
        input       - list of input arguments
        rawExpression

    return {
        fn
        rawExpression
        filters
        isSimple
        simpleVariables
    }
 */
(function() {
  var self;
  alight.utils.compile = self = {};
  self.cache = {};
  self.Function = Function;

  /*
  compile expression
      no_return
      input
      string
  
  return
      fn
      rawExpression
  
      result
      filters
      isSimple
      simpleVariables
      expression
   */
  self.expression = function(src, cfg) {
    var args, e, error, exp, fn, funcCache, hash, no_return, result;
    cfg = cfg || {};
    src = src.trim();
    hash = src + '#';
    hash += cfg.no_return ? '+' : '-';
    hash += cfg.string ? 's' : 'v';
    if (cfg.input) {
      hash += cfg.input.join(',');
    }
    funcCache = self.cache[hash];
    if (funcCache) {
      return funcCache;
    }
    funcCache = alight.utils.parsExpression(src, {
      input: cfg.input
    });
    exp = funcCache.result;
    no_return = cfg.no_return || false;
    if (no_return) {
      result = "var $$;" + exp;
    } else {
      if (cfg.string && !funcCache.filter) {
        result = "var $$, __ = (" + exp + "); return '' + (__ || (__ == null?'':__))";
        funcCache.rawExpression = "(__=" + exp + ") || (__ == null?'':__)";
      } else {
        result = "var $$;return (" + exp + ")";
      }
    }
    try {
      if (cfg.input) {
        args = cfg.input.slice();
        args.unshift('$$scope');
        args.push(result);
        fn = self.Function.apply(null, args);
      } else {
        fn = self.Function('$$scope', result);
      }
    } catch (error) {
      e = error;
      alight.exceptionHandler(e, 'Wrong expression: ' + src, {
        src: src,
        cfg: cfg
      });
      throw 'Wrong expression: ' + exp;
    }
    funcCache.fn = fn;
    return self.cache[hash] = funcCache;
  };
  self.cacheText = {};
  self.buildText = function(text, data) {
    var d, escapedValue, fn, i, index, len, result;
    fn = self.cacheText[text];
    if (fn) {
      return function() {
        return fn.call(data);
      };
    }
    result = [];
    for (index = i = 0, len = data.length; i < len; index = ++i) {
      d = data[index];
      if (d.type === 'expression') {
        if (d.fn) {
          result.push("this[" + index + "].fn(this.scope)");
        } else {
          result.push("((x=this[" + index + "].value) || (x == null?'':x))");
        }
      } else if (d.value) {
        escapedValue = d.value.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n");
        result.push('"' + escapedValue + '"');
      }
    }
    result = result.join(' + ');
    fn = self.Function("var x; return (" + result + ")");
    self.cacheText[text] = fn;
    return function() {
      return fn.call(data);
    };
  };
  self.cacheSimpleText = {};
  return self.buildSimpleText = function(text, data) {
    var d, escapedValue, fn, i, index, item, len, result, simpleVariables;
    item = text ? self.cacheSimpleText[text] : null;
    if (item || !data) {
      return item || null;
    }
    result = [];
    simpleVariables = [];
    for (index = i = 0, len = data.length; i < len; index = ++i) {
      d = data[index];
      if (d.type === 'expression') {
        result.push("(" + d.re + ")");
        if (d.simpleVariables) {
          simpleVariables.push.apply(simpleVariables, d.simpleVariables);
        }
      } else if (d.value) {
        escapedValue = d.value.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n");
        result.push('"' + escapedValue + '"');
      }
    }
    result = result.join(' + ');
    fn = self.Function('$$scope', "var $$, __; return (" + result + ")");
    item = {
      fn: fn,
      simpleVariables: simpleVariables
    };
    if (text) {
      self.cacheSimpleText[text] = item;
    }
    return item;
  };
})();

var FastBinding, compileText, pathToEl;

pathToEl = function(path) {
  var i, j, len, result;
  if (!path.length) {
    return 'el';
  }
  result = 'el';
  for (j = 0, len = path.length; j < len; j++) {
    i = path[j];
    result += ".childNodes[" + i + "]";
  }
  return result;
};

compileText = function(text) {
  var ce, d, data, j, key, len, st;
  data = alight.utils.parsText(text);
  for (j = 0, len = data.length; j < len; j++) {
    d = data[j];
    if (d.type !== 'expression') {
      continue;
    }
    if (d.list.length > 1) {
      return null;
    }
    key = d.list[0];
    if (key[0] === '#') {
      return null;
    }
    if (key[0] === '=') {
      return null;
    }
    if (key.slice(0, 2) === '::') {
      return null;
    }
    ce = alight.utils.compile.expression(key, {
      string: true
    });
    if (!ce.rawExpression) {
      throw 'Error';
    }
    d.re = ce.rawExpression;
  }
  st = alight.utils.compile.buildSimpleText(text, data);
  return st.fn;
};

alight.core.fastBinding = function(bindResult) {
  if (!alight.option.fastBinding) {
    return;
  }
  if (bindResult.directive || bindResult.hook || !bindResult.fb) {
    return;
  }
  return new FastBinding(bindResult);
};

FastBinding = function(bindResult) {
  var path, self, source, walk;
  self = this;
  source = [];
  self.fastWatchFn = [];
  path = [];
  walk = function(fb, deep) {
    var d, fn, it, j, k, key, l, len, len1, len2, ref, ref1, ref2, rel, rtext, text;
    if (fb.dir) {
      rel = pathToEl(path);
      ref = fb.dir;
      for (j = 0, len = ref.length; j < len; j++) {
        d = ref[j];
        source.push('s.dir(' + self.fastWatchFn.length + ', ' + rel + ');');
        self.fastWatchFn.push(d);
      }
    }
    if (fb.attr) {
      ref1 = fb.attr;
      for (k = 0, len1 = ref1.length; k < len1; k++) {
        it = ref1[k];
        text = it.value;
        key = it.attrName;
        rel = pathToEl(path);
        fn = compileText(text);
        rtext = text.replace(/"/g, '\\"').replace(/\n/g, '\\n');
        if (fn) {
          source.push('s.fw("' + rtext + '", ' + self.fastWatchFn.length + ', ' + rel + ', "' + key + '");');
          self.fastWatchFn.push(fn);
        } else {
          source.push("s.wt('" + rtext + "', " + rel + ", '" + key + "');");
        }
      }
    }
    if (fb.text) {
      rel = pathToEl(path);
      fn = compileText(fb.text);
      rtext = fb.text.replace(/"/g, '\\"').replace(/\n/g, '\\n');
      if (fn) {
        source.push('s.fw("' + rtext + '", ' + self.fastWatchFn.length + ', ' + rel + ');');
        self.fastWatchFn.push(fn);
      } else {
        source.push('s.wt("' + rtext + '", ' + rel + ');');
      }
    }
    if (fb.children) {
      ref2 = fb.children;
      for (l = 0, len2 = ref2.length; l < len2; l++) {
        it = ref2[l];
        path.length = deep + 1;
        path[deep] = it.index;
        walk(it.fb, deep + 1);
      }
    }
  };
  walk(bindResult.fb, 0);
  source = source.join('\n');
  self.resultFn = alight.utils.compile.Function('s', 'el', 'f$', source);
  return this;
};

FastBinding.prototype.bind = function(cd, element) {
  this.currentCD = cd;
  this.resultFn(this, element, f$);
};

FastBinding.prototype.dir = function(fnIndex, el) {
  var cd, d, env, r;
  d = this.fastWatchFn[fnIndex];
  cd = this.currentCD;
  env = new Env({
    attrName: d.attrName,
    attrArgument: d.attrArgument,
    changeDetector: cd,
    fbData: d.fbData
  });
  r = d.fb.call(env, cd.scope, el, d.value, env);
  if (r && r.start) {
    r.start();
  }
};

FastBinding.prototype.fw = function(text, fnIndex, element, attr) {
  var cd, fn, value, w;
  cd = this.currentCD;
  fn = this.fastWatchFn[fnIndex];
  value = fn(cd.locals);
  w = {
    isStatic: false,
    isArray: false,
    extraLoop: false,
    deep: false,
    value: value,
    callback: null,
    exp: fn,
    src: text,
    onStop: null,
    el: element,
    ea: attr || null
  };
  cd.watchList.push(w);
  execWatchObject(cd.scope, w, value);
};

FastBinding.prototype.wt = function(expression, element, attr) {
  this.currentCD.watchText(expression, null, {
    element: element,
    elementAttr: attr
  });
};

(function() {
  var eventOption, execute, formatModifier, getValue, handler, keyCodes, makeEvent, setKeyModifier;
  alight.hooks.attribute.unshift({
    code: 'events',
    fn: function() {
      var d;
      d = this.attrName.match(/^\@([\w\.\-]+)$/);
      if (!d) {
        return;
      }
      this.ns = 'al';
      this.name = 'on';
      this.attrArgument = d[1];
    }
  });

  /*
  eventModifier
      = 'keydown blur'
      = ['keydown', 'blur']
      =
          event: string or list
          fn: (event, env) ->
   */
  alight.hooks.eventModifier = {};
  setKeyModifier = function(name, key) {
    return alight.hooks.eventModifier[name] = {
      event: ['keydown', 'keypress', 'keyup'],
      fn: function(event, env) {
        if (!event[key]) {
          env.stop = true;
        }
      }
    };
  };
  setKeyModifier('alt', 'altKey');
  setKeyModifier('control', 'ctrlKey');
  setKeyModifier('ctrl', 'ctrlKey');
  setKeyModifier('meta', 'metaKey');
  setKeyModifier('shift', 'shiftKey');
  alight.hooks.eventModifier.self = function(event, env) {
    if (event.target !== env.element) {
      return env.stop = true;
    }
  };
  alight.hooks.eventModifier.once = {
    beforeExec: function(event, env) {
      return env.unbind();
    }
  };
  formatModifier = function(modifier, filterByEvents) {
    var e, i, inuse, len, ref, result;
    result = {};
    if (typeof modifier === 'string') {
      result.event = modifier;
    } else if (typeof modifier === 'object' && modifier.event) {
      result.event = modifier.event;
    }
    if (typeof result.event === 'string') {
      result.event = result.event.split(/\s+/);
    }
    if (filterByEvents) {
      if (result.event) {
        inuse = false;
        ref = result.event;
        for (i = 0, len = ref.length; i < len; i++) {
          e = ref[i];
          if (filterByEvents.indexOf(e) >= 0) {
            inuse = true;
            break;
          }
        }
        if (!inuse) {
          return null;
        }
      }
    }
    if (f$.isFunction(modifier)) {
      result.fn = modifier;
    } else if (modifier.fn) {
      result.fn = modifier.fn;
    }
    if (modifier.beforeExec) {
      result.beforeExec = modifier.beforeExec;
    }
    if (modifier.init) {
      result.init = modifier.init;
    }
    return result;
  };
  alight.d.al.on = function(scope, element, expression, env) {
    var evConstructor, eventName;
    if (!env.attrArgument) {
      return;
    }
    if (alight.option.removeAttribute) {
      element.removeAttribute(env.attrName);
      if (env.fbElement) {
        env.fbElement.removeAttribute(env.attrName);
      }
    }
    eventName = env.attrArgument.split('.')[0];
    evConstructor = function() {};
    evConstructor.prototype = makeEvent(env.attrArgument, eventOption[eventName]);
    if (expression) {
      evConstructor.prototype.fn = env.changeDetector.compile(expression, {
        no_return: true,
        input: ['$event', '$element', '$value']
      });
    }
    evConstructor.prototype.expression = expression;
    env.fastBinding = function(scope, element, expression, env) {
      var callback, cd, e, ev, i, len, ref;
      ev = new evConstructor;
      ev.scope = scope;
      ev.element = element;
      ev.cd = cd = env.changeDetector;
      callback = function(e) {
        return handler(ev, e);
      };
      ref = ev.eventList;
      for (i = 0, len = ref.length; i < len; i++) {
        e = ref[i];
        f$.on(element, e, callback);
      }
      if (ev.initFn) {
        ev.initFn(scope, element, expression, env);
      }
      ev.unbind = function() {
        var j, len1, ref1;
        ref1 = ev.eventList;
        for (j = 0, len1 = ref1.length; j < len1; j++) {
          e = ref1[j];
          f$.off(element, e, callback);
        }
      };
      env.changeDetector.watch('$destroy', ev.unbind);
    };
    env.fastBinding(scope, element, expression, env);
  };
  keyCodes = {
    enter: 13,
    tab: 9,
    "delete": 46,
    backspace: 8,
    esc: 27,
    space: 32,
    up: 38,
    down: 40,
    left: 37,
    right: 39
  };
  eventOption = {
    click: {
      stop: true,
      prevent: true
    },
    dblclick: {
      stop: true,
      prevent: true
    },
    submit: {
      stop: true,
      prevent: true
    },
    keyup: {
      filterByKey: true
    },
    keypress: {
      filterByKey: true
    },
    keydown: {
      filterByKey: true
    }
  };
  makeEvent = function(attrArgument, option) {
    var args, ev, eventName, filterByKey, i, k, len, modifier, ref;
    option = option || {};
    ev = {
      attrArgument: attrArgument,
      throttle: null,
      throttleTime: 0,
      debounce: null,
      debounceId: null,
      initFn: null,
      eventList: null,
      stop: option.stop || false,
      prevent: option.prevent || false,
      scan: true,
      modifiers: []
    };
    args = attrArgument.split('.');
    eventName = args[0];
    filterByKey = null;
    modifier = alight.hooks.eventModifier[eventName];
    if (modifier) {
      modifier = formatModifier(modifier);
      if (modifier.event) {
        ev.eventList = modifier.event;
        if (modifier.fn) {
          ev.modifiers.push(modifier);
        }
        if (modifier.init) {
          ev.initFn = modifier.init;
        }
      }
    }
    if (!ev.eventList) {
      ev.eventList = [eventName];
    }
    ref = args.slice(1);
    for (i = 0, len = ref.length; i < len; i++) {
      k = ref[i];
      if (k === 'stop') {
        ev.stop = true;
        continue;
      }
      if (k === 'prevent') {
        ev.prevent = true;
        continue;
      }
      if (k === 'nostop') {
        ev.stop = false;
        continue;
      }
      if (k === 'noprevent') {
        ev.prevent = false;
        continue;
      }
      if (k === 'noscan') {
        ev.scan = false;
        continue;
      }
      if (k.substring(0, 9) === 'throttle-') {
        ev.throttle = Number(k.substring(9));
        continue;
      }
      if (k.substring(0, 9) === 'debounce-') {
        ev.debounce = Number(k.substring(9));
        continue;
      }
      modifier = alight.hooks.eventModifier[k];
      if (modifier) {
        modifier = formatModifier(modifier, ev.eventList);
        if (modifier) {
          ev.modifiers.push(modifier);
        }
        continue;
      }
      if (!option.filterByKey) {
        continue;
      }
      if (filterByKey === null) {
        filterByKey = {};
      }
      if (keyCodes[k]) {
        k = keyCodes[k];
      }
      filterByKey[k] = true;
    }
    ev.filterByKey = filterByKey;
    return ev;
  };
  getValue = function(ev, event) {
    var element;
    element = ev.element;
    if (element.type === 'checkbox') {
      return element.checked;
    } else if (element.type === 'radio') {
      return element.value || element.checked;
    } else if (event.component) {
      return event.value;
    } else {
      return element.value;
    }
  };
  execute = function(ev, event) {
    var error, error1, i, len, modifier, ref;
    ref = ev.modifiers;
    for (i = 0, len = ref.length; i < len; i++) {
      modifier = ref[i];
      if (modifier.beforeExec) {
        modifier.beforeExec(event, ev);
      }
    }
    if (ev.fn) {
      try {
        ev.fn(ev.cd.locals, event, ev.element, getValue(ev, event));
      } catch (error1) {
        error = error1;
        alight.exceptionHandler(error, "Error in event: " + ev.attrArgument + " = " + ev.expression, {
          attr: ev.attrArgument,
          exp: ev.expression,
          scope: ev.scope,
          cd: ev.cd,
          element: ev.element,
          event: event
        });
      }
    }
    if (ev.scan) {
      ev.cd.scan();
    }
  };
  return handler = function(ev, event) {
    var EV, env, i, len, modifier, ref;
    if (ev.filterByKey) {
      if (!ev.filterByKey[event.keyCode]) {
        return;
      }
    }
    if (ev.modifiers.length) {
      EV = function() {};
      EV.prototype = ev;
      env = new EV;
      env.stop = false;
      ref = ev.modifiers;
      for (i = 0, len = ref.length; i < len; i++) {
        modifier = ref[i];
        if (modifier.fn) {
          modifier.fn(event, env);
          if (env.stop) {
            return;
          }
        }
      }
    }
    if (ev.prevent) {
      event.preventDefault();
    }
    if (ev.stop) {
      event.stopPropagation();
    }
    if (ev.debounce) {
      if (ev.debounceId) {
        clearTimeout(ev.debounceId);
      }
      ev.debounceId = setTimeout(function() {
        ev.debounceId = null;
        return execute(ev, event);
      }, ev.debounce);
    } else if (ev.throttle) {
      if (ev.throttleTime < Date.now()) {
        ev.throttleTime = Date.now() + ev.throttle;
        execute(ev, event);
      }
    } else {
      execute(ev, event);
    }
  };
})();

alight.hooks.attribute.unshift({
    code: 'directDirective',
    fn: function () {
        var d = this.attrName.match(/^(.*)\!$/);
        if (!d)
            return;
        var name = d[1].replace(/(-\w)/g, function (m) {
            return m.substring(1).toUpperCase();
        });
        var fn = this.cd.locals[name] || alight.ctrl[name] || alight.option.globalController && window[name];
        if (f$.isFunction(fn)) {
            this.directive = function (scope, element, value, env) {
                var cd = env.changeDetector;
                if (value) {
                    var args = alight.utils.parsArguments(value);
                    var values = Array(args.result.length);
                    for (var i = 0; i < args.result.length; i++) {
                        values[i] = alight.utils.compile.expression(args.result[i], {
                            input: ['$element', '$env']
                        }).fn(cd.locals, element, env);
                    }
                    fn.apply(cd, values);
                }
                else {
                    fn.call(cd, scope, element, value, env);
                }
            };
        }
        else {
            this.result = 'noDirective';
            this.stop = true;
        }
    }
});

function setElementToName(scope, element, value, env) {
    env.setValue(env.attrArgument, element);
}
;
alight.hooks.attribute.unshift({
    code: 'elementVariable',
    fn: function () {
        var d = this.attrName.match(/^#([\w\.]*)$/);
        if (!d)
            return;
        this.directive = setElementToName;
        this.attrArgument = d[1];
    }
});

alight.d.al.value = function(scope, element, variable, env) {
  var updateModel, watch;
  env.fastBinding = true;
  updateModel = function() {
    env.setValue(variable, element.value);
    watch.refresh();
    env.scan();
  };
  env.on(element, 'input', updateModel);
  env.on(element, 'change', updateModel);
  return watch = env.watch(variable, function(value) {
    if (value == null) {
      value = '';
    }
    element.value = value;
    return '$scanNoChanges';
  });
};

alight.d.al.checked = function (scope, element, name, env) {
    var fbData = env.fbData = {
        opt: {},
        watch: []
    };
    function eattr(attrName) {
        var result = env.takeAttr(attrName);
        if (alight.option.removeAttribute) {
            element.removeAttribute(attrName);
            if (env.fbElement)
                env.fbElement.removeAttribute(attrName);
        }
        return result;
    }
    function takeAttr(name, attrName) {
        var text = eattr(attrName);
        if (text) {
            fbData.opt[name] = text;
            return true;
        }
        else {
            var exp = eattr(':' + attrName) || eattr('al-attr.' + attrName);
            if (exp) {
                fbData.watch.push([exp, name]);
                return true;
            }
        }
    }
    function applyOpt(opt, env, updateDOM) {
        for (var k in env.fbData.opt) {
            opt[k] = env.fbData.opt[k];
        }
        var _loop_1 = function(w) {
            var name_1 = w[1];
            env.watch(w[0], function (value) {
                opt[name_1] = value;
                updateDOM();
            });
        };
        for (var _i = 0, _a = env.fbData.watch; _i < _a.length; _i++) {
            var w = _a[_i];
            _loop_1(w);
        }
    }
    if (takeAttr('value', 'value')) {
        env.fastBinding = function (scope, element, name, env) {
            var watch, array = null;
            function updateDOM() {
                element.checked = array && array.indexOf(opt.value) >= 0;
                return '$scanNoChanges';
            }
            ;
            var opt = {};
            applyOpt(opt, env, updateDOM);
            watch = env.watch(name, function (input) {
                array = input;
                if (!Array.isArray(array))
                    array = null;
                updateDOM();
            }, { isArray: true });
            env.on(element, 'change', function () {
                if (!array) {
                    array = [];
                    env.setValue(name, array);
                }
                if (element.checked) {
                    if (array.indexOf(opt.value) < 0)
                        array.push(opt.value);
                }
                else {
                    var i = array.indexOf(opt.value);
                    if (i >= 0)
                        array.splice(i, 1);
                }
                watch.refresh();
                env.scan();
                return;
            });
        };
    }
    else {
        takeAttr('true', 'true-value');
        takeAttr('false', 'false-value');
        env.fastBinding = function (scope, element, name, env) {
            var value, watch;
            var opt = {
                true: true,
                false: false
            };
            function updateDOM() {
                element.checked = value === opt.true;
                return '$scanNoChanges';
            }
            ;
            applyOpt(opt, env, updateDOM);
            watch = env.watch(name, function (input) {
                value = input;
                updateDOM();
            });
            env.on(element, 'change', function () {
                value = element.checked ? opt.true : opt.false;
                env.setValue(name, value);
                watch.refresh();
                env.scan();
                return;
            });
        };
    }
    env.fastBinding(scope, element, name, env);
};

alight.d.al["if"] = function(scope, element, name, env) {
  var self;
  if (env.elementCanBeRemoved) {
    alight.exceptionHandler(null, env.attrName + " can't control element because of " + env.elementCanBeRemoved, {
      scope: scope,
      element: element,
      value: name,
      env: env
    });
    return {};
  }
  env.stopBinding = true;
  return self = {
    item: null,
    childCD: null,
    base_element: null,
    top_element: null,
    start: function() {
      self.prepare();
      self.watchModel();
    },
    prepare: function() {
      self.base_element = element;
      self.top_element = document.createComment(" " + env.attrName + ": " + name + " ");
      f$.before(element, self.top_element);
      f$.remove(element);
    },
    updateDom: function(value) {
      if (value) {
        self.insertBlock(value);
      } else {
        self.removeBlock();
      }
    },
    removeBlock: function() {
      if (!self.childCD) {
        return;
      }
      self.childCD.destroy();
      self.childCD = null;
      self.removeDom(self.item);
      self.item = null;
    },
    insertBlock: function() {
      if (self.childCD) {
        return;
      }
      self.item = self.base_element.cloneNode(true);
      self.insertDom(self.top_element, self.item);
      self.childCD = env.changeDetector["new"]();
      alight.bind(self.childCD, self.item, {
        skip_attr: env.skippedAttr(),
        elementCanBeRemoved: env.attrName
      });
    },
    watchModel: function() {
      env.watch(name, self.updateDom);
    },
    removeDom: function(element) {
      f$.remove(element);
    },
    insertDom: function(base, element) {
      f$.after(base, element);
    }
  };
};

alight.d.al.ifnot = function(scope, element, name, env) {
  var self;
  self = alight.d.al["if"](scope, element, name, env);
  self.updateDom = function(value) {
    if (value) {
      self.removeBlock();
    } else {
      self.insertBlock();
    }
  };
  return self;
};


/*
    al-repeat="item in list"
    "item in list"
    "item in list | filter"
    "item in list | filter track by trackExpression"
    "item in list track by $index"
    "item in list track by $id(item)"
    "item in list track by item.id"

    "(key, value) in object"
    "(key, value) in object orderBy:key:reverse"
    "(key, value) in object | filter orderBy:key,reverse"
 */
alight.directives.al.repeat = {
  restrict: 'AM',
  init: function(parentScope, element, exp, env) {
    var CD, self;
    if (env.elementCanBeRemoved) {
      alight.exceptionHandler(null, env.attrName + " can't control element because of " + env.elementCanBeRemoved, {
        scope: parentScope,
        element: element,
        value: exp,
        env: env
      });
      return {};
    }
    env.stopBinding = true;
    CD = env.changeDetector;
    return self = {
      start: function() {
        self.parsExpression();
        self.prepareDom();
        self.buildUpdateDom();
        self.watchModel();
      },
      parsExpression: function() {
        var r, s;
        s = exp.trim();
        if (s[0] === '(') {
          self.objectMode = true;
          r = s.match(/\((\w+),\s*(\w+)\)\s+in\s+(.+)\s+orderBy:(.+)\s*$/);
          if (r) {
            self.objectKey = r[1];
            self.objectValue = r[2];
            self.expression = r[3] + (" | toArray:" + self.objectKey + "," + self.objectValue + " | orderBy:" + r[4]);
            self.nameOfKey = '$item';
            self.trackExpression = '$item.' + self.objectKey;
          } else {
            r = s.match(/\((\w+),\s*(\w+)\)\s+in\s+(.+)\s*$/);
            if (!r) {
              throw 'Wrong repeat: ' + exp;
            }
            self.objectKey = r[1];
            self.objectValue = r[2];
            self.expression = r[3] + (" | toArray:" + self.objectKey + "," + self.objectValue);
            self.nameOfKey = '$item';
            self.trackExpression = '$item.' + self.objectKey;
          }
        } else {
          r = s.match(/(.*) track by ([\w\.\$\(\)]+)/);
          if (r) {
            self.trackExpression = r[2];
            s = r[1];
          }
          r = s.match(/\s*(\w+)\s+in\s+(.+)/);
          if (!r) {
            throw 'Wrong repeat: ' + exp;
          }
          self.nameOfKey = r[1];
          self.expression = r[2];
        }
      },
      watchModel: function() {
        var flags;
        if (self.objectMode) {
          flags = {
            deep: true
          };
        } else {
          flags = {
            isArray: true
          };
        }
        self.watch = CD.watch(self.expression, self.updateDom, flags);
      },
      prepareDom: function() {
        var el, element_list, i, len, t, t2;
        if (element.nodeType === 8) {
          self.top_element = element;
          self.element_list = element_list = [];
          el = element.nextSibling;
          while (el) {
            if (el.nodeType === 8) {
              t = el.nodeValue;
              t2 = t.trim().split(/\s+/);
              if (t2[0] === '/directive:' && t2[1] === 'al-repeat') {
                env.skipToElement = el;
                break;
              }
            }
            element_list.push(el);
            el = el.nextSibling;
          }
          for (i = 0, len = element_list.length; i < len; i++) {
            el = element_list[i];
            f$.remove(el);
          }
          null;
        } else {
          self.base_element = element;
          self.top_element = document.createComment(" " + exp + " ");
          f$.before(element, self.top_element);
          f$.remove(element);
          if (alight.option.removeAttribute) {
            element.removeAttribute(env.attrName);
          }
        }
      },
      makeChild: function(item, index, list) {
        var childCD;
        childCD = CD["new"](null, {
          locals: true
        });
        self.updateLocals(childCD, item, index, list);
        return childCD;
      },
      updateLocals: function(childCD, item, index, list) {
        var locals;
        locals = childCD.locals;
        if (self.objectMode) {
          locals[self.objectKey] = item[self.objectKey];
          locals[self.objectValue] = item[self.objectValue];
        } else {
          locals[self.nameOfKey] = item;
        }
        locals.$index = index;
        locals.$first = index === 0;
        locals.$last = index === list.length - 1;
      },
      rawUpdateDom: function(removes, inserts) {
        var e, i, it, j, len, len1;
        for (i = 0, len = removes.length; i < len; i++) {
          e = removes[i];
          f$.remove(e);
        }
        for (j = 0, len1 = inserts.length; j < len1; j++) {
          it = inserts[j];
          f$.after(it.after, it.element);
        }
      },
      buildUpdateDom: function() {
        return self.updateDom = (function() {
          var _getId, _id, fastBinding, generator, getResultList, index, node_by_id, node_del, node_get, node_set, nodes, skippedAttrs, version;
          nodes = [];
          index = 0;
          fastBinding = null;
          version = 0;
          skippedAttrs = env.skippedAttr();
          if (self.trackExpression === '$index') {
            node_by_id = {};
            node_get = function(item) {
              return node_by_id[index] || null;
            };
            node_del = function(node) {
              if(node.$id != null) delete node_by_id[node.$id];
            };
            node_set = function(item, node) {
              node.$id = index;
              node_by_id[index] = node;
            };
          } else {
            if (self.trackExpression) {
              node_by_id = {};
              _getId = (function() {
                var fn;
                fn = CD.compile(self.trackExpression, {
                  input: ['$id', self.nameOfKey]
                });
                return function(a, b) {
                  return fn(CD.scope, a, b);
                };
              })();
              _id = function(item) {
                var id;
                id = item.$alite_id;
                if (id) {
                  return id;
                }
                id = item.$alite_id = alight.utils.getId();
                return id;
              };
              node_get = function(item) {
                var $id;
                $id = _getId(_id, item);
                if($id != null) return node_by_id[$id];
                return null;
              };
              node_del = function(node) {
                var $id;
                $id = node.$id;
                if($id != null) delete node_by_id[$id];
              };
              node_set = function(item, node) {
                var $id;
                $id = _getId(_id, item);
                node.$id = $id;
                node_by_id[$id] = node;
              };
            } else {
              if (window.Map) {
                node_by_id = new Map();
                node_get = function(item) {
                  return node_by_id.get(item);
                };
                node_del = function(node) {
                  node_by_id["delete"](node.item);
                };
                node_set = function(item, node) {
                  node_by_id.set(item, node);
                };
              } else {
                node_by_id = {};
                node_get = function(item) {
                  var $id;
                  if (typeof item === 'object') {
                    $id = item.$alite_id;
                    if ($id) {
                      return node_by_id[$id];
                    }
                  } else {
                    return node_by_id[item] || null;
                  }
                  return null;
                };
                node_del = function(node) {
                  var $id;
                  $id = node.$id;
                  if (node_by_id[$id]) {
                    node.$id = null;
                    delete node_by_id[$id];
                  }
                };
                node_set = function(item, node) {
                  var $id;
                  if (typeof item === 'object') {
                    $id = alight.utils.getId();
                    item.$alite_id = $id;
                    node.$id = $id;
                    node_by_id[$id] = node;
                  } else {
                    node.$id = item;
                    node_by_id[item] = node;
                  }
                };
              }
            }
          }
          generator = [];
          getResultList = function(input) {
            var size, t;
            t = typeof input;
            if (t === 'object') {
              if (input && input.length) {
                return input;
              }
            } else {
              if (t === 'number') {
                size = Math.floor(input);
              } else if (t === 'string') {
                size = Math.floor(input);
                if (isNaN(size)) {
                  return [];
                }
              }
              if (size < generator.length) {
                generator.length = size;
              } else {
                while (generator.length < size) {
                  generator.push(generator.length);
                }
              }
              return generator;
            }
            return [];
          };
          if (self.element_list) {
            return function(input) {
              var applyList, bel, childCD, dom_inserts, dom_removes, el, elLast, element_list, i, it, item, item_value, j, k, l, last_element, len, len1, len2, len3, len4, len5, len6, len7, list, m, n, next2, node, nodes2, o, p, pid, prev_moved, prev_node, ref, ref1, ref2;
              list = getResultList(input);
              last_element = self.top_element;
              dom_inserts = [];
              nodes2 = [];
              for (i = 0, len = nodes.length; i < len; i++) {
                node = nodes[i];
                node.active = false;
              }
              for (index = j = 0, len1 = list.length; j < len1; index = ++j) {
                item = list[index];
                node = node_get(item);
                if (node) {
                  node.active = true;
                }
              }
              dom_removes = [];
              for (k = 0, len2 = nodes.length; k < len2; k++) {
                node = nodes[k];
                if (node.active) {
                  continue;
                }
                if (node.prev) {
                  node.prev.next = node.next;
                }
                if (node.next) {
                  node.next.prev = node.prev;
                }
                node_del(node);
                node.CD.destroy();
                ref = node.element_list;
                for (l = 0, len3 = ref.length; l < len3; l++) {
                  el = ref[l];
                  dom_removes.push(el);
                }
                node.next = null;
                node.prev = null;
                node.element_list = null;
              }
              applyList = [];
              pid = null;
              prev_node = null;
              prev_moved = false;
              elLast = self.element_list.length - 1;
              for (index = m = 0, len4 = list.length; m < len4; index = ++m) {
                item = list[index];
                item_value = item;
                node = node_get(item);
                if (node) {
                  self.updateLocals(node.CD, item, index, list);
                  if (node.prev === prev_node) {
                    if (prev_moved) {
                      ref1 = node.element_list;
                      for (n = 0, len5 = ref1.length; n < len5; n++) {
                        el = ref1[n];
                        dom_inserts.push({
                          element: el,
                          after: last_element
                        });
                        last_element = el;
                      }
                    }
                    prev_node = node;
                    last_element = node.element_list[elLast];
                    node.active = true;
                    nodes2.push(node);
                    continue;
                  }
                  node.prev = prev_node;
                  if (prev_node) {
                    prev_node.next = node;
                  }
                  ref2 = node.element_list;
                  for (o = 0, len6 = ref2.length; o < len6; o++) {
                    el = ref2[o];
                    dom_inserts.push({
                      element: el,
                      after: last_element
                    });
                    last_element = el;
                  }
                  prev_moved = true;
                  prev_node = node;
                  node.active = true;
                  nodes2.push(node);
                  continue;
                }
                childCD = self.makeChild(item_value, index, list);
                element_list = (function() {
                  var len7, p, ref3, results;
                  ref3 = self.element_list;
                  results = [];
                  for (p = 0, len7 = ref3.length; p < len7; p++) {
                    bel = ref3[p];
                    el = bel.cloneNode(true);
                    applyList.push({
                      cd: childCD,
                      el: el
                    });
                    dom_inserts.push({
                      element: el,
                      after: last_element
                    });
                    results.push(last_element = el);
                  }
                  return results;
                })();
                node = {
                  CD: childCD,
                  element_list: element_list,
                  prev: prev_node,
                  next: null,
                  active: true,
                  item: item
                };
                node_set(item, node);
                if (prev_node) {
                  next2 = prev_node.next;
                  prev_node.next = node;
                  node.next = next2;
                  if (next2) {
                    next2.prev = node;
                  }
                } else if (index === 0 && nodes[0]) {
                  next2 = nodes[0];
                  node.next = next2;
                  next2.prev = node;
                }
                prev_node = node;
                nodes2.push(node);
              }
              nodes = nodes2;
              self.rawUpdateDom(dom_removes, dom_inserts);
              dom_removes.length = 0;
              dom_inserts.length = 0;
              for (p = 0, len7 = applyList.length; p < len7; p++) {
                it = applyList[p];
                alight.bind(it.cd, it.el, {
                  skip_attr: skippedAttrs,
                  elementCanBeRemoved: env.attrName,
                  noDomOptimization: true
                });
              }
            };
          } else {
            return function(input) {
              var applyList, childCD, dom_inserts, dom_removes, fbElement, i, it, item, item_value, j, k, last_element, len, len1, len2, list, next2, node, nodes2, pid, prev_moved, prev_node, r;
              list = getResultList(input);
              last_element = self.top_element;
              version++;
              dom_inserts = [];
              nodes2 = [];
              applyList = [];
              pid = null;
              prev_node = null;
              prev_moved = false;
              for (index = i = 0, len = list.length; i < len; index = ++i) {
                item = list[index];
                item_value = item;
                node = node_get(item);
                if (node) {
                  self.updateLocals(node.CD, item, index, list);
                  if (node.prev === prev_node) {
                    if (prev_moved) {
                      dom_inserts.push({
                        element: node.element,
                        after: prev_node.element
                      });
                    }
                    prev_node = node;
                    last_element = node.element;
                    node.version = version;
                    nodes2.push(node);
                    continue;
                  }
                  node.prev = prev_node;
                  if (prev_node) {
                    prev_node.next = node;
                  }
                  dom_inserts.push({
                    element: node.element,
                    after: last_element
                  });
                  prev_moved = true;
                  last_element = node.element;
                  prev_node = node;
                  node.version = version;
                  nodes2.push(node);
                  continue;
                }
                childCD = self.makeChild(item_value, index, list);
                element = self.base_element.cloneNode(true);
                if (fastBinding === null) {
                  fbElement = self.base_element.cloneNode(true);
                  r = alight.bind(childCD, element, {
                    skip_attr: skippedAttrs,
                    elementCanBeRemoved: env.attrName,
                    noDomOptimization: true,
                    fbElement: fbElement
                  });
                  fastBinding = alight.core.fastBinding(r) || false;
                  if (fastBinding) {
                    self.base_element = fbElement;
                  }
                } else {
                  applyList.push({
                    cd: childCD,
                    el: element
                  });
                }
                dom_inserts.push({
                  element: element,
                  after: last_element
                });
                node = {
                  CD: childCD,
                  element: element,
                  prev: prev_node,
                  next: null,
                  version: version,
                  item: item
                };
                last_element = element;
                node_set(item, node);
                if (prev_node) {
                  next2 = prev_node.next;
                  prev_node.next = node;
                  node.next = next2;
                  if (next2) {
                    next2.prev = node;
                  }
                } else if (index === 0 && nodes[0]) {
                  next2 = nodes[0];
                  node.next = next2;
                  next2.prev = node;
                }
                prev_node = node;
                nodes2.push(node);
              }
              dom_removes = [];
              for (j = 0, len1 = nodes.length; j < len1; j++) {
                node = nodes[j];
                if (node.version === version) {
                  continue;
                }
                if (node.prev) {
                  node.prev.next = node.next;
                }
                if (node.next) {
                  node.next.prev = node.prev;
                }
                node_del(node);
                node.CD.destroy();
                dom_removes.push(node.element);
                node.next = null;
                node.prev = null;
                node.element = null;
              }
              nodes = nodes2;
              self.rawUpdateDom(dom_removes, dom_inserts);
              dom_removes.length = 0;
              dom_inserts.length = 0;
              for (k = 0, len2 = applyList.length; k < len2; k++) {
                it = applyList[k];
                if (fastBinding) {
                  fastBinding.bind(it.cd, it.el);
                } else {
                  alight.bind(it.cd, it.el, {
                    skip_attr: skippedAttrs,
                    elementCanBeRemoved: env.attrName,
                    noDomOptimization: true
                  });
                }
              }
            };
          }
        })();
      }
    };
  }
};

alight.d.al.init = function(scope, element, exp, env) {
  var cd, e, error, fb, fn, input;
  if (alight.option.removeAttribute) {
    element.removeAttribute(env.attrName);
    if (env.fbElement) {
      env.fbElement.removeAttribute(env.attrName);
    }
  }
  cd = env.changeDetector;
  input = ['$element'];
  if (env.attrArgument === 'window') {
    input.push('window');
  }
  try {
    fn = cd.compile(exp, {
      no_return: true,
      input: input
    });
    env.fastBinding = fb = function(scope, element, exp, env) {
      return fn(env.changeDetector.locals, element, window);
    };
    fb(scope, element, exp, env);
  } catch (error) {
    e = error;
    alight.exceptionHandler(e, 'al-init, error in expression: ' + exp, {
      exp: exp,
      scope: scope,
      cd: cd,
      element: element
    });
    env.fastBinding = function() {};
  }
};

alight.d.al.app = {
  stopBinding: true
};

alight.d.al.stop = {
  restrict: 'AE',
  stopBinding: true
};

alight.d.al.cloak = function(scope, element, name, env) {
  element.removeAttribute(env.attrName);
  if (name) {
    f$.removeClass(element, name);
  }
};


/*
    al-html="model"
    al-html:id=" 'templateId' "
    al-html:id.literal="templateId" // template id without 'quotes'
    al-html:url="model"
    al-html:url.tpl="/templates/{{templateId}}"
 */
alight.d.al.html = {
  restrict: 'AM',
  priority: 100,
  modifier: {},
  link: function(scope, element, inputName, env) {
    var self;
    if (env.elementCanBeRemoved && element.nodeType !== 8) {
      alight.exceptionHandler(null, env.attrName + " can't control element because of " + env.elementCanBeRemoved, {
        scope: scope,
        element: element,
        value: inputName,
        env: env
      });
      return {};
    }
    env.stopBinding = true;
    return self = {
      baseElement: null,
      topElement: null,
      activeElement: null,
      childCD: null,
      name: inputName,
      watchMode: null,
      start: function() {
        self.parsing();
        self.prepare();
        self.watchModel();
      },
      parsing: function() {
        var i, len, modifierName, ref;
        if (env.attrArgument) {
          ref = env.attrArgument.split('.');
          for (i = 0, len = ref.length; i < len; i++) {
            modifierName = ref[i];
            if (modifierName === 'literal') {
              self.watchMode = 'literal';
              continue;
            }
            if (modifierName === 'tpl') {
              self.watchMode = 'tpl';
              continue;
            }
            if (!alight.d.al.html.modifier[modifierName]) {
              continue;
            }
            alight.d.al.html.modifier[modifierName](self, {
              scope: scope,
              element: element,
              inputName: inputName,
              env: env
            });
          }
        }
      },
      prepare: function() {
        if (element.nodeType === 8) {
          self.baseElement = null;
          self.topElement = element;
        } else {
          self.baseElement = element;
          self.topElement = document.createComment(" " + env.attrName + ": " + inputName + " ");
          f$.before(element, self.topElement);
          f$.remove(element);
        }
      },
      removeBlock: function() {
        var el, i, len, ref;
        if (self.childCD) {
          self.childCD.destroy();
          self.childCD = null;
        }
        if (self.activeElement) {
          if (Array.isArray(self.activeElement)) {
            ref = self.activeElement;
            for (i = 0, len = ref.length; i < len; i++) {
              el = ref[i];
              self.removeDom(el);
            }
          } else {
            self.removeDom(self.activeElement);
          }
          self.activeElement = null;
        }
      },
      insertBlock: function(html) {
        var current, el, t;
        if (self.baseElement) {
          self.activeElement = self.baseElement.cloneNode(false);
          self.activeElement.innerHTML = html;
          self.insertDom(self.topElement, self.activeElement);
          self.childCD = env.changeDetector["new"]();
          alight.bind(self.childCD, self.activeElement, {
            skip_attr: env.skippedAttr(),
            elementCanBeRemoved: env.attrName
          });
        } else {
          t = document.createElement('body');
          t.innerHTML = html;
          current = self.topElement;
          self.activeElement = [];
          self.childCD = env.changeDetector["new"]();
          while (el = t.firstChild) {
            self.insertDom(current, el);
            current = el;
            self.activeElement.push(el);
            alight.bind(self.childCD, current, {
              skip_attr: env.skippedAttr(),
              elementCanBeRemoved: env.attrName
            });
          }
        }
      },
      updateDom: function(html) {
        self.removeBlock();
        if (html) {
          self.insertBlock(html);
        }
      },
      removeDom: function(element) {
        f$.remove(element);
      },
      insertDom: function(base, element) {
        f$.after(base, element);
      },
      watchModel: function() {
        if (self.watchMode === 'literal') {
          self.updateDom(self.name);
        } else if (self.watchMode === 'tpl') {
          env.watchText(self.name, self.updateDom);
        } else {
          env.watch(self.name, self.updateDom);
        }
      }
    };
  }
};

alight.d.al.html.modifier.id = function(self) {
  return self.updateDom = function(id) {
    var html, tpl;
    self.removeBlock();
    tpl = document.getElementById(id);
    if (tpl) {
      html = tpl.innerHTML;
      if (html) {
        self.insertBlock(html);
      }
    }
  };
};

alight.d.al.html.modifier.url = function(self) {
  self.loadHtml = function(cfg) {
    f$.ajax(cfg);
  };
  return self.updateDom = function(url) {
    if (!url) {
      self.removeBlock();
      return;
    }
    self.loadHtml({
      cache: true,
      url: url,
      success: function(html) {
        self.removeBlock();
        self.insertBlock(html);
      },
      error: self.removeBlock
    });
  };
};

alight.d.al.html.modifier.scope = function(self, option) {
  var d, innerName, oneTime, outerName;
  d = self.name.split(':');
  if (d.length === 2) {
    self.name = d[0];
    outerName = d[1];
  } else {
    d = self.name.match(/(.+)\:\s*\:\:([\d\w]+)$/);
    if (d) {
      oneTime = true;
    } else {
      oneTime = false;
      d = self.name.match(/(.+)\:\s*([\.\w]+)$/);
      if (!d) {
        throw 'Wrong expression ' + self.name;
      }
    }
    self.name = d[1];
    outerName = d[2];
  }
  innerName = 'outer';
  return self.insertBlock = function(html) {
    var childCD, parentCD, w;
    self.activeElement = self.baseElement.cloneNode(false);
    self.activeElement.innerHTML = html;
    self.insertDom(self.topElement, self.activeElement);
    parentCD = option.env.changeDetector;
    childCD = self.childCD = parentCD["new"](null, {
      locals: true
    });
    childCD.locals[innerName] = null;
    w = parentCD.watch(outerName, function(outerValue) {
      return childCD.locals[innerName] = outerValue;
    }, {
      oneTime: oneTime
    });
    self.childCD.watch('$destroy', function() {
      return w.stop();
    });
    alight.bind(self.childCD, self.activeElement, {
      skip_attr: option.env.skippedAttr()
    });
  };
};

alight.d.al.html.modifier.inline = function(self, option) {
  var originalPrepare;
  originalPrepare = self.prepare;
  return self.prepare = function() {
    originalPrepare();
    return option.env.setValue(self.name, self.baseElement.innerHTML);
  };
};

alight.d.al.radio = function(scope, element, name, env) {
  var key, value, watch;
  key = env.takeAttr('al-value');
  if (key) {
    value = env["eval"](key);
  } else {
    value = env.takeAttr('value');
  }
  env.on(element, 'change', function() {
    env.setValue(name, value);
    watch.refresh();
    env.scan();
  });
  return watch = env.watch(name, function(newValue) {
    element.checked = value === newValue;
    return '$scanNoChanges';
  });
};


/*
    <select al-select="selected">
      <option al-repeat="item in list" al-option="item">{{item.name}}</option>
      <optgroup label="Linux">
          <option al-repeat="linux in list2" al-option="linux">Linux {{linux.codeName}}</option>
      </optgroup>
    </select>
 */
(function() {
  var Mapper;
  if (window.Map) {
    Mapper = function() {
      this.idByItem = new Map;
      this.itemById = {};
      this.index = 1;
      return this;
    };
    Mapper.prototype.acquire = function(item) {
      var id;
      id = "i" + (this.index++);
      this.idByItem.set(item, id);
      this.itemById[id] = item;
      return id;
    };
    Mapper.prototype.release = function(id) {
      var item;
      item = this.itemById[id];
      delete this.itemById[id];
      this.idByItem["delete"](item);
    };
    Mapper.prototype.replace = function(id, item) {
      var old;
      old = this.itemById[id];
      this.idByItem["delete"](old);
      this.idByItem.set(item, id);
      this.itemById[id] = item;
    };
    Mapper.prototype.getId = function(item) {
      return this.idByItem.get(item);
    };
    Mapper.prototype.getItem = function(id) {
      return this.itemById[id] || null;
    };
  } else {
    Mapper = function() {
      this.itemById = {
        'i#null': null
      };
      return this;
    };
    Mapper.prototype.acquire = function(item) {
      var id;
      if (item === null) {
        return 'i#null';
      }
      if (typeof item === 'object') {
        id = item.$alite_id;
        if (!id) {
          item.$alite_id = id = alight.utils.getId();
        }
      } else {
        id = '' + item;
      }
      this.itemById[id] = item;
      return id;
    };
    Mapper.prototype.release = function(id) {
      delete this.itemById[id];
    };
    Mapper.prototype.replace = function(id, item) {
      this.itemById[id] = item;
    };
    Mapper.prototype.getId = function(item) {
      if (item === null) {
        return 'i#null';
      }
      if (typeof item === 'object') {
        return item.$alite_id;
      } else {
        return '' + item;
      }
    };
    Mapper.prototype.getItem = function(id) {
      return this.itemById[id] || null;
    };
  }
  alight.d.al.select = function(scope, element, key, env) {
    var cd, lastValue, mapper, onChangeDOM, setValueOfElement, watch;
    cd = env.changeDetector["new"]();
    env.stopBinding = true;
    cd.$select = {
      mapper: mapper = new Mapper
    };
    lastValue = null;
    cd.$select.change = function() {
      return alight.nextTick(function() {
        return setValueOfElement(lastValue);
      });
    };
    setValueOfElement = function(value) {
      var id;
      id = mapper.getId(value);
      if (id) {
        return element.value = id;
      } else {
        return element.selectedIndex = -1;
      }
    };
    watch = cd.watch(key, function(value) {
      lastValue = value;
      return setValueOfElement(value);
    });
    onChangeDOM = function(event) {
      lastValue = mapper.getItem(event.target.value);
      cd.setValue(key, lastValue);
      watch.refresh();
      return cd.scan();
    };
    env.on(element, 'input', onChangeDOM);
    env.on(element, 'change', onChangeDOM);
    return alight.bind(cd, element, {
      skip_attr: env.skippedAttr()
    });
  };
  return alight.d.al.option = function(scope, element, key, env) {
    var cd, i, id, j, mapper, select, step;
    cd = step = env.changeDetector;
    for (i = j = 0; j <= 4; i = ++j) {
      select = step.$select;
      if (select) {
        break;
      }
      step = step.parent || {};
    }
    if (!select) {
      alight.exceptionHandler('', 'Error in al-option - al-select is not found', {
        cd: cd,
        scope: cd.scope,
        element: element,
        value: key
      });
      return;
    }
    mapper = select.mapper;
    id = null;
    cd.watch(key, function(item) {
      if (id) {
        if (mapper.getId(item) !== id) {
          mapper.release(id);
          id = mapper.acquire(item);
          element.value = id;
          select.change();
        } else {
          mapper.replace(id, item);
        }
      } else {
        id = mapper.acquire(item);
        element.value = id;
        select.change();
      }
    });
    cd.watch('$destroy', function() {
      mapper.release(id);
      return select.change();
    });
  };
})();

(function() {
  var props;
  alight.hooks.attribute.unshift({
    code: 'attribute',
    fn: function() {
      var d, value;
      d = this.attrName.match(/^\:([\w\.\-]+)$/);
      if (!d) {
        return;
      }
      value = d[1];
      if (value.split('.')[0] === 'html') {
        this.name = 'html';
        value = value.substring(5);
      } else {
        this.name = 'attr';
      }
      this.ns = 'al';
      this.attrArgument = value;
    }
  });
  props = {
    checked: 'checked',
    readonly: 'readOnly',
    value: 'value',
    selected: 'selected',
    muted: 'muted',
    disabled: 'disabled',
    hidden: 'hidden'
  };
  return alight.d.al.attr = function(scope, element, key, env) {
    var args, attrName, d, fn, isTemplate, list, prop, setter, styleName, watch;
    if (!env.attrArgument) {
      return;
    }
    d = env.attrArgument.split('.');
    attrName = d[0];
    prop = props[attrName];
    isTemplate = d.indexOf('tpl') > 0;
    if (alight.option.removeAttribute) {
      element.removeAttribute(env.attrName);
      if (env.fbElement) {
        env.fbElement.removeAttribute(env.attrName);
      }
    }
    args = {
      readOnly: true
    };
    setter = null;
    if (attrName === 'style') {
      if (!d[1]) {
        throw 'Style is not declared';
      }
      styleName = d[1].replace(/(-\w)/g, function(m) {
        return m.substring(1).toUpperCase();
      });
      setter = function(element, value) {
        if (value == null) {
          value = '';
        }
        return element.style[styleName] = value;
      };
    } else if (attrName === 'class' && d.length > 1) {
      isTemplate = false;
      list = d.slice(1);
      setter = function(element, value) {
        var c, i, j, len, len1;
        if (value) {
          for (i = 0, len = list.length; i < len; i++) {
            c = list[i];
            f$.addClass(element, c);
          }
        } else {
          for (j = 0, len1 = list.length; j < len1; j++) {
            c = list[j];
            f$.removeClass(element, c);
          }
        }
      };
    } else if (attrName === 'focus') {
      setter = function(element, value) {
        if (value) {
          return element.focus();
        } else {
          return element.blur();
        }
      };
    } else {
      if (prop) {
        setter = function(element, value) {
          if (value === void 0) {
            value = null;
          }
          if (element[prop] !== value) {
            return element[prop] = value;
          }
        };
      } else {
        args.element = element;
        args.elementAttr = attrName;
      }
    }
    watch = isTemplate ? 'watchText' : 'watch';
    if (setter) {
      fn = function(scope, element, _, env) {
        return env.changeDetector[watch](key, function(value) {
          return setter(element, value);
        }, args);
      };
    } else {
      fn = function(scope, element, _, env) {
        return env.changeDetector[watch](key, null, {
          readOnly: true,
          element: element,
          elementAttr: attrName
        });
      };
    }
    fn(scope, element, key, env);
    env.fastBinding = fn;
  };
})();

alight.d.al.model = function(scope, element, value, env) {
  var name;
  name = element.nodeName.toLowerCase();
  if (name === 'select') {
    return alight.d.al.select.call(this, scope, element, value, env);
  }
  if (name === 'input') {
    if (element.type === 'checkbox') {
      return alight.d.al.checked.call(this, scope, element, value, env);
    }
    if (element.type === 'radio') {
      return alight.d.al.radio.call(this, scope, element, value, env);
    }
  }
  return alight.d.al.value.call(this, scope, element, value, env);
};

alight.filters.slice = function(value, a, b) {
  if (!value) {
    return null;
  }
  if (b) {
    return value.slice(a, b);
  } else {
    return value.slice(a);
  }
};

(function() {
  var d2;
  d2 = function(x) {
    if (x < 10) {
      return '0' + x;
    }
    return '' + x;
  };
  return alight.filters.date = function(value, format) {
    var d, i, len, r, x;
    if (!value) {
      return '';
    }
    value = new Date(value);
    x = [[/yyyy/g, value.getFullYear()], [/mm/g, d2(value.getMonth() + 1)], [/dd/g, d2(value.getDate())], [/HH/g, d2(value.getHours())], [/MM/g, d2(value.getMinutes())], [/SS/g, d2(value.getSeconds())]];
    r = format;
    for (i = 0, len = x.length; i < len; i++) {
      d = x[i];
      r = r.replace(d[0], d[1]);
    }
    return r;
  };
})();

alight.filters.json = {
  watchMode: 'deep',
  fn: function(value) {
    return JSON.stringify(alight.utils.clone(value), null, 4);
  }
};

alight.filters.filter = function(input, _a, _b) {
  var d, i, j, k, key, len, len1, result, s, svalue, v, value;
  if (arguments.length === 2) {
    key = null;
    value = _a;
  } else if (arguments.length === 3) {
    key = _a;
    value = _b;
  } else {
    return input;
  }
  if (!input || (value == null) || value === '') {
    return input;
  }
  result = [];
  svalue = ('' + value).toLowerCase();
  if (key) {
    for (i = 0, len = input.length; i < len; i++) {
      d = input[i];
      if (d[key] === value) {
        result.push(d);
      } else {
        s = ('' + d[key]).toLowerCase();
        if (s.indexOf(svalue) >= 0) {
          result.push(d);
        }
      }
    }
  } else {
    for (j = 0, len1 = input.length; j < len1; j++) {
      d = input[j];
      for (k in d) {
        v = d[k];
        if (v === value) {
          result.push(d);
        } else {
          s = ('' + v).toLowerCase();
          if (s.indexOf(svalue) >= 0) {
            result.push(d);
          }
        }
      }
    }
  }
  return result;
};

alight.filters.orderBy = function(value, key, reverse) {
  if (!value instanceof Array) {
    return null;
  }
  if (reverse) {
    reverse = 1;
  } else {
    reverse = -1;
  }
  return value.sort(function(a, b) {
    if (a[key] < b[key]) {
      return -reverse;
    }
    if (a[key] > b[key]) {
      return reverse;
    }
    return 0;
  });
};

alight.filters.throttle = {
  init: function(scope, delay, env) {
    var to;
    delay = Number(delay);
    to = null;
    return {
      onChange: function(value) {
        if (to) {
          clearTimeout(to);
        }
        return to = setTimeout(function() {
          to = null;
          env.setValue(value);
          return env.changeDetector.scan();
        }, delay);
      }
    };
  }
};

alight.filters.toArray = {
  init: function(scope, exp, env) {
    var keyName, result, valueName;
    if (env.conf.args.length === 2) {
      keyName = env.conf.args[0];
      valueName = env.conf.args[1];
    } else {
      keyName = 'key';
      valueName = 'value';
    }
    result = [];
    return {
      watchMode: 'deep',
      onChange: function(obj) {
        var d, key, value;
        result.length = 0;
        for (key in obj) {
          value = obj[key];
          d = {};
          d[keyName] = key;
          d[valueName] = value;
          result.push(d);
        }
        return env.setValue(result);
      }
    };
  }
};

alight.filters.storeTo = {
  init: function(scope, key, env) {
    return {
      onChange: function(value) {
        env.changeDetector.setValue(key, value);
        return env.setValue(value);
      }
    };
  }
};

alight.text['='] = function(callback, expression, scope, env) {
  var ce;
  ce = alight.utils.compile.expression(expression);
  if (ce.filters) {
    throw 'Conflict: bindonce and filters, use one-time binding';
  }
  env["finally"](ce.fn(env.changeDetector.locals));
};

alight.text['::'] = function(callback, expression, scope, env) {
  env.changeDetector.watch(expression, function(value) {
    return env["finally"](value);
  }, {
    oneTime: true
  });
};

(function () {
    /*
    
    alight.component('rating', (scope, element, env) => {
      return {
        template,
        templateId,
        templateUrl,
        props,
        onStart,
        onDestroy,
        api
      };
    })
    
    <rating :rating="rating" :max="max" @change="rating=$event.value"></rating>
    
    */
    var f$ = alight.f$;
    function toCamelCase(name) {
        return name.replace(/(-\w)/g, function (m) {
            return m.substring(1).toUpperCase();
        });
    }
    ;
    function makeWatch(_a) {
        var listener = _a.listener, childCD = _a.childCD, name = _a.name, parentName = _a.parentName, parentCD = _a.parentCD;
        var fn;
        var watchOption = {};
        name = toCamelCase(name);
        if (listener && listener !== true) {
            if (f$.isFunction(listener)) {
                fn = listener;
            }
            else {
                fn = listener.onChange;
                if (listener === 'copy' || listener.watchMode === 'copy') {
                    if (fn)
                        fn(parentName);
                    else
                        childCD.scope[name] = parentName;
                    return;
                }
                if (listener === 'array' || listener.watchMode === 'array')
                    watchOption.isArray = true;
                if (listener === 'deep' || listener.watchMode === 'deep')
                    watchOption.deep = true;
            }
        }
        if (!fn) {
            fn = function (value) {
                childCD.scope[name] = value;
                childCD.scan();
            };
        }
        parentCD.watch(parentName, fn, watchOption);
    }
    ;
    alight.component = function (attrName, constructor) {
        var parts = attrName.match(/^(\w+)[\-](.+)$/);
        var ns, name;
        if (parts) {
            ns = parts[1];
            name = parts[2];
        }
        else {
            ns = '$global';
            name = attrName;
        }
        name = toCamelCase(name);
        if (!alight.d[ns])
            alight.d[ns] = {};
        alight.d[ns][name] = {
            restrict: 'E',
            stopBinding: true,
            priority: alight.priority.$component,
            init: function (_parentScope, element, _value, parentEnv) {
                var scope = {
                    $sendEvent: function (eventName, value) {
                        var event = new CustomEvent(eventName);
                        event.value = value;
                        event.component = true;
                        element.dispatchEvent(event);
                    }
                };
                var parentCD = parentEnv.changeDetector.new();
                var childCD = alight.ChangeDetector(scope);
                var env = new Env({
                    element: element,
                    attributes: parentEnv.attributes,
                    changeDetector: childCD,
                    parentChangeDetector: parentCD
                });
                try {
                    var option = constructor.call(childCD, scope, element, env) || {};
                }
                catch (e) {
                    alight.exceptionHandler(e, 'Error in component <' + attrName + '>: ', {
                        element: element,
                        scope: scope,
                        cd: childCD
                    });
                    return;
                }
                if (option.onStart) {
                    childCD.watch('$finishBinding', function () {
                        option.onStart();
                        childCD.scan();
                    });
                }
                // bind props
                var parentDestroyed = false;
                parentCD.watch('$destroy', function () {
                    parentDestroyed = true;
                    childCD.destroy();
                });
                childCD.watch('$destroy', function () {
                    if (option.onDestroy)
                        option.onDestroy();
                    if (!parentDestroyed)
                        parentCD.destroy(); // child of parentCD
                });
                // api
                for (var _i = 0, _a = element.attributes; _i < _a.length; _i++) {
                    var attr = _a[_i];
                    if (attr.name[0] !== '#')
                        continue;
                    var name_1 = attr.name.slice(1);
                    if (!name_1)
                        continue;
                    if (option.api)
                        parentCD.setValue(name_1, option.api);
                    else
                        parentCD.setValue(name_1, scope);
                    break;
                }
                function watchProp(key, listener) {
                    var name = ':' + key;
                    var value = env.takeAttr(name);
                    if (!value) {
                        value = env.takeAttr(key);
                        if (!value)
                            return;
                        listener = 'copy';
                    }
                    makeWatch({ childCD: childCD, listener: listener, name: key, parentName: value, parentCD: parentCD });
                }
                // option props
                if (option.props) {
                    if (Array.isArray(option.props))
                        for (var _b = 0, _c = option.props; _b < _c.length; _b++) {
                            var key = _c[_b];
                            watchProp(key, true);
                        }
                    else
                        for (var key in option.props)
                            watchProp(key, option.props[key]);
                }
                else {
                    // auto props
                    for (var _d = 0, _e = element.attributes; _d < _e.length; _d++) {
                        var attr = _e[_d];
                        var propName = attr.name;
                        var propValue = attr.value;
                        if (!propValue)
                            continue;
                        var parts_1 = propName.match(/^\:(.*)$/);
                        if (!parts_1)
                            continue;
                        makeWatch({ childCD: childCD, name: parts_1[1], parentName: propValue, parentCD: parentCD });
                    }
                }
                var scanned = false;
                parentCD.watch('$onScanOnce', function () { return scanned = true; });
                // template
                if (option.template)
                    element.innerHTML = option.template;
                if (option.templateId) {
                    var templateElement = document.getElementById(option.templateId);
                    if (!templateElement)
                        throw 'No template ' + option.templateId;
                    element.innerHTML = templateElement.innerHTML;
                }
                if (option.templateUrl) {
                    f$.ajax({
                        url: option.templateUrl,
                        cache: true,
                        success: function (template) {
                            element.innerHTML = template;
                            binding(true);
                        },
                        error: function () {
                            console.error('Template is not loaded', option.templateUrl);
                        }
                    });
                }
                else {
                    binding();
                }
                function binding(async) {
                    if (!scanned)
                        parentCD.digest();
                    alight.bind(childCD, element, { skip: true });
                }
            }
        };
    };
})();

	/* prev prefix.js */
		return alight;
	}; // finish of buildAlight

	var alight = buildAlight();
	alight.makeInstance = buildAlight;

	if(typeof(alightInitCallback) === 'function') {
		alightInitCallback(alight)
	} else if(typeof(define) === 'function') {  // requrejs/commonjs
		define(function() {
			return alight;
		});
	} else if(typeof(module) === 'object' && typeof(module.exports) === 'object') {
		module.exports = alight
	} else {
		alight.option.globalController = true;  // global controllers
		window.alight = alight;
		alight.f$.ready(alight.bootstrap);
	};
})();

!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.io=e():t.io=e()}(this,function(){return function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return t[n].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e,r){"use strict";function n(t,e){"object"===("undefined"==typeof t?"undefined":i(t))&&(e=t,t=void 0),e=e||{};var r,n=s(t),a=n.source,p=n.id,f=n.path,l=h[p]&&f in h[p].nsps,d=e.forceNew||e["force new connection"]||!1===e.multiplex||l;return d?(u("ignoring socket cache for %s",a),r=c(a,e)):(h[p]||(u("new io instance for %s",a),h[p]=c(a,e)),r=h[p]),n.query&&!e.query?e.query=n.query:e&&"object"===i(e.query)&&(e.query=o(e.query)),r.socket(n.path,e)}function o(t){var e=[];for(var r in t)t.hasOwnProperty(r)&&e.push(encodeURIComponent(r)+"="+encodeURIComponent(t[r]));return e.join("&")}var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s=r(1),a=r(7),c=r(17),u=r(3)("socket.io-client");t.exports=e=n;var h=e.managers={};e.protocol=a.protocol,e.connect=n,e.Manager=r(17),e.Socket=r(44)},function(t,e,r){(function(e){"use strict";function n(t,r){var n=t;r=r||e.location,null==t&&(t=r.protocol+"//"+r.host),"string"==typeof t&&("/"===t.charAt(0)&&(t="/"===t.charAt(1)?r.protocol+t:r.host+t),/^(https?|wss?):\/\//.test(t)||(i("protocol-less url %s",t),t="undefined"!=typeof r?r.protocol+"//"+t:"https://"+t),i("parse %s",t),n=o(t)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port="80":/^(http|ws)s$/.test(n.protocol)&&(n.port="443")),n.path=n.path||"/";var s=n.host.indexOf(":")!==-1,a=s?"["+n.host+"]":n.host;return n.id=n.protocol+"://"+a+":"+n.port,n.href=n.protocol+"://"+a+(r&&r.port===n.port?"":":"+n.port),n}var o=r(2),i=r(3)("socket.io-client:url");t.exports=n}).call(e,function(){return this}())},function(t,e){var r=/^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,n=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];t.exports=function(t){var e=t,o=t.indexOf("["),i=t.indexOf("]");o!=-1&&i!=-1&&(t=t.substring(0,o)+t.substring(o,i).replace(/:/g,";")+t.substring(i,t.length));for(var s=r.exec(t||""),a={},c=14;c--;)a[n[c]]=s[c]||"";return o!=-1&&i!=-1&&(a.source=e,a.host=a.host.substring(1,a.host.length-1).replace(/;/g,":"),a.authority=a.authority.replace("[","").replace("]","").replace(/;/g,":"),a.ipv6uri=!0),a}},function(t,e,r){(function(n){function o(){return"undefined"!=typeof document&&"WebkitAppearance"in document.documentElement.style||window.console&&(console.firebug||console.exception&&console.table)||navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31}function i(){var t=arguments,r=this.useColors;if(t[0]=(r?"%c":"")+this.namespace+(r?" %c":" ")+t[0]+(r?"%c ":" ")+"+"+e.humanize(this.diff),!r)return t;var n="color: "+this.color;t=[t[0],n,"color: inherit"].concat(Array.prototype.slice.call(t,1));var o=0,i=0;return t[0].replace(/%[a-z%]/g,function(t){"%%"!==t&&(o++,"%c"===t&&(i=o))}),t.splice(i,0,n),t}function s(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function a(t){try{null==t?e.storage.removeItem("debug"):e.storage.debug=t}catch(t){}}function c(){try{return e.storage.debug}catch(t){}if("undefined"!=typeof n&&"env"in n)return n.env.DEBUG}function u(){try{return window.localStorage}catch(t){}}e=t.exports=r(5),e.log=s,e.formatArgs=i,e.save=a,e.load=c,e.useColors=o,e.storage="undefined"!=typeof chrome&&"undefined"!=typeof chrome.storage?chrome.storage.local:u(),e.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],e.formatters.j=function(t){try{return JSON.stringify(t)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}},e.enable(c())}).call(e,r(4))},function(t,e){function r(){throw new Error("setTimeout has not been defined")}function n(){throw new Error("clearTimeout has not been defined")}function o(t){if(h===setTimeout)return setTimeout(t,0);if((h===r||!h)&&setTimeout)return h=setTimeout,setTimeout(t,0);try{return h(t,0)}catch(e){try{return h.call(null,t,0)}catch(e){return h.call(this,t,0)}}}function i(t){if(p===clearTimeout)return clearTimeout(t);if((p===n||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(t);try{return p(t)}catch(e){try{return p.call(null,t)}catch(e){return p.call(this,t)}}}function s(){y&&l&&(y=!1,l.length?d=l.concat(d):g=-1,d.length&&a())}function a(){if(!y){var t=o(s);y=!0;for(var e=d.length;e;){for(l=d,d=[];++g<e;)l&&l[g].run();g=-1,e=d.length}l=null,y=!1,i(t)}}function c(t,e){this.fun=t,this.array=e}function u(){}var h,p,f=t.exports={};!function(){try{h="function"==typeof setTimeout?setTimeout:r}catch(t){h=r}try{p="function"==typeof clearTimeout?clearTimeout:n}catch(t){p=n}}();var l,d=[],y=!1,g=-1;f.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];d.push(new c(t,e)),1!==d.length||y||o(a)},c.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=u,f.addListener=u,f.once=u,f.off=u,f.removeListener=u,f.removeAllListeners=u,f.emit=u,f.binding=function(t){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(t){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},function(t,e,r){function n(){return e.colors[h++%e.colors.length]}function o(t){function r(){}function o(){var t=o,r=+new Date,i=r-(u||r);t.diff=i,t.prev=u,t.curr=r,u=r,null==t.useColors&&(t.useColors=e.useColors()),null==t.color&&t.useColors&&(t.color=n());for(var s=new Array(arguments.length),a=0;a<s.length;a++)s[a]=arguments[a];s[0]=e.coerce(s[0]),"string"!=typeof s[0]&&(s=["%o"].concat(s));var c=0;s[0]=s[0].replace(/%([a-z%])/g,function(r,n){if("%%"===r)return r;c++;var o=e.formatters[n];if("function"==typeof o){var i=s[c];r=o.call(t,i),s.splice(c,1),c--}return r}),s=e.formatArgs.apply(t,s);var h=o.log||e.log||console.log.bind(console);h.apply(t,s)}r.enabled=!1,o.enabled=!0;var i=e.enabled(t)?o:r;return i.namespace=t,i}function i(t){e.save(t);for(var r=(t||"").split(/[\s,]+/),n=r.length,o=0;o<n;o++)r[o]&&(t=r[o].replace(/[\\^$+?.()|[\]{}]/g,"\\$&").replace(/\*/g,".*?"),"-"===t[0]?e.skips.push(new RegExp("^"+t.substr(1)+"$")):e.names.push(new RegExp("^"+t+"$")))}function s(){e.enable("")}function a(t){var r,n;for(r=0,n=e.skips.length;r<n;r++)if(e.skips[r].test(t))return!1;for(r=0,n=e.names.length;r<n;r++)if(e.names[r].test(t))return!0;return!1}function c(t){return t instanceof Error?t.stack||t.message:t}e=t.exports=o.debug=o,e.coerce=c,e.disable=s,e.enable=i,e.enabled=a,e.humanize=r(6),e.names=[],e.skips=[],e.formatters={};var u,h=0},function(t,e){function r(t){if(t=String(t),!(t.length>1e4)){var e=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);if(e){var r=parseFloat(e[1]),n=(e[2]||"ms").toLowerCase();switch(n){case"years":case"year":case"yrs":case"yr":case"y":return r*h;case"days":case"day":case"d":return r*u;case"hours":case"hour":case"hrs":case"hr":case"h":return r*c;case"minutes":case"minute":case"mins":case"min":case"m":return r*a;case"seconds":case"second":case"secs":case"sec":case"s":return r*s;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return r;default:return}}}}function n(t){return t>=u?Math.round(t/u)+"d":t>=c?Math.round(t/c)+"h":t>=a?Math.round(t/a)+"m":t>=s?Math.round(t/s)+"s":t+"ms"}function o(t){return i(t,u,"day")||i(t,c,"hour")||i(t,a,"minute")||i(t,s,"second")||t+" ms"}function i(t,e,r){if(!(t<e))return t<1.5*e?Math.floor(t/e)+" "+r:Math.ceil(t/e)+" "+r+"s"}var s=1e3,a=60*s,c=60*a,u=24*c,h=365.25*u;t.exports=function(t,e){e=e||{};var i=typeof t;if("string"===i&&t.length>0)return r(t);if("number"===i&&isNaN(t)===!1)return e.long?o(t):n(t);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(t))}},function(t,e,r){function n(){}function o(t){var r="",n=!1;return r+=t.type,e.BINARY_EVENT!=t.type&&e.BINARY_ACK!=t.type||(r+=t.attachments,r+="-"),t.nsp&&"/"!=t.nsp&&(n=!0,r+=t.nsp),null!=t.id&&(n&&(r+=",",n=!1),r+=t.id),null!=t.data&&(n&&(r+=","),r+=f.stringify(t.data)),p("encoded %j as %s",t,r),r}function i(t,e){function r(t){var r=d.deconstructPacket(t),n=o(r.packet),i=r.buffers;i.unshift(n),e(i)}d.removeBlobs(t,r)}function s(){this.reconstructor=null}function a(t){var r={},n=0;if(r.type=Number(t.charAt(0)),null==e.types[r.type])return h();if(e.BINARY_EVENT==r.type||e.BINARY_ACK==r.type){for(var o="";"-"!=t.charAt(++n)&&(o+=t.charAt(n),n!=t.length););if(o!=Number(o)||"-"!=t.charAt(n))throw new Error("Illegal attachments");r.attachments=Number(o)}if("/"==t.charAt(n+1))for(r.nsp="";++n;){var i=t.charAt(n);if(","==i)break;if(r.nsp+=i,n==t.length)break}else r.nsp="/";var s=t.charAt(n+1);if(""!==s&&Number(s)==s){for(r.id="";++n;){var i=t.charAt(n);if(null==i||Number(i)!=i){--n;break}if(r.id+=t.charAt(n),n==t.length)break}r.id=Number(r.id)}return t.charAt(++n)&&(r=c(r,t.substr(n))),p("decoded %s as %j",t,r),r}function c(t,e){try{t.data=f.parse(e)}catch(t){return h()}return t}function u(t){this.reconPack=t,this.buffers=[]}function h(t){return{type:e.ERROR,data:"parser error"}}var p=r(8)("socket.io-parser"),f=r(11),l=r(13),d=r(14),y=r(16);e.protocol=4,e.types=["CONNECT","DISCONNECT","EVENT","ACK","ERROR","BINARY_EVENT","BINARY_ACK"],e.CONNECT=0,e.DISCONNECT=1,e.EVENT=2,e.ACK=3,e.ERROR=4,e.BINARY_EVENT=5,e.BINARY_ACK=6,e.Encoder=n,e.Decoder=s,n.prototype.encode=function(t,r){if(p("encoding packet %j",t),e.BINARY_EVENT==t.type||e.BINARY_ACK==t.type)i(t,r);else{var n=o(t);r([n])}},l(s.prototype),s.prototype.add=function(t){var r;if("string"==typeof t)r=a(t),e.BINARY_EVENT==r.type||e.BINARY_ACK==r.type?(this.reconstructor=new u(r),0===this.reconstructor.reconPack.attachments&&this.emit("decoded",r)):this.emit("decoded",r);else{if(!y(t)&&!t.base64)throw new Error("Unknown type: "+t);if(!this.reconstructor)throw new Error("got binary data when not reconstructing a packet");r=this.reconstructor.takeBinaryData(t),r&&(this.reconstructor=null,this.emit("decoded",r))}},s.prototype.destroy=function(){this.reconstructor&&this.reconstructor.finishedReconstruction()},u.prototype.takeBinaryData=function(t){if(this.buffers.push(t),this.buffers.length==this.reconPack.attachments){var e=d.reconstructPacket(this.reconPack,this.buffers);return this.finishedReconstruction(),e}return null},u.prototype.finishedReconstruction=function(){this.reconPack=null,this.buffers=[]}},function(t,e,r){function n(){return"WebkitAppearance"in document.documentElement.style||window.console&&(console.firebug||console.exception&&console.table)||navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31}function o(){var t=arguments,r=this.useColors;if(t[0]=(r?"%c":"")+this.namespace+(r?" %c":" ")+t[0]+(r?"%c ":" ")+"+"+e.humanize(this.diff),!r)return t;var n="color: "+this.color;t=[t[0],n,"color: inherit"].concat(Array.prototype.slice.call(t,1));var o=0,i=0;return t[0].replace(/%[a-z%]/g,function(t){"%%"!==t&&(o++,"%c"===t&&(i=o))}),t.splice(i,0,n),t}function i(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function s(t){try{null==t?e.storage.removeItem("debug"):e.storage.debug=t}catch(t){}}function a(){var t;try{t=e.storage.debug}catch(t){}return t}function c(){try{return window.localStorage}catch(t){}}e=t.exports=r(9),e.log=i,e.formatArgs=o,e.save=s,e.load=a,e.useColors=n,e.storage="undefined"!=typeof chrome&&"undefined"!=typeof chrome.storage?chrome.storage.local:c(),e.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],e.formatters.j=function(t){return JSON.stringify(t)},e.enable(a())},function(t,e,r){function n(){return e.colors[h++%e.colors.length]}function o(t){function r(){}function o(){var t=o,r=+new Date,i=r-(u||r);t.diff=i,t.prev=u,t.curr=r,u=r,null==t.useColors&&(t.useColors=e.useColors()),null==t.color&&t.useColors&&(t.color=n());var s=Array.prototype.slice.call(arguments);s[0]=e.coerce(s[0]),"string"!=typeof s[0]&&(s=["%o"].concat(s));var a=0;s[0]=s[0].replace(/%([a-z%])/g,function(r,n){if("%%"===r)return r;a++;var o=e.formatters[n];if("function"==typeof o){var i=s[a];r=o.call(t,i),s.splice(a,1),a--}return r}),"function"==typeof e.formatArgs&&(s=e.formatArgs.apply(t,s));var c=o.log||e.log||console.log.bind(console);c.apply(t,s)}r.enabled=!1,o.enabled=!0;var i=e.enabled(t)?o:r;return i.namespace=t,i}function i(t){e.save(t);for(var r=(t||"").split(/[\s,]+/),n=r.length,o=0;o<n;o++)r[o]&&(t=r[o].replace(/\*/g,".*?"),"-"===t[0]?e.skips.push(new RegExp("^"+t.substr(1)+"$")):e.names.push(new RegExp("^"+t+"$")))}function s(){e.enable("")}function a(t){var r,n;for(r=0,n=e.skips.length;r<n;r++)if(e.skips[r].test(t))return!1;for(r=0,n=e.names.length;r<n;r++)if(e.names[r].test(t))return!0;return!1}function c(t){return t instanceof Error?t.stack||t.message:t}e=t.exports=o,e.coerce=c,e.disable=s,e.enable=i,e.enabled=a,e.humanize=r(10),e.names=[],e.skips=[],e.formatters={};var u,h=0},function(t,e){function r(t){if(t=""+t,!(t.length>1e4)){var e=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);if(e){var r=parseFloat(e[1]),n=(e[2]||"ms").toLowerCase();switch(n){case"years":case"year":case"yrs":case"yr":case"y":return r*h;case"days":case"day":case"d":return r*u;case"hours":case"hour":case"hrs":case"hr":case"h":return r*c;case"minutes":case"minute":case"mins":case"min":case"m":return r*a;case"seconds":case"second":case"secs":case"sec":case"s":return r*s;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return r}}}}function n(t){return t>=u?Math.round(t/u)+"d":t>=c?Math.round(t/c)+"h":t>=a?Math.round(t/a)+"m":t>=s?Math.round(t/s)+"s":t+"ms"}function o(t){return i(t,u,"day")||i(t,c,"hour")||i(t,a,"minute")||i(t,s,"second")||t+" ms"}function i(t,e,r){if(!(t<e))return t<1.5*e?Math.floor(t/e)+" "+r:Math.ceil(t/e)+" "+r+"s"}var s=1e3,a=60*s,c=60*a,u=24*c,h=365.25*u;t.exports=function(t,e){return e=e||{},"string"==typeof t?r(t):e.long?o(t):n(t)}},function(t,e,r){(function(t,r){var n=!1;(function(){function o(t,e){function r(t){if(r[t]!==g)return r[t];var o;if("bug-string-char-index"==t)o="a"!="a"[0];else if("json"==t)o=r("json-stringify")&&r("json-parse");else{var s,a='{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';if("json-stringify"==t){var c=e.stringify,h="function"==typeof c&&b;if(h){(s=function(){return 1}).toJSON=s;try{h="0"===c(0)&&"0"===c(new n)&&'""'==c(new i)&&c(v)===g&&c(g)===g&&c()===g&&"1"===c(s)&&"[1]"==c([s])&&"[null]"==c([g])&&"null"==c(null)&&"[null,null,null]"==c([g,v,null])&&c({a:[s,!0,!1,null,"\0\b\n\f\r\t"]})==a&&"1"===c(null,s)&&"[\n 1,\n 2\n]"==c([1,2],null,1)&&'"-271821-04-20T00:00:00.000Z"'==c(new u(-864e13))&&'"+275760-09-13T00:00:00.000Z"'==c(new u(864e13))&&'"-000001-01-01T00:00:00.000Z"'==c(new u(-621987552e5))&&'"1969-12-31T23:59:59.999Z"'==c(new u(-1))}catch(t){h=!1}}o=h}if("json-parse"==t){var p=e.parse;if("function"==typeof p)try{if(0===p("0")&&!p(!1)){s=p(a);var f=5==s.a.length&&1===s.a[0];if(f){try{f=!p('"\t"')}catch(t){}if(f)try{f=1!==p("01")}catch(t){}if(f)try{f=1!==p("1.")}catch(t){}}}}catch(t){f=!1}o=f}}return r[t]=!!o}t||(t=c.Object()),e||(e=c.Object());var n=t.Number||c.Number,i=t.String||c.String,a=t.Object||c.Object,u=t.Date||c.Date,h=t.SyntaxError||c.SyntaxError,p=t.TypeError||c.TypeError,f=t.Math||c.Math,l=t.JSON||c.JSON;"object"==typeof l&&l&&(e.stringify=l.stringify,e.parse=l.parse);var d,y,g,m=a.prototype,v=m.toString,b=new u(-0xc782b5b800cec);try{b=b.getUTCFullYear()==-109252&&0===b.getUTCMonth()&&1===b.getUTCDate()&&10==b.getUTCHours()&&37==b.getUTCMinutes()&&6==b.getUTCSeconds()&&708==b.getUTCMilliseconds()}catch(t){}if(!r("json")){var w="[object Function]",k="[object Date]",x="[object Number]",A="[object String]",C="[object Array]",B="[object Boolean]",S=r("bug-string-char-index");if(!b)var T=f.floor,E=[0,31,59,90,120,151,181,212,243,273,304,334],_=function(t,e){return E[e]+365*(t-1970)+T((t-1969+(e=+(e>1)))/4)-T((t-1901+e)/100)+T((t-1601+e)/400)};if((d=m.hasOwnProperty)||(d=function(t){var e,r={};return(r.__proto__=null,r.__proto__={toString:1},r).toString!=v?d=function(t){var e=this.__proto__,r=t in(this.__proto__=null,this);return this.__proto__=e,r}:(e=r.constructor,d=function(t){var r=(this.constructor||e).prototype;return t in this&&!(t in r&&this[t]===r[t])}),r=null,d.call(this,t)}),y=function(t,e){var r,n,o,i=0;(r=function(){this.valueOf=0}).prototype.valueOf=0,n=new r;for(o in n)d.call(n,o)&&i++;return r=n=null,i?y=2==i?function(t,e){var r,n={},o=v.call(t)==w;for(r in t)o&&"prototype"==r||d.call(n,r)||!(n[r]=1)||!d.call(t,r)||e(r)}:function(t,e){var r,n,o=v.call(t)==w;for(r in t)o&&"prototype"==r||!d.call(t,r)||(n="constructor"===r)||e(r);(n||d.call(t,r="constructor"))&&e(r)}:(n=["valueOf","toString","toLocaleString","propertyIsEnumerable","isPrototypeOf","hasOwnProperty","constructor"],y=function(t,e){var r,o,i=v.call(t)==w,a=!i&&"function"!=typeof t.constructor&&s[typeof t.hasOwnProperty]&&t.hasOwnProperty||d;for(r in t)i&&"prototype"==r||!a.call(t,r)||e(r);for(o=n.length;r=n[--o];a.call(t,r)&&e(r));}),y(t,e)},!r("json-stringify")){var N={92:"\\\\",34:'\\"',8:"\\b",12:"\\f",10:"\\n",13:"\\r",9:"\\t"},j="000000",O=function(t,e){return(j+(e||0)).slice(-t)},P="\\u00",R=function(t){for(var e='"',r=0,n=t.length,o=!S||n>10,i=o&&(S?t.split(""):t);r<n;r++){var s=t.charCodeAt(r);switch(s){case 8:case 9:case 10:case 12:case 13:case 34:case 92:e+=N[s];break;default:if(s<32){e+=P+O(2,s.toString(16));break}e+=o?i[r]:t.charAt(r)}}return e+'"'},D=function(t,e,r,n,o,i,s){var a,c,u,h,f,l,m,b,w,S,E,N,j,P,q,U;try{a=e[t]}catch(t){}if("object"==typeof a&&a)if(c=v.call(a),c!=k||d.call(a,"toJSON"))"function"==typeof a.toJSON&&(c!=x&&c!=A&&c!=C||d.call(a,"toJSON"))&&(a=a.toJSON(t));else if(a>-1/0&&a<1/0){if(_){for(f=T(a/864e5),u=T(f/365.2425)+1970-1;_(u+1,0)<=f;u++);for(h=T((f-_(u,0))/30.42);_(u,h+1)<=f;h++);f=1+f-_(u,h),l=(a%864e5+864e5)%864e5,m=T(l/36e5)%24,b=T(l/6e4)%60,w=T(l/1e3)%60,S=l%1e3}else u=a.getUTCFullYear(),h=a.getUTCMonth(),f=a.getUTCDate(),m=a.getUTCHours(),b=a.getUTCMinutes(),w=a.getUTCSeconds(),S=a.getUTCMilliseconds();a=(u<=0||u>=1e4?(u<0?"-":"+")+O(6,u<0?-u:u):O(4,u))+"-"+O(2,h+1)+"-"+O(2,f)+"T"+O(2,m)+":"+O(2,b)+":"+O(2,w)+"."+O(3,S)+"Z"}else a=null;if(r&&(a=r.call(e,t,a)),null===a)return"null";if(c=v.call(a),c==B)return""+a;if(c==x)return a>-1/0&&a<1/0?""+a:"null";if(c==A)return R(""+a);if("object"==typeof a){for(P=s.length;P--;)if(s[P]===a)throw p();if(s.push(a),E=[],q=i,i+=o,c==C){for(j=0,P=a.length;j<P;j++)N=D(j,a,r,n,o,i,s),E.push(N===g?"null":N);U=E.length?o?"[\n"+i+E.join(",\n"+i)+"\n"+q+"]":"["+E.join(",")+"]":"[]"}else y(n||a,function(t){var e=D(t,a,r,n,o,i,s);e!==g&&E.push(R(t)+":"+(o?" ":"")+e)}),U=E.length?o?"{\n"+i+E.join(",\n"+i)+"\n"+q+"}":"{"+E.join(",")+"}":"{}";return s.pop(),U}};e.stringify=function(t,e,r){var n,o,i,a;if(s[typeof e]&&e)if((a=v.call(e))==w)o=e;else if(a==C){i={};for(var c,u=0,h=e.length;u<h;c=e[u++],a=v.call(c),(a==A||a==x)&&(i[c]=1));}if(r)if((a=v.call(r))==x){if((r-=r%1)>0)for(n="",r>10&&(r=10);n.length<r;n+=" ");}else a==A&&(n=r.length<=10?r:r.slice(0,10));return D("",(c={},c[""]=t,c),o,i,n,"",[])}}if(!r("json-parse")){var q,U,M=i.fromCharCode,L={92:"\\",34:'"',47:"/",98:"\b",116:"\t",110:"\n",102:"\f",114:"\r"},I=function(){throw q=U=null,h()},H=function(){for(var t,e,r,n,o,i=U,s=i.length;q<s;)switch(o=i.charCodeAt(q)){case 9:case 10:case 13:case 32:q++;break;case 123:case 125:case 91:case 93:case 58:case 44:return t=S?i.charAt(q):i[q],q++,t;case 34:for(t="@",q++;q<s;)if(o=i.charCodeAt(q),o<32)I();else if(92==o)switch(o=i.charCodeAt(++q)){case 92:case 34:case 47:case 98:case 116:case 110:case 102:case 114:t+=L[o],q++;break;case 117:for(e=++q,r=q+4;q<r;q++)o=i.charCodeAt(q),o>=48&&o<=57||o>=97&&o<=102||o>=65&&o<=70||I();t+=M("0x"+i.slice(e,q));break;default:I()}else{if(34==o)break;for(o=i.charCodeAt(q),e=q;o>=32&&92!=o&&34!=o;)o=i.charCodeAt(++q);t+=i.slice(e,q)}if(34==i.charCodeAt(q))return q++,t;I();default:if(e=q,45==o&&(n=!0,o=i.charCodeAt(++q)),o>=48&&o<=57){for(48==o&&(o=i.charCodeAt(q+1),o>=48&&o<=57)&&I(),n=!1;q<s&&(o=i.charCodeAt(q),o>=48&&o<=57);q++);if(46==i.charCodeAt(q)){for(r=++q;r<s&&(o=i.charCodeAt(r),o>=48&&o<=57);r++);r==q&&I(),q=r}if(o=i.charCodeAt(q),101==o||69==o){for(o=i.charCodeAt(++q),43!=o&&45!=o||q++,r=q;r<s&&(o=i.charCodeAt(r),o>=48&&o<=57);r++);r==q&&I(),q=r}return+i.slice(e,q)}if(n&&I(),"true"==i.slice(q,q+4))return q+=4,!0;if("false"==i.slice(q,q+5))return q+=5,!1;if("null"==i.slice(q,q+4))return q+=4,null;I()}return"$"},z=function(t){var e,r;if("$"==t&&I(),"string"==typeof t){if("@"==(S?t.charAt(0):t[0]))return t.slice(1);if("["==t){for(e=[];t=H(),"]"!=t;r||(r=!0))r&&(","==t?(t=H(),"]"==t&&I()):I()),","==t&&I(),e.push(z(t));return e}if("{"==t){for(e={};t=H(),"}"!=t;r||(r=!0))r&&(","==t?(t=H(),"}"==t&&I()):I()),","!=t&&"string"==typeof t&&"@"==(S?t.charAt(0):t[0])&&":"==H()||I(),e[t.slice(1)]=z(H());return e}I()}return t},J=function(t,e,r){var n=X(t,e,r);n===g?delete t[e]:t[e]=n},X=function(t,e,r){var n,o=t[e];if("object"==typeof o&&o)if(v.call(o)==C)for(n=o.length;n--;)J(o,n,r);else y(o,function(t){J(o,t,r)});return r.call(t,e,o)};e.parse=function(t,e){var r,n;return q=0,U=""+t,r=z(H()),"$"!=H()&&I(),q=U=null,e&&v.call(e)==w?X((n={},n[""]=r,n),"",e):r}}}return e.runInContext=o,e}var i="function"==typeof n&&n.amd,s={function:!0,object:!0},a=s[typeof e]&&e&&!e.nodeType&&e,c=s[typeof window]&&window||this,u=a&&s[typeof t]&&t&&!t.nodeType&&"object"==typeof r&&r;if(!u||u.global!==u&&u.window!==u&&u.self!==u||(c=u),a&&!i)o(c,a);else{var h=c.JSON,p=c.JSON3,f=!1,l=o(c,c.JSON3={noConflict:function(){return f||(f=!0,c.JSON=h,c.JSON3=p,h=p=null),l}});c.JSON={parse:l.parse,stringify:l.stringify}}i&&n(function(){return l})}).call(this)}).call(e,r(12)(t),function(){return this}())},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children=[],t.webpackPolyfill=1),t}},function(t,e){function r(t){if(t)return n(t)}function n(t){for(var e in r.prototype)t[e]=r.prototype[e];return t}t.exports=r,r.prototype.on=r.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks[t]=this._callbacks[t]||[]).push(e),this},r.prototype.once=function(t,e){function r(){n.off(t,r),e.apply(this,arguments)}var n=this;return this._callbacks=this._callbacks||{},r.fn=e,this.on(t,r),this},r.prototype.off=r.prototype.removeListener=r.prototype.removeAllListeners=r.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var r=this._callbacks[t];if(!r)return this;if(1==arguments.length)return delete this._callbacks[t],this;for(var n,o=0;o<r.length;o++)if(n=r[o],n===e||n.fn===e){r.splice(o,1);break}return this},r.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),r=this._callbacks[t];if(r){r=r.slice(0);for(var n=0,o=r.length;n<o;++n)r[n].apply(this,e)}return this},r.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks[t]||[]},r.prototype.hasListeners=function(t){return!!this.listeners(t).length}},function(t,e,r){(function(t){var n=r(15),o=r(16);e.deconstructPacket=function(t){function e(t){if(!t)return t;if(o(t)){var i={_placeholder:!0,num:r.length};return r.push(t),i}if(n(t)){for(var s=new Array(t.length),a=0;a<t.length;a++)s[a]=e(t[a]);return s}if("object"==typeof t&&!(t instanceof Date)){var s={};for(var c in t)s[c]=e(t[c]);return s}return t}var r=[],i=t.data,s=t;return s.data=e(i),s.attachments=r.length,{packet:s,buffers:r}},e.reconstructPacket=function(t,e){function r(t){if(t&&t._placeholder){var o=e[t.num];return o}if(n(t)){for(var i=0;i<t.length;i++)t[i]=r(t[i]);return t}if(t&&"object"==typeof t){for(var s in t)t[s]=r(t[s]);return t}return t}return t.data=r(t.data),t.attachments=void 0,t},e.removeBlobs=function(e,r){function i(e,c,u){if(!e)return e;if(t.Blob&&e instanceof Blob||t.File&&e instanceof File){s++;var h=new FileReader;h.onload=function(){u?u[c]=this.result:a=this.result,--s||r(a)},h.readAsArrayBuffer(e)}else if(n(e))for(var p=0;p<e.length;p++)i(e[p],p,e);else if(e&&"object"==typeof e&&!o(e))for(var f in e)i(e[f],f,e)}var s=0,a=e;i(a),s||r(a)}}).call(e,function(){return this}())},function(t,e){t.exports=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)}},function(t,e){(function(e){function r(t){return e.Buffer&&e.Buffer.isBuffer(t)||e.ArrayBuffer&&t instanceof ArrayBuffer}t.exports=r}).call(e,function(){return this}())},function(t,e,r){"use strict";function n(t,e){return this instanceof n?(t&&"object"===("undefined"==typeof t?"undefined":o(t))&&(e=t,t=void 0),e=e||{},e.path=e.path||"/socket.io",this.nsps={},this.subs=[],this.opts=e,this.reconnection(e.reconnection!==!1),this.reconnectionAttempts(e.reconnectionAttempts||1/0),this.reconnectionDelay(e.reconnectionDelay||1e3),this.reconnectionDelayMax(e.reconnectionDelayMax||5e3),this.randomizationFactor(e.randomizationFactor||.5),this.backoff=new l({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(null==e.timeout?2e4:e.timeout),this.readyState="closed",this.uri=t,this.connecting=[],this.lastPing=null,this.encoding=!1,this.packetBuffer=[],this.encoder=new c.Encoder,this.decoder=new c.Decoder,this.autoConnect=e.autoConnect!==!1,void(this.autoConnect&&this.open())):new n(t,e)}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=r(18),s=r(44),a=r(35),c=r(7),u=r(46),h=r(47),p=r(3)("socket.io-client:manager"),f=r(42),l=r(48),d=Object.prototype.hasOwnProperty;t.exports=n,n.prototype.emitAll=function(){this.emit.apply(this,arguments);for(var t in this.nsps)d.call(this.nsps,t)&&this.nsps[t].emit.apply(this.nsps[t],arguments)},n.prototype.updateSocketIds=function(){for(var t in this.nsps)d.call(this.nsps,t)&&(this.nsps[t].id=this.engine.id)},a(n.prototype),n.prototype.reconnection=function(t){return arguments.length?(this._reconnection=!!t,this):this._reconnection},n.prototype.reconnectionAttempts=function(t){return arguments.length?(this._reconnectionAttempts=t,this):this._reconnectionAttempts},n.prototype.reconnectionDelay=function(t){return arguments.length?(this._reconnectionDelay=t,this.backoff&&this.backoff.setMin(t),this):this._reconnectionDelay},n.prototype.randomizationFactor=function(t){return arguments.length?(this._randomizationFactor=t,this.backoff&&this.backoff.setJitter(t),this):this._randomizationFactor},n.prototype.reconnectionDelayMax=function(t){return arguments.length?(this._reconnectionDelayMax=t,this.backoff&&this.backoff.setMax(t),this):this._reconnectionDelayMax},n.prototype.timeout=function(t){return arguments.length?(this._timeout=t,this):this._timeout},n.prototype.maybeReconnectOnOpen=function(){!this.reconnecting&&this._reconnection&&0===this.backoff.attempts&&this.reconnect()},n.prototype.open=n.prototype.connect=function(t,e){if(p("readyState %s",this.readyState),~this.readyState.indexOf("open"))return this;p("opening %s",this.uri),this.engine=i(this.uri,this.opts);var r=this.engine,n=this;this.readyState="opening",this.skipReconnect=!1;var o=u(r,"open",function(){n.onopen(),t&&t()}),s=u(r,"error",function(e){if(p("connect_error"),n.cleanup(),n.readyState="closed",n.emitAll("connect_error",e),t){var r=new Error("Connection error");r.data=e,t(r)}else n.maybeReconnectOnOpen()});if(!1!==this._timeout){var a=this._timeout;p("connect attempt will timeout after %d",a);var c=setTimeout(function(){p("connect attempt timed out after %d",a),o.destroy(),r.close(),r.emit("error","timeout"),n.emitAll("connect_timeout",a)},a);this.subs.push({destroy:function(){clearTimeout(c)}})}return this.subs.push(o),this.subs.push(s),this},n.prototype.onopen=function(){p("open"),this.cleanup(),this.readyState="open",this.emit("open");var t=this.engine;this.subs.push(u(t,"data",h(this,"ondata"))),this.subs.push(u(t,"ping",h(this,"onping"))),this.subs.push(u(t,"pong",h(this,"onpong"))),this.subs.push(u(t,"error",h(this,"onerror"))),this.subs.push(u(t,"close",h(this,"onclose"))),this.subs.push(u(this.decoder,"decoded",h(this,"ondecoded")))},n.prototype.onping=function(){this.lastPing=new Date,this.emitAll("ping")},n.prototype.onpong=function(){this.emitAll("pong",new Date-this.lastPing)},n.prototype.ondata=function(t){this.decoder.add(t)},n.prototype.ondecoded=function(t){this.emit("packet",t)},n.prototype.onerror=function(t){p("error",t),this.emitAll("error",t)},n.prototype.socket=function(t,e){function r(){~f(o.connecting,n)||o.connecting.push(n)}var n=this.nsps[t];if(!n){n=new s(this,t,e),this.nsps[t]=n;var o=this;n.on("connecting",r),n.on("connect",function(){n.id=o.engine.id}),this.autoConnect&&r()}return n},n.prototype.destroy=function(t){var e=f(this.connecting,t);~e&&this.connecting.splice(e,1),this.connecting.length||this.close()},n.prototype.packet=function(t){p("writing packet %j",t);var e=this;t.query&&0===t.type&&(t.nsp+="?"+t.query),e.encoding?e.packetBuffer.push(t):(e.encoding=!0,this.encoder.encode(t,function(r){for(var n=0;n<r.length;n++)e.engine.write(r[n],t.options);e.encoding=!1,e.processPacketQueue()}))},n.prototype.processPacketQueue=function(){if(this.packetBuffer.length>0&&!this.encoding){var t=this.packetBuffer.shift();this.packet(t)}},n.prototype.cleanup=function(){p("cleanup");for(var t=this.subs.length,e=0;e<t;e++){var r=this.subs.shift();r.destroy()}this.packetBuffer=[],this.encoding=!1,this.lastPing=null,this.decoder.destroy()},n.prototype.close=n.prototype.disconnect=function(){p("disconnect"),this.skipReconnect=!0,this.reconnecting=!1,"opening"===this.readyState&&this.cleanup(),this.backoff.reset(),this.readyState="closed",this.engine&&this.engine.close()},n.prototype.onclose=function(t){p("onclose"),this.cleanup(),this.backoff.reset(),this.readyState="closed",this.emit("close",t),this._reconnection&&!this.skipReconnect&&this.reconnect()},n.prototype.reconnect=function(){if(this.reconnecting||this.skipReconnect)return this;var t=this;if(this.backoff.attempts>=this._reconnectionAttempts)p("reconnect failed"),this.backoff.reset(),this.emitAll("reconnect_failed"),this.reconnecting=!1;else{var e=this.backoff.duration();p("will wait %dms before reconnect attempt",e),this.reconnecting=!0;var r=setTimeout(function(){t.skipReconnect||(p("attempting reconnect"),t.emitAll("reconnect_attempt",t.backoff.attempts),t.emitAll("reconnecting",t.backoff.attempts),t.skipReconnect||t.open(function(e){e?(p("reconnect attempt error"),t.reconnecting=!1,t.reconnect(),t.emitAll("reconnect_error",e.data)):(p("reconnect success"),t.onreconnect())}))},e);this.subs.push({destroy:function(){clearTimeout(r)}})}},n.prototype.onreconnect=function(){var t=this.backoff.attempts;this.reconnecting=!1,this.backoff.reset(),this.updateSocketIds(),this.emitAll("reconnect",t)}},function(t,e,r){t.exports=r(19)},function(t,e,r){t.exports=r(20),t.exports.parser=r(27)},function(t,e,r){(function(e){function n(t,r){if(!(this instanceof n))return new n(t,r);r=r||{},t&&"object"==typeof t&&(r=t,t=null),t?(t=h(t),r.hostname=t.host,r.secure="https"===t.protocol||"wss"===t.protocol,r.port=t.port,t.query&&(r.query=t.query)):r.host&&(r.hostname=h(r.host).host),
this.secure=null!=r.secure?r.secure:e.location&&"https:"===location.protocol,r.hostname&&!r.port&&(r.port=this.secure?"443":"80"),this.agent=r.agent||!1,this.hostname=r.hostname||(e.location?location.hostname:"localhost"),this.port=r.port||(e.location&&location.port?location.port:this.secure?443:80),this.query=r.query||{},"string"==typeof this.query&&(this.query=f.decode(this.query)),this.upgrade=!1!==r.upgrade,this.path=(r.path||"/engine.io").replace(/\/$/,"")+"/",this.forceJSONP=!!r.forceJSONP,this.jsonp=!1!==r.jsonp,this.forceBase64=!!r.forceBase64,this.enablesXDR=!!r.enablesXDR,this.timestampParam=r.timestampParam||"t",this.timestampRequests=r.timestampRequests,this.transports=r.transports||["polling","websocket"],this.readyState="",this.writeBuffer=[],this.prevBufferLen=0,this.policyPort=r.policyPort||843,this.rememberUpgrade=r.rememberUpgrade||!1,this.binaryType=null,this.onlyBinaryUpgrades=r.onlyBinaryUpgrades,this.perMessageDeflate=!1!==r.perMessageDeflate&&(r.perMessageDeflate||{}),!0===this.perMessageDeflate&&(this.perMessageDeflate={}),this.perMessageDeflate&&null==this.perMessageDeflate.threshold&&(this.perMessageDeflate.threshold=1024),this.pfx=r.pfx||null,this.key=r.key||null,this.passphrase=r.passphrase||null,this.cert=r.cert||null,this.ca=r.ca||null,this.ciphers=r.ciphers||null,this.rejectUnauthorized=void 0===r.rejectUnauthorized?null:r.rejectUnauthorized,this.forceNode=!!r.forceNode;var o="object"==typeof e&&e;o.global===o&&(r.extraHeaders&&Object.keys(r.extraHeaders).length>0&&(this.extraHeaders=r.extraHeaders),r.localAddress&&(this.localAddress=r.localAddress)),this.id=null,this.upgrades=null,this.pingInterval=null,this.pingTimeout=null,this.pingIntervalTimer=null,this.pingTimeoutTimer=null,this.open()}function o(t){var e={};for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);return e}var i=r(21),s=r(35),a=r(3)("engine.io-client:socket"),c=r(42),u=r(27),h=r(2),p=r(43),f=r(36);t.exports=n,n.priorWebsocketSuccess=!1,s(n.prototype),n.protocol=u.protocol,n.Socket=n,n.Transport=r(26),n.transports=r(21),n.parser=r(27),n.prototype.createTransport=function(t){a('creating transport "%s"',t);var e=o(this.query);e.EIO=u.protocol,e.transport=t,this.id&&(e.sid=this.id);var r=new i[t]({agent:this.agent,hostname:this.hostname,port:this.port,secure:this.secure,path:this.path,query:e,forceJSONP:this.forceJSONP,jsonp:this.jsonp,forceBase64:this.forceBase64,enablesXDR:this.enablesXDR,timestampRequests:this.timestampRequests,timestampParam:this.timestampParam,policyPort:this.policyPort,socket:this,pfx:this.pfx,key:this.key,passphrase:this.passphrase,cert:this.cert,ca:this.ca,ciphers:this.ciphers,rejectUnauthorized:this.rejectUnauthorized,perMessageDeflate:this.perMessageDeflate,extraHeaders:this.extraHeaders,forceNode:this.forceNode,localAddress:this.localAddress});return r},n.prototype.open=function(){var t;if(this.rememberUpgrade&&n.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1)t="websocket";else{if(0===this.transports.length){var e=this;return void setTimeout(function(){e.emit("error","No transports available")},0)}t=this.transports[0]}this.readyState="opening";try{t=this.createTransport(t)}catch(t){return this.transports.shift(),void this.open()}t.open(),this.setTransport(t)},n.prototype.setTransport=function(t){a("setting transport %s",t.name);var e=this;this.transport&&(a("clearing existing transport %s",this.transport.name),this.transport.removeAllListeners()),this.transport=t,t.on("drain",function(){e.onDrain()}).on("packet",function(t){e.onPacket(t)}).on("error",function(t){e.onError(t)}).on("close",function(){e.onClose("transport close")})},n.prototype.probe=function(t){function e(){if(f.onlyBinaryUpgrades){var e=!this.supportsBinary&&f.transport.supportsBinary;p=p||e}p||(a('probe transport "%s" opened',t),h.send([{type:"ping",data:"probe"}]),h.once("packet",function(e){if(!p)if("pong"===e.type&&"probe"===e.data){if(a('probe transport "%s" pong',t),f.upgrading=!0,f.emit("upgrading",h),!h)return;n.priorWebsocketSuccess="websocket"===h.name,a('pausing current transport "%s"',f.transport.name),f.transport.pause(function(){p||"closed"!==f.readyState&&(a("changing transport and sending upgrade packet"),u(),f.setTransport(h),h.send([{type:"upgrade"}]),f.emit("upgrade",h),h=null,f.upgrading=!1,f.flush())})}else{a('probe transport "%s" failed',t);var r=new Error("probe error");r.transport=h.name,f.emit("upgradeError",r)}}))}function r(){p||(p=!0,u(),h.close(),h=null)}function o(e){var n=new Error("probe error: "+e);n.transport=h.name,r(),a('probe transport "%s" failed because of error: %s',t,e),f.emit("upgradeError",n)}function i(){o("transport closed")}function s(){o("socket closed")}function c(t){h&&t.name!==h.name&&(a('"%s" works - aborting "%s"',t.name,h.name),r())}function u(){h.removeListener("open",e),h.removeListener("error",o),h.removeListener("close",i),f.removeListener("close",s),f.removeListener("upgrading",c)}a('probing transport "%s"',t);var h=this.createTransport(t,{probe:1}),p=!1,f=this;n.priorWebsocketSuccess=!1,h.once("open",e),h.once("error",o),h.once("close",i),this.once("close",s),this.once("upgrading",c),h.open()},n.prototype.onOpen=function(){if(a("socket open"),this.readyState="open",n.priorWebsocketSuccess="websocket"===this.transport.name,this.emit("open"),this.flush(),"open"===this.readyState&&this.upgrade&&this.transport.pause){a("starting upgrade probes");for(var t=0,e=this.upgrades.length;t<e;t++)this.probe(this.upgrades[t])}},n.prototype.onPacket=function(t){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState)switch(a('socket receive: type "%s", data "%s"',t.type,t.data),this.emit("packet",t),this.emit("heartbeat"),t.type){case"open":this.onHandshake(p(t.data));break;case"pong":this.setPing(),this.emit("pong");break;case"error":var e=new Error("server error");e.code=t.data,this.onError(e);break;case"message":this.emit("data",t.data),this.emit("message",t.data)}else a('packet received with socket readyState "%s"',this.readyState)},n.prototype.onHandshake=function(t){this.emit("handshake",t),this.id=t.sid,this.transport.query.sid=t.sid,this.upgrades=this.filterUpgrades(t.upgrades),this.pingInterval=t.pingInterval,this.pingTimeout=t.pingTimeout,this.onOpen(),"closed"!==this.readyState&&(this.setPing(),this.removeListener("heartbeat",this.onHeartbeat),this.on("heartbeat",this.onHeartbeat))},n.prototype.onHeartbeat=function(t){clearTimeout(this.pingTimeoutTimer);var e=this;e.pingTimeoutTimer=setTimeout(function(){"closed"!==e.readyState&&e.onClose("ping timeout")},t||e.pingInterval+e.pingTimeout)},n.prototype.setPing=function(){var t=this;clearTimeout(t.pingIntervalTimer),t.pingIntervalTimer=setTimeout(function(){a("writing ping packet - expecting pong within %sms",t.pingTimeout),t.ping(),t.onHeartbeat(t.pingTimeout)},t.pingInterval)},n.prototype.ping=function(){var t=this;this.sendPacket("ping",function(){t.emit("ping")})},n.prototype.onDrain=function(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,0===this.writeBuffer.length?this.emit("drain"):this.flush()},n.prototype.flush=function(){"closed"!==this.readyState&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length&&(a("flushing %d packets in socket",this.writeBuffer.length),this.transport.send(this.writeBuffer),this.prevBufferLen=this.writeBuffer.length,this.emit("flush"))},n.prototype.write=n.prototype.send=function(t,e,r){return this.sendPacket("message",t,e,r),this},n.prototype.sendPacket=function(t,e,r,n){if("function"==typeof e&&(n=e,e=void 0),"function"==typeof r&&(n=r,r=null),"closing"!==this.readyState&&"closed"!==this.readyState){r=r||{},r.compress=!1!==r.compress;var o={type:t,data:e,options:r};this.emit("packetCreate",o),this.writeBuffer.push(o),n&&this.once("flush",n),this.flush()}},n.prototype.close=function(){function t(){n.onClose("forced close"),a("socket closing - telling transport to close"),n.transport.close()}function e(){n.removeListener("upgrade",e),n.removeListener("upgradeError",e),t()}function r(){n.once("upgrade",e),n.once("upgradeError",e)}if("opening"===this.readyState||"open"===this.readyState){this.readyState="closing";var n=this;this.writeBuffer.length?this.once("drain",function(){this.upgrading?r():t()}):this.upgrading?r():t()}return this},n.prototype.onError=function(t){a("socket error %j",t),n.priorWebsocketSuccess=!1,this.emit("error",t),this.onClose("transport error",t)},n.prototype.onClose=function(t,e){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState){a('socket close with reason: "%s"',t);var r=this;clearTimeout(this.pingIntervalTimer),clearTimeout(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),this.readyState="closed",this.id=null,this.emit("close",t,e),r.writeBuffer=[],r.prevBufferLen=0}},n.prototype.filterUpgrades=function(t){for(var e=[],r=0,n=t.length;r<n;r++)~c(this.transports,t[r])&&e.push(t[r]);return e}}).call(e,function(){return this}())},function(t,e,r){(function(t){function n(e){var r,n=!1,a=!1,c=!1!==e.jsonp;if(t.location){var u="https:"===location.protocol,h=location.port;h||(h=u?443:80),n=e.hostname!==location.hostname||h!==e.port,a=e.secure!==u}if(e.xdomain=n,e.xscheme=a,r=new o(e),"open"in r&&!e.forceJSONP)return new i(e);if(!c)throw new Error("JSONP disabled");return new s(e)}var o=r(22),i=r(24),s=r(39),a=r(40);e.polling=n,e.websocket=a}).call(e,function(){return this}())},function(t,e,r){(function(e){var n=r(23);t.exports=function(t){var r=t.xdomain,o=t.xscheme,i=t.enablesXDR;try{if("undefined"!=typeof XMLHttpRequest&&(!r||n))return new XMLHttpRequest}catch(t){}try{if("undefined"!=typeof XDomainRequest&&!o&&i)return new XDomainRequest}catch(t){}if(!r)try{return new(e[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")}catch(t){}}}).call(e,function(){return this}())},function(t,e){try{t.exports="undefined"!=typeof XMLHttpRequest&&"withCredentials"in new XMLHttpRequest}catch(e){t.exports=!1}},function(t,e,r){(function(e){function n(){}function o(t){if(c.call(this,t),this.requestTimeout=t.requestTimeout,e.location){var r="https:"===location.protocol,n=location.port;n||(n=r?443:80),this.xd=t.hostname!==e.location.hostname||n!==t.port,this.xs=t.secure!==r}else this.extraHeaders=t.extraHeaders}function i(t){this.method=t.method||"GET",this.uri=t.uri,this.xd=!!t.xd,this.xs=!!t.xs,this.async=!1!==t.async,this.data=void 0!==t.data?t.data:null,this.agent=t.agent,this.isBinary=t.isBinary,this.supportsBinary=t.supportsBinary,this.enablesXDR=t.enablesXDR,this.requestTimeout=t.requestTimeout,this.pfx=t.pfx,this.key=t.key,this.passphrase=t.passphrase,this.cert=t.cert,this.ca=t.ca,this.ciphers=t.ciphers,this.rejectUnauthorized=t.rejectUnauthorized,this.extraHeaders=t.extraHeaders,this.create()}function s(){for(var t in i.requests)i.requests.hasOwnProperty(t)&&i.requests[t].abort()}var a=r(22),c=r(25),u=r(35),h=r(37),p=r(3)("engine.io-client:polling-xhr");t.exports=o,t.exports.Request=i,h(o,c),o.prototype.supportsBinary=!0,o.prototype.request=function(t){return t=t||{},t.uri=this.uri(),t.xd=this.xd,t.xs=this.xs,t.agent=this.agent||!1,t.supportsBinary=this.supportsBinary,t.enablesXDR=this.enablesXDR,t.pfx=this.pfx,t.key=this.key,t.passphrase=this.passphrase,t.cert=this.cert,t.ca=this.ca,t.ciphers=this.ciphers,t.rejectUnauthorized=this.rejectUnauthorized,t.requestTimeout=this.requestTimeout,t.extraHeaders=this.extraHeaders,new i(t)},o.prototype.doWrite=function(t,e){var r="string"!=typeof t&&void 0!==t,n=this.request({method:"POST",data:t,isBinary:r}),o=this;n.on("success",e),n.on("error",function(t){o.onError("xhr post error",t)}),this.sendXhr=n},o.prototype.doPoll=function(){p("xhr poll");var t=this.request(),e=this;t.on("data",function(t){e.onData(t)}),t.on("error",function(t){e.onError("xhr poll error",t)}),this.pollXhr=t},u(i.prototype),i.prototype.create=function(){var t={agent:this.agent,xdomain:this.xd,xscheme:this.xs,enablesXDR:this.enablesXDR};t.pfx=this.pfx,t.key=this.key,t.passphrase=this.passphrase,t.cert=this.cert,t.ca=this.ca,t.ciphers=this.ciphers,t.rejectUnauthorized=this.rejectUnauthorized;var r=this.xhr=new a(t),n=this;try{p("xhr open %s: %s",this.method,this.uri),r.open(this.method,this.uri,this.async);try{if(this.extraHeaders){r.setDisableHeaderCheck(!0);for(var o in this.extraHeaders)this.extraHeaders.hasOwnProperty(o)&&r.setRequestHeader(o,this.extraHeaders[o])}}catch(t){}if(this.supportsBinary&&(r.responseType="arraybuffer"),"POST"===this.method)try{this.isBinary?r.setRequestHeader("Content-type","application/octet-stream"):r.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch(t){}try{r.setRequestHeader("Accept","*/*")}catch(t){}"withCredentials"in r&&(r.withCredentials=!0),this.requestTimeout&&(r.timeout=this.requestTimeout),this.hasXDR()?(r.onload=function(){n.onLoad()},r.onerror=function(){n.onError(r.responseText)}):r.onreadystatechange=function(){4===r.readyState&&(200===r.status||1223===r.status?n.onLoad():setTimeout(function(){n.onError(r.status)},0))},p("xhr data %s",this.data),r.send(this.data)}catch(t){return void setTimeout(function(){n.onError(t)},0)}e.document&&(this.index=i.requestsCount++,i.requests[this.index]=this)},i.prototype.onSuccess=function(){this.emit("success"),this.cleanup()},i.prototype.onData=function(t){this.emit("data",t),this.onSuccess()},i.prototype.onError=function(t){this.emit("error",t),this.cleanup(!0)},i.prototype.cleanup=function(t){if("undefined"!=typeof this.xhr&&null!==this.xhr){if(this.hasXDR()?this.xhr.onload=this.xhr.onerror=n:this.xhr.onreadystatechange=n,t)try{this.xhr.abort()}catch(t){}e.document&&delete i.requests[this.index],this.xhr=null}},i.prototype.onLoad=function(){var t;try{var e;try{e=this.xhr.getResponseHeader("Content-Type").split(";")[0]}catch(t){}if("application/octet-stream"===e)t=this.xhr.response||this.xhr.responseText;else if(this.supportsBinary)try{t=String.fromCharCode.apply(null,new Uint8Array(this.xhr.response))}catch(e){for(var r=new Uint8Array(this.xhr.response),n=[],o=0,i=r.length;o<i;o++)n.push(r[o]);t=String.fromCharCode.apply(null,n)}else t=this.xhr.responseText}catch(t){this.onError(t)}null!=t&&this.onData(t)},i.prototype.hasXDR=function(){return"undefined"!=typeof e.XDomainRequest&&!this.xs&&this.enablesXDR},i.prototype.abort=function(){this.cleanup()},i.requestsCount=0,i.requests={},e.document&&(e.attachEvent?e.attachEvent("onunload",s):e.addEventListener&&e.addEventListener("beforeunload",s,!1))}).call(e,function(){return this}())},function(t,e,r){function n(t){var e=t&&t.forceBase64;h&&!e||(this.supportsBinary=!1),o.call(this,t)}var o=r(26),i=r(36),s=r(27),a=r(37),c=r(38),u=r(3)("engine.io-client:polling");t.exports=n;var h=function(){var t=r(22),e=new t({xdomain:!1});return null!=e.responseType}();a(n,o),n.prototype.name="polling",n.prototype.doOpen=function(){this.poll()},n.prototype.pause=function(t){function e(){u("paused"),r.readyState="paused",t()}var r=this;if(this.readyState="pausing",this.polling||!this.writable){var n=0;this.polling&&(u("we are currently polling - waiting to pause"),n++,this.once("pollComplete",function(){u("pre-pause polling complete"),--n||e()})),this.writable||(u("we are currently writing - waiting to pause"),n++,this.once("drain",function(){u("pre-pause writing complete"),--n||e()}))}else e()},n.prototype.poll=function(){u("polling"),this.polling=!0,this.doPoll(),this.emit("poll")},n.prototype.onData=function(t){var e=this;u("polling got data %s",t);var r=function(t,r,n){return"opening"===e.readyState&&e.onOpen(),"close"===t.type?(e.onClose(),!1):void e.onPacket(t)};s.decodePayload(t,this.socket.binaryType,r),"closed"!==this.readyState&&(this.polling=!1,this.emit("pollComplete"),"open"===this.readyState?this.poll():u('ignoring poll - transport state "%s"',this.readyState))},n.prototype.doClose=function(){function t(){u("writing close packet"),e.write([{type:"close"}])}var e=this;"open"===this.readyState?(u("transport open - closing"),t()):(u("transport not open - deferring close"),this.once("open",t))},n.prototype.write=function(t){var e=this;this.writable=!1;var r=function(){e.writable=!0,e.emit("drain")};s.encodePayload(t,this.supportsBinary,function(t){e.doWrite(t,r)})},n.prototype.uri=function(){var t=this.query||{},e=this.secure?"https":"http",r="";!1!==this.timestampRequests&&(t[this.timestampParam]=c()),this.supportsBinary||t.sid||(t.b64=1),t=i.encode(t),this.port&&("https"===e&&443!==Number(this.port)||"http"===e&&80!==Number(this.port))&&(r=":"+this.port),t.length&&(t="?"+t);var n=this.hostname.indexOf(":")!==-1;return e+"://"+(n?"["+this.hostname+"]":this.hostname)+r+this.path+t}},function(t,e,r){function n(t){this.path=t.path,this.hostname=t.hostname,this.port=t.port,this.secure=t.secure,this.query=t.query,this.timestampParam=t.timestampParam,this.timestampRequests=t.timestampRequests,this.readyState="",this.agent=t.agent||!1,this.socket=t.socket,this.enablesXDR=t.enablesXDR,this.pfx=t.pfx,this.key=t.key,this.passphrase=t.passphrase,this.cert=t.cert,this.ca=t.ca,this.ciphers=t.ciphers,this.rejectUnauthorized=t.rejectUnauthorized,this.forceNode=t.forceNode,this.extraHeaders=t.extraHeaders,this.localAddress=t.localAddress}var o=r(27),i=r(35);t.exports=n,i(n.prototype),n.prototype.onError=function(t,e){var r=new Error(t);return r.type="TransportError",r.description=e,this.emit("error",r),this},n.prototype.open=function(){return"closed"!==this.readyState&&""!==this.readyState||(this.readyState="opening",this.doOpen()),this},n.prototype.close=function(){return"opening"!==this.readyState&&"open"!==this.readyState||(this.doClose(),this.onClose()),this},n.prototype.send=function(t){if("open"!==this.readyState)throw new Error("Transport not open");this.write(t)},n.prototype.onOpen=function(){this.readyState="open",this.writable=!0,this.emit("open")},n.prototype.onData=function(t){var e=o.decodePacket(t,this.socket.binaryType);this.onPacket(e)},n.prototype.onPacket=function(t){this.emit("packet",t)},n.prototype.onClose=function(){this.readyState="closed",this.emit("close")}},function(t,e,r){(function(t){function n(t,r){var n="b"+e.packets[t.type]+t.data.data;return r(n)}function o(t,r,n){if(!r)return e.encodeBase64Packet(t,n);var o=t.data,i=new Uint8Array(o),s=new Uint8Array(1+o.byteLength);s[0]=v[t.type];for(var a=0;a<i.length;a++)s[a+1]=i[a];return n(s.buffer)}function i(t,r,n){if(!r)return e.encodeBase64Packet(t,n);var o=new FileReader;return o.onload=function(){t.data=o.result,e.encodePacket(t,r,!0,n)},o.readAsArrayBuffer(t.data)}function s(t,r,n){if(!r)return e.encodeBase64Packet(t,n);if(m)return i(t,r,n);var o=new Uint8Array(1);o[0]=v[t.type];var s=new k([o.buffer,t.data]);return n(s)}function a(t){try{t=d.decode(t)}catch(t){return!1}return t}function c(t,e,r){for(var n=new Array(t.length),o=l(t.length,r),i=function(t,r,o){e(r,function(e,r){n[t]=r,o(e,n)})},s=0;s<t.length;s++)i(s,t[s],o)}var u,h=r(28),p=r(29),f=r(30),l=r(31),d=r(32);t&&t.ArrayBuffer&&(u=r(33));var y="undefined"!=typeof navigator&&/Android/i.test(navigator.userAgent),g="undefined"!=typeof navigator&&/PhantomJS/i.test(navigator.userAgent),m=y||g;e.protocol=3;var v=e.packets={open:0,close:1,ping:2,pong:3,message:4,upgrade:5,noop:6},b=h(v),w={type:"error",data:"parser error"},k=r(34);e.encodePacket=function(e,r,i,a){"function"==typeof r&&(a=r,r=!1),"function"==typeof i&&(a=i,i=null);var c=void 0===e.data?void 0:e.data.buffer||e.data;if(t.ArrayBuffer&&c instanceof ArrayBuffer)return o(e,r,a);if(k&&c instanceof t.Blob)return s(e,r,a);if(c&&c.base64)return n(e,a);var u=v[e.type];return void 0!==e.data&&(u+=i?d.encode(String(e.data)):String(e.data)),a(""+u)},e.encodeBase64Packet=function(r,n){var o="b"+e.packets[r.type];if(k&&r.data instanceof t.Blob){var i=new FileReader;return i.onload=function(){var t=i.result.split(",")[1];n(o+t)},i.readAsDataURL(r.data)}var s;try{s=String.fromCharCode.apply(null,new Uint8Array(r.data))}catch(t){for(var a=new Uint8Array(r.data),c=new Array(a.length),u=0;u<a.length;u++)c[u]=a[u];s=String.fromCharCode.apply(null,c)}return o+=t.btoa(s),n(o)},e.decodePacket=function(t,r,n){if(void 0===t)return w;if("string"==typeof t){if("b"==t.charAt(0))return e.decodeBase64Packet(t.substr(1),r);if(n&&(t=a(t),t===!1))return w;var o=t.charAt(0);return Number(o)==o&&b[o]?t.length>1?{type:b[o],data:t.substring(1)}:{type:b[o]}:w}var i=new Uint8Array(t),o=i[0],s=f(t,1);return k&&"blob"===r&&(s=new k([s])),{type:b[o],data:s}},e.decodeBase64Packet=function(t,e){var r=b[t.charAt(0)];if(!u)return{type:r,data:{base64:!0,data:t.substr(1)}};var n=u.decode(t.substr(1));return"blob"===e&&k&&(n=new k([n])),{type:r,data:n}},e.encodePayload=function(t,r,n){function o(t){return t.length+":"+t}function i(t,n){e.encodePacket(t,!!s&&r,!0,function(t){n(null,o(t))})}"function"==typeof r&&(n=r,r=null);var s=p(t);return r&&s?k&&!m?e.encodePayloadAsBlob(t,n):e.encodePayloadAsArrayBuffer(t,n):t.length?void c(t,i,function(t,e){return n(e.join(""))}):n("0:")},e.decodePayload=function(t,r,n){if("string"!=typeof t)return e.decodePayloadAsBinary(t,r,n);"function"==typeof r&&(n=r,r=null);var o;if(""==t)return n(w,0,1);for(var i,s,a="",c=0,u=t.length;c<u;c++){var h=t.charAt(c);if(":"!=h)a+=h;else{if(""==a||a!=(i=Number(a)))return n(w,0,1);if(s=t.substr(c+1,i),a!=s.length)return n(w,0,1);if(s.length){if(o=e.decodePacket(s,r,!0),w.type==o.type&&w.data==o.data)return n(w,0,1);var p=n(o,c+i,u);if(!1===p)return}c+=i,a=""}}return""!=a?n(w,0,1):void 0},e.encodePayloadAsArrayBuffer=function(t,r){function n(t,r){e.encodePacket(t,!0,!0,function(t){return r(null,t)})}return t.length?void c(t,n,function(t,e){var n=e.reduce(function(t,e){var r;return r="string"==typeof e?e.length:e.byteLength,t+r.toString().length+r+2},0),o=new Uint8Array(n),i=0;return e.forEach(function(t){var e="string"==typeof t,r=t;if(e){for(var n=new Uint8Array(t.length),s=0;s<t.length;s++)n[s]=t.charCodeAt(s);r=n.buffer}e?o[i++]=0:o[i++]=1;for(var a=r.byteLength.toString(),s=0;s<a.length;s++)o[i++]=parseInt(a[s]);o[i++]=255;for(var n=new Uint8Array(r),s=0;s<n.length;s++)o[i++]=n[s]}),r(o.buffer)}):r(new ArrayBuffer(0))},e.encodePayloadAsBlob=function(t,r){function n(t,r){e.encodePacket(t,!0,!0,function(t){var e=new Uint8Array(1);if(e[0]=1,"string"==typeof t){for(var n=new Uint8Array(t.length),o=0;o<t.length;o++)n[o]=t.charCodeAt(o);t=n.buffer,e[0]=0}for(var i=t instanceof ArrayBuffer?t.byteLength:t.size,s=i.toString(),a=new Uint8Array(s.length+1),o=0;o<s.length;o++)a[o]=parseInt(s[o]);if(a[s.length]=255,k){var c=new k([e.buffer,a.buffer,t]);r(null,c)}})}c(t,n,function(t,e){return r(new k(e))})},e.decodePayloadAsBinary=function(t,r,n){"function"==typeof r&&(n=r,r=null);for(var o=t,i=[],s=!1;o.byteLength>0;){for(var a=new Uint8Array(o),c=0===a[0],u="",h=1;255!=a[h];h++){if(u.length>310){s=!0;break}u+=a[h]}if(s)return n(w,0,1);o=f(o,2+u.length),u=parseInt(u);var p=f(o,0,u);if(c)try{p=String.fromCharCode.apply(null,new Uint8Array(p))}catch(t){var l=new Uint8Array(p);p="";for(var h=0;h<l.length;h++)p+=String.fromCharCode(l[h])}i.push(p),o=f(o,u)}var d=i.length;i.forEach(function(t,o){n(e.decodePacket(t,r,!0),o,d)})}}).call(e,function(){return this}())},function(t,e){t.exports=Object.keys||function(t){var e=[],r=Object.prototype.hasOwnProperty;for(var n in t)r.call(t,n)&&e.push(n);return e}},function(t,e,r){(function(e){function n(t){function r(t){if(!t)return!1;if(e.Buffer&&e.Buffer.isBuffer&&e.Buffer.isBuffer(t)||e.ArrayBuffer&&t instanceof ArrayBuffer||e.Blob&&t instanceof Blob||e.File&&t instanceof File)return!0;if(o(t)){for(var n=0;n<t.length;n++)if(r(t[n]))return!0}else if(t&&"object"==typeof t){t.toJSON&&"function"==typeof t.toJSON&&(t=t.toJSON());for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)&&r(t[i]))return!0}return!1}return r(t)}var o=r(15);t.exports=n}).call(e,function(){return this}())},function(t,e){t.exports=function(t,e,r){var n=t.byteLength;if(e=e||0,r=r||n,t.slice)return t.slice(e,r);if(e<0&&(e+=n),r<0&&(r+=n),r>n&&(r=n),e>=n||e>=r||0===n)return new ArrayBuffer(0);for(var o=new Uint8Array(t),i=new Uint8Array(r-e),s=e,a=0;s<r;s++,a++)i[a]=o[s];return i.buffer}},function(t,e){function r(t,e,r){function o(t,n){if(o.count<=0)throw new Error("after called too many times");--o.count,t?(i=!0,e(t),e=r):0!==o.count||i||e(null,n)}var i=!1;return r=r||n,o.count=t,0===t?e():o}function n(){}t.exports=r},function(t,e,r){var n;(function(t,o){!function(i){function s(t){for(var e,r,n=[],o=0,i=t.length;o<i;)e=t.charCodeAt(o++),e>=55296&&e<=56319&&o<i?(r=t.charCodeAt(o++),56320==(64512&r)?n.push(((1023&e)<<10)+(1023&r)+65536):(n.push(e),o--)):n.push(e);return n}function a(t){for(var e,r=t.length,n=-1,o="";++n<r;)e=t[n],e>65535&&(e-=65536,o+=b(e>>>10&1023|55296),e=56320|1023&e),o+=b(e);return o}function c(t,e){return b(t>>e&63|128)}function u(t){if(0==(4294967168&t))return b(t);var e="";return 0==(4294965248&t)?e=b(t>>6&31|192):0==(4294901760&t)?(e=b(t>>12&15|224),e+=c(t,6)):0==(4292870144&t)&&(e=b(t>>18&7|240),e+=c(t,12),e+=c(t,6)),e+=b(63&t|128)}function h(t){for(var e,r=s(t),n=r.length,o=-1,i="";++o<n;)e=r[o],i+=u(e);return i}function p(){if(v>=m)throw Error("Invalid byte index");var t=255&g[v];if(v++,128==(192&t))return 63&t;throw Error("Invalid continuation byte")}function f(){var t,e,r,n,o;if(v>m)throw Error("Invalid byte index");if(v==m)return!1;if(t=255&g[v],v++,0==(128&t))return t;if(192==(224&t)){var e=p();if(o=(31&t)<<6|e,o>=128)return o;throw Error("Invalid continuation byte")}if(224==(240&t)){if(e=p(),r=p(),o=(15&t)<<12|e<<6|r,o>=2048)return o;throw Error("Invalid continuation byte")}if(240==(248&t)&&(e=p(),r=p(),n=p(),o=(15&t)<<18|e<<12|r<<6|n,o>=65536&&o<=1114111))return o;throw Error("Invalid WTF-8 detected")}function l(t){g=s(t),m=g.length,v=0;for(var e,r=[];(e=f())!==!1;)r.push(e);return a(r)}var d="object"==typeof e&&e,y=("object"==typeof t&&t&&t.exports==d&&t,"object"==typeof o&&o);y.global!==y&&y.window!==y||(i=y);var g,m,v,b=String.fromCharCode,w={version:"1.0.0",encode:h,decode:l};n=function(){return w}.call(e,r,e,t),!(void 0!==n&&(t.exports=n))}(this)}).call(e,r(12)(t),function(){return this}())},function(t,e){!function(){"use strict";for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r=new Uint8Array(256),n=0;n<t.length;n++)r[t.charCodeAt(n)]=n;e.encode=function(e){var r,n=new Uint8Array(e),o=n.length,i="";for(r=0;r<o;r+=3)i+=t[n[r]>>2],i+=t[(3&n[r])<<4|n[r+1]>>4],i+=t[(15&n[r+1])<<2|n[r+2]>>6],i+=t[63&n[r+2]];return o%3===2?i=i.substring(0,i.length-1)+"=":o%3===1&&(i=i.substring(0,i.length-2)+"=="),i},e.decode=function(t){var e,n,o,i,s,a=.75*t.length,c=t.length,u=0;"="===t[t.length-1]&&(a--,"="===t[t.length-2]&&a--);var h=new ArrayBuffer(a),p=new Uint8Array(h);for(e=0;e<c;e+=4)n=r[t.charCodeAt(e)],o=r[t.charCodeAt(e+1)],i=r[t.charCodeAt(e+2)],s=r[t.charCodeAt(e+3)],p[u++]=n<<2|o>>4,p[u++]=(15&o)<<4|i>>2,p[u++]=(3&i)<<6|63&s;return h}}()},function(t,e){(function(e){function r(t){for(var e=0;e<t.length;e++){var r=t[e];if(r.buffer instanceof ArrayBuffer){var n=r.buffer;if(r.byteLength!==n.byteLength){var o=new Uint8Array(r.byteLength);o.set(new Uint8Array(n,r.byteOffset,r.byteLength)),n=o.buffer}t[e]=n}}}function n(t,e){e=e||{};var n=new i;r(t);for(var o=0;o<t.length;o++)n.append(t[o]);return e.type?n.getBlob(e.type):n.getBlob()}function o(t,e){return r(t),new Blob(t,e||{})}var i=e.BlobBuilder||e.WebKitBlobBuilder||e.MSBlobBuilder||e.MozBlobBuilder,s=function(){try{var t=new Blob(["hi"]);return 2===t.size}catch(t){return!1}}(),a=s&&function(){try{var t=new Blob([new Uint8Array([1,2])]);return 2===t.size}catch(t){return!1}}(),c=i&&i.prototype.append&&i.prototype.getBlob;t.exports=function(){return s?a?e.Blob:o:c?n:void 0}()}).call(e,function(){return this}())},function(t,e,r){function n(t){if(t)return o(t)}function o(t){for(var e in n.prototype)t[e]=n.prototype[e];return t}t.exports=n,n.prototype.on=n.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this},n.prototype.once=function(t,e){function r(){this.off(t,r),e.apply(this,arguments)}return r.fn=e,this.on(t,r),this},n.prototype.off=n.prototype.removeListener=n.prototype.removeAllListeners=n.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var r=this._callbacks["$"+t];if(!r)return this;if(1==arguments.length)return delete this._callbacks["$"+t],this;for(var n,o=0;o<r.length;o++)if(n=r[o],n===e||n.fn===e){r.splice(o,1);break}return this},n.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),r=this._callbacks["$"+t];if(r){r=r.slice(0);for(var n=0,o=r.length;n<o;++n)r[n].apply(this,e)}return this},n.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]},n.prototype.hasListeners=function(t){return!!this.listeners(t).length}},function(t,e){e.encode=function(t){var e="";for(var r in t)t.hasOwnProperty(r)&&(e.length&&(e+="&"),e+=encodeURIComponent(r)+"="+encodeURIComponent(t[r]));return e},e.decode=function(t){for(var e={},r=t.split("&"),n=0,o=r.length;n<o;n++){var i=r[n].split("=");e[decodeURIComponent(i[0])]=decodeURIComponent(i[1])}return e}},function(t,e){t.exports=function(t,e){var r=function(){};r.prototype=e.prototype,t.prototype=new r,t.prototype.constructor=t}},function(t,e){"use strict";function r(t){var e="";do e=s[t%a]+e,t=Math.floor(t/a);while(t>0);return e}function n(t){var e=0;for(h=0;h<t.length;h++)e=e*a+c[t.charAt(h)];return e}function o(){var t=r(+new Date);return t!==i?(u=0,i=t):t+"."+r(u++)}for(var i,s="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),a=64,c={},u=0,h=0;h<a;h++)c[s[h]]=h;o.encode=r,o.decode=n,t.exports=o},function(t,e,r){(function(e){function n(){}function o(t){i.call(this,t),this.query=this.query||{},a||(e.___eio||(e.___eio=[]),a=e.___eio),this.index=a.length;var r=this;a.push(function(t){r.onData(t)}),this.query.j=this.index,e.document&&e.addEventListener&&e.addEventListener("beforeunload",function(){r.script&&(r.script.onerror=n)},!1)}var i=r(25),s=r(37);t.exports=o;var a,c=/\n/g,u=/\\n/g;s(o,i),o.prototype.supportsBinary=!1,o.prototype.doClose=function(){this.script&&(this.script.parentNode.removeChild(this.script),this.script=null),this.form&&(this.form.parentNode.removeChild(this.form),this.form=null,this.iframe=null),i.prototype.doClose.call(this)},o.prototype.doPoll=function(){var t=this,e=document.createElement("script");this.script&&(this.script.parentNode.removeChild(this.script),this.script=null),e.async=!0,e.src=this.uri(),e.onerror=function(e){t.onError("jsonp poll error",e)};var r=document.getElementsByTagName("script")[0];r?r.parentNode.insertBefore(e,r):(document.head||document.body).appendChild(e),this.script=e;var n="undefined"!=typeof navigator&&/gecko/i.test(navigator.userAgent);n&&setTimeout(function(){var t=document.createElement("iframe");document.body.appendChild(t),document.body.removeChild(t)},100)},o.prototype.doWrite=function(t,e){function r(){n(),e()}function n(){if(o.iframe)try{o.form.removeChild(o.iframe)}catch(t){o.onError("jsonp polling iframe removal error",t)}try{var t='<iframe src="javascript:0" name="'+o.iframeId+'">';i=document.createElement(t)}catch(t){i=document.createElement("iframe"),i.name=o.iframeId,i.src="javascript:0"}i.id=o.iframeId,o.form.appendChild(i),o.iframe=i}var o=this;if(!this.form){var i,s=document.createElement("form"),a=document.createElement("textarea"),h=this.iframeId="eio_iframe_"+this.index;s.className="socketio",s.style.position="absolute",s.style.top="-1000px",s.style.left="-1000px",s.target=h,s.method="POST",s.setAttribute("accept-charset","utf-8"),a.name="d",s.appendChild(a),document.body.appendChild(s),this.form=s,this.area=a}this.form.action=this.uri(),n(),t=t.replace(u,"\\\n"),this.area.value=t.replace(c,"\\n");try{this.form.submit()}catch(t){}this.iframe.attachEvent?this.iframe.onreadystatechange=function(){"complete"===o.iframe.readyState&&r();
}:this.iframe.onload=r}}).call(e,function(){return this}())},function(t,e,r){(function(e){function n(t){var e=t&&t.forceBase64;e&&(this.supportsBinary=!1),this.perMessageDeflate=t.perMessageDeflate,this.usingBrowserWebSocket=p&&!t.forceNode,this.usingBrowserWebSocket||(f=o),i.call(this,t)}var o,i=r(26),s=r(27),a=r(36),c=r(37),u=r(38),h=r(3)("engine.io-client:websocket"),p=e.WebSocket||e.MozWebSocket;if("undefined"==typeof window)try{o=r(41)}catch(t){}var f=p;f||"undefined"!=typeof window||(f=o),t.exports=n,c(n,i),n.prototype.name="websocket",n.prototype.supportsBinary=!0,n.prototype.doOpen=function(){if(this.check()){var t=this.uri(),e=void 0,r={agent:this.agent,perMessageDeflate:this.perMessageDeflate};r.pfx=this.pfx,r.key=this.key,r.passphrase=this.passphrase,r.cert=this.cert,r.ca=this.ca,r.ciphers=this.ciphers,r.rejectUnauthorized=this.rejectUnauthorized,this.extraHeaders&&(r.headers=this.extraHeaders),this.localAddress&&(r.localAddress=this.localAddress);try{this.ws=this.usingBrowserWebSocket?new f(t):new f(t,e,r)}catch(t){return this.emit("error",t)}void 0===this.ws.binaryType&&(this.supportsBinary=!1),this.ws.supports&&this.ws.supports.binary?(this.supportsBinary=!0,this.ws.binaryType="nodebuffer"):this.ws.binaryType="arraybuffer",this.addEventListeners()}},n.prototype.addEventListeners=function(){var t=this;this.ws.onopen=function(){t.onOpen()},this.ws.onclose=function(){t.onClose()},this.ws.onmessage=function(e){t.onData(e.data)},this.ws.onerror=function(e){t.onError("websocket error",e)}},n.prototype.write=function(t){function r(){n.emit("flush"),setTimeout(function(){n.writable=!0,n.emit("drain")},0)}var n=this;this.writable=!1;for(var o=t.length,i=0,a=o;i<a;i++)!function(t){s.encodePacket(t,n.supportsBinary,function(i){if(!n.usingBrowserWebSocket){var s={};if(t.options&&(s.compress=t.options.compress),n.perMessageDeflate){var a="string"==typeof i?e.Buffer.byteLength(i):i.length;a<n.perMessageDeflate.threshold&&(s.compress=!1)}}try{n.usingBrowserWebSocket?n.ws.send(i):n.ws.send(i,s)}catch(t){h("websocket closed before onclose event")}--o||r()})}(t[i])},n.prototype.onClose=function(){i.prototype.onClose.call(this)},n.prototype.doClose=function(){"undefined"!=typeof this.ws&&this.ws.close()},n.prototype.uri=function(){var t=this.query||{},e=this.secure?"wss":"ws",r="";this.port&&("wss"===e&&443!==Number(this.port)||"ws"===e&&80!==Number(this.port))&&(r=":"+this.port),this.timestampRequests&&(t[this.timestampParam]=u()),this.supportsBinary||(t.b64=1),t=a.encode(t),t.length&&(t="?"+t);var n=this.hostname.indexOf(":")!==-1;return e+"://"+(n?"["+this.hostname+"]":this.hostname)+r+this.path+t},n.prototype.check=function(){return!(!f||"__initialize"in f&&this.name===n.prototype.name)}}).call(e,function(){return this}())},function(t,e){},function(t,e){var r=[].indexOf;t.exports=function(t,e){if(r)return t.indexOf(e);for(var n=0;n<t.length;++n)if(t[n]===e)return n;return-1}},function(t,e){(function(e){var r=/^[\],:{}\s]*$/,n=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,o=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,i=/(?:^|:|,)(?:\s*\[)+/g,s=/^\s+/,a=/\s+$/;t.exports=function(t){return"string"==typeof t&&t?(t=t.replace(s,"").replace(a,""),e.JSON&&JSON.parse?JSON.parse(t):r.test(t.replace(n,"@").replace(o,"]").replace(i,""))?new Function("return "+t)():void 0):null}}).call(e,function(){return this}())},function(t,e,r){"use strict";function n(t,e,r){this.io=t,this.nsp=e,this.json=this,this.ids=0,this.acks={},this.receiveBuffer=[],this.sendBuffer=[],this.connected=!1,this.disconnected=!0,r&&r.query&&(this.query=r.query),this.io.autoConnect&&this.open()}var o=r(7),i=r(35),s=r(45),a=r(46),c=r(47),u=r(3)("socket.io-client:socket"),h=r(29);t.exports=e=n;var p={connect:1,connect_error:1,connect_timeout:1,connecting:1,disconnect:1,error:1,reconnect:1,reconnect_attempt:1,reconnect_failed:1,reconnect_error:1,reconnecting:1,ping:1,pong:1},f=i.prototype.emit;i(n.prototype),n.prototype.subEvents=function(){if(!this.subs){var t=this.io;this.subs=[a(t,"open",c(this,"onopen")),a(t,"packet",c(this,"onpacket")),a(t,"close",c(this,"onclose"))]}},n.prototype.open=n.prototype.connect=function(){return this.connected?this:(this.subEvents(),this.io.open(),"open"===this.io.readyState&&this.onopen(),this.emit("connecting"),this)},n.prototype.send=function(){var t=s(arguments);return t.unshift("message"),this.emit.apply(this,t),this},n.prototype.emit=function(t){if(p.hasOwnProperty(t))return f.apply(this,arguments),this;var e=s(arguments),r=o.EVENT;h(e)&&(r=o.BINARY_EVENT);var n={type:r,data:e};return n.options={},n.options.compress=!this.flags||!1!==this.flags.compress,"function"==typeof e[e.length-1]&&(u("emitting packet with ack id %d",this.ids),this.acks[this.ids]=e.pop(),n.id=this.ids++),this.connected?this.packet(n):this.sendBuffer.push(n),delete this.flags,this},n.prototype.packet=function(t){t.nsp=this.nsp,this.io.packet(t)},n.prototype.onopen=function(){u("transport is open - connecting"),"/"!==this.nsp&&(this.query?this.packet({type:o.CONNECT,query:this.query}):this.packet({type:o.CONNECT}))},n.prototype.onclose=function(t){u("close (%s)",t),this.connected=!1,this.disconnected=!0,delete this.id,this.emit("disconnect",t)},n.prototype.onpacket=function(t){if(t.nsp===this.nsp)switch(t.type){case o.CONNECT:this.onconnect();break;case o.EVENT:this.onevent(t);break;case o.BINARY_EVENT:this.onevent(t);break;case o.ACK:this.onack(t);break;case o.BINARY_ACK:this.onack(t);break;case o.DISCONNECT:this.ondisconnect();break;case o.ERROR:this.emit("error",t.data)}},n.prototype.onevent=function(t){var e=t.data||[];u("emitting event %j",e),null!=t.id&&(u("attaching ack callback to event"),e.push(this.ack(t.id))),this.connected?f.apply(this,e):this.receiveBuffer.push(e)},n.prototype.ack=function(t){var e=this,r=!1;return function(){if(!r){r=!0;var n=s(arguments);u("sending ack %j",n);var i=h(n)?o.BINARY_ACK:o.ACK;e.packet({type:i,id:t,data:n})}}},n.prototype.onack=function(t){var e=this.acks[t.id];"function"==typeof e?(u("calling ack %s with %j",t.id,t.data),e.apply(this,t.data),delete this.acks[t.id]):u("bad ack %s",t.id)},n.prototype.onconnect=function(){this.connected=!0,this.disconnected=!1,this.emit("connect"),this.emitBuffered()},n.prototype.emitBuffered=function(){var t;for(t=0;t<this.receiveBuffer.length;t++)f.apply(this,this.receiveBuffer[t]);for(this.receiveBuffer=[],t=0;t<this.sendBuffer.length;t++)this.packet(this.sendBuffer[t]);this.sendBuffer=[]},n.prototype.ondisconnect=function(){u("server disconnect (%s)",this.nsp),this.destroy(),this.onclose("io server disconnect")},n.prototype.destroy=function(){if(this.subs){for(var t=0;t<this.subs.length;t++)this.subs[t].destroy();this.subs=null}this.io.destroy(this)},n.prototype.close=n.prototype.disconnect=function(){return this.connected&&(u("performing disconnect (%s)",this.nsp),this.packet({type:o.DISCONNECT})),this.destroy(),this.connected&&this.onclose("io client disconnect"),this},n.prototype.compress=function(t){return this.flags=this.flags||{},this.flags.compress=t,this}},function(t,e){function r(t,e){var r=[];e=e||0;for(var n=e||0;n<t.length;n++)r[n-e]=t[n];return r}t.exports=r},function(t,e){"use strict";function r(t,e,r){return t.on(e,r),{destroy:function(){t.removeListener(e,r)}}}t.exports=r},function(t,e){var r=[].slice;t.exports=function(t,e){if("string"==typeof e&&(e=t[e]),"function"!=typeof e)throw new Error("bind() requires a function");var n=r.call(arguments,2);return function(){return e.apply(t,n.concat(r.call(arguments)))}}},function(t,e){function r(t){t=t||{},this.ms=t.min||100,this.max=t.max||1e4,this.factor=t.factor||2,this.jitter=t.jitter>0&&t.jitter<=1?t.jitter:0,this.attempts=0}t.exports=r,r.prototype.duration=function(){var t=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),r=Math.floor(e*this.jitter*t);t=0==(1&Math.floor(10*e))?t-r:t+r}return 0|Math.min(t,this.max)},r.prototype.reset=function(){this.attempts=0},r.prototype.setMin=function(t){this.ms=t},r.prototype.setMax=function(t){this.max=t},r.prototype.setJitter=function(t){this.jitter=t}}])});
alight.component('bot-flow-root', function (scope, element, env) {
	    return { 
	    	templateUrl: "app/app.component.html",
	    	onStart: function() {

	    			scope.initVars = function() {  //vars
	    				scope.query = "";
				    	scope.msgs = [];
				    	scope.Helper = __c_b_app.service.Helper;
				    	scope.test_bot = (document.querySelectorAll("[" + __c_b_app.env.vars.bot_id_selecter_attr + "]")["0"].attributes.getNamedItem('test-bot'));
				    	scope.bot_socket = io.connect(__c_b_app.env.Api.urls.socket_connect);
				    	scope.client_id = scope.Helper.decodeId(document.querySelectorAll("[" + __c_b_app.env.vars.bot_id_selecter_attr + "]")["0"].attributes.getNamedItem(__c_b_app.env.vars.bot_id_selecter_attr).value);
	    				scope.uuid = (scope.test_bot ? ('	_test_' + scope.Helper.getCookie(__c_b_app.env.cookie.uuid_key)) : (scope.Helper.getCookie(__c_b_app.env.cookie.uuid_key)));
	    				scope.is_typing = false;
	    				scope.suggestion = null;
	    				scope.is_scroll = true;
	    				scope.bot_scroller = document.getElementById("_c_b_app_scroller_id");
	    				scope.is_scroll = true;
             			scope.more_loading = false;
             			scope.current_page = 1;
             			scope.page_end = false;
             			scope.is_bot_open = false;
             			scope.is_bot_init = false;
             			scope.bot_name = "Help Assistance";
	    			}

	    			//script to handle ui on incoming and outgoing msgs
	    			scope.onMsgPush = function() {
		    			env.watch("msgs", function(New, old) {

		    				if(scope.msgs.length>0) {
		    					if(scope.msgs[scope.msgs.length-1].by == 'me') { //user request
		    						scope.typing.show();
		    						scope.emitQuery(scope.msgs[scope.msgs.length-1].msg)
		    						scope.playSound("user")
		    					} else { // bot response
		    						scope.typing.hide();
		    						scope.playSound("bot")
		    					}
		    				}

		    				setTimeout(function() {
		    					scope.scrollToBottom();
		    					env.scan();
		    				}, 10);
		    			}, true)
	    			}

	    			scope.emitQuery = function(msg) {  //send query to server
		              if(scope.msgFrom != "user") return;
		               console.log("query is requesting by user..." + msg)
		               var data = { c_id:scope.client_id, uuid: scope.uuid,  query: msg };
		               scope.bot_socket.emit('modules_req', data)
		            }

		            scope.listenQueryResponse = function() {
		                 scope.bot_socket.on('modules_res', function(data) {
		                  console.log(data)
		                  scope.pushMsgs(data.module.msg);
		                  scope.performSuggestion(data.module.shortcut, data.module.shortcutData)
		                  //scope.$apply();
		                  env.scan();
		                 })
		            }

		            scope.performSuggestion = function(type, data) {
		            	if(!type || !data) return;
		            	scope.suggestion = {};
		            	scope.suggestion['type'] = type;
		            	scope.suggestion['data'] = data;

		            	scope.scrollToBottom();
		            }

		            scope.onSuggestionSelect = function(item) {
		            	scope.msgFrom = "user";
                  		scope.suggestion = false;
                  		scope.pushMsgs(item, "me");
                  		env.scan();
		            }

	    			//fired on user-input
				    scope.sendQuery = function(ev) {
				    	scope.msgFrom = "user";
				    	scope.suggestion = false;
				    	scope.pushMsgs(scope.query, "me")
				    	scope.query = "";
				    }

				    scope.initBotSocket = function() {
			            var data = { c_id: scope.client_id, uuid: scope.uuid };
			            scope.bot_socket.emit('init', data);
			        }


			        scope.pushMsgs = function(msg, by, time, reverse) {
			        	//valid params
			        	if(!msg) return;
			        	by = ( by ? by : 'bot' );
			        	time = ( time ? time : new Date());
			        	time = scope.formatDate(time);

			        	if(typeof(msg) == 'object') {  //array ? then add single items by loop
	                        for(var i=0;i<msg.length;i++) {
	                          if(reverse == true) {
	                            console.log("reverse adding")
	                            scope.msgs.splice(0, 0, {by:by,msg:msg[i], timestamp:time});
	                            scope.msgs.join();
	                          }
	                          else{
	                            scope.msgs.push({by:by,msg:msg[i], timestamp:time});
	                          }
	                          //$scope.$apply();
	                      }
	                    } else {
	                        if(reverse == true) {
	                            console.log("reverse adding")
	                            scope.msgs.splice(0, 0, {by:by,msg:msg, timestamp:time});
	                            scope.msgs.join();
	                          }
	                          else{
	                            scope.msgs.push({by:by,msg:msg, timestamp:time});
	                          }
	                	}
			        }

			        scope.formatDate = function(date) {
			        	var date = new Date(date);
			        	var date_ = date.getDate();
			        	var month_names_short = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
			        	var month_ = month_names_short[date.getMonth()];
			        	var hours_ = date.getHours();
			        	var minute_ = date.getMinutes();
			        	return (date_ + " " + month_ + " " + hours_ + ":" + minute_);
			        }


			        scope.connectBot = function() {
			        	console.log(scope.uuid)
			        	if(scope.uuid) { //already user initiated with bot and resume with last session

			        		__c_b_app.http.get(__c_b_app.env.Api.urls.get_msg + scope.uuid + "/" + __c_b_app.env.vars.pagination.limit + "/1", function(res) {
						    	scope.initBotSocket();
						    	scope.listenQueryResponse(); //real time sockets responce listen for queries
						   		
						   		var arr = (JSON.parse(res)).reverse();
				                   for(var i=0;i<arr.length;i++) {  //push old session msgs
				                      scope.pushMsgs(arr[i].msg, arr[i].by, arr[i].timestamp);
				                   }

				                setTimeout(function() {
				                	scope.scrollToBottom();
				                	scope.typing.hide();
				                }, 10);

				                scope.is_bot_init = true;

				                env.scan();	

						    })
			        		

			        	} else {  //fresh connect by the user

			        		scope.uuid = scope.Helper.generateUUID();
			        		scope.Helper.setCookie(__c_b_app.env.cookie.uuid_key, scope.uuid);
                 			scope.initBotSocket();
                 			scope.listenQueryResponse(); //real time sockets responce listen for queries
                 			scope.is_bot_init = true;
			        	}
			        	
			        }


				    scope.init = function() {
				    	scope.initVars();
				    	scope.setupBot();
				    	scope.onMsgPush();
				    	scope.connectBot();
				    	scope.fetchMsgsOnVertScroll();

				    }

				    scope.setupBot = function() {
				    	scope.bot_socket.on("setup", function(data) {
				    		console.log(data)
				            scope.Helper.setUpBotStyle(data.style);
				            scope.bot_name = data.bot_name;
				        })
				    }


				    //ui events
				    scope.typing = {
				    	show: function() {
				    		scope.is_typing = true;
				    	},
				    	hide: function() {
				    		scope.is_typing = false;
				    	}
				    }

				    scope.scrollToBottom = function() {
			          if(scope.is_scroll) {
			            scope.bot_scroller.scrollTop = (scope.bot_scroller.scrollHeight + 20);
			          } else {
			            scope.is_scroll = true;
			          } 
			        } 

			        scope.fetchMsgsOnVertScroll = function() { //real-time scroll event to fetch more msgs on scroll to top
			        	
			        	scope.bot_scroller.onscroll = function() {
        					if(scope.page_end) return;
					        if(scope.bot_scroller.scrollTop == 0) {
					          if(scope.more_loading == true) return;
					          scope.more_loading = true;
					          var height = scope.bot_scroller.scrollHeight;
					          env.scan();
					          __c_b_app.http.get(__c_b_app.env.Api.urls.get_msg + scope.uuid + "/" + __c_b_app.env.vars.pagination.limit + "/" + ( ++scope.current_page ), function(res) {
					               var arr = (JSON.parse(res));
					               if(arr.length == 0) {
					               		scope.page_end =  true;
					               		scope.more_loading = false;
					               		env.scan();
					               }
					                   for(var i=0;i<arr.length;i++) {
					                      scope.is_scroll = false;
					                      scope.pushMsgs(arr[i].msg, arr[i].by, arr[i].timestamp, true);
					                   }
					               setTimeout(function(){
					               	scope.bot_scroller.scrollTop = (scope.bot_scroller.scrollHeight-height); 
					               	scope.typing.hide();
					               	env.scan()
					               }, 0); 
					               scope.more_loading = false;
					        	   env.scan();	
					          });

					        }

					      }
			        }

			        //other events'
			       scope.playSound = function (who) {
			              if(who == "user") {
			                var audio = new Audio(__c_b_app.env.Api.urls.sounds.bot);
			                 audio.play();
			              } else {
			                var audio = new Audio(__c_b_app.env.Api.urls.sounds.user);
			                audio.play();
			              }
			       }


				    

					scope.init();
	    	}
	    };
});
alight.component('c-bot-mgs', function (scope, element, env) {
	    return { 
	    	templateUrl: "app/msgs/msgs.component.html",
	    	onStart: function() {
	    			scope.index = scope.index;
	    			scope.data = scope.data;
				    scope.name = scope.in;
				    scope.click = function() {
				    	scope.name = "Shannubhag"
				    }
	    	}
	    };
});
alight.component('c-bot-loader', function (scope, element, env) {
	    return { 
	    	templateUrl: "app/loader/loader.component.html",
	    	onStart: function() {}
	    };
});
alight.component('c-bot-sug', function (scope, element, env) {
	    return { 
	    	templateUrl: "app/suggestion/suggestion.component.html",
	    	onStart: function() {
	    			scope.data = scope.data;
	    			scope.change = scope.change;

	    			scope.onSelect = function(item) {
	    				env.parentChangeDetector.scope.onSuggestionSelect(item);
	    			}
	    	}
	    };
});
alight.component('c-bot-typing', function (scope, element, env) {
	    return { 
	    	templateUrl: "app/typing/typing.component.html",
	    	onStart: function() {
	    	}
	    };
});
//types
var __c_b_app_Controller = function(name, controller) {
	this.name = name;
	this.controller = controller;
}

//api services
var __c_b_app_Api_Service = function() {
	this.host = ( (location.hostname == '127.0.0.1' || location.hostname == 'localhost') ?  "http://127.0.0.1:3000/" : "https://botflow.herokuapp.com/");
    this.urls = {
    	socket_connect: this.host + "sockets/bot",
    	get_msg: this.host + "api/bot/msgs/",
    	sounds: {
    		bot: this.host + "bot/sound/bot.mp3",
    		user: this.host + "bot/sound/user.mp3"
    	}
 	}
}




var __c_b_app = new function() {

	//env
	this.env = {
		host: "http://localhost:3000",
		vars: {
			bot_id_selecter_attr: "chat-bot-id",
			pagination: {
				limit: 20
			}
		},
		bot_id: null,
		cookie: {
			uuid_key:"__chat__bot__uuid__"
		},
		Api: new __c_b_app_Api_Service(),
		ref: {
			root: {
				ele: {
					name: "bot-flow-root",
					elm: null
				},
				style: {
					name: "bot-flow-style-root",
					elm: null
				}
			}	
		}
	}

	//roootScope
	this.rootScope = {
		name: "Bot"
	}

	//list of controller array of type <__c_b_app_Controller>
	this.controllers = [];
	this.run = null;
	this.service = {};

	//run function will called at first time
	this.runApp = function(_function) {
		this.run = _function;
	}

	this.addService = function(name, _service) {
		this.service[name] = new _service();
	}

	//add controller function
	this.addController = function(name, _function) {
		this.controllers.push(new __c_b_app_Controller(name, _function));
	}


	this.runControllers = function() {  //run all the controllr in array
		for(var i=0; i<this.controllers.length; i++) {
			this.controllers[i].controller();
		}
	}




	this.bootApp = function() {
		this.run();
		this.runControllers();
	}
	



}

rivets.formatters["args"] = function (fn) {
        var args = Array.prototype.slice.call(arguments, 1);
        return function () {
            return fn.apply(null, args);

        };
    };
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
function __c_b_envHttpGet(url, success, error) {
	  var xhr = new XMLHttpRequest();
	  xhr.open("GET", url);
	  xhr.onload = function () {
	    if(success) success(xhr.response, xhr);
	  };
	  xhr.onerror = function () {
	    if(error) error(xhr.response);
	  };
	  xhr.send();
}

function __c_b_envHttpPost(url, success, error) {
	  var xhr = new XMLHttpRequest();
	  xhr.open(method, url);
	  xhr.onload = function () {
	    success(xhr.response);
	  };
	  xhr.onerror = function () {
	    error(xhr.response);
	  };
	  xhr.send();
}



__c_b_app.http = {
	get: __c_b_envHttpGet,
	post: __c_b_envHttpPost
}

function __c_b_envTemplateAttachByUrl(url, el, callback) {
	__c_b_app.http.get(url, function(res) {
		el.innerHTML = res;
		if(callback) callback();
	}, function(err) {
		console.log(err);
	})
}

__c_b_app.template = {
	attachByUrl: __c_b_envTemplateAttachByUrl
}


function createRootEle(callback) {
	var rootEle = document.createElement(__c_b_app.env.ref.root.ele.name);
	//rootEle.setAttribute(__c_b_app.env.ref.root.ele.name, "");
	rootEle.id = __c_b_app.env.ref.root.ele.name;
	var a = document.body.appendChild(rootEle);
	__c_b_app.env.ref.root.ele.elm = document.querySelectorAll("[" + __c_b_app.env.ref.root.ele.name + "]")[0];
	var intervalId = null;
	intervalID = setTimeout( function() {
		if(document.querySelectorAll("bot-flow-root")[0]) {
			callback();
			clearInterval(intervalId);
		}
	}, 1)
	setTimeout(function() { clearInterval(intervalId); }, 15000);
}

function addRootStyles() {
	var style = document.createElement('style');
	style.type = 'text/css';
	style.setAttribute(__c_b_app.env.ref.root.style.name, "");
	document.getElementsByTagName('head')[0].appendChild(style);
	__c_b_app.env.ref.root.style.elm = document.querySelectorAll("[" + __c_b_app.env.ref.root.style.name + "]")[0];
	__c_b_app.template.attachByUrl("style/style.css", __c_b_app.env.ref.root.style.elm)
}


function initApp() {
	__c_b_app.bootApp();
}


__c_b_app.runApp(function() {
	// rivets.bind(document.querySelector("#" + __c_b_app.env.ref.root.ele.name), __c_b_app.rootScope);
	var tag = document.querySelector("#" + __c_b_app.env.ref.root.ele.name);  // take the tag
	alight.bootstrap([tag]);  // bind to DOM
});




function bootApp() {
	addRootStyles();
	createRootEle(function() {
		initApp();
	});
}

window.onload = bootApp();

// function botCtrl(attributes) {
//     console.log("counterViewModel called")
//     this.botView = this;
//     this.data = {
//         title: "vinnnnn"
//     };
//     this.a = "vinay";
//     this.text = "vvv";
//     this.increment = function (event, scope) {
//         // Rivets renames kebab-case to camelCase
//         scope.data.counterAttr.value++;
//     };
//     this.decrement = function (event, scope) {
//         scope.data.counterAttr.value--;
//     };
//     this.toggleColor = function (event, scope) {
//         var old = scope.data.colorAttr.value;
        
//         if (old === 'red') scope.data.colorAttr.value = 'blue';
//         else scope.data.colorAttr.value = 'red';
//     };
//     this.reset = function(p, s, a) {
//         console.log("called", p, s, a)
//         a.text = p;
//         console.log(s.a)
//     }
//     this.isD = function() {
//         return (this.text == 'viny')
//     }
// }





// rivets.components['bot-flow-root'] = {
//     template: function() {
//         return `<h1>{ botView.text }</h1>
//         {a}
//                 <input rv-value="botView.text">
//                 <button rv-show="a" rv-on-click="botView.reset | args 'viny' 'ss' botView">Remove</button>
//                 <h1 rv-if="botView.text == 'viny'">Vinay</h1>
//                 `;
//     },
//     initialize: function(el, attributes) {
//         return new botCtrl;
//     }
// };


