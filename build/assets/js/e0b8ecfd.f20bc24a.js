"use strict";(self.webpackChunkbookshell=self.webpackChunkbookshell||[]).push([[1008],{5680:(e,t,r)=>{r.d(t,{xA:()=>g,yg:()=>d});var n=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},g=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,d=u["".concat(p,".").concat(m)]||u[m]||s[m]||l;return r?n.createElement(d,i(i({ref:t},g),{},{components:r})):n.createElement(d,i({ref:t},g))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9507:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=r(8168),a=(r(6540),r(5680));const l={},i=void 0,o={unversionedId:"Sre/\u4e2d\u95f4\u4ef6/cilium",id:"Sre/\u4e2d\u95f4\u4ef6/cilium",title:"cilium",description:"cilium\u90e8\u7f72",source:"@site/docs/Sre/2-\u4e2d\u95f4\u4ef6/16.cilium.md",sourceDirName:"Sre/2-\u4e2d\u95f4\u4ef6",slug:"/Sre/\u4e2d\u95f4\u4ef6/cilium",permalink:"/bookshell/docs/Sre/\u4e2d\u95f4\u4ef6/cilium",draft:!1,editUrl:"https://shouji1128955.github.io/bookshell/docs/Sre/2-\u4e2d\u95f4\u4ef6/16.cilium.md",tags:[],version:"current",lastUpdatedBy:"zhanglaiqiang",lastUpdatedAt:1724164539,formattedLastUpdatedAt:"2024\u5e748\u670820\u65e5",sidebarPosition:16,frontMatter:{},sidebar:"SreMiddleSoft",previous:{title:"zookeeper",permalink:"/bookshell/docs/Sre/\u4e2d\u95f4\u4ef6/zookeeper"}},p={},c=[{value:"cilium\u90e8\u7f72",id:"cilium\u90e8\u7f72",level:3},{value:"cilium\u5378\u8f7d",id:"cilium\u5378\u8f7d",level:3}],g={toc:c},u="wrapper";function s(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,n.A)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h3",{id:"cilium\u90e8\u7f72"},"cilium\u90e8\u7f72"),(0,a.yg)("h3",{id:"cilium\u5378\u8f7d"},"cilium\u5378\u8f7d"),(0,a.yg)("p",null,"\u5b8c\u5168\u5378\u8f7d\u4f7f\u7528 Helm \u5b89\u88c5\u7684 Cilium"),(0,a.yg)("p",null,"\u6587\u6863\u517c\u5bb9\u6027"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"left"},"\u4e3b\u4f53"),(0,a.yg)("th",{parentName:"tr",align:"left"},"\u7248\u672c\u53f7"),(0,a.yg)("th",{parentName:"tr",align:"left"},"\u6587\u6863\u5730\u5740\uff08\u5982\u679c\u6709\uff09"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"Debian"),(0,a.yg)("td",{parentName:"tr",align:"left"},"11"),(0,a.yg)("td",{parentName:"tr",align:"left"})),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"Kubernetes"),(0,a.yg)("td",{parentName:"tr",align:"left"},"1.28"),(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("a",{parentName:"td",href:"https://v1-28.docs.kubernetes.io/"},"https://v1-28.docs.kubernetes.io/"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"Docker"),(0,a.yg)("td",{parentName:"tr",align:"left"},"24.0.2"),(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("a",{parentName:"td",href:"https://docs.docker.com/"},"https://docs.docker.com/"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"containerd"),(0,a.yg)("td",{parentName:"tr",align:"left"},"1.7.6"),(0,a.yg)("td",{parentName:"tr",align:"left"})),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"Linux kernel"),(0,a.yg)("td",{parentName:"tr",align:"left"},"5.10.0"),(0,a.yg)("td",{parentName:"tr",align:"left"})),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"Cilium"),(0,a.yg)("td",{parentName:"tr",align:"left"},"1.14.2"),(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("a",{parentName:"td",href:"https://docs.cilium.io/en/v1.14/"},"https://docs.cilium.io/en/v1.14/"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"helm"),(0,a.yg)("td",{parentName:"tr",align:"left"},"v3.9.0"),(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("a",{parentName:"td",href:"https://helm.sh/docs/"},"https://helm.sh/docs/"))))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"sudo cilium uninstall\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"sudo helm uninstall cilium -n kube-system\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"sudo kubectl get crd | grep cilium | awk '{print $1}' | xargs sudo kubectl delete crd\n")),(0,a.yg)("p",null,"\u68c0\u67e5\u4e00\u4e0b\u540d\u5b57\u4e2d\u542b\u6709 cilium \u7684\u8d44\u6e90\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},'sudo kubectl get all --all-namespaces | egrep "cilium"\n')),(0,a.yg)("p",null,"\u63a5\u4e0b\u6765\u5728\u6bcf\u4e2a\u8282\u70b9\u4e0a\u6267\u884c\uff1a"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"\u6e05\u7406 CNI \u914d\u7f6e\uff1a")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"sudo rm -rf /etc/cni/net.d/\n")),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"\u5b8c\u5168\u6e05\u7406\u7f51\u5361\uff1a")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"sudo ip link list | grep lxc | awk '{print $2}' | cut -c 1-15 | xargs -I {} sudo ip link delete {}\nsudo ip link list | grep cilium_net@cilium_host | awk '{print $2}' | cut -c 1-10 | xargs -I {} sudo ip link delete {}\nsudo ip link list | grep cilium_host@cilium_net | awk '{print $2}' | cut -c 1-11 | xargs -I {} sudo ip link delete {}\n")),(0,a.yg)("ol",{start:3},(0,a.yg)("li",{parentName:"ol"},"\u66f4\u65b0\u8def\u7531\uff1a")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"sudo ip route flush proto bird\n")),(0,a.yg)("p",null,"4.\u91cd\u542f\u8282\u70b9"))}s.isMDXComponent=!0}}]);