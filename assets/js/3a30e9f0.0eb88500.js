"use strict";(self.webpackChunkbookshell=self.webpackChunkbookshell||[]).push([[1854],{5680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>u});var a=t(6540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function g(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=a.createContext({}),p=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},s=function(e){var n=p(e.components);return a.createElement(o.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,s=g(e,["components","mdxType","originalType","parentName"]),m=p(t),c=i,u=m["".concat(o,".").concat(c)]||m[c]||d[c]||l;return t?a.createElement(u,r(r({ref:n},s),{},{components:t})):a.createElement(u,r({ref:n},s))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,r=new Array(l);r[0]=c;var g={};for(var o in n)hasOwnProperty.call(n,o)&&(g[o]=n[o]);g.originalType=e,g[m]="string"==typeof e?e:i,r[1]=g;for(var p=2;p<l;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},2036:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>g,toc:()=>p});var a=t(8168),i=(t(6540),t(5680));const l={},r="Git\u4f7f\u7528\u624b\u518c",g={unversionedId:"Sre/\u65e5\u5e38\u8fd0\u7ef4/git\u64cd\u4f5c",id:"Sre/\u65e5\u5e38\u8fd0\u7ef4/git\u64cd\u4f5c",title:"Git\u4f7f\u7528\u624b\u518c",description:"\u5b89\u88c5",source:"@site/docs/Sre/1-\u65e5\u5e38\u8fd0\u7ef4/3.git\u64cd\u4f5c.md",sourceDirName:"Sre/1-\u65e5\u5e38\u8fd0\u7ef4",slug:"/Sre/\u65e5\u5e38\u8fd0\u7ef4/git\u64cd\u4f5c",permalink:"/bookshell/docs/Sre/\u65e5\u5e38\u8fd0\u7ef4/git\u64cd\u4f5c",draft:!1,editUrl:"https://shouji1128955.github.io/bookshell/docs/Sre/1-\u65e5\u5e38\u8fd0\u7ef4/3.git\u64cd\u4f5c.md",tags:[],version:"current",lastUpdatedBy:"zhanglaiqiang",lastUpdatedAt:1727765186,formattedLastUpdatedAt:"2024\u5e7410\u67081\u65e5",sidebarPosition:3,frontMatter:{},sidebar:"SreOper",previous:{title:"\u955c\u50cf\u5217\u8868",permalink:"/bookshell/docs/Sre/\u65e5\u5e38\u8fd0\u7ef4/\u955c\u50cf\u5217\u8868"},next:{title:"npm\u5e38\u7528\u547d\u4ee4",permalink:"/bookshell/docs/Sre/\u65e5\u5e38\u8fd0\u7ef4/npm\u64cd\u4f5c"}},o={},p=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u4fee\u6539commit",id:"\u4fee\u6539commit",level:2},{value:"\u521b\u5efa\u7248\u672c\u5e93\uff08\u4ed3\u5e93\uff09",id:"\u521b\u5efa\u7248\u672c\u5e93\u4ed3\u5e93",level:2},{value:"\u6dfb\u52a0\u6587\u4ef6\u5230\u4ed3\u5e93",id:"\u6dfb\u52a0\u6587\u4ef6\u5230\u4ed3\u5e93",level:2},{value:"\u63d0\u4ea4\u63cf\u8ff0\u89c4\u8303",id:"\u63d0\u4ea4\u63cf\u8ff0\u89c4\u8303",level:4},{value:"\u7248\u672c\u7ba1\u7406",id:"\u7248\u672c\u7ba1\u7406",level:2},{value:"\u63d0\u4ea4\u4fee\u6539",id:"\u63d0\u4ea4\u4fee\u6539",level:4},{value:"\u67e5\u770b\u7248\u672c\u8bb0\u5f55",id:"\u67e5\u770b\u7248\u672c\u8bb0\u5f55",level:4},{value:"\u56de\u9000\u7248\u672c",id:"\u56de\u9000\u7248\u672c",level:4},{value:"\u64a4\u9500\u4fee\u6539",id:"\u64a4\u9500\u4fee\u6539",level:4},{value:"\u5220\u9664\u6587\u4ef6",id:"\u5220\u9664\u6587\u4ef6",level:4},{value:"\u8fdc\u7a0b\u4ed3\u5e93",id:"\u8fdc\u7a0b\u4ed3\u5e93",level:2},{value:"SSH\u9a8c\u8bc1",id:"ssh\u9a8c\u8bc1",level:4},{value:"\u5173\u8054\u8fdc\u7a0b\u4ed3\u5e93",id:"\u5173\u8054\u8fdc\u7a0b\u4ed3\u5e93",level:4},{value:"\u67e5\u770b\u8fdc\u7a0b\u4ed3\u5e93",id:"\u67e5\u770b\u8fdc\u7a0b\u4ed3\u5e93",level:4},{value:"\u5220\u9664\u8fdc\u7a0b\u4ed3\u5e93",id:"\u5220\u9664\u8fdc\u7a0b\u4ed3\u5e93",level:4},{value:"\u4ece\u8fdc\u7a0b\u5e93\u514b\u9686\u9879\u76ee",id:"\u4ece\u8fdc\u7a0b\u5e93\u514b\u9686\u9879\u76ee",level:4},{value:"\u514b\u9686\u6307\u5b9a\u5206\u652f",id:"\u514b\u9686\u6307\u5b9a\u5206\u652f",level:5},{value:"\u5206\u652f\u7ba1\u7406",id:"\u5206\u652f\u7ba1\u7406",level:2},{value:"\u521b\u5efa\u5206\u652f",id:"\u521b\u5efa\u5206\u652f",level:4},{value:"\u67e5\u770b\u5206\u652f",id:"\u67e5\u770b\u5206\u652f",level:4},{value:"\u5207\u6362\u5206\u652f",id:"\u5207\u6362\u5206\u652f",level:4},{value:"\u5408\u5e76\u5206\u652f",id:"\u5408\u5e76\u5206\u652f",level:4},{value:"\u5220\u9664\u5206\u652f",id:"\u5220\u9664\u5206\u652f",level:4},{value:"\u4fee\u6539\u5206\u652f\u540d",id:"\u4fee\u6539\u5206\u652f\u540d",level:4},{value:"\u5e2e\u52a9\u547d\u4ee4",id:"\u5e2e\u52a9\u547d\u4ee4",level:2},{value:"\u53c2\u8003\u6587\u6863",id:"\u53c2\u8003\u6587\u6863",level:2},{value:"GitHub\u66f4\u65b0token",id:"github\u66f4\u65b0token",level:2}],s={toc:p},m="wrapper";function d(e){let{components:n,...t}=e;return(0,i.yg)(m,(0,a.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"git\u4f7f\u7528\u624b\u518c"},"Git\u4f7f\u7528\u624b\u518c"),(0,i.yg)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,i.yg)("p",null,"\u5b98\u7f51\u4e0b\u8f7d\uff1a",(0,i.yg)("a",{parentName:"p",href:"https://git-scm.com/downloads"},"https://git-scm.com/downloads")," \u4e0b\u8f7d\u5b8c\u6210\u540e\u4f7f\u7528\u9ed8\u8ba4\u8fdb\u884c\u5b89\u88c5\u3002"),(0,i.yg)("p",null,"\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u5728\u5f00\u59cb\u83dc\u5355\u91cc\u627e\u5230 ",(0,i.yg)("inlineCode",{parentName:"p"},"Git")," -> ",(0,i.yg)("inlineCode",{parentName:"p"},"Git Bash"),"\uff0c\u8e66\u51fa\u4e00\u4e2a\u7c7b\u4f3c\u547d\u4ee4\u884c\u7a97\u53e3\u7684\u4e1c\u897f\uff0c\u5c31\u8bf4\u660eGit\u5b89\u88c5\u6210\u529f\uff01\n\u8fd8\u9700\u8981\u6700\u540e\u4e00\u6b65\u8bbe\u7f6e\uff0c\u5728\u547d\u4ee4\u884c\u8f93\u5165\uff1a"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},'git config --global user.name "Your Name"\ngit config --global user.email "email@example.com"\n')),(0,i.yg)("p",null,"\u56e0\u4e3aGit\u662f\u5206\u5e03\u5f0f\u7248\u672c\u63a7\u5236\u7cfb\u7edf\uff0c\u6240\u4ee5\uff0c\u6bcf\u4e2a\u673a\u5668\u90fd\u5fc5\u987b\u81ea\u62a5\u5bb6\u95e8\uff1a\u4f60\u7684\u540d\u5b57\u548cEmail\u5730\u5740\u3002"),(0,i.yg)("h2",{id:"\u4fee\u6539commit"},"\u4fee\u6539commit"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'git commit --amend  -m "delete swp file"\nfind ./ ./  -name ".*" -print\n')),(0,i.yg)("h2",{id:"\u521b\u5efa\u7248\u672c\u5e93\u4ed3\u5e93"},"\u521b\u5efa\u7248\u672c\u5e93\uff08\u4ed3\u5e93\uff09"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"# \u521b\u5efa\u4ed3\u5e93\nmkdir <\u4ed3\u5e93name>\n\n# \u8fdb\u5165\u4ed3\u5e93\ncd <\u4ed3\u5e93name>\n\n# \u6b64\u547d\u4ee4\u7528\u4e8e\u663e\u793a\u5f53\u524d\u76ee\u5f55\npwd\n\n# \u628a\u5f53\u524d\u76ee\u5f55\u521d\u59cb\u5316\u6210Git\u4ed3\u5e93\ngit init\n")),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"\u4e5f\u4e0d\u4e00\u5b9a\u5fc5\u987b\u5728\u7a7a\u76ee\u5f55\u4e0b\u521b\u5efaGit\u4ed3\u5e93\uff0c\u9009\u62e9\u4e00\u4e2a\u5df2\u7ecf\u6709\u4e1c\u897f\u7684\u76ee\u5f55\u76f4\u63a5",(0,i.yg)("inlineCode",{parentName:"p"},"git init"),"\u4e5f\u662f\u53ef\u4ee5\u7684\u3002")),(0,i.yg)("h2",{id:"\u6dfb\u52a0\u6587\u4ef6\u5230\u4ed3\u5e93"},"\u6dfb\u52a0\u6587\u4ef6\u5230\u4ed3\u5e93"),(0,i.yg)("p",null,"\u5728\u4ed3\u5e93\u76ee\u5f55\u4e0b\u653e\u5165\u6587\u4ef6\uff0c\u5982\u65b0\u5efa\u4e00\u4e2a",(0,i.yg)("inlineCode",{parentName:"p"},"test.txt"),"\u6587\u4ef6\uff0c\u7136\u540e\u4f7f\u7528",(0,i.yg)("inlineCode",{parentName:"p"},"git add test.txt"),"\u547d\u4ee4\u544a\u8bc9Git\uff0c\u628a\u6587\u4ef6\u6dfb\u52a0\u5230\u7f13\u5b58\u533a\uff0c\u7136\u540e\u4f7f\u7528",(0,i.yg)("inlineCode",{parentName:"p"},'git commit -m "\u63d0\u4ea4\u63cf\u8ff0"'),"\u544a\u8bc9Git\uff0c\u628a\u6587\u4ef6\u63d0\u4ea4\u5230\u4ed3\u5e93\u3002"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},'# \u6dfb\u52a0\u6307\u5b9a\u6587\u4ef6\u6216\u6587\u4ef6\u5939\u5230\u7f13\u5b58\u533a\uff0c\u6587\u4ef6\u9700\u6dfb\u52a0\u540e\u7f00\ngit add <\u6587\u4ef6\u6216\u6587\u4ef6\u5939name>                   # \u5355\u4e2a\u6587\u4ef6\ngit add <\u6587\u4ef6\u6216\u6587\u4ef6\u5939name> <\u6587\u4ef6\u6216\u6587\u4ef6\u5939name>  # \u591a\u4e2a\u6587\u4ef6\n\n# \u6216 \u5168\u90e8\u6587\u4ef6\u540c\u65f6\u6dfb\u52a0\u5230\u7f13\u5b58\u533a\ngit add .\n\n# \u628a\u6587\u4ef6\u4ece\u7f13\u5b58\u533a\u63d0\u4ea4\u81f3\u4ed3\u5e93\ngit commit -m "\u63d0\u4ea4\u63cf\u8ff0"\n')),(0,i.yg)("h4",{id:"\u63d0\u4ea4\u63cf\u8ff0\u89c4\u8303"},"\u63d0\u4ea4\u63cf\u8ff0\u89c4\u8303"),(0,i.yg)("p",null,"\u5728\u63d0\u4ea4\u4ee3\u7801\u65f6\u8f93\u5165\u6e05\u6670\u7684\u8bf4\u660e\u6709\u5229\u4e8e\u7248\u672c\u7ba1\u7406\uff0c\u5efa\u8bae\u642d\u914d\u5982\u4e0b\u5173\u952e\u5b57\u7f16\u5199\u63d0\u4ea4\u63cf\u8ff0"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"# \u65b0\u5efa(add)\n# \u5220\u9664(rm)\n# \u66f4\u65b0(update)\n# \u6539\u52a8(change)\n# \u5b9e\u73b0\n# \u53d1\u5e03\n# \u4fee\u590d\n...\n")),(0,i.yg)("h2",{id:"\u7248\u672c\u7ba1\u7406"},"\u7248\u672c\u7ba1\u7406"),(0,i.yg)("h4",{id:"\u63d0\u4ea4\u4fee\u6539"},"\u63d0\u4ea4\u4fee\u6539"),(0,i.yg)("p",null,"\u5982\u4fee\u6539",(0,i.yg)("inlineCode",{parentName:"p"},"test.txt"),"\u7684\u5185\u5bb9\u540e\uff0c\u8fd0\u884c",(0,i.yg)("inlineCode",{parentName:"p"},"git status"),"\u547d\u4ee4\u770b\u770b\u88ab\u4fee\u6539\u7684\u6587\u4ef6\uff0c\u7136\u540e\u518d\u4f7f\u7528",(0,i.yg)("inlineCode",{parentName:"p"},"git add test.txt"),"\u3001\n",(0,i.yg)("inlineCode",{parentName:"p"},'git commit -m "\u4fee\u6539\u63cf\u8ff0"'),"\u628a\u4fee\u6539\u540e\u7684\u6587\u4ef6\u63d0\u4ea4\u5230\u4ed3\u5e93\uff0c\u63d0\u4ea4\u540e\u53ef\u518d\u6b21\u4f7f\u7528",(0,i.yg)("inlineCode",{parentName:"p"},"git status"),"\u67e5\u770b\u5f53\u524d\u72b6\u6001\u3002"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"# \u663e\u793a \u65b0\u589e/\u5220\u9664/\u88ab\u6539\u52a8\u7b49 \u7684\u6587\u4ef6\ngit status\n")),(0,i.yg)("h4",{id:"\u67e5\u770b\u7248\u672c\u8bb0\u5f55"},"\u67e5\u770b\u7248\u672c\u8bb0\u5f55"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"# \u67e5\u770b\u7248\u672c\u8bb0\u5f55\ngit log   # \u663e\u793a\u7248\u672c\u53f7\u3001\u63d0\u4ea4\u65f6\u95f4\u7b49\u4fe1\u606f\n")),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"\u4e5f\u53ef\u4f7f\u7528\u53ef\u89c6\u5316\u5de5\u5177\u67e5\u770bGit\u7248\u672c\u5386\u53f2\uff1a\n\u5728\u4ed3\u5e93\u76ee\u5f55\u53f3\u952e > ",(0,i.yg)("inlineCode",{parentName:"p"},"Git BUI Here"))),(0,i.yg)("h4",{id:"\u56de\u9000\u7248\u672c"},"\u56de\u9000\u7248\u672c"),(0,i.yg)("p",null,"\u9996\u5148\uff0cGit\u5fc5\u987b\u77e5\u9053\u5f53\u524d\u7248\u672c\u662f\u54ea\u4e2a\u7248\u672c\uff0c\u5728Git\u4e2d\uff0c\u7528",(0,i.yg)("inlineCode",{parentName:"p"},"HEAD"),"\u8868\u793a\u5f53\u524d\u7248\u672c\uff0c\u4e5f\u5c31\u662f\u6700\u65b0\u7684\u63d0\u4ea41094adb...\uff08\u6ce8\u610f\u6211\u7684\u63d0\u4ea4ID\u548c\u4f60\u7684\u80af\u5b9a\u4e0d\u4e00\u6837\uff09\uff0c\u4e0a\u4e00\u4e2a\u7248\u672c\u5c31\u662f",(0,i.yg)("inlineCode",{parentName:"p"},"HEAD^"),"\uff0c\u4e0a\u4e0a\u4e00\u4e2a\u7248\u672c\u5c31\u662f",(0,i.yg)("inlineCode",{parentName:"p"},"HEAD^^"),"\uff0c\u5f53\u7136\u5f80\u4e0a100\u4e2a\u7248\u672c\u5199100\u4e2a^\u6bd4\u8f83\u5bb9\u6613\u6570\u4e0d\u8fc7\u6765\uff0c\u6240\u4ee5\u5199\u6210",(0,i.yg)("inlineCode",{parentName:"p"},"HEAD~100"),"\u3002"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"# \u56de\u9000\u5230\u4e0a\u4e00\u4e2a\u7248\u672c\n$ git reset --hard HEAD^\n")),(0,i.yg)("p",null,"\u6b64\u65f6\u67e5\u770b",(0,i.yg)("inlineCode",{parentName:"p"},"git log"),"\u8bb0\u5f55\u53d1\u73b0\uff0c\u539f\u6765\u6700\u65b0\u7684\u7248\u672c\u5df2\u7ecf\u6ca1\u6709\u4e86\uff0c\u60f3\u56de\u5230\u539f\u6765\u6700\u65b0\u7684\u7248\u672c\u600e\u4e48\u529e\uff1f\u8fd9\u5c31\u9700\u8981\u77e5\u9053\u6700\u65b0\u7684\u7248\u672c\u7684\u7248\u672c\u53f7"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"# \u8df3\u8f6c\u5230\u6307\u5b9a\u7248\u672c\ngit reset --hard <\u7248\u672c\u53f7\u524d\u51e0\u4f4d>\n")),(0,i.yg)("p",null,"\u4f46\u662f\u4e0d\u77e5\u9053\u7248\u672c\u53f7\u600e\u4e48\u529e\uff1fGit\u63d0\u4f9b\u4e86\u4e00\u4e2a\u547d\u4ee4",(0,i.yg)("inlineCode",{parentName:"p"},"git reflog"),"\u7528\u6765\u8bb0\u5f55\u4f60\u7684\u6bcf\u4e00\u6b21\u547d\u4ee4"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"git reflog\n")),(0,i.yg)("h4",{id:"\u64a4\u9500\u4fee\u6539"},"\u64a4\u9500\u4fee\u6539"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://www.liaoxuefeng.com/wiki/896043488029600/897889638509536"},"https://www.liaoxuefeng.com/wiki/896043488029600/897889638509536")),(0,i.yg)("h4",{id:"\u5220\u9664\u6587\u4ef6"},"\u5220\u9664\u6587\u4ef6"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://www.liaoxuefeng.com/wiki/896043488029600/900002180232448"},"https://www.liaoxuefeng.com/wiki/896043488029600/900002180232448")),(0,i.yg)("h2",{id:"\u8fdc\u7a0b\u4ed3\u5e93"},"\u8fdc\u7a0b\u4ed3\u5e93"),(0,i.yg)("h4",{id:"ssh\u9a8c\u8bc1"},"SSH\u9a8c\u8bc1"),(0,i.yg)("p",null,"\u4f7f\u672c\u673a\u80fd\u5173\u8054\u8fdc\u7a0b\u4ed3\u5e93\uff0c\u9996\u6b21\u9700\u8981SSH\u9a8c\u8bc1"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\u7b2c1\u6b65\uff1a\u521b\u5efa",(0,i.yg)("inlineCode",{parentName:"li"},"SSH Key"),"\u3002\u5728\u7528\u6237\u4e3b\uff08C:\\Users\\dell\uff09\u76ee\u5f55\u4e0b\uff0c\u770b\u770b\u6709\u6ca1\u6709.ssh\u76ee\u5f55\uff0c\n\u5982\u679c\u6709\uff0c\u518d\u770b\u770b\u8fd9\u4e2a\u76ee\u5f55\u4e0b\u6709\u6ca1\u6709",(0,i.yg)("inlineCode",{parentName:"li"},"id_rsa"),"\u548c",(0,i.yg)("inlineCode",{parentName:"li"},"id_rsa.pub"),"\u8fd9\u4e24\u4e2a\u6587\u4ef6\uff0c\u5982\u679c\u5df2\u7ecf\u6709\u4e86\uff0c\u53ef\u76f4\u63a5\u8df3\u5230\u4e0b\u4e00\u6b65\u3002\n\u5982\u679c\u6ca1\u6709\uff0c\u6253\u5f00Shell\uff08Windows\u4e0b\u6253\u5f00Git Bash\uff09\uff0c\u521b\u5efa",(0,i.yg)("inlineCode",{parentName:"li"},"SSH Key"),"\uff1a")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},'# \u521b\u5efaSSH Key\nssh-keygen -t rsa -C "\u90ae\u4ef6\u5730\u5740"\n')),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\u7b2c2\u6b65\uff1a\u767b\u9646GitHub\uff0c\u53f3\u4e0a\u89d2\u5934\u50cf > settings > SSH and GPG keys >Add SSH Key\uff0c\u5728key\u7684\u6587\u672c\u6846\u91cc\u7c98\u8d34",(0,i.yg)("inlineCode",{parentName:"li"},"id_rsa.pub"),"\u6587\u4ef6\u7684\u5185\u5bb9")),(0,i.yg)("h4",{id:"\u5173\u8054\u8fdc\u7a0b\u4ed3\u5e93"},"\u5173\u8054\u8fdc\u7a0b\u4ed3\u5e93"),(0,i.yg)("p",null,"SSH\u9a8c\u8bc1\u5b8c\u6210\u540e\uff0c\u5728github\u521b\u5efa\u4ed3\u5e93\uff0c\u521b\u5efa\u4ed3\u5e93\u65f6\u8bb0\u5f97\u53d6\u6d88 ",(0,i.yg)("inlineCode",{parentName:"p"},"Initialize this repository with a README"),"\u7684\u52fe\u9009\uff0c\u7136\u540e\u5728\u672c\u5730\u547d\u4ee4\uff1a"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"# \u5173\u8054\u8fdc\u7a0b\u4ed3\u5e93\uff0c\u4ed3\u5e93\u540d\u4e00\u822c\u4f7f\u7528origin\ngit remote add <\u4ed3\u5e93\u540d> <\u8fdc\u7a0b\u4ed3\u5e93\u5730\u5740>\n\n# \u793a\u4f8b\ngit remote add origin git@github.com:xugaoyi/test.git\n")),(0,i.yg)("p",null,"\u4e0b\u4e00\u6b65\uff0c\u5c31\u53ef\u4ee5\u628a\u672c\u5730\u5e93\u7684\u6240\u6709\u5185\u5bb9\u63a8\u9001\u5230\u8fdc\u7a0b\u5e93\u4e0a"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"# \u628a\u6587\u4ef6\u63a8\u9001\u5230\u8fdc\u7a0b\u4ed3\u5e93\ngit push -u <\u4ed3\u5e93\u540d> <\u5206\u652f\u540d>\n\n# \u793a\u4f8b\ngit push -u origin master\n")),(0,i.yg)("p",null,"\u7531\u4e8e\u8fdc\u7a0b\u5e93\u662f\u7a7a\u7684\uff0c\u6211\u4eec\u7b2c\u4e00\u6b21\u63a8\u9001",(0,i.yg)("inlineCode",{parentName:"p"},"master"),"\u5206\u652f\u65f6\uff0c\u52a0\u4e0a\u4e86",(0,i.yg)("inlineCode",{parentName:"p"},"-u"),"\u53c2\u6570\uff0cGit\u4e0d\u4f46\u4f1a\u628a\u672c\u5730\u7684",(0,i.yg)("inlineCode",{parentName:"p"},"master"),"\u5206\u652f\u5185\u5bb9\u63a8\u9001\u7684\u8fdc\u7a0b\u65b0\u7684",(0,i.yg)("inlineCode",{parentName:"p"},"master"),"\u5206\u652f\uff0c\u8fd8\u4f1a\u628a\u672c\u5730\u7684",(0,i.yg)("inlineCode",{parentName:"p"},"master"),"\u5206\u652f\u548c\u8fdc\u7a0b\u7684",(0,i.yg)("inlineCode",{parentName:"p"},"master"),"\u5206\u652f\u5173\u8054\u8d77\u6765\uff0c\u5728\u4ee5\u540e\u7684\u63a8\u9001\u6216\u8005\u62c9\u53d6\u65f6\u5c31\u53ef\u4ee5\u7b80\u5316\u547d\u4ee4\u3002"),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"\u524d\u63d0\u662f\u76ee\u5f55\u5df2\u7ecf",(0,i.yg)("inlineCode",{parentName:"p"},"git init"),"\u521d\u59cb\u5316\u6210\u4ed3\u5e93\uff0c\u5e76\u4e14",(0,i.yg)("inlineCode",{parentName:"p"},"git status"),"\u72b6\u6001\u662f\u6ca1\u6709\u6539\u52a8\u7684\uff0c\u5982\u679c\u6709\u6539\u52a8\u5219\u5148",(0,i.yg)("inlineCode",{parentName:"p"},"git add ."),"\u6dfb\u52a0\u81f3\u7f13\u5b58\u533a\uff0c",(0,i.yg)("inlineCode",{parentName:"p"},"git commit -m '\u63d0\u4ea4\u63cf\u8ff0'"),"\u63d0\u4ea4\u81f3\u4ed3\u5e93\uff0c\u7136\u540e\u6267\u884c\u4e0a\u9762\u547d\u4ee4\u3002"),(0,i.yg)("p",{parentName:"blockquote"},"\u5982\u521b\u5efa\u4ed3\u5e93\u65f6\u52fe\u9009\u4e86 ",(0,i.yg)("inlineCode",{parentName:"p"},"Initialize this repository with a README")," \u5219\u9700\u5148\u62c9\u53d6",(0,i.yg)("inlineCode",{parentName:"p"},"README.md"),"\u6587\u4ef6\u5230\u672c\u5730\u4ed3\u5e93",(0,i.yg)("inlineCode",{parentName:"p"},"git pull")),(0,i.yg)("p",{parentName:"blockquote"},"\u53ef\u5173\u8054\u591a\u4e2a\u8fdc\u7a0b\u4ed3\u5e93\uff0c\u6ce8\u610f\u7ed9\u4e0d\u540c\u7684\u8fdc\u7a0b\u4ed3\u5e93\u53d6\u4e0d\u4e00\u6837\u7684\u540d\u79f0\uff0c\u63d0\u4ea4\u662f\u5206\u522b\u6309\u540d\u79f0\u63d0\u4ea4\u5230\u4e0d\u4e00\u6837\u7684\u8fdc\u7a0b\u4ed3\u5e93\u3002")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"# \u7b80\u5316\u7684\u63a8\u9001\u547d\u4ee4\ngit push\n")),(0,i.yg)("h4",{id:"\u67e5\u770b\u8fdc\u7a0b\u4ed3\u5e93"},"\u67e5\u770b\u8fdc\u7a0b\u4ed3\u5e93"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"# \u67e5\u770b\u8fdc\u7a0b\u4ed3\u5e93\ngit remote -v\n")),(0,i.yg)("h4",{id:"\u5220\u9664\u8fdc\u7a0b\u4ed3\u5e93"},"\u5220\u9664\u8fdc\u7a0b\u4ed3\u5e93"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"# \u5220\u9664\u8fdc\u7a0b\u4ed3\u5e93\ngit remote rm <\u4ed3\u5e93\u540d>\n")),(0,i.yg)("h4",{id:"\u4ece\u8fdc\u7a0b\u5e93\u514b\u9686\u9879\u76ee"},"\u4ece\u8fdc\u7a0b\u5e93\u514b\u9686\u9879\u76ee"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"# \u4ece\u8fdc\u7a0b\u5e93\u514b\u9686\u9879\u76ee\ngit clone <\u4ed3\u5e93\u5730\u5740>\n")),(0,i.yg)("h5",{id:"\u514b\u9686\u6307\u5b9a\u5206\u652f"},"\u514b\u9686\u6307\u5b9a\u5206\u652f"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"# \u514b\u9686\u6307\u5b9a\u5206\u652f\ngit clone -b <\u5206\u652f\u540d> <\u4ed3\u5e93\u5730\u5740>\n")),(0,i.yg)("h2",{id:"\u5206\u652f\u7ba1\u7406"},"\u5206\u652f\u7ba1\u7406"),(0,i.yg)("h4",{id:"\u521b\u5efa\u5206\u652f"},"\u521b\u5efa\u5206\u652f"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"# \u521b\u5efa\u5206\u652f\ngit checkout -b <\u5206\u652f\u540d>\n")),(0,i.yg)("h4",{id:"\u67e5\u770b\u5206\u652f"},"\u67e5\u770b\u5206\u652f"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"# \u67e5\u770b\u5206\u652f\ngit branch\n")),(0,i.yg)("p",null,"\u67e5\u770b\u5206\u652f\u65f6\uff0c\u5728\u5206\u652f\u524d\u5e26 * \u53f7\u7684\u8868\u793a\u5f53\u524d\u7684\u5206\u652f"),(0,i.yg)("h4",{id:"\u5207\u6362\u5206\u652f"},"\u5207\u6362\u5206\u652f"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"# \u5207\u6362\u5206\u652f\ngit checkout <\u5206\u652f\u540d>\n")),(0,i.yg)("h4",{id:"\u5408\u5e76\u5206\u652f"},"\u5408\u5e76\u5206\u652f"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"# \u5408\u5e76\u672c\u5730\u7684\u5206\u652f\ngit merge <\u5206\u652f\u540d>\n\n# \u5408\u5e76\u8fdc\u7a0b\u7684\u5206\u652f\ngit merge <\u8fdc\u7a0b\u4ed3\u5e93\u540d>/<\u5206\u652f\u540d>\n")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff0c\u662f\u5c06\u6307\u5b9a\u5206\u652f\u5408\u5e76\u5230\u5f53\u524d\u5206\u652f\uff0c\u5e76\u975e\u5f53\u524d\u5206\u652f\u5408\u5e76\u5230\u6307\u5b9a\u5206\u652f\u3002"),(0,i.yg)("p",null,"\u4e00\u822c\u60c5\u51b5\u4e0b\u662f\u628a\u5f53\u524d\u5206\u652f\u5207\u6362\u5230",(0,i.yg)("strong",{parentName:"p"},"\u4e3b\u5206\u652f"),"\uff0c\u7136\u540e\u628a",(0,i.yg)("strong",{parentName:"p"},"\u5b50\u5206\u652f"),"\u5408\u5e76\u5230",(0,i.yg)("strong",{parentName:"p"},"\u4e3b\u5206\u652f"),"\u3002"),(0,i.yg)("h4",{id:"\u5220\u9664\u5206\u652f"},"\u5220\u9664\u5206\u652f"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"# \u5220\u9664\u5206\u652f\ngit branch -d <\u5206\u652f\u540d>\n")),(0,i.yg)("h4",{id:"\u4fee\u6539\u5206\u652f\u540d"},"\u4fee\u6539\u5206\u652f\u540d"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"# \u4fee\u6539\u5206\u652f\u540d\ngit branch -m <\u539f\u5206\u652f\u540d> <\u65b0\u5206\u652f\u540d>\n")),(0,i.yg)("h2",{id:"\u5e2e\u52a9\u547d\u4ee4"},"\u5e2e\u52a9\u547d\u4ee4"),(0,i.yg)("p",null,"\u5982\u5bf9\u547d\u4ee4\u4e0d\u6e05\u695a\u65f6\uff0c\u53ef\u4f7f\u7528",(0,i.yg)("inlineCode",{parentName:"p"},"git help"),"\u547d\u4ee4\u663e\u793a\u51fagit\u547d\u4ee4\u4ecb\u7ecd\u3002"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"# \u5e2e\u52a9\u547d\u4ee4\ngit help\n")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"$ git help\nusage: git [--version] [--help] [-C <path>] [-c <name>=<value>]\n           [--exec-path[=<path>]] [--html-path] [--man-path] [--info-path]\n           [-p | --paginate | -P | --no-pager] [--no-replace-objects] [--bare]\n           [--git-dir=<path>] [--work-tree=<path>] [--namespace=<name>]\n           <command> [<args>]\n\nThese are common Git commands used in various situations:\n\nstart a working area (see also: git help tutorial)\n   clone      Clone a repository into a new directory\n   init       Create an empty Git repository or reinitialize an existing one\n\nwork on the current change (see also: git help everyday)\n   add        Add file contents to the index\n   mv         Move or rename a file, a directory, or a symlink\n   reset      Reset current HEAD to the specified state\n   rm         Remove files from the working tree and from the index\n\nexamine the history and state (see also: git help revisions)\n   bisect     Use binary search to find the commit that introduced a bug\n   grep       Print lines matching a pattern\n   log        Show commit logs\n   show       Show various types of objects\n   status     Show the working tree status\n\ngrow, mark and tweak your common history\n   branch     List, create, or delete branches\n   checkout   Switch branches or restore working tree files\n   commit     Record changes to the repository\n   diff       Show changes between commits, commit and working tree, etc\n   merge      Join two or more development histories together\n   rebase     Reapply commits on top of another base tip\n   tag        Create, list, delete or verify a tag object signed with GPG\n\ncollaborate (see also: git help workflows)\n   fetch      Download objects and refs from another repository\n   pull       Fetch from and integrate with another repository or a local branch\n   push       Update remote refs along with associated objects\n\n'git help -a' and 'git help -g' list available subcommands and some\nconcept guides. See 'git help <command>' or 'git help <concept>'\nto read about a specific subcommand or concept.\n")),(0,i.yg)("p",null,"\u7ffb\u8bd1\u5de5\u5177\u7ffb\u8bd1\u4e2d\u6587"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"$ git help\n\u4f7f\u7528\uff1agit [--version] [--help] [-C <path>] [-c <name>=<value>]\n           [--exec-path[=<path>]] [--html-path] [--man-path] [--info-path]\n           [-p | --paginate | -P | --no-pager] [--no-replace-objects] [--bare]\n           [--git-dir=<path>] [--work-tree=<path>] [--namespace=<name>]\n           <command> [<args>]\n\n\u8fd9\u4e9b\u662f\u5728\u5404\u79cd\u60c5\u51b5\u4e0b\u4f7f\u7528\u7684\u901a\u7528Git\u547d\u4ee4\uff1a\n\nstart a working area (\u53c2\u89c1\u547d\u4ee4: git help tutorial)\n   clone      \u5c06\u5b58\u50a8\u5e93\u514b\u9686\u5230\u65b0\u76ee\u5f55\u4e2d\n   init       \u521b\u5efa\u4e00\u4e2a\u7a7a\u7684Git\u5b58\u50a8\u5e93\u6216\u91cd\u65b0\u521d\u59cb\u5316\u4e00\u4e2a\u73b0\u6709\u7684\u5b58\u50a8\u5e93\n\nwork on the current change (\u53c2\u89c1\u547d\u4ee4: git help everyday)\n   add        \u5c06\u6587\u4ef6\u5185\u5bb9\u6dfb\u52a0\u5230\u7d22\u5f15\u4e2d\n   mv         \u79fb\u52a8\u6216\u91cd\u547d\u540d\u6587\u4ef6\u3001\u76ee\u5f55\u6216\u7b26\u53f7\u94fe\u63a5\n   reset      \u5c06\u5f53\u524d\u78c1\u5934\u91cd\u7f6e\u4e3a\u6307\u5b9a\u72b6\u6001\n   rm         \u4ece\u5de5\u4f5c\u6811\u548c\u7d22\u5f15\u4e2d\u5220\u9664\u6587\u4ef6\n\nexamine the history and state (\u53c2\u89c1\u547d\u4ee4: git help revisions)\n   bisect     \u4f7f\u7528\u4e8c\u5206\u67e5\u627e\u67e5\u627e\u5f15\u5165\u9519\u8bef\u7684\u63d0\u4ea4\n   grep       \u6253\u5370\u4e0e\u6a21\u5f0f\u5339\u914d\u7684\u884c\n   log        \u663e\u793a\u63d0\u4ea4\u65e5\u5fd7\n   show       \u663e\u793a\u5404\u79cd\u7c7b\u578b\u7684\u5bf9\u8c61\n   status     \u663e\u793a\u5de5\u4f5c\u6811\u72b6\u6001\n\ngrow, mark and tweak your common history\n   branch     \u5217\u51fa\u3001\u521b\u5efa\u6216\u5220\u9664\u5206\u652f\n   checkout   \u5207\u6362\u5206\u652f\u6216\u8fd8\u539f\u5de5\u4f5c\u6811\u6587\u4ef6\n   commit     \u8bb0\u5f55\u5bf9\u5b58\u50a8\u5e93\u7684\u66f4\u6539\n   diff       \u663e\u793a\u63d0\u4ea4\u3001\u63d0\u4ea4\u548c\u5de5\u4f5c\u6811\u7b49\u4e4b\u95f4\u7684\u66f4\u6539\n   merge      \u5c06\u4e24\u4e2a\u6216\u591a\u4e2a\u5f00\u53d1\u5386\u53f2\u8fde\u63a5\u5728\u4e00\u8d77\n   rebase     \u5728\u53e6\u4e00\u4e2a\u57fa\u672c\u63d0\u793a\u4e4b\u4e0a\u91cd\u65b0\u5e94\u7528\u63d0\u4ea4\n   tag        \u521b\u5efa\u3001\u5217\u8868\u3001\u5220\u9664\u6216\u9a8c\u8bc1\u7528GPG\u7b7e\u540d\u7684\u6807\u8bb0\u5bf9\u8c61\n\ncollaborate (\u53c2\u89c1\u547d\u4ee4: git help workflows)\n   fetch      \u4ece\u53e6\u4e00\u4e2a\u5b58\u50a8\u5e93\u4e0b\u8f7d\u5bf9\u8c61\u548c\u5f15\u7528\n   pull       \u4ece\u53e6\u4e00\u4e2a\u5b58\u50a8\u5e93\u6216\u672c\u5730\u5206\u652f\u83b7\u53d6\u5e76\u4e0e\u4e4b\u96c6\u6210\n   push       \u66f4\u65b0\u8fdc\u7a0b\u5f15\u7528\u548c\u76f8\u5173\u5bf9\u8c61\n\n'git help -a' \u548c 'git help -g' \u5217\u51fa\u53ef\u7528\u7684\u5b50\u547d\u4ee4\u548c\u4e00\u4e9b\u6982\u5ff5\u6307\u5bfc\u3002\n\u547d\u4ee4'git help <command>' \u6216 'git help <concept>' \u67e5\u770b\u7279\u5b9a\u5b50\u547d\u4ee4\u6216\u6982\u5ff5.\n")),(0,i.yg)("h2",{id:"\u53c2\u8003\u6587\u6863"},"\u53c2\u8003\u6587\u6863"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://www.liaoxuefeng.com/wiki/896043488029600"},"https://www.liaoxuefeng.com/wiki/896043488029600")),(0,i.yg)("h1",{id:"\u9879\u76ee\u521d\u59cb\u5316\u64cd\u4f5c"},"\u9879\u76ee\u521d\u59cb\u5316\u64cd\u4f5c"),(0,i.yg)("p",null,"Command line instructions"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell"},'Git global setup\ngit config --global user.name "Administrator"\ngit config --global user.email "409003604@qq.com"\n\n')),(0,i.yg)("p",null,"Create a new repository"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell"},'\ngit clone http://gitlab.kube-ops.svc.cluster.local/root/golang-test.git\ncd golang-test\ntouch README.md\ngit add README.md\ngit commit -m "add README"\ngit push -u origin master\n')),(0,i.yg)("p",null,"Existing folder\ncd existing_folder"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell"},'git init\ngit remote add origin http://gitlab.kube-ops.svc.cluster.local/root/golang-test.git\ngit add .\ngit commit -m "Initial commit"\ngit push -u origin master\n\n')),(0,i.yg)("p",null,"Existing Git repository"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"cd existing_repo\ngit remote rename origin old-origin\ngit remote add origin http://gitlab.kube-ops.svc.cluster.local/root/golang-test.git\ngit push -u origin --all\ngit push -u origin --tags   \n")),(0,i.yg)("h2",{id:"github\u66f4\u65b0token"},"GitHub\u66f4\u65b0token"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"git remote remove origin\ngit remote add origin  https://github.com/shouji1128955/bookshell.git\n")))}d.isMDXComponent=!0}}]);