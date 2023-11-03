"use strict";(self.webpackChunkbookshell=self.webpackChunkbookshell||[]).push([[3563],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},i="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),i=c(r),f=o,m=i["".concat(u,".").concat(f)]||i[f]||d[f]||a;return r?n.createElement(m,l(l({ref:t},s),{},{components:r})):n.createElement(m,l({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=f;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p[i]="string"==typeof e?e:o,l[1]=p;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},55592:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={},l=void 0,p={unversionedId:"Sre/\u9762\u8bd5\u9898/kubernetes\u9762\u8bd5\u9898",id:"Sre/\u9762\u8bd5\u9898/kubernetes\u9762\u8bd5\u9898",title:"kubernetes\u9762\u8bd5\u9898",description:"pause\u5bb9\u5668",source:"@site/docs/Sre/3-\u9762\u8bd5\u9898/2.kubernetes\u9762\u8bd5\u9898.md",sourceDirName:"Sre/3-\u9762\u8bd5\u9898",slug:"/Sre/\u9762\u8bd5\u9898/kubernetes\u9762\u8bd5\u9898",permalink:"/en/docs/Sre/\u9762\u8bd5\u9898/kubernetes\u9762\u8bd5\u9898",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Sre/3-\u9762\u8bd5\u9898/2.kubernetes\u9762\u8bd5\u9898.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"SreMianshi",next:{title:"\u76d1\u63a7",permalink:"/en/docs/Sre/\u9762\u8bd5\u9898/\u76d1\u63a7"}},u={},c=[{value:"pause\u5bb9\u5668",id:"pause\u5bb9\u5668",level:2},{value:"\u7f51\u7edc\u901a\u4fe1",id:"\u7f51\u7edc\u901a\u4fe1",level:2},{value:"\u5e38\u7528\u547d\u4ee4",id:"\u5e38\u7528\u547d\u4ee4",level:2}],s={toc:c},i="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(i,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"pause\u5bb9\u5668"},"pause\u5bb9\u5668"),(0,o.kt)("p",null,"Pause\u5bb9\u5668\uff0c\u53c8\u53ebInfra\u5bb9\u5668\uff0cPause\u5bb9\u5668\u5bf9\u5e94\u7684\u955c\u50cf\u5c5e\u4e8ek8s\u5e73\u53f0\u7684\u4e00\u90e8\u5206\uff0c\u9664\u4e86pause\u5bb9\u5668\uff0c\u6bcf\u4e2apod\u8fd8\u5305\u542b\u4e00\u4e2a\u6216\u8005\u591a\u4e2a\u7d27\u5bc6\u76f8\u5173\u7684\u7528\u6237\u4e1a\u52a1\u5bb9\u5668"),(0,o.kt)("p",null,"pause\u5bb9\u5668\u7684\u4f5c\u7528"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"(1).pod\u91cc\u7684\u591a\u4e2a\u4e1a\u52a1\u5bb9\u5668\u5171\u4eabpause\u5bb9\u5668\u7684ip\uff0c\u5171\u4eabpause\u5bb9\u5668\u6302\u8f7d\u7684volume\uff0c\u8fd9\u6837\u7b80\u5316\u4e86\u4e1a\u52a1\u5bb9\u5668\u4e4b\u95f4\u7684\u901a\u4fe1\u95ee\u9898\uff0c\u4e5f\u89e3\u51b3\u4e86\u5bb9\u5668\u4e4b\u95f4\u7684\u95ee\u9898\u4ef6\u5171\u4eab\u95ee\u9898\u3002\n(2).pod\u4e2d\u7684\u5bb9\u5668\u5171\u4eab\u540c\u4e00\u4e2aip\u5730\u5740\u3002\u6545\u540c\u4e00\u4e2apod\u4e2dcontainer\u53ef\u4ee5\u505a\u5230\u76f4\u63a5\u901a\u8fc7localhost\u76f4\u63a5\u901a\u4fe1\u3002\n")),(0,o.kt)("h2",{id:"\u7f51\u7edc\u901a\u4fe1"},"\u7f51\u7edc\u901a\u4fe1"),(0,o.kt)("p",null,"\u540c\u4e00\u4e2a\u8282\u70b9\u591a\u4e2apod\u901a\u4fe1\u673a\u5236:"),(0,o.kt)("p",null,"pause\u5bb9\u5668\u542f\u52a8\u4e4b\u524d\uff0c\u4f1a\u4e3a\u5bb9\u5668\u521b\u5efa\u865a\u62df\u4e00\u5bf9ethernet\u63a5\u53e3\uff0c\u4e00\u4e2a\u4fdd\u7559\u5728\u5bbf\u4e3b\u673avethxxx\uff08\u63d2\u5728\u7f51\u6865\u4e0a\uff09\uff0c\u4e00\u4e2a\u4fdd\u7559\u5728\u5bb9\u5668\u7f51\u7edc\u547d\u540d\u7a7a\u95f4\u5185\uff0c\u5e76\u91cd\u547d\u540d\u4e3aeth0\u3002\u4e24\u4e2a\u865a\u62df\u63a5\u53e3\u7684\u4e24\u7aef\uff0c\u4ece\u4e00\u7aef\u8fdb\u5165\uff0c\u4ece\u53e6\u4e00\u7aef\u51fa\u6765\u3002\u4efb\u4f55pod\u8fde\u63a5\u5230\u8be5\u7f51\u6865\u7684pod\u90fd\u53ef\u4ee5\u6536\u53d1\u6570\u636e"),(0,o.kt)("p",null,"\u8de8\u8282\u70b9pod\u901a\u4fe1\u673a\u5236\uff1a"),(0,o.kt)("p",null,"\u8de8\u8282\u70b9pod\u901a\u4fe1,\u8fd9\u91cc\u9700\u8981\u7528\u5230\u7f51\u7edc\u63d2\u4ef6\u5c31\u662fcni,\u5f53\u7136\uff0c\u8fd9\u79cd\u662f\u57fa\u4e8eoverlay\u7f51\u7edc\uff0c\u76f8\u5f53\u4e8e\u521b\u5efa\u4e00\u4e2a\u6574\u4e2a\u96c6\u7fa4\u516c\u7528\u7684 ","[\u7f51\u6865]"," \uff0c\u7136\u540e\u628a\u96c6\u7fa4\u4e2d\u6240\u6709\u7684pod\u8fde\u63a5\u8d77\u6765\uff0c\u5c31\u53ef\u4ee5\u901a\u4fe1\u4e86"),(0,o.kt)("p",null,"\u8de8\u4e3b\u673a\u8fde\u63a5\u4e0d\u901a\uff08pod\u548cpod\uff09\u7684\u6545\u969c\u6392\u67e5\u65b9\u6cd5\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"1).\u6392\u67e5\u5bbf\u4e3b\u673a\u7f51\u7edc\u662f\u5426\u6b63\u5e38\uff0c\u5728\u5bbf\u4e3b\u673a\u4e0aping www.baidu.com,\u6216tcpdump\u6293\u5305\u770b\u662f\u5426\u4e22\u5305.\n2).\u67e5\u770bk8s\u4e2d\u7684\u7f51\u7edc\u63d2\u4ef6\u662f\u5426\u6b63\u5e38\uff0c\u67e5\u770b\u7f51\u7edc\u7ec4\u4ef6calico\u6216flannel\u7684\u65e5\u5fd7\u3002\n")),(0,o.kt)("h2",{id:"\u5e38\u7528\u547d\u4ee4"},"\u5e38\u7528\u547d\u4ee4"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl get cs //\u67e5\u770b\u7ec4\u4ef6\u662f\u5426\u90fd\u662fhealth\n\n\n")))}d.isMDXComponent=!0}}]);