"use strict";(self.webpackChunkbookshell=self.webpackChunkbookshell||[]).push([[2902],{5680:(e,n,a)=>{a.d(n,{xA:()=>p,yg:()=>d});var s=a(6540);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,s)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function c(e,n){if(null==e)return{};var a,s,t=function(e,n){if(null==e)return{};var a,s,t={},r=Object.keys(e);for(s=0;s<r.length;s++)a=r[s],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)a=r[s],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var o=s.createContext({}),i=function(e){var n=s.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},p=function(e){var n=i(e.components);return s.createElement(o.Provider,{value:n},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},u=s.forwardRef((function(e,n){var a=e.components,t=e.mdxType,r=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=i(a),u=t,d=m["".concat(o,".").concat(u)]||m[u]||h[u]||r;return a?s.createElement(d,l(l({ref:n},p),{},{components:a})):s.createElement(d,l({ref:n},p))}));function d(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var r=a.length,l=new Array(r);l[0]=u;var c={};for(var o in n)hasOwnProperty.call(n,o)&&(c[o]=n[o]);c.originalType=e,c[m]="string"==typeof e?e:t,l[1]=c;for(var i=2;i<r;i++)l[i]=a[i];return s.createElement.apply(null,l)}return s.createElement.apply(null,a)}u.displayName="MDXCreateElement"},620:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>i});var s=a(8168),t=(a(6540),a(5680));const r={},l=void 0,c={unversionedId:"DevOps/skywalking/elasticsearch\u5bb9\u5668\u96c6\u7fa4\u5b89\u88c5",id:"DevOps/skywalking/elasticsearch\u5bb9\u5668\u96c6\u7fa4\u5b89\u88c5",title:"elasticsearch\u5bb9\u5668\u96c6\u7fa4\u5b89\u88c5",description:"elasticsearch\u5bb9\u5668\u96c6\u7fa4\u90e8\u7f72",source:"@site/docs/DevOps/4-skywalking/2-elasticsearch\u5bb9\u5668\u96c6\u7fa4\u5b89\u88c5.md",sourceDirName:"DevOps/4-skywalking",slug:"/DevOps/skywalking/elasticsearch\u5bb9\u5668\u96c6\u7fa4\u5b89\u88c5",permalink:"/bookshell/docs/DevOps/skywalking/elasticsearch\u5bb9\u5668\u96c6\u7fa4\u5b89\u88c5",draft:!1,editUrl:"https://github.com/shouji1128955/bookshell/edit/main/docs/DevOps/4-skywalking/2-elasticsearch\u5bb9\u5668\u96c6\u7fa4\u5b89\u88c5.md",tags:[],version:"current",lastUpdatedBy:"zhanglaiqiang",lastUpdatedAt:1727765685,formattedLastUpdatedAt:"2024\u5e7410\u67081\u65e5",sidebarPosition:2,frontMatter:{},sidebar:"DevOpsSkywalking",previous:{title:"zookeeper\u5b89\u88c5",permalink:"/bookshell/docs/DevOps/skywalking/zookeeper\u5b89\u88c5"}},o={},i=[{value:"elasticsearch\u5bb9\u5668\u96c6\u7fa4\u90e8\u7f72",id:"elasticsearch\u5bb9\u5668\u96c6\u7fa4\u90e8\u7f72",level:2},{value:"\u7cfb\u7edf\u914d\u7f6e",id:"\u7cfb\u7edf\u914d\u7f6e",level:4},{value:"\u670d\u52a1\u90e8\u7f72",id:"\u670d\u52a1\u90e8\u7f72",level:4},{value:"\u5355\u673a\u90e8\u7f72",id:"\u5355\u673a\u90e8\u7f72",level:2}],p={toc:i},m="wrapper";function h(e){let{components:n,...a}=e;return(0,t.yg)(m,(0,s.A)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h2",{id:"elasticsearch\u5bb9\u5668\u96c6\u7fa4\u90e8\u7f72"},"elasticsearch\u5bb9\u5668\u96c6\u7fa4\u90e8\u7f72"),(0,t.yg)("h4",{id:"\u7cfb\u7edf\u914d\u7f6e"},"\u7cfb\u7edf\u914d\u7f6e"),(0,t.yg)("p",null,"1\u3001\u51c6\u5907\u673a\u5668\n\u51c6\u59073\u53f0\u673a\u5668\uff0c\u5b89\u88c5CentOS7.9\u3002ip\u8ba1\u5212\u5982\u4e0b"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"[root@110 elasticsearch]# cat /etc/hosts\n10.51.8.110  nacos1\n10.51.8.110  zoo1 es01   #\u4e3b\u8282\u70b9\n10.51.8.112  zoo2 es02   #\u6570\u636e\u8282\u70b9\n10.51.8.113  zoo3 es03   #\u4e3b\u8282\u70b9\n\n")),(0,t.yg)("p",null,"2\u3001\u5173\u95ed\u9632\u706b\u5899"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"systemctl stop firewalld\nsystemctl disable firewalld\n")),(0,t.yg)("p",null,"3\u3001\u7981\u7528SELINUX"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"vim /etc/selinux/config\n\u5c06SELINUX\u8bbe\u7f6e\u4e3adisabled\uff1a\nSELINUX=disabled\n")),(0,t.yg)("p",null,"4\u3001\u4fee\u6539\u4e3b\u673a\u540d"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"#\u8bbe\u7f6e\u4e3b\u673a\u540d\n10.51.8.110 \nhostnamectl set-hostname es01\n10.51.8.112\nhostnamectl set-hostname es02\n10.51.8.113\nhostnamectl set-hostname es03\n\u901a\u8fc7hostname\u547d\u4ee4\u67e5\u770b\u4e3b\u673a\u540d\u3002\n")),(0,t.yg)("p",null,"4\u3001\u914d\u7f6eIP\u6620\u5c04"),(0,t.yg)("p",null,"vim /etc/hosts\n\u6700\u540e\u589e\u52a0\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"[root@110 elasticsearch]# cat /etc/hosts\n10.51.8.110  zoo1 es01   #\u4e3b\u8282\u70b9\n10.51.8.112  zoo2 es02   #\u6570\u636e\u8282\u70b9\n10.51.8.113  zoo3 es03   #\u4e3b\u8282\u70b9\n\n")),(0,t.yg)("p",null,"\u4fee\u6539\u6253\u5f00\u6587\u4ef6\u6700\u5927\u6570"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"vi /etc/security/limits.conf\n# \u5728end\u524d\u8ffd\u52a0\u4e0b\u9762\u5185\u5bb9 \n* soft nofile 65536\n* hard nofile 65536\n")),(0,t.yg)("p",null,"\u4fee\u6539\u540e\u91cd\u65b0\u767b\u5f55\uff0c\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u67e5\u770b\u662f\u5426\u4fee\u6539\u6210\u529f"),(0,t.yg)("p",null,"ulimit -Hn"),(0,t.yg)("p",null," \u63d0\u9ad8vm.max_map_count \u7684\u5927\u5c0f"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"vi /etc/sysctl.conf \n# \u5728\u6700\u540e\u9762\u8ffd\u52a0\u4e0b\u9762\u5185\u5bb9 \nvm.max_map_count=262144 \n")),(0,t.yg)("p",null,"\u4f7f\u7528 ",(0,t.yg)("a",{parentName:"p",href:"https://so.csdn.net/so/search?q=sysctl&spm=1001.2101.3001.7020"},"sysctl")," -p \u67e5\u770b\u4fee\u6539\u540e\u7684\u7ed3\u679c"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"sysctl -p\n")),(0,t.yg)("h4",{id:"\u670d\u52a1\u90e8\u7f72"},"\u670d\u52a1\u90e8\u7f72"),(0,t.yg)("p",null,"\u521b\u5efa\u76ee\u5f55"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"sudo mkdir -p /app/server/elasticsearch/temp/config\nsudo mkdir -p /app/server/elasticsearch/temp/data\nsudo mkdir -p /app/server/elasticsearch/temp/logs\n")),(0,t.yg)("p",null,"\u4fee\u6539\u6743\u9650"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"sudo chmod 777 /app/server/elasticsearch/temp/config\nsudo chmod 777 /app/server/elasticsearch/temp/data\nsudo chmod 777 /app/server/elasticsearch/temp/logs\n")),(0,t.yg)("p",null,"\u914d\u7f6e\u6587\u4ef6\u53c2\u8003\uff0c\u6bcf\u53f0\u670d\u52a1\u5668\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u8fdb\u884c\u8c03\u6574"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},'[root@110 elasticsearch]# cat /app/server/elasticsearch/temp/config/elasticsearch.yml\ncluster.name: skywalking_demo\nnode.name: es01  #\u5f53\u524d\u4e3b\u673a\u540d\uff0c\u6bcf\u53f0\u673a\u5668\u90fd\u9700\u8981\u4fee\u6539\nnode.master: true\nnode.data: true\nnetwork.host: 0.0.0.0\nhttp.port: 9200 #\u5916\u90e8\u76d1\u542c\u7aef\u53e3\ntransport.port: 9300 #\u96c6\u7fa4\u5185\u90e8\u901a\u4fe1\u7aef\u53e3\ndiscovery.seed_hosts: ["10.51.8.110:9300","10.51.8.112:19300","10.51.8.113:9300"]  #\u5019\u9009 master\ncluster.initial_master_nodes: ["10.51.8.110","10.51.8.113"]  #\u521d\u59cb\u5316 master\nhttp.cors.enabled: true  #\u5141\u8bb8head\u63d2\u4ef6\u8bbf\u95eees\nhttp.cors.allow-origin: "*"\n\n')),(0,t.yg)("p",null,"\u78c1\u76d8\u6302\u8f7d\uff1a "),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"/app/server/elasticsearch/temp/config/elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml\n/app/server/elasticsearch/temp/data:/usr/share/elasticsearch/data\n/app/server/elasticsearch/temp/logs:/usr/share/elasticsearch/logs\n")),(0,t.yg)("p",null,"\u5bb9\u5668\u542f\u52a8\uff1a "),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"[root@110 elasticsearch]# cat docker-compose.yaml  \nversion: '3'\nservices:\n  es_node01:\n    image: registry.cn-hangzhou.aliyuncs.com/zlq_registry/elasticsearch:7.17.3\n    restart: always\n    hostname: es01\n    network_mode: host\n    container_name: es01\n    environment:\n      - bootstrap.memory_lock=true\n      - \"ES_JAVA_OPTS=-Xms1024m -Xmx1024m\"\n    ulimits:\n      memlock:\n        soft: -1\n        hard: -1\n    volumes:\n      - /app/server/elasticsearch/temp/config/elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml\n      - /app/server/elasticsearch/temp/data:/usr/share/elasticsearch/data\n      - /app/server/elasticsearch/temp/logs:/usr/share/elasticsearch/logs\n    network_mode: host \nnetworks:\n  es-net:\n    driver: bridge\n\n\n \n[root@demo112 elasticsearch]# cat docker-compose.yaml  \nversion: '3'\nservices:\n  es_node01:\n    image: registry.cn-hangzhou.aliyuncs.com/zlq_registry/elasticsearch:7.17.3\n    hostname: es02\n    restart: always\n    network_mode: host\n    container_name: es02\n    environment:\n      - bootstrap.memory_lock=true\n      - \"ES_JAVA_OPTS=-Xms1024m -Xmx1024m\"\n    ulimits:\n      memlock:\n        soft: -1\n        hard: -1\n    volumes:\n      - /app/server/elasticsearch/temp/config/elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml\n      - /app/server/elasticsearch/temp/data:/usr/share/elasticsearch/data\n      - /app/server/elasticsearch/temp/logs:/usr/share/elasticsearch/logs\n    network_mode: host \nnetworks:\n  es-net:\n    driver: bridge\n\n \n \n \n[root@113 elasticsearch]# cat docker-compose.yaml  \nversion: '3'\nservices:\n  es_node01:\n    image: registry.cn-hangzhou.aliyuncs.com/zlq_registry/elasticsearch:7.17.3\n    hostname: es03\n    restart: always\n    network_mode: host\n    container_name: es03\n    environment:\n      - bootstrap.memory_lock=true\n      - \"ES_JAVA_OPTS=-Xms1024m -Xmx1024m\"\n    ulimits:\n      memlock:\n        soft: -1\n        hard: -1\n    volumes:\n      - /app/server/elasticsearch/temp/config/elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml\n      - /app/server/elasticsearch/temp/data:/usr/share/elasticsearch/data\n      - /app/server/elasticsearch/temp/logs:/usr/share/elasticsearch/logs\n    network_mode: host \nnetworks:\n  es-net:\n    driver: bridge\n")),(0,t.yg)("p",null,"\u542f\u52a8\u540e\u9a8c\u8bc1\uff1a "),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},'curl -l http://192.168.20.20:19200\n\u67e5\u770b\u96c6\u7fa4\u72b6\u6001\ncurl -X GET "192.168.20.20:19200/_cat/health?v"\n\u67e5\u770b\u8282\u70b9\ncurl -X GET "192.168.20.20:19200/_cat/nodes?v&pretty"\n\u67e5\u770b\u6240\u6709\u7d22\u5f15\ncurl -XGET "http://192.168.20.20:19200/_cat/indices?v&pretty"\n\nGET /_cat/nodes: \u67e5\u770b\u6240\u6709\u8282\u70b9\nGET/_cat/health:\u67e5\u770bes\u5065\u5eb7\u72b6\u51b5\nGET /_cat/master:\u67e5\u770b\u4e3b\u8282\u70b9\n\n\u67e5\u770bES\u5065\u5eb7\u72b6\u6001\n[root@test apps]# curl localhost:9300/_cluster/health?pretty\n{\n  "cluster_name" : "skywalking_elasticsearch",\n  "status" : "yellow",\n  "timed_out" : false,\n  "number_of_nodes" : 2,\n  "number_of_data_nodes" : 2,\n  "active_primary_shards" : 156,\n  "active_shards" : 296,\n  "relocating_shards" : 0,\n  "initializing_shards" : 1,\n  "unassigned_shards" : 0,\n  "delayed_unassigned_shards" : 0,\n  "number_of_pending_tasks" : 0,\n  "number_of_in_flight_fetch" : 0,\n  "task_max_waiting_in_queue_millis" : 0,\n  "active_shards_percent_as_number" : 99.66329966329967\n}\n\n\u67e5\u770bES\u96c6\u7fa4\u7684\u8bbe\u7f6e\n[root@test apps]# curl localhost:9300/_cluster/settings?pretty\n{\n  "persistent" : { },\n  "transient" : { }\n}\n\u5176\u4e2dpersistent\u4e3a\u6c38\u4e45\u8bbe\u7f6e\uff0c\u91cd\u542f\u4ecd\u7136\u6709\u6548\uff1btrainsient\u4e3a\u4e34\u65f6\u8bbe\u7f6e\uff0c\u91cd\u542f\u5931\u6548\n\n\n#\u67e5\u770bES\u5728\u7ebf\u7684\u8282\u70b9\n[root@test apps]# curl localhost:9300/_cat/nodes?v\nip             heap.percent ram.percent cpu load_1m load_5m load_15m node.role master name\n172.17.113.125           67          99   7    1.34    2.85     2.31 mdi       -      node-2\n172.17.224.119           48          99   6    1.55    3.54     3.08 mdi       *      node-1\n#\u5b58\u5728\u8282\u70b9\u7f3a\u5931\u7684\u60c5\u51b5\u53ef\u7528\u8be5\u547d\u4ee4\u67e5\u770b\u7f3a\u5931\u8282\u70b9\u4e3a\u54ea\u4e9b\n\n\n\u76f8\u5173\u6587\u6863 \nhttps://zhuanlan.zhihu.com/p/360762412\n')),(0,t.yg)("p",null,"\u53ef\u89c6\u5316\u5de5\u5177\u5b89\u88c5"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},'####### kibana \u5b89\u88c5\n\n1 \u521b\u5efa\u6587\u4ef6\u5939\nsudo mkdir -p /app/server/elasticsearch/kibana/config\n\n2 \u914d\u7f6e\u6587\u4ef6\uff0ckibana.yml\nsudo vi /app/server/elasticsearch/kibana/config/kibana.yml\n\nserver.port: 9901\nserver.name: kibana\nserver.host: "0"\nelasticsearch.hosts: ["http://192.168.20.20:19200"]\nxpack.monitoring.ui.container.elasticsearch.enabled: true\n\n3 \u542f\u52a8\u914d\u7f6e\n/app/server/elasticsearch/kibana/config/kibana.yml:/usr/share/kibana/config/kibana.yml\n\n\n######## elasticsearch-hq \u5b89\u88c5\n\ndocker run -d -p 9900:5000 elastichq/elasticsearch-hq:release-v3.5.12\n')),(0,t.yg)("p",null,"\u914d\u7f6e\u6587\u4ef6\u53c2\u8003"),(0,t.yg)("p",null,"\u4e3b\u8282\u70b9"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},'cluster.name: "docker-cluster"               #\u96c6\u7fa4\u540d\uff0c\u540c\u4e00\u96c6\u7fa4\u5fc5\u987b\u76f8\u540c\nnode.name: 10.0.13.124                       #\u6307\u5b9a\u8282\u70b9\u4e3b\u673a\u540d\nnode.master: true                            #\u5141\u8bb8\u6210\u4e3a\u4e3b\u8282\u70b9\nnode.data: true                              #\u6570\u636e\u8282\u70b9\npath.data: /usr/share/elasticsearch/data                #\u6570\u636e\u5b58\u653e\u8def\u5f84\npath.logs: /usr/share/elasticsearch/logs                #\u65e5\u5fd7\u8def\u5f84\nbootstrap.memory_lock: false                            #\u5173\u95ed\u9501\u5b9a\u5185\u5b58\uff0c\u8bbe\u7f6e\u4e3atrue\u4f1a\u62a5\u9519\nnetwork.host: 0.0.0.0                                   #\u76d1\u542cip\nnetwork.publish_host: 10.0.13.124                       #\u96c6\u7fa4\u901a\u8bafip\nhttp.port: 9200                                         #http\u7aef\u53e3\ntransport.tcp.port: 9300\ncluster.initial_master_nodes: ["10.0.13.124:9300"]      #\u521d\u59cb\u4e3b\u7ed3\u70b9\u5217\u8868\ndiscovery.zen.ping.unicast.hosts: ["10.0.13.103:9300","10.0.13.123:9300","10.0.13.124:9300"]     #\u521d\u59cb\u4e3b\u673a\u5217\u8868\ndiscovery.zen.minimum_master_nodes: 2               # n/2+1\nhttp.cors.enabled: true                             #\u5141\u8bb8head\u63d2\u4ef6\u8bbf\u95eees\nhttp.cors.allow-origin: "*"\nxpack:\n  ml.enabled: false\n  monitoring.enabled: false\n  security.enabled: false\n  watcher.enabled: false\n')),(0,t.yg)("p",null,"\u6570\u636e\u8282\u70b9"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},'cluster.name: "docker-cluster"               #\u96c6\u7fa4\u540d\uff0c\u540c\u4e00\u96c6\u7fa4\u5fc5\u987b\u76f8\u540c\nnode.name: 10.0.13.123                       #\u6307\u5b9a\u8282\u70b9\u4e3b\u673a\u540d\nnode.master: false                           #\u5141\u8bb8\u6210\u4e3a\u4e3b\u8282\u70b9\nnode.data: true                              #\u6570\u636e\u8282\u70b9\npath.data: /usr/share/elasticsearch/data                #\u6570\u636e\u5b58\u653e\u8def\u5f84\npath.logs: /usr/share/elasticsearch/logs                #\u65e5\u5fd7\u8def\u5f84\nbootstrap.memory_lock: false                            #\u5173\u95ed\u9501\u5b9a\u5185\u5b58\uff0c\u8bbe\u7f6e\u4e3atrue\u4f1a\u62a5\u9519\nnetwork.host: 0.0.0.0                                   #\u76d1\u542cip\nnetwork.publish_host: 10.0.13.123                       #\u96c6\u7fa4\u901a\u8bafip\nhttp.port: 9200                                         #http\u7aef\u53e3\ntransport.tcp.port: 9300\ncluster.initial_master_nodes: ["10.0.13.124:9300"]      #\u521d\u59cb\u4e3b\u7ed3\u70b9\u5217\u8868\ndiscovery.zen.ping.unicast.hosts: ["10.0.13.103:9300","10.0.13.123:9300","10.0.13.124:9300"]     #\u521d\u59cb\u4e3b\u673a\u5217\u8868\ndiscovery.zen.minimum_master_nodes: 2               # n/2+1\nhttp.cors.enabled: true                             #\u5141\u8bb8head\u63d2\u4ef6\u8bbf\u95eees\nhttp.cors.allow-origin: "*"\nxpack:\n  ml.enabled: false\n  monitoring.enabled: false\n  security.enabled: false\n  watcher.enabled: false\n')),(0,t.yg)("h2",{id:"\u5355\u673a\u90e8\u7f72"},"\u5355\u673a\u90e8\u7f72"),(0,t.yg)("p",null,"\u914d\u7f6e\u6587\u4ef6\u53c2\u8003"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},'# \u65b0\u5efa\u76ee\u5f55\nmkdir /home/southgisdata/elasticsearch/config\n# \u65b0\u5efa\u6587\u4ef6\nvi /home/southgisdata/elasticsearch/config/elasticsearch.yml\n# \u6587\u4ef6\u4e2d\u5199\u5165\nnetwork.host: 0.0.0.0\ncluster.name: "docker-cluster"\nhttp.cors.enabled: true\nhttp.cors.allow-origin: "*"\n#cluster.initial_master_nodes: ["node-1"]\nxpack:\n  ml.enabled: false\n  monitoring.enabled: false\n  security.enabled: false\n  watcher.enabled: false\n# \u6587\u4ef6\u76ee\u5f55\u8d4b\u6743\nchmod -R 777 /home/southgisdata/elasticsearch/config/elasticsearch.yml \n')),(0,t.yg)("p",null,"\u521b\u5efa\u6570\u636e\u76ee\u5f55"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"# \u65b0\u5efa\u6570\u636e\u76ee\u5f55\nmkdir /home/southgisdata/elasticsearch/data\n# \u6587\u4ef6\u76ee\u5f55\u8d4b\u6743\nchmod -R 777 /home/southgisdata/elasticsearch/data\n")),(0,t.yg)("p",null,"\u542f\u52a8-\u672a\u9a8c\u8bc1"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},'docker run -d --restart=always --name elasticsearch -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" -v /home/southgisdata/elasticsearch/config/elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml -v /home/southgisdata/elasticsearch/data:/usr/share/elasticsearch/data 172.16.51.238:1180/product/elasticsearch:7.4.1\n')))}h.isMDXComponent=!0}}]);