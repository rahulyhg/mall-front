(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-28c877d0"],{"214f":function(t,n,e){"use strict";var a=e("32e9"),i=e("2aba"),o=e("79e5"),r=e("be13"),s=e("2b4c");t.exports=function(t,n,e){var c=s(t),u=e(r,c,""[t]),l=u[0],f=u[1];o(function(){var n={};return n[c]=function(){return 7},7!=""[t](n)})&&(i(String.prototype,t,l),a(RegExp.prototype,c,2==n?function(t,n){return f.call(t,this,n)}:function(t){return f.call(t,this)}))}},"25e5":function(t,n,e){},2984:function(t,n,e){},"2ef1":function(t,n,e){},"3b2b":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"page-block"},[e("about-title",{attrs:{title:t.pageTitle}}),e("about-content",{attrs:{content:t.pageDescription}}),e("div",{staticClass:"additional-info"},[e("div",{staticClass:"additional-info-item"},[e("h4",[t._v(t._s(t.workingHoursTitle))]),e("p",{domProps:{innerHTML:t._s(t.workingHours)}})]),e("div",{staticClass:"additional-info-item"},[e("h4",[t._v(t._s(t.carrefourTitle))]),e("p",{domProps:{innerHTML:t._s(t.carrefourWorkingHours)}})])])],1)},i=[],o=(e("a481"),e("cadf"),e("551c"),e("097d"),e("f1d4")),r=e("a588"),s={name:"page-block",components:{AboutContent:o["a"],AboutTitle:r["a"]},mounted:function(){this.pageDataContent.length||this.fetchPage()},props:{title:{type:String,default:""},content:{type:String,default:""},additionals:{type:Array,default:function(){return[]}}},data:function(){return{pageData:null,locale:this.$store.getters.locale.locale}},computed:{pageDataContent:function(){return this.pageData?JSON.parse(this.pageData.data):""},pageTitle:function(){return this.pageDataContent?this.pageDataContent[this.locale+"Title"]:""},pageDescription:function(){return this.pageDataContent?"<p>".concat(this.pageDataContent[this.locale+"Description"].replace(/\n/g,"<br />"),"</p>"):""},workingHoursTitle:function(){return this.pageDataContent?this.pageDataContent[this.locale+"WorkingHoursTitle"]:""},workingHours:function(){return this.pageDataContent?this.pageDataContent[this.locale+"WorkingHours"]:""},carrefourTitle:function(){return this.pageDataContent?this.pageDataContent[this.locale+"CarrefourTitle"]:""},carrefourWorkingHours:function(){return this.pageDataContent?this.pageDataContent[this.locale+"CarrefourWorkingHours"]:""}},methods:{fetchPage:function(){var t=this;this.$store.dispatch("getAboutPage",this.$store.state.apiUrls.about).then(function(n){Array.isArray(n)&&(t.pageData=n[0])}).catch(function(t){console.error(t)})}}},c=s,u=(e("d96e"),e("6cac"),e("2877")),l=Object(u["a"])(c,a,i,!1,null,"4ade98ff",null);l.options.__file="PageBlock.vue";n["default"]=l.exports},"6cac":function(t,n,e){"use strict";var a=e("25e5"),i=e.n(a);i.a},8308:function(t,n,e){},"8f60":function(t,n,e){"use strict";var a=e("8308"),i=e.n(a);i.a},a481:function(t,n,e){e("214f")("replace",2,function(t,n,e){return[function(a,i){"use strict";var o=t(this),r=void 0==a?void 0:a[n];return void 0!==r?r.call(a,o,i):e.call(String(o),a,i)},e]})},a588:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"about-title-container"},[e("h1",{staticClass:"title"},[t._v(" "+t._s(this.title))])])},i=[],o={name:"about-title",props:{title:{type:String,default:""}}},r=o,s=(e("d7c7"),e("2877")),c=Object(s["a"])(r,a,i,!1,null,null,null);c.options.__file="AboutPageTitle.vue";n["a"]=c.exports},d7c7:function(t,n,e){"use strict";var a=e("2ef1"),i=e.n(a);i.a},d96e:function(t,n,e){"use strict";var a=e("2984"),i=e.n(a);i.a},f1d4:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"about-content-container"},[e("p",{domProps:{innerHTML:t._s(this.content)}})])},i=[],o=(e("cadf"),e("551c"),e("097d"),{name:"about-content",props:{content:{type:String,default:""}}}),r=o,s=(e("8f60"),e("2877")),c=Object(s["a"])(r,a,i,!1,null,null,null);c.options.__file="AboutPageContent.vue";n["a"]=c.exports}}]);
//# sourceMappingURL=chunk-28c877d0.e0e7594f.js.map