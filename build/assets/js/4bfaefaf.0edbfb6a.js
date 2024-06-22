"use strict";(self.webpackChunkbookshell=self.webpackChunkbookshell||[]).push([[7019],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),i=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),s=i(n),k=l,b=s["".concat(p,".").concat(k)]||s[k]||m[k]||a;return n?r.createElement(b,o(o({ref:t},c),{},{components:n})):r.createElement(b,o({ref:t},c))}));function b(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=k;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u[s]="string"==typeof e?e:l,o[1]=u;for(var i=2;i<a;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},7260:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>u,toc:()=>i});var r=n(7462),l=(n(7294),n(3905));const a={},o=void 0,u={unversionedId:"Sre/\u9762\u8bd5\u9898/\u7f13\u5b58\u670d\u52a1",id:"Sre/\u9762\u8bd5\u9898/\u7f13\u5b58\u670d\u52a1",title:"\u7f13\u5b58\u670d\u52a1",description:"\u4f7f\u7528rabbitmq\u7684\u573a\u666f",source:"@site/docs/Sre/3-\u9762\u8bd5\u9898/5.\u7f13\u5b58\u670d\u52a1.md",sourceDirName:"Sre/3-\u9762\u8bd5\u9898",slug:"/Sre/\u9762\u8bd5\u9898/\u7f13\u5b58\u670d\u52a1",permalink:"/docs/Sre/\u9762\u8bd5\u9898/\u7f13\u5b58\u670d\u52a1",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Sre/3-\u9762\u8bd5\u9898/5.\u7f13\u5b58\u670d\u52a1.md",tags:[],version:"current",lastUpdatedBy:"AMiner",lastUpdatedAt:1719066785,formattedLastUpdatedAt:"2024\u5e746\u670822\u65e5",sidebarPosition:5,frontMatter:{},sidebar:"SreMianshi",previous:{title:"prometheus\u90e8\u7f72\u6587\u6863\u8f93\u51fa",permalink:"/docs/Sre/\u9762\u8bd5\u9898/prometheus\u90e8\u7f72\u6587\u6863\u8f93\u51fa"},next:{title:"python",permalink:"/docs/Sre/\u9762\u8bd5\u9898/python"}},p={},i=[{value:"\u4f7f\u7528rabbitmq\u7684\u573a\u666f",id:"\u4f7f\u7528rabbitmq\u7684\u573a\u666f",level:2},{value:"\u5de5\u4f5c\u6a21\u5f0f\u4ecb\u7ecd",id:"\u5de5\u4f5c\u6a21\u5f0f\u4ecb\u7ecd",level:2},{value:"\u4e00\u3001 \u7b80\u5355\u6a21\u5f0f",id:"\u4e00-\u7b80\u5355\u6a21\u5f0f",level:3},{value:"\u4e8c\u3001 \u5de5\u4f5c\u6a21\u5f0f",id:"\u4e8c-\u5de5\u4f5c\u6a21\u5f0f",level:3},{value:"\u4e09\u3001 publish/subscribe\u53d1\u5e03\u8ba2\u9605(\u5171\u4eab\u8d44\u6e90)",id:"\u4e09-publishsubscribe\u53d1\u5e03\u8ba2\u9605\u5171\u4eab\u8d44\u6e90",level:3},{value:"\u56db\u3001 \u8def\u7531\u6a21\u5f0f",id:"\u56db-\u8def\u7531\u6a21\u5f0f",level:3},{value:"\u4e94\u3001 \u4e3b\u9898\u6a21\u5f0f",id:"\u4e94-\u4e3b\u9898\u6a21\u5f0f",level:3},{value:"RabbitMQ\u7684\u4e09\u79cd\u96c6\u7fa4\u6a21\u5f0f",id:"rabbitmq\u7684\u4e09\u79cd\u96c6\u7fa4\u6a21\u5f0f",level:2},{value:"1\uff09\u5355\u673a\u6a21\u5f0f",id:"1\u5355\u673a\u6a21\u5f0f",level:5},{value:"2\uff09\u666e\u901a\u96c6\u7fa4\u6a21\u5f0f",id:"2\u666e\u901a\u96c6\u7fa4\u6a21\u5f0f",level:5},{value:"3\uff09\u955c\u50cf\u96c6\u7fa4\u6a21\u5f0f",id:"3\u955c\u50cf\u96c6\u7fa4\u6a21\u5f0f",level:5}],c={toc:i},s="wrapper";function m(e){let{components:t,...n}=e;return(0,l.kt)(s,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u4f7f\u7528rabbitmq\u7684\u573a\u666f"},"\u4f7f\u7528rabbitmq\u7684\u573a\u666f"),(0,l.kt)("p",null,"\uff081\uff09 \u670d\u52a1\u95f4\u5f02\u6b65\u901a\u4fe1"),(0,l.kt)("p",null,"\uff082\uff09 \u987a\u5e8f\u6d88\u8d39"),(0,l.kt)("p",null,"\uff083\uff09 \u5b9a\u65f6\u4efb\u52a1"),(0,l.kt)("p",null,"\uff084\uff09 \u6d41\u91cf\u524a\u5cf0"),(0,l.kt)("p",null,"\uff085\uff09 \u89e3\u8026\uff08\u4e3a\u9762\u5411\u670d\u52a1\u7684\u67b6\u6784\uff08SOA\uff09\u63d0\u4f9b\u57fa\u672c\u7684\u6700\u7ec8\u4e00\u81f4\u6027\u5b9e\u73b0\uff09"),(0,l.kt)("h2",{id:"\u5de5\u4f5c\u6a21\u5f0f\u4ecb\u7ecd"},"\u5de5\u4f5c\u6a21\u5f0f\u4ecb\u7ecd"),(0,l.kt)("h3",{id:"\u4e00-\u7b80\u5355\u6a21\u5f0f"},"\u4e00\u3001 \u7b80\u5355\u6a21\u5f0f"),(0,l.kt)("p",null,"\u529f\u80fd\uff1a\u4e00\u4e2a\u751f\u4ea7\u8005P\u53d1\u9001\u6d88\u606f\u5230\u961f\u5217Q,\u4e00\u4e2a\u6d88\u8d39\u8005C\u63a5\u6536"),(0,l.kt)("p",null,"\u2460  \u751f\u4ea7\u8005\u5b9e\u73b0\u601d\u8def\uff1a"),(0,l.kt)("p",null,"\u521b\u5efa\u8fde\u63a5\u5de5\u5382ConnectionFactory\uff0c\u8bbe\u7f6e\u670d\u52a1\u5730\u5740127.0.0.1\uff0c\u7aef\u53e3\u53f75672\uff0c\u8bbe\u7f6e\u7528\u6237\u540d\u3001\u5bc6\u7801\u3001virtual host\uff0c\u4ece\u8fde\u63a5\u5de5\u5382\u4e2d\u83b7\u53d6\u8fde\u63a5connection\uff0c\u4f7f\u7528\u8fde\u63a5\u521b\u5efa\u901a\u9053channel\uff0c\u4f7f\u7528\u901a\u9053channel\u521b\u5efa\u961f\u5217queue\uff0c\u4f7f\u7528\u901a\u9053channel\u5411\u961f\u5217\u4e2d\u53d1\u9001\u6d88\u606f\uff0c\u5173\u95ed\u901a\u9053\u548c\u8fde\u63a5\u3002"),(0,l.kt)("p",null,"\u2461  \u6d88\u8d39\u8005\u5b9e\u73b0\u601d\u8def\uff1a"),(0,l.kt)("p",null,"\u521b\u5efa\u8fde\u63a5\u5de5\u5382ConnectionFactory\uff0c\u8bbe\u7f6e\u670d\u52a1\u5730\u5740127.0.0.1\uff0c\u7aef\u53e3\u53f75672\uff0c\u8bbe\u7f6e\u7528\u6237\u540d\u3001\u5bc6\u7801\u3001virtual host\uff0c\u4ece\u8fde\u63a5\u5de5\u5382\u4e2d\u83b7\u53d6\u8fde\u63a5connection\uff0c\u4f7f\u7528\u8fde\u63a5\u521b\u5efa\u901a\u9053channel\uff0c\u4f7f\u7528\u901a\u9053channel\u521b\u5efa\u961f\u5217queue, \u521b\u5efa\u6d88\u8d39\u8005\u5e76\u76d1\u542c\u961f\u5217\uff0c\u4ece\u961f\u5217\u4e2d\u8bfb\u53d6\u6d88\u606f\u3002"),(0,l.kt)("h3",{id:"\u4e8c-\u5de5\u4f5c\u6a21\u5f0f"},"\u4e8c\u3001 \u5de5\u4f5c\u6a21\u5f0f"),(0,l.kt)("p",null,"\u529f\u80fd\uff1a\u4e00\u4e2a\u751f\u4ea7\u8005\uff0c\u591a\u4e2a\u6d88\u8d39\u8005\uff0c\u6bcf\u4e2a\u6d88\u8d39\u8005\u83b7\u53d6\u5230\u7684\u6d88\u606f\u552f\u4e00\uff0c\u591a\u4e2a\u6d88\u8d39\u8005\u53ea\u6709\u4e00\u4e2a\u961f\u5217"),(0,l.kt)("p",null,"\u4efb\u52a1\u961f\u5217\uff1a\u907f\u514d\u7acb\u5373\u505a\u4e00\u4e2a\u8d44\u6e90\u5bc6\u96c6\u578b\u4efb\u52a1\uff0c\u5fc5\u987b\u7b49\u5f85\u5b83\u5b8c\u6210\uff0c\u800c\u662f\u628a\u8fd9\u4e2a\u4efb\u52a1\u5b89\u6392\u5230\u7a0d\u540e\u518d\u505a\u3002\u6211\u4eec\u5c06\u4efb\u52a1\u5c01\u88c5\u4e3a\u6d88\u606f\u5e76\u5c06\u5176\u53d1\u9001\u7ed9\u961f\u5217\u3002\u540e\u53f0\u8fd0\u884c\u7684\u5de5\u4f5c\u8fdb\u7a0b\u5c06\u5f39\u51fa\u4efb\u52a1\u5e76\u6700\u7ec8\u6267\u884c\u4f5c\u4e1a\u3002\u5f53\u6709\u591a\u4e2aworker\u540c\u65f6\u8fd0\u884c\u65f6\uff0c\u4efb\u52a1\u5c06\u5728\u5b83\u4eec\u4e4b\u95f4\u5171\u4eab\u3002"),(0,l.kt)("h3",{id:"\u4e09-publishsubscribe\u53d1\u5e03\u8ba2\u9605\u5171\u4eab\u8d44\u6e90"},"\u4e09\u3001 publish/subscribe\u53d1\u5e03\u8ba2\u9605(\u5171\u4eab\u8d44\u6e90)"),(0,l.kt)("p",null,"\u529f\u80fd\uff1a\u4e00\u4e2a\u751f\u4ea7\u8005\u53d1\u9001\u7684\u6d88\u606f\u4f1a\u88ab\u591a\u4e2a\u6d88\u8d39\u8005\u83b7\u53d6\u3002\u4e00\u4e2a\u751f\u4ea7\u8005\u3001\u4e00\u4e2a\u4ea4\u6362\u673a\u3001\u591a\u4e2a\u961f\u5217\u3001\u591a\u4e2a\u6d88\u8d39\u8005\u3002"),(0,l.kt)("p",null,"\u751f\u4ea7\u8005\uff1a\u53ef\u4ee5\u5c06\u6d88\u606f\u53d1\u9001\u5230\u961f\u5217\u6216\u8005\u662f\u4ea4\u6362\u673a\u3002"),(0,l.kt)("p",null,"\u6d88\u8d39\u8005\uff1a\u53ea\u80fd\u4ece\u961f\u5217\u4e2d\u83b7\u53d6\u6d88\u606f\u3002"),(0,l.kt)("p",null,"\u2460  \u751f\u4ea7\u8005\u5b9e\u73b0\u601d\u8def\uff1a"),(0,l.kt)("p",null,"\u521b\u5efa\u8fde\u63a5\u5de5\u5382ConnectionFactory\uff0c\u8bbe\u7f6e\u670d\u52a1\u5730\u5740127.0.0.1\uff0c\u7aef\u53e3\u53f75672\uff0c\u8bbe\u7f6e\u7528\u6237\u540d\u3001\u5bc6\u7801\u3001virtual host\uff0c\u4ece\u8fde\u63a5\u5de5\u5382\u4e2d\u83b7\u53d6\u8fde\u63a5connection\uff0c\u4f7f\u7528\u8fde\u63a5\u521b\u5efa\u901a\u9053channel\uff0c\u4f7f\u7528\u901a\u9053channel\u521b\u5efa\u961f\u5217queue\uff0c\u4f7f\u7528\u901a\u9053channel\u521b\u5efa\u4ea4\u6362\u673a\u5e76\u6307\u5b9a\u4ea4\u6362\u673a\u7c7b\u578b\u4e3afanout\uff0c\u4f7f\u7528\u901a\u9053\u5411\u4ea4\u6362\u673a\u53d1\u9001\u6d88\u606f\uff0c\u5173\u95ed\u901a\u9053\u548c\u8fde\u63a5\u3002"),(0,l.kt)("p",null,"\u2461  \u6d88\u8d39\u8005\u5b9e\u73b0\u601d\u8def\uff1a"),(0,l.kt)("p",null,"\u521b\u5efa\u8fde\u63a5\u5de5\u5382ConnectionFactory\uff0c\u8bbe\u7f6e\u670d\u52a1\u5730\u5740127.0.0.1\uff0c\u7aef\u53e3\u53f75672\uff0c\u8bbe\u7f6e\u7528\u6237\u540d\u3001\u5bc6\u7801\u3001virtual host\uff0c\u4ece\u8fde\u63a5\u5de5\u5382\u4e2d\u83b7\u53d6\u8fde\u63a5connection\uff0c\u4f7f\u7528\u8fde\u63a5\u521b\u5efa\u901a\u9053channel\uff0c\u4f7f\u7528\u901a\u9053channel\u521b\u5efa\u961f\u5217queue\uff0c\u7ed1\u5b9a\u961f\u5217\u5230\u4ea4\u6362\u673a\uff0c\u8bbe\u7f6eQos=1\uff0c\u521b\u5efa\u6d88\u8d39\u8005\u5e76\u76d1\u542c\u961f\u5217\uff0c\u4f7f\u7528\u624b\u52a8\u65b9\u5f0f\u8fd4\u56de\u5b8c\u6210\u3002\u53ef\u4ee5\u6709\u591a\u4e2a\u961f\u5217\u7ed1\u5b9a\u5230\u4ea4\u6362\u673a\uff0c\u591a\u4e2a\u6d88\u8d39\u8005\u8fdb\u884c\u76d1\u542c\u3002"),(0,l.kt)("h3",{id:"\u56db-\u8def\u7531\u6a21\u5f0f"},"\u56db\u3001 \u8def\u7531\u6a21\u5f0f"),(0,l.kt)("p",null,"\u8be5\u65b9\u5f0f\u4e00\u4e2a\u8def\u7531\u952e\u5bf9\u5e94\u4e00\u4e2a\u6d88\u606f\u961f\u5217\uff0c\u4e00\u4e2a\u6d88\u606f\u961f\u5217\u53ef\u4ee5\u5bf9\u5e94\u591a\u4e2a\u8def\u7531\u952e\uff0c\u4e00\u4e2a\u6d88\u606f\u961f\u5217\u5bf9\u5e94\u4e00\u4e2a\u6d88\u8d39\u8005\uff0c\u5f53\u4e00\u4e2a\u961f\u5217\u4e0b\u6709\u591a\u4e2a\u6d88\u8d39\u8005\u65f6\uff0cMQ\u91c7\u7528\u7684\u662f\u8f6e\u8be2\u673a\u5236\uff0c\u9009\u53d6\u4e00\u4e2a\u6d88\u8d39\u8005\u6d88\u8d39\u8be5\u961f\u5217\u4e0b\u7684\u6d88\u606f\uff0c\u5176\u4ed6\u6d88\u8d39\u8005\u5219\u8f6e\u7a7a\u3002\u8be5\u6a21\u5f0f\u7ed9\u6d88\u606f\u6307\u660e\u4e86\u51c6\u786e\u7684\u8def\u7ebf\uff0c\u544a\u8bc9\u6d88\u606f\u5fc5\u987b\u6309\u7167\u6211\u5236\u5b9a\u7684\u8def\u7ebf\u89c4\u5219\u6765\u8d70\uff0c\u9002\u5408\u4e8e\u6bd4\u8f83\u7b80\u5355\u7684\u573a\u666f\uff0c\u7f3a\u70b9\u662f\u8def\u7531\u89c4\u5219\u4e0d\u591f\u7075\u6d3b\u3002"),(0,l.kt)("h3",{id:"\u4e94-\u4e3b\u9898\u6a21\u5f0f"},"\u4e94\u3001 \u4e3b\u9898\u6a21\u5f0f"),(0,l.kt)("p",null,"\u57fa\u672c\u601d\u60f3\u548c\u8def\u7531\u6a21\u5f0f\u662f\u4e00\u6837\u7684\uff0c\u53ea\u4e0d\u8fc7\u8def\u7531\u952e\u652f\u6301\u6a21\u7cca\u5339\u914d\uff0c\u7b26\u53f7\u201c#\u201d\u5339\u914d\u4e00\u4e2a\u6216\u591a\u4e2a\u8bcd\uff0c\u7b26\u53f7\u201c*\u201d\u5339\u914d\u4e0d\u591a\u4e0d\u5c11\u4e00\u4e2a\u8bcd\uff0c\u8def\u7531\u89c4\u5219\u53d8\u5f97\u7075\u6d3b\u591a\u53d8\uff0c\u53ef\u62d3\u5c55\u6027\u975e\u5e38\u7684\u5f3a"),(0,l.kt)("p",null,"\u5e94\u7528\u573a\u666f\uff1a"),(0,l.kt)("p",null,"\u2461  \u5355\u53d1\u9001\uff0c\u5355\u63a5\u6536\u7684\u5e94\u7528\u573a\u666f"),(0,l.kt)("p",null,"\u2462  \u591a\u53d1\u9001\uff0c\u5355\u63a5\u6536\u7684\u5e94\u7528\u573a\u666f\uff08\u4e3b\u8981\uff09"),(0,l.kt)("h2",{id:"rabbitmq\u7684\u4e09\u79cd\u96c6\u7fa4\u6a21\u5f0f"},"RabbitMQ\u7684\u4e09\u79cd\u96c6\u7fa4\u6a21\u5f0f"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"rabbitmq\u6709\u4e09\u79cd\u6a21\u5f0f\uff1a\u5355\u673a\u6a21\u5f0f\uff0c\u666e\u901a\u96c6\u7fa4\u6a21\u5f0f\uff0c\u955c\u50cf\u96c6\u7fa4\u6a21\u5f0f")),(0,l.kt)("h5",{id:"1\u5355\u673a\u6a21\u5f0f"},"1\uff09\u5355\u673a\u6a21\u5f0f"),(0,l.kt)("p",null,"\u5c31\u662fdemo\u7ea7\u522b\u7684\uff0c\u4e00\u822c\u5c31\u662f\u4f60\u672c\u5730\u542f\u52a8\u4e86\u73a9\u73a9\u7684\uff0c\u6ca1\u4eba\u751f\u4ea7\u7528\u5355\u673a\u6a21\u5f0f"),(0,l.kt)("h5",{id:"2\u666e\u901a\u96c6\u7fa4\u6a21\u5f0f"},"2\uff09\u666e\u901a\u96c6\u7fa4\u6a21\u5f0f"),(0,l.kt)("p",null,"\u610f\u601d\u5c31\u662f\u5728",(0,l.kt)("strong",{parentName:"p"},"\u591a\u53f0\u673a\u5668"),"\u4e0a\u542f\u52a8",(0,l.kt)("strong",{parentName:"p"},"\u591a\u4e2arabbitmq\u5b9e\u4f8b"),"\uff0c",(0,l.kt)("strong",{parentName:"p"},"\u6bcf\u4e2a\u673a\u5668\u542f\u52a8\u4e00\u4e2a\u3002")," \u4f46\u662f\u4f60\u521b\u5efa\u7684",(0,l.kt)("strong",{parentName:"p"},"queue"),"\uff0c\u53ea\u4f1a\u653e\u5728",(0,l.kt)("strong",{parentName:"p"},"\u4e00\u4e2arabbtimq\u5b9e\u4f8b"),"\u4e0a\uff0c\u4f46\u662f",(0,l.kt)("strong",{parentName:"p"},"\u6bcf\u4e2a\u5b9e\u4f8b\u90fd\u540c\u6b65queue\u7684\u5143\u6570\u636e(\u5b58\u653e\u542bqueue\u6570\u636e\u7684\u771f\u6b63\u5b9e\u4f8b\u4f4d\u7f6e)"),"\u3002\u6d88\u8d39\u7684\u65f6\u5019\uff0c\u5b9e\u9645\u4e0a\u5982\u679c\u8fde\u63a5\u5230\u4e86\u53e6\u5916\u4e00\u4e2a\u5b9e\u4f8b\uff0c\u90a3\u4e48\u90a3\u4e2a\u5b9e\u4f8b\u4f1a\u4ecequeue\u6240\u5728\u5b9e\u4f8b\u4e0a\u62c9\u53d6\u6570\u636e\u8fc7\u6765\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8fd9\u79cd\u65b9\u5f0f\u786e\u5b9e\u5f88\u9ebb\u70e6\uff0c\u4e5f\u4e0d\u600e\u4e48\u597d\uff0c\u6ca1\u505a\u5230\u6240\u8c13\u7684\u5206\u5e03\u5f0f\uff0c\u5c31\u662f\u4e2a\u666e\u901a\u96c6\u7fa4\u3002")," \u56e0\u4e3a\u8fd9\u5bfc\u81f4\u4f60\u8981\u4e48\u6d88\u8d39\u8005\u6bcf\u6b21\u968f\u673a\u8fde\u63a5\u4e00\u4e2a\u5b9e\u4f8b\u7136\u540e\u62c9\u53d6\u6570\u636e\uff0c\u8981\u4e48\u56fa\u5b9a\u8fde\u63a5\u90a3\u4e2aqueue\u6240\u5728\u5b9e\u4f8b\u6d88\u8d39\u6570\u636e\uff0c\u524d\u8005\u6709\u6570\u636e\u62c9\u53d6\u7684\u5f00\u9500\uff0c\u540e\u8005\u5bfc\u81f4\u5355\u5b9e\u4f8b\u6027\u80fd\u74f6\u9888\u3002"),(0,l.kt)("p",null,"\u800c\u4e14\u5982\u679c\u90a3\u4e2a\u653equeue\u7684\u5b9e\u4f8b\u5b95\u673a\u4e86\uff0c\u4f1a\u5bfc\u81f4\u63a5\u4e0b\u6765\u5176\u4ed6\u5b9e\u4f8b\u5c31\u65e0\u6cd5\u4ece\u90a3\u4e2a\u5b9e\u4f8b\u62c9\u53d6\uff0c\u5982\u679c\u4f60\u5f00\u542f\u4e86\u6d88\u606f\u6301\u4e45\u5316\uff0c\u8ba9rabbitmq\u843d\u5730\u5b58\u50a8\u6d88\u606f\u7684\u8bdd\uff0c\u6d88\u606f\u4e0d\u4e00\u5b9a\u4f1a\u4e22\uff0c\u5f97\u7b49\u8fd9\u4e2a\u5b9e\u4f8b\u6062\u590d\u4e86\uff0c\u7136\u540e\u624d\u53ef\u4ee5\u7ee7\u7eed\u4ece\u8fd9\u4e2aqueue\u62c9\u53d6\u6570\u636e\u3002"),(0,l.kt)("p",null,"\u6240\u4ee5\u8fd9\u4e2a\u666e\u901a\u96c6\u7fa4\u6bd4\u8f83\u5c34\u5c2c\u4e86\uff0c\u8fd9\u5c31\u6ca1\u6709\u4ec0\u4e48\u6240\u8c13\u7684\u9ad8\u53ef\u7528\u6027\u53ef\u8a00\u4e86\uff0c",(0,l.kt)("strong",{parentName:"p"},"\u8fd9\u65b9\u6848\u4e3b\u8981\u662f\u63d0\u9ad8\u541e\u5410\u91cf\u7684\uff0c\u5c31\u662f\u8bf4\u8ba9\u96c6\u7fa4\u4e2d\u591a\u4e2a\u8282\u70b9\u6765\u670d\u52a1\u67d0\u4e2aqueue\u7684\u8bfb\u5199\u64cd\u4f5c\u3002")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"http://images.zlqit.com/bookshell/operator/image-20231103114647802.png",alt:"image-20231103114647802"})),(0,l.kt)("h5",{id:"3\u955c\u50cf\u96c6\u7fa4\u6a21\u5f0f"},"3\uff09\u955c\u50cf\u96c6\u7fa4\u6a21\u5f0f"),(0,l.kt)("p",null," \u8fd9\u79cd\u6a21\u5f0f\uff0c\u624d\u662f\u6240\u8c13\u7684rabbitmq\u7684\u9ad8\u53ef\u7528\u6a21\u5f0f\uff0c\u8ddf\u666e\u901a\u96c6\u7fa4\u6a21\u5f0f\u4e0d\u4e00\u6837\u7684\u662f\uff0c\u4f60\u521b\u5efa\u7684queue\uff0c\u65e0\u8bba\u5143\u6570\u636e\u8fd8\u662fqueue\u91cc\u7684\u6d88\u606f\u90fd\u4f1a\u5b58\u5728\u4e8e\u591a\u4e2a\u5b9e\u4f8b\u4e0a\uff0c\u7136\u540e\u6bcf\u6b21\u4f60\u5199\u6d88\u606f\u5230queue\u7684\u65f6\u5019\uff0c\u90fd\u4f1a\u81ea\u52a8\u628a\u6d88\u606f\u5230\u591a\u4e2a\u5b9e\u4f8b\u7684queue\u91cc\u8fdb\u884c\u6d88\u606f\u540c\u6b65\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"http://images.zlqit.com/bookshell/operator/image-20231103114704564.png",alt:"image-20231103114704564"})),(0,l.kt)("p",null,"\u955c\u50cf\u96c6\u7fa4\u6a21\u5f0f"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u955c\u50cf\u96c6\u7fa4\u6a21\u5f0f")," ",(0,l.kt)("strong",{parentName:"p"},"\u597d\u5904\u5728\u4e8e"),"\uff0c\u4f60\u4efb\u4f55\u4e00\u4e2a\u673a\u5668\u5b95\u673a\u4e86\uff0c\u6ca1\u4e8b\u513f\uff0c\u522b\u7684\u673a\u5668\u90fd\u53ef\u4ee5\u7528\u3002 ",(0,l.kt)("strong",{parentName:"p"},"\u574f\u5904\u5728\u4e8e")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\uff0c\u8fd9\u4e2a\u6027\u80fd\u5f00\u9500\u4e5f\u592a\u5927\u4e86\u5427\uff0c\u6d88\u606f\u540c\u6b65\u6240\u6709\u673a\u5668\uff0c\u5bfc\u81f4\u7f51\u7edc\u5e26\u5bbd\u538b\u529b\u548c\u6d88\u8017\u5f88\u91cd\uff01"),(0,l.kt)("li",{parentName:"ul"},"\u7b2c\u4e8c\uff0c\u8fd9\u4e48\u73a9\u513f\uff0c\u5c31\u6ca1\u6709\u6269\u5c55\u6027\u53ef\u8a00\u4e86\uff0c\u5982\u679c\u67d0\u4e2aqueue\u8d1f\u8f7d\u5f88\u91cd\uff0c\u4f60\u52a0\u673a\u5668\uff0c\u65b0\u589e\u7684\u673a\u5668\u4e5f\u5305\u542b\u4e86\u8fd9\u4e2aqueue\u7684\u6240\u6709\u6570\u636e\uff0c\u5e76\u6ca1\u6709\u529e\u6cd5\u7ebf\u6027\u6269\u5c55\u4f60\u7684queue")),(0,l.kt)("p",null,"\u90a3\u4e48\u600e\u4e48\u5f00\u542f\u8fd9\u4e2a\u955c\u50cf\u96c6\u7fa4\u6a21\u5f0f\u5462\uff1f\u6211\u8fd9\u91cc\u7b80\u5355\u8bf4\u4e00\u4e0b\uff0c\u5176\u5b9e\u5f88\u7b80\u5355rabbitmq\u6709\u5f88\u597d\u7684\u7ba1\u7406\u63a7\u5236\u53f0\uff0c\u6211\u4eec\u53ef\u4ee5\u5728\u540e\u53f0\u65b0\u589e\u4e00\u4e2a\u7b56\u7565\uff0c\u8fd9\u4e2a\u7b56\u7565\u662f\u955c\u50cf\u96c6\u7fa4\u6a21\u5f0f\u7684\u7b56\u7565\uff0c\u53ef\u4ee5\u6307\u5b9a\u8981\u6c42\u6570\u636e\u540c\u6b65\u5230\u6240\u6709\u8282\u70b9\uff0c\u4e5f\u53ef\u4ee5\u8981\u6c42\u540c\u6b65\u5230\u6307\u5b9a\u6570\u91cf\u7684\u8282\u70b9\uff0c\u7136\u540e\u4f60\u518d\u6b21\u521b\u5efaqueue\u7684\u65f6\u5019\uff0c\u5e94\u7528\u8fd9\u4e2a\u7b56\u7565\uff0c\u5c31\u4f1a\u81ea\u52a8\u5c06\u6570\u636e\u540c\u6b65\u5230\u5176\u4ed6\u7684\u8282\u70b9\u4e0a\u53bb\u4e86\u3002",(0,l.kt)("a",{parentName:"p",href:"https://cloud.tencent.com/developer/tools/blog-entry?target=https%3A%2F%2Flinks.jianshu.com%2Fgo%3Fto%3Dhttps%3A%2F%2Fwww.cnblogs.com%2FLiangSW%2Fp%2F6242280.html"},"RabbitMQ\u955c\u50cf\u96c6\u7fa4\u5165\u95e8")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"http://images.zlqit.com/bookshell/operator/image-20231103114723335.png",alt:"image-20231103114723335"})))}m.isMDXComponent=!0}}]);