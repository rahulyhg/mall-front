(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cf89c312"],{"34f5":function(t,e,s){t.exports=s.p+"img/bookmarked.7368eb41.svg"},"612d":function(t,e,s){"use strict";var o=s("63b5"),i=s.n(o);i.a},"63b5":function(t,e,s){},"63eb":function(t,e,s){},6615:function(t,e,s){t.exports=s.p+"img/bookmark.b9cbecfa.svg"},"7d59":function(t,e,s){"use strict";var o=s("63eb"),i=s.n(o);i.a},8553:function(t,e,s){},acdd:function(t,e,s){"use strict";var o=s("8553"),i=s.n(o);i.a},afe2:function(t,e,s){"use strict";var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"news-single",attrs:{id:t.item._id}},[o("div",{staticClass:"single-wrapper"},[o("div",{staticClass:"half-col single-left"},[o("div",{staticClass:"image-container"},[o("img",{attrs:{src:t.item.photoUrl,alt:t.item.name}})])]),o("div",{staticClass:"half-col single-right"},[o("div",{staticClass:"close-button"},[t.redirect?o("router-link",{staticClass:"close-button-a",attrs:{to:t.closeUrl()}},[o("default-icon",{staticClass:"hamburger-close-button",attrs:{icon:"close"},on:{click:t.closeEvent}})],1):o("a",{staticClass:"close-button-a"},[o("default-icon",{staticClass:"hamburger-close-button",attrs:{icon:"close"},on:{click:t.closeEvent}})],1)],1),o("div",{staticClass:"bookmark"},[o("div",{on:{click:function(e){t.bookmark(t.item._id)}}},[o("img",{directives:[{name:"show",rawName:"v-show",value:!t.bookmarked.length,expression:"!bookmarked.length"}],attrs:{src:s("6615"),alt:"Bookmark"}}),o("img",{directives:[{name:"show",rawName:"v-show",value:t.bookmarked.length,expression:"bookmarked.length"}],attrs:{src:s("34f5"),alt:"Bookmark"}})])]),o("div",{staticClass:"title-container"},[o("h2",{staticClass:"title"},[t._v(t._s(t.item.name[t.locale]))]),t.store.length?o("h4",{staticClass:"sub-title"},[t._v("\n          "+t._s(t.store[0].name[t.locale])+"\n        ")]):t._e()]),o("div",{staticClass:"description-container"},[o("p",{domProps:{innerHTML:t._s(t.item.description[t.locale])}})]),o("div",{staticClass:"socials-container"},[o("social-sharing",{staticClass:"share-inner",attrs:{url:t.currentFullUrl,title:t.item.name[t.locale],description:t.item.description[t.locale]},inlineTemplate:{render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"socials-inner-container"},[s("network",{attrs:{network:"facebook"}},[s("div",{staticClass:"social-item"},[s("span",{staticClass:"icon"},[s("font-awesome-icon",{attrs:{icon:{prefix:"fab",iconName:"facebook-f"}}})],1),s("span",{staticClass:"label"},[t._v("share")])])]),s("network",{attrs:{network:"twitter"}},[s("div",{staticClass:"social-item"},[s("span",{staticClass:"icon"},[s("font-awesome-icon",{attrs:{icon:{prefix:"fab",iconName:"twitter"}}})],1),s("span",{staticClass:"label"},[t._v("tweet")])])]),s("network",{attrs:{network:"linkedin"}},[s("div",{staticClass:"social-item"},[s("span",{staticClass:"icon"},[s("font-awesome-icon",{attrs:{icon:{prefix:"fab",iconName:"linkedin-in"}}})],1),s("span",{staticClass:"label"},[t._v("share")])])]),s("div",{staticClass:"social-item",on:{click:function(e){t.copyUrl("news-item-current-url")}}},[s("input",{attrs:{id:"news-item-current-url",type:"hidden"},domProps:{value:t.currentFullUrl}}),s("span",{staticClass:"icon"},[s("font-awesome-icon",{attrs:{icon:"link"}})],1),s("span",{staticClass:"label"},[t._v(t._s(t.t("copyLink")))])])],1)},staticRenderFns:[]}})],1)])])])},i=[],n=s("5eb6"),a={name:"news-single",components:{DefaultIcon:n["a"]},props:{item:{type:Object,default:function(){return{}}},redirect:{type:Boolean,default:!0}},mounted:function(){this.$store.getters.storesList.length||this.$store.dispatch("fetchItems",{model:"storesList",api:this.$store.state.apiUrls["storesList"],setter:"SET_STORE_LIST"}).catch(function(t){console.error(t)})},computed:{bookmarked:function(){var t=this;return this.$store.getters.bookmarked.filter(function(e){if(e)return e._id===t.item._id})},store:function(){var t=this;return this.$store.getters.storesList.filter(function(e){if(e._id===t.item.entityId)return!0})}},methods:{closeEvent:function(){this.$emit("close")},closeUrl:function(){var t="single"!==this.$route.params.cat?this.$route.params.cat:"";return"/".concat(this.locale,"/whats-new/").concat(t)},bookmark:function(t){var e=this,s=this.$store.getters.user;s?this.$http.post(this.$store.state.apiUrls.bookmark,{userToken:s.token,itemId:t}).then(function(){e.$notify({group:"notify",type:"success",title:e.t("bookmarked_successfully")}),e.$store.dispatch("getBookmarks").catch(function(t){console.error(t)})}).catch(function(t){console.error(t),e.$notify({group:"notify",type:"error",title:"Error",text:t})}):this.$router.push({name:"login"})}}},r=a,c=(s("acdd"),s("2877")),l=Object(c["a"])(r,o,i,!1,null,null,null);l.options.__file="NewsSingle.vue";e["a"]=l.exports},b51b:function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bookmarks-list"},[s("block-header-standard",{attrs:{title:t.t("bookmarks")}}),s("div",{staticClass:"list-container-outer"},[s("div",{staticClass:"list-wrapper"},[s("bookmarks-list-component")],1)])],1)},i=[],n=s("1d62"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bookmarks-list-component"},[s("ul",t._l(t.$store.getters.bookmarked,function(e,o){return e?s("li",{key:o},[s("div",{staticClass:"news-wrapper"},[s("news-single",{attrs:{item:e,redirect:!1},on:{close:function(s){t.bookmark(e._id)}}})],1)]):t._e()}),0)])},r=[],c=s("afe2"),l={name:"bookmarks-list-component",components:{NewsSingle:c["a"]},mounted:function(){this.$store.getters.user||this.$router.push({name:"login"}),this.$store.getters.bookmarked.length||this.$store.dispatch("getBookmarks").catch(function(t){console.error(t)})},methods:{bookmark:function(t){var e=this,s=this.$store.getters.user;s?this.$http.post(this.$store.state.apiUrls.bookmark,{userToken:s.token,itemId:t}).then(function(){e.$notify({group:"notify",type:"success",title:e.t("bookmark_deleted_successfully")}),e.$store.dispatch("getBookmarks").catch(function(t){console.error(t)})}).catch(function(t){console.error(t),e.$notify({group:"notify",type:"error",title:"Error",text:t})}):this.$router.push({name:"login"})}}},u=l,m=(s("612d"),s("2877")),d=Object(m["a"])(u,a,r,!1,null,null,null);d.options.__file="BookmarksList.vue";var k=d.exports,f={name:"bookmarks-page",components:{BookmarksListComponent:k,BlockHeaderStandard:n["a"]}},p=f,h=(s("7d59"),Object(m["a"])(p,o,i,!1,null,null,null));h.options.__file="Bookmarks.vue";e["default"]=h.exports}}]);
//# sourceMappingURL=chunk-cf89c312.f6ae3613.js.map