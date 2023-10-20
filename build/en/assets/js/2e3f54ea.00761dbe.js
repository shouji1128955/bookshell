"use strict";(self.webpackChunkbookshell=self.webpackChunkbookshell||[]).push([[2978],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var o=a.createContext({}),i=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=i(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=i(n),m=s,u=d["".concat(o,".").concat(m)]||d[m]||h[m]||r;return n?a.createElement(u,c(c({ref:t},p),{},{components:n})):a.createElement(u,c({ref:t},p))}));function u(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,c=new Array(r);c[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[d]="string"==typeof e?e:s,c[1]=l;for(var i=2;i<r;i++)c[i]=n[i];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},89742:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>i});var a=n(87462),s=(n(67294),n(3905));const r={},c=void 0,l={unversionedId:"Sre/\u4e2d\u95f4\u4ef6/Elasticsearch",id:"Sre/\u4e2d\u95f4\u4ef6/Elasticsearch",title:"Elasticsearch",description:"1.\u96c6\u7fa4\u90e8\u7f72",source:"@site/docs/Sre/2-\u4e2d\u95f4\u4ef6/2.Elasticsearch.md",sourceDirName:"Sre/2-\u4e2d\u95f4\u4ef6",slug:"/Sre/\u4e2d\u95f4\u4ef6/Elasticsearch",permalink:"/en/docs/Sre/\u4e2d\u95f4\u4ef6/Elasticsearch",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Sre/2-\u4e2d\u95f4\u4ef6/2.Elasticsearch.md",tags:[],version:"current",lastUpdatedBy:"zhanglaiqiang",lastUpdatedAt:1697217709,formattedLastUpdatedAt:"Oct 13, 2023",sidebarPosition:2,frontMatter:{},sidebar:"SreMiddleSoft",previous:{title:"Harbor",permalink:"/en/docs/Sre/\u4e2d\u95f4\u4ef6/Harbor"},next:{title:"Redis",permalink:"/en/docs/Sre/\u4e2d\u95f4\u4ef6/Redis"}},o={},i=[{value:"1.\u96c6\u7fa4\u90e8\u7f72",id:"1\u96c6\u7fa4\u90e8\u7f72",level:2},{value:"2\u3001\u5bb9\u5668\u90e8\u7f72",id:"2\u5bb9\u5668\u90e8\u7f72",level:2},{value:"3\u3001\u5355\u8282\u70b9\u96c6\u7fa4\u90e8\u7f72",id:"3\u5355\u8282\u70b9\u96c6\u7fa4\u90e8\u7f72",level:2},{value:"\u8fd9\u4e2a\u914d\u7f6e\u53ea\u9002\u7528\u4e8eES 7.x",id:"\u8fd9\u4e2a\u914d\u7f6e\u53ea\u9002\u7528\u4e8ees-7x",level:6},{value:"head\u90e8\u7f72",id:"head\u90e8\u7f72",level:2},{value:"es\u7d22\u5f15\u5bfc\u51fa",id:"es\u7d22\u5f15\u5bfc\u51fa",level:2}],p={toc:i},d="wrapper";function h(e){let{components:t,...r}=e;return(0,s.kt)(d,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"1\u96c6\u7fa4\u90e8\u7f72"},"1.\u96c6\u7fa4\u90e8\u7f72"),(0,s.kt)("p",null,"1.1\u3001\u90e8\u7f72\u8bf4\u660e\n\u751f\u4ea7\u673a\u5668\u5efa\u8bae\u914d\u7f6e\uff1a  \u6700\u4f4e 8C / 16 G "),(0,s.kt)("p",null,"\u4e09\u8282\u70b9\uff1a\n10.51.8.120\n10.51.8.121\n10.51.8.122\n\u914d\u7f6e\u6587\u4ef6\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'[root@es001 ~]# cat /usr/local/elasticsearch-8.2.0/config/elasticsearch.yml  | grep -v "#"\ncluster.name: my-elasticsearch\nnode.name: es001   #\u6bcf\u53f0\u673a\u5668\u53ea\u9700\u8981\u4fee\u6539\u6b64\u5904\nnetwork.host: 0.0.0.0\nhttp.port: 9200\ndiscovery.seed_hosts: ["10.51.8.120","10.51.8.121","10.51.8.122"]\n#master\u9009\u4e3e\u6700\u5c11\u7684\u8282\u70b9\u6570\uff0c\u8fd9\u4e2a\u4e00\u5b9a\u8981\u8bbe\u7f6e\u4e3aN/2+1\uff0c\u5176\u4e2dN\u662f\uff1a\u5177\u6709master\u8d44\u683c\u7684\u8282\u70b9\u7684\u6570\u91cf\uff0c\u800c\u4e0d\u662f\u6574\u4e2a\u96c6\u7fa4\u8282\u70b9\u4e2a\u6570\u3002\ncluster.initial_master_nodes: ["10.51.8.120","10.51.8.121","10.51.8.122"]\n\n\nxpack.security.enabled: false\n\nxpack.security.enrollment.enabled: false\n\nxpack.security.http.ssl:\n  enabled: true\n  keystore.path: certs/http.p12\n\nxpack.security.transport.ssl:\n  enabled: true\n  verification_mode: certificate\n  keystore.path: certs/transport.p12\n  truststore.path: certs/transport.p12\n\nhttp.host: 0.0.0.0\n\ntransport.host: 0.0.0.0\n\n#\u6bcf\u53f0\u673a\u5668\u9700\u8981\u6dfb\u52a0\n[root@es001 ~]# cat /etc/hosts\n127.0.0.1   localhost localhost.localdomain localhost4 localhost4.localdomain4\n10.51.8.121 es002\n10.51.8.122 es003\n10.51.8.120 es001\n')),(0,s.kt)("p",null,"\u5355\u8282\u70b9\u542f\u52a8\u96c6\u7fa4\uff1a\n\u8bf4\u660e\uff1a \u5b88\u62a4\u8fdb\u7a0b\u65b9\u5f0f\u542f\u52a8\uff1a\n\u8fdb\u5165\u8f6f\u4ef6\u7684\u5b89\u88c5\u76ee\u5f55\uff0c\u8fdb\u5165\u5230bin\n\u6267\u884c\uff1ash elasticsearch -d -p pid"),(0,s.kt)("p",null,"[es@es001 elasticsearch-8.2.0]","$ ./bin/elasticsearch",(0,s.kt)("br",{parentName:"p"}),"\n","\u539f\u56e0\uff1a \u5c1a\u672a\u53d1\u73b0\u6216\u9009\u62e9\u4e3b\u8282\u70b9\uff0c\u4e00\u6b21\u9009\u62e9\u81f3\u5c11\u9700\u89812\u4e2aID\u4e3a\u7684\u8282\u70b9"),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(42558).Z,width:"1904",height:"207"})),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(42558).Z,width:"1904",height:"207"})),(0,s.kt)("p",null,"\u542f\u52a8\u4e4b\u540e\u8fc7\u4e00\u6bb5\u65f6\u95f4\u62a5\u9519\uff1a\u627e\u4e0d\u5230\u8282\u70b9\n",(0,s.kt)("img",{src:n(13925).Z,width:"1891",height:"195"}),"\n\u6309\u7167\u4e0a\u9762\u65b9\u5f0f\uff0c\u9996\u5148\u4f46\u8282\u70b9\u542f\u52a8\u96c6\u7fa4\uff0c\u5982\u679c\u5176\u4ed6\u8282\u70b9\u6ca1\u6709\u542f\u52a8\uff0c\u9996\u5148\u4f1a\u6709\u56fe1\u7684\u63d0\u793a\uff0c\u8fc7\u4e00\u6bb5\u65f6\u95f4\u4f1a\u6709\u56fe2\u63d0\u793a\u8fde\u63a5\u4e0d\u5230\u8282\u70b9\u3002 "),(0,s.kt)("p",null,"\u7136\u540e\u542f\u52a8\u7b2c\u4e8c\u4e2a\u8282\u70b9\n\u7136\u540e\u5728\u8282\u70b91\u770b\u65e5\u5fd7\uff0c\u663e\u793a\u5df2\u7ecf\u6709\u4e00\u4e2a\u8282\u70b9\u52a0\u8fdb\u6765 \uff0c\u663e\u793a\u4e3b\u8282\u70b9\u5df2\u66f4\u6539\uff0c\u5f53\u524d\u662fes002"),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(1144).Z,width:"1897",height:"225"}),"\n\u65e5\u5fd7\u63d0\u793a\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'current.health="GREEN" message="Cluster health status changed from [YELLOW] to [GREEN] (reason: [shards started [[.geoip_databases][0]]])." previous.health="YELLOW" reason="shards started [[.geoip_databases][0]]"\n')),(0,s.kt)("p",null,"\u73b0\u5728\u7684health=\u201cGREEN\u201dmessage=\u201c\u7fa4\u96c6\u8fd0\u884c\u72b6\u51b5\u4ece","[\u9ec4\u8272]","\u66f4\u6539\u4e3a","[\u7eff\u8272]","\uff08\u539f\u56e0\uff1a[\u788e\u7247\u5df2\u542f\u52a8","[.geoip_\u6570\u636e\u5e93][0]","]\uff09\u4ee5\u524d\u7684health=\u201cYELLOW\u201dreason=\u201c\u788e\u7247\u5df2\u542f\u52a8","[.geoip_\u6570\u636e\u5e93][0]","\u3002\u201d"),(0,s.kt)("p",null,"\u7136\u540e\u5728es003\u52a0\u5165\u7b2c\u4e09\u4e2a\u8282\u70b9\uff1a\n\u5728es001\u4e0a\u770b\u5230\u7684\u65e5\u5fd7\n",(0,s.kt)("img",{src:n(42184).Z,width:"1905",height:"221"}),"\n\u5728es002\u4e0a\u770b\u5230\u7684\u65e5\u5fd7"),(0,s.kt)("p",null,"es002\u4e3a\u4e3b\u8282\u70b9\n",(0,s.kt)("img",{src:n(28344).Z,width:"1901",height:"197"}),"\n\u67e5\u770b\u96c6\u7fa4\u72b6\u6001\uff1a\n",(0,s.kt)("img",{src:n(11463).Z,width:"1606",height:"134"}),"\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/didi/LogiEM"},"https://github.com/didi/LogiEM")),(0,s.kt)("p",null,"\u5206\u7247\u5728\u521b\u5efa\u597d\uff0c\u540e\u671f\u4e0d\u80fd\u4fee\u6539"),(0,s.kt)("p",null,"GET /_cat/indices"),(0,s.kt)("p",null,"1\u3001\u521b\u5efa\u6570\u636e\u5e93\n\u521b\u5efa\u6570\u636e\u5e93\u5c31\u662f\u5728es\u4e2d\u521b\u5efa\u7d22\u5f15\uff0c\u4e0b\u9762\u521b\u5efa\u7d22\u5f15testdb\n\u5411ES\u670d\u52a1\u5668\u53d1\u9001PUT\u8bf7\u6c42\uff1a  ",(0,s.kt)("a",{parentName:"p",href:"http://x.x.x.x:9200/testdb"},"http://x.x.x.x:9200/testdb")),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(69423).Z,width:"1376",height:"238"}),"\n\u67e5\u770b\u6240\u6709\u7684\u7d22\u5f15\uff1a\n",(0,s.kt)("img",{src:n(51119).Z,width:"1576",height:"535"}),"''"),(0,s.kt)("p",null,"\u5220\u9664\u7d22\u5f15\uff1a\n",(0,s.kt)("img",{src:n(33815).Z,width:"1353",height:"230"})),(0,s.kt)("p",null,"2\u3001\u6dfb\u52a0\u6570\u636e doc  \u6587\u6863\n\u5728\u65b0\u7248\u672c\u4e2d\u6ca1\u6709type\u6982\u5ff5\uff0c\u5c31\u662f\u6ca1\u6709\u8868\u7684\u6982\u5ff5\u3002 "),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(5604).Z,width:"1441",height:"327"})),(0,s.kt)("p",null,"\u4ee5\u4e0a_id\u662f\u81ea\u52a8\u751f\u6210\u7684\u3002\u4e5f\u53ef\u4ee5\u81ea\u5b9a\u4e49\uff0c\u901a\u8fc7\u4e0b\u9762\u7684\u65b9\u5f0f\u3002"),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(53035).Z,width:"1477",height:"414"}),"\n",(0,s.kt)("img",{src:n(75933).Z,width:"1320",height:"367"}),"\n\u64cd\u4f5c\u8bb0\u5f55"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'GET /_cat/indices?v\nDELETE  /testdb1\n#\u6dfb\u52a0shopping\u7d22\u5f15\nPUT  /shopping\n#\u6dfb\u52a0\u6570\u636e\nPOST  /shopping/_doc\n{\n  "title": "\u5c0f\u7c73\u624b\u673a",\n  "dianchi": "45000mh",\n  "price":"4999.00"\n  \n}\n#\u6dfb\u52a0\u6587\u6863\u81ea\u5b9a\u4e49\u7d22\u5f15id\nPOST /shopping/_create/11004\n{\n  "title": "\u5c0f\u7c73\u624b\u673a",\n  "dianch": "45000mh",\n  "price":"4999.00"\n}\n')),(0,s.kt)("p",null,"\u67e5\u8be2\u4e00\u6761\u7d22\u5f15\u6587\u6863"),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(65709).Z,width:"1290",height:"324"})),(0,s.kt)("p",null,"\u67e5\u8be2\u6240\u6709\u7684\u7d22\u5f15\u6587\u6863\n",(0,s.kt)("img",{src:n(68179).Z,width:"1620",height:"711"}),"\n\u4fee\u6539\u5168\u90e8\u6570\u636e\n",(0,s.kt)("img",{src:n(44666).Z,width:"1379",height:"289"}),"\n\u4fee\u6539\u5c40\u90e8\u6570\u636e\n",(0,s.kt)("img",{src:n(39063).Z,width:"1396",height:"511"})),(0,s.kt)("p",null,"cur /_cat/nodes  #\u67e5\u770b\u8282\u70b9"),(0,s.kt)("p",null,"es\u9ed8\u8ba4\u662f\u4e00\u4e2a\u5206\u7247\uff0c\u4e00\u4e2a\u526f\u672c\u3002"),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(96809).Z,width:"981",height:"412"}),"\n\u4e00\u4e9b\u8bf4\u660e\uff1a\n",(0,s.kt)("img",{src:n(50164).Z,width:"814",height:"367"}),"\n\u4e3b\u5206\u7247\u5728\u521b\u5efa\u7d22\u5f15\u7684\u65f6\u5019\u5df2\u7ecf\u5b9a\u4e0b\u6765\uff0c\u540e\u7eed\u6ca1\u6cd5\u4fee\u6539\uff0c\u4f46\u662f\u4fee\u6539\u5176\u526f\u672c\uff0c\u4e5f\u53ef\u4ee5\u63d0\u9ad8\u8bbf\u95ee\u91cf\u3002 "),(0,s.kt)("p",null,'PUT  /user/_settings\n{\n"number_of_replicas": 2\n}'),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(50152).Z,width:"1504",height:"652"})),(0,s.kt)("p",null,"\u5f53\u4e00\u4e2a\u8282\u70b9\u51fa\u73b0\u6545\u969c\u65f6\uff0c\u91cd\u542f\u6545\u969c\u8282\u70b9\uff0c\u4e00\u5b9a\u8981\u5728\u914d\u7f6e\u6587\u4ef6\u4e2ddiscover\u4e2d\u6dfb\u52a0\u96c6\u7fa4\u8282\u70b9\u4fe1\u606f\uff0c\u5426\u5219\u65e0\u6cd5\u627e\u5230\u96c6\u7fa4\u8282\u70b9\u3002"),(0,s.kt)("h2",{id:"2\u5bb9\u5668\u90e8\u7f72"},"2\u3001\u5bb9\u5668\u90e8\u7f72"),(0,s.kt)("p",null,"\u4e09\u53f0\u673a\u5668\uff1a\n\u521b\u5efa\u76ee\u5f55"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"sudo mkdir -p /app/server/elasticsearch/temp/config\nsudo mkdir -p /app/server/elasticsearch/temp/data\nsudo mkdir -p /app/server/elasticsearch/temp/logs\n")),(0,s.kt)("p",null,"\u4fee\u6539\u6743\u9650"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"sudo chmod 777 /app/server/elasticsearch/temp/config\nsudo chmod 777 /app/server/elasticsearch/temp/data\nsudo chmod 777 /app/server/elasticsearch/temp/logs\n")),(0,s.kt)("p",null,"\u914d\u7f6e\u6587\u4ef6\u53c2\u8003"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'cluster.name: skywalking_demo\nnode.name: beijing-k8s-node01  #\u5f53\u524d\u4e3b\u673a\u540d\nnode.master: true\nnode.data: true\nnetwork.host: 0.0.0.0\nhttp.port: 9200 #\u5916\u90e8\u76d1\u542c\u7aef\u53e3\ntransport.port: 9300 #\u96c6\u7fa4\u5185\u90e8\u901a\u4fe1\u7aef\u53e3\ndiscovery.seed_hosts: ["10.51.8.112:9300","10.51.8.113:19300","10.51.8.114:9300"]  #\u5019\u9009 master\ncluster.initial_master_nodes: ["10.51.8.112","10.51.8.113"]  #\u521d\u59cb\u5316 master\nhttp.cors.enabled: true\nhttp.cors.allow-origin: "*"\n')),(0,s.kt)("p",null,"\u78c1\u76d8\u6302\u8f7d\uff1a "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"/app/server/elasticsearch/temp/config/elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml\n/app/server/elasticsearch/temp/data:/usr/share/elasticsearch/data\n/app/server/elasticsearch/temp/logs:/usr/share/elasticsearch/logs\n")),(0,s.kt)("p",null,"\u5bb9\u5668\u542f\u52a8\uff1a "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'[root@beijing-k8s-node01 ~]# cat es_compose.yaml \nversion: \'3\'\nservices:\n  es_node01:\n    image: registry.cn-hangzhou.aliyuncs.com/zlq_registry/elasticsearch:7.17.3\n    environment:\n      - bootstrap.memory_lock=true\n      - "ES_JAVA_OPTS=-Xms1024m -Xmx1024m"\n    ulimits:\n      memlock:\n        soft: -1\n        hard: -1\n    volumes:\n      - /app/server/elasticsearch/temp/config/elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml\n      - /app/server/elasticsearch/temp/data:/usr/share/elasticsearch/data\n      - /app/server/elasticsearch/temp/logs:/usr/share/elasticsearch/logs\n    network_mode: host \nnetworks:\n  es-net:\n    driver: bridge\n\n\n \n [root@beijing-k8s-node02 ~]# cat es_compose.yaml \nversion: \'3\'\nservices:\n  es_node02:\n    image: registry.cn-hangzhou.aliyuncs.com/zlq_registry/elasticsearch:7.17.3\n    environment:\n      - bootstrap.memory_lock=true\n      - "ES_JAVA_OPTS=-Xms1024m -Xmx1024m"\n    ulimits:\n      memlock:\n        soft: -1\n        hard: -1\n    volumes:\n      - /app/server/elasticsearch/temp/config/elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml\n      - /app/server/elasticsearch/temp/data:/usr/share/elasticsearch/data\n      - /app/server/elasticsearch/temp/logs:/usr/share/elasticsearch/logs\n    network_mode: "host"\n[root@beijing-k8s-node02 ~]#\n \n \n \n [root@beijing-k8s-node03 ~]# cat es_compose.yaml \nversion: \'3\'\nservices:\n  es_node03:\n    image: registry.cn-hangzhou.aliyuncs.com/zlq_registry/elasticsearch:7.17.3\n    environment:\n      - bootstrap.memory_lock=true\n      - "ES_JAVA_OPTS=-Xms1024m -Xmx1024m"\n    ulimits:\n      memlock:\n        soft: -1\n        hard: -1\n    volumes:\n      - /app/server/elasticsearch/temp/config/elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml\n      - /app/server/elasticsearch/temp/data:/usr/share/elasticsearch/data\n      - /app/server/elasticsearch/temp/logs:/usr/share/elasticsearch/logs\n    network_mode: "host"\n')),(0,s.kt)("p",null,"\u542f\u52a8\u540e\u9a8c\u8bc1\uff1a "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'curl -l http://192.168.20.20:19200\n\u67e5\u770b\u96c6\u7fa4\u72b6\u6001\ncurl -X GET "192.168.20.20:19200/_cat/health?v"\n\u67e5\u770b\u8282\u70b9\ncurl -X GET "192.168.20.20:19200/_cat/nodes?v&pretty"\n\u67e5\u770b\u6240\u6709\u7d22\u5f15\ncurl -XGET "http://192.168.20.20:19200/_cat/indices?v&pretty"\n\nGET /_cat/nodes: \u67e5\u770b\u6240\u6709\u8282\u70b9\nGET/_cat/health:\u67e5\u770bes\u5065\u5eb7\u72b6\u51b5\nGET /_cat/master:\u67e5\u770b\u4e3b\u8282\u70b9\n\n\u67e5\u770bES\u5065\u5eb7\u72b6\u6001\n[root@test apps]# curl localhost:9300/_cluster/health?pretty\n{\n  "cluster_name" : "skywalking_elasticsearch",\n  "status" : "yellow",\n  "timed_out" : false,\n  "number_of_nodes" : 2,\n  "number_of_data_nodes" : 2,\n  "active_primary_shards" : 156,\n  "active_shards" : 296,\n  "relocating_shards" : 0,\n  "initializing_shards" : 1,\n  "unassigned_shards" : 0,\n  "delayed_unassigned_shards" : 0,\n  "number_of_pending_tasks" : 0,\n  "number_of_in_flight_fetch" : 0,\n  "task_max_waiting_in_queue_millis" : 0,\n  "active_shards_percent_as_number" : 99.66329966329967\n}\n\n\u67e5\u770bES\u96c6\u7fa4\u7684\u8bbe\u7f6e\n[root@test apps]# curl localhost:9300/_cluster/settings?pretty\n{\n  "persistent" : { },\n  "transient" : { }\n}\n\u5176\u4e2dpersistent\u4e3a\u6c38\u4e45\u8bbe\u7f6e\uff0c\u91cd\u542f\u4ecd\u7136\u6709\u6548\uff1btrainsient\u4e3a\u4e34\u65f6\u8bbe\u7f6e\uff0c\u91cd\u542f\u5931\u6548\n\n\n#\u67e5\u770bES\u5728\u7ebf\u7684\u8282\u70b9\n[root@test apps]# curl localhost:9300/_cat/nodes?v\nip             heap.percent ram.percent cpu load_1m load_5m load_15m node.role master name\n172.17.113.125           67          99   7    1.34    2.85     2.31 mdi       -      node-2\n172.17.224.119           48          99   6    1.55    3.54     3.08 mdi       *      node-1\n#\u5b58\u5728\u8282\u70b9\u7f3a\u5931\u7684\u60c5\u51b5\u53ef\u7528\u8be5\u547d\u4ee4\u67e5\u770b\u7f3a\u5931\u8282\u70b9\u4e3a\u54ea\u4e9b\n\n\n\u76f8\u5173\u6587\u6863 \nhttps://zhuanlan.zhihu.com/p/360762412\n')),(0,s.kt)("p",null,"\u53ef\u89c6\u5316\u5de5\u5177\u5b89\u88c5"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'####### kibana \u5b89\u88c5\n\n1 \u521b\u5efa\u6587\u4ef6\u5939\nsudo mkdir -p /app/server/elasticsearch/kibana/config\n\n2 \u914d\u7f6e\u6587\u4ef6\uff0ckibana.yml\nsudo vi /app/server/elasticsearch/kibana/config/kibana.yml\n\nserver.port: 9901\nserver.name: kibana\nserver.host: "0"\nelasticsearch.hosts: ["http://192.168.20.20:19200"]\nxpack.monitoring.ui.container.elasticsearch.enabled: true\n\n3 \u542f\u52a8\u914d\u7f6e\n/app/server/elasticsearch/kibana/config/kibana.yml:/usr/share/kibana/config/kibana.yml\n\n\n######## elasticsearch-hq \u5b89\u88c5\n\ndocker run -d -p 9900:5000 elastichq/elasticsearch-hq:release-v3.5.12\n')),(0,s.kt)("h2",{id:"3\u5355\u8282\u70b9\u96c6\u7fa4\u90e8\u7f72"},"3\u3001\u5355\u8282\u70b9\u96c6\u7fa4\u90e8\u7f72"),(0,s.kt)("h6",{id:"\u8fd9\u4e2a\u914d\u7f6e\u53ea\u9002\u7528\u4e8ees-7x"},"\u8fd9\u4e2a\u914d\u7f6e\u53ea\u9002\u7528\u4e8eES 7.x"),(0,s.kt)("p",null,"\u6b65\u9aa4"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u62f7\u8d1delasticsearch\u5b89\u88c5\u53053\u4efd\uff0c\u5206\u522b\u547d\u540des-a, es-b,es-c"),(0,s.kt)("li",{parentName:"ul"},"\u5206\u522b\u4fee\u6539config\u6587\u4ef6\u5939\u4e0b\u7684elasticsearch.yml\u6587\u4ef6\u5185\u5bb9\uff08\u5982\u4e0b\uff09"),(0,s.kt)("li",{parentName:"ul"},"\u5206\u522b\u542f\u52a8a ,b ,c \u4e09\u4e2a\u8282\u70b9"),(0,s.kt)("li",{parentName:"ul"},"\u6253\u5f00\u6d4f\u89c8\ufa38\u8f93\u5165\uff1a http://localhost:9200/_cat/health?v ,\u5982\u679c\u8fd4\u56de\u7684node.total\u662f3\uff0c\u4ee3\u8868\u96c6\u7fa4\u642d\u5efa\u6210\u529f\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528head\u8fdb\u884c\u8fde\u63a5es\uff0c\u5982\u679c\u51fa\u73b0\u96c6\u7fa4\u4fe1\u606f\uff0c\u5219\u642d\u5efa\u6210\u529f\u3002")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u5982\u679cdata\u76ee\u5f55\u6709\u5df2\u7ecf\u5efa\u7acb\u597d\u7684\u7d22\u5f15\u5e93\u7684\u8bdd\uff0c\u9700\u8981\u628adata\u76ee\u5f55\u6e05\u7a7a\u3002")),(0,s.kt)("p",null,"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6ELASTICSEARCH.YML\na\u8282\u70b9"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'http.cors.enabled: true\nhttp.cors.allow-origin: "*"\n#\u8282\u70b91\u7684\u914d\u7f6e\u4fe1\u606f\uff1a\n#\u96c6\u7fa4\u540d\u79f0\ncluster.name: elasticsearch\n#\u8282\u70b9\u540d\u79f0\nnode.name: node-a\n#\u662f\u4e0d\u662f\u6709\u8d44\u683c\u7ade\u9009\u4e3b\u8282\u70b9\nnode.master: true\n#\u662f\u5426\u5b58\u50a8\u6570\u636e\nnode.data: true\n#\u6700\u5927\u96c6\u7fa4\u8282\u70b9\u6570\nnode.max_local_storage_nodes: 3\n#\u7f51\u5173\u5730\u5740\nnetwork.host: 127.0.0.1\n#\u7aef\u53e3\nhttp.port: 9201\n#\u5185\u90e8\u8282\u70b9\u4e4b\u95f4\u6c9f\u901a\u7aef\u53e3\ntransport.tcp.port: 9301\n#es7.x \u4e4b\u540e\u65b0\u589e\u7684\u914d\u7f6e\uff0c\u5199\u5165\u5019\u9009\u4e3b\u8282\u70b9\u7684\u8bbe\u5907\u5730\u5740\uff0c\u5728\u5f00\u542f\u670d\u52a1\u540e\u53ef\u4ee5\u88ab\u9009\u4e3a\u4e3b\u8282\u70b9\ndiscovery.seed_hosts: ["127.0.0.1:9301","127.0.0.1:9302","127.0.0.1:9303"]\n#es7.x \u4e4b\u540e\u65b0\u589e\u7684\u914d\u7f6e\uff0c\u521d\u59cb\u5316\u4e00\u4e2a\u65b0\u7684\u96c6\u7fa4\u65f6\u9700\u8981\u6b64\u914d\u7f6e\u6765\u9009\u4e3emaster\ncluster.initial_master_nodes: ["node-a", "node-b","node-c"]\n#\u6570\u636e\u5b58\u50a8\u8def\u5f84\npath.data: /home/es/software/es/data\n#\u65e5\u5fd7\u5b58\u50a8\u8def\u5f84\npath.logs: /home/es/software/es/logs\n')),(0,s.kt)("p",null,"b\u8282\u70b9"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'http.cors.enabled: true\nhttp.cors.allow-origin: "*"\n#\u8282\u70b91\u7684\u914d\u7f6e\u4fe1\u606f\uff1a\n#\u96c6\u7fa4\u540d\u79f0\ncluster.name: elasticsearch\n#\u8282\u70b9\u540d\u79f0\nnode.name: node-b\n#\u662f\u4e0d\u662f\u6709\u8d44\u683c\u7ade\u9009\u4e3b\u8282\u70b9\nnode.master: true\n#\u662f\u5426\u5b58\u50a8\u6570\u636e\nnode.data: true\n#\u6700\u5927\u96c6\u7fa4\u8282\u70b9\u6570\nnode.max_local_storage_nodes: 3\n#\u7f51\u5173\u5730\u5740\nnetwork.host: 127.0.0.1\n#\u7aef\u53e3\nhttp.port: 9202\n#\u5185\u90e8\u8282\u70b9\u4e4b\u95f4\u6c9f\u901a\u7aef\u53e3\ntransport.tcp.port: 9302\n#es7.x \u4e4b\u540e\u65b0\u589e\u7684\u914d\u7f6e\uff0c\u5199\u5165\u5019\u9009\u4e3b\u8282\u70b9\u7684\u8bbe\u5907\u5730\u5740\uff0c\u5728\u5f00\u542f\u670d\u52a1\u540e\u53ef\u4ee5\u88ab\u9009\u4e3a\u4e3b\u8282\u70b9\ndiscovery.seed_hosts: ["127.0.0.1:9301","127.0.0.1:9302","127.0.0.1:9303"]\n#es7.x \u4e4b\u540e\u65b0\u589e\u7684\u914d\u7f6e\uff0c\u521d\u59cb\u5316\u4e00\u4e2a\u65b0\u7684\u96c6\u7fa4\u65f6\u9700\u8981\u6b64\u914d\u7f6e\u6765\u9009\u4e3emaster\ncluster.initial_master_nodes: ["node-a", "node-b","node-c"]\n#\u6570\u636e\u5b58\u50a8\u8def\u5f84\npath.data: /home/es/software/es/data\n#\u65e5\u5fd7\u5b58\u50a8\u8def\u5f84\npath.logs: /home/es/software/es/logs\n')),(0,s.kt)("p",null,"c\u8282\u70b9"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'http.cors.enabled: true\nhttp.cors.allow-origin: "*"\n#\u8282\u70b91\u7684\u914d\u7f6e\u4fe1\u606f\uff1a\n#\u96c6\u7fa4\u540d\u79f0\ncluster.name: elasticsearch\n#\u8282\u70b9\u540d\u79f0\nnode.name: node-c\n#\u662f\u4e0d\u662f\u6709\u8d44\u683c\u7ade\u9009\u4e3b\u8282\u70b9\nnode.master: true\n#\u662f\u5426\u5b58\u50a8\u6570\u636e\nnode.data: true\n#\u6700\u5927\u96c6\u7fa4\u8282\u70b9\u6570\nnode.max_local_storage_nodes: 3\n#\u7f51\u5173\u5730\u5740\nnetwork.host: 127.0.0.1\n#\u7aef\u53e3\nhttp.port: 9203\n#\u5185\u90e8\u8282\u70b9\u4e4b\u95f4\u6c9f\u901a\u7aef\u53e3\ntransport.tcp.port: 9303\n#es7.x \u4e4b\u540e\u65b0\u589e\u7684\u914d\u7f6e\uff0c\u5199\u5165\u5019\u9009\u4e3b\u8282\u70b9\u7684\u8bbe\u5907\u5730\u5740\uff0c\u5728\u5f00\u542f\u670d\u52a1\u540e\u53ef\u4ee5\u88ab\u9009\u4e3a\u4e3b\u8282\u70b9\ndiscovery.seed_hosts: ["127.0.0.1:9301","127.0.0.1:9302","127.0.0.1:9303"]\n#es7.x \u4e4b\u540e\u65b0\u589e\u7684\u914d\u7f6e\uff0c\u521d\u59cb\u5316\u4e00\u4e2a\u65b0\u7684\u96c6\u7fa4\u65f6\u9700\u8981\u6b64\u914d\u7f6e\u6765\u9009\u4e3emaster\ncluster.initial_master_nodes: ["node-a", "node-b","node-c"]\n#\u6570\u636e\u5b58\u50a8\u8def\u5f84\npath.data: /home/es/software/es/data\n#\u65e5\u5fd7\u5b58\u50a8\u8def\u5f84\npath.logs: /home/es/software/es/logs\n')),(0,s.kt)("p",null,"\u4f7f\u7528HEAD\u67e5\u770b\u96c6\u7fa4\u4fe1\u606f\u5982\u4e0b\uff0c\u8bf4\u660e\u642d\u5efa\u6210\u529f"),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(95532).Z,width:"880",height:"272"})),(0,s.kt)("h2",{id:"head\u90e8\u7f72"},"head\u90e8\u7f72"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"sudo docker run -d \\\n  --name=elasticsearch-head \\\n  --restart=always \\\n  -p 9500:9100 \\\n  registry.cn-hangzhou.aliyuncs.com/zlq_registry/elasticsearch-head:5-alpine\n")),(0,s.kt)("h2",{id:"es\u7d22\u5f15\u5bfc\u51fa"},"es\u7d22\u5f15\u5bfc\u51fa"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'elasticdump  --input="http://$esAccount:$esPassword@$esIp:$esPort/${index_name}" --output=${back_es_dir}/$index_name.json.bak_$NOW --type=data\n')))}h.isMDXComponent=!0},75933:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/m_0d64d766ad5006f73c29f4398ecf5892_r-f02452e0d2cc32a56274ee20e644ca1d.png"},28344:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/m_1a0cc3e5b76c5ee4b02b351dbd7f4d1d_r-88732c73efe3ef34ac95dc3aec5e65c7.png"},44666:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/m_2b6bcfddcb7c9c0c342ba0267d9c1c97_r-3d9a67d54a2ec6d8f86a9bfe3b45a62b.png"},1144:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/m_49526a6d7e4ae7e4df3f680ce2f64626_r-fbee3debff95de0c1289d576adb8cbd8.png"},33815:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/m_6c73efe34c9fb98b91b6d89f96d7670c_r-43bb66b9146c2b9919eef7032bfa9bdf.png"},69423:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/m_6efbc75e6bce3a032d948c9c008bcf9a_r-d9e84e272005a734fed55460dc5d0503.png"},42184:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/m_71a499c460edb7a07fb3821a08ceee1c_r-ca575bd61d737c65710855ffb42db005.png"},51119:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/m_7c5f8a212ef4ceeba5a69650b86d27ac_r-f9790482bbdfed013cc4e78975244508.png"},68179:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/m_86d5aa3a2415377072935a07f7b73f99_r-6b1a95665ac228351e74fff6559b8df8.png"},39063:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/m_977b59a5a64246385effeb8f880a0c58_r-85bf5fd3a64518fd3d1c02cf8c6e26fd.png"},96809:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/m_982df7c7b25ee1624aff3ca0a3ec95c5_r-579aea91140b89560211c841d5db4dc2.png"},11463:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/m_9a4330a8494853119feb1088f2a415d0_r-91f05a49ab5cb41186606da80edc772f.png"},53035:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/m_9ec589505ac2ba76cf66d41576000514_r-eefd9b0c6922935872ebf3a90d6b5224.png"},95532:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/m_a1ec268b5c670e3703315e69f3ad9a41_r-af8b6a30a7d2ad77c83620530abfb198.png"},65709:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/m_a46f00cbf5e65487f0bc6ab8e99fb31a_r-2ca071d35d51c369677bb64b0816a0b6.png"},50152:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/m_b4bc53f40d2ecc53780e3f3c2dd233c3_r-0bcf7ead10563cd6b0a5f87af05e52c8.png"},50164:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/m_b99901484bd6f55da40f095194c5bd19_r-67eb3b96b09a0a9f28ba8e941a2f62bb.png"},42558:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/m_bb053d409437a74a57f4939a31835e20_r-84d9b8cce3b114a7c9a4eaaa6f134356.png"},5604:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/m_c408ddf36ec47598299db76d3156c3d2_r-63b123fba2d6e07f6eb91eb418e16a57.png"},13925:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/m_ea9f34a30c3fdb68dcaebda54a1ade40_r-c274be76aeae315970f6d3fcab807381.png"}}]);