"use strict";(self.webpackChunkbookshell=self.webpackChunkbookshell||[]).push([[4209],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var l=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=l.createContext({}),c=function(e){var t=l.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=c(e.components);return l.createElement(i.Provider,{value:t},e.children)},o="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),o=c(n),m=r,d=o["".concat(i,".").concat(m)]||o[m]||k[m]||a;return n?l.createElement(d,p(p({ref:t},s),{},{components:n})):l.createElement(d,p({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,p=new Array(a);p[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[o]="string"==typeof e?e:r,p[1]=u;for(var c=2;c<a;c++)p[c]=n[c];return l.createElement.apply(null,p)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},80375:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>k,frontMatter:()=>a,metadata:()=>u,toc:()=>c});var l=n(87462),r=(n(67294),n(3905));const a={},p=void 0,u={unversionedId:"Sre/\u9762\u8bd5\u9898/1\u9762\u8bd5\u9898",id:"Sre/\u9762\u8bd5\u9898/1\u9762\u8bd5\u9898",title:"1\u9762\u8bd5\u9898",description:"shell\u811a\u672c",source:"@site/docs/Sre/3-\u9762\u8bd5\u9898/1\u9762\u8bd5\u9898.md",sourceDirName:"Sre/3-\u9762\u8bd5\u9898",slug:"/Sre/\u9762\u8bd5\u9898/1\u9762\u8bd5\u9898",permalink:"/en/docs/Sre/\u9762\u8bd5\u9898/1\u9762\u8bd5\u9898",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Sre/3-\u9762\u8bd5\u9898/1\u9762\u8bd5\u9898.md",tags:[],version:"current",frontMatter:{},sidebar:"SreMianshi"},i={},c=[{value:"shell\u811a\u672c",id:"shell\u811a\u672c",level:2},{value:"\u65e5\u5fd7\u6e05\u7406",id:"\u65e5\u5fd7\u6e05\u7406",level:2},{value:"TCP/IP\u534f\u8bae\u6808",id:"tcpip\u534f\u8bae\u6808",level:2},{value:"NAT\u3001\u9759\u6001\u8def\u7531\uff0cDNA",id:"nat\u9759\u6001\u8def\u7531dna",level:2},{value:"Raid,LVM\u670d\u52a1\u5668",id:"raidlvm\u670d\u52a1\u5668",level:2},{value:"KVM",id:"kvm",level:2},{value:"iptables",id:"iptables",level:2}],s={toc:c},o="wrapper";function k(e){let{components:t,...a}=e;return(0,r.kt)(o,(0,l.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"shell\u811a\u672c"},"shell\u811a\u672c"),(0,r.kt)("p",null,"\u53d8\u91cf\u5f15\u7528"),(0,r.kt)("p",null,"  $name \u6216\u8005 ${name}"),(0,r.kt)("p",null,"\u547d\u4ee4\u5f15\u7528: "),(0,r.kt)("p",null,"  Name=",(0,r.kt)("inlineCode",{parentName:"p"},"command")," \u6216\u8005 name =$(command)"),(0,r.kt)("p",null,"   \u67e5\u770b\u53d8\u91cf set "),(0,r.kt)("p",null,"   \u5220\u9664\u53d8\u91cf: unset name "),(0,r.kt)("p",null,"   \u73af\u5883\u53d8\u91cf: "),(0,r.kt)("p",null,"\u200b    Export name=value \u6216\u8005  declare -x name=value"),(0,r.kt)("p",null,"\u200b    \u67e5\u770b\u73af\u5883\u53d8\u91cf; env ,printenv ,export,declare -x"),(0,r.kt)("p",null,"   \u53ea\u8bfb\u53d8\u91cf: \u53ea\u80fd\u7533\u660e\u5b9a\u4e49\uff0c\u540e\u7eed\u4e0d\u80fd\u4fee\u6539"),(0,r.kt)("p",null,"\u200b    Readonly name , declare -r name "),(0,r.kt)("p",null,"   \u4f4d\u7f6e\u53d8\u91cf\uff1a "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"1\u3001$#\uff1a\u8868\u793a\u6267\u884c\u811a\u672c\u4f20\u5165\u53c2\u6570\u7684\u4e2a\u6570\n\n2\u3001$*\uff1a\u8868\u793a\u6267\u884c\u811a\u672c\u4f20\u5165\u53c2\u6570\u7684\u5217\u8868\uff08\u4e0d\u5305\u62ec$0\uff09\n\n3\u3001$$\uff1a\u8868\u793a\u8fdb\u7a0b\u7684id\uff1bShell\u672c\u8eab\u7684PID\uff08ProcessID\uff0c\u5373\u811a\u672c\u8fd0\u884c\u7684\u5f53\u524d \u8fdb\u7a0bID\u53f7\uff09\n\n4\u3001$!\uff1aShell\u6700\u540e\u8fd0\u884c\u7684\u540e\u53f0Process\u7684PID(\u540e\u53f0\u8fd0\u884c\u7684\u6700\u540e\u4e00\u4e2a\u8fdb\u7a0b\u7684 \u8fdb\u7a0bID\u53f7)\n\n5\u3001$@\uff1a\u8868\u793a\u6267\u884c\u811a\u672c\u4f20\u5165\u53c2\u6570\u7684\u6240\u6709\u4e2a\u6570\uff08\u4e0d\u5305\u62ec$0\uff09\n\n6\u3001$0\uff1a\u8868\u793a\u6267\u884c\u7684\u811a\u672c\u540d\u79f0\n\n7\u3001$1\uff1a\u8868\u793a\u7b2c\u4e00\u4e2a\u53c2\u6570\n\n8\u3001$2\uff1a\u8868\u793a\u7b2c\u4e8c\u4e2a\u53c2\u6570\n\n9\u3001$?\uff1a\u8868\u793a\u811a\u672c\u6267\u884c\u7684\u72b6\u6001\uff0c0\u8868\u793a\u6b63\u5e38\uff0c\u5176\u4ed6\u8868\u793a\u9519\u8bef\n")),(0,r.kt)("p",null,"\u200b     Set - - \u6e05\u7a7a\u6240\u6709\u7684\u4f4d\u7f6e\u53d8\u91cf"),(0,r.kt)("p",null,"   \u9000\u51fa\u72b6\u6001\u7801\u53d8\u91cf\uff1a "),(0,r.kt)("p",null,"\u200b     $? \u503c\u4e3a0 \u6210\u529f\uff0c  $? 1-255\u4ee3\u8868\u5931\u8d25"),(0,r.kt)("p",null,"   ","#","\u751f\u6210 0 - 49 \u4e4b\u95f4\u968f\u673a\u6570 echo $","[$RANDOM%50]"),(0,r.kt)("p",null," #\u968f\u673a\u5b57\u4f53\u989c\u8272 ","[root@centos8 ~]",'#echo -e "\\033[1;$',"[RANDOM%7+31]",'mmagedu\\033[0m"'),(0,r.kt)("p",null,"-gt \u662f\u5426\u5927\u4e8e"),(0,r.kt)("p",null,"-ge \u662f\u5426\u5927\u4e8e\u7b49\u4e8e"),(0,r.kt)("p",null,"-eq \u662f\u5426\u7b49\u4e8e"),(0,r.kt)("p",null,"-ne \u662f\u5426\u4e0d\u7b49\u4e8e"),(0,r.kt)("p",null,"-lt \u662f\u5426\u5c0f\u4e8e"),(0,r.kt)("p",null,"-le \u662f\u5426\u5c0f\u4e8e\u7b49\u4e8e"),(0,r.kt)("p",null,'-z "STRING" \u5b57\u7b26\u4e32\u662f\u5426\u4e3a\u7a7a\uff0c\u7a7a\u4e3a\u771f\uff0c\u4e0d\u7a7a\u4e3a\u5047 '),(0,r.kt)("p",null,'-n "STRING" \u5b57\u7b26\u4e32\u662f\u5426\u4e0d\u7a7a\uff0c\u4e0d\u7a7a\u4e3a\u771f\uff0c\u7a7a\u4e3a\u5047'),(0,r.kt)("p",null,">"," ascii\u7801\u662f\u5426\u5927\u4e8eascii\u7801"),(0,r.kt)("p",null,"=~ \u5de6\u4fa7\u5b57\u7b26\u4e32\u662f\u5426\u80fd\u591f\u88ab\u53f3\u4fa7\u7684PATTERN\u6240\u5339\u914d \u6ce8\u610f: \u6b64\u8868\u8fbe\u5f0f\u7528\u4e8e[","[ ]","]\u4e2d\uff1b\u6269\u5c55\u7684\u6b63\u5219\u8868\u8fbe\u5f0f"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6587\u4ef6\u6d4b\u8bd5")),(0,r.kt)("p",null,"-a FILE\uff1a\u540c -e "),(0,r.kt)("p",null,"-e FILE: \u6587\u4ef6\u5b58\u5728\u6027\u6d4b\u8bd5\uff0c\u5b58\u5728\u4e3a\u771f\uff0c\u5426\u5219\u4e3a\u5047 "),(0,r.kt)("p",null,"-b FILE\uff1a\u662f\u5426\u5b58\u5728\u4e14\u4e3a\u5757\u8bbe\u5907\u6587\u4ef6 "),(0,r.kt)("p",null,"-c FILE\uff1a\u662f\u5426\u5b58\u5728\u4e14\u4e3a\u5b57\u7b26\u8bbe\u5907\u6587\u4ef6 "),(0,r.kt)("p",null,"-d FILE\uff1a\u662f\u5426\u5b58\u5728\u4e14\u4e3a\u76ee\u5f55\u6587\u4ef6 "),(0,r.kt)("p",null,"-f FILE\uff1a\u662f\u5426\u5b58\u5728\u4e14\u4e3a\u666e\u901a\u6587\u4ef6 "),(0,r.kt)("p",null,"-h FILE \u6216 -L FILE\uff1a\u5b58\u5728\u4e14\u4e3a\u7b26\u53f7\u94fe\u63a5\u6587\u4ef6 "),(0,r.kt)("p",null,"-p FILE\uff1a\u662f\u5426\u5b58\u5728\u4e14\u4e3a\u547d\u540d\u7ba1\u9053\u6587\u4ef6 "),(0,r.kt)("p",null,"-S FILE\uff1a\u662f\u5426\u5b58\u5728\u4e14\u4e3a\u5957\u63a5\u5b57\u6587\u4ef6"),(0,r.kt)("p",null,"\u914d\u7f6e\u6587\u4ef6\u6267\u884c\u987a\u5e8f\uff1a"),(0,r.kt)("p",null,"/etc/profile --\x3e /etc/profile.d/*.sh --\x3e ~/.bash_profile --\x3e ~/.bashrc --\x3e /etc/bashrc"),(0,r.kt)("p",null,"profile\u7c7b\u548cbashrc\u7c7b"),(0,r.kt)("p",null,"profile\u7c7b\u4e3a\u4ea4\u4e92\u5f0f\u767b\u5f55\u7684shell\u63d0\u4f9b\u914d\u7f6e "),(0,r.kt)("p",null,"\u5168\u5c40\uff1a/etc/profile, /etc/profile.d/*.sh "),(0,r.kt)("p",null,"\u4e2a\u4eba\uff1a~/.bash_profile"),(0,r.kt)("p",null,"\u529f\u7528\uff1a"),(0,r.kt)("p",null,"(1) \u7528\u4e8e\u5b9a\u4e49\u73af\u5883\u53d8\u91cf "),(0,r.kt)("p",null,"(2) \u8fd0\u884c\u547d\u4ee4\u6216\u811a\u672c"),(0,r.kt)("p",null,"Bashrc\u7c7b"),(0,r.kt)("p",null,"bashrc\u7c7b\uff1a\u4e3a\u975e\u4ea4\u4e92\u5f0f\u548c\u4ea4\u4e92\u5f0f\u767b\u5f55\u7684shell\u63d0\u4f9b\u914d\u7f6e "),(0,r.kt)("p",null,"\u5168\u5c40\uff1a/etc/bashrc"),(0,r.kt)("p",null,"\u4e2a\u4eba\uff1a~/.bashrc"),(0,r.kt)("p",null,"\u529f\u7528\uff1a (1) \u5b9a\u4e49\u547d\u4ee4\u522b\u540d\u548c\u51fd\u6570 (2) \u5b9a\u4e49\u672c\u5730\u53d8\u91cf"),(0,r.kt)("p",null,"\u6761\u4ef6\u5224\u65adcase\u8bed\u53e5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"case \u53d8\u91cf\u5f15\u7528 in\n\nPAT1)\n\n \u5206\u652f1\n\n ;;\n\nPAT2)\n\n \u5206\u652f2\n\n ;;\n\n...\n\n*)\n\n \u9ed8\u8ba4\u5206\u652f\n\n ;;\n\nesac\n")),(0,r.kt)("p",null," ",(0,r.kt)("img",{alt:"image-20231102185004617",src:n(74910).Z,width:"697",height:"446"})),(0,r.kt)("p",null,"#","\u8fd4\u56de\u5b57\u7b26\u4e32\u53d8\u91cfvar\u7684\u957f\u5ea6 ${#var}"),(0,r.kt)("h2",{id:"\u65e5\u5fd7\u6e05\u7406"},"\u65e5\u5fd7\u6e05\u7406"),(0,r.kt)("p",null,"\u6e05\u74065\u5929\u524d\u65e5\u5fd7"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'find ./* -mtime +5 -name "*.log.gz" -exec rm -f {} \\;\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20231102190225684",src:n(87010).Z,width:"1243",height:"261"})),(0,r.kt)("h2",{id:"tcpip\u534f\u8bae\u6808"},"TCP/IP\u534f\u8bae\u6808"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/dbhui/p/9596465.html"},"https://www.cnblogs.com/dbhui/p/9596465.html")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20231102190429487",src:n(46824).Z,width:"985",height:"688"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20231102190452559",src:n(18164).Z,width:"965",height:"463"})),(0,r.kt)("p",null,"\uff081\uff09\u7b2c\u4e00\u6b21\u63e1\u624b\uff1aClient\u5c06\u6807\u5fd7\u4f4dSYN\u7f6e\u4e3a1\uff0c\u968f\u673a\u4ea7\u751f\u4e00\u4e2a\u503cseq=J\uff0c\u5e76\u5c06\u8be5\u6570\u636e\u5305\u53d1\u9001\u7ed9Server\uff0cClient\u8fdb\u5165SYN_SENT\u72b6\u6001\uff0c\u7b49\u5f85Server\u786e\u8ba4\u3002\n\uff082\uff09\u7b2c\u4e8c\u6b21\u63e1\u624b\uff1aServer\u6536\u5230\u6570\u636e\u5305\u540e\u7531\u6807\u5fd7\u4f4dSYN=1\u77e5\u9053Client\u8bf7\u6c42\u5efa\u7acb\u8fde\u63a5\uff0cServer\u5c06\u6807\u5fd7\u4f4dSYN\u548cACK\u90fd\u7f6e\u4e3a1\uff0cack=J+1\uff0c\u968f\u673a\u4ea7\u751f\u4e00\u4e2a\u503cseq=K\uff0c\u5e76\u5c06\u8be5\u6570\u636e\u5305\u53d1\u9001\u7ed9Client\u4ee5\u786e\u8ba4\u8fde\u63a5\u8bf7\u6c42\uff0cServer\u8fdb\u5165SYN_RCVD\u72b6\u6001\u3002\n\uff083\uff09\u7b2c\u4e09\u6b21\u63e1\u624b\uff1aClient\u6536\u5230\u786e\u8ba4\u540e\uff0c\u68c0\u67e5ack\u662f\u5426\u4e3aJ+1\uff0cACK\u662f\u5426\u4e3a1\uff0c\u5982\u679c\u6b63\u786e\u5219\u5c06\u6807\u5fd7\u4f4dACK\u7f6e\u4e3a1\uff0cack=K+1\uff0c\u5e76\u5c06\u8be5\u6570\u636e\u5305\u53d1\u9001\u7ed9Server\uff0cServer\u68c0\u67e5ack\u662f\u5426\u4e3aK+1\uff0cACK\u662f\u5426\u4e3a1\uff0c\u5982\u679c\u6b63\u786e\u5219\u8fde\u63a5\u5efa\u7acb\u6210\u529f\uff0cClient\u548cServer\u8fdb\u5165ESTABLISHED\u72b6\u6001\uff0c\u5b8c\u6210\u4e09\u6b21\u63e1\u624b\uff0c\u968f\u540eClient\u4e0eServer\u4e4b\u95f4\u53ef\u4ee5\u5f00\u59cb\u4f20\u8f93\u6570\u636e\u4e86\u3002"),(0,r.kt)("p",null,"  SYN\u653b\u51fb\uff1a\n\u5728\u4e09\u6b21\u63e1\u624b\u8fc7\u7a0b\u4e2d\uff0cServer\u53d1\u9001SYN-ACK\u4e4b\u540e\uff0c\u6536\u5230Client\u7684ACK\u4e4b\u524d\u7684TCP\u8fde\u63a5\u79f0\u4e3a\u534a\u8fde\u63a5\uff08half-open connect\uff09\uff0c\u6b64\u65f6Server\u5904\u4e8eSYN_RCVD\u72b6\u6001\uff0c\u5f53\u6536\u5230ACK\u540e\uff0cServer\u8f6c\u5165ESTABLISHED\u72b6\u6001\u3002SYN\u653b\u51fb\u5c31\u662fClient\u5728\u77ed\u65f6\u95f4\u5185\u4f2a\u9020\u5927\u91cf\u4e0d\u5b58\u5728\u7684IP\u5730\u5740\uff0c\u5e76\u5411Server\u4e0d\u65ad\u5730\u53d1\u9001SYN\u5305\uff0cServer\u56de\u590d\u786e\u8ba4\u5305\uff0c\u5e76\u7b49\u5f85Client\u7684\u786e\u8ba4\uff0c\u7531\u4e8e\u6e90\u5730\u5740\u662f\u4e0d\u5b58\u5728\u7684\uff0c\u56e0\u6b64\uff0cServer\u9700\u8981\u4e0d\u65ad\u91cd\u53d1\u76f4\u81f3\u8d85\u65f6\uff0c\u8fd9\u4e9b\u4f2a\u9020\u7684SYN\u5305\u5c06\u4ea7\u65f6\u95f4\u5360\u7528\u672a\u8fde\u63a5\u961f\u5217\uff0c\u5bfc\u81f4\u6b63\u5e38\u7684SYN\u8bf7\u6c42\u56e0\u4e3a\u961f\u5217\u6ee1\u800c\u88ab\u4e22\u5f03\uff0c\u4ece\u800c\u5f15\u8d77\u7f51\u7edc\u5835\u585e\u751a\u81f3",(0,r.kt)("a",{parentName:"p",href:"http://www.2cto.com/os/"},"\u7cfb\u7edf"),"\u762b\u75ea\u3002SYN\u653b\u51fb\u65f6\u4e00\u79cd\u5178\u578b\u7684DDOS\u653b\u51fb\uff0c\u68c0\u6d4bSYN\u653b\u51fb\u7684\u65b9\u5f0f\u975e\u5e38\u7b80\u5355\uff0c\u5373\u5f53Server\u4e0a\u6709\u5927\u91cf\u534a\u8fde\u63a5\u72b6\u6001\u4e14\u6e90IP\u5730\u5740\u662f\u968f\u673a\u7684\uff0c\u5219\u53ef\u4ee5\u65ad\u5b9a\u906d\u5230SYN\u653b\u51fb\u4e86\uff0c\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u53ef\u4ee5\u8ba9\u4e4b\u73b0\u884c\uff1a"),(0,r.kt)("p",null,"#netstat -nap | grep SYN_RECV"),(0,r.kt)("h2",{id:"nat\u9759\u6001\u8def\u7531dna"},"NAT\u3001\u9759\u6001\u8def\u7531\uff0cDNA"),(0,r.kt)("p",null,"\u4ecb\u7ecdvxlan\uff0c vlan\u7684\u533a\u522b\uff0c\u7269\u7406\u7f51\u7edc underlay,overlay\u53e0\u52a0\u7f51\u7edc "),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://segmentfault.com/a/1190000022365692"},"https://segmentfault.com/a/1190000022365692")),(0,r.kt)("h2",{id:"raidlvm\u670d\u52a1\u5668"},"Raid,LVM\u670d\u52a1\u5668"),(0,r.kt)("p",null,"Raid\u76f8\u5173\u6982\u5ff5\uff1a "),(0,r.kt)("p",null," Raid0: \u6ca1\u6709\u5197\u4f59\uff0c\u6027\u80fd\u6700\u597d\uff0c\u5197\u4f59\u6700\u5dee\uff0c2\u5757\u8d77  \u78c1\u76d8\u4f7f\u7528\u7387100%\nRaid1: \u5197\u4f59\u6700\u597d\uff0c \u4f46\u662f\u6027\u80fd\u6700\u5dee \uff0c2\u5757\u8d77\uff0c\u6700\u591a\u5141\u8bb8\u574f  \u78c1\u76d8\u4f7f\u7528\u738750%\nRaid5: \u4e0d\u7ba1\u591a\u5c11\u6570\u636e\u76d8\uff0c\u6700\u591a\u53ea\u80fd\u574f\u4e00\u5757\u76d8\u3002\u78c1\u76d8\u4f7f\u7528\u7387(N-1)/N\nRaid10\uff1a "),(0,r.kt)("p",null,"1)  RAID 0+1\u662f\u5b58\u50a8\u6027\u80fd\u548c\u6570\u636e\u5b89\u5168\u517c\u987e\u7684\u65b9\u6848\u3002\u5b83\u5728\u63d0\u4f9b\u4e0eRAID 1\u4e00\u6837\u7684\u6570\u636e\u5b89\u5168\u4fdd\u969c\u7684\u540c\u65f6\uff0c\u4e5f\u63d0\u4f9b\u4e86\u4e0eRAID 0\u8fd1\u4f3c\u7684\u5b58\u50a8\u6027\u80fd\u3002"),(0,r.kt)("p",null,"2)  \u7531\u4e8eRAID 0+1\u4e5f\u901a\u8fc7\u6570\u636e\u7684100%\u5907\u4efd\u63d0\u4f9b\u6570\u636e\u5b89\u5168\u4fdd\u969c\uff0c\u56e0\u6b64RAID 0+1\u7684\u78c1\u76d8\u7a7a\u95f4\u5229\u7528\u7387\u4e0eRAID 1\u76f8\u540c\uff0c\u5b58\u50a8\u6210\u672c\u9ad8\u3002"),(0,r.kt)("p",null,"3)  RAID 0+1\u7684\u7279\u70b9\u4f7f\u5176\u7279\u522b\u9002\u7528\u4e8e\u65e2\u6709\u5927\u91cf\u6570\u636e\u9700\u8981\u5b58\u53d6\uff0c\u540c\u65f6\u53c8\u5bf9\u6570\u636e\u5b89\u5168\u6027\u8981\u6c42\u4e25\u683c\u7684\u9886\u57df\uff0c\u5982\u94f6\u884c\u3001\u91d1\u878d\u3001\u5546\u4e1a\u8d85\u5e02\u3001\u4ed3\u50a8\u5e93\u623f\u3001\u5404\u79cd\u6863\u6848\u7ba1\u7406\u7b49\u3002"),(0,r.kt)("h2",{id:"kvm"},"KVM"),(0,r.kt)("p",null," \u57fa\u672c\u7406\u8bba"),(0,r.kt)("p",null,"\u4ec0\u4e48\u662f\u865a\u62df\u5316\uff1f\u5c31\u662f\u5c06\u4e00\u53f0\u7269\u7406\u673a\u865a\u62df\u6210\u591a\u53f0\u865a\u62df\u673a\uff0c\u865a\u62df\u673a\u4e4b\u524d\u4e92\u4e0d\u5e72\u6270\u3002"),(0,r.kt)("p",null,"\u4e3a\u4ec0\u4e48\u8981\u7528\u865a\u62df\u5316\uff1f\u5145\u5206\u5229\u7528\u7269\u7406\u8d44\u6e90\uff0c\u63d0\u4f9b\u5197\u4f59\u6027\u3001\u5411\u4e91\u8ba1\u7b97\u6f14\u8fdb\u7684\u5fc5\u8981\u57fa\u7840\u3002"),(0,r.kt)("p",null,"\u5e38\u89c1\u7684\u865a\u62df\u5316\u8f6f\u4ef6\uff1fvmware\u3001kvm"),(0,r.kt)("p",null,"\u67e5\u770b\u5f53\u524d\u7cfb\u7edf\u662f\u4f7f\u7528\u54ea\u5bb6\u7684\u865a\u62df\u5316\uff1flscpu"),(0,r.kt)("p",null,"kvm\u7684\u4e09\u4e2a\u7ec4\u4ef6\u53ca\u4f5c\u7528\uff1alibvirt\uff08\u7528\u6765\u7ba1\u7406\u865a\u62df\u673a\uff09\u3001virt\uff08\u5b89\u88c5\u548c\u514b\u9686\u865a\u62df\u673a\uff09\u3001qemu\uff08\u7ba1\u7406\u865a\u62df\u673a\u78c1\u76d8\u7684\uff09"),(0,r.kt)("p",null,"\u78c1\u76d8\u7684\u7c7b\u578b\uff08raw/qcow2\uff09\uff0craw\u4e0d\u652f\u6301\u5feb\u7167\u4f46\u6027\u80fd\u597d\uff0c\u5e38\u7528\u7684\u662fqcom2\u652f\u6301\u5feb\u7167\uff0c\u6027\u80fd\u76f8\u6bd4\u5dee\u4e00\u70b9\u3002"),(0,r.kt)("p",null,"\u7b2c\u4e00\u4e2a\u865a\u62df\u8981\u9ed8\u8ba4\u662f\u4fa6\u542c\u57285900\u8fd9\u4e2a\u7aef\u53e3\u3002"),(0,r.kt)("p",null,"\u6865\u63a5\u7684\u5de5\u4f5c\u539f\u7406"),(0,r.kt)("h2",{id:"iptables"},"iptables"),(0,r.kt)("p",null,"\u8868\u548c\u94fe\uff08\u56db\u8868\u4e94\u94fe\uff09\n1.filter \uff08\u8fc7\u6ee4\uff09 \u8fdb\u884c\u5305\u8fc7\u6ee4\u5904\u7406\u7684\u4e00\u5f20\u8868\n2.nat \uff08\u6620\u5c04\uff09 \u5bf9\u6570\u636e\u5730\u5740\u4fe1\u606f\u8fdb\u884c\u8f6c\u6362/\u6570\u636e\u5305\u7aef\u53e3\u4fe1\u606f\u8fdb\u884c\u8f6c\u6362\n\u5b9e\u73b0\u5185\u7f51\u7528\u6237\u8bbf\u95ee\u5916\u7f51\n\u5b9e\u73b0\u5916\u7f51\u7528\u6237\u8bbf\u95ee\u5185\u7f51\n3.mangle \uff08\u4e0d\u5e38\u7528\uff09\n\u5bf9\u6570\u636e\u5305\u4fe1\u606f\u8fdb\u884c\u6807\u8bb0\n4.raw\uff08\u4e0d\u5e38\u7528"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20231102191014927",src:n(62218).Z,width:"980",height:"327"})),(0,r.kt)("p",null,"\u53ea\u5141\u8bb8\u8fdc\u7a0b\u4e3b\u673a\u8bbf\u95ee\u672c\u673a\u768480\u7aef\u53e3"),(0,r.kt)("p",null,"ptables  -P INPUT DROP"),(0,r.kt)("p",null,"iptables -A INPUT --dport 80 -j ACCEPT"))}k.isMDXComponent=!0},74910:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/image-20231102185004617-d54011fc23561ff086d602d5d20f9184.png"},87010:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/image-20231102190225684-2eee4dc9fe5c82d730abb254a468602b.png"},46824:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/image-20231102190429487-a1d0f72e8f2fc6e9a225f9f792c8a5ba.png"},18164:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/image-20231102190452559-a202144bea47566235c2f5dbd2003f87.png"},62218:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/image-20231102191014927-5c05758959d3bf82416494ebd7dfada2.png"}}]);