"use strict";(self.webpackChunkbookshell=self.webpackChunkbookshell||[]).push([[2991],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=c(r),d=n,k=s["".concat(p,".").concat(d)]||s[d]||m[d]||l;return r?a.createElement(k,i(i({ref:t},u),{},{components:r})):a.createElement(k,i({ref:t},u))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:n,i[1]=o;for(var c=2;c<l;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1383:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const l={},i=void 0,o={unversionedId:"Sre/\u4e2d\u95f4\u4ef6/cilium",id:"Sre/\u4e2d\u95f4\u4ef6/cilium",title:"cilium",description:"cilium\u90e8\u7f72",source:"@site/docs/Sre/2-\u4e2d\u95f4\u4ef6/16.cilium.md",sourceDirName:"Sre/2-\u4e2d\u95f4\u4ef6",slug:"/Sre/\u4e2d\u95f4\u4ef6/cilium",permalink:"/docs/Sre/\u4e2d\u95f4\u4ef6/cilium",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Sre/2-\u4e2d\u95f4\u4ef6/16.cilium.md",tags:[],version:"current",lastUpdatedBy:"zhanglaiqiang",lastUpdatedAt:1724164539,formattedLastUpdatedAt:"2024\u5e748\u670820\u65e5",sidebarPosition:16,frontMatter:{},sidebar:"SreMiddleSoft",previous:{title:"zookeeper",permalink:"/docs/Sre/\u4e2d\u95f4\u4ef6/zookeeper"}},p={},c=[{value:"cilium\u90e8\u7f72",id:"cilium\u90e8\u7f72",level:3},{value:"cilium\u5378\u8f7d",id:"cilium\u5378\u8f7d",level:3}],u={toc:c},s="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(s,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"cilium\u90e8\u7f72"},"cilium\u90e8\u7f72"),(0,n.kt)("h3",{id:"cilium\u5378\u8f7d"},"cilium\u5378\u8f7d"),(0,n.kt)("p",null,"\u5b8c\u5168\u5378\u8f7d\u4f7f\u7528 Helm \u5b89\u88c5\u7684 Cilium"),(0,n.kt)("p",null,"\u6587\u6863\u517c\u5bb9\u6027"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u4e3b\u4f53"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u7248\u672c\u53f7"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u6587\u6863\u5730\u5740\uff08\u5982\u679c\u6709\uff09"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Debian"),(0,n.kt)("td",{parentName:"tr",align:"left"},"11"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Kubernetes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"1.28"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://v1-28.docs.kubernetes.io/"},"https://v1-28.docs.kubernetes.io/"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Docker"),(0,n.kt)("td",{parentName:"tr",align:"left"},"24.0.2"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://docs.docker.com/"},"https://docs.docker.com/"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"containerd"),(0,n.kt)("td",{parentName:"tr",align:"left"},"1.7.6"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Linux kernel"),(0,n.kt)("td",{parentName:"tr",align:"left"},"5.10.0"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Cilium"),(0,n.kt)("td",{parentName:"tr",align:"left"},"1.14.2"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://docs.cilium.io/en/v1.14/"},"https://docs.cilium.io/en/v1.14/"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"helm"),(0,n.kt)("td",{parentName:"tr",align:"left"},"v3.9.0"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://helm.sh/docs/"},"https://helm.sh/docs/"))))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"sudo cilium uninstall\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"sudo helm uninstall cilium -n kube-system\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"sudo kubectl get crd | grep cilium | awk '{print $1}' | xargs sudo kubectl delete crd\n")),(0,n.kt)("p",null,"\u68c0\u67e5\u4e00\u4e0b\u540d\u5b57\u4e2d\u542b\u6709 cilium \u7684\u8d44\u6e90\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'sudo kubectl get all --all-namespaces | egrep "cilium"\n')),(0,n.kt)("p",null,"\u63a5\u4e0b\u6765\u5728\u6bcf\u4e2a\u8282\u70b9\u4e0a\u6267\u884c\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u6e05\u7406 CNI \u914d\u7f6e\uff1a")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"sudo rm -rf /etc/cni/net.d/\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"\u5b8c\u5168\u6e05\u7406\u7f51\u5361\uff1a")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"sudo ip link list | grep lxc | awk '{print $2}' | cut -c 1-15 | xargs -I {} sudo ip link delete {}\nsudo ip link list | grep cilium_net@cilium_host | awk '{print $2}' | cut -c 1-10 | xargs -I {} sudo ip link delete {}\nsudo ip link list | grep cilium_host@cilium_net | awk '{print $2}' | cut -c 1-11 | xargs -I {} sudo ip link delete {}\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"\u66f4\u65b0\u8def\u7531\uff1a")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"sudo ip route flush proto bird\n")),(0,n.kt)("p",null,"4.\u91cd\u542f\u8282\u70b9"))}m.isMDXComponent=!0}}]);