(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-766d48cd"],{"1dde":function(e,t,n){var r=n("d039"),i=n("b622"),o=n("2d00"),a=i("species");e.exports=function(e){return o>=51||!r((function(){var t=[],n=t.constructor={};return n[a]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},3530:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"admin"}},[n("div",{staticClass:"button-container"},[n("button",{on:{click:e.viewTree}},[e._v("View tree")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.getTreeUrl,expression:"getTreeUrl"}],attrs:{type:"text",id:"treeUrl",readonly:""},domProps:{value:e.getTreeUrl},on:{input:function(t){t.target.composing||(e.getTreeUrl=t.target.value)}}}),n("button",{on:{click:e.copyTreeUrl}},[e._v("Copy tree link")])]),n("NewTree")],1)},i=[],o=(n("99af"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tree"},[n("form",{staticClass:"tree-form",on:{submit:function(t){return t.preventDefault(),e.updateTree(t)}}},[e._l(e.tree.links,(function(t,r){return n("div",{key:r,staticClass:"link"},[n("div",{staticClass:"moveButtons"},[0!=r?n("div",{staticClass:"up",on:{click:function(t){return e.moveItem(r,"up")}}},[n("svg",{staticClass:"move-icon",attrs:{viewBox:"0 0 320 512"}},[n("path",{attrs:{d:"M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"}})])]):e._e(),r!=e.tree.links.length-1?n("div",{staticClass:"down",on:{click:function(t){return e.moveItem(r,"down")}}},[n("svg",{staticClass:"move-icon",attrs:{viewBox:"0 0 320 512"}},[n("path",{attrs:{d:"M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"}})])]):e._e()]),n("div",{staticClass:"input-container"},[n("div",{staticClass:"input"},[n("label",[e._v(" Title: ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"item.title"}],attrs:{type:"text",placeholder:"Title",required:""},domProps:{value:t.title},on:{input:function(n){n.target.composing||e.$set(t,"title",n.target.value)}}})]),n("div",{staticClass:"input"},[n("label",[e._v(" Link: ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.link,expression:"item.link"}],attrs:{type:"url",placeholder:"Url",required:""},domProps:{value:t.link},on:{input:function(n){n.target.composing||e.$set(t,"link",n.target.value)}}})])]),n("button",{staticClass:"removeLinkButton",attrs:{type:"button"},on:{click:function(t){return e.removeItem(r)}}},[e._v("X")])])})),n("button",{staticClass:"button cta-secondary",attrs:{type:"button"},on:{click:e.addItem}},[e._v("Add new link")]),n("button",{staticClass:"button cta-primary",attrs:{id:"saveButton",type:"submit"}},[e._v("Save")])],2)])}),a=[],c=n("1da1"),s=(n("a434"),n("96cf"),n("808b")),u={name:"EditTree",data:function(){return{tree:{treeTitle:"",links:[{title:"",link:"",description:""}]}}},computed:{getUserId:function(){return this.$store.getters.getUserId}},beforeMount:function(){this.getUserTree()},methods:{getUserTree:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,s["a"].getTreeList(e.getUserId);case 2:n=t.sent,console.log(n),null!=n._id&&void 0!=n._id&&(e.tree=n);case 5:case"end":return t.stop()}}),t)})))()},updateTree:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(console.log("updateTree"),!e.tree._id){t.next=7;break}return t.next=4,s["a"].updateTree(e.tree._id,e.tree.links);case 4:n=t.sent,t.next=11;break;case 7:return t.next=9,s["a"].newTree(e.getUserId,e.tree.links);case 9:n=t.sent,e.tree._id=n.t._id;case 11:r=e.$el.querySelector("#saveButton"),r.innerHTML="Updated",setTimeout((function(){r.innerHTML="Save"}),1200),console.log(r.innerHTML),console.log(n);case 16:case"end":return t.stop()}}),t)})))()},addItem:function(){console.log("addItem"),this.tree.links.push({title:"",link:"",description:""})},removeItem:function(e){this.tree.links.splice(e,1)},moveItem:function(e,t){"up"===t?this.tree.links.splice(e-1,0,this.tree.links.splice(e,1)[0]):this.tree.links.splice(e+1,0,this.tree.links.splice(e,1)[0])}}},l=u,d=(n("cfa4"),n("2877")),f=Object(d["a"])(l,o,a,!1,null,"1b9c5e84",null),p=f.exports,v={name:"Admin",metaInfo:{title:"Admin",htmlAttrs:{lang:"en"}},components:{NewTree:p},computed:{getUsername:function(){return this.$store.getters.getUsername},getTreeUrl:function(){var e=window.location.origin;return"".concat(e,"/t/").concat(this.getUsername)}},methods:{viewTree:function(){window.open(this.getTreeUrl,"_blank")},copyTreeUrl:function(){var e=this.$el.querySelector("#treeUrl");e.setAttribute("type","text"),e.select(),e.setSelectionRange(0,99999),document.execCommand("copy")}}},m=v,g=(n("f74a"),Object(d["a"])(m,r,i,!1,null,"00d8b39c",null));t["default"]=g.exports},"403d":function(e,t,n){},"65f0":function(e,t,n){var r=n("861d"),i=n("e8b5"),o=n("b622"),a=o("species");e.exports=function(e,t){var n;return i(e)&&(n=e.constructor,"function"!=typeof n||n!==Array&&!i(n.prototype)?r(n)&&(n=n[a],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===t?0:t)}},"808b":function(e,t,n){"use strict";var r=n("d4ec"),i=n("bee2"),o=n("bc3a"),a=n.n(o),c=function(){function e(){Object(r["a"])(this,e)}return Object(i["a"])(e,null,[{key:"getTree",value:function(e){var t="/api/tree/".concat(e);return console.log(t),a.a.get(t).then((function(e){return e.data})).catch((function(e){return console.log(e.response.data),e.response.data}))}},{key:"getTreeList",value:function(e){var t="api/tree/userTree/".concat(e);return a.a.get(t).then((function(e){return e.data})).catch((function(e){return console.log(e.response.data),e.response.data}))}},{key:"newTree",value:function(e,t){var n="api/tree/newTree";return a.a.post(n,{userId:e,links:t}).then((function(e){return e.data})).catch((function(e){return console.log(e.response.data),e.response.data}))}},{key:"updateTree",value:function(e,t){var n="api/tree/updateTree";return a.a.put(n,{treeId:e,links:t}).then((function(e){return e.data})).catch((function(e){return console.log(e.response.data),e.response.data}))}}]),e}();t["a"]=c},8418:function(e,t,n){"use strict";var r=n("c04e"),i=n("9bf2"),o=n("5c6c");e.exports=function(e,t,n){var a=r(t);a in e?i.f(e,a,o(0,n)):e[a]=n}},"99af":function(e,t,n){"use strict";var r=n("23e7"),i=n("d039"),o=n("e8b5"),a=n("861d"),c=n("7b0b"),s=n("50c4"),u=n("8418"),l=n("65f0"),d=n("1dde"),f=n("b622"),p=n("2d00"),v=f("isConcatSpreadable"),m=9007199254740991,g="Maximum allowed index exceeded",h=p>=51||!i((function(){var e=[];return e[v]=!1,e.concat()[0]!==e})),b=d("concat"),k=function(e){if(!a(e))return!1;var t=e[v];return void 0!==t?!!t:o(e)},w=!h||!b;r({target:"Array",proto:!0,forced:w},{concat:function(e){var t,n,r,i,o,a=c(this),d=l(a,0),f=0;for(t=-1,r=arguments.length;t<r;t++)if(o=-1===t?a:arguments[t],k(o)){if(i=s(o.length),f+i>m)throw TypeError(g);for(n=0;n<i;n++,f++)n in o&&u(d,f,o[n])}else{if(f>=m)throw TypeError(g);u(d,f++,o)}return d.length=f,d}})},a434:function(e,t,n){"use strict";var r=n("23e7"),i=n("23cb"),o=n("a691"),a=n("50c4"),c=n("7b0b"),s=n("65f0"),u=n("8418"),l=n("1dde"),d=l("splice"),f=Math.max,p=Math.min,v=9007199254740991,m="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!d},{splice:function(e,t){var n,r,l,d,g,h,b=c(this),k=a(b.length),w=i(e,k),T=arguments.length;if(0===T?n=r=0:1===T?(n=0,r=k-w):(n=T-2,r=p(f(o(t),0),k-w)),k+n-r>v)throw TypeError(m);for(l=s(b,r),d=0;d<r;d++)g=w+d,g in b&&u(l,d,b[g]);if(l.length=r,n<r){for(d=w;d<k-r;d++)g=d+r,h=d+n,g in b?b[h]=b[g]:delete b[h];for(d=k;d>k-r+n;d--)delete b[d-1]}else if(n>r)for(d=k-r;d>w;d--)g=d+r-1,h=d+n-1,g in b?b[h]=b[g]:delete b[h];for(d=0;d<n;d++)b[d+w]=arguments[d+2];return b.length=k-r+n,l}})},cfa4:function(e,t,n){"use strict";n("ec47")},e8b5:function(e,t,n){var r=n("c6b6");e.exports=Array.isArray||function(e){return"Array"==r(e)}},ec47:function(e,t,n){},f74a:function(e,t,n){"use strict";n("403d")}}]);
//# sourceMappingURL=chunk-766d48cd.5a021143.js.map