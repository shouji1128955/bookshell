"use strict";(self.webpackChunkbookshell=self.webpackChunkbookshell||[]).push([[4314],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>f});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),p=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},d=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},i="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),i=p(t),m=o,f=i["".concat(s,".").concat(m)]||i[m]||u[m]||a;return t?n.createElement(f,l(l({ref:r},d),{},{components:t})):n.createElement(f,l({ref:r},d))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=m;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c[i]="string"==typeof e?e:o,l[1]=c;for(var p=2;p<a;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2104:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=t(7462),o=(t(7294),t(3905));const a={},l=void 0,c={unversionedId:"Sre/\u4e2d\u95f4\u4ef6/nomad",id:"Sre/\u4e2d\u95f4\u4ef6/nomad",title:"nomad",description:"nomad\u90e8\u7f72",source:"@site/docs/Sre/2-\u4e2d\u95f4\u4ef6/13.nomad.md",sourceDirName:"Sre/2-\u4e2d\u95f4\u4ef6",slug:"/Sre/\u4e2d\u95f4\u4ef6/nomad",permalink:"/en/docs/Sre/\u4e2d\u95f4\u4ef6/nomad",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Sre/2-\u4e2d\u95f4\u4ef6/13.nomad.md",tags:[],version:"current",lastUpdatedBy:"zhanglaiqiang",lastUpdatedAt:1712562428,formattedLastUpdatedAt:"Apr 8, 2024",sidebarPosition:13,frontMatter:{},sidebar:"SreMiddleSoft",previous:{title:"clickhouse",permalink:"/en/docs/Sre/\u4e2d\u95f4\u4ef6/clickhouse"},next:{title:"pulsar",permalink:"/en/docs/Sre/\u4e2d\u95f4\u4ef6/pulsar"}},s={},p=[{value:"nomad\u90e8\u7f72",id:"nomad\u90e8\u7f72",level:2},{value:"nomad\u5220\u9664job",id:"nomad\u5220\u9664job",level:2},{value:"\u67e5\u770bpeer id",id:"\u67e5\u770bpeer-id",level:2},{value:"\u5220\u9664\u8282\u70b9",id:"\u5220\u9664\u8282\u70b9",level:2}],d={toc:p},i="wrapper";function u(e){let{components:r,...t}=e;return(0,o.kt)(i,(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"nomad\u90e8\u7f72"},"nomad\u90e8\u7f72"),(0,o.kt)("p",null,"\u6b64\u5904\u4ee5\u4e09\u8282\u70b9\u4e3a\u4f8b"),(0,o.kt)("h2",{id:"nomad\u5220\u9664job"},"nomad\u5220\u9664job"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"nomad job stop -detach sys-pulsar-zk \nnomad job stop -purge sys-pulsar-zk \n")),(0,o.kt)("h2",{id:"\u67e5\u770bpeer-id"},"\u67e5\u770bpeer id"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"root@ekc02:~# nomad operator raft list-peers\nNode          ID                 Address            State     Voter  RaftProtocol\nekc04.global  172.19.49.42:4647  172.19.49.42:4647  follower  true   2\nekc03.global  172.19.49.41:4647  172.19.49.41:4647  follower  true   2\nekc02.global  172.19.49.40:4647  172.19.49.40:4647  leader    true   2\nh5s.global    172.19.49.38:4647  172.19.49.38:4647  follower  true   2\n")),(0,o.kt)("h2",{id:"\u5220\u9664\u8282\u70b9"},"\u5220\u9664\u8282\u70b9"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'root@ekc02:~# nomad operator raft remove-peer -address="http://172.19.49.40:4646"  -peer-address="172.19.49.39:4647"\n')))}u.isMDXComponent=!0}}]);