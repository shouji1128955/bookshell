"use strict";(self.webpackChunkbookshell=self.webpackChunkbookshell||[]).push([[184],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),p=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(i.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,f=d["".concat(i,".").concat(m)]||d[m]||u[m]||l;return t?r.createElement(f,s(s({ref:n},c),{},{components:t})):r.createElement(f,s({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,s=new Array(l);s[0]=m;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o[d]="string"==typeof e?e:a,s[1]=o;for(var p=2;p<l;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6852:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));const l={},s=void 0,o={unversionedId:"Sre/\u4e2d\u95f4\u4ef6/Redis",id:"Sre/\u4e2d\u95f4\u4ef6/Redis",title:"Redis",description:"1.\u4e3b\u4ece\u90e8\u7f72",source:"@site/docs/Sre/2-\u4e2d\u95f4\u4ef6/3.Redis.md",sourceDirName:"Sre/2-\u4e2d\u95f4\u4ef6",slug:"/Sre/\u4e2d\u95f4\u4ef6/Redis",permalink:"/docs/Sre/\u4e2d\u95f4\u4ef6/Redis",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Sre/2-\u4e2d\u95f4\u4ef6/3.Redis.md",tags:[],version:"current",lastUpdatedBy:"zhanglaiqiang",lastUpdatedAt:1699431968,formattedLastUpdatedAt:"2023\u5e7411\u67088\u65e5",sidebarPosition:3,frontMatter:{},sidebar:"SreMiddleSoft",previous:{title:"Elasticsearch",permalink:"/docs/Sre/\u4e2d\u95f4\u4ef6/Elasticsearch"},next:{title:"Mysql",permalink:"/docs/Sre/\u4e2d\u95f4\u4ef6/Mysql"}},i={},p=[{value:"1.\u4e3b\u4ece\u90e8\u7f72",id:"1\u4e3b\u4ece\u90e8\u7f72",level:2},{value:"\u914d\u7f6eslave\u52a0\u5165master",id:"\u914d\u7f6eslave\u52a0\u5165master",level:4},{value:"\u4e3b\u8282\u70b9\u4e0a\u67e5\u770b\u72b6\u6001",id:"\u4e3b\u8282\u70b9\u4e0a\u67e5\u770b\u72b6\u6001",level:4},{value:"1. \u4ee5\u4e0b\u662f\u5f00\u542f RDB \u6301\u4e45\u5316\u7684\u914d\u7f6e\u9879\u793a\u4f8b\uff1a",id:"1-\u4ee5\u4e0b\u662f\u5f00\u542f-rdb-\u6301\u4e45\u5316\u7684\u914d\u7f6e\u9879\u793a\u4f8b",level:3},{value:"2. \u8981\u5f00\u542f AOF \u6301\u4e45\u5316\uff0c\u4f60\u53ef\u4ee5\u8fdb\u884c\u5982\u4e0b\u914d\u7f6e\uff1a",id:"2-\u8981\u5f00\u542f-aof-\u6301\u4e45\u5316\u4f60\u53ef\u4ee5\u8fdb\u884c\u5982\u4e0b\u914d\u7f6e",level:3},{value:"3. \u4e3b\u4ece\u4f18\u5316",id:"3-\u4e3b\u4ece\u4f18\u5316",level:3},{value:"2.redis-dump",id:"2redis-dump",level:2},{value:"3.\u76f8\u5173\u547d\u4ee4",id:"3\u76f8\u5173\u547d\u4ee4",level:2}],c={toc:p},d="wrapper";function u(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1\u4e3b\u4ece\u90e8\u7f72"},"1.\u4e3b\u4ece\u90e8\u7f72"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"127.0.0.1:6379> INFO replication\n# Replication\nrole:master  ##redis\u9ed8\u8ba4master\nconnected_slaves:0\nmaster_repl_offset:0\nrepl_backlog_active:0\nrepl_backlog_size:1048576\nrepl_backlog_first\n")),(0,a.kt)("h4",{id:"\u914d\u7f6eslave\u52a0\u5165master"},"\u914d\u7f6eslave\u52a0\u5165master"),(0,a.kt)("p",null,"\u5728slave\u4e0a\u8bbe\u7f6emaster\u7684IP\u548c\u7aef\u53e3\uff0c4.0\u7248\u4e4b\u524d\u7684\u6307\u4ee4\u4e3aslaveof\nREPLICAOF 10.51.8.120 6379  #\u4ecd\u53ef\u4f7f\u7528SLAVEOF MasterIP Port"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"SLAVEOF 10.51.8.120 6379\n127.0.0.1:6379> auth 123456\nOK\n127.0.0.1:6379> SLAVEOF 10.51.8.120 6379 \nOK\n127.0.0.1:6379> CONFIG SET masterauth 123456  #\u5728slave\u4e0a\u8bbe\u7f6emaster\u7684\u5bc6\u7801\uff0c\u624d\u53ef\u4ee5\u540c\u6b65\nOK\n\n\n127.0.0.1:6379> INFO replication\n127.0.0.1:6379> INFO replication\n# Replication\nrole:slave                    ##\u770b\u89d2\u8272\nmaster_host:10.51.8.120\nmaster_port:6379\nmaster_link_status:up         ##\u770b\u4ece\u8282\u70b9\u662f\u5426\u542f\u52a8\uff0c\u5426\u5219\u53ef\u80fd\u662f\u4ec5\u5141\u8bb8\u672c\u5730\u8bbf\u95ee\nmaster_last_io_seconds_ago:0\nmaster_sync_in_progress:0\nslave_repl_offset:15\nslave_priority:100\nslave_read_only:1\nconnected_slaves:0\nmaster_repl_offset:0\nrepl_backlog_active:0\nrepl_backlog_size:1048576\nrepl_backlog_first_byte_offset:0\nrepl_backlog_histlen:0\n")),(0,a.kt)("h4",{id:"\u4e3b\u8282\u70b9\u4e0a\u67e5\u770b\u72b6\u6001"},"\u4e3b\u8282\u70b9\u4e0a\u67e5\u770b\u72b6\u6001"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"\n127.0.0.1:6379> INFO replication\n# Replication\nrole:master\nconnected_slaves:1\nslave0:ip=10.51.8.121,port=6379,state=online,offset=1382,lag=1  ###slave\u8282\u70b9\nmaster_repl_offset:1382\nrepl_backlog_active:1\nrepl_backlog_size:1048576\nrepl_backlog_first_byte_offset:2\nrepl_backlog_histlen:1381\n")),(0,a.kt)("h3",{id:"1-\u4ee5\u4e0b\u662f\u5f00\u542f-rdb-\u6301\u4e45\u5316\u7684\u914d\u7f6e\u9879\u793a\u4f8b"},"1. \u4ee5\u4e0b\u662f\u5f00\u542f RDB \u6301\u4e45\u5316\u7684\u914d\u7f6e\u9879\u793a\u4f8b\uff1a"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u5e0c\u671b\u5c06 Redis \u4ece\u8282\u70b9\u4e00\u76f4\u4fdd\u6301\u4e3a\u4ece\u8282\u70b9\uff0c\u800c\u4e0d\u518d\u81ea\u52a8\u5207\u6362\u4e3a\u4e3b\u8282\u70b9\uff0c\n\u4f60\u53ef\u4ee5\u5728\u4ece\u8282\u70b9\u7684\u914d\u7f6e\u6587\u4ef6\u4e2d\u8bbe\u7f6e slave-read-only yes\u3002\n\u8fd9\u6837\u8bbe\u7f6e\u540e\uff0c\u4ece\u8282\u70b9\u5c06\u4e0d\u4f1a\u63a5\u53d7\u5916\u90e8\u5199\u64cd\u4f5c\uff0c\u5e76\u59cb\u7ec8\u4fdd\u6301\u4ece\u8282\u70b9\u7684\u8eab\u4efd\u3002\n\u8bf7\u6ce8\u610f\uff0c\u5728\u8bbe\u7f6e slave-read-only yes \u540e\uff0c\u4ece\u8282\u70b9\u5c06\u65e0\u6cd5\u5904\u7406\u5199\u64cd\u4f5c\uff0c\n\u5305\u62ec\u5bf9\u6570\u636e\u7684\u4fee\u6539\u548c\u5199\u5165\u3002\u5982\u679c\u4f60\u9700\u8981\u5bf9\u4ece\u8282\u70b9\u8fdb\u884c\u5199\u64cd\u4f5c\uff0c\u4f60\u9700\u8981\u5c06\u5176\u5207\u6362\u56de\u4e3b\u8282\u70b9\u6216\u8005\u8fdb\u884c\u4e00\u4e9b\u5176\u4ed6\u7684\u914d\u7f6e\u66f4\u6539\u3002"),(0,a.kt)("p",null,"\u8981\u5728 Redis \u4e2d\u542f\u7528\u6301\u4e45\u5316\u529f\u80fd\uff0c\u4f60\u9700\u8981\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u8fdb\u884c\u76f8\u5e94\u7684\u8bbe\u7f6e\u3002\u901a\u5e38\uff0c\u914d\u7f6e\u6587\u4ef6\u4f4d\u4e8e/etc/redis/redis.conf \u6216 /usr/local/etc/redis.conf"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'/etc/redis/redis.conf \u6216 /usr/local/etc/redis.conf\u3002\n\nsave 60 1         # \u572860\u79d2\u5185\u5982\u679c\u81f3\u5c11\u53d1\u751f1\u6b21\u5199\u64cd\u4f5c\uff0c\u5219\u89e6\u53d1\u5feb\u7167\u4fdd\u5b58\nsave 300 10       # \u5728300\u79d2\u5185\u5982\u679c\u81f3\u5c11\u53d1\u751f10\u6b21\u5199\u64cd\u4f5c\uff0c\u5219\u89e6\u53d1\u5feb\u7167\u4fdd\u5b58\nsave 3600 10000   # \u57283600\u79d2\u5185\u5982\u679c\u81f3\u5c11\u53d1\u751f10000\u6b21\u5199\u64cd\u4f5c\uff0c\u5219\u89e6\u53d1\u5feb\u7167\u4fdd\u5b58\n\ndbfilename "dump.rdb"     # \u5feb\u7167\u6587\u4ef6\u540d\uff0c\u9ed8\u8ba4\u4e3a dump.rdb\ndir "/var/lib/redis"      # \u5feb\u7167\u6587\u4ef6\u5b58\u50a8\u8def\u5f84\uff0c\u9ed8\u8ba4\u4e3a Redis \u542f\u52a8\u76ee\u5f55\n#############\nsave 900 1\uff1a\u8868\u793a900 \u79d2\u5185\u5982\u679c\u81f3\u5c11\u6709 1 \u4e2a key \u7684\u503c\u53d8\u5316\uff0c\u5219\u4fdd\u5b58\nsave 300 10\uff1a\u8868\u793a300 \u79d2\u5185\u5982\u679c\u81f3\u5c11\u6709 10 \u4e2a key \u7684\u503c\u53d8\u5316\uff0c\u5219\u4fdd\u5b58\nsave 60 10000\uff1a\u8868\u793a60 \u79d2\u5185\u5982\u679c\u81f3\u5c11\u6709 10000 \u4e2a key \u7684\u503c\u53d8\u5316\uff0c\u5219\u4fdd\u5b58\n')),(0,a.kt)("p",null,"\u624b\u52a8\u89e6\u53d1\n\u3000\u3000\u624b\u52a8\u89e6\u53d1Redis\u8fdb\u884cRDB\u6301\u4e45\u5316\u7684\u547d\u4ee4\u6709\u4e24\u79cd\uff1a"),(0,a.kt)("p",null,"\u3000\u30001\u3001save"),(0,a.kt)("p",null,"\u3000\u3000\u8be5\u547d\u4ee4\u4f1a\u963b\u585e\u5f53\u524dRedis\u670d\u52a1\u5668\uff0c\u6267\u884csave\u547d\u4ee4\u671f\u95f4\uff0cRedis\u4e0d\u80fd\u5904\u7406\u5176\u4ed6\u547d\u4ee4\uff0c\u76f4\u5230RDB\u8fc7\u7a0b\u5b8c\u6210\u4e3a\u6b62\u3002"),(0,a.kt)("p",null,"\u3000\u3000\u663e\u7136\u8be5\u547d\u4ee4\u5bf9\u4e8e\u5185\u5b58\u6bd4\u8f83\u5927\u7684\u5b9e\u4f8b\u4f1a\u9020\u6210\u957f\u65f6\u95f4\u963b\u585e\uff0c\u8fd9\u662f\u81f4\u547d\u7684\u7f3a\u9677\uff0c\u4e3a\u4e86\u89e3\u51b3\u6b64\u95ee\u9898\uff0cRedis\u63d0\u4f9b\u4e86\u7b2c\u4e8c\u79cd\u65b9\u5f0f\u3002"),(0,a.kt)("p",null,"\u3000\u30002\u3001bgsave"),(0,a.kt)("p",null,"\u3000\u3000\u6267\u884c\u8be5\u547d\u4ee4\u65f6\uff0cRedis\u4f1a\u5728\u540e\u53f0\u5f02\u6b65\u8fdb\u884c\u5feb\u7167\u64cd\u4f5c\uff0c\u5feb\u7167\u540c\u65f6\u8fd8\u53ef\u4ee5\u54cd\u5e94\u5ba2\u6237\u7aef\u8bf7\u6c42\u3002\u5177\u4f53\u64cd\u4f5c\u662fRedis\u8fdb\u7a0b\u6267\u884cfork\u64cd\u4f5c\u521b\u5efa\u5b50\u8fdb\u7a0b\uff0cRDB\u6301\u4e45\u5316\u8fc7\u7a0b\u7531\u5b50\u8fdb\u7a0b\u8d1f\u8d23\uff0c\u5b8c\u6210\u540e\u81ea\u52a8\u7ed3\u675f\u3002\u963b\u585e\u53ea\u53d1\u751f\u5728fork\u9636\u6bb5\uff0c\u4e00\u822c\u65f6\u95f4\u5f88\u77ed\u3002"),(0,a.kt)("p",null,"\u3000\u3000\u57fa\u672c\u4e0a Redis \u5185\u90e8\u6240\u6709\u7684RDB\u64cd\u4f5c\u90fd\u662f\u91c7\u7528 bgsave \u547d\u4ee4\u3002"),(0,a.kt)("p",null,"\u3000\u3000ps:\u6267\u884c\u6267\u884c flushall \u547d\u4ee4\uff0c\u4e5f\u4f1a\u4ea7\u751fdump.rdb\u6587\u4ef6\uff0c\u4f46\u91cc\u9762\u662f\u7a7a\u7684."),(0,a.kt)("h3",{id:"2-\u8981\u5f00\u542f-aof-\u6301\u4e45\u5316\u4f60\u53ef\u4ee5\u8fdb\u884c\u5982\u4e0b\u914d\u7f6e"},"2. \u8981\u5f00\u542f AOF \u6301\u4e45\u5316\uff0c\u4f60\u53ef\u4ee5\u8fdb\u884c\u5982\u4e0b\u914d\u7f6e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'appendonly yes              # \u5f00\u542f AOF \u6301\u4e45\u5316\uff0c\u9ed8\u8ba4\u4e3a no\nappendfilename "appendonly.aof"  # AOF \u6587\u4ef6\u540d\uff0c\u9ed8\u8ba4\u4e3a appendonly.aof\nappendfsync everysec        # \u6bcf\u79d2\u949f\u5c06\u5199\u5165\u64cd\u4f5c\u540c\u6b65\u5230\u78c1\u76d8\u4e00\u6b21\n')),(0,a.kt)("h3",{id:"3-\u4e3b\u4ece\u4f18\u5316"},"3. \u4e3b\u4ece\u4f18\u5316"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u5e0c\u671b\u4ece\u8282\u70b9\u5728\u91cd\u542f\u540e\u4fdd\u6301\u539f\u6709\u7684\u72b6\u6001\uff0c\u5373\u7ee7\u7eed\u4f5c\u4e3a\u4e3b\u8282\u70b9\u7684\u4ece\u5c5e\u8282\u70b9\uff0c\u5e76\u590d\u5236\u4e3b\u8282\u70b9\u7684\u6570\u636e\uff0c\u4f60\u53ef\u4ee5\u5728\u4ece\u8282\u70b9\u7684\u914d\u7f6e\u6587\u4ef6\u4e2d\u8bbe\u7f6e slaveof \u6307\u4ee4\u6765\u6307\u5b9a\u5b83\u7684\u4e3b\u8282\u70b9\u5730\u5740\u3002\n\u8fd9\u6837\u4ece\u8282\u70b9\u5728\u91cd\u542f\u65f6\u4f1a\u76f4\u63a5\u8fde\u63a5\u6307\u5b9a\u7684\u4e3b\u8282\u70b9\uff0c\u800c\u4e0d\u4f1a\u5c1d\u8bd5\u91cd\u65b0\u9009\u4e3e\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"slaveof 10.51.8.120 6379\nmasterauth  123456\nrequirepass 123456\n")),(0,a.kt)("p",null,"----\u83b7\u53d6\u6301\u4e45\u5316\u6570\u636e\u7684\u8def\u52b2"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'127.0.0.1:6379> config get dir\n1) "dir"\n2) "/var/lib/redis"\n127.0.0.1:6379> \n')),(0,a.kt)("p",null,"------\u5220\u9664\u4e3b\u4ece\u540c\u6b65\n#\u53d6\u6d88\u590d\u5236,\u5728slave\u4e0a\u6267\u884cREPLIATOF NO ONE,\u4f1a\u65ad\u5f00\u548cmaster\u7684\u8fde\u63a5\u4e0d\u518d\u4e3b\u4ece\u590d\u5236, \u4f46\u4e0d\u4f1a\u6e05\u9664slave\n\u4e0a\u5df2\u6709\u7684\u6570\u636e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"SLAVEOF NO ONE\n")),(0,a.kt)("h2",{id:"2redis-dump"},"2.redis-dump"),(0,a.kt)("p",null,"\u5b9e\u73b0\u5bf9\u5355\u4e2a\u5e93\u7684\u5907\u4efd"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"redis-dump -u 10.0.8.11:6379 -a 'xxxxxxxxxx' -d  0  > db_db0.json\ncat db_db0.json  |  redis-load -u 10.0.8.11:6379 -a 'xxxxxxxxxxxxxxxx' -d \n")),(0,a.kt)("h2",{id:"3\u76f8\u5173\u547d\u4ee4"},"3.\u76f8\u5173\u547d\u4ee4"),(0,a.kt)("p",null,"\u767b\u5f55\u547d\u4ee4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"redis-cli -h 192.168.1.x -p 6379 -a xxxxx\n")),(0,a.kt)("p",null,"\u4ece\u8282\u70b9\u6267\u884cslaveof no one\u547d\u4ee4\u65ad\u5f00\u4e0e\u4e3b\u8282\u70b9\u7684\u590d\u5236\u5173\u7cfb"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"127.0.0.1:6379> slaveof no one\nOK\n127.0.0.1:6379> INFO replication\n# Replication\nrole:master  #\u786e\u8ba4\u5f53\u524d\u89d2\u8272\n")))}u.isMDXComponent=!0}}]);