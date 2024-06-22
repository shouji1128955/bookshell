"use strict";(self.webpackChunkbookshell=self.webpackChunkbookshell||[]).push([[5395],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),p=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(i.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,g=d["".concat(i,".").concat(m)]||d[m]||u[m]||l;return t?r.createElement(g,o(o({ref:n},c),{},{components:t})):r.createElement(g,o({ref:n},c))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=m;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<l;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4181:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));const l={},o=void 0,s={unversionedId:"Sre/\u4e2d\u95f4\u4ef6/YAPI",id:"Sre/\u4e2d\u95f4\u4ef6/YAPI",title:"YAPI",description:"yum install   gcc-c++",source:"@site/docs/Sre/2-\u4e2d\u95f4\u4ef6/6.YAPI.md",sourceDirName:"Sre/2-\u4e2d\u95f4\u4ef6",slug:"/Sre/\u4e2d\u95f4\u4ef6/YAPI",permalink:"/en/docs/Sre/\u4e2d\u95f4\u4ef6/YAPI",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Sre/2-\u4e2d\u95f4\u4ef6/6.YAPI.md",tags:[],version:"current",lastUpdatedBy:"AMiner",lastUpdatedAt:1719066785,formattedLastUpdatedAt:"Jun 22, 2024",sidebarPosition:6,frontMatter:{},sidebar:"SreMiddleSoft",previous:{title:"Postgresql",permalink:"/en/docs/Sre/\u4e2d\u95f4\u4ef6/Postgresql"},next:{title:"databasebackup-restore",permalink:"/en/docs/Sre/\u4e2d\u95f4\u4ef6/databasebackup-restore"}},i={},p=[],c={toc:p},d="wrapper";function u(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"yum update && yum install autoconf automake bzip2 dpkg-dev file gcc-c++ gcc ImageMagick bzip2-devel glibc-devel libcurl-devel db4-devel libevent-devel libffi-devel gdbm-devel glib2-devel gmp-devel libjpeg-turbo-devel krb5-devel xz-devel ImageMagick-devel libmaxminddb-devel ncurses-devel libpng-devel postgresql-devel readline-devel sqlite-devel openssl-devel libtool libwebp-devel libxml2-devel libxslt-devel libyaml-devel make patch unzip xz zlib-devel\nyum install  ca-certificates curl netbase wget git\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl -sL https://rpm.nodesource.com/setup_14.x | sudo -E bash -\ncurl -sL https://dl.yarnpkg.com/rpm/yarn.repo | sudo tee /etc/yum.repos.d/yarn.repo\nyum install yarn nodejs -y\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'vi /etc/yum.repos.d/mongodb-org-4.4.repo\n[mongodb-org-4.4]\nname=MongoDB Repository\nbaseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/4.4/x86_64/\ngpgcheck=1\nenabled=1\ngpgkey=https://www.mongodb.org/static/pgp/server-4.4.asc\n\nyum install mongodb-org -y  && service mongod  start\n\ndb.createUser(\n  {\n    user: "test1",\n    pwd: "test1",\n    roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]\n  }\n)\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"\nmkdir -p /yapi/vendors\n\n\n\ncd /yapi/ \ngit clone https://github.com/YMFE/yapi.git -b v1.10.2 vendors\ncd vendors \nnpm install --registry https://registry.npm.taobao.org     \n#\u62a5\u9519nosuchfile\nrm -rf node_modules\nnpm cache clean --force\nrm package-lock.json\n")),(0,a.kt)("p",null,"#\u62a5\u9519make: cc: Command not found\nyum install   gcc-c++\nnpm install --registry ",(0,a.kt)("a",{parentName:"p",href:"https://registry.npm.taobao.org"},"https://registry.npm.taobao.org"),"   "),(0,a.kt)("p",null,"####\u89e3\u51b3c++17\u62a5\u9519"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"yum install -y gcc-c++ cmake\nyum install centos-release-scl\nyum install -y devtoolset-7\nscl enable devtoolset-7 bash\ng++ --version\nnpm install --registry https://registry.npm.taobao.org    \n")),(0,a.kt)("p",null,"##\u89e3\u51b3\u5404\u79cdnpm install yapi-plugin-gitlab-oauth2\u62a5\u9519"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm install -g yapi-cli --registry https://registry.npm.taobao.org\nnpm install -g ykit --registry https://registry.npm.taobao.org\n#npm uninstall react@16.9.0\nnpm install react@16.2.0\nnpm install swagger-client@3.5.1\n#npm install yapi-plugin-gitlab-oauth2 --registry https://registry.npm.taobao.org\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'cp -a config_example.json  ../config.json\nvi ../config.json\n{\n   "port": "3000",\n   "adminAccount": "admin@admin.com",\n   "timeout": 120000,\n   "db": {\n      "servername": "127.0.0.1",\n      "DATABASE": "yapi",\n      "port": 27017,\n      "user": "test1",\n      "pass": "test1",\n      "authSource": ""\n   },\n   "mail": {\n      "enable": true,\n      "host": "smtp.163.com",\n      "port": 465,\n      "from": "***@163.com",\n      "auth": {\n         "user": "***@163.com",\n         "pass": "*****"\n      }\n   },\n   "plugins": [\n      {\n         "name": "gitlab",\n         "options": {\n            "host": "http://git",\n            "redirectUri": "http://yapi:3000/api/plugin/oauth2/callback",\n            "appId": "3f05fdf6c3dd5bb6eeac5185e944ccf87d957cabb538c895899d461149e5bd80",\n            "appSecret": "d2564d6e3862e91b75d229b7fa8cb6abff88fa8498d8449617578c1c99a4ca5f",\n            "accessToken": "4-4g_eH-i-B58LtaDx8Q",\n            "loginPath": "/api/v4/user",\n            "authPath": "/oauth/authorize",\n            "tokenPath": "/oauth/token",\n            "emailKey": "email",\n            "userKey": "username",\n            "emailPostfix": "@yapi.com"\n         }\n      }\n   ]\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'cd  /yapi\nyapi plugin --name yapi-plugin-gitlab\n##\u89e3\u51b3\u62a5\u9519precated since React 16.9.0\ncp -a  /yapi/vendors/.eslintrc.js /yapi/vendors/.eslintrc.js.bk\nvi /yapi/vendors/.eslintrc.js\n    \n    plugins: [\n        "react"\n    ],\n    "settings": {\n      "react": {\n        "version": "detect"\n      }\n    },\n\nyapi plugin --name yapi-plugin-gitlab\n\ncd vendors\nnode server/app.js\n')))}u.isMDXComponent=!0}}]);