(function(e){function t(t){for(var r,u,i=t[0],l=t[1],c=t[2],s=0,p=[];s<i.length;s++)u=i[s],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&p.push(o[u][0]),o[u]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);f&&f(t);while(p.length)p.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var l=n[u];0!==o[l]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a=[];function u(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"29e422b8","chunk-9958cc44":"205e3303"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var c=new Error;a=function(t){l.onerror=l.onload=null,clearTimeout(s);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",c.name="ChunkLoadError",c.type=r,c.request=a,n[1](c)}o[e]=void 0}};var s=setTimeout((function(){a({type:"timeout",target:l})}),12e4);l.onerror=l.onload=a,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/JamesJJT-GHP/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var f=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"h-screen",attrs:{id:"app"}},[n("Nav"),n("router-view")],1)},a=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"w-full mx-auto p-6"},[n("ul",{staticClass:"flex",attrs:{id:"nav"}},[n("li",{staticClass:"mr-6"},[n("router-link",{staticClass:"text-blue-500 hover:text-blue-800",attrs:{to:"/"}},[e._v("Home")])],1),n("li",{staticClass:"mr-6"},[n("router-link",{staticClass:"text-blue-500 hover:text-blue-800",attrs:{to:"/about"}},[e._v("About")])],1),n("li",{staticClass:"mr-6"},[n("router-link",{staticClass:"text-blue-500 hover:text-blue-800",attrs:{to:"/flightbriefing"}},[e._v("Flight Briefing")])],1)])])},i=[],l={name:"Nav"},c=l,s=n("2877"),f=Object(s["a"])(c,u,i,!1,null,null,null),p=f.exports,d={components:{Nav:p}},v=d,h=Object(s["a"])(v,o,a,!1,null,null,null),b=h.exports,m=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),g=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},y=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("div",[e._v("Add some info here")])])}],_={name:"Home",components:{}},w=_,x=Object(s["a"])(w,g,y,!1,null,null,null),j=x.exports;r["a"].use(m["a"]);var O=[{path:"/",name:"Home",component:j},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/flightbriefing",name:"FlightBriefing",component:function(){return n.e("chunk-9958cc44").then(n.bind(null,"a820"))}}],C=new m["a"]({routes:O}),k=C;r["a"].config.productionTip=!1,new r["a"]({router:k,render:function(e){return e(b)}}).$mount("#app")}});
//# sourceMappingURL=app.4f4a49c8.js.map