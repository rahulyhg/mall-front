(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9fc76678"],{"1a55":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"page-block"},[e("about-title",{attrs:{title:t.pageTitle}}),e("about-content",{attrs:{content:t.pageDescription}}),e("service-list",{attrs:{list:t.list}}),e("about-content",{attrs:{content:t.secondaryDescription}}),e("div",{staticClass:"additional-info"},[e("div",{staticClass:"additional-info-item"},[e("h4",[t._v(t._s(t.contactInfoTitle))]),e("p",[e("span",{staticClass:"color-grey"},[t._v(t._s(t.contactInfoFirst))]),e("br"),e("br"),e("span",{staticClass:"color-grey"},[t._v(t._s(t.contactInfoSecond))])])])])],1)},i=[],o=e("f1d4"),s=e("a588"),c=e("ab05"),r={name:"page-block",components:{ServiceList:c["a"],AboutContent:o["a"],AboutTitle:s["a"]},mounted:function(){this.$store.getters[this.model]?this.$store.commit("SET_LOADING_STATE",{model:"page",value:!1}):this.fetchPage()},props:{title:{type:String,default:""},content:{type:String,default:""},additionals:{type:Array,default:function(){return[]}}},data:function(){return{pageData:null,model:"marketing"}},computed:{pageDataContent:function(){return this.$store.getters[this.model]?JSON.parse(this.$store.getters[this.model][0].data):""},pageTitle:function(){return this.pageDataContent?this.pageDataContent[this.locale+"Title"]:""},pageDescription:function(){return this.pageDataContent?this.pageDataContent[this.locale+"Description"]:""},contactInfoTitle:function(){return this.pageDataContent?this.pageDataContent[this.locale+"ContactInfoTitle"]:""},contactInfoFirst:function(){return this.pageDataContent?this.pageDataContent[this.locale+"ContactInfoFirst"]:""},contactInfoSecond:function(){return this.pageDataContent?this.pageDataContent[this.locale+"ContactInfoSecond"]:""},secondaryDescription:function(){return this.pageDataContent?this.pageDataContent[this.locale+"SecondaryDescription"]:""},list:function(){var t=[];if(this.pageDataContent)for(var n=this.pageDataContent[this.locale+"Additional"],e=0;e<n.length;e++)t.push({title:n[e],content:n[e+1]}),e++;return t}},methods:{fetchPage:function(){this.$store.dispatch("getAboutPage",{url:this.$store.state.apiUrls.marketing,model:this.model}).catch(function(t){console.error(t)})}}},l=r,u=(e("fcb9"),e("958a"),e("2877")),p=Object(u["a"])(l,a,i,!1,null,"37b94616",null);p.options.__file="Marketing.vue";n["default"]=p.exports},2520:function(t,n,e){},"2ef1":function(t,n,e){},"59a8":function(t,n,e){"use strict";var a=e("84af"),i=e.n(a);i.a},8308:function(t,n,e){},"84af":function(t,n,e){},"8f60":function(t,n,e){"use strict";var a=e("8308"),i=e.n(a);i.a},"958a":function(t,n,e){"use strict";var a=e("c47b"),i=e.n(a);i.a},a588:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"about-title-container"},[e("h1",{staticClass:"title"},[t._v(" "+t._s(this.title))])])},i=[],o={name:"about-title",props:{title:{type:String,default:""}}},s=o,c=(e("d7c7"),e("2877")),r=Object(c["a"])(s,a,i,!1,null,null,null);r.options.__file="AboutPageTitle.vue";n["a"]=r.exports},ab05:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ul",{staticClass:"service-list"},t._l(t.list,function(n,a){return e("li",{key:a,on:{click:function(e){t.toggle(n)}}},[e("div",{staticClass:"parent-container"},[t._m(0,!0),e("span",{staticClass:"name-wrapper"},[t._v(t._s(n.title))])]),e("div",{staticClass:"content",class:{open:t.openItem===n}},[e("p",[t._v("\n        "+t._s(n.content)+"\n      ")])])])}))},i=[function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("span",{staticClass:"icon-container"},[a("img",{attrs:{src:e("cdbb"),alt:""}})])}],o={name:"service-list",props:{list:{type:Array}},data:function(){return{openItem:null}},methods:{toggle:function(t){this.openItem=this.openItem===t?null:t}}},s=o,c=(e("59a8"),e("2877")),r=Object(c["a"])(s,a,i,!1,null,"1e926f48",null);r.options.__file="ServiceList.vue";n["a"]=r.exports},c47b:function(t,n,e){},d7c7:function(t,n,e){"use strict";var a=e("2ef1"),i=e.n(a);i.a},f1d4:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"about-content-container"},[e("p",{domProps:{innerHTML:t._s(t.customContent)}})])},i=[],o=(e("a481"),{name:"about-content",props:{content:{type:String,default:""}},computed:{customContent:function(){return""!==this.content?"<p>".concat(this.content.replace(/\n/g,"<br />"),"</p>"):""}}}),s=o,c=(e("8f60"),e("2877")),r=Object(c["a"])(s,a,i,!1,null,null,null);r.options.__file="AboutPageContent.vue";n["a"]=r.exports},fcb9:function(t,n,e){"use strict";var a=e("2520"),i=e.n(a);i.a}}]);
//# sourceMappingURL=chunk-9fc76678.0c70fdfa.js.map