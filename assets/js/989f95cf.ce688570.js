"use strict";(self.webpackChunkbookshell=self.webpackChunkbookshell||[]).push([[5072],{5680:(e,n,r)=>{r.d(n,{xA:()=>u,yg:()=>f});var o=r(6540);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,o,t=function(e,n){if(null==e)return{};var r,o,t={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var s=o.createContext({}),p=function(e){var n=o.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},u=function(e){var n=p(e.components);return o.createElement(s.Provider,{value:n},e.children)},i="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),i=p(r),d=t,f=i["".concat(s,".").concat(d)]||i[d]||m[d]||a;return r?o.createElement(f,c(c({ref:n},u),{},{components:r})):o.createElement(f,c({ref:n},u))}));function f(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,c=new Array(a);c[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[i]="string"==typeof e?e:t,c[1]=l;for(var p=2;p<a;p++)c[p]=r[p];return o.createElement.apply(null,c)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7630:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=r(8168),t=(r(6540),r(5680));const a={},c=void 0,l={unversionedId:"Sre/\u65e5\u5e38\u8fd0\u7ef4/conflunce\u5b89\u88c5",id:"Sre/\u65e5\u5e38\u8fd0\u7ef4/conflunce\u5b89\u88c5",title:"conflunce\u5b89\u88c5",description:"\u670d\u52a1\u90e8\u7f72",source:"@site/docs/Sre/1-\u65e5\u5e38\u8fd0\u7ef4/7.conflunce\u5b89\u88c5.md",sourceDirName:"Sre/1-\u65e5\u5e38\u8fd0\u7ef4",slug:"/Sre/\u65e5\u5e38\u8fd0\u7ef4/conflunce\u5b89\u88c5",permalink:"/bookshell/docs/Sre/\u65e5\u5e38\u8fd0\u7ef4/conflunce\u5b89\u88c5",draft:!1,editUrl:"https://shouji1128955.github.io/bookshell/docs/Sre/1-\u65e5\u5e38\u8fd0\u7ef4/7.conflunce\u5b89\u88c5.md",tags:[],version:"current",lastUpdatedBy:"zhanglaiqiang",lastUpdatedAt:1727765186,formattedLastUpdatedAt:"2024\u5e7410\u67081\u65e5",sidebarPosition:7,frontMatter:{},sidebar:"SreOper",previous:{title:"clickhouse\u96c6\u7fa4\u8282\u70b9\u91cd\u65b0\u52a0\u5165",permalink:"/bookshell/docs/Sre/\u65e5\u5e38\u8fd0\u7ef4/clickhouse\u96c6\u7fa4\u8282\u70b9\u91cd\u65b0\u52a0\u5165"},next:{title:"\u78c1\u76d8\u7ba1\u7406",permalink:"/bookshell/docs/Sre/\u65e5\u5e38\u8fd0\u7ef4/\u78c1\u76d8\u7ba1\u7406"}},s={},p=[],u={toc:p},i="wrapper";function m(e){let{components:n,...r}=e;return(0,t.yg)(i,(0,o.A)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("p",null,"\u670d\u52a1\u90e8\u7f72"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-yaml"},"cat > docker-compose.yam <<EOF\nversion: '3'\nservices:\n  confluence:\n    image: atlassian/confluence-server:6.15.6\n    ports:\n      - '8090:8090'\n    volumes:\n      - '/data/confluence/data:/var/atlassian/application-data/confluence'\n    environment:\n      - JVM_MINIMUM_MEMORY=1024m\n      - JVM_MAXIMUM_MEMORY=4096m\n      - JVM_SUPPORT_RECOMMENDED_ARGS=-Dfile.encoding=UTF8\nEOF\n")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-yaml"},"wget  https://github.com/docker/compose/releases/download/v2.5.0/docker-compose-linux-x86_64\nroot@mongo:/data/confluence# mv docker-compose-linux-x86_64  /usr/bin/docker-compose\nroot@mongo:/data/confluence# chmod +x  /usr/bin/docker-compose\n")),(0,t.yg)("p",null,"\u63d2\u4ef6\u5b89\u88c5\u9875\u9762,\u8df3\u8fc7\u63d2\u4ef6\u5b89\u88c5,\u76f4\u63a5\u70b9\u51fb\u4e0b\u4e00\u6b65"),(0,t.yg)("p",null,(0,t.yg)("img",{parentName:"p",src:"https://iteshell.oss-cn-beijing.aliyuncs.com/bookshell/operator/image-20231126125733322.png",alt:"image-20231126125733322"})),(0,t.yg)("p",null,"\u6388\u6743\u7801\u9875\u9762,\u9700\u8bb0\u4f4f\u670d\u52a1\u5668ID\u7559\u4f5c\u5907\u7528"),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Confluence\u7834\u89e3")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"root@mongo:/data/confluence# docker cp confluence-confluence-1:/opt/atlassian/confluence/confluence/WEB-INF/lib/atlassian-extras-decoder-v2-3.4.1.jar .\nroot@mongo:/data/confluence# ls -l \ntotal 16\n-rw-r--r-- 1 root root 6982 Jun 20  2019 atlassian-extras-decoder-v2-3.4.1.jar\ndrwx------ 6 2002 2002 4096 Nov 26 13:02 data\n-rw-r--r-- 1 root root  343 Nov 26 12:54 docker-compose.yaml\nroot@mongo:/data/confluence# \n\n")),(0,t.yg)("p",null,"\u5bfc\u51fa\u5230\u672c\u5730\uff0c\u9700\u8bb0\u4f4f\u5bfc\u51fa\u6587\u4ef6\u7684\u8def\u5f84"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"root@mongo:/data/confluence# sz atlassian-extras-decoder-v2-3.4.1.jar\n")),(0,t.yg)("p",null," \u6253\u5f00\u89e3\u538b\u540e\u7684\u6587\u4ef6\u5939\uff0c\u8fd0\u884c\u7834\u89e3\u5668confluence_keygen.jar"),(0,t.yg)("p",null,"  ",(0,t.yg)("strong",{parentName:"p"},"java -jarconfluence_keygen.jar")))}m.isMDXComponent=!0}}]);