"use strict";(self.webpackChunkbookshell=self.webpackChunkbookshell||[]).push([[4928],{5680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>y});var n=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=i(r),f=a,y=u["".concat(s,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(y,l(l({ref:t},p),{},{components:r})):n.createElement(y,l({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:a,l[1]=c;for(var i=2;i<o;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4258:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var n=r(8168),a=(r(6540),r(5680));const o={},l=void 0,c={unversionedId:"DevOps/ELK/elasticsearch\u64cd\u4f5c",id:"DevOps/ELK/elasticsearch\u64cd\u4f5c",title:"elasticsearch\u64cd\u4f5c",description:"\u67e5\u770b\u7d22\u5f15",source:"@site/docs/DevOps/3-ELK/3-elasticsearch\u64cd\u4f5c.md",sourceDirName:"DevOps/3-ELK",slug:"/DevOps/ELK/elasticsearch\u64cd\u4f5c",permalink:"/bookshell/docs/DevOps/ELK/elasticsearch\u64cd\u4f5c",draft:!1,editUrl:"https://shouji1128955.github.io/bookshell/docs/DevOps/3-ELK/3-elasticsearch\u64cd\u4f5c.md",tags:[],version:"current",lastUpdatedBy:"zhanglaiqiang",lastUpdatedAt:1727765186,formattedLastUpdatedAt:"2024\u5e7410\u67081\u65e5",sidebarPosition:3,frontMatter:{},sidebar:"DevOpsElk",previous:{title:"ELK\u65e5\u5fd7\u544a\u8b66",permalink:"/bookshell/docs/DevOps/ELK/ELK\u65e5\u5fd7\u544a\u8b66"}},s={},i=[{value:"\u67e5\u770b\u7d22\u5f15",id:"\u67e5\u770b\u7d22\u5f15",level:3},{value:"\u67e5\u770b\u7d22\u5f15\u4e0b\u7684\u6587\u6863",id:"\u67e5\u770b\u7d22\u5f15\u4e0b\u7684\u6587\u6863",level:3}],p={toc:i},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h3",{id:"\u67e5\u770b\u7d22\u5f15"},"\u67e5\u770b\u7d22\u5f15"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},'GET _cat/indices?v\n{\n  "query": {\n    "match_all": {}\n  },\n  "size": 300\n}\n')),(0,a.yg)("h3",{id:"\u67e5\u770b\u7d22\u5f15\u4e0b\u7684\u6587\u6863"},"\u67e5\u770b\u7d22\u5f15\u4e0b\u7684\u6587\u6863"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"\n\n")))}d.isMDXComponent=!0}}]);