(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-71a4b11b"],{"3b3f":function(t,s,e){"use strict";var n=e("f8bf"),i=e.n(n);i.a},5333:function(t,s,e){},"93a9":function(t,s,e){"use strict";var n=e("5333"),i=e.n(n);i.a},d74d:function(t,s,e){"use strict";var n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"subscribed-list-component"},[e("ul",t._l(t.$store.getters.subscribed,function(s,n){return e("li",{key:n},[e("div",{staticClass:"img-container"},[e("img",{attrs:{src:s.logoUrl,alt:s.name[t.locale]}})]),e("div",{staticClass:"close-container",on:{click:function(e){t.deleteEvent(s._id)}}},[e("div",{staticClass:"close-button"})])])}),0)])},i=[],c=(e("cadf"),e("551c"),e("097d"),{name:"subscribed-list-component",mounted:function(){this.$store.getters.user||this.$router.push({name:"login"}),this.$store.getters.subscribed.length||this.$store.dispatch("getSubscribed").then(function(){console.log("success")}).catch(function(t){console.log(t)})},methods:{deleteEvent:function(t){var s=this;this.$http.post(this.$store.state.apiUrls.subscribe,{userToken:this.$store.getters.user.token,storeId:t}).then(function(){s.$store.dispatch("getSubscribed").then(function(){console.log("success")}).catch(function(t){console.log(t)}),s.$notify({group:"notify",type:"success",title:s.t("subscribed_successfully")})})}}}),o=c,r=(e("93a9"),e("2877")),u=Object(r["a"])(o,n,i,!1,null,null,null);u.options.__file="SubscribedList.vue";s["a"]=u.exports},ee8e:function(t,s,e){"use strict";e.r(s);var n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"subscribed-list"},[e("block-header-standard",{attrs:{title:t.t("subscribe_list_stores")}}),e("div",{staticClass:"list-container-outer"},[e("div",{staticClass:"list-wrapper"},[e("subscribed-list-component")],1)])],1)},i=[],c=e("1d62"),o=e("d74d"),r={name:"subscribed-page",components:{SubscribedListComponent:o["a"],BlockHeaderStandard:c["a"]}},u=r,l=(e("3b3f"),e("2877")),a=Object(l["a"])(u,n,i,!1,null,null,null);a.options.__file="Subscribed.vue";s["default"]=a.exports},f8bf:function(t,s,e){}}]);
//# sourceMappingURL=chunk-71a4b11b.37d99416.js.map