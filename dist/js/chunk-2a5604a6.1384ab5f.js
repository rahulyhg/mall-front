(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2a5604a6"],{"0ccd":function(t,n,e){"use strict";var a=e("2544"),i=e.n(a);i.a},"224c":function(t,n,e){},2544:function(t,n,e){},2633:function(t,n,e){"use strict";var a=e("7043"),i=e.n(a);i.a},"2e95":function(t,n,e){},"425f":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"page-block"},[e("about-title",{attrs:{title:t.pageTitle}}),e("about-content",{attrs:{content:t.pageDescription}}),e("div",{staticClass:"additional-info"},[e("div",{staticClass:"contact-info"},t._l(t.contactInfoFirst,function(n,a){return e("div",{key:a,staticClass:"contact-info-inner"},[2!==a?e("p",{class:{bold:1===a}},[t._v("\n          "+t._s(n)+"\n        ")]):e("a",{attrs:{href:"mailto:"+n}},[t._v("\n          "+t._s(n)+"\n        ")])])}),0),e("div",{staticClass:"contact-info"},t._l(t.contactInfoSecond,function(n,a){return e("div",{key:a,staticClass:"contact-info-inner"},[2!==a?e("p",{class:{bold:1===a}},[t._v("\n          "+t._s(n)+"\n        ")]):e("a",{attrs:{href:"mailto:"+n}},[t._v("\n          "+t._s(n)+"\n        ")])])}),0)])],1)},i=[],s=e("f1d4"),o=e("a588"),c=e("ab05"),r={name:"leasing-block",components:{ServiceList:c["a"],AboutContent:s["a"],AboutTitle:o["a"]},mounted:function(){this.$store.getters[this.model]?this.$store.commit("SET_LOADING_STATE",{model:"page",value:!1}):this.fetchPage()},props:{title:{type:String,default:""},content:{type:String,default:""},additionals:{type:Array,default:function(){return[]}}},data:function(){return{pageData:null,model:"leasing"}},computed:{pageDataContent:function(){return this.$store.getters[this.model]?this.parsePageData(this.$store.getters[this.model][0].data):""},pageTitle:function(){return this.pageDataContent?this.pageDataContent[this.locale+"Title"]:""},pageDescription:function(){return this.pageDataContent?this.pageDataContent[this.locale+"Description"]:""},contactInfoTitle:function(){return this.pageDataContent?this.pageDataContent[this.locale+"ContactInfoTitle"]:""},contactInfoFirst:function(){return this.pageDataContent?this.pageDataContent[this.locale+"FirstContact"]:""},contactInfoSecond:function(){return this.pageDataContent?this.pageDataContent[this.locale+"SecondContact"]:""}},methods:{fetchPage:function(){this.$store.dispatch("getAboutPage",{url:this.$store.state.apiUrls.leasing,model:this.model}).catch(function(t){console.error(t)})}}},l=r,u=(e("2633"),e("0ccd"),e("2877")),p=Object(u["a"])(l,a,i,!1,null,"e648285a",null);p.options.__file="Leasing.vue";n["default"]=p.exports},7043:function(t,n,e){},"8f60":function(t,n,e){"use strict";var a=e("906c"),i=e.n(a);i.a},"906c":function(t,n,e){},a588:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"about-title-container"},[e("h1",{staticClass:"title"},[t._v(" "+t._s(this.title))])])},i=[],s={name:"about-title",props:{title:{type:String,default:""}}},o=s,c=(e("d7c7"),e("2877")),r=Object(c["a"])(o,a,i,!1,null,null,null);r.options.__file="AboutPageTitle.vue";n["a"]=r.exports},ab05:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ul",{staticClass:"service-list"},t._l(t.list,function(n,a){return e("li",{key:a,on:{click:function(e){t.toggle(n)}}},[e("div",{staticClass:"parent-container"},[t._m(0,!0),e("span",{staticClass:"name-wrapper"},[t._v(t._s(n.title))])]),e("div",{staticClass:"content",class:{open:-1!==t.openItem.indexOf(n)}},[e("p",[t._v("\n        "+t._s(n.content)+"\n      ")])])])}),0)},i=[function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("span",{staticClass:"icon-container"},[a("img",{attrs:{src:e("cdbb"),alt:""}})])}],s={name:"service-list",props:{list:{type:Array}},data:function(){return{openItem:[]}},methods:{toggle:function(t){var n=this.openItem.indexOf(t);-1!==n?this.openItem.splice(n,1):this.openItem.push(t)}}},o=s,c=(e("c22d"),e("2877")),r=Object(c["a"])(o,a,i,!1,null,"18e9cdb8",null);r.options.__file="ServiceList.vue";n["a"]=r.exports},c22d:function(t,n,e){"use strict";var a=e("2e95"),i=e.n(a);i.a},d7c7:function(t,n,e){"use strict";var a=e("224c"),i=e.n(a);i.a},f1d4:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"about-content-container"},[e("p",{domProps:{innerHTML:t._s(t.customContent)}})])},i=[],s=(e("a481"),{name:"about-content",props:{content:{type:String,default:""}},computed:{customContent:function(){return""!==this.content?"<p>".concat(this.content.replace(/\n/g,"<br />"),"</p>"):""}}}),o=s,c=(e("8f60"),e("2877")),r=Object(c["a"])(o,a,i,!1,null,null,null);r.options.__file="AboutPageContent.vue";n["a"]=r.exports}}]);
//# sourceMappingURL=chunk-2a5604a6.1384ab5f.js.map