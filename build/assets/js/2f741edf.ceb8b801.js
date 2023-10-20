"use strict";(self.webpackChunkbookshell=self.webpackChunkbookshell||[]).push([[9817],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>b});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=a.createContext({}),c=function(e){var r=a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},d=function(e){var r=c(e.components);return a.createElement(p.Provider,{value:r},e.children)},i="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),i=c(t),m=n,b=i["".concat(p,".").concat(m)]||i[m]||u[m]||o;return t?a.createElement(b,l(l({ref:r},d),{},{components:t})):a.createElement(b,l({ref:r},d))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,l=new Array(o);l[0]=m;var s={};for(var p in r)hasOwnProperty.call(r,p)&&(s[p]=r[p]);s.originalType=e,s[i]="string"==typeof e?e:n,l[1]=s;for(var c=2;c<o;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},76654:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=t(87462),n=(t(67294),t(3905));const o={},l=void 0,s={unversionedId:"Sre/\u4e2d\u95f4\u4ef6/Harbor",id:"Sre/\u4e2d\u95f4\u4ef6/Harbor",title:"Harbor",description:"1\u3001Harbor\u7684\u8fc1\u79fb\u548c\u7ef4\u62a4",source:"@site/docs/Sre/2-\u4e2d\u95f4\u4ef6/1.Harbor.md",sourceDirName:"Sre/2-\u4e2d\u95f4\u4ef6",slug:"/Sre/\u4e2d\u95f4\u4ef6/Harbor",permalink:"/docs/Sre/\u4e2d\u95f4\u4ef6/Harbor",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Sre/2-\u4e2d\u95f4\u4ef6/1.Harbor.md",tags:[],version:"current",lastUpdatedBy:"zhanglaiqiang",lastUpdatedAt:1697217709,formattedLastUpdatedAt:"2023\u5e7410\u670813\u65e5",sidebarPosition:1,frontMatter:{},sidebar:"SreMiddleSoft",next:{title:"Elasticsearch",permalink:"/docs/Sre/\u4e2d\u95f4\u4ef6/Elasticsearch"}},p={},c=[{value:"1\u3001Harbor\u7684\u8fc1\u79fb\u548c\u7ef4\u62a4",id:"1harbor\u7684\u8fc1\u79fb\u548c\u7ef4\u62a4",level:2},{value:"1. \u8fc1\u79fb\u8001\u6570\u636e(registry+database)",id:"1-\u8fc1\u79fb\u8001\u6570\u636eregistrydatabase",level:3},{value:"2. \u91cd\u65b0\u90e8\u7f72\u4e00\u5957\u65b0Harbor\u73af\u5883",id:"2-\u91cd\u65b0\u90e8\u7f72\u4e00\u5957\u65b0harbor\u73af\u5883",level:3},{value:"3. \u8fc1\u79fbpg\u6570\u636e",id:"3-\u8fc1\u79fbpg\u6570\u636e",level:3},{value:"4. \u91cd\u542f\u6240\u6709\u670d\u52a1",id:"4-\u91cd\u542f\u6240\u6709\u670d\u52a1",level:3},{value:"5. \u6ce8\u610f\u4e8b\u9879",id:"5-\u6ce8\u610f\u4e8b\u9879",level:3},{value:"2\u3001Nexus\u95ee\u9898",id:"2nexus\u95ee\u9898",level:2}],d={toc:c},i="wrapper";function u(e){let{components:r,...o}=e;return(0,n.kt)(i,(0,a.Z)({},d,o,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"1harbor\u7684\u8fc1\u79fb\u548c\u7ef4\u62a4"},"1\u3001Harbor\u7684\u8fc1\u79fb\u548c\u7ef4\u62a4"),(0,n.kt)("p",null,"\u73af\u5883\u8bf4\u660e\uff1a\n\u56e0\u4e3a\u4e4b\u524d\u7684harbor\u670d\u52a1\u6302\u4e86\uff0c \u6570\u636e\u76ee\u5f55\u5728/data/\u4e0b\uff0c \u7136\u540e\u6570\u636e\u662f\u5b58\u5728\u7684\uff0c\u540e\u6765\u90e8\u7f72\u65b0\u73af\u5883\u4e4b\u540e\uff0c\u5c06\u6570\u636e\u8fc1\u79fb\u8fc7\u53bb\u4e4b\u540e\uff0c\u670d\u52a1\u542f\u52a8\u5404\u79cd\u95ee\u9898\uff0c\u5f88\u591a\u60c5\u51b5\u4e0b\u5c31\u662fpg\u6570\u636e\u5e93\u7684\u95ee\u9898\u4ee5\u53ca\u6743\u9650\u95ee\u9898\uff0c\u6240\u4ee5\uff0c\u8e29\u4e86\u5f88\u591a\u5751\uff0c\u73b0\u5728\u628a\u4e00\u79cd\u6700\u6709\u6548\u7684\u65b9\u5f0f\u4ecb\u7ecd\u4e0b\u3002"),(0,n.kt)("h3",{id:"1-\u8fc1\u79fb\u8001\u6570\u636eregistrydatabase"},"1. \u8fc1\u79fb\u8001\u6570\u636e(registry+database)"),(0,n.kt)("p",null,"1\u3001\u5bfc\u51fadatabase\n\u5c31\u662f\u8fc1\u79fb\u6570\u636e\u5e93\uff0c\u8fd9\u91cc\u8fc1\u79fb\u65b9\u5f0f\u5c31\u662f\uff0c\u5148\u4f7f\u7528docker\u90e8\u7f72\u4e00\u4e2a\u8ddf\u8001\u7248\u672c\u4e00\u81f4\u7684postgresql\uff0c\u7136\u540e\u628a\u6570\u636e\u6302\u5230\u6570\u636e\u5e93\u4e2d\n\u7136\u540e\u5c31\u662f\u5bfc\u51fa\u6570\u636e  "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"     \u4f7f\u7528docker\u90e8\u7f72\u4e34\u65f6\u8001\u7248\u672c\u7684postgresql\n     mkdir  /postgres  #\u5c06\u6570\u636e\u540c\u6b65\u5230\u6b64\u76ee\u5f55 \u4f7f\u7528rsync\n     docker run -d \\\n    --name postgres \\\n    -p 15432:5432 \\\n    -e POSTGRES_PASSWORD=123456.Com \\\n    -v ./postgres:/var/lib/postgresql/data \\\n    postgres:13.10\n     docker exec -it postgres bash  \n     pg_dumpall -U postgres > /tmp/all.sql\n     docker cp   postgres:/tmp/all.sql  .\n")),(0,n.kt)("p",null,"2\u3001 \u5907\u4efdregistry\n\u628a\u8fd9\u4e2a\u76ee\u5f55\u4e0b\u7684\u6587\u4ef6\u4f7f\u7528rsync\u8fc1\u79fb\u5230 \u65b0\u7248\u672c\u7684\u5bf9\u5e94\u76ee\u5f55\n\u7136\u540e\u6dfb\u52a0\u6743\u9650 "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"   chmod -R 777 v2\n")),(0,n.kt)("h3",{id:"2-\u91cd\u65b0\u90e8\u7f72\u4e00\u5957\u65b0harbor\u73af\u5883"},"2. \u91cd\u65b0\u90e8\u7f72\u4e00\u5957\u65b0Harbor\u73af\u5883"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"\u6ce8\u610f\u4fee\u6539harbor.yml\u4e2d\u7684\u8bbf\u95eeharbor\u8bbf\u95ee\u7684\u57df\u540d\u6216\u8005ip \n\u6ce8\u610f\u4fee\u6539\u7aef\u53e3\u53f7\uff0c\u9ed8\u8ba4\u4e3a80\n\u6ce8\u610f\u4fee\u6539\u6570\u636e\u6301\u4e45\u5316\u76ee\u5f55\uff0c\u8981\u653e\u5728\u54ea\u4e2a\u4f4d\u7f6e\n")),(0,n.kt)("h3",{id:"3-\u8fc1\u79fbpg\u6570\u636e"},"3. \u8fc1\u79fbpg\u6570\u636e"),(0,n.kt)("p",null,"\u67e5\u770b\u5e93\u6709\u591a\u5c11\u4e2a\nSELECT datname FROM pg_database;"),(0,n.kt)("p",null,"\uff11.\u3000\u505c\u6b62\u9664\u4e86harbor-db\u7684\u9879\u76ee"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"docker stop harbor-jobservice nginx harbor-core registryctl registry redis harbor-portal harbor-log\n")),(0,n.kt)("p",null,"2.\u5220\u9664\u5f53\u524d\u65b0\u5e93\u4e2d\u751f\u6210\u7684harbor\u6570\u636e"),(0,n.kt)("p",null,"\u767b\u5f55\u65b0\u90e8\u7f72\u73af\u5883\u7684harbor-db\u5bb9\u5668\n\u5220\u9664\u73b0\u6709\u7684\u5e93 \uff08\u9664\u4e86\u8fd9\u4e09\u4e2a\u5e93postgres  template0 template1\uff09 \uff0c\u5176\u4f59\u90fd\u5220\u6389\uff0c\u56e0\u4e3apg\u5982\u679c\u8981\u5220\u9664\u6307\u5b9a\u5e93\uff0c\u5c31\u9700\u8981\u8fdb\u53bb\u5176\u4ed6\u5e93\uff0c\u4e0d\u80fd\u8fdb\u5165\u5f53\u524d\u5e93\u8fdb\u884c\u5220\u9664\uff0ctemplate0 template1\u8fd9\u4e24\u4e2a\u5e93\u5220\u9664\u6709\u7279\u6b8a\u6027\uff0c\u6b64\u5904\u4e0d\u9700\u8981\u5220\u9664\u3002\n\u53c2\u8003\u6587\u6863: ",(0,n.kt)("a",{parentName:"p",href:"https://www.modb.pro/db/88534"},"https://www.modb.pro/db/88534"),"  "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"    psql -U postgres -h 127.0.01 -p 5432 -d postgres\n    drop database   xnotaryserver;\n    drop database   notarysigner\n    drop database   registry\n")),(0,n.kt)("p",null,"3 \u5c06\u65e7\u5e93\u7684\u6570\u636e\u6062\u590d\u5230\u65b0\u5e93"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"\u628a\u4ece\u65e7\u5e93\u7684\u5907\u4efd\u6587\u4ef6\u8fc1\u79fb\u5230\u5f53\u524d\u65b0\u5e93\u4e2d\npsql -U postgres /tmp/all.sql\n")),(0,n.kt)("h3",{id:"4-\u91cd\u542f\u6240\u6709\u670d\u52a1"},"4. \u91cd\u542f\u6240\u6709\u670d\u52a1"),(0,n.kt)("p",null,"\u767b\u5f55\u9a8c\u8bc1\u670d\u52a1\u662f\u5426\u662f\u6210\u529f\u7684\ndocker pull\ndocker push"),(0,n.kt)("p",null,"\u67e5\u770b\u65e5\u5fd7\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"docker logs -f --tail=100 harbor-core\ndocker logs -f --tail=100 registry\ndocker logs -f --tail=100 harbor-db\n")),(0,n.kt)("h3",{id:"5-\u6ce8\u610f\u4e8b\u9879"},"5. \u6ce8\u610f\u4e8b\u9879"),(0,n.kt)("p",null,"harbor\u5982\u679c\u9700\u8981\u6539\u53d8\u914d\u7f6e\uff0c\u8bbf\u95ee\u57df\u540d\uff0c\u7aef\u53e3\u53f7\uff0c\u8d26\u53f7\u5bc6\u7801\u7b49\n\u53ef\u4ee5\u627e\u5b89\u88c5harbor\u7684\u76ee\u5f55 /apps/"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"[root@beijing-physicalsvr04 harbor]# ls -l \n\u603b\u7528\u91cf 755616\ndrwxr-xr-x 3 root root        20 6\u6708  14 20:55 common\n-rwxr-xr-x 1 root root      3639 6\u6708  14 18:11 common.sh\n-rw-r--r-- 1 root root      5977 6\u6708  14 20:56 docker-compose.yml\n-rw-r--r-- 1 root root 773689398 2\u6708  20 16:51 harbor.v2.6.4.tar.gz\n-rw-r--r-- 1 root root     10669 6\u6708  14 18:09 harbor.yml\n-rw-r--r-- 1 root root     10649 2\u6708  20 16:50 harbor.yml.tmpl\n-rwxr-xr-x 1 root root      3171 2\u6708  20 16:50 install.sh\n-rw-r--r-- 1 root root     11347 2\u6708  20 16:50 LICENSE\n-rwxr-xr-x 1 root root      1881 2\u6708  20 16:50 prepare\n")),(0,n.kt)("p",null,"\u6bcf\u6b21\u53d8\u66f4\u914d\u7f6e\uff0c\u90fd\u9700\u8981\u9996\u5148\u6267\u884c"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"rm -rf common\n./prepare\n./install.sh\n")),(0,n.kt)("h2",{id:"2nexus\u95ee\u9898"},"2\u3001Nexus\u95ee\u9898"),(0,n.kt)("p",null,"\u5907\u4efd\u6570\u636e\u8fc1\u79fb\u5230\u653e\u5230/usr/local/nexus3/nexus-data \u76ee\u5f55\u4e0b\nchmod -R  777 /usr/local/nexus3/nexus-data"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"docker rm -f docker-nexus3 || true\ndocker run --name docker-nexus3 \\\n-p 8081:8081 \\\n-v /usr/local/nexus3/nexus-data:/nexus-data \\\n--restart=always \\\n-d sonatype/nexus3\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"\u751f\u4ea7\u62a5\u9519\n",(0,n.kt)("img",{src:t(35807).Z,width:"1548",height:"368"}))),(0,n.kt)("p",null,"\u89e3\u51b3\u65b9\u5f0f\uff1a\n",(0,n.kt)("img",{src:t(69244).Z,width:"1883",height:"639"})),(0,n.kt)("p",null,"\u7136\u540e\u521b\u5efa"),(0,n.kt)("p",null,"\u6b65\u9aa41\n",(0,n.kt)("img",{src:t(57821).Z,width:"1434",height:"549"})),(0,n.kt)("p",null,"\u6b65\u9aa42\n\u7248\u672c\u53c2\u8003\u4e0a\u9762: 2.2.9"),(0,n.kt)("p",null,(0,n.kt)("img",{src:t(82949).Z,width:"1353",height:"699"})))}u.isMDXComponent=!0},35807:(e,r,t)=>{t.d(r,{Z:()=>a});const a=t.p+"assets/images/m_0b13b1f0e2cbd2de896e439790507db1_r-5f673259f3f8b81c24b54986766f7e10.png"},57821:(e,r,t)=>{t.d(r,{Z:()=>a});const a=t.p+"assets/images/m_32413b650ae3a11070713beb00a42628_r-6e92333607f9058ef7ec3cbc5687aaee.png"},69244:(e,r,t)=>{t.d(r,{Z:()=>a});const a=t.p+"assets/images/m_3ab44e29f78a9938df4ed405c43d9eab_r-ef8e65e4841de37a90bac71bf8a06001.png"},82949:(e,r,t)=>{t.d(r,{Z:()=>a});const a=t.p+"assets/images/m_a3d23d532af8b053799e7a7faa26119a_r-ff004ef1d2746308d5d18ae5dbc8ec94.png"}}]);