!function(t){var e={};function a(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=t,a.c=e,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=0)}([function(t,e,a){a(1),t.exports=a(6)},function(t,e,a){Nova.booting(function(t,e){t.config.devtools=!0,t.component("inspire",a(2))})},function(t,e,a){var n=a(3)(a(4),a(5),!1,null,null,null);t.exports=n.exports},function(t,e){t.exports=function(t,e,a,n,o,r){var i,s=t=t||{},d=typeof t.default;"object"!==d&&"function"!==d||(i=t,s=t.default);var c,l="function"==typeof s?s.options:s;if(e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0),a&&(l.functional=!0),o&&(l._scopeId=o),r?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},l._ssrRegister=c):n&&(c=n),c){var u=l.functional,p=u?l.render:l.beforeCreate;u?(l._injectStyles=c,l.render=function(t,e){return c.call(e),p(t,e)}):l.beforeCreate=p?[].concat(p,c):[c]}return{esModule:i,exports:s,options:l}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["card"],data:function(){return{data:null,style:null}},mounted:function(){var t=this;Nova.request().get("/nova-vendor/inspire/random").then(function(e){t.data=e.data,t.style=t.card.style}).catch(function(){return t.error=!0}).finally(function(){return t.loading=!1})}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return"stacked"===t.style?a("card",[t.data?a("div",{attrs:{id:"inspire-stacked"}},[a("div",{staticClass:"w-full rounded overflow-hidden shadow-lg"},[a("div",{staticClass:"image",style:{backgroundImage:"url('"+t.data.image+"')"}},[t.data.image_copyright?a("span",{staticClass:"image-copyright"},[t._v("\n                    Image ©\n                    "+t._s(t.data.image_copyright)+"\n                ")]):t._e()]),t._v(" "),a("div",{staticClass:"px-6 py-4"},[a("blockquote",{staticClass:"inspire-quote"},[a("p",[a("span",[t._v(t._s(t.data.quote))])]),t._v(" "),a("footer",[t._v(t._s(t.data.author))])])])])]):t._e()]):"horizontal"===t.style?a("card",[t.data?a("div",{attrs:{id:"inspire-horizontal"}},[a("div",{staticClass:"w-full flex rounded overflow-hidden shadow-lg"},[a("div",{staticClass:"w-1/3 image",style:{backgroundImage:"url('"+t.data.image+"')"}},[t.data.image_copyright?a("span",{staticClass:"image-copyright"},[t._v("\n                    Image ©\n                    "+t._s(t.data.image_copyright)+"\n                ")]):t._e()]),t._v(" "),a("div",{staticClass:"bg-white p-4 flex flex-col justify-between leading-normal"},[a("blockquote",{staticClass:"inspire-quote"},[a("p",[a("span",[t._v(t._s(t.data.quote))])]),t._v(" "),a("footer",[t._v(t._s(t.data.author))])])])])]):t._e()]):a("card",[t.data?a("div",{staticClass:"w-full rounded overflow-hidden shadow-lg"},[a("div",{style:{backgroundImage:"url('"+t.data.image+"')"},attrs:{id:"inspire-default"}},[a("div",{staticClass:"inspire-overlay"}),t._v(" "),a("blockquote",{staticClass:"inspire-quote"},[a("p",[a("span",[t._v(t._s(t.data.quote))])]),t._v(" "),a("footer",[t._v(t._s(t.data.author))])]),t._v(" "),t.data.image_copyright?a("span",{staticClass:"image-copyright"},[t._v("\n                Image ©\n                "+t._s(t.data.image_copyright)+"\n            ")]):t._e()])]):t._e()])},staticRenderFns:[]}},function(t,e){}]);