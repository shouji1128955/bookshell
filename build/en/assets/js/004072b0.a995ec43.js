"use strict";(self.webpackChunkbookshell=self.webpackChunkbookshell||[]).push([[6596],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>N});var l=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var k=l.createContext({}),p=function(e){var t=l.useContext(k),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return l.createElement(k.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,k=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,N=d["".concat(k,".").concat(m)]||d[m]||c[m]||a;return n?l.createElement(N,o(o({ref:t},u),{},{components:n})):l.createElement(N,o({ref:t},u))}));function N(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var i={};for(var k in t)hasOwnProperty.call(t,k)&&(i[k]=t[k]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<a;p++)o[p]=n[p];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},23353:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var l=n(87462),r=(n(67294),n(3905));const a={},o=void 0,i={unversionedId:"Sre/\u9762\u8bd5\u9898/\u5bb9\u5668\u6280\u672f",id:"Sre/\u9762\u8bd5\u9898/\u5bb9\u5668\u6280\u672f",title:"\u5bb9\u5668\u6280\u672f",description:"\u4ec0\u4e48\u662fdocker",source:"@site/docs/Sre/3-\u9762\u8bd5\u9898/7.\u5bb9\u5668\u6280\u672f.md",sourceDirName:"Sre/3-\u9762\u8bd5\u9898",slug:"/Sre/\u9762\u8bd5\u9898/\u5bb9\u5668\u6280\u672f",permalink:"/en/docs/Sre/\u9762\u8bd5\u9898/\u5bb9\u5668\u6280\u672f",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Sre/3-\u9762\u8bd5\u9898/7.\u5bb9\u5668\u6280\u672f.md",tags:[],version:"current",lastUpdatedBy:"zhanglaiqiang",lastUpdatedAt:1699025724,formattedLastUpdatedAt:"Nov 3, 2023",sidebarPosition:7,frontMatter:{},sidebar:"SreMianshi",previous:{title:"python",permalink:"/en/docs/Sre/\u9762\u8bd5\u9898/python"},next:{title:"golang\u9762\u8bd5\u9898",permalink:"/en/docs/Sre/\u9762\u8bd5\u9898/golang\u9762\u8bd5\u9898"}},k={},p=[{value:"\u4ec0\u4e48\u662fdocker",id:"\u4ec0\u4e48\u662fdocker",level:2},{value:"docker\u8ddfkvm\u6709\u4ec0\u4e48\u533a\u522b",id:"docker\u8ddfkvm\u6709\u4ec0\u4e48\u533a\u522b",level:2},{value:"Docker\u7684\u7f51\u7edc\u6a21\u5f0f",id:"docker\u7684\u7f51\u7edc\u6a21\u5f0f",level:2},{value:"Dockerfile",id:"dockerfile",level:2},{value:"ARG\u548cENV\u6307\u5b9a\u53d8\u91cf",id:"arg\u548cenv\u6307\u5b9a\u53d8\u91cf",level:3},{value:"USER\u6307\u5b9a\u7528\u6237\u8fd0\u884c",id:"user\u6307\u5b9a\u7528\u6237\u8fd0\u884c",level:3},{value:"WORKDIR\u8bbe\u7f6e\u5de5\u4f5c\u76ee\u5f55",id:"workdir\u8bbe\u7f6e\u5de5\u4f5c\u76ee\u5f55",level:3},{value:"EXPOSE\u66b4\u9732\u7aef\u53e3",id:"expose\u66b4\u9732\u7aef\u53e3",level:3},{value:"ADD\u548cCOPY\u6709\u4ec0\u4e48\u533a\u522b",id:"add\u548ccopy\u6709\u4ec0\u4e48\u533a\u522b",level:3},{value:"RUN,CMD,ENTRYPOINT\u7684\u533a\u522b",id:"runcmdentrypoint\u7684\u533a\u522b",level:3},{value:"RUN",id:"run",level:3},{value:"CMD",id:"cmd",level:4},{value:"ONBUILD\u5b50\u955c\u50cf\u6307\u4ee4",id:"onbuild\u5b50\u955c\u50cf\u6307\u4ee4",level:3},{value:"AS\u9636\u6bb5\u6784\u5efa\u6307\u4ee4",id:"as\u9636\u6bb5\u6784\u5efa\u6307\u4ee4",level:3},{value:"HEALTHCHECK",id:"healthcheck",level:3},{value:"\u4f5c\u7528",id:"\u4f5c\u7528",level:4},{value:"\u683c\u5f0f",id:"\u683c\u5f0f",level:4},{value:"\u67e5\u770b\u955c\u50cf\u5c42",id:"\u67e5\u770b\u955c\u50cf\u5c42",level:4},{value:"\u5bb9\u5668\u76f8\u5173\u7684\u547d\u4ee4",id:"\u5bb9\u5668\u76f8\u5173\u7684\u547d\u4ee4",level:2}],u={toc:p},d="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,l.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u4ec0\u4e48\u662fdocker"},"\u4ec0\u4e48\u662fdocker"),(0,r.kt)("p",null,"ocker\u662f\u4e00\u79cd\u5f00\u6e90\u7684\u5bb9\u5668\u5316\u5e73\u53f0\uff0c\u7528\u4e8e\u521b\u5efa\u3001\u90e8\u7f72\u548c\u8fd0\u884c\u5e94\u7528\u7a0b\u5e8f\u548c\u670d\u52a1\u3002\u5b83\u63d0\u4f9b\u4e86\u4e00\u79cd\u8f7b\u91cf\u7ea7\u7684\u5bb9\u5668\u5316\u6280\u672f\uff0c\u4f7f\u5e94\u7528\u7a0b\u5e8f\u53ca\u5176\u6240\u6709\u4f9d\u8d56\u9879\u80fd\u591f\u4ee5\u4e00\u79cd\u4e00\u81f4\u3001\u53ef\u79fb\u690d\u548c\u53ef\u590d\u5236\u7684\u65b9\u5f0f\u5728\u4e0d\u540c\u73af\u5883\u4e2d\u8fd0\u884c\uff0c\u65e0\u8bba\u662f\u5f00\u53d1\u3001\u6d4b\u8bd5\u8fd8\u662f\u751f\u4ea7\u73af\u5883\u3002"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u662fDocker\u4e0e\u5bbf\u4e3b\u673a\u4e4b\u95f4\u7684\u4e00\u4e9b\u533a\u522b\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u5bb9\u5668\u5316\uff1a")," Docker\u7684\u6838\u5fc3\u6982\u5ff5\u662f\u5bb9\u5668\u5316\u3002\u5bb9\u5668\u662f\u8f7b\u91cf\u7ea7\u7684\u3001\u53ef\u72ec\u7acb\u8fd0\u884c\u7684\u5e94\u7528\u7a0b\u5e8f\u548c\u5176\u4f9d\u8d56\u9879\u7684\u5c01\u88c5\uff0c\u5b83\u4eec\u8fd0\u884c\u5728\u4e3b\u673a\u64cd\u4f5c\u7cfb\u7edf\u4e0a\u3002\u4e0e\u4f20\u7edf\u865a\u62df\u673a\u4e0d\u540c\uff0c\u5bb9\u5668\u5171\u4eab\u4e3b\u673a\u64cd\u4f5c\u7cfb\u7edf\u5185\u6838\uff0c\u56e0\u6b64\u66f4\u52a0\u8f7b\u91cf\u7ea7\u548c\u9ad8\u6548\u3002"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u72ec\u7acb\u6027\uff1a")," Docker\u5bb9\u5668\u662f\u72ec\u7acb\u7684\uff0c\u6bcf\u4e2a\u5bb9\u5668\u5305\u542b\u4e86\u5e94\u7528\u7a0b\u5e8f\u53ca\u5176\u4f9d\u8d56\u9879\uff0c\u800c\u4e14\u5b83\u4eec\u5f7c\u6b64\u9694\u79bb\u3002\u8fd9\u610f\u5473\u7740\u4f60\u53ef\u4ee5\u5728\u540c\u4e00\u53f0\u5bbf\u4e3b\u673a\u4e0a\u8fd0\u884c\u591a\u4e2a\u5bb9\u5668\uff0c\u6bcf\u4e2a\u5bb9\u5668\u90fd\u6709\u81ea\u5df1\u7684\u73af\u5883\uff0c\u800c\u5bbf\u4e3b\u673a\u4e0d\u53d7\u5bb9\u5668\u7684\u5f71\u54cd\u3002"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u53ef\u79fb\u690d\u6027\uff1a")," Docker\u5bb9\u5668\u662f\u53ef\u79fb\u690d\u7684\u3002\u4e00\u65e6\u4f60\u521b\u5efa\u4e86\u4e00\u4e2a\u5bb9\u5668\uff0c\u5b83\u53ef\u4ee5\u5728\u4efb\u4f55\u652f\u6301Docker\u7684\u73af\u5883\u4e2d\u8fd0\u884c\uff0c\u800c\u65e0\u9700\u62c5\u5fc3\u914d\u7f6e\u548c\u4f9d\u8d56\u95ee\u9898\u3002"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u90e8\u7f72\u548c\u7ba1\u7406\uff1a")," Docker\u63d0\u4f9b\u4e86\u4e30\u5bcc\u7684\u5de5\u5177\u548c\u547d\u4ee4\u884c\u63a5\u53e3\uff0c"),(0,r.kt)("li",{parentName:"ol"},"\u4f7f\u5e94\u7528\u7a0b\u5e8f\u5bb9\u6613\u90e8\u7f72\u3001\u6269\u5c55\u548c\u7ba1\u7406\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528Docker Compose\u6765\u5b9a\u4e49\u591a\u4e2a\u5bb9\u5668\u7684\u5e94\u7528\u7a0b\u5e8f\u5806\u6808\uff0c\u4f7f\u7528Docker Swarm\u6216Kubernetes\u6765\u7ba1\u7406\u5bb9\u5668\u96c6\u7fa4\uff0c\u4ee5\u5b9e\u73b0\u9ad8\u53ef\u7528\u6027\u548c\u81ea\u52a8\u5316\u3002"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u8d44\u6e90\u6d88\u8017\uff1a")," Docker\u5bb9\u5668\u76f8\u5bf9\u8f83\u8f7b\u91cf\uff0c\u56e0\u6b64\u5728\u5bbf\u4e3b\u673a\u4e0a\u6d88\u8017\u7684\u8d44\u6e90\u8f83\u5c11\u3002\u4e0e\u4f20\u7edf\u865a\u62df\u673a\u76f8\u6bd4\uff0c\u5bb9\u5668\u542f\u52a8\u66f4\u5feb\uff0c\u5360\u7528\u66f4\u5c11\u7684\u5185\u5b58\u548c\u5b58\u50a8\u7a7a\u95f4\u3002"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u9694\u79bb\u6027\uff1a")," Docker\u5bb9\u5668\u63d0\u4f9b\u4e86\u4e00\u5b9a\u7a0b\u5ea6\u7684\u9694\u79bb\uff0c\u4f46\u5b83\u4eec\u5171\u4eab\u4e3b\u673a\u64cd\u4f5c\u7cfb\u7edf\u5185\u6838\u3002\u865a\u62df\u673a\u5728\u66f4\u9ad8\u7a0b\u5ea6\u4e0a\u9694\u79bb\u4e86\u4e0d\u540c\u7684\u64cd\u4f5c\u7cfb\u7edf\u5b9e\u4f8b\uff0c\u800c\u5bb9\u5668\u5219\u66f4\u9002\u5408\u5171\u4eab\u76f8\u540c\u64cd\u4f5c\u7cfb\u7edf\u7684\u5e94\u7528\u7a0b\u5e8f\u3002")),(0,r.kt)("p",null,"\u603b\u4e4b\uff0cDocker\u662f\u4e00\u79cd\u5f3a\u5927\u7684\u5bb9\u5668\u5316\u5e73\u53f0\uff0c\u53ef\u4ee5\u5728\u4e0d\u540c\u73af\u5883\u4e2d\u5b9e\u73b0\u4e00\u81f4\u6027\u3001\u53ef\u79fb\u690d\u6027\u548c\u9ad8\u6548\u6027\u3002\u5b83\u4e0e\u4f20\u7edf\u865a\u62df\u5316\u6280\u672f\u76f8\u6bd4\uff0c\u66f4\u52a0\u8f7b\u91cf\u7ea7\uff0c\u5e76\u4f7f\u5e94\u7528\u7a0b\u5e8f\u7684\u90e8\u7f72\u548c\u7ba1\u7406\u53d8\u5f97\u66f4\u52a0\u4fbf\u6377\u3002"),(0,r.kt)("h2",{id:"docker\u8ddfkvm\u6709\u4ec0\u4e48\u533a\u522b"},"docker\u8ddfkvm\u6709\u4ec0\u4e48\u533a\u522b"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u865a\u62df\u5316\u7ea7\u522b\uff1a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Docker\uff1aDocker\u4f7f\u7528\u5bb9\u5668\u5316\u6280\u672f\uff0c\u5b83\u5728\u5bbf\u4e3b\u64cd\u4f5c\u7cfb\u7edf\u4e0a\u521b\u5efa\u8f7b\u91cf\u7ea7\u7684\u5bb9\u5668\uff0c\u5bb9\u5668\u5171\u4eab\u4e3b\u673a\u64cd\u4f5c\u7cfb\u7edf\u5185\u6838\uff0c\u8fd9\u4f7f\u5f97\u5bb9\u5668\u66f4\u52a0\u8f7b\u91cf\u3001\u542f\u52a8\u66f4\u5feb\u3002"),(0,r.kt)("li",{parentName:"ul"},"KVM\uff1aKVM\u662f\u4e00\u79cd\u786c\u4ef6\u865a\u62df\u5316\u6280\u672f\uff0c\u5b83\u5141\u8bb8\u5728\u5bbf\u4e3b\u673a\u4e0a\u8fd0\u884c\u591a\u4e2a\u865a\u62df\u673a\uff0c\u6bcf\u4e2a\u865a\u62df\u673a\u90fd\u6709\u81ea\u5df1\u7684\u72ec\u7acb\u64cd\u4f5c\u7cfb\u7edf\u5185\u6838\u3002KVM\u865a\u62df\u673a\u901a\u5e38\u6bd4\u5bb9\u5668\u66f4\u91cd\uff0c\u56e0\u4e3a\u5b83\u4eec\u6a21\u62df\u5b8c\u6574\u7684\u64cd\u4f5c\u7cfb\u7edf\u3002"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u8d44\u6e90\u9694\u79bb\uff1a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Docker\uff1aDocker\u5bb9\u5668\u662f\u8fdb\u7a0b\u7ea7\u7684\u9694\u79bb\uff0c\u5b83\u4eec\u5171\u4eab\u4e3b\u673a\u64cd\u4f5c\u7cfb\u7edf\u7684\u5185\u6838\uff0c\u56e0\u6b64\u8d44\u6e90\u9694\u79bb\u76f8\u5bf9\u8f83\u4f4e\u3002\u5bb9\u5668\u4e4b\u95f4\u53ef\u4ee5\u5171\u4eab\u64cd\u4f5c\u7cfb\u7edf\u5185\u6838\uff0c\u4f46\u8d44\u6e90\u9650\u5236\u53ef\u4ee5\u901a\u8fc7Linux\u5185\u6838\u7279\u6027\u8fdb\u884c\u63a7\u5236\u3002"),(0,r.kt)("li",{parentName:"ul"},"KVM\uff1aKVM\u865a\u62df\u673a\u63d0\u4f9b\u4e86\u66f4\u9ad8\u7ea7\u522b\u7684\u8d44\u6e90\u9694\u79bb\uff0c\u56e0\u4e3a\u6bcf\u4e2a\u865a\u62df\u673a\u90fd\u6709\u81ea\u5df1\u7684\u72ec\u7acb\u64cd\u4f5c\u7cfb\u7edf\u5185\u6838\uff0c\u53ef\u4ee5\u5b8c\u5168\u72ec\u7acb\u914d\u7f6e\u548c\u9694\u79bb\u8d44\u6e90\u3002"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u542f\u52a8\u65f6\u95f4\u548c\u6027\u80fd\uff1a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Docker\uff1aDocker\u5bb9\u5668\u542f\u52a8\u5feb\u901f\uff0c\u901a\u5e38\u5728\u51e0\u79d2\u5185\uff0c\u56e0\u4e3a\u5b83\u4eec\u4e0d\u9700\u8981\u542f\u52a8\u6574\u4e2a\u64cd\u4f5c\u7cfb\u7edf\u3002\u5bb9\u5668\u901a\u5e38\u5360\u7528\u8f83\u5c11\u7684\u8d44\u6e90\uff0c\u56e0\u6b64\u6027\u80fd\u8f83\u9ad8\u3002"),(0,r.kt)("li",{parentName:"ul"},"KVM\uff1aKVM\u865a\u62df\u673a\u901a\u5e38\u9700\u8981\u66f4\u957f\u7684\u65f6\u95f4\u6765\u542f\u52a8\uff0c\u56e0\u4e3a\u5b83\u4eec\u5fc5\u987b\u542f\u52a8\u6574\u4e2a\u64cd\u4f5c\u7cfb\u7edf\u3002\u7531\u4e8e\u6bcf\u4e2a\u865a\u62df\u673a\u90fd\u662f\u72ec\u7acb\u7684\u64cd\u4f5c\u7cfb\u7edf\u5b9e\u4f8b\uff0c\u8d44\u6e90\u5f00\u9500\u8f83\u9ad8\uff0c\u6027\u80fd\u8f83\u4f4e\u3002"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u5e94\u7528\u573a\u666f\uff1a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Docker\uff1aDocker\u9002\u7528\u4e8e\u8f7b\u91cf\u7ea7\u5e94\u7528\u7a0b\u5e8f\u5bb9\u5668\u5316\uff0c\u5c24\u5176\u662f\u5fae\u670d\u52a1\u67b6\u6784\u3002\u5b83\u4fa7\u91cd\u4e8e\u5feb\u901f\u90e8\u7f72\u548c\u6269\u5c55\u5e94\u7528\u7a0b\u5e8f"),(0,r.kt)("li",{parentName:"ul"},"KVM\uff1aKVM\u66f4\u9002\u7528\u4e8e\u865a\u62df\u673a\u4e2d\u8fd0\u884c\u4f20\u7edf\u5e94\u7528\u7a0b\u5e8f\uff0c\u5c24\u5176\u662f\u9700\u8981\u5b8c\u5168\u9694\u79bb\u548c\u72ec\u7acb\u64cd\u4f5c\u7cfb\u7edf\u7684\u5e94\u7528\u7a0b\u5e8f\u3002\u5b83\u901a\u5e38\u7528\u4e8e\u865a\u62df\u5316\u670d\u52a1\u5668\u548c\u8fd0\u884c\u591a\u4e2a\u64cd\u4f5c\u7cfb\u7edf\u7684\u573a\u666f\u3002")))),(0,r.kt)("h2",{id:"docker\u7684\u7f51\u7edc\u6a21\u5f0f"},"Docker\u7684\u7f51\u7edc\u6a21\u5f0f"),(0,r.kt)("p",null,"docker\u7684\u56db\u79cd\u7f51\u7edc\u6a21\u5f0f\u4e3a\uff1a"),(0,r.kt)("p",null,"1\u3001host\u6a21\u5f0f\uff0c\u4f7f\u7528\u201c\u2013net=host\u201d\u6307\u5b9a\uff1b"),(0,r.kt)("p",null,"2\u3001container\u6a21\u5f0f\uff0c\u7528\u201c\u2013net=container:NAME_or_ID\u201d\u6307\u5b9a\uff1b"),(0,r.kt)("p",null,"3\u3001none\u6a21\u5f0f\uff0c\u7528\u201c\u2013net=none\u201d\u6307\u5b9a\uff1b"),(0,r.kt)("p",null,"4\u3001bridge\u6a21\u5f0f"),(0,r.kt)("h2",{id:"dockerfile"},"Dockerfile"),(0,r.kt)("h3",{id:"arg\u548cenv\u6307\u5b9a\u53d8\u91cf"},"ARG\u548cENV\u6307\u5b9a\u53d8\u91cf"),(0,r.kt)("p",null,"\u7565"),(0,r.kt)("h3",{id:"user\u6307\u5b9a\u7528\u6237\u8fd0\u884c"},"USER\u6307\u5b9a\u7528\u6237\u8fd0\u884c"),(0,r.kt)("p",null,"\u7565"),(0,r.kt)("h3",{id:"workdir\u8bbe\u7f6e\u5de5\u4f5c\u76ee\u5f55"},"WORKDIR\u8bbe\u7f6e\u5de5\u4f5c\u76ee\u5f55"),(0,r.kt)("p",null,"\u7565"),(0,r.kt)("h3",{id:"expose\u66b4\u9732\u7aef\u53e3"},"EXPOSE\u66b4\u9732\u7aef\u53e3"),(0,r.kt)("p",null,"\u7565"),(0,r.kt)("h3",{id:"add\u548ccopy\u6709\u4ec0\u4e48\u533a\u522b"},"ADD\u548cCOPY\u6709\u4ec0\u4e48\u533a\u522b"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"COPY"),": \u628a",(0,r.kt)("inlineCode",{parentName:"li"},"\u672c\u5730\u6587\u4ef6"),"\u590d\u5236\u5230\u5bb9\u5668\uff1b"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ADD"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"COPY"),"\u7684\u52a0\u5f3a\u7248,\u53ef\u4ee5\u4ece",(0,r.kt)("inlineCode",{parentName:"li"},"url"),"\u590d\u5236\u6587\u4ef6,\u5e76",(0,r.kt)("inlineCode",{parentName:"li"},"\u81ea\u52a8\u89e3\u538b"))),(0,r.kt)("h3",{id:"runcmdentrypoint\u7684\u533a\u522b"},"RUN,CMD,ENTRYPOINT\u7684\u533a\u522b"),(0,r.kt)("h3",{id:"run"},"RUN"),(0,r.kt)("p",null,"\u547d\u4ee4\u6267\u884c\u547d\u4ee4\u5e76\u521b\u5efa\u65b0\u7684\u955c\u50cf\u5c42\uff0c\u901a\u5e38\u7528\u4e8e\u5b89\u88c5\u8f6f\u4ef6\u5305"),(0,r.kt)("h4",{id:"cmd"},"CMD"),(0,r.kt)("p",null,"CMD\u547d\u4ee4\u8bbe\u7f6e\u5bb9\u5668\u542f\u52a8\u540e\u9ed8\u8ba4\u6267\u884c\u7684\u547d\u4ee4\u53ca\u5176\u53c2\u6570\uff0c\u4f46CMD\u8bbe\u7f6e\u7684\u547d\u4ee4\u80fd\u591f\u88abdocker run\u547d\u4ee4\u540e\u9762\u7684\u547d\u4ee4\u884c\u53c2\u6570\u66ff\u6362"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CMD"),"\u7528\u4e8e\u5b9a\u4e49\u5bb9\u5668\u542f\u52a8\u65f6\u8981\u6267\u884c\u7684\u9ed8\u8ba4\u547d\u4ee4\u3002\u4f60\u53ef\u4ee5\u5728Dockerfile\u4e2d\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"li"},"CMD"),"\u6307\u4ee4\u6765\u6307\u5b9a\u5e94\u7528\u7a0b\u5e8f\u6216\u811a\u672c\uff0c\u8fd9\u4e2a\u547d\u4ee4\u5c06\u5728\u5bb9\u5668\u542f\u52a8\u65f6\u6267\u884c\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u4e00\u4e2aDockerfile\u901a\u5e38\u53ea\u80fd\u5305\u542b\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"li"},"CMD"),"\u6307\u4ee4\u3002\u5982\u679c\u6709\u591a\u4e2a",(0,r.kt)("inlineCode",{parentName:"li"},"CMD"),"\u6307\u4ee4\uff0c\u53ea\u6709\u6700\u540e\u4e00\u4e2a\u6307\u4ee4\u4f1a\u751f\u6548\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CMD"),"\u7684\u53c2\u6570\u53ef\u4ee5\u88ab\u8986\u76d6\uff0c\u8fd9\u610f\u5473\u7740\u7528\u6237\u53ef\u4ee5\u5728\u8fd0\u884c\u5bb9\u5668\u65f6(docker run)\u901a\u8fc7\u9644\u52a0\u547d\u4ee4\u884c\u53c2\u6570\u6765\u66ff\u6362",(0,r.kt)("inlineCode",{parentName:"li"},"CMD"),"\u4e2d\u7684\u9ed8\u8ba4\u547d\u4ee4\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ENTRYPOINT\uff1a")),(0,r.kt)("p",null,"ENTRYPOINT\u914d\u7f6e\u5bb9\u5668\u542f\u52a8\u65f6\u7684\u6267\u884c\u547d\u4ee4\uff08\u4e0d\u4f1a\u88ab\u5ffd\u7565\uff0c\u4e00\u5b9a\u4f1a\u88ab\u6267\u884c\uff0c\u5373\u4f7f\u8fd0\u884c docker run\u65f6\u6307\u5b9a\u4e86\u5176\u4ed6\u547d\u4ee4\uff09"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ENTRYPOINT"),"\u7c7b\u4f3c\u4e8e",(0,r.kt)("inlineCode",{parentName:"li"},"CMD"),"\uff0c\u5b83\u4e5f\u7528\u4e8e\u5b9a\u4e49\u5bb9\u5668\u542f\u52a8\u65f6\u8981\u6267\u884c\u7684\u547d\u4ee4\uff0c\u4f46\u4e0e",(0,r.kt)("inlineCode",{parentName:"li"},"CMD"),"\u4e0d\u540c\u7684\u662f\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"ENTRYPOINT"),"\u5b9a\u4e49\u7684\u547d\u4ee4\u662f\u4e0d\u53ef\u8986\u76d6\u7684(\u4f46\u662f\u53ef\u4ee5\u5bb9\u5668\u8fd0\u884c\u65f6\u4f20\u9012\u591a\u4e2a\u53c2\u6570)\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u5728\u5bb9\u5668\u542f\u52a8\u65f6\u63d0\u4f9b\u4e86\u9644\u52a0\u547d\u4ee4\u884c\u53c2\u6570\uff0c\u5b83\u4eec\u5c06\u88ab\u8ffd\u52a0\u5230",(0,r.kt)("inlineCode",{parentName:"li"},"ENTRYPOINT"),"\u6307\u4ee4\u5b9a\u4e49\u7684\u547d\u4ee4\u4e4b\u540e\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u901a\u5e38\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"ENTRYPOINT"),"\u7528\u4e8e\u5b9a\u4e49\u5bb9\u5668\u7684\u4e3b\u8981\u6267\u884c\u7a0b\u5e8f\uff0c\u800c",(0,r.kt)("inlineCode",{parentName:"li"},"CMD"),"\u5219\u901a\u5e38\u7528\u4e8e\u63d0\u4f9b\u9ed8\u8ba4\u53c2\u6570\u3002")),(0,r.kt)("p",null,"\u6848\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'#\u5047\u8bbe\u4f60\u6709\u4e00\u4e2aDocker\u955c\u50cf\uff0c\u5176Dockerfile\u5305\u542b\u4ee5\u4e0bENTRYPOINT\u6307\u4ee4\uff1a\nENTRYPOINT ["echo", "Hello"]\n\ndocker run my-image\n\n#\u8fd9\u5c06\u8f93\u51fa\nHello\n\ndocker run my-image "World"\n\n#\u8fd9\u5c06\u8f93\u51fa\uff1a\nHello World\n')),(0,r.kt)("p",null,"CMD \u53ef\u4e3a ENTRYPOINT \u63d0\u4f9b\u989d\u5916\u7684\u9ed8\u8ba4\u53c2\u6570\u540c\u65f6\u53ef\u5229\u7528 docker run \u547d\u4ee4\u884c\u66ff\u6362\u9ed8\u8ba4\u53c2\u6570\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ENTRYPOINT ['command']\nCMD\uff3b'args1','args2'\uff3d\n")),(0,r.kt)("p",null,"cmd \u548c ENTRYPOINT\u5982\u4f55\u4f7f\u7528exec\u683c\u5f0f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'CMD [ "nginx", "-g", "daemon off;" ]\n\nENTRYPOINT [ "nginx", "-g", "daemon off;" ]\n')),(0,r.kt)("p",null,"cmd \u548c ENTRYPOINT\u5982\u4f55\u4f7f\u7528shell\u683c\u5f0f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'CMD nginx -g "daemon off;"\n\nENTRYPOINT nginx -g "daemon off;"\n')),(0,r.kt)("p",null,"\u6ce8\u610f\uff1a "),(0,r.kt)("p",null,"\u5728Docker\u4e2d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"CMD"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"ENTRYPOINT"),"\u53ef\u4ee5\u4f7f\u7528exec\u683c\u5f0f\u5b9a\u4e49\uff0c\u8fd9\u662f\u4e3a\u4e86\u63d0\u4f9b\u66f4\u597d\u7684\u4fe1\u53f7\u5904\u7406\u548c\u64cd\u4f5c\u7cfb\u7edf\u95f4\u517c\u5bb9\u6027\u3002\u4f7f\u7528exec\u683c\u5f0f\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"CMD"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"ENTRYPOINT"),"\u4ee5JSON\u6570\u7ec4\u7684\u5f62\u5f0f\u5b9a\u4e49\u547d\u4ee4\uff0c\u8fd9\u6709\u52a9\u4e8e\u786e\u4fdd\u547d\u4ee4\u4ee5\u53ef\u6267\u884c\u6587\u4ef6\u7684\u5f62\u5f0f\u8fd0\u884c\uff0c\u800c\u4e0d\u662f\u901a\u8fc7shell\u89e3\u91ca\u3002\u8fd9\u5bf9\u4e8e\u4fe1\u53f7\u5904\u7406\u548c\u4e0e\u64cd\u4f5c\u7cfb\u7edf\u7684\u4ea4\u4e92\u66f4\u52a0\u53ef\u63a7\uff0c\u5c24\u5176\u5728Linux\u73af\u5883\u4e0b\u3002"),(0,r.kt)("p",null,"shell \u683c\u5f0f\u5e95\u5c42\u4f1a\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"shell /bin/sh -c <command>\uff0c\u800cexec\u4f1a\u76f4\u63a5\u8c03\u7528<command>\uff0c"),"\u4e0d\u4f1a\u88abshell\u89e3\u6790"),(0,r.kt)("h3",{id:"onbuild\u5b50\u955c\u50cf\u6307\u4ee4"},"ONBUILD\u5b50\u955c\u50cf\u6307\u4ee4"),(0,r.kt)("p",null,"\u7565"),(0,r.kt)("h3",{id:"as\u9636\u6bb5\u6784\u5efa\u6307\u4ee4"},"AS\u9636\u6bb5\u6784\u5efa\u6307\u4ee4"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"\u4e00\u4e2a dockerfile")," \u53ef\u4ee5\u6709",(0,r.kt)("inlineCode",{parentName:"p"},"\u591a\u4e2a FROM"),"\u6765",(0,r.kt)("inlineCode",{parentName:"p"},"\u521b\u5efa\u591a\u4e2a\u955c\u50cf"),"\uff0c\u6216",(0,r.kt)("inlineCode",{parentName:"p"},"\u533a\u5206\u6784\u5efa\u9636\u6bb5"),"\uff0c\u5c06",(0,r.kt)("inlineCode",{parentName:"p"},"\u4e00\u6784\u5efa\u9636\u6bb5\u4f5c"),"\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"\u4e8c\u6784\u5efa\u9636\u6bb5"),"\u7684\u4f9d\u8d56\u9879;\n",(0,r.kt)("inlineCode",{parentName:"p"},"AS <\u9636\u6bb5\u540d>")," \u5c31\u662f\u547d\u540d\u5f53\u524d\u6784\u5efa\u9636\u6bb5;\n\u5728\u540e\u7eed\u6784\u5efa\u9636\u6bb5\uff0c\u53ef\u4ee5\u7ed9 ",(0,r.kt)("inlineCode",{parentName:"p"},"FROM"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"COPY")," \u6307\u4ee4\u7528\u4e0a\uff0c\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"--from=<\u4e0a\u4e00\u4e2a\u9636\u6bb5\u540d>")," \u5f15\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"\u4e0a\u4e00\u9636\u6bb5"),"\u6784\u5efa\u7684\u955c\u50cf."),(0,r.kt)("h3",{id:"healthcheck"},"HEALTHCHECK"),(0,r.kt)("h4",{id:"\u4f5c\u7528"},"\u4f5c\u7528"),(0,r.kt)("p",null,"\u5065\u5eb7\u68c0\u67e5\n\u5f53\u5728\u4e00\u4e2a\u955c\u50cf\u6307\u5b9a\u4e86 HEALTHCHECK \u6307\u4ee4\u540e\uff0c\u7528\u5176\u542f\u52a8\u5bb9\u5668\uff0c\u521d\u59cb\u72b6\u6001\u4f1a\u4e3a starting\uff0c\u5728 HEALTHCHECK \u6307\u4ee4\u68c0\u67e5\u6210\u529f\u540e\u53d8\u4e3a healthy\uff0c\u5982\u679c\u8fde\u7eed\u4e00\u5b9a\u6b21\u6570\u5931\u8d25\uff0c\u5219\u4f1a\u53d8\u4e3a unhealthy"),(0,r.kt)("p",null,"HEALTHCHECK \u8fd4\u56de\u503c\n\u51b3\u5b9a\u4e86\u8be5\u6b21\u5065\u5eb7\u68c0\u67e5\u7684\u6210\u529f\u4e0e\u5426\uff1a0\uff1a\u6210\u529f\uff1b1\uff1a\u5931\u8d25\uff1b2\uff1a\u4fdd\u7559\uff08\u4e0d\u8981\u4f7f\u7528\u8fd9\u4e2a\u503c\uff09"),(0,r.kt)("p",null,"\u5728\u6ca1\u6709 HEALTHCHECK \u6307\u4ee4\u524d\uff0cDocker \u5f15\u64ce\u53ea\u53ef\u4ee5\u901a\u8fc7\u5bb9\u5668\u5185\u4e3b\u8fdb\u7a0b\u662f\u5426\u9000\u51fa\u6765\u5224\u65ad\u5bb9\u5668\u662f\u5426\u72b6\u6001\u5f02\u5e38\n\u5f88\u591a\u60c5\u51b5\u4e0b\u8fd9\u6ca1\u95ee\u9898\uff0c\u4f46\u662f\u5982\u679c\u7a0b\u5e8f\u8fdb\u5165\u6b7b\u9501\u72b6\u6001\uff0c\u6216\u8005\u6b7b\u5faa\u73af\u72b6\u6001\uff0c\u5e94\u7528\u8fdb\u7a0b\u5e76\u4e0d\u9000\u51fa\uff0c\u4f46\u662f\u8be5\u5bb9\u5668\u5df2\u7ecf\u65e0\u6cd5\u63d0\u4f9b\u670d\u52a1\u4e86"),(0,r.kt)("p",null,"\u5728 1.12 \u4ee5\u524d\uff0cDocker \u4e0d\u4f1a\u68c0\u6d4b\u5230\u5bb9\u5668\u7684\u8fd9\u79cd\u72b6\u6001\uff0c\u4ece\u800c\u4e0d\u4f1a\u91cd\u65b0\u8c03\u5ea6\uff0c\u5bfc\u81f4\u53ef\u80fd\u4f1a\u6709\u90e8\u5206\u5bb9\u5668\u5df2\u7ecf\u65e0\u6cd5\u63d0\u4f9b\u670d\u52a1\u4e86\u5374\u8fd8\u5728\u63a5\u53d7\u7528\u6237\u8bf7\u6c42\n\u81ea 1.12 \u4e4b\u540e\uff0cDocker \u63d0\u4f9b\u4e86 HEALTHCHECK \u6307\u4ee4\uff0c\u901a\u8fc7\u8be5\u6307\u4ee4\u6307\u5b9a\u4e00\u884c\u547d\u4ee4\uff0c\u7528\u8fd9\u884c\u547d\u4ee4\u6765\u5224\u65ad\u5bb9\u5668\u4e3b\u8fdb\u7a0b\u7684\u670d\u52a1\u72b6\u6001\u662f\u5426\u8fd8\u6b63\u5e38\uff0c\u4ece\u800c\u6bd4\u8f83\u771f\u5b9e\u7684\u53cd\u5e94\u5bb9\u5668\u5b9e\u9645\u72b6\u6001"),(0,r.kt)("p",null,"HEALTHCHECK \u652f\u6301\u7684\u9009\u9879\n--interval=<\u95f4\u9694> \uff1a\u4e24\u6b21\u5065\u5eb7\u68c0\u67e5\u7684\u95f4\u9694\uff0c\u9ed8\u8ba4\u4e3a 30 \u79d2\uff1b\n--timeout=<\u65f6\u957f> \uff1a\u5065\u5eb7\u68c0\u67e5\u547d\u4ee4\u8fd0\u884c\u8d85\u65f6\u65f6\u95f4\uff0c\u5982\u679c\u8d85\u8fc7\u8fd9\u4e2a\u65f6\u95f4\uff0c\u672c\u6b21\u5065\u5eb7\u68c0\u67e5\u5c31\u88ab\u89c6\u4e3a\u5931\u8d25\uff0c\u9ed8\u8ba4 30 \u79d2\uff1b\n--retries=<\u6b21\u6570> \uff1a\u5f53\u8fde\u7eed\u5931\u8d25\u6307\u5b9a\u6b21\u6570\u540e\uff0c\u5219\u5c06\u5bb9\u5668\u72b6\u6001\u89c6\u4e3a unhealthy \uff0c\u9ed8\u8ba4 3 \u6b21"),(0,r.kt)("h4",{id:"\u683c\u5f0f"},"\u683c\u5f0f"),(0,r.kt)("p",null,"\u8bbe\u7f6e\u68c0\u67e5\u5bb9\u5668\u5065\u5eb7\u72b6\u51b5\u7684\u547d\u4ee4"),(0,r.kt)("p",null,"HEALTHCHECK ","[\u9009\u9879]"," CMD <\u547d\u4ee4>"),(0,r.kt)("p",null,"\u5982\u679c\u57fa\u7840\u955c\u50cf\u6709\u5065\u5eb7\u68c0\u67e5\u6307\u4ee4\uff0c\u4f7f\u7528\u8fd9\u884c\u53ef\u4ee5\u5c4f\u853d\u6389\u5176\u5065\u5eb7\u68c0\u67e5\u6307\u4ee4"),(0,r.kt)("p",null,"HEALTHCHECK NONE"),(0,r.kt)("p",null,"\u67e5\u770b\u5bb9\u5668\u5065\u5eb7\u68c0\u67e5\u4fe1\u606f"),(0,r.kt)("p",null,"\u521a\u542f\u52a8\u65f6\u7684\u72b6\u6001\u662f health\uff1astarting\uff0c\u8fc7\u591a\u51e0\u79d2\u540e\u5c31\u53d8\u6210 healthy \u4e86\n\u5982\u679c\u5065\u5eb7\u68c0\u67e5\u8fde\u7eed\u5931\u8d25\u8d85\u8fc7\u4e86\u91cd\u8bd5\u6b21\u6570\uff0c\u72b6\u6001\u5c31\u4f1a\u53d8\u4e3a  unhealthy"),(0,r.kt)("p",null,"\u67e5\u770b\u5bb9\u5668\u5065\u5eb7\u68c0\u67e5\u4fe1\u606f\n\u4e3a\u4e86\u5e2e\u52a9\u6392\u969c\uff0c\u5065\u5eb7\u68c0\u67e5\u547d\u4ee4\u7684\u8f93\u51fa\uff08\u5305\u62ec stdout \u4ee5\u53ca stderr\uff09\u90fd\u4f1a\u88ab\u5b58\u50a8\u4e8e\u5065\u5eb7\u72b6\u6001\u91cc\uff0c\u53ef\u4ee5\u7528 docker inspect \u6765\u67e5\u770b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker inspect --format '{{json .State.Health}}' web | python -m json.tool\n")),(0,r.kt)("h4",{id:"\u67e5\u770b\u955c\u50cf\u5c42"},"\u67e5\u770b\u955c\u50cf\u5c42"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"# \u67e5\u770bnginx\u955c\u50cf\u7684\u6587\u4ef6\u5c42")," "),(0,r.kt)("p",null,"docker history omaidb/gost:3.0.0-rc6"),(0,r.kt)("h2",{id:"\u5bb9\u5668\u76f8\u5173\u7684\u547d\u4ee4"},"\u5bb9\u5668\u76f8\u5173\u7684\u547d\u4ee4"),(0,r.kt)("p",null,"docker inspect container //\u67e5\u8be2\u5bb9\u5668\u5143\u6570\u636e"),(0,r.kt)("p",null,"docker stats --no-stream   //\u67e5\u770b\u8d44\u6e90"),(0,r.kt)("p",null,"docker system df "),(0,r.kt)("p",null,"docker system prune -a    //\u6e05\u7406\u6240\u6709\u8d44\u6e90-\u8c28\u614e\u64cd\u4f5c"),(0,r.kt)("p",null,"docker build  -t xxxx ."),(0,r.kt)("p",null,"docker save -o exp_ubuntu_v1.tar exp/ubuntu:v1    //\u5bfc\u51fa\u955c\u50cf"))}c.isMDXComponent=!0}}]);