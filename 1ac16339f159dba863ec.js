(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{238:function(e,t,n){var content=n(266);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(18).default)("bb6a14c4",content,!0,{sourceMap:!1})},265:function(e,t,n){"use strict";n(238)},266:function(e,t,n){(t=n(17)(!1)).push([e.i,".page-company-roe{padding:30px 30px 150px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}",""]),e.exports=t},282:function(e,t,n){"use strict";n.r(t);var r=n(12),o=(n(34),n(7)),c=(n(3),{components:{},asyncData:function(e){return Object(o.a)(regeneratorRuntime.mark((function t(){var n,o,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.app,t.next=3,n.$http.all([n.$http.post("/tick/company/roeRank",{years:3,percentage:15})]);case 3:if(o=t.sent,c=Object(r.a)(o,1),!c[0]){t.next=8;break}return t.abrupt("return",{});case 8:case"end":return t.stop()}}),t)})))()},data:function(){return{}},methods:{}}),l=(n(265),n(13)),component=Object(l.a)(c,(function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"page-company-roe"},[this._v("roe排名")])}),[],!1,null,null,null);t.default=component.exports}}]);