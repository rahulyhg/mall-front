(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c3c868a4"],{1857:function(t,e,n){"use strict";var a=n("9a9c"),s=n.n(a);s.a},"224c":function(t,e,n){},"61c5":function(t,e,n){t.exports=n.p+"img/download-black.61f91995.svg"},8627:function(t,e,n){},8773:function(t,e,n){"use strict";var a=n("8627"),s=n.n(a);s.a},"8f60":function(t,e,n){"use strict";var a=n("906c"),s=n.n(a);s.a},9009:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-block"},[a("about-title",{attrs:{title:t.t("magazine")}}),a("div",{staticClass:"magazines-container"},t._l(t.$store.getters.magazines,function(e,s){return a("div",{key:s,staticClass:"magazine-item"},[a("div",{staticClass:"magazine-image-container"},[a("img",{attrs:{src:e.photoUrl,alt:e.photoUrl[t.locale]}})]),a("div",{staticClass:"magazine-date"},[a("div",{staticClass:"date-wrapper"},[a("span",[t._v(t._s(t.formatData(e.date)))])]),a("div",{staticClass:"name-wrapper"},[a("h4",[t._v(t._s(e["name"+t.locale.toUpperCase()]))])])]),a("div",{staticClass:"download-button"},[a("a",{attrs:{href:e.fileUrl,target:"_blank"}},[a("button",[a("span",{staticClass:"download-text"},[t._v(t._s(t.t("download")))]),a("img",{staticClass:"download-icon black",attrs:{src:n("61c5"),alt:"Download Icon"}}),a("img",{staticClass:"download-icon white",attrs:{src:n("f831"),alt:"Download Icon"}})])])])])}),0)],1)},s=[],i=n("f1d4"),o=n("a588"),c=n("ab05"),r={name:"leasing-block",components:{ServiceList:c["a"],AboutContent:i["a"],AboutTitle:o["a"]},mounted:function(){this.$store.getters[this.model]?this.$store.commit("SET_LOADING_STATE",{model:"page",value:!1}):this.fetchPage()},props:{title:{type:String,default:""},content:{type:String,default:""},additionals:{type:Array,default:function(){return[]}}},data:function(){return{pageData:null,model:"magazine",magSetter:"SET_MAGAZINES"}},computed:{pageDataContent:function(){return this.$store.getters[this.model]?JSON.parse(this.$store.getters[this.model][0].data):""},pageTitle:function(){return this.pageDataContent?this.pageDataContent[this.locale+"Title"]:""}},methods:{fetchPage:function(){var t=this;this.$store.dispatch("fetchItems",{api:this.$store.state.apiUrls.magazine,model:this.model,setter:this.magSetter}).then(function(){t.$store.commit("SET_LOADING_STATE",{model:"page",value:!1})}).catch(function(t){console.error(t)})},formatData:function(t){var e=new Date(t);return"".concat(e.getDay()," . ").concat(e.getMonth()," . ").concat(e.getFullYear())}}},l=r,u=(n("1857"),n("2877")),p=Object(u["a"])(l,a,s,!1,null,"4ddb0c51",null);p.options.__file="Magazine.vue";e["default"]=p.exports},"906c":function(t,e,n){},"9a9c":function(t,e,n){},a588:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about-title-container"},[n("h1",{staticClass:"title"},[t._v(" "+t._s(this.title))])])},s=[],i={name:"about-title",props:{title:{type:String,default:""}}},o=i,c=(n("d7c7"),n("2877")),r=Object(c["a"])(o,a,s,!1,null,null,null);r.options.__file="AboutPageTitle.vue";e["a"]=r.exports},ab05:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"service-list"},t._l(t.list,function(e,a){return n("li",{key:a,on:{click:function(n){t.toggle(e)}}},[n("div",{staticClass:"parent-container"},[t._m(0,!0),n("span",{staticClass:"name-wrapper"},[t._v(t._s(e.title))])]),n("div",{staticClass:"content",class:{open:-1!==t.openItem.indexOf(e)}},[n("p",[t._v("\n        "+t._s(e.content)+"\n      ")])])])}),0)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon-container"},[a("img",{attrs:{src:n("cdbb"),alt:""}})])}],i={name:"service-list",props:{list:{type:Array}},data:function(){return{openItem:[]}},methods:{toggle:function(t){var e=this.openItem.indexOf(t);-1!==e?this.openItem.splice(e,1):this.openItem.push(t)}}},o=i,c=(n("8773"),n("2877")),r=Object(c["a"])(o,a,s,!1,null,"436c64f0",null);r.options.__file="ServiceList.vue";e["a"]=r.exports},d7c7:function(t,e,n){"use strict";var a=n("224c"),s=n.n(a);s.a},f1d4:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about-content-container"},[n("p",{domProps:{innerHTML:t._s(t.customContent)}})])},s=[],i=(n("a481"),{name:"about-content",props:{content:{type:String,default:""}},computed:{customContent:function(){return""!==this.content?"<p>".concat(this.content.replace(/\n/g,"<br />"),"</p>"):""}}}),o=i,c=(n("8f60"),n("2877")),r=Object(c["a"])(o,a,s,!1,null,null,null);r.options.__file="AboutPageContent.vue";e["a"]=r.exports},f831:function(t,e,n){t.exports=n.p+"img/download-white.75dd7c26.svg"}}]);
//# sourceMappingURL=chunk-c3c868a4.435e64c6.js.map