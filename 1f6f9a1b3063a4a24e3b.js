(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{235:function(t,e,n){var content=n(260);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("1d1dea55",content,!0,{sourceMap:!1})},236:function(t,e,n){var content=n(262);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("e99c842c",content,!0,{sourceMap:!1})},259:function(t,e,n){"use strict";n(235)},260:function(t,e,n){(e=n(17)(!1)).push([t.i,".base-charts{margin-left:auto;margin-right:auto;float:left}",""]),t.exports=e},261:function(t,e,n){"use strict";n(236)},262:function(t,e,n){(e=n(17)(!1)).push([t.i,".page-company-contrast{padding:30px 30px 150px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.page-company-contrast .contrast-head{width:800px;margin:20px auto 40px;display:flex;justify-content:center}.page-company-contrast .contrast-head .btn{width:80px;height:32px;color:#fff;cursor:pointer;line-height:32px;text-align:center;font-size:14px;background-color:#3a6ae0}.page-company-contrast .contrast-head .btn:hover{opacity:.8}.page-company-contrast .contrast-head .btn:active{opacity:1}.page-company-contrast .contrast-sheet{display:flex;width:1600px;margin:0 auto}.page-company-contrast .contrast-sheet-type{height:60px;display:flex;justify-content:center}.page-company-contrast .contrast-sheet-type-item{height:28px;width:80px;text-align:center;line-height:28px;margin:0 15px;background-color:#fff;border:1px solid #e0e0e0;border-radius:5px;cursor:pointer}.page-company-contrast .contrast-sheet-type-item-active{color:#fff;border-color:#3a6ae0;background-color:#3a6ae0}.page-company-contrast .contrast-sheet-field{width:350px}.page-company-contrast .contrast-sheet-field-item{font-size:12px;line-height:34px;padding-left:10px;display:flex;background-color:#dae1f3;border-bottom:1px solid #9b9b9b}.page-company-contrast .contrast-sheet-field-item-report-date{height:68px;line-height:68px}.page-company-contrast .contrast-sheet-field-item .mv-icon-stock-trend{color:#3a6ae0;margin-left:5px;font-size:18px;cursor:pointer}.page-company-contrast .contrast-sheet-content{display:flex}.page-company-contrast .contrast-sheet-body{width:1192px;white-space:nowrap;overflow:scroll;height:4102px}.page-company-contrast .contrast-sheet-head-date{line-height:34px;height:67px;width:201px;min-width:201px;border:1px solid #e0e0e0;border-left-width:0}.page-company-contrast .contrast-sheet-head-date .company{display:flex}.page-company-contrast .contrast-sheet-head-date .company-date{text-align:center;border-bottom:1px solid #e0e0e0}.page-company-contrast .contrast-sheet-head-date .company-item{flex:1;text-align:center;border-right:1px solid #e0e0e0}.page-company-contrast .contrast-sheet-head-date .company-item:last-child{border-right-width:0}.page-company-contrast .contrast-sheet-report-date{width:202px;line-height:34px;text-align:center;display:flex}.page-company-contrast .contrast-sheet-report-date .cloum{flex:1;border-right:1px solid #e0e0e0}.page-company-contrast .contrast-sheet-report-date .field{width:100px;height:34px;line-height:34px;border-bottom:1px solid #e0e0e0}.page-company-contrast .contrast-sheet-report-date .field-report-date{height:68px}.page-company-contrast .contrast-sheet-dialog{width:900px}.page-company-contrast .contrast-sheet-dialog .el-dialog__body{height:400px}",""]),t.exports=e},273:function(t,e,n){"use strict";n.r(e);n(36),n(29),n(40),n(41),n(37);var o=n(12),r=(n(34),n(7)),c=n(3),l=n.n(c),h=(n(159),n(35),{props:{name:{type:String,default:"base"},option:{type:Object,default:null},width:{type:String,default:"100px"},height:{type:String,default:"200px"},mapJson:{type:Object,default:null}},watch:{option:function(t){this.chart.setOption(t)}},data:function(){return{mapStyle:{width:this.width,height:this.height},chart:null}},mounted:function(){var t=this;this.$nextTick((function(){t.echartsInit()}))},methods:{echartsInit:function(){this.chart=this.$echarts.init(this.$refs[this.name]),this.chart.setOption(this.option)}}}),d=(n(259),n(13)),m={components:{CEchartsBase:Object(d.a)(h,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"echarts",attrs:{id:"echarts"}},[e("div",{ref:this.name,staticClass:"base-charts base-charts",style:this.mapStyle})])}),[],!1,null,null,null).exports},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,c,data,h,d,m,f,y,x,v,w,_,k;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.app,e.next=3,n.$http.all([n.$http.post("/tick/company/contrast",{sheetType:"balanceSheet",codes:["600009","600004"]}),n.$http.get("/sys/dict/type",{type:"balance_sheet_field"})]);case 3:if(r=e.sent,c=Object(o.a)(r,2),data=c[0],h=c[1],!data||!h){e.next=20;break}return d=l.a.get(data,"data"),m=l.a.get(h,"data"),f={},l.a.forEach(m,(function(t,e){var n=l.a.get(t,"value");f["".concat(n)]=null})),y=l.a.get(d,0),x=l.a.get(d,1),v=l.a.maxBy(d,(function(t){return l.a.size(l.a.get(t,"list"))})),w=[],_=[],k=[l.a.get(l.a.first(d),"company"),l.a.get(l.a.last(d),"company")],l.a.forEach(l.a.get(v,"list"),(function(t,e){var n=l.a.get(l.a.get(y,"list"),e),o=l.a.get(l.a.get(x,"list"),e);l.a.assign(f,{code:l.a.get(t,"code"),reportDate:l.a.get(t,"reportDate")}),_.push(l.a.get(t,"reportDate")),w.push([n||f,o||f])})),e.abrupt("return",{reportDates:_,companys:k,options:[[l.a.first(k)],[l.a.last(k)]],sheetType:"balanceSheet",sheetData:w,fieldList:m});case 20:case"end":return e.stop()}}),e)})))()},data:function(){return{companys:[{code:null},{code:null}],options:[],value:null,dialog:{visible:!1,title:"提示",option:{}},visibleChange:{index:0}}},methods:{get:function(t,e){return l.a.get(t,e)},changeSheet:function(){var t=arguments,e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:o=t.length>0&&void 0!==t[0]?t[0]:"balanceSheet",e.sheetType=o,e.contrastCompany(o);case 3:case"end":return n.stop()}}),n)})))()},batchDict:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("/tick/company/batchDict");case 2:e.sent;case 4:case"end":return e.stop()}}),e)})))()},onVisible:function(t,e){t&&(this.visibleChange.index=e)},remoteMethod:function(t){this.queryCompany(t)},queryCompany:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var data;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.$http.get("/tick/company/queryParam",{param:t});case 2:(data=n.sent)&&e.$set(e.options,l.a.get(e.visibleChange,"index"),l.a.get(data,"data"));case 4:case"end":return n.stop()}}),n)})))()},isIcon:function(t){return!l.a.includes(["reportDate","asset","flowAss","liab","flowLiab","wrongFlowLiab","equity"],t)},onField:function(t){var e=l.a.get(t,"value"),n=[],o=[],r=[];l.a.forEach(this.sheetData,(function(t,c){var h=l.a.first(t);n.push(l.a.get(h,"reportDate")),o.push(l.a.get(h,e));var d=l.a.last(t);r.push(l.a.get(d,e))}));var c=l.a.get(t,"label"),h=l.a.map(this.companys,"name");this.dialog={visible:!0,title:c,option:{title:{text:"".concat(c,"趋势"),subtext:""},tooltip:{trigger:"axis"},legend:{data:h},toolbox:{show:!0,feature:{dataZoom:{yAxisIndex:"none"},dataView:{readOnly:!1},magicType:{type:["line","bar"]},restore:{},saveAsImage:{}}},xAxis:{type:"category",boundaryGap:!1,data:n},yAxis:{type:"value",axisLabel:{formatter:"{value}(万元)"}},series:[{name:h[0],type:"line",data:o,markPoint:{data:[{type:"max",name:"最大值"},{type:"min",name:"最小值"}]},markLine:{data:[{type:"average",name:"平均值"}]}},{name:h[1],type:"line",data:r,markPoint:{data:[{name:"周最低",value:-2,xAxis:1,yAxis:-1.5}]},markLine:{data:[{type:"average",name:"平均值"},[{symbol:"none",x:"90%",yAxis:"max"},{symbol:"circle",label:{position:"start",formatter:"最大值"},type:"max",name:"最高点"}]]}}]}}},contrastCompany:function(){var t=arguments,e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,c,h,d,m,data,f,y,x,v,w,_,k,C,S;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r=t.length>0&&void 0!==t[0]?t[0]:"balanceSheet",c="balance_sheet_field",n.t0=r,n.next="balanceSheet"===n.t0?5:"incomeSheet"===n.t0?7:"cashFlowSheet"===n.t0?9:11;break;case 5:return c="balance_sheet_field",n.abrupt("break",11);case 7:return c="income_sheet_field",n.abrupt("break",11);case 9:return c="cash_flow_sheet_field",n.abrupt("break",11);case 11:return h=l.a.map(e.companys,(function(t){return l.a.get(t,"code")})),n.next=14,e.$http.all([e.$http.post("/tick/company/contrast",{sheetType:r,codes:h}),e.$http.get("/sys/dict/type",{type:c})]);case 14:d=n.sent,m=Object(o.a)(d,2),data=m[0],f=m[1],data&&f&&(y=l.a.get(data,"data"),x=l.a.get(f,"data"),v={},l.a.forEach(x,(function(t,e){var n=l.a.get(t,"value");v["".concat(n)]=null})),w=l.a.get(y,0),_=l.a.get(y,1),k=l.a.maxBy(y,(function(t){return l.a.size(l.a.get(t,"list"))})),C=[],S=[],e.companys=[l.a.get(l.a.first(y),"company"),l.a.get(l.a.last(y),"company")],l.a.forEach(l.a.get(k,"list"),(function(t,e){var n=l.a.get(l.a.get(w,"list"),e),o=l.a.get(l.a.get(_,"list"),e);l.a.assign(v,{code:l.a.get(t,"code"),reportDate:l.a.get(t,"reportDate")}),S.push(l.a.get(t,"reportDate")),C.push([n||v,o||v])})),e.sheetData=C,e.fieldList=x);case 19:case"end":return n.stop()}}),n)})))()}}},f=(n(261),Object(d.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-company-contrast"},[n("div",{staticClass:"contrast-head"},[t._l(t.companys,(function(e,o){return n("el-select",{key:o,attrs:{remote:"",filterable:"","remote-method":t.remoteMethod,placeholder:"请输入代码/名称/拼音"},on:{"visible-change":function(e){return t.onVisible(e,o)}},model:{value:e.code,callback:function(n){t.$set(e,"code",n)},expression:"company.code"}},t._l(t.options[o],(function(e,o){return n("el-option",{key:o,attrs:{label:t.get(e,"name"),value:t.get(e,"code")}},[n("span",[t._v(t._s(t.get(e,"code")))]),n("span",[t._v(t._s(t.get(e,"name")))])])})),1)})),n("div",{staticClass:"btn",on:{click:function(e){return t.contrastCompany()}}},[t._v("对比")])],2),n("div",{staticClass:"contrast-sheet-type"},[n("div",{staticClass:"contrast-sheet-type-item",class:{"contrast-sheet-type-item-active":"balanceSheet"===t.sheetType},on:{click:function(e){return t.changeSheet("balanceSheet")}}},[t._v("资产负债表")]),n("div",{staticClass:"contrast-sheet-type-item",class:{"contrast-sheet-type-item-active":"incomeSheet"===t.sheetType},on:{click:function(e){return t.changeSheet("incomeSheet")}}},[t._v("利润表")]),n("div",{staticClass:"contrast-sheet-type-item",class:{"contrast-sheet-type-item-active":"cashFlowSheet"===t.sheetType},on:{click:function(e){return t.changeSheet("cashFlowSheet")}}},[t._v("现金流量表")])]),n("div",{staticClass:"contrast-sheet"},[n("div",{staticClass:"contrast-sheet-field"},t._l(t.fieldList,(function(e,o){return n("div",{key:o,staticClass:"contrast-sheet-field-item",class:{"contrast-sheet-field-item-report-date":"reportDate"===e.value}},[t._v(t._s(e.label)),t.isIcon(e.value)?n("div",{staticClass:"mv-icon mv-icon-stock-trend",on:{click:function(n){return t.onField(e)}}}):t._e()])})),0),n("div",{staticClass:"contrast-sheet-body"},[n("div",{staticClass:"contrast-sheet-content"},t._l(t.reportDates,(function(e,o){return n("div",{key:o,staticClass:"contrast-sheet-head-date"},[n("div",{staticClass:"company-date"},[t._v(t._s(e))]),n("div",{staticClass:"company"},t._l(t.companys,(function(e,o){return n("div",{key:o,staticClass:"company-item"},[t._v(t._s(e.name))])})),0)])})),0),n("div",{staticClass:"contrast-sheet-content"},t._l(t.sheetData,(function(e,o){return n("div",{key:o,staticClass:"contrast-sheet-report-date"},t._l(e,(function(e,o){return n("div",{key:o,staticClass:"cloum"},t._l(t.fieldList,(function(o,r){return"reportDate"!==o.value?n("div",{key:r,staticClass:"field",class:{"field-report-date":"reportDate"===o.value}},[t._v(t._s(t.get(e,t.get(o,"value"))))]):t._e()})),0)})),0)})),0)])]),n("el-dialog",{attrs:{title:t.dialog.title,visible:t.dialog.visible,"custom-class":"contrast-sheet-dialog"},on:{"update:visible":function(e){return t.$set(t.dialog,"visible",e)}}},[n("c-echarts-base",{attrs:{option:t.dialog.option,width:"860px",height:"400px"}})],1)],1)}),[],!1,null,null,null));e.default=f.exports}}]);