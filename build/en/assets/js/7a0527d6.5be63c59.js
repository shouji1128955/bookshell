"use strict";(self.webpackChunkbookshell=self.webpackChunkbookshell||[]).push([[3291],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>k});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},i=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),c=s(r),d=l,k=c["".concat(p,".").concat(d)]||c[d]||m[d]||a;return r?n.createElement(k,o(o({ref:t},i),{},{components:r})):n.createElement(k,o({ref:t},i))}));function k(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,o=new Array(a);o[0]=d;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u[c]="string"==typeof e?e:l,o[1]=u;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},71471:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>u,toc:()=>s});var n=r(87462),l=(r(67294),r(3905));const a={},o=void 0,u={unversionedId:"Kubernetes/\u66f4\u65b0\u5185\u6838",id:"Kubernetes/\u66f4\u65b0\u5185\u6838",title:"\u66f4\u65b0\u5185\u6838",description:"\u7f16\u8bd1\u5b89\u88c5\u65b9\u5f0f",source:"@site/docs/Kubernetes/5.\u66f4\u65b0\u5185\u6838.md",sourceDirName:"Kubernetes",slug:"/Kubernetes/\u66f4\u65b0\u5185\u6838",permalink:"/en/docs/Kubernetes/\u66f4\u65b0\u5185\u6838",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Kubernetes/5.\u66f4\u65b0\u5185\u6838.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"Kubernetes",previous:{title:"kubernetes cka",permalink:"/en/docs/Kubernetes/kubernetes cka"},next:{title:"ansible\u5b89\u88c5k8s-1.24.12",permalink:"/en/docs/Kubernetes/ansible\u5b89\u88c5k8s-1.24.12"}},p={},s=[{value:"\u7f16\u8bd1\u5b89\u88c5\u65b9\u5f0f",id:"\u7f16\u8bd1\u5b89\u88c5\u65b9\u5f0f",level:2},{value:"1.\u4e0b\u8f7d\u5185\u6838\u8f6f\u4ef6\u5305",id:"1\u4e0b\u8f7d\u5185\u6838\u8f6f\u4ef6\u5305",level:5},{value:"2.\u89e3\u5305",id:"2\u89e3\u5305",level:5},{value:"3.\u5b89\u88c5\u4f9d\u8d56",id:"3\u5b89\u88c5\u4f9d\u8d56",level:5},{value:"4.\u914d\u7f6e",id:"4\u914d\u7f6e",level:5},{value:"5.\u7f16\u8bd1",id:"5\u7f16\u8bd1",level:5},{value:"6.\u5b89\u88c5\u6a21\u5757",id:"6\u5b89\u88c5\u6a21\u5757",level:5},{value:"7.\u66f4\u6539\u9ed8\u8ba4\u542f\u52a8\u6838\u5fc3",id:"7\u66f4\u6539\u9ed8\u8ba4\u542f\u52a8\u6838\u5fc3",level:5},{value:"8.\u4f7f\u914d\u7f6e\u6587\u4ef6\u751f\u6548",id:"8\u4f7f\u914d\u7f6e\u6587\u4ef6\u751f\u6548",level:5},{value:"9.\u4fee\u6539\u9ed8\u8ba4\u542f\u52a8\u7684\u5185\u6838",id:"9\u4fee\u6539\u9ed8\u8ba4\u542f\u52a8\u7684\u5185\u6838",level:5},{value:"yum\u5b89\u88c5\u65b9\u5f0f",id:"yum\u5b89\u88c5\u65b9\u5f0f",level:2},{value:"\u5bfc\u5165ELRepo\u4ed3\u5e93\u7684\u516c\u5171\u5bc6\u94a5",id:"\u5bfc\u5165elrepo\u4ed3\u5e93\u7684\u516c\u5171\u5bc6\u94a5",level:4},{value:"\u67e5\u8be2\u53ef\u7528\u5185\u6838\u7248\u672c",id:"\u67e5\u8be2\u53ef\u7528\u5185\u6838\u7248\u672c",level:4},{value:"\u5b89\u88c5\u6700\u65b0\u7684\u7a33\u5b9a\u7248\u672c\u5185\u6838",id:"\u5b89\u88c5\u6700\u65b0\u7684\u7a33\u5b9a\u7248\u672c\u5185\u6838",level:4},{value:"\u8bbe\u7f6e grub2",id:"\u8bbe\u7f6e-grub2",level:4},{value:"\u751f\u6210 grub \u914d\u7f6e\u6587\u4ef6\u5e76\u91cd\u542f",id:"\u751f\u6210-grub-\u914d\u7f6e\u6587\u4ef6\u5e76\u91cd\u542f",level:4},{value:"\u5220\u9664\u65e7\u5185\u6838\uff08<strong>\u53ef\u9009</strong>\uff09",id:"\u5220\u9664\u65e7\u5185\u6838\u53ef\u9009",level:4}],i={toc:s},c="wrapper";function m(e){let{components:t,...a}=e;return(0,l.kt)(c,(0,n.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u7f16\u8bd1\u5b89\u88c5\u65b9\u5f0f"},"\u7f16\u8bd1\u5b89\u88c5\u65b9\u5f0f"),(0,l.kt)("h5",{id:"1\u4e0b\u8f7d\u5185\u6838\u8f6f\u4ef6\u5305"},"1.\u4e0b\u8f7d\u5185\u6838\u8f6f\u4ef6\u5305"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"https://mirrors.tuna.tsinghua.edu.cn/kernel/v4.x/\n")),(0,l.kt)("h5",{id:"2\u89e3\u5305"},"2.\u89e3\u5305"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[root@k8s-master1 software]# tar xf linux-4.19.100.tar.xz\n")),(0,l.kt)("h5",{id:"3\u5b89\u88c5\u4f9d\u8d56"},"3.\u5b89\u88c5\u4f9d\u8d56"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'[root@k8s-master1 ~]# yum install ncurses-devel bison flex elfutils-libelf-devel groupinstall "Development Tools" -y\n')),(0,l.kt)("h5",{id:"4\u914d\u7f6e"},"4.\u914d\u7f6e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[root@k8s-master1 ~]# cd linux-4.19.100\n[root@k8s-master1 linux-4.19.100]# make menuconfig\n")),(0,l.kt)("h5",{id:"5\u7f16\u8bd1"},"5.\u7f16\u8bd1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[root@k8s-master1 linux-linux-4.19.100]# make -j 4\n")),(0,l.kt)("h5",{id:"6\u5b89\u88c5\u6a21\u5757"},"6.\u5b89\u88c5\u6a21\u5757"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[root@k8s-master1 linux-4.19.100]# make modules_install\n[root@k8s-master1 linux-4.19.100]# make install\n")),(0,l.kt)("h5",{id:"7\u66f4\u6539\u9ed8\u8ba4\u542f\u52a8\u6838\u5fc3"},"7.\u66f4\u6539\u9ed8\u8ba4\u542f\u52a8\u6838\u5fc3"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'\u5c06GRUB_DEFAULT=saved \u6539\u6210 GRUB_DEFAULT=0\n[root@k8s-master1 ~]# vim /etc/default/grub \nGRUB_TIMEOUT=5\nGRUB_DISTRIBUTOR="$(sed \'s, release .*$,,g\' /etc/system-release)"\nGRUB_DEFAULT=0\nGRUB_DISABLE_SUBMENU=true\nGRUB_TERMINAL_OUTPUT="console"\nGRUB_CMDLINE_LINUX="rd.lvm.lv=rhel/root rd.lvm.lv=rhel/swap rhgb quiet"\nGRUB_DISABLE_RECOVERY="true"\n')),(0,l.kt)("h5",{id:"8\u4f7f\u914d\u7f6e\u6587\u4ef6\u751f\u6548"},"8.\u4f7f\u914d\u7f6e\u6587\u4ef6\u751f\u6548"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[root@k8s-master1 ~]# grub2-mkconfig -o /boot/grub2/grub.cfg \n")),(0,l.kt)("h5",{id:"9\u4fee\u6539\u9ed8\u8ba4\u542f\u52a8\u7684\u5185\u6838"},"9.\u4fee\u6539\u9ed8\u8ba4\u542f\u52a8\u7684\u5185\u6838"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[root@k8s-master1 ~]# grub2-editenv list  //\u67e5\u770b\u9ed8\u8ba4\u542f\u52a8\u5185\u6838\n\nsaved_entry=CentOS Linux (3.10.0-1160.45.1.el7.x86_64) 7 (Core)\n\n[root@k8s-master1 ~]# cat /boot/grub2/grub.cfg | grep menuentry \u67e5\u770b\u6240\u6709\u5185\u6838\n\n'CentOS Linux (4.19.100) 7 (Core)'\n\n'CentOS Linux (3.10.0-1160.59.1.el7.x86_64) 7 (Core)'\n\n[root@k8s-master1 ~]# grub2-set-default 'CentOS Linux (4.19.100) 7 (Core)' //\u8bbe\u7f6e\u9ed8\u8ba4\u542f\u52a8\u5185\u6838\n")),(0,l.kt)("h2",{id:"yum\u5b89\u88c5\u65b9\u5f0f"},"yum\u5b89\u88c5\u65b9\u5f0f"),(0,l.kt)("h4",{id:"\u5bfc\u5165elrepo\u4ed3\u5e93\u7684\u516c\u5171\u5bc6\u94a5"},"\u5bfc\u5165ELRepo\u4ed3\u5e93\u7684\u516c\u5171\u5bc6\u94a5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cobol"},"rpm --import https://www.elrepo.org/RPM-GPG-KEY-elrepo.org\n")),(0,l.kt)("p",null,"\u5b89\u88c5ELRepo\u4ed3\u5e93\u7684yum\u6e90"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cobol"},"rpm -Uvh http://www.elrepo.org/elrepo-release-7.0-3.el7.elrepo.noarch.rpm\n")),(0,l.kt)("h4",{id:"\u67e5\u8be2\u53ef\u7528\u5185\u6838\u7248\u672c"},"\u67e5\u8be2\u53ef\u7528\u5185\u6838\u7248\u672c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cobol"},'yum --disablerepo="*" --enablerepo="elrepo-kernel" list available\n')),(0,l.kt)("h4",{id:"\u5b89\u88c5\u6700\u65b0\u7684\u7a33\u5b9a\u7248\u672c\u5185\u6838"},"\u5b89\u88c5\u6700\u65b0\u7684\u7a33\u5b9a\u7248\u672c\u5185\u6838"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-perl"},"yum -y --enablerepo=elrepo-kernel install kernel-lt\n")),(0,l.kt)("h4",{id:"\u8bbe\u7f6e-grub2"},"\u8bbe\u7f6e grub2"),(0,l.kt)("p",null,"\u5185\u6838\u5b89\u88c5\u597d\u540e\uff0c\u9700\u8981\u8bbe\u7f6e\u4e3a\u9ed8\u8ba4\u542f\u52a8\u9009\u9879\u5e76\u91cd\u542f\u540e\u624d\u4f1a\u751f\u6548"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u67e5\u770b\u7cfb\u7edf\u4e0a\u7684\u6240\u6709\u53ef\u7528\u5185\u6838\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'awk -F\\\' \'$1=="menuentry " {print i++ " : " $2}\' /etc/grub2.cfg\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u65b9\u6cd51\uff1a\u901a\u8fc7 grub2-set-default 0 \u547d\u4ee4\u8bbe\u7f6e")),(0,l.kt)("p",null,"grub2-set-default 0"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u65b9\u6cd52\uff1a\u7f16\u8f91 ",(0,l.kt)("inlineCode",{parentName:"strong"},"/etc/default/grub")," \u6587\u4ef6")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"vim /etc/default/grub\n")),(0,l.kt)("p",null,"\u7f16\u8f91\uff08e\uff09\u5c06GRUB_DEFAULT\u8bbe\u7f6e\u4e3a0\uff0c\u5982\u4e0b"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20231210233335554",src:r(66721).Z,width:"756",height:"173"})),(0,l.kt)("p",null,"\u4fee\u6539\u5b8c\u6210\u540e\u4fdd\u5b58\u9000\u51fa\uff08\uff1awq\uff09"),(0,l.kt)("h4",{id:"\u751f\u6210-grub-\u914d\u7f6e\u6587\u4ef6\u5e76\u91cd\u542f"},"\u751f\u6210 grub \u914d\u7f6e\u6587\u4ef6\u5e76\u91cd\u542f"),(0,l.kt)("p",null,"grub2-mkconfig -o /boot/grub2/grub.cfg"),(0,l.kt)("p",null,"\u91cd\u542f\u865a\u62df\u673a\u6216\u7269\u7406\u673a "),(0,l.kt)("h4",{id:"\u5220\u9664\u65e7\u5185\u6838\u53ef\u9009"},"\u5220\u9664\u65e7\u5185\u6838\uff08",(0,l.kt)("strong",{parentName:"h4"},"\u53ef\u9009"),"\uff09"),(0,l.kt)("p",null,"\u67e5\u770b\u7cfb\u7edf\u4e2d\u7684\u5168\u90e8\u5185\u6838"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-perl"},"rpm -qa | grep kernel\n")),(0,l.kt)("p",null,"\u53ef\u9009\u62e9\u5220\u96643.10\u7248\u672c\u7684\u5185\u6838"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"yum remove kernel-*\n")))}m.isMDXComponent=!0},66721:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/image-20231210233335554-19af1dd6d018ff325fd2c1f923897bdf.png"}}]);