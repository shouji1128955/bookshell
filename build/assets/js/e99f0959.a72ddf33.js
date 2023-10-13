"use strict";(self.webpackChunkbookshell=self.webpackChunkbookshell||[]).push([[3634],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),p=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(i.Provider,{value:n},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(t),g=o,m=s["".concat(i,".").concat(g)]||s[g]||f[g]||a;return t?r.createElement(m,c(c({ref:n},u),{},{components:t})):r.createElement(m,c({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=g;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[s]="string"==typeof e?e:o,c[1]=l;for(var p=2;p<a;p++)c[p]=t[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},4466:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=t(7462),o=(t(7294),t(3905));const a={},c=void 0,l={unversionedId:"Golang/golang\u57fa\u7840/\u51fd\u6570/\u51fd\u6570\u7684\u58f0\u660e\u548c\u8c03\u7528/\u51fd\u6570\u7684\u58f0\u660e\u548c\u8c03\u7528",id:"Golang/golang\u57fa\u7840/\u51fd\u6570/\u51fd\u6570\u7684\u58f0\u660e\u548c\u8c03\u7528/\u51fd\u6570\u7684\u58f0\u660e\u548c\u8c03\u7528",title:"\u51fd\u6570\u7684\u58f0\u660e\u548c\u8c03\u7528",description:"",source:"@site/docs/Golang/golang\u57fa\u7840/\u51fd\u6570/1.\u51fd\u6570\u7684\u58f0\u660e\u548c\u8c03\u7528/\u51fd\u6570\u7684\u58f0\u660e\u548c\u8c03\u7528.md",sourceDirName:"Golang/golang\u57fa\u7840/\u51fd\u6570/1.\u51fd\u6570\u7684\u58f0\u660e\u548c\u8c03\u7528",slug:"/Golang/golang\u57fa\u7840/\u51fd\u6570/\u51fd\u6570\u7684\u58f0\u660e\u548c\u8c03\u7528/\u51fd\u6570\u7684\u58f0\u660e\u548c\u8c03\u7528",permalink:"/docs/Golang/golang\u57fa\u7840/\u51fd\u6570/\u51fd\u6570\u7684\u58f0\u660e\u548c\u8c03\u7528/\u51fd\u6570\u7684\u58f0\u660e\u548c\u8c03\u7528",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Golang/golang\u57fa\u7840/\u51fd\u6570/1.\u51fd\u6570\u7684\u58f0\u660e\u548c\u8c03\u7528/\u51fd\u6570\u7684\u58f0\u660e\u548c\u8c03\u7528.md",tags:[],version:"current",frontMatter:{},sidebar:"GoalngJichu",next:{title:"\u51fd\u6570\u5165\u53c2",permalink:"/docs/Golang/golang\u57fa\u7840/\u51fd\u6570/\u51fd\u6570\u5165\u53c2/\u51fd\u6570\u5165\u53c2"}},i={},p=[],u={toc:p},s="wrapper";function f(e){let{components:n,...t}=e;return(0,o.kt)(s,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'\npackage main\n\nimport "fmt"\n\n// \u51fd\u6570\u662f\u4e00\u79cd\u4ee3\u7801\u7684\u7ec4\u7ec7\u5f62\u5f0f\n// \u51fd\u6570\u58f0\u660e: \u4e0d\u4f1a\u6267\u884c\u5185\u90e8\u7684\u4ee3\u7801\nfunc printLoop() {\n    for i := 1; i <= 200; i++ {\n        fmt.Println(i)\n    }\n\n}\nfunc main() {\n    //\u51fd\u6570\u8c03\u7528dd\n    printLoop()\n}\n```\n')))}f.isMDXComponent=!0}}]);