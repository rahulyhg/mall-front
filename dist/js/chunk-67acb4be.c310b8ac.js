(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-67acb4be"],{"1a55":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"page-block"},[e("about-title",{attrs:{title:t.pageTitle}}),e("about-content",{attrs:{content:t.pageDescription}}),e("service-list",{attrs:{list:t.list}}),e("about-content",{attrs:{content:t.secondaryDescription}}),e("div",{staticClass:"additional-info"},[e("div",{staticClass:"additional-info-item"},[e("h4",[t._v(t._s(t.contactInfoTitle))]),e("p",[t._v("\n        "+t._s(t.contactInfoFirst)+"\n        "),e("br"),e("br"),t._v("\n        "+t._s(t.contactInfoSecond)+"\n      ")])])])],1)},i=[],o=e("f1d4"),s=e("a588"),c=e("ab05"),r={name:"page-block",components:{ServiceList:c["a"],AboutContent:o["a"],AboutTitle:s["a"]},mounted:function(){this.pageDataContent.length||this.fetchPage()},props:{title:{type:String,default:""},content:{type:String,default:""},additionals:{type:Array,default:function(){return[]}}},data:function(){return{pageData:null,locale:this.$store.getters.locale.locale}},computed:{pageDataContent:function(){return this.pageData?JSON.parse(this.pageData.data):""},pageTitle:function(){return this.pageDataContent?this.pageDataContent[this.locale+"Title"]:""},pageDescription:function(){return this.pageDataContent?this.pageDataContent[this.locale+"Description"]:""},contactInfoTitle:function(){return this.pageDataContent?this.pageDataContent[this.locale+"ContactInfoTitle"]:""},contactInfoFirst:function(){return this.pageDataContent?this.pageDataContent[this.locale+"ContactInfoFirst"]:""},contactInfoSecond:function(){return this.pageDataContent?this.pageDataContent[this.locale+"ContactInfoSecond"]:""},secondaryDescription:function(){return this.pageDataContent?this.pageDataContent[this.locale+"SecondaryDescription"]:""},list:function(){var t=[];if(this.pageDataContent)for(var n=this.pageDataContent[this.locale+"Additional"],e=0;e<n.length;e++)t.push({title:n[e],content:n[e+1]}),e++;return t}},methods:{fetchPage:function(){var t=this;this.$store.dispatch("getAboutPage",this.$store.state.apiUrls.marketing).then(function(n){Array.isArray(n)&&(t.pageData=n[0])}).catch(function(t){console.error(t)})}}},l=r,u=(e("bb39"),e("958a"),e("2877")),p=Object(u["a"])(l,a,i,!1,null,"4dc62b3c",null);p.options.__file="Marketing.vue";n["default"]=p.exports},"23d8":function(t,n,e){},"2ef1":function(t,n,e){},8308:function(t,n,e){},"8f60":function(t,n,e){"use strict";var a=e("8308"),i=e.n(a);i.a},"958a":function(t,n,e){"use strict";var a=e("c47b"),i=e.n(a);i.a},a588:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"about-title-container"},[e("h1",{staticClass:"title"},[t._v(" "+t._s(this.title))])])},i=[],o={name:"about-title",props:{title:{type:String,default:""}}},s=o,c=(e("d7c7"),e("2877")),r=Object(c["a"])(s,a,i,!1,null,null,null);r.options.__file="AboutPageTitle.vue";n["a"]=r.exports},ab05:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ul",{staticClass:"service-list"},t._l(t.list,function(n,a){return e("li",{key:a,on:{click:function(e){t.toggle(n)}}},[e("div",{staticClass:"parent-container"},[t._m(0,!0),e("span",{staticClass:"name-wrapper"},[t._v(t._s(n.title))])]),e("div",{staticClass:"content",class:{open:t.openItem===n}},[e("p",[t._v("\n        "+t._s(n.content)+"\n      ")])])])}))},i=[function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("span",{staticClass:"icon-container"},[a("img",{attrs:{src:e("cdbb"),alt:""}})])}],o={name:"service-list",props:{list:{type:Array}},data:function(){return{openItem:null}},methods:{toggle:function(t){this.openItem=this.openItem===t?null:t}}},s=o,c=(e("bbb8"),e("2877")),r=Object(c["a"])(s,a,i,!1,null,"7ee52156",null);r.options.__file="ServiceList.vue";n["a"]=r.exports},bb39:function(t,n,e){"use strict";var a=e("23d8"),i=e.n(a);i.a},bbb8:function(t,n,e){"use strict";var a=e("ebc1"),i=e.n(a);i.a},c47b:function(t,n,e){},d7c7:function(t,n,e){"use strict";var a=e("2ef1"),i=e.n(a);i.a},ebc1:function(t,n,e){},f1d4:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"about-content-container"},[e("p",{domProps:{innerHTML:t._s(this.content)}})])},i=[],o=(e("cadf"),e("551c"),e("097d"),{name:"about-content",props:{content:{type:String,default:""}}}),s=o,c=(e("8f60"),e("2877")),r=Object(c["a"])(s,a,i,!1,null,null,null);r.options.__file="AboutPageContent.vue";n["a"]=r.exports}}]);
//# sourceMappingURL=chunk-67acb4be.c310b8ac.js.map