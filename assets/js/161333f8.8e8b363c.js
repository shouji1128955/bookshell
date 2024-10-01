"use strict";(self.webpackChunkbookshell=self.webpackChunkbookshell||[]).push([[3602],{5680:(e,r,t)=>{t.d(r,{xA:()=>u,yg:()=>f});var n=t(6540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),i=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=i(e.components);return n.createElement(c.Provider,{value:r},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=i(t),d=a,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||o;return t?n.createElement(f,l(l({ref:r},u),{},{components:t})):n.createElement(f,l({ref:r},u))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s[p]="string"==typeof e?e:a,l[1]=s;for(var i=2;i<o;i++)l[i]=t[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3987:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var n=t(8168),a=(t(6540),t(5680));const o={},l=void 0,s={unversionedId:"Prometheus/alertManager/alertmanager\u544a\u8b66\u914d\u7f6e",id:"Prometheus/alertManager/alertmanager\u544a\u8b66\u914d\u7f6e",title:"alertmanager\u544a\u8b66\u914d\u7f6e",description:"\u544a\u8b66\u6a21\u677f\u53c2\u8003",source:"@site/docs/Prometheus/alertManager/1.alertmanager\u544a\u8b66\u914d\u7f6e.md",sourceDirName:"Prometheus/alertManager",slug:"/Prometheus/alertManager/alertmanager\u544a\u8b66\u914d\u7f6e",permalink:"/bookshell/docs/Prometheus/alertManager/alertmanager\u544a\u8b66\u914d\u7f6e",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Prometheus/alertManager/1.alertmanager\u544a\u8b66\u914d\u7f6e.md",tags:[],version:"current",lastUpdatedBy:"zhanglaiqiang",lastUpdatedAt:1727763610,formattedLastUpdatedAt:"2024\u5e7410\u67081\u65e5",sidebarPosition:1,frontMatter:{},sidebar:"PrometheusAlert"},c={},i=[{value:"\u544a\u8b66\u6a21\u677f\u53c2\u8003",id:"\u544a\u8b66\u6a21\u677f\u53c2\u8003",level:2}],u={toc:i},p="wrapper";function m(e){let{components:r,...t}=e;return(0,a.yg)(p,(0,n.A)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"\u544a\u8b66\u6a21\u677f\u53c2\u8003"},"\u544a\u8b66\u6a21\u677f\u53c2\u8003"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-golang"},'\ngroups:\nname: clickhouse-rules\nrules:\nalert: clickhouse\u5f53\u524d\u6d3b\u8dc3\u7684\u8fde\u63a5\u6570\u8fc7\u591a\nexpr: ClickHouseMetrics_TCPConnection > 2\nfor: 1m\nlabels:\nlevel: warning\nannotations:\ndescription: "clickhouse\u6570\u636e\u5e93\u5f53\u524d\u6d3b\u8dc3\u7684\u8fde\u63a5\u6570: {{ $ value }}" \n\u8fd9\u662f\u544a\u8b66\u8868\u8fbe\u5f0f\n \n\u8fd9\u4e0b\u9762\u662f\u6211\u7684\u6a21\u677f\uff1a\n{{ $var := .externalURL}}{{ range $k,$v:=.alerts }}{{if eq $v.status "resolved"}}**[Prometheus\u6062\u590d\u4fe1\u606f]({{$v.generatorURL}})**\n*[{{$v.labels.alertname}}]({{$var}})*\n\u544a\u8b66\u72b6\u6001\uff1a<font color="green">\u5df2\u6062\u590d</font>\n\u5f00\u59cb\u65f6\u95f4\uff1a{{$v.startsAt}}\n\u7ed3\u675f\u65f6\u95f4\uff1a{{$v.endsAt}} \n\u6545\u969c\u4e3b\u673aIP\uff1a{{$v.labels.instance}}\n**{{$v.annotations.description}}**{{else}}\ud83d\udd14\ud83d\udd14\ud83d\udd14**[Prometheus \u62a5\u8b66\u901a\u77e5]({{ $v.generatorURL }})**\ud83d\udd14\ud83d\udd14\ud83d\udd14\n\u544a\u8b66\u540d\u79f0\uff1a**[{{$v.labels.alertname}}]({{$var}})**\n\u544a\u8b66\u72b6\u6001\uff1a{{ $v.labels.level }}\n\u5f00\u59cb\u65f6\u95f4\uff1a{{ TimeFormat $v.startsAt "2006-01-02 15:04:05" }}\n\u5b9e\u4f8b\u5730\u5740\uff1a{{ $v.labels.instance }}\n\u6545\u969c\u8be6\u60c5\uff1a**{{ $v.annotations.description }}**\n{{end }}\n<font color="red">\uff01\uff01\uff01\u8bf7\u53ca\u65f6\u5904\u7406\uff01\uff01\uff01</font>\n{{end }}\n\n\u6211\u5b9e\u9645\u8fde\u63a5\u6570\u662f1\u4e86\u3002\u4e3a\u5565\u63a8\u9001\u7684\u6587\u672c\u8fd8\u662f3\u5462\uff1f\n\n')))}m.isMDXComponent=!0}}]);