(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-11bc41fd","chunk-77233f7a","chunk-1e414940"],{"01c4":function(t,e,n){"use strict";var a=n("84af"),i=n.n(a);i.a},"11b1":function(t,e,n){},"214f":function(t,e,n){"use strict";var a=n("32e9"),i=n("2aba"),s=n("79e5"),r=n("be13"),o=n("2b4c");t.exports=function(t,e,n){var c=o(t),l=n(r,c,""[t]),u=l[0],f=l[1];s(function(){var e={};return e[c]=function(){return 7},7!=""[t](e)})&&(i(String.prototype,t,u),a(RegExp.prototype,c,2==e?function(t,e){return f.call(t,this,e)}:function(t){return f.call(t,this)}))}},"25e5":function(t,e,n){},"27b3":function(t,e,n){"use strict";var a=n("11b1"),i=n.n(a);i.a},"2ef1":function(t,e,n){},3720:function(t,e,n){"use strict";var a=n("6675"),i=n.n(a);i.a},"3b2b":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-block"},[n("about-title",{attrs:{title:t.pageTitle}}),n("about-content",{attrs:{content:t.pageDescription}}),n("div",{staticClass:"additional-info"},[n("div",{staticClass:"additional-info-item"},[n("h4",[t._v(t._s(t.workingHoursTitle))]),n("p",{domProps:{innerHTML:t._s(t.workingHours)}})]),n("div",{staticClass:"additional-info-item"},[n("h4",[t._v(t._s(t.carrefourTitle))]),n("p",{domProps:{innerHTML:t._s(t.carrefourWorkingHours)}})])])],1)},i=[],s=(n("a481"),n("f1d4")),r=n("a588"),o={name:"page-block",components:{AboutContent:s["a"],AboutTitle:r["a"]},mounted:function(){this.pageDataContent.length||this.fetchPage()},props:{title:{type:String,default:""},content:{type:String,default:""},additionals:{type:Array,default:function(){return[]}}},data:function(){return{pageData:null,locale:this.$store.getters.locale.locale}},computed:{pageDataContent:function(){return this.pageData?JSON.parse(this.pageData.data):""},pageTitle:function(){return this.pageDataContent?this.pageDataContent[this.locale+"Title"]:""},pageDescription:function(){return this.pageDataContent?"<p>".concat(this.pageDataContent[this.locale+"Description"].replace(/\n/g,"<br />"),"</p>"):""},workingHoursTitle:function(){return this.pageDataContent?this.pageDataContent[this.locale+"WorkingHoursTitle"]:""},workingHours:function(){return this.pageDataContent?this.pageDataContent[this.locale+"WorkingHours"]:""},carrefourTitle:function(){return this.pageDataContent?this.pageDataContent[this.locale+"CarrefourTitle"]:""},carrefourWorkingHours:function(){return this.pageDataContent?this.pageDataContent[this.locale+"CarrefourWorkingHours"]:""}},methods:{fetchPage:function(){var t=this;this.$store.dispatch("getAboutPage",this.$store.state.apiUrls.about).then(function(e){Array.isArray(e)&&(t.pageData=e[0])}).catch(function(t){console.error(t)})}}},c=o,l=(n("ed6e"),n("6cac"),n("2877")),u=Object(l["a"])(c,a,i,!1,null,"1b1812ca",null);u.options.__file="PageBlock.vue";e["default"]=u.exports},6675:function(t,e,n){},"6cac":function(t,e,n){"use strict";var a=n("25e5"),i=n.n(a);i.a},8308:function(t,e,n){},"84af":function(t,e,n){},"8f60":function(t,e,n){"use strict";var a=n("8308"),i=n.n(a);i.a},"981e":function(t,e,n){},a481:function(t,e,n){n("214f")("replace",2,function(t,e,n){return[function(a,i){"use strict";var s=t(this),r=void 0==a?void 0:a[e];return void 0!==r?r.call(a,s,i):n.call(String(s),a,i)},n]})},a588:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about-title-container"},[n("h1",{staticClass:"title"},[t._v(" "+t._s(this.title))])])},i=[],s={name:"about-title",props:{title:{type:String,default:""}}},r=s,o=(n("d7c7"),n("2877")),c=Object(o["a"])(r,a,i,!1,null,null,null);c.options.__file="AboutPageTitle.vue";e["a"]=c.exports},ab05:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"service-list"},t._l(t.list,function(e,a){return n("li",{key:a,on:{click:function(n){t.toggle(e)}}},[n("div",{staticClass:"parent-container"},[t._m(0,!0),n("span",{staticClass:"name-wrapper"},[t._v(t._s(e.title))])]),n("div",{staticClass:"content",class:{open:t.openItem===e}},[n("p",[t._v("\n        "+t._s(e.content)+"\n      ")])])])}))},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon-container"},[a("img",{attrs:{src:n("cdbb"),alt:""}})])}],s={name:"service-list",props:{list:{type:Array}},data:function(){return{openItem:null}},methods:{toggle:function(t){this.openItem=this.openItem===t?null:t}}},r=s,o=(n("01c4"),n("2877")),c=Object(o["a"])(r,a,i,!1,null,"47160590",null);c.options.__file="ServiceList.vue";e["a"]=c.exports},bdc6:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-our-service"},[n("about-title",{attrs:{title:this.title}}),n("about-content",{attrs:{content:this.content}}),n("service-list",{attrs:{list:t.serviceList}})],1)},i=[],s=n("f1d4"),r=n("a588"),o=n("ab05"),c={name:"page-our-service",components:{ServiceList:o["a"],AboutContent:s["a"],AboutTitle:r["a"]},props:{title:{type:String,default:"OUR SERVICE"},content:{type:String,default:"At Tbilisi Mall we offer a provision of full services in line with our main priorities to create a comfortable, pleasant environment and ensure that every visitor’s experience is exceptional. <br> Tbilisi Mall has the following services at your disposal:"}},data:function(){return{serviceList:[{title:"Gift Wrap"},{title:"Customer Service"},{title:"Tbilisi Mall Taxi"},{title:"Medical Service"},{title:"Car Wash"},{title:"Free WIFI"},{title:"Dry Cleaning"},{title:"Parking Facilities"},{title:"Lost and Found"},{title:"Children's Wrist Bands"},{title:"Banking Services & ATM's"}]}}},l=c,u=(n("3720"),n("2877")),f=Object(u["a"])(l,a,i,!1,null,"7f5e3d59",null);f.options.__file="GuestServicePage.vue";e["default"]=f.exports},d7c7:function(t,e,n){"use strict";var a=n("2ef1"),i=n.n(a);i.a},dcfd:function(t,e,n){},e2a7:function(t,e,n){"use strict";var a=n("eb62"),i=n.n(a);i.a},eb62:function(t,e,n){},ed6e:function(t,e,n){"use strict";var a=n("981e"),i=n.n(a);i.a},f1d4:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about-content-container"},[n("p",{domProps:{innerHTML:t._s(this.content)}})])},i=[],s={name:"about-content",props:{content:{type:String,default:""}}},r=s,o=(n("8f60"),n("2877")),c=Object(o["a"])(r,a,i,!1,null,null,null);c.options.__file="AboutPageContent.vue";e["a"]=c.exports},f26d:function(t,e,n){"use strict";var a=n("dcfd"),i=n.n(a);i.a},f820:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about-page container"},[n("section",{staticClass:"about-us about-outer-container"},[n("div",{staticClass:"page-block-container"},[n("router-view")],1),n("div",{staticClass:"menu-container"},[n("about-us-menu",{attrs:{items:this.aboutMenu,active:""}})],1),n("div",{staticClass:"horizontal-line gray"}),n("div",{staticClass:"our-team"},[n("staff-carousel",{attrs:{staff:this.staff}})],1)])])},i=[],s=n("3b2b"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about-page-menu"},[n("div",{staticClass:"menu-wrapper-outer"},[n("ul",{staticClass:"menu-wrapper"},t._l(this.items,function(e,a){return n("li",{key:a,staticClass:"menu-item"},[n("router-link",{staticClass:"name",attrs:{to:"/"+t.$store.getters.locale.locale+e.url}},[t._v("\n          "+t._s(e.name)+"\n        ")])],1)}))])])},o=[],c={name:"about-us-menu",props:{items:{type:Array,default:function(){return[]}},active:{type:String,default:""}}},l=c,u=(n("27b3"),n("2877")),f=Object(u["a"])(l,r,o,!1,null,null,null);f.options.__file="AboutPageMenu.vue";var p=f.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"staff-carousel"},[n("div",{staticClass:"title-container"},[n("h3",[t._v(t._s(this.title))])]),n("div",{staticClass:"staff-container"},[n("carousel",{staticClass:"staff-wrapper",attrs:{perPage:this.perPage,scrollPerPage:!1,navigationEnabled:!0,paginationEnabled:!1,navigationPrevLabel:this.printPrevIcon(),navigationNextLabel:this.printNextIcon()}},t._l(this.staff,function(e){return n("slide",{key:e.id},[n("div",{staticClass:"staff-item"},[n("div",{staticClass:"img-container"},[n("img",{attrs:{src:e.image,alt:e.name}})]),n("div",{staticClass:"name-wrapper"},[n("h3",[t._v(t._s(e.name))]),n("p",[t._v(t._s(e.position))])])])])}))],1)])},d=[],g=(n("c5f6"),n("0a63")),h={name:"staff-carousel",components:{Carousel:g["Carousel"],Slide:g["Slide"]},props:{title:{type:String,default:"OUR TEAM"},staff:{type:Array,default:function(){return[]}},perPage:{type:Number,default:3}},computed:{leftArrow:function(){return n("8d27")},rightArrow:function(){return n("d45b")}},methods:{printPrevIcon:function(){return'<span class="arrow arrow-left"><img src="'.concat(this.leftArrow,'"></span>')},printNextIcon:function(){return'<span class="arrow arrow-right"><img src="'.concat(this.rightArrow,'"></span>')}}},b=h,m=(n("e2a7"),Object(u["a"])(b,v,d,!1,null,null,null));m.options.__file="OurTeam.vue";var _=m.exports,C=n("a588"),y=n("bdc6"),w={name:"about-us",components:{PageOurService:y["default"],AboutTitle:C["a"],StaffCarousel:_,AboutUsMenu:p,PageBlock:s["default"]},data:function(){return{aboutMenu:this.$store.state.pageData.aboutUsMenu,staff:this.$store.state.pageData.aboutUs.staff}},props:{page:{type:String,default:""}}},k=w,A=(n("f26d"),Object(u["a"])(k,a,i,!1,null,null,null));A.options.__file="About.vue";e["default"]=A.exports}}]);
//# sourceMappingURL=chunk-11bc41fd.00b90e99.js.map