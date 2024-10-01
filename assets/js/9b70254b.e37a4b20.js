"use strict";(self.webpackChunkbookshell=self.webpackChunkbookshell||[]).push([[4454],{5680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>g});var r=t(6540);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=r.createContext({}),u=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(i.Provider,{value:n},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=u(t),d=l,g=s["".concat(i,".").concat(d)]||s[d]||m[d]||a;return t?r.createElement(g,p(p({ref:n},c),{},{components:t})):r.createElement(g,p({ref:n},c))}));function g(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,p=new Array(a);p[0]=d;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o[s]="string"==typeof e?e:l,p[1]=o;for(var u=2;u<a;u++)p[u]=t[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3748:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>p,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var r=t(8168),l=(t(6540),t(5680));const a={},p=void 0,o={unversionedId:"Golang/VUE/vue\u5165\u95e8\u6559\u7a0b/html\u57fa\u7840",id:"Golang/VUE/vue\u5165\u95e8\u6559\u7a0b/html\u57fa\u7840",title:"html\u57fa\u7840",description:"web\u5e94\u7528\u7a0b\u5e8f\uff1a\u5904\u7406\u6765\u81ea\u6d4f\u89c8\u5668\u7684\u8bf7\u6c42\u54cd\u5e94\u7684\u670d\u52a1",source:"@site/docs/Golang/VUE/vue\u5165\u95e8\u6559\u7a0b/html\u57fa\u7840.md",sourceDirName:"Golang/VUE/vue\u5165\u95e8\u6559\u7a0b",slug:"/Golang/VUE/vue\u5165\u95e8\u6559\u7a0b/html\u57fa\u7840",permalink:"/bookshell/docs/Golang/VUE/vue\u5165\u95e8\u6559\u7a0b/html\u57fa\u7840",draft:!1,editUrl:"https://github.com/shouji1128955/bookshell/edit/main/docs/Golang/VUE/vue\u5165\u95e8\u6559\u7a0b/html\u57fa\u7840.md",tags:[],version:"current",lastUpdatedBy:"zhanglaiqiang",lastUpdatedAt:1727765685,formattedLastUpdatedAt:"2024\u5e7410\u67081\u65e5",frontMatter:{},sidebar:"GoalngVue",next:{title:"vue\u5165\u95e8\u6559\u7a0b1",permalink:"/bookshell/docs/Golang/VUE/vue\u5165\u95e8\u6559\u7a0b/vue\u5165\u95e8\u6559\u7a0b1"}},i={},u=[],c={toc:u},s="wrapper";function m(e){let{components:n,...t}=e;return(0,l.yg)(s,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"web\u5e94\u7528\u7a0b\u5e8f\uff1a\u5904\u7406\u6765\u81ea\u6d4f\u89c8\u5668\u7684\u8bf7\u6c42\u54cd\u5e94\u7684\u670d\u52a1"),(0,l.yg)("p",null,"\u6d4f\u89c8\u5668\u672c\u8d28\u662f\u4e00\u4e2a\u89e3\u91ca\u5668"),(0,l.yg)("p",null,"\u6807\u7b7e\u5206\u4e3a\uff1a\n\u5757\u7ea7\u6807\u7b7e\uff08block\uff09"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"  1. \u72ec\u5360\u4e00\u884c\n  2. \u53ef\u4ee5\u8bbe\u7f6e\u957f\u5bbd\n\n  h1-h6\n  p\n  div\n  ul\n  li\n")),(0,l.yg)("p",null,"   \u5185\u8054\u6807\u7b7e\uff08inline\uff09"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"  1. \u6309\u5185\u5bb9\u5360\u5bbd\n  2. \u4e0d\u53ef\u4ee5\u8bbe\u7f6e\u957f\u5bbd\n\n  b strong\n  a\n  img\n  input\n")),(0,l.yg)("p",null,"\u5d4c\u5957\u539f\u5219\uff1a\n\u5757\u7ea7\u6807\u7b7e\u53ef\u4ee5\u5d4c\u5957\u5185\u8054 \uff0c\u4e5f\u53ef\u4ee5\u5d4c\u5957\u5757\u7ea7\uff08p\u6807\u7b7e\u9664\u5916\uff09\n\u5185\u8054\u5d4c\u5957\u5185\u8054"),(0,l.yg)("p",null,"\u5411\u670d\u52a1\u5668\u53d1\u9001\u8bf7\u6c42\u7684\u5f62\u5f0f\uff1a"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u6d4f\u89c8\u5668\u7684\u5730\u5740\u680f    GET")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"a\u6807\u7b7e    GET")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"form\u8868\u5355   GET/POST")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"ajax\u8bf7\u6c42   GET/POST   js\u7684\u6280\u672f"))),(0,l.yg)("p",null,"css\u9009\u62e9\u5668\u4f18\u5148\u7ea7\n\u884c\u5185\u5f0f\uff1a1000\nid\uff1a100\nclass\uff1a10\n\u6807\u7b7e\u540d\uff1a1\n!important"),(0,l.yg)("p",null,"css\u5e03\u5c40\uff1a \u5982\u4f55\u5c06\u591a\u4e2a\u53ef\u4ee5\u8bbe\u7f6e\u957f\u5bbd\u7684\u5143\u7d20\u5728\u4e00\u884c\u663e\u793a"),(0,l.yg)("p",null,"div+css \uff08\u57fa\u4e8e\u76d2\u6a21\u578b\uff09"),(0,l.yg)("p",null,"\u8d85\u94fe\u63a5\uff1a "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-html"},' <p> <a>\xa0href="https://www.zlqit.com"</a> </p>\n')),(0,l.yg)("p",null,"img\u6807\u7b7e"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-html"},'<p> <a href="https://www.zlqit.com"> \u57fa\u672c\u6807\u7b7ea</a> </p>\n    <a href="https://picx.zhimg.com/70/v2-2003d5ac020c637c011f8d43616a4012_1440w.avis?source=172ae18b&biz_tag=Post"><img width="100px" height="100px" src="https://pica.zhimg.com/v2-1b18950ad61cdfd9bdae1968f082a4f0_r.webp?source=172ae18b&consumer=ZHI_MENG"></a>\n\n//\u53ef\u4ee5\u6dfb\u52a0title\uff0c\u60ac\u6d6e\u663e\u793a \n')),(0,l.yg)("p",null,"\u5217\u8868"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-html"},"<ol> \n    <li> \u6cb3\u5317\u7701</li>\n    <li> \u5317\u4eac\u5e02</li>\n    <li> \u5c71\u4e1c\u7701</li>\n</ol>\n---\u6709\u5e8f\n<ul> \n    <li> \u6cb3\u5317\u7701</li>\n    <li> \u5317\u4eac\u5e02</li>\n    <li> \u5c71\u4e1c\u7701</li>\n</u1>\n---\u65e0\u5e8f\n")),(0,l.yg)("p",null,"table "),(0,l.yg)("p",null,"rowspan\u53ef\u4ee5\u5b9e\u73b0\u5408\u5e76\u5360\u51e0\u884c"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-html"},'<table border="1">  \n   <tr> \n     <td> \u59d3\u540d</td>\n     <td> \u5e74\u9f84</td>\n     <td> \u85aa\u8d44</td>\n   </tr>\n\n   <tr> \n    <td> \u5f20\u4e09</td>\n    <td> 22</td>\n    <td> 23</td>\n  </tr>\n\n  <tr> \n    <td> \u738b\u4e94</td>\n    <td> 23</td>\n    <td rowspan="2"> 22</td>\n  </tr>\n\n  <tr> \n    <td> \u674e\u56db</td>\n    <td> 24</td>\n  </tr>\n</table>\n')),(0,l.yg)("p",null,"\u8868\u5355\u6807\u7b7e"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-html"},'<form action=""> \n    <p> \u59d3\u540d\uff1a <input type="text"></p>\n    <p> \u5bc6\u7801:  <input type="password"></p>\n    <p> \u63d0\u4ea4\uff1a <input type="submit"></p>\n</form>\n\nsubmit \u70b9\u51fb\u63d0\u4ea4\u4e4b\u540e\uff0c\u4f1a\u6253\u5305form\u8868\u5355\u4e2d\u7684\u952e\u503c\u5bf9\uff0c\u53d1\u9001\u7ed9\u6d4f\u89c8\u5668\uff0c\u5982\u679c\u6ca1\u6709\u952e\uff0c\u5c31\u4f1a\u6253\u5305\u5931\u8d25\n\u9ed8\u8ba4\u8bf7\u6c42\u65b9\u5f0f\u5c31\u662fget\nget\u548cpost\u533a\u522b\u5728\u4e8e: \u8bf7\u6c42\u653e\u5728url\u4e2d\u662fget\u8bf7\u6c42\uff0c\u5982\u679c\u653e\u5728\u8bf7\u6c42\u4f53\u4e2d\uff0c\u5c5e\u4e8epost\u8bf7\u6c42\n\n\n')),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-html"},'   <form action="">\n        <p> \u59d3\u540d: <input type="text" name="user"></p>\n        <p> \u5bc6\u7801: <input type="password" name="pwd"></p>\n        <p>\n            \u7231\u597d: \n            <input type="checkbox" name="hobby" value="lanqiu" checked> \u7bee\u7403\n            <input type="checkbox" name="hobby" value="zuqiu"> \u8db3\u7403 \n        </p>\n        <p> \n            \u6027\u522b: \n            <input type="radio", name="sex" value="1" checked> \u7537\n            <input type="radio", name="sex" value="0" > \u5973\n        </p>\n        <p>\n            \u751f\u65e5: \n            <input type="date" name="birth" value="2012-12-12">\n        </p>\n\n        <p> \n            <input type="button"   value="button" onclick="alert(123)">\n        </p>\n\n        <p>\n            <select name="province" multiple>\n                <option> \u6cb3\u5317\u7701</option>\n                <option selected> \u7518\u8083\u7701</option>\n                <option> \u9752\u6d77\u7701</option>\n            </select>\n        </p>\n        <p> \n           <textarea placeholder="\u7b80\u4ecb" name="jianjie" cols="30" rows="10">afsfddfsdfdsfsd</textarea>\n        </p>\n        <p><input type="submit"></p>\n    </form>\n')))}m.isMDXComponent=!0}}]);