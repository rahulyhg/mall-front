(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b6c717aa"],{1456:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about-company-container container"},[n("about-title",{attrs:{title:t.pageTitle}}),n("div",{staticClass:"subtitle"},[n("h3",[t._v(t._s(t.subtitle))])]),n("about-content",{attrs:{content:t.pageDescription}})],1)},i=[],o=n("a588"),s=n("f1d4"),r={name:"about-company",components:{AboutContent:s["a"],AboutTitle:o["a"]},mounted:function(){this.$store.getters[this.model]||this.fetchPage()},data:function(){return{model:"aboutCompany",title:"about company",content:"RAKEEN UPTOWN DEWELOPMENT | TBILISI MALL Since opening in 2012, Tbilisi Mall (TM), the first outstanding retail and leisure development in the Caucasus region, has managed to bring together a significant number of internationally acknowledged brands to attract more than three million visitors per year. Tbilisi Mall nowadays is unrivaled as the most successful family shopping and entertainment center and its further development guarantees its transformation into the most attractive multifunctional destination. Tbilisi Mall is fully operated by Rakeen Uptown Development, which itself is owned by Rakeen Development LLC and IFC (International Finance Corporation). Rakeen Development LLC was established by RAKEEN Development, the largest developer of Ras al- Khaimah Emirate, UAE. RAKEEN’s business portfolio is diversified and spread across the globe. In 2006, the Ruler of Ras al-khaimah, HH Saud Bin al Qasimi, seeing Georgia as the most attractive direction to invest in, developed a plan to carry out projects aimed at establishing new worldwide standards of construction and conceptual development and invested more than 115 mln USD in Tbilisi Mall, thus making Rakeen Development UAE one of the largest investors in Georgia. LLC Rakeen Uptown Development is one of the fastest dynamically growing companies in the region and this is reflected in its financial data. In 2012-13, the total revenue of the company increased by 110 %, gross profit by 59 % and EBIDTA by more than 1000% compared to 2012. These impressive financial figures were achieved by a highly qualified, modern and responsible management team."}},computed:{locale:function(){return this.locale},pageDataContent:function(){return this.$store.getters[this.model]?JSON.parse(this.$store.getters[this.model][0].data):""},pageTitle:function(){return this.pageDataContent?this.pageDataContent[this.locale+"Title"]:""},pageDescription:function(){return this.pageDataContent?this.pageDataContent[this.locale+"Description"]:""},subtitle:function(){return this.pageDataContent?this.pageDataContent[this.locale+"Subtitle"]:""}},methods:{fetchPage:function(){this.$store.dispatch("getAboutPage",{url:this.$store.state.apiUrls.aboutCompany,model:this.model}).catch(function(t){console.error(t)})}}},l=r,c=(n("8af7"),n("2877")),u=Object(c["a"])(l,a,i,!1,null,null,null);u.options.__file="AboutCompany.vue";e["default"]=u.exports},"168f":function(t,e,n){},"224c":function(t,e,n){},"8af7":function(t,e,n){"use strict";var a=n("168f"),i=n.n(a);i.a},"8f60":function(t,e,n){"use strict";var a=n("906c"),i=n.n(a);i.a},"906c":function(t,e,n){},a588:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about-title-container"},[n("h1",{staticClass:"title"},[t._v(" "+t._s(this.title))])])},i=[],o={name:"about-title",props:{title:{type:String,default:""}}},s=o,r=(n("d7c7"),n("2877")),l=Object(r["a"])(s,a,i,!1,null,null,null);l.options.__file="AboutPageTitle.vue";e["a"]=l.exports},d7c7:function(t,e,n){"use strict";var a=n("224c"),i=n.n(a);i.a},f1d4:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about-content-container"},[n("p",{domProps:{innerHTML:t._s(t.customContent)}})])},i=[],o=(n("a481"),{name:"about-content",props:{content:{type:String,default:""}},computed:{customContent:function(){return""!==this.content?"<p>".concat(this.content.replace(/\n/g,"<br />"),"</p>"):""}}}),s=o,r=(n("8f60"),n("2877")),l=Object(r["a"])(s,a,i,!1,null,null,null);l.options.__file="AboutPageContent.vue";e["a"]=l.exports}}]);
//# sourceMappingURL=chunk-b6c717aa.f32f9686.js.map