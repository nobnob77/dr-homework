(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},38:function(e,t,n){e.exports=n(68)},43:function(e,t,n){},44:function(e,t,n){},66:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(13);n(43),n(31),n(44);var o=n(32),u=n(33),i=n.n(u),d=n(16),l=n(21),s=n(34),p=n.n(s).a.create({baseURL:"https://deploytraining2.orm.datarobot.com/",headers:{"Content-Type":"text/plain; charset=UTF-8","datarobot-key":"48893893-f796-8395-bec8-5d1f10f4c307"},auth:{username:"n-okabe+dru@nri.co.jp",password:"oxw__eHEdRmKMPpCLkzfcvKo1-HZUsIY"}}),f="POST_REQUEST",m=function(){return{type:f}},b="POST_SUCCESS",h="POST_FAILURE",E=function(e,t){return function(n){return n(m),p.post("/predApi/v1.0/deployments/5d0088ff87cf0a137f663382/predictions",Object(l.a)(e)+"\n"+Object(l.a)(t)).then(function(e){return n((t=e.data,{type:b,predict:t}));var t}).catch(function(e){return n({type:h,error:e})})}},v={header:["ID","\u30e1\u30f3\u30d0\u30fcID","\u30ed\u30fc\u30f3\u984d","\u30ed\u30fc\u30f3\u76ee\u7684\u30bf\u30a4\u30d7","\u30ed\u30fc\u30f3\u76ee\u7684","\u80a9\u66f8","\u52e4\u7d9a\u5e74\u6570","\u5bb6\u6240\u6709","\u5e74\u53ce\u5165","\u90f5\u4fbf\u756a\u53f7","\u4f4f\u6240\uff08\u5dde\uff09","\u30ed\u30fc\u30f3\u5bfe\u53ce\u5165","\u30b0\u30ec\u30fc\u30c9","\u30b5\u30d6\u30b0\u30ec\u30fc\u30c9","\u6ede\u7d0d\uff08\u904e\u53bb\u4e8c\u5e74\uff09","\u30af\u30ec\u30b8\u30c3\u30c8\u30e9\u30a4\u30f3\u958b\u59cb","\u7167\u4f1a\u6570\uff08\u904e\u53bb6\u30f6\u6708\uff09","\u76f4\u8fd1\u306e\u6ede\u7d0d\u304b\u3089\u306e\u6708\u6570","\u63a1\u96c6\u8a18\u9332\u304b\u3089\u306e\u6708\u6570","\u958b\u3044\u3066\u3044\u308b\u30a2\u30ab\u30a6\u30f3\u30c8\u6570","\u60aa\u8a55\u8a18\u9332\u6570","\u30ea\u30dc\u6255\u3044\u6b8b\u9ad8","\u30ea\u30dc\u67a0\u6d3b\u7528\u7387","\u904e\u53bb\u306e\u5168\u30a2\u30ab\u30a6\u30f3\u30c8\u6570","\u30ed\u30fc\u30f3\u30ea\u30b9\u30c8\u30b9\u30c6\u30fc\u30bf\u30b9\u521d\u671f\u5024","\u5fb4\u53ce\u6570\uff08\u904e\u53bb12\u30f6\u6708\uff09","\u524d\u56de\u306e\u60aa\u8a55\u4fa1\u304b\u3089\u306e\u6708\u6570","\u7533\u3057\u8fbc\u307f\u30bf\u30a4\u30d7","\u73fe\u884c\u6ede\u7d0d\u30a2\u30ab\u30a6\u30f3\u30c8\u6570","\u5fb4\u53ce\u7dcf\u984d","\u5168\u53e3\u5ea7\u6b8b\u9ad8"],features:[3296446,4068857,11200,"credit_card","Credit Card","Nokia Siemens Network",10,"OWN",108e3,"750xx","TX",12.52,"A","A2",0,"Oct-02",0,,,9,0,37822,.662,21,"f",0,,"INDIVIDUAL",0,0,187717],predicts:[]};var y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(d.a)({},e,{isFetching:!0,predicts:[]});case b:return Object(d.a)({},e,{isFetching:!1,predicts:t.predict.data});case h:return Object(d.a)({},e,{isFetching:!1,error:t.error});default:return e}},O=n(15);n(66);var g=function(e){return console.log(e.header,e.features,e.predicts),a.a.createElement("div",null,a.a.createElement("div",null,a.a.createElement("table",{border:"1"},a.a.createElement("thead",null,a.a.createElement("tr",null,e.header.map(function(e,t){return a.a.createElement("th",{key:t},e)}))),a.a.createElement("tbody",null,a.a.createElement("tr",null,e.features.map(function(e,t){return a.a.createElement("td",{key:t},e)}))))),a.a.createElement("input",{type:"button",value:"\u4e88\u6e2c\uff01",onClick:function(){return e.doPost(e.header,e.features)}}),a.a.createElement("div",null,"\u4e88\u6e2c\u7d50\u679c\uff1a",a.a.createElement("ul",null,e.predicts.map(function(e,t){return a.a.createElement("li",{key:t},e.predictionValues[0].value)}))))};var k=Object(O.b)(function(e){var t=e.header,n=e.features,r=e.predicts;return console.log(t,n,r),{header:t,features:n,predicts:r}},function(e){return{doPost:function(t,n){e(E(t,n))}}})(g),j=n(11),w=n(36),I=n(8),S=Object(j.c)(y,Object(j.a)(o.a,i.a));Object(c.render)(a.a.createElement(O.a,{store:S},a.a.createElement(w.a,{basename:""},a.a.createElement(I.a,{path:"/",component:k}))),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.cce18e0a.chunk.js.map