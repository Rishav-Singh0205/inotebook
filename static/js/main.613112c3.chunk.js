(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,r){e.exports=r(34)},23:function(e,t,r){},25:function(e,t,r){},34:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(12),i=r.n(o),c=(r(23),r(1)),l=(r(25),r(35)),s=function(){var e=Object(l.a)(),t=Object(l.b)();return a.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},a.a.createElement("div",{className:"container-fluid"},a.a.createElement("a",{className:"navbar-brand",href:"/"},"iNotebook"),a.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},a.a.createElement("span",{className:"navbar-toggler-icon"})),a.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},a.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},a.a.createElement("li",{className:"nav-item"},a.a.createElement("a",{className:"nav-link ".concat("/"===t.pathname?"active":""),"aria-current":"page",href:"/"},"Home")),a.a.createElement("li",{className:"nav-item"},a.a.createElement("a",{className:"nav-link ".concat("/about"===t.pathname?"active":""),href:"/about"},"About"))),localStorage.getItem("token")?a.a.createElement("button",{onClick:function(){localStorage.removeItem("token"),e.push("/login")},className:"btn btn-primary"},"Logout"):a.a.createElement("form",{className:"d-flex"},a.a.createElement("a",{className:"btn btn-primary mx-1",href:"/login",role:"button"},"Login"),a.a.createElement("a",{className:"btn btn-primary mx-1",href:"/signup",role:"button"},"Signup")))))},u=r(2),m=r(5),h=Object(n.createContext)(),f=function(e){var t=Object(n.useContext)(h).deleteNote,r=e.note,o=e.updateNote;return a.a.createElement("div",{className:"col-md-3"},a.a.createElement("div",{className:"card my-3"},a.a.createElement("div",{className:"card-body"},a.a.createElement("div",{className:"d-flex align-items-center"},a.a.createElement("h5",{className:"card-title"},r.title),a.a.createElement("i",{className:"far fa-trash-alt mx-2",onClick:function(){t(r._id)}}),a.a.createElement("i",{className:"far fa-edit mx-2",onClick:function(){o(r)}})),a.a.createElement("p",{className:"card-text"},r.description))))},d=function(e){var t=Object(n.useContext)(h).addNote,r=Object(n.useState)({title:"",description:"",tag:""}),o=Object(c.a)(r,2),i=o[0],l=o[1],s=function(e){l(Object(m.a)({},i,Object(u.a)({},e.target.name,e.target.value)))};return a.a.createElement("div",{className:"container my-3"},a.a.createElement("h2",null,"Add a Note"),a.a.createElement("form",{className:"my-3"},a.a.createElement("div",{className:"mb-3"},a.a.createElement("label",{htmlFor:"title",className:"form-label"},"Title"),a.a.createElement("input",{type:"text",className:"form-control",id:"title",name:"title","aria-describedby":"emailHelp",value:i.title,onChange:s,minLength:5,required:!0})),a.a.createElement("div",{className:"mb-3"},a.a.createElement("label",{htmlFor:"description",className:"form-label"},"Description"),a.a.createElement("input",{type:"text",className:"form-control",id:"description",name:"description",value:i.description,onChange:s,minLength:5,required:!0})),a.a.createElement("div",{className:"mb-3"},a.a.createElement("label",{htmlFor:"tag",className:"form-label"},"Tag"),a.a.createElement("input",{type:"text",className:"form-control",id:"tag",name:"tag",value:i.tag,onChange:s,minLength:5,required:!0})),a.a.createElement("button",{disabled:i.title.length<5||i.description.length<5,type:"submit",className:"btn btn-primary",onClick:function(e){e.preventDefault(),t(i.title,i.description,i.tag),l({title:"",description:"",tag:""})}},"Add Note")))},p=function(e){var t=Object(n.useContext)(h),r=Object(l.a)(),o=t.notes,i=t.getNotes,s=t.editNote;Object(n.useEffect)(function(){localStorage.getItem("token")?i():r.push("/login")},[]);var p=Object(n.useRef)(null),v=Object(n.useRef)(null),y=Object(n.useState)({id:"",etitle:"",edescription:"",etag:""}),g=Object(c.a)(y,2),b=g[0],w=g[1],E=function(e){p.current.click(),w({id:e._id,etitle:e.title,edescription:e.description,etag:e.tag})},N=function(e){w(Object(m.a)({},b,Object(u.a)({},e.target.name,e.target.value)))};return a.a.createElement(a.a.Fragment,null,a.a.createElement(d,{showAlert:e.showAlert}),a.a.createElement("button",{ref:p,type:"button",className:"btn btn-primary d-none","data-bs-toggle":"modal","data-bs-target":"#exampleModal"},"Launch demo modal"),a.a.createElement("div",{className:"modal fade",id:"exampleModal",tabIndex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},a.a.createElement("div",{className:"modal-dialog"},a.a.createElement("div",{className:"modal-content"},a.a.createElement("div",{className:"modal-header"},a.a.createElement("h5",{className:"modal-title",id:"exampleModalLabel"},"Edite Note"),a.a.createElement("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})),a.a.createElement("div",{className:"modal-body"},a.a.createElement("form",{className:"my-3"},a.a.createElement("div",{className:"mb-3"},a.a.createElement("label",{htmlFor:"title",className:"form-label"},"Title"),a.a.createElement("input",{type:"text",className:"form-control",id:"etitle",name:"etitle",value:b.etitle,"aria-describedby":"emailHelp",onChange:N,minLength:5,required:!0})),a.a.createElement("div",{className:"mb-3"},a.a.createElement("label",{htmlFor:"description",className:"form-label"},"Description"),a.a.createElement("input",{type:"text",className:"form-control",id:"edescription",name:"edescription",value:b.edescription,onChange:N,minLength:5,required:!0})),a.a.createElement("div",{className:"mb-3"},a.a.createElement("label",{htmlFor:"tag",className:"form-label"},"Tag"),a.a.createElement("input",{type:"text",className:"form-control",id:"etag",name:"etag",value:b.etag,onChange:N})))),a.a.createElement("div",{className:"modal-footer"},a.a.createElement("button",{ref:v,type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal"},"Close"),a.a.createElement("button",{disabled:b.etitle.length<5||b.edescription.length<5,onClick:function(e){console.log("Updating the Note....",b),s(b.id,b.etitle,b.edescription,b.etag),v.current.click()},type:"button",className:"btn btn-primary"},"Update Note"))))),a.a.createElement("div",{className:"row my-3"},a.a.createElement("h2",null,"You Notes"),a.a.createElement("div",{className:"container mx-2"},0===o.length&&"No notes to display"),Array.from(o).map(function(e){return a.a.createElement(f,{key:e._id,updateNote:E,note:e})})))},v=function(e){var t=e.showAlert;return a.a.createElement("div",null,a.a.createElement(p,{showAlert:t}))},y=function(){return a.a.createElement("div",null," This is About page ")},g=r(4);function b(){b=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(k){c=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var a=t&&t.prototype instanceof m?t:m,o=Object.create(a.prototype),i=new L(n||[]);return o._invoke=function(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return O()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=E(i,r);if(c){if(c===u)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(e,r,i),o}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(k){return{type:"throw",arg:k}}}e.wrap=l;var u={};function m(){}function h(){}function f(){}var d={};c(d,a,function(){return this});var p=Object.getPrototypeOf,v=p&&p(p(j([])));v&&v!==t&&r.call(v,a)&&(d=v);var y=f.prototype=m.prototype=Object.create(d);function g(e){["next","throw","return"].forEach(function(t){c(e,t,function(e){return this._invoke(t,e)})})}function w(e,t){var n;this._invoke=function(a,o){function i(){return new t(function(n,i){!function n(a,o,i,c){var l=s(e[a],e,o);if("throw"!==l.type){var u=l.arg,m=u.value;return m&&"object"==typeof m&&r.call(m,"__await")?t.resolve(m.__await).then(function(e){n("next",e,i,c)},function(e){n("throw",e,i,c)}):t.resolve(m).then(function(e){u.value=e,i(u)},function(e){return n("throw",e,i,c)})}c(l.arg)}(a,o,n,i)})}return n=n?n.then(i,i):i()}}function E(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=s(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,u;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function N(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(N,this),this.reset(!0)}function j(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:O}}function O(){return{value:void 0,done:!0}}return h.prototype=f,c(y,"constructor",f),c(f,"constructor",h),h.displayName=c(f,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,c(e,i,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},g(w.prototype),c(w.prototype,o,function(){return this}),e.AsyncIterator=w,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new w(l(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then(function(e){return e.done?e.value:i.next()})},g(y),c(y,i,"Generator"),c(y,a,function(){return this}),c(y,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=j,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),x(r),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;x(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:j(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},e}var w=function(e){var t="http://localhost:5000",r=Object(n.useState)([]),o=Object(c.a)(r,2),i=o[0],l=o[1],s=function(){var e=Object(g.a)(b().mark(function e(){var r,n;return b().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(t,"/api/notes/fetchallnotes"),{method:"GET",headers:{"Content-Type":"application/json","auth-token":localStorage.getItem("token")}});case 3:return r=e.sent,e.next=6,r.json();case 6:n=e.sent,l(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("error",e.t0);case 13:case"end":return e.stop()}},e,null,[[0,10]])}));return function(){return e.apply(this,arguments)}}(),u=function(){var e=Object(g.a)(b().mark(function e(r,n,a){var o,c;return b().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(t,"/api/notes/addnote"),{method:"POST",headers:{"Content-Type":"application/json","auth-token":localStorage.getItem("token")},body:JSON.stringify({title:r,description:n,tag:a})});case 3:return o=e.sent,e.next=6,o.json();case 6:c=e.sent,l(i.concat(c)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("successful");case 13:case"end":return e.stop()}},e,null,[[0,10]])}));return function(t,r,n){return e.apply(this,arguments)}}(),m=function(){var e=Object(g.a)(b().mark(function e(r){var n,a,o;return b().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t,"/api/notes/deletenote/").concat(r),{method:"DELETE",headers:{"Content-Type":"application/json","auth-token":localStorage.getItem("token")}});case 2:n=e.sent,a=n.json(),console.log(a),console.log("delete note"+r),o=i.filter(function(e){return e._id!==r}),l(o);case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(g.a)(b().mark(function e(r,n,a,o){var c,s,u,m;return b().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t,"/api/notes/updatenote/").concat(r),{method:"PUT",headers:{"Content-Type":"application/json","auth-token":localStorage.getItem("token")},body:JSON.stringify({title:n,description:a,tag:o})});case 2:return c=e.sent,e.next=5,c.json();case 5:s=e.sent,console.log(s),u=JSON.parse(JSON.stringify(i)),m=0;case 9:if(!(m<u.length)){e.next=19;break}if(u[m]._id!==r){e.next=16;break}return u[m].title=n,u[m].description=a,u[m].tag=o,e.abrupt("break",19);case 16:m++,e.next=9;break;case 19:l(u);case 20:case"end":return e.stop()}},e)}));return function(t,r,n,a){return e.apply(this,arguments)}}();return a.a.createElement(h.Provider,{value:{notes:i,addNote:u,deleteNote:m,editNote:f,getNotes:s}},e.children)};function E(e){return a.a.createElement("div",null,e.alert&&a.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},a.a.createElement("strong",null,e.alert.type),":",e.alert.msg,a.a.createElement("button",{type:"button",className:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"})))}function N(){N=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(k){c=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var a=t&&t.prototype instanceof m?t:m,o=Object.create(a.prototype),i=new L(n||[]);return o._invoke=function(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return O()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=w(i,r);if(c){if(c===u)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(e,r,i),o}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(k){return{type:"throw",arg:k}}}e.wrap=l;var u={};function m(){}function h(){}function f(){}var d={};c(d,a,function(){return this});var p=Object.getPrototypeOf,v=p&&p(p(j([])));v&&v!==t&&r.call(v,a)&&(d=v);var y=f.prototype=m.prototype=Object.create(d);function g(e){["next","throw","return"].forEach(function(t){c(e,t,function(e){return this._invoke(t,e)})})}function b(e,t){var n;this._invoke=function(a,o){function i(){return new t(function(n,i){!function n(a,o,i,c){var l=s(e[a],e,o);if("throw"!==l.type){var u=l.arg,m=u.value;return m&&"object"==typeof m&&r.call(m,"__await")?t.resolve(m.__await).then(function(e){n("next",e,i,c)},function(e){n("throw",e,i,c)}):t.resolve(m).then(function(e){u.value=e,i(u)},function(e){return n("throw",e,i,c)})}c(l.arg)}(a,o,n,i)})}return n=n?n.then(i,i):i()}}function w(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=s(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,u;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function j(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:O}}function O(){return{value:void 0,done:!0}}return h.prototype=f,c(y,"constructor",f),c(f,"constructor",h),h.displayName=c(f,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,c(e,i,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},g(b.prototype),c(b.prototype,o,function(){return this}),e.AsyncIterator=b,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new b(l(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then(function(e){return e.done?e.value:i.next()})},g(y),c(y,i,"Generator"),c(y,a,function(){return this}),c(y,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=j,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),x(r),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;x(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:j(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},e}var x=function(e){var t=Object(n.useState)({name:"",email:"",password:"",epassword:""}),r=Object(c.a)(t,2),o=r[0],i=r[1],s=Object(l.a)(),h=function(){var t=Object(g.a)(N().mark(function t(r){var n,a,i,c,l;return N().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r.preventDefault(),n=o.name,a=o.email,i=o.password,t.next=4,fetch("http://localhost:5000/api/auth/createuser",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n,email:a,password:i})});case 4:return c=t.sent,t.next=7,c.json();case 7:l=t.sent,console.log(l),l.success?(localStorage.setItem("token",l.authtoken),s.push("/"),e.showAlert("Account Created Successfully","Success")):e.showAlert("Invalide Credentials","danger");case 10:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),f=function(e){i(Object(m.a)({},o,Object(u.a)({},e.target.name,e.target.value)))};return a.a.createElement("div",{className:"container mt-5 w-50  "},a.a.createElement("h2",{className:"my-3"},"Create an account to using iNotebook"),a.a.createElement("form",{onSubmit:h},a.a.createElement("div",{className:"my-3 "},a.a.createElement("label",{htmlFor:"name",className:"form-label"},"Name"),a.a.createElement("input",{type:"text",className:"form-control",id:"name",name:"name",onChange:f,"aria-describedby":"emailHelp"})),a.a.createElement("div",{className:"mb-3 "},a.a.createElement("label",{htmlFor:"email",className:"form-label"},"Email address"),a.a.createElement("input",{type:"email",className:"form-control",id:"email",name:"email",onChange:f,"aria-describedby":"emailHelp"}),a.a.createElement("div",{id:"emailHelp",className:"form-text"},"We'll never share your email with anyone else.")),a.a.createElement("div",{className:"mb-3"},a.a.createElement("label",{htmlFor:"password",className:"form-label"}," Password"),a.a.createElement("input",{type:"password",className:"form-control",id:"password",name:"password",onChange:f,minLength:5,required:!0})),a.a.createElement("div",{className:"mb-3"},a.a.createElement("label",{htmlFor:"cpassword",className:"form-label"},"Confirm Password"),a.a.createElement("input",{type:"password",className:"form-control",id:"cpassword",name:"cpassword",onChange:f,minLength:5,required:!0})),a.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit")))};function L(){L=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(k){c=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var a=t&&t.prototype instanceof m?t:m,o=Object.create(a.prototype),i=new x(n||[]);return o._invoke=function(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return O()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=w(i,r);if(c){if(c===u)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(e,r,i),o}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(k){return{type:"throw",arg:k}}}e.wrap=l;var u={};function m(){}function h(){}function f(){}var d={};c(d,a,function(){return this});var p=Object.getPrototypeOf,v=p&&p(p(j([])));v&&v!==t&&r.call(v,a)&&(d=v);var y=f.prototype=m.prototype=Object.create(d);function g(e){["next","throw","return"].forEach(function(t){c(e,t,function(e){return this._invoke(t,e)})})}function b(e,t){var n;this._invoke=function(a,o){function i(){return new t(function(n,i){!function n(a,o,i,c){var l=s(e[a],e,o);if("throw"!==l.type){var u=l.arg,m=u.value;return m&&"object"==typeof m&&r.call(m,"__await")?t.resolve(m.__await).then(function(e){n("next",e,i,c)},function(e){n("throw",e,i,c)}):t.resolve(m).then(function(e){u.value=e,i(u)},function(e){return n("throw",e,i,c)})}c(l.arg)}(a,o,n,i)})}return n=n?n.then(i,i):i()}}function w(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=s(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,u;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function j(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:O}}function O(){return{value:void 0,done:!0}}return h.prototype=f,c(y,"constructor",f),c(f,"constructor",h),h.displayName=c(f,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,c(e,i,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},g(b.prototype),c(b.prototype,o,function(){return this}),e.AsyncIterator=b,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new b(l(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then(function(e){return e.done?e.value:i.next()})},g(y),c(y,i,"Generator"),c(y,a,function(){return this}),c(y,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=j,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),N(r),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;N(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:j(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},e}var j=function(e){var t=Object(n.useState)({email:"",password:""}),r=Object(c.a)(t,2),o=r[0],i=r[1],s=Object(l.a)(),h=function(){var t=Object(g.a)(L().mark(function t(r){var n,a;return L().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r.preventDefault(),t.next=3,fetch("http://localhost:5000/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:o.email,password:o.password})});case 3:return n=t.sent,t.next=6,n.json();case 6:a=t.sent,console.log(a),a.success?(localStorage.setItem("token",a.authtoken),e.showAlert("Logged in Successfully","Success"),s.push("/")):e.showAlert("Invalide Details","danger");case 9:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),f=function(e){i(Object(m.a)({},o,Object(u.a)({},e.target.name,e.target.value)))};return a.a.createElement("div",{className:"mt-5 w-50 mx-5"},a.a.createElement("h2",null,"Login to continue to iNotebook"),a.a.createElement("form",{onSubmit:h},a.a.createElement("div",{className:"mb-3 mx-10"},a.a.createElement("label",{htmlFor:"email",className:"form-label"},"Email address"),a.a.createElement("input",{type:"email",className:"form-control",value:o.email,onChange:f,id:"email",name:"email","aria-describedby":"emailHelp"}),a.a.createElement("div",{id:"emailHelp",className:"form-text"},"We'll never share your email with anyone else.")),a.a.createElement("div",{className:"mb-3"},a.a.createElement("label",{htmlFor:"password",className:"form-label"},"Password"),a.a.createElement("input",{type:"password",className:"form-control",value:o.password,onChange:f,name:"password",id:"password"})),a.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit")))};var O=function(){var e=Object(n.useState)(null),t=Object(c.a)(e,2),r=t[0],o=t[1],i=function(e,t){o({msg:e,type:t}),setTimeout(function(){o(null)},1500)};return a.a.createElement(a.a.Fragment,null,a.a.createElement(w,null,a.a.createElement(s,null),a.a.createElement(E,{alert:r}),a.a.createElement("div",{className:"container"},a.a.createElement(v,null),a.a.createElement(y,null),a.a.createElement(j,{showAlert:i}),a.a.createElement(x,{showAlert:i}))))};i.a.createRoot(document.getElementById("root")).render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(O,null)))}},[[14,2,1]]]);
//# sourceMappingURL=main.613112c3.chunk.js.map