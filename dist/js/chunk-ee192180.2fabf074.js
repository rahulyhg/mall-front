(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ee192180"],{"224c":function(t,e,s){},2611:function(t,e,s){},"3efa":function(t,e,s){},"6b8b":function(t,e,s){"use strict";var i=s("be54"),n=s.n(i);n.a},"73ba":function(t,e,s){"use strict";var i=s("3efa"),n=s.n(i);n.a},"8f60":function(t,e,s){"use strict";var i=s("906c"),n=s.n(i);n.a},"906c":function(t,e,s){},9232:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page-block"},[s("div",{staticClass:"content-container"},[s("div",{staticClass:"part-left"},[s("about-title",{attrs:{title:t.pageTitle}}),s("about-content",{attrs:{content:t.pageDescription}})],1),s("div",{staticClass:"part-right"},[s("img",{attrs:{src:t.imageUrl,alt:"Gift Card"}})])]),s("div",{staticClass:"list-label"},[s("p",[t._v(t._s(t.t("see_the_list_below")))])]),s("gift-stores")],1)},n=[],a=s("f1d4"),r=s("a588"),c=s("ab05"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"gift-stores"},[s("div",{staticClass:"alphabet-header"},[s("div",{staticClass:"alphabet-header-wrapper"},t._l(t.$store.getters.alphabet[t.locale],function(e,i){return s("div",{key:i,staticClass:"alphabet-item"},[s("span",{class:{active:void 0!==t.grouped[e.toLowerCase()]&&0!==t.grouped[e.toLowerCase()].length},on:{click:function(s){t.filterList(e)}}},[t._v(t._s(e)+"\n          ")])])}),0)]),s("div",{staticClass:"store-list-container"},[s("div",{staticClass:"store-list-wrapper"},t._l(t.currentAlphabetFilter,function(e){return s("div",{key:e,staticClass:"alphabetic-container"},[t.grouped[e.toLowerCase()]?s("div",{staticClass:"alphabetic-container-inner"},[s("div",{staticClass:"alphabet-wrapper"},[s("div",{staticClass:"alphabet-item"},[t._v("\n              "+t._s(e)+"\n            ")]),s("div",{staticClass:"items-container"},t._l(t.grouped[e.toLowerCase()],function(e,i){return s("div",{key:i,staticClass:"item"},[void 0!==e?s("div",{staticClass:"item-wrapper"},[s("span",{staticClass:"name"},[t._v("\n                    "+t._s(e.name[t.locale])+"\n                  ")])]):t._e()])}),0)])]):t._e()])}),0)])])},l=[],u=(s("cadf"),s("551c"),s("097d"),{name:"gift-stores",data:function(){return{loading:!1,requestSent:!1,currentLetter:null,model:"giftStoresList",magSetter:"SET_GIFT_STORES"}},mounted:function(){this.$store.getters.giftStoresList.length||this.fetchItems()},computed:{currentAlphabetFilter:function(){var t=this.$store.getters.alphabet[this.locale];return null===this.currentLetter?t:[this.currentLetter]},grouped:function(){return this.groupByAlphabet(this.$store.getters.giftStoresList)}},methods:{fetchItems:function(){this.$store.dispatch("fetchItems",{api:this.$store.state.apiUrls.giftStores,model:this.model,setter:this.magSetter}).catch(function(t){console.error(t)})},filterList:function(t){this.currentLetter=t}}}),p=u,f=(s("73ba"),s("2877")),d=Object(f["a"])(p,o,l,!1,null,null,null);d.options.__file="GiftStores.vue";var h=d.exports,v={name:"gift-card",components:{GiftStores:h,ServiceList:c["a"],AboutContent:a["a"],AboutTitle:r["a"]},mounted:function(){this.$store.getters.giftCard?this.$store.commit("SET_LOADING_STATE",{model:"page",value:!1}):this.fetchPage()},props:{title:{type:String,default:""},content:{type:String,default:""},additionals:{type:Array,default:function(){return[]}}},data:function(){return{pageData:null,model:"giftCard"}},computed:{pageDataContent:function(){return this.$store.getters[this.model]?this.parsePageData(this.$store.getters[this.model][0].data):""},pageTitle:function(){return this.pageDataContent?this.pageDataContent[this.locale+"Title"]:""},pageDescription:function(){return this.pageDataContent?this.pageDataContent[this.locale+"Description"]:""},imageUrl:function(){return this.$store.getters[this.model]?this.$store.getters[this.model][0].photoUrl:""}},methods:{fetchPage:function(){this.$store.dispatch("getAboutPage",{url:this.$store.state.apiUrls.gift,model:this.model}).catch(function(t){console.error(t)})}}},g=v,m=(s("6b8b"),s("c5ae"),Object(f["a"])(g,i,n,!1,null,"06a54c62",null));m.options.__file="GiftCard.vue";e["default"]=m.exports},a588:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"about-title-container"},[s("h1",{staticClass:"title"},[t._v(" "+t._s(this.title))])])},n=[],a={name:"about-title",props:{title:{type:String,default:""}}},r=a,c=(s("d7c7"),s("2877")),o=Object(c["a"])(r,i,n,!1,null,null,null);o.options.__file="AboutPageTitle.vue";e["a"]=o.exports},a70a:function(t,e,s){"use strict";var i=s("eb08"),n=s.n(i);n.a},ab05:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"service-list-container"},[t.single?s("div",{staticClass:"service-list"},t._l(t.list,function(e,i){return s("div",{key:i,staticClass:"list-item",on:{click:function(s){t.toggle(e)}}},[s("div",{staticClass:"parent-container"},[t._m(0,!0),s("span",{staticClass:"name-wrapper"},[t._v(t._s(e.title))])]),s("div",{staticClass:"content",class:{open:-1!==t.openItem.indexOf(e)}},[s("p",[t._v("\n          "+t._s(e.content)+"\n        ")])])])}),0):s("div",{staticClass:"double"},[s("div",{staticClass:"service-list"},t._l(t.list,function(e,i){return i<7?s("div",{key:i,staticClass:"list-item",on:{click:function(s){t.toggle(e)}}},[s("div",{staticClass:"parent-container"},[t._m(1,!0),s("span",{staticClass:"name-wrapper"},[t._v(t._s(e.title))])]),s("div",{staticClass:"content",class:{open:-1!==t.openItem.indexOf(e)}},[s("p",[t._v("\n            "+t._s(e.content)+"\n          ")])])]):t._e()}),0),s("div",{staticClass:"service-list"},t._l(t.list,function(e,i){return i>=7?s("div",{key:i,staticClass:"list-item",on:{click:function(s){t.toggle(e)}}},[s("div",{staticClass:"parent-container"},[t._m(2,!0),s("span",{staticClass:"name-wrapper"},[t._v(t._s(e.title))])]),s("div",{staticClass:"content",class:{open:-1!==t.openItem.indexOf(e)}},[s("p",[t._v("\n            "+t._s(e.content)+"\n          ")])])]):t._e()}),0)])])},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",{staticClass:"icon-container"},[i("img",{attrs:{src:s("cdbb"),alt:""}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",{staticClass:"icon-container"},[i("img",{attrs:{src:s("cdbb"),alt:""}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",{staticClass:"icon-container"},[i("img",{attrs:{src:s("cdbb"),alt:""}})])}],a={name:"service-list",props:{list:{type:Array},single:{type:Boolean,default:!0}},data:function(){return{openItem:[]}},methods:{toggle:function(t){var e=this.openItem.indexOf(t);-1!==e?this.openItem.splice(e,1):this.openItem.push(t)}}},r=a,c=(s("a70a"),s("2877")),o=Object(c["a"])(r,i,n,!1,null,"63cbbeb9",null);o.options.__file="ServiceList.vue";e["a"]=o.exports},be54:function(t,e,s){},c5ae:function(t,e,s){"use strict";var i=s("2611"),n=s.n(i);n.a},d7c7:function(t,e,s){"use strict";var i=s("224c"),n=s.n(i);n.a},eb08:function(t,e,s){},f1d4:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"about-content-container"},[s("p",{domProps:{innerHTML:t._s(t.customContent)}})])},n=[],a=(s("a481"),{name:"about-content",props:{content:{type:String,default:""}},computed:{customContent:function(){return""!==this.content?"<p>".concat(this.content.replace(/\n/g,"<br />"),"</p>"):""}}}),r=a,c=(s("8f60"),s("2877")),o=Object(c["a"])(r,i,n,!1,null,null,null);o.options.__file="AboutPageContent.vue";e["a"]=o.exports}}]);
//# sourceMappingURL=chunk-ee192180.2fabf074.js.map