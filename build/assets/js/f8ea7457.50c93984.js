"use strict";(self.webpackChunkbookshell=self.webpackChunkbookshell||[]).push([[6256],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>k});var n=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var s=n.createContext({}),d=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},m=function(t){var e=d(t.components);return n.createElement(s.Provider,{value:e},t.children)},o="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,s=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),o=d(a),g=l,k=o["".concat(s,".").concat(g)]||o[g]||u[g]||r;return a?n.createElement(k,p(p({ref:e},m),{},{components:a})):n.createElement(k,p({ref:e},m))}));function k(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,p=new Array(r);p[0]=g;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i[o]="string"==typeof t?t:l,p[1]=i;for(var d=2;d<r;d++)p[d]=a[d];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},42259:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>p,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var n=a(87462),l=(a(67294),a(3905));const r={},p=void 0,i={unversionedId:"DevOps/ELK/ELK\u6d4b\u8bd5\u90e8\u7f72",id:"DevOps/ELK/ELK\u6d4b\u8bd5\u90e8\u7f72",title:"ELK\u6d4b\u8bd5\u90e8\u7f72",description:"1\u3001ES\u5355\u8282\u70b9\u5b89\u88c5",source:"@site/docs/DevOps/3-ELK/1-ELK\u6d4b\u8bd5\u90e8\u7f72.md",sourceDirName:"DevOps/3-ELK",slug:"/DevOps/ELK/ELK\u6d4b\u8bd5\u90e8\u7f72",permalink:"/docs/DevOps/ELK/ELK\u6d4b\u8bd5\u90e8\u7f72",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/3-ELK/1-ELK\u6d4b\u8bd5\u90e8\u7f72.md",tags:[],version:"current",lastUpdatedBy:"zhanglaiqiang",lastUpdatedAt:1695914390,formattedLastUpdatedAt:"2023\u5e749\u670828\u65e5",sidebarPosition:1,frontMatter:{},sidebar:"DevOpsElk",next:{title:"ELK\u65e5\u5fd7\u544a\u8b66",permalink:"/docs/DevOps/ELK/ELK\u65e5\u5fd7\u544a\u8b66"}},s={},d=[{value:"1\u3001ES\u5355\u8282\u70b9\u5b89\u88c5",id:"1es\u5355\u8282\u70b9\u5b89\u88c5",level:2},{value:"2\u3001Elsticalert \u544a\u8b66",id:"2elsticalert-\u544a\u8b66",level:2},{value:"2.1\u3001elsticalert\u624b\u52a8\u5b89\u88c5\u65b9\u5f0f",id:"21elsticalert\u624b\u52a8\u5b89\u88c5\u65b9\u5f0f",level:3},{value:"2.2\u3001\u901a\u8fc7\u5bb9\u5668\u90e8\u7f72\u65b9\u5f0f",id:"22\u901a\u8fc7\u5bb9\u5668\u90e8\u7f72\u65b9\u5f0f",level:3},{value:"3\u3001kibana\u5b89\u88c5",id:"3kibana\u5b89\u88c5",level:2},{value:"4\u3001Esheader",id:"4esheader",level:2},{value:"5\u3001filebeat\u5b89\u88c5",id:"5filebeat\u5b89\u88c5",level:2}],m={toc:d},o="wrapper";function u(t){let{components:e,...a}=t;return(0,l.kt)(o,(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"1es\u5355\u8282\u70b9\u5b89\u88c5"},"1\u3001ES\u5355\u8282\u70b9\u5b89\u88c5"),(0,l.kt)("p",null,"\u521d\u59cb\u5316\u914d\u7f6e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"echo 262144 > /proc/sys/vm/max_map_count\nsysctl -w vm.max_map_count=262144 \nsysctl -p\n")),(0,l.kt)("p",null,"\u521b\u5efa\u6301\u4e45\u76ee\u5f55"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir -p   /mydata/elasticsearch/config\nmkdir -p   /mydata/elasticsearch/data\nmkdir -p   /mydata/elasticsearch/plugins\nchmod 777 /mydata/elasticsearch/ -R\n")),(0,l.kt)("p",null,"\u4fee\u6539\u914d\u7f6e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'echo "http.host: 0.0.0.0" >> /mydata/elasticsearch/config/elasticsearch.yml\n')),(0,l.kt)("p",null,"\u670d\u52a1\u542f\u52a8"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'\ndocker run --name elasticsearch -p 9200:9200 -p 9300:9300   \\\n -e "discovery.type=single-node" -e ES_JAVA_OPTS="-Xms64m -Xmx128m"  \\\n -v /mydata/elasticsearch/config/:/usr/share/elasticsearch/config/  \\\n -v /mydata/elasticsearch/data:/usr/share/elasticsearch/data    \\\n -v /mydata/elasticsearch/plugins:/usr/share/elasticsearch/plugins -d elasticsearch:7.6.2  \n')),(0,l.kt)("h2",{id:"2elsticalert-\u544a\u8b66"},"2\u3001Elsticalert \u544a\u8b66"),(0,l.kt)("h3",{id:"21elsticalert\u624b\u52a8\u5b89\u88c5\u65b9\u5f0f"},"2.1\u3001elsticalert\u624b\u52a8\u5b89\u88c5\u65b9\u5f0f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"yum -y install wget openssl openssl-devel gcc gcc-c++\nyum -y install python3  git python3-devel\npip3 install --upgrade pip\nyum -y install python-pip python-devel\n\n\npip3 install elastalert\n\n2.2.3 config.yaml \u914d\u7f6e\u6587\u4ef6\n\n[root@110 elastalert-master]# cat config.yaml\n# \u7528\u6765\u52a0\u8f7drule\u7684\u76ee\u5f55\uff0c\u9ed8\u8ba4\u662fexample_rules\nrules_folder: rules\n# \u7528\u6765\u8bbe\u7f6e\u5b9a\u65f6\u5411elasticsearch\u53d1\u9001\u8bf7\u6c42\uff0c\u4e5f\u5c31\u662f\u544a\u8b66\u6267\u884c\u7684\u9891\u7387\nrun_every:\n  seconds: 15\n# \u7528\u6765\u8bbe\u7f6e\u8bf7\u6c42\u91cc\u65f6\u95f4\u5b57\u6bb5\u7684\u8303\u56f4\nbuffer_time:\n  seconds: 15\nes_host: 10.51.8.112\nes_port: 9200\nwriteback_index: elastalert_status\nwriteback_alias: elastalert_alerts\n# \u5931\u8d25\u91cd\u8bd5\u7684\u65f6\u95f4\u9650\u5236\nalert_time_limit:\n  days: 2\n")),(0,l.kt)("p",null,"rules\u89c4\u5219\u6587\u4ef6,rules\u4e2d\u53ef\u4ee5\u6dfb\u52a0\u591a\u4e2a\u89c4\u5219\u6587\u4ef6\uff0c\u4f46\u662f\u6bcf\u4e2a\u89c4\u5219"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'[root@110 elastalert-master]# cat rules/error_alert_rule.yaml \nes_host: 10.51.8.112\nes_port: 9200\nname: ErrorAlertRule_elk\ntype: frequency\nindex: nginx_access*\nnum_events: 1\ntimeframe:\n  minutes: 5\nfilter:\n- query_string:\n    query: "tags:error_alert"\nalert:\n- "elastalert_modules.dingtalk_alert.DingTalkAlerter"\n- "email"\nemail:\n- "409003604@qq.com"\nsmtp_host: smtp.qq.com\nsmtp_port: 25\nsmtp_auth_file: /opt/elastalert-master/email_auth.yaml\nfrom_addr: 409003604@qq.com\ndingtalk_webhook: "https://oapi.dingtalk.com/robot/send?access_token=1fa27134e7f6cd127f70ec34093a86cc4b833f421743581c561d8c3245ca25f7"\ndingtalk_msgtype: "text"\nalert_text: "\n\u3010\u544a\u8b66\u9879\u3011 Error_keywords_alert_elk \\n\n\u3010\u544a\u8b66\u65f6\u95f4\u3011 {} \\n\n\u3010message\u3011 \\n\n{}\\n\n\u3010\u65e5\u5fd7\u8def\u52b2\u3011 {} \\n\n\u3010\u670d\u52a1\u5668\u3011 {}\n"\nalert_text_type: alert_text_only\nalert_text_args:\n- "@timestamp"\n- message\n- log.file.path\n- agent.hostname\nmatch_enhancements:\n- "elastalert.enhancements.TimeEnhancement"\ndingtalk_isAtAll: true\n\ndocker push  zhanglaiqiang/elastalert:v1.0\n')),(0,l.kt)("h3",{id:"22\u901a\u8fc7\u5bb9\u5668\u90e8\u7f72\u65b9\u5f0f"},"2.2\u3001\u901a\u8fc7\u5bb9\u5668\u90e8\u7f72\u65b9\u5f0f"),(0,l.kt)("p",null,"\u521b\u5efadockerfiele\u6587\u4ef6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'[root@110 elk]# cat Dockerfile  \nFROM python:3.6.15\nADD  elastalert-master.tar.gz  /opt/  \nRUN  cd  /opt/elastalert-master && \\\n     python3 -m pip install --upgrade pip && \\\n     pip install "setuptools>=11.3"  -i https://mirrors.aliyun.com/pypi/simple/  && \\\n     pip install "setuptools_rust" -i https://mirrors.aliyun.com/pypi/simple/  && \\\n     pip3 install "elasticsearch>=7.0.0,<8.0.0"  &&\\\n     pip3 install -r requirements.txt -i https://mirrors.aliyun.com/pypi/simple/ && \\\n     python3 setup.py install && \\\n     ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && echo "Asia/Shanghai" > /etc/timezone\nWORKDIR /opt/elastalert-master     \nCMD ["python", "-m", "elastalert.elastalert","--config", "config.yaml"]\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"docker pull  zhanglaiqiang/elastalert:v1.0\n#\u8fd9\u4e2a\u955c\u50cf\u5df2\u7ecf\u5305\u542b\u4e86\u6240\u6709\u7684\u914d\u7f6e\u6587\u4ef6\n")),(0,l.kt)("p",null,"\u518d\u672c\u5730\u90e8\u7f72\u7684\u65b9\u5f0f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir  /data/project/\ndocker run --rm  --name elastalert-to-dingding  zhanglaiqiang/elastalert:v1.0\ncd /data/project/\ndocker cp elastalert-to-dingding:/opt/elastalert-master  .\n#\u5220\u9664elastalert-to-dingding ctrl -C\ndocker run -d  -v ./elastalert-master:/opt/elastalert-master --name elastalert-to-dingding  registry.cn-hangzhou.aliyuncs.com/zlq_registry/elk-dingtalk:v1.2\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5982\u4e0b\u914d\u7f6e\u6ca1\u4f7f\u7528\uff0c\u53ea\u4f5c\u4ecb\u7ecd "),"web"),(0,l.kt)("h2",{id:"3kibana\u5b89\u88c5"},"3\u3001kibana\u5b89\u88c5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'\u7248\u672ckibana-7.6.2\n\u914d\u7f6e\u6587\u4ef6\n[root@demo112 kibana-7.6.2-linux-x86_64]# cat config/kibana.yml | grep -Ev \'#|^$\'\nserver.port: 5601\nserver.host: "10.51.8.112"\nelasticsearch.hosts: ["http://10.51.8.112:9200"]\n\n\u542f\u52a8\n[root@demo112 kibana-7.6.2-linux-x86_64]# ./bin/kibana --allow-root\n\u8bbf\u95ee\u5730\u5740: x.x.x.x:5601\n')),(0,l.kt)("h2",{id:"4esheader"},"4\u3001Esheader"),(0,l.kt)("p",null,"esheader download\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/qax-os/ElasticHD/releases/download/1.4/elasticHD_linux_amd64.zip"},"https://github.com/qax-os/ElasticHD/releases/download/1.4/elasticHD_linux_amd64.zip")),(0,l.kt)("p",null,"yum install xdg-utils\nexec ./ElasticHD -p 0.0.0.0:9800"),(0,l.kt)("p",null,"\u6d4b\u8bd5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X POST "http://elastic:passwd@127.0.0.1:9200/test-alert/test" -H \'Content-Type: application/json\' -d \'{"@timestamp": "\'$(date --iso-8601=seconds)\'", "field": "value"}\'\n\n\n\n{"_index":"test-alert","_type":"test","_id":"9y2NJYoB8Mxxn1vtZDO2","_version":1,"result":"created","_shards":{"total":2,"successful":1,"failed":0},"_seq_no":0,"_primary_term":1}[root@demo112 elastalert]#\n')),(0,l.kt)("p",null,"es\u8ddf\u5176\u4ed6\u7ec4\u4ef6\u7248\u672c\u5bf9\u5e94\n",(0,l.kt)("a",{parentName:"p",href:"https://blog.csdn.net/vtopqx/article/details/105410814"},"https://blog.csdn.net/vtopqx/article/details/105410814")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Elasticsearch"),(0,l.kt)("th",{parentName:"tr",align:null},"Kibana"),(0,l.kt)("th",{parentName:"tr",align:null},"X-Pack"),(0,l.kt)("th",{parentName:"tr",align:null},"Beats^*"),(0,l.kt)("th",{parentName:"tr",align:null},"Logstash^*"),(0,l.kt)("th",{parentName:"tr",align:null},"ES-Hadoop  (jar)*"),(0,l.kt)("th",{parentName:"tr",align:null},"APM Server"),(0,l.kt)("th",{parentName:"tr",align:null},"App Search"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5.0.x"),(0,l.kt)("td",{parentName:"tr",align:null},"5.0.x"),(0,l.kt)("td",{parentName:"tr",align:null},"5.0.x"),(0,l.kt)("td",{parentName:"tr",align:null},"1.3.x-5.6.x"),(0,l.kt)("td",{parentName:"tr",align:null},"2.4.x-5.6.x"),(0,l.kt)("td",{parentName:"tr",align:null},"5.0.x-5.6.x"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5.1.x"),(0,l.kt)("td",{parentName:"tr",align:null},"5.1.x"),(0,l.kt)("td",{parentName:"tr",align:null},"5.1.x"),(0,l.kt)("td",{parentName:"tr",align:null},"1.3.x-5.6.x"),(0,l.kt)("td",{parentName:"tr",align:null},"2.4.x-5.6.x"),(0,l.kt)("td",{parentName:"tr",align:null},"5.0.x-5.6.x"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5.2.x"),(0,l.kt)("td",{parentName:"tr",align:null},"5.2.x"),(0,l.kt)("td",{parentName:"tr",align:null},"5.2.x"),(0,l.kt)("td",{parentName:"tr",align:null},"1.3.x-5.6.x"),(0,l.kt)("td",{parentName:"tr",align:null},"2.4.x-5.6.x"),(0,l.kt)("td",{parentName:"tr",align:null},"5.0.x-5.6.x"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5.3.x"),(0,l.kt)("td",{parentName:"tr",align:null},"5.3.x"),(0,l.kt)("td",{parentName:"tr",align:null},"5.3.x"),(0,l.kt)("td",{parentName:"tr",align:null},"1.3.x-5.6.x"),(0,l.kt)("td",{parentName:"tr",align:null},"2.4.x-5.6.x"),(0,l.kt)("td",{parentName:"tr",align:null},"5.0.x-5.6.x"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5.4.x"),(0,l.kt)("td",{parentName:"tr",align:null},"5.4.x"),(0,l.kt)("td",{parentName:"tr",align:null},"5.4.x"),(0,l.kt)("td",{parentName:"tr",align:null},"1.3.x-5.6.x"),(0,l.kt)("td",{parentName:"tr",align:null},"2.4.x-5.6.x"),(0,l.kt)("td",{parentName:"tr",align:null},"5.0.x-5.6.x"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5.5.x"),(0,l.kt)("td",{parentName:"tr",align:null},"5.5.x"),(0,l.kt)("td",{parentName:"tr",align:null},"5.5.x"),(0,l.kt)("td",{parentName:"tr",align:null},"1.3.x-5.6.x"),(0,l.kt)("td",{parentName:"tr",align:null},"2.4.x-5.6.x"),(0,l.kt)("td",{parentName:"tr",align:null},"5.0.x-5.6.x"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5.6.x"),(0,l.kt)("td",{parentName:"tr",align:null},"5.6.x"),(0,l.kt)("td",{parentName:"tr",align:null},"5.6.x"),(0,l.kt)("td",{parentName:"tr",align:null},"1.3.x-6.0.x"),(0,l.kt)("td",{parentName:"tr",align:null},"2.4.x-6.0.x"),(0,l.kt)("td",{parentName:"tr",align:null},"5.0.x-6.0.x"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"6.0.x"),(0,l.kt)("td",{parentName:"tr",align:null},"6.0.x"),(0,l.kt)("td",{parentName:"tr",align:null},"6.0.x"),(0,l.kt)("td",{parentName:"tr",align:null},"5.6.x-6.8.x"),(0,l.kt)("td",{parentName:"tr",align:null},"5.6.x-6.8.x"),(0,l.kt)("td",{parentName:"tr",align:null},"6.0.x-6.8.x"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"6.1.x"),(0,l.kt)("td",{parentName:"tr",align:null},"6.1.x"),(0,l.kt)("td",{parentName:"tr",align:null},"6.1.x"),(0,l.kt)("td",{parentName:"tr",align:null},"5.6.x-6.8.x"),(0,l.kt)("td",{parentName:"tr",align:null},"5.6.x-6.8.x"),(0,l.kt)("td",{parentName:"tr",align:null},"6.0.x-6.8.x"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"6.2.x"),(0,l.kt)("td",{parentName:"tr",align:null},"6.2.x"),(0,l.kt)("td",{parentName:"tr",align:null},"6.2.x"),(0,l.kt)("td",{parentName:"tr",align:null},"5.6.x-6.8.x"),(0,l.kt)("td",{parentName:"tr",align:null},"5.6.x-6.8.x"),(0,l.kt)("td",{parentName:"tr",align:null},"6.0.x-6.8.x"),(0,l.kt)("td",{parentName:"tr",align:null},"6.2.x-6.8.x"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"6.3.x"),(0,l.kt)("td",{parentName:"tr",align:null},"6.3.x"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A**"),(0,l.kt)("td",{parentName:"tr",align:null},"5.6.x-6.8.x"),(0,l.kt)("td",{parentName:"tr",align:null},"5.6.x-6.8.x"),(0,l.kt)("td",{parentName:"tr",align:null},"6.0.x-6.8.x"),(0,l.kt)("td",{parentName:"tr",align:null},"6.2.x-6.8.x"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"6.4.x"),(0,l.kt)("td",{parentName:"tr",align:null},"6.4.x"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A**"),(0,l.kt)("td",{parentName:"tr",align:null},"5.6.x-6.8.x"),(0,l.kt)("td",{parentName:"tr",align:null},"5.6.x-6.8.x"),(0,l.kt)("td",{parentName:"tr",align:null},"6.0.x-6.8.x"),(0,l.kt)("td",{parentName:"tr",align:null},"6.2.x-6.8.x"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"6.5.x"),(0,l.kt)("td",{parentName:"tr",align:null},"6.5.x"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A**"),(0,l.kt)("td",{parentName:"tr",align:null},"5.6.x-6.8.x"),(0,l.kt)("td",{parentName:"tr",align:null},"5.6.x-6.8.x"),(0,l.kt)("td",{parentName:"tr",align:null},"6.0.x-6.8.x"),(0,l.kt)("td",{parentName:"tr",align:null},"6.2.x-6.8.x"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"6.6.x"),(0,l.kt)("td",{parentName:"tr",align:null},"6.6.x"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A**"),(0,l.kt)("td",{parentName:"tr",align:null},"5.6.x-6.8.x"),(0,l.kt)("td",{parentName:"tr",align:null},"5.6.x-6.8.x"),(0,l.kt)("td",{parentName:"tr",align:null},"6.0.x-6.8.x"),(0,l.kt)("td",{parentName:"tr",align:null},"6.2.x-6.8.x"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"6.7.x"),(0,l.kt)("td",{parentName:"tr",align:null},"6.7.x"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A**"),(0,l.kt)("td",{parentName:"tr",align:null},"5.6.x-6.8.x"),(0,l.kt)("td",{parentName:"tr",align:null},"5.6.x-6.8.x"),(0,l.kt)("td",{parentName:"tr",align:null},"6.0.x-6.8.x"),(0,l.kt)("td",{parentName:"tr",align:null},"6.2.x-6.8.x"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"6.8.x"),(0,l.kt)("td",{parentName:"tr",align:null},"6.8.x"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A**"),(0,l.kt)("td",{parentName:"tr",align:null},"5.6.x-6.8.x"),(0,l.kt)("td",{parentName:"tr",align:null},"5.6.x-6.8.x"),(0,l.kt)("td",{parentName:"tr",align:null},"6.0.x-6.8.x"),(0,l.kt)("td",{parentName:"tr",align:null},"6.2.x-6.8.x"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"7.0.x"),(0,l.kt)("td",{parentName:"tr",align:null},"7.0.x"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A**"),(0,l.kt)("td",{parentName:"tr",align:null},"6.8.x-7.6.x"),(0,l.kt)("td",{parentName:"tr",align:null},"6.8.x-7.6.x"),(0,l.kt)("td",{parentName:"tr",align:null},"6.8.x-7.6.x"),(0,l.kt)("td",{parentName:"tr",align:null},"7.0.x-7.6.x***"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"7.1.x"),(0,l.kt)("td",{parentName:"tr",align:null},"7.1.x"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A**"),(0,l.kt)("td",{parentName:"tr",align:null},"6.8.x-7.6.x"),(0,l.kt)("td",{parentName:"tr",align:null},"6.8.x-7.6.x"),(0,l.kt)("td",{parentName:"tr",align:null},"6.8.x-7.6.x"),(0,l.kt)("td",{parentName:"tr",align:null},"7.0.x-7.6.x***"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"7.2.x"),(0,l.kt)("td",{parentName:"tr",align:null},"7.2.x"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A**"),(0,l.kt)("td",{parentName:"tr",align:null},"6.8.x-7.6.x"),(0,l.kt)("td",{parentName:"tr",align:null},"6.8.x-7.6.x"),(0,l.kt)("td",{parentName:"tr",align:null},"6.8.x-7.6.x"),(0,l.kt)("td",{parentName:"tr",align:null},"7.0.x-7.6.x***"),(0,l.kt)("td",{parentName:"tr",align:null},"7.2.x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"7.3.x"),(0,l.kt)("td",{parentName:"tr",align:null},"7.3.x"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A**"),(0,l.kt)("td",{parentName:"tr",align:null},"6.8.x-7.6.x"),(0,l.kt)("td",{parentName:"tr",align:null},"6.8.x-7.6.x"),(0,l.kt)("td",{parentName:"tr",align:null},"6.8.x-7.6.x"),(0,l.kt)("td",{parentName:"tr",align:null},"7.0.x-7.6.x***"),(0,l.kt)("td",{parentName:"tr",align:null},"7.3.x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"7.4.x"),(0,l.kt)("td",{parentName:"tr",align:null},"7.4.x"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A**"),(0,l.kt)("td",{parentName:"tr",align:null},"6.8.x-7.6.x"),(0,l.kt)("td",{parentName:"tr",align:null},"6.8.x-7.6.x"),(0,l.kt)("td",{parentName:"tr",align:null},"6.8.x-7.6.x"),(0,l.kt)("td",{parentName:"tr",align:null},"7.0.x-7.6.x***"),(0,l.kt)("td",{parentName:"tr",align:null},"7.4.x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"7.5.x"),(0,l.kt)("td",{parentName:"tr",align:null},"7.5.x"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A**"),(0,l.kt)("td",{parentName:"tr",align:null},"6.8.x-7.6.x"),(0,l.kt)("td",{parentName:"tr",align:null},"6.8.x-7.6.x"),(0,l.kt)("td",{parentName:"tr",align:null},"6.8.x-7.6.x"),(0,l.kt)("td",{parentName:"tr",align:null},"7.0.x-7.6.x***"),(0,l.kt)("td",{parentName:"tr",align:null},"7.5.x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"7.6.x"),(0,l.kt)("td",{parentName:"tr",align:null},"7.6.x"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A**"),(0,l.kt)("td",{parentName:"tr",align:null},"6.8.x-7.6.x"),(0,l.kt)("td",{parentName:"tr",align:null},"6.8.x-7.6.x"),(0,l.kt)("td",{parentName:"tr",align:null},"6.8.x-7.6.x"),(0,l.kt)("td",{parentName:"tr",align:null},"7.0.x-7.6.x***"),(0,l.kt)("td",{parentName:"tr",align:null},"7.6.x")))),(0,l.kt)("p",null,"\u53c2\u8003\u6587\u6863\uff1a\n",(0,l.kt)("a",{parentName:"p",href:"https://blog.csdn.net/qq_49296785/article/details/108657758"},"https://blog.csdn.net/qq_49296785/article/details/108657758")),(0,l.kt)("p",null,"nginx\u65e5\u5fd7\u6536\u96c6\u6574\u7406\n",(0,l.kt)("a",{parentName:"p",href:"https://www.cpweb.top/1233"},"https://www.cpweb.top/1233")),(0,l.kt)("p",null,"logstash    \u914d\u7f6e\u6587\u4ef6\u68c0\u67e5\nlogstash     -f      xxx.conf     -t"),(0,l.kt)("p",null,"set from=",(0,l.kt)("a",{parentName:"p",href:"mailto:409003604@qq.com"},"409003604@qq.com"),"\nset smtp=smtp.qq.com\nset smtp-auth-user=",(0,l.kt)("a",{parentName:"p",href:"mailto:409003604@qq.com"},"409003604@qq.com"),"\nset smtp-auth-password=xxxxxxxxxxxxxxxx  #\u6388\u6743\u7801\nset smtp-auth=login\nset ssl-verify=ignore "),(0,l.kt)("p",null,"\u90ae\u7bb1\u544a\u8b66\u914d\u7f6e\nelastalert"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'\u5168\u5c40\u542f\u52a8-\u89c4\u5219\u6587\u4ef6\u90fd\u5728rules\u76ee\u5f55\u4e0b\n/usr/bin/python3 -m elastalert.elastalert --verbose --config config.yaml\nelastalert --config /opt/soft/elastalert/config.yaml --rule /opt/soft/elastalert/example_rules/nginx_frequency.yaml --verbose\n\nname: prod\u5b58\u5728"ERROR","Exception"\u5173\u952e\u5b57\u65e5\u5fd7,\u8bf7\u767b\u9646kibana\u53ca\u65f6\u67e5\u770b,\u5730\u5740\uff1ahttp://152.32.142.164:5601/\ntype: frequency\nindex: erp-cod-prod_zooqeer-service-log*\n#\u5728\u4e00\u4e2a\u65f6\u95f4\u8303\u56f4\u5185\u51fa\u73b0\u8fd9\u4e48\u591a\u4e0e\u67e5\u8be2\u5339\u914d\u7684\u6587\u6863\u65f6\u53d1\u51fa\u8b66\u62a5\nnum_events: 1\n#5\u5206\u949f\u53d1\u4e00\u6b21\ntimeframe:\n    minutes: 5\nfilter:\n\n- query:\n  query_string:\n    query: "ERROR"\n  query_string:\n    query: "Exception"\n#\u53ea\u9700\u8981\u7684\u5b57\u6bb5 https://elastalert.readthedocs.io/en/latest/ruletypes.html#include\ninclude: ["method", "url_path", "url_args", "status", "request_time"]\nalert:\n  "elastalert_modules.dingtalk_alert.DingTalkAlerter"\n\n#dingtalk_webhook: "https://oapi.dingtalk.com/robot/send?access_token=11dd40a2482d889c45a2c16ee3cefea5c1fa7368f8841fdf98bf95d571c98dc9"\n\ndingtalk_webhook: "https://oapi.dingtalk.com/robot/send?access_token=3c7a159c14cf39f0b8e9bd26806d3a96831e4b843c2d5123ccc5eeb232520f11"\ndingtalk_msgtype: "text"\n#\u9489\u9489\u667a\u80fd\u673a\u5668\u4eba\u7684\u5173\u952e\u5b57\ncontent: elk    \n')),(0,l.kt)("h2",{id:"5filebeat\u5b89\u88c5"},"5\u3001filebeat\u5b89\u88c5"),(0,l.kt)("p",null,"  \u4ee5\u4e0a\u7684\u914d\u7f6e\u90fd\u662f\u57fa\u4e8elogstash\u6765\u6536\u96c6\u65e5\u5fd7\uff0c\u63a5\u4e0b\u6765\uff0c\u8c03\u6574\u4e3a\u4f7f\u7528filebeat\u6765\u6536\u96c6\uff0c\u53d1\u9001\u7ed9logstash\uff0c\u7136\u540e\u901a\u8fc7logstash\u518d\u53d1\u9001\u7ed9ES "),(0,l.kt)("p",null,"\u4e0b\u8f7dfilebeat \u548ces \u60f3\u5bf9\u5e94\u7684\u7248\u672c"),(0,l.kt)("p",null,"\u4ece\u5b98\u7f51\u4e0b\u8f7d\u5bf9\u5e94\u7684\u7248\u672c7.6.2"),(0,l.kt)("p",null,"  \u4e0b\u8f7d\u5730\u5740\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://www.elastic.co/cn/downloads/past-releases#filebeat"},"https://www.elastic.co/cn/downloads/past-releases#filebeat")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"[root@demo112 filebeat]# ls -l\ntotal 76696\ndrwxr-x---  3 root root       60 Aug 29 17:24 data\n-rw-r--r--  1 root root   500235 Mar 26  2020 fields.yml\n-rwxr-xr-x  1 root root 77562560 Mar 26  2020 filebeat\n-rw-r--r--  1 root root    89359 Mar 26  2020 filebeat.reference.yml\n-rw-------  1 root root      913 Aug 29 17:04 filebeat.yml\n-rw-------  1 root root     8341 Aug 29 16:59 filebeat.yml.bak\ndrwxr-xr-x  3 root root       15 Mar 26  2020 kibana\n-rw-r--r--  1 root root    13675 Mar 26  2020 LICENSE.txt\ndrwxr-xr-x 39 root root     4096 Mar 26  2020 module\ndrwxr-xr-x  2 root root     4096 Mar 26  2020 modules.d\n-rw-r--r--  1 root root   328580 Mar 26  2020 NOTICE.txt\n-rw-r--r--  1 root root      802 Mar 26  2020 README.md\n\n")),(0,l.kt)("p",null,"\u4fee\u6539\u914d\u7f6e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"[root@demo112 filebeat]# cat filebeat.yml\nfilebeat.inputs:\n- type: log\n  enabled: true\n  paths:\n  - /var/log/nginx/*.log\n  multiline:\n    pattern: (^\\|[0-9]{4}-[0-9]{2}-[0-9]{2} |^[0-9]{2}\\:[0-9]{2}\\:[0-9]{2}\\.[0-9]+ [A-Z]+|^\\|TID)\n    negate: true\n    match: after\n  exclude_files: ['nacos.*.log','^info.log$','^error.log$']\n  exclude_lines: ['api/ping\\|', 'api/health\\|']\n  scan_frequency: 30s\n  ignore_older: 24h\n  close_inactive: 3h\n  close_removed: true\n  clean_inactive: 48h\n  clean_removed: true\n\n\nfilebeat.config.modules:\n  path: ${path.config}/modules.d/*.yml\n  reload.enabled: false\nsetup.template.settings:\n  index.number_of_shards: 1\n\noutput.logstash:\n  hosts: [\"10.51.8.112:5044\"]\n\nprocessors:\n  - add_fields:\n      target: agent\n      fields:\n        server_name: \"demo112-prod\"\n  - add_fields:\n      target: agent \n      fields:\n        env_name: prod\n  - drop_fields:\n      fields: [\"agent.id\",\"agent.ephemeral_id\"]\n        \nmax_procs: 1 \n")),(0,l.kt)("p",null,"\u542f\u52a8\u65b9\u5f0f"),(0,l.kt)("p",null,"filebeat -e -c myfilebeat.yml"),(0,l.kt)("p",null,"\u4fee\u6539logstash\u7684\u914d\u7f6e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'[root@demo112 config]# cat nginx.conf\ninput {\n  beats {\n    port => 5044\n  }\n}\n\nfilter {\n#  grok {\n#     match => { "message" => "\\|%{TIMESTAMP_ISO8601:timestamp}\\|%{WORD:loglevel}\\|%{WORD:application}\\|%{GREEDYDATA:error_message}" }\n#  } \n  grok {\n    match => {\n      "message" => [\n       "^\\|%{TIMESTAMP_ISO8601:logdate}\\|%{LOGLEVEL:log_level}\\s?\\|%{USERNAME:app_name}\\|%{URIPATH:request_uri}\\|%{URIPROTO:http_method}\\|%{BASE16NUM:request_id}\\|%{DATA:request_app_name}\\|%{GREEDYDATA:ms_describe}"\n      ]\n    }\n    }\n   ##gateway\u7f51\u5173\u544a\u8b66\u5904\u7406\n  if [app_name] == "gateway-next-prod" {  \n\n          if [message] =~ "ERROR" and [message] !~ /(405|\u4ea7\u54c1\u4e0d\u5728\u670d\u52a1\u671f\u5185|\u5e94\u7528\u4fe1\u606f\u4e0d\u5b58\u5728| \\n\n                                           \u5237\u65b0\u7528\u6237\u7684\u70ed\u91cf\u6d88\u8017\u4fe1\u606f \u8fd0\u8425\u6d3b\u52a8\u7684\u5065\u6b65\u8d70 \u5931\u8d25| \\n\n                                           health-cloud-yxtx-web)/ {\n            mutate {\n                    add_tag => ["error_alert"]\n        }\n       }\n\n  }\n}\n\n\noutput {\n  elasticsearch {\n    hosts => ["http://10.51.8.112:9200"]\n    index => "nginx_access-%{+YYYY.MM.dd}"\n  }\n  stdout { codec => rubydebug }\n}\n')),(0,l.kt)("p",null,"\u6ce8\u610f\uff1a "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},' "^\\|%{TIMESTAMP_ISO8601:logdate}\\|%{LOGLEVEL:log_level}\\s?\\|%{USERNAME:app_name}\\|%{URIPATH:request_uri}\\|%{URIPROTO:http_method}\\|%{BASE16NUM:request_id}\\|%{DATA:request_app_name}\\|%{GREEDYDATA:ms_describe}"\n')),(0,l.kt)("p",null,"\u8fd9\u90e8\u5206\u5185\u5bb9\u662f\u5339\u914d\u65e5\u5fd7\u683c\u5f0f, \u5176\u4e2d%{DATA:request_app_name}\u7528\u6765\u53ef\u4ee5\u5339\u914d\u7a7a\u683c\u5b57\u7b26\uff0c%{GREEDYDATA:ms_describe}\u7528\u6765\u914d\u7f6e\u5269\u4f59\u6240\u6709\u7684\u65e5\u5fd7\u5185\u5bb9\u3002"),(0,l.kt)("p",null,"\u6d4b\u8bd5\u65e5\u5fd7\u683c\u5f0f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'[root@demo112 nginx]# cat test.log\n|2023-08-29 19:04:31.550|ERROR |gateway-next-prod|/food-match03/meal/v3/api/recipes/detail|POST|338bdfaea1fe408992c1421a888ef391|606ffc2e837fee6eca5c1ed0|\u63a5\u53e3\u8c03\u7528\u8bb0\u5f55 mq \u6d88\u606f\u53d1\u9001\uff1a{"appId":"606ffc2e837fee6eca5c1ed0","bizType":"020501","developerId":"606ffc2e837fee6eca5c1ed1","interfaceCode":"020501","interfaceUrl":"/food-match/meal/v3/api/recipes/detail?bizType=020501","invokeDate":"2023-08-24","invokeStatus":"1","invokeTime":"2023-08-24 16:39:31","sn":"338bdfaea1fe408992c142","timeLength":147}|\n')),(0,l.kt)("p",null,"\u544a\u8b66\u4f18\u5316\n",(0,l.kt)("a",{parentName:"p",href:"https://blog.csdn.net/lihaipeng0417/article/details/118340478"},"https://blog.csdn.net/lihaipeng0417/article/details/118340478")))}u.isMDXComponent=!0}}]);