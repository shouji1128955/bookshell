"use strict";(self.webpackChunkbookshell=self.webpackChunkbookshell||[]).push([[805],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>m});var a=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},i=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,l=e.originalType,o=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),g=c(n),u=s,m=g["".concat(o,".").concat(u)]||g[u]||d[u]||l;return n?a.createElement(m,r(r({ref:t},i),{},{components:n})):a.createElement(m,r({ref:t},i))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var l=n.length,r=new Array(l);r[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[g]="string"==typeof e?e:s,r[1]=p;for(var c=2;c<l;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2972:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var a=n(7462),s=(n(7294),n(3905));const l={},r=void 0,p={unversionedId:"middle/Postgresql",id:"middle/Postgresql",title:"Postgresql",description:"PostgreSQL\u662f\u4e00\u4e2a\u6bd4\u8f83\u9ad8\u6027\u80fd\u7684\u6570\u636e\u5e93\uff0c \u7ed3\u5408PostGIS\u63d2\u4ef6\uff0c \u4f7fPostgreSQL\u6210\u4e3a\u4e86\u4e00\u4e2a\u7a7a\u95f4\u6570\u636e\u5e93\uff0c\u80fd\u591f\u8fdb\u884c\u7a7a\u95f4\u6570\u636e\u7ba1\u7406\u3001\u6570\u91cf\u6d4b\u91cf\u4e0e\u51e0\u4f55\u62d3\u6251\u5206\u6790\u3002PostgreSQL\u4ece9.3\u5f00\u59cb\u652f\u6301JSON\u6570\u636e\u7c7b\u578b\uff0c 9.4\u5f00\u59cb\u652f\u6301JSONB\uff0c \u5177\u5907NoSQL\u6570\u636e\u5e93\u529f\u80fd\uff0c \u5728\u6027\u80fd\u4e0a\u751a\u81f3\u8d85\u8fc7MongoDB\u3002",source:"@site/docs/middle/5.Postgresql.md",sourceDirName:"middle",slug:"/middle/Postgresql",permalink:"/docs/middle/Postgresql",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/middle/5.Postgresql.md",tags:[],version:"current",lastUpdatedAt:1694099784,formattedLastUpdatedAt:"Sep 7, 2023",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Mysql",permalink:"/docs/middle/Mysql"},next:{title:"YAPI",permalink:"/docs/middle/YAPI"}},o={},c=[{value:"1\u3001\u5b89\u88c5-\u6240\u6709\u8282\u70b9\u5b89\u88c5",id:"1\u5b89\u88c5-\u6240\u6709\u8282\u70b9\u5b89\u88c5",level:2},{value:"1.1 \u90e8\u7f72\u89c4\u5212",id:"11-\u90e8\u7f72\u89c4\u5212",level:3},{value:"1.2 \u5b89\u88c5",id:"12-\u5b89\u88c5",level:3},{value:"1.3 \u6570\u636e\u5e93\u5b9e\u4f8b\u5316",id:"13-\u6570\u636e\u5e93\u5b9e\u4f8b\u5316",level:3},{value:"1.4 \u542f\u52a8\u6570\u636e\u5e93",id:"14-\u542f\u52a8\u6570\u636e\u5e93",level:3},{value:"2\u3001\u4e3b\u4ece\u540c\u6b65-\u4e3b\u5e93\u64cd\u4f5c",id:"2\u4e3b\u4ece\u540c\u6b65-\u4e3b\u5e93\u64cd\u4f5c",level:2},{value:"2.2 \u521b\u5efa\u4e3b\u4ece\u540c\u6b65\u7528\u6237",id:"22-\u521b\u5efa\u4e3b\u4ece\u540c\u6b65\u7528\u6237",level:3},{value:"2.3   pg_hba.conf \u914d\u7f6e",id:"23---pg_hbaconf-\u914d\u7f6e",level:3},{value:"2.4 postgresql.conf\u914d\u7f6e",id:"24-postgresqlconf\u914d\u7f6e",level:3},{value:"2.5 \u91cd\u542f\u4e3b\u5e93",id:"25-\u91cd\u542f\u4e3b\u5e93",level:3},{value:"3. \u4ece\u6570\u636e\u5e93\u64cd\u4f5c",id:"3-\u4ece\u6570\u636e\u5e93\u64cd\u4f5c",level:2},{value:"3.1 \u4ece\u4e3b\u5e93\u540c\u6b65\u6570\u636e",id:"31-\u4ece\u4e3b\u5e93\u540c\u6b65\u6570\u636e",level:3},{value:"3.2 postgresql.conf\u914d\u7f6e",id:"32-postgresqlconf\u914d\u7f6e",level:3},{value:"3.3 \u521b\u5efa standby.signal",id:"33-\u521b\u5efa-standbysignal",level:3},{value:"3.4 \u542f\u52a8\u4ece\u5e93",id:"34-\u542f\u52a8\u4ece\u5e93",level:3},{value:"4.\u4e3b\u4ece\u9a8c\u8bc1",id:"4\u4e3b\u4ece\u9a8c\u8bc1",level:2},{value:"4.1 \u4e3b\u5e93\u9a8c\u8bc1\u65b9\u5f0f",id:"41-\u4e3b\u5e93\u9a8c\u8bc1\u65b9\u5f0f",level:3},{value:"4.2 \u4ece\u5e93\u9a8c\u8bc1",id:"42-\u4ece\u5e93\u9a8c\u8bc1",level:3},{value:"5.\u6570\u636e\u5e93\u5907\u4efd\u8fd8\u539f",id:"5\u6570\u636e\u5e93\u5907\u4efd\u8fd8\u539f",level:2},{value:"6\u3001\u4e3b\u4ece\u5207\u6362",id:"6\u4e3b\u4ece\u5207\u6362",level:3}],i={toc:c},g="wrapper";function d(e){let{components:t,...n}=e;return(0,s.kt)(g,(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"PostgreSQL\u662f\u4e00\u4e2a\u6bd4\u8f83\u9ad8\u6027\u80fd\u7684\u6570\u636e\u5e93\uff0c \u7ed3\u5408PostGIS\u63d2\u4ef6\uff0c \u4f7fPostgreSQL\u6210\u4e3a\u4e86\u4e00\u4e2a\u7a7a\u95f4\u6570\u636e\u5e93\uff0c\u80fd\u591f\u8fdb\u884c\u7a7a\u95f4\u6570\u636e\u7ba1\u7406\u3001\u6570\u91cf\u6d4b\u91cf\u4e0e\u51e0\u4f55\u62d3\u6251\u5206\u6790\u3002PostgreSQL\u4ece9.3\u5f00\u59cb\u652f\u6301JSON\u6570\u636e\u7c7b\u578b\uff0c 9.4\u5f00\u59cb\u652f\u6301JSONB\uff0c \u5177\u5907NoSQL\u6570\u636e\u5e93\u529f\u80fd\uff0c \u5728\u6027\u80fd\u4e0a\u751a\u81f3\u8d85\u8fc7MongoDB\u3002"),(0,s.kt)("p",null,"\u4e8c\u8fdb\u5236\u5305\u4e0b\u8f7d\u5730\u5740"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://www.postgresql.org/ftp/source/"},"https://www.postgresql.org/ftp/source/")),(0,s.kt)("p",null,"\u6b64\u5904\u4e0b\u8f7d\u7248\u672c13.1 "),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://ftp.postgresql.org/pub/source/v13.1/postgresql-13.1.tar.gz"},"https://ftp.postgresql.org/pub/source/v13.1/postgresql-13.1.tar.gz")),(0,s.kt)("h2",{id:"1\u5b89\u88c5-\u6240\u6709\u8282\u70b9\u5b89\u88c5"},"1\u3001\u5b89\u88c5-\u6240\u6709\u8282\u70b9\u5b89\u88c5"),(0,s.kt)("p",null,"\u817e\u8baf\u4e91\u670d\u52a1\u5668\uff0c\u7cfb\u7edf\u7248\u672ccentos7.9 2c4g"),(0,s.kt)("h3",{id:"11-\u90e8\u7f72\u89c4\u5212"},"1.1 \u90e8\u7f72\u89c4\u5212"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u4e3b\u8282\u70b9\uff1a 172.21.48.6"),(0,s.kt)("li",{parentName:"ul"},"\u4ece\u8282\u70b9\uff1a 172.21.48.5")),(0,s.kt)("h3",{id:"12-\u5b89\u88c5"},"1.2 \u5b89\u88c5"),(0,s.kt)("p",null,"\u5728\u4e3b\u4ece\u90e8\u7f72\u5b89\u88c5\u4e4b\u524d\uff0c \u5148\u8981\u5728\u4e24\u53f0\u8282\u70b9\u4e0a\u5206\u522b\u90fd\u5b89\u88c5Postgresql\uff0c \u8fd9\u91cc\u4ee5\u5b89\u88c5Postgresql13.1\u7248\u672c\u4e3a\u4f8b\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"yum install gcc-c++ -y\nyum install perl-ExtUtils-Embed -y\nyum install readline-devel -y\nyum install zlib-devel -y\nyum install python-devel -y\n")),(0,s.kt)("p",null,"\u521b\u5efa\u7528\u6237"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'groupadd postgres\nuseradd -g postgres postgres\necho "postgres"|passwd postgres --stdin\n')),(0,s.kt)("p",null,"\u89e3\u538b\uff0c\u7f16\u8bd1\u5b89\u88c5"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"root@server01 ~]# tar xf postgresql-13.1.tar.gz  \n[root@server01 ~]# cd postgresql-13.1/ \n./configure --prefix=/usr/local/pgsql13.1  --with-perl --with-python\nmake && make install\nln -sf /usr/local/pgsql13.1 /usr/local/pgsql\n\nchown -R postgres:postgres /usr/local/pgsql13.1/\nchown -R postgres:postgres /usr/local/pgsql/\n")),(0,s.kt)("p",null,"\u5b89\u88c5contrib\u76ee\u5f55\u4e0b\u7684\u5de5\u5177"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"cd postgresql-13.1/contrib\nmake && make install\n")),(0,s.kt)("p",null,"\u5207\u6362\u7528\u6237postgres\uff0c\u521b\u5efa\u73af\u5883\u53d8\u91cf"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"su   -   postgres\nvim .bash_profile\nexport PATH=/usr/local/pgsql/bin:$PATH\nexport LD_LIBRARY_PATH=/usr/local/pgsql/lib\nexport PGHOST=/tmp\nexport LANG=en_US.UTF-8\nexport PGDATA=/postgres/\n\nvim /etc/profile\nexport PATH=/usr/local/pgsql/bin:$PATH\nexport LD_LIBRARY_PATH=/usr/local/pgsql/lib:$LD_LIBRARY_PATH\n")),(0,s.kt)("h3",{id:"13-\u6570\u636e\u5e93\u5b9e\u4f8b\u5316"},"1.3 \u6570\u636e\u5e93\u5b9e\u4f8b\u5316"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'[root@server01 contrib]# mkdir -p  /data/appData/postgreSql\n[root@server01 contrib]# chown -R postgres:postgres /data/appData/postgreSql\n\nsu  -  posrgres\n\nexport PGDATA=/data/appData/postgreSql\ninitdb -k   #\u5bf9\u4e8e\u6570\u636e\u53ef\u9760\u6027\u8981\u6c42\u5f88\u9ad8\u7684\u5c1d\u5c3d\uff0c\u5efa\u8bae\u6253\u5f00\u6570\u636e\u5757checksum\u6821\u9a8c\u529f\u80fd\n[postgres@server02 ~]$ /usr/local/pgsql13.1/bin/initdb  -D  /data/appData/postgreSql --encoding=UTF8 --lc-collate=en_US.UTF-8 --lc-ctype=en_US.UTF-8\nThe files belonging to this database system will be owned by user "postgres".\nThis user must also own the server process.\n\nThe database cluster will be initialized with locale "en_US.UTF-8".\nThe default text search configuration will be set to "english".\n\nData page checksums are disabled.\n\nfixing permissions on existing directory /data/appData/postgreSql ... ok\ncreating subdirectories ... ok\nselecting dynamic shared memory implementation ... posix\nselecting default max_connections ... 100\nselecting default shared_buffers ... 128MB\nselecting default time zone ... Asia/Shanghai\ncreating configuration files ... ok\nrunning bootstrap script ... ok\nperforming post-bootstrap initialization ... ok\nsyncing data to disk ... ok\n\ninitdb: warning: enabling "trust" authentication for local connections\nYou can change this by editing pg_hba.conf or using the option -A, or\n--auth-local and --auth-host, the next time you run initdb.\n\nSuccess. You can now start the database server using:\n\n    /usr/local/pgsql13.1/bin/pg_ctl -D /data/appData/postgreSql -l logfile start\n')),(0,s.kt)("h3",{id:"14-\u542f\u52a8\u6570\u636e\u5e93"},"1.4 \u542f\u52a8\u6570\u636e\u5e93"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'###1.\u542f\u52a8\u670d\u52a1: \u6dfb\u52a0-l logfile start \u53ef\u4ee5\u67e5\u770b\u65e5\u5fd7\n#\u8fd9\u79cd\u60c5\u51b5\u4e0b\u670d\u52a1\u662f\u76d1\u542c\u5728127.0.0.1:5432\u4e0b\uff0c\u6240\u4ee5\u9700\u8981\u4fee\u6539\u914d\u7f6e\u6587\u4ef6\uff0c\u914d\u7f6e\u8fdc\u7a0b\u53ef\u4ee5\u8fde\u63a5\n[postgres@server01 ~]$ pg_ctl start -D /data/appData/postgreSql/\nwaiting for server to start....2023-06-24 22:00:22.629 CST [20378] LOG:  starting PostgreSQL 13.1 on x86_64-pc-linux-gnu, compiled by gcc (GCC) 4.8.5 20150623 (Red Hat 4.8.5-44), 64-bit\n2023-06-24 22:00:22.629 CST [20378] LOG:  listening on IPv6 address "::1", port 5432\n2023-06-24 22:00:22.629 CST [20378] LOG:  listening on IPv4 address "127.0.0.1", port 5432\n2023-06-24 22:00:22.632 CST [20378] LOG:  listening on Unix socket "/tmp/.s.PGSQL.5432"\n2023-06-24 22:00:22.634 CST [20379] LOG:  database system was shut down at 2023-06-24 21:52:19 CST\n2023-06-24 22:00:22.637 CST [20378] LOG:  database system is ready to accept connections\n done\nserver started\n\n#####\u67e5\u770b\u7aef\u53e3\u76d1\u542c\u7684\u60c5\u51b5\n[postgres@server01 ~]$ netstat  -ntlp\n(Not all processes could be identified, non-owned process info\n will not be shown, you would have to be root to see it all.)\nActive Internet connections (only servers)\nProto Recv-Q Send-Q Local Address           Foreign Address         State       PID/Program name    \ntcp        0      0 0.0.0.0:22              0.0.0.0:*               LISTEN      -                   \ntcp        0      0 127.0.0.1:5432          0.0.0.0:*               LISTEN      20378/postgres      \ntcp6       0      0 ::1:5432                :::*                    LISTEN      20378/postgres\n\n###2.\u7136\u540e\u505c\u6b62\u670d\u52a1\n[postgres@server01 ~]$ pg_ctl stop   -D /data/appData/postgreSql/\nwaiting for server to shut down....2023-06-24 22:03:24.367 CST [20378] LOG:  received fast shutdown request\n2023-06-24 22:03:24.368 CST [20378] LOG:  aborting any active transactions\n2023-06-24 22:03:24.369 CST [20378] LOG:  background worker "logical replication launcher" (PID 20385) exited with exit code 1\n2023-06-24 22:03:24.369 CST [20380] LOG:  shutting down\n2023-06-24 22:03:24.378 CST [20378] LOG:  database system is shut down\n done\nserver stopped\n##\n\n####\u4fee\u6539\u8fdc\u7a0b\u53ef\u4ee5\u8fde\u63a5\n\u4fee\u6539listen\u76d1\u542c\u4e3a0.0.0.0 \n[postgres@server01 ~]$ cat  /data/appData/postgreSql/postgresql.conf  | grep listen\nlisten_addresses = \'0.0.0.0\'        # what IP address(es) to listen on;\n\n####\u4fee\u6539pg_hba.conf\uff0c\u589e\u52a0host    all             all             0.0.0.0/0               trust\n[postgres@server01 ~]$ cat   /data/appData/postgreSql/pg_hba.conf  | grep host | grep -v "^#"\nhost    all             all            0.0.0.0/0                trust\nhost    all             all             ::1/128                 trust\nhost    all             all             0.0.0.0/0               trust\n[postgres@server01 ~]$ \n')),(0,s.kt)("p",null,"\u521b\u5efa\u6d4b\u8bd5\u8d26\u53f7-\u6b64\u90e8\u53ef\u4ee5\u5ffd\u7565"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"# \u521b\u5efa\u7528\u6237\ncreateuser -U commonuser -h127.0.0.1 -p5432 -s postgres\npsql -d postgres -U commonuser -h127.0.0.1 -p5432 -c \"create user synthetic_user with superuser password '123456';\"\n")),(0,s.kt)("h2",{id:"2\u4e3b\u4ece\u540c\u6b65-\u4e3b\u5e93\u64cd\u4f5c"},"2\u3001\u4e3b\u4ece\u540c\u6b65-\u4e3b\u5e93\u64cd\u4f5c"),(0,s.kt)("p",null,"\u4e3b\u5e93\u64cd\u4f5c"),(0,s.kt)("p",null,"\u4e00\u5b9a\u8981\u4fdd\u5b58\u597d\u8fd9\u4e2a\u6587\u4ef6 all_DB.sql"),(0,s.kt)("h3",{id:"22-\u521b\u5efa\u4e3b\u4ece\u540c\u6b65\u7528\u6237"},"2.2 \u521b\u5efa\u4e3b\u4ece\u540c\u6b65\u7528\u6237"),(0,s.kt)("p",null," create role repl login replication encrypted password '123456';  ###\u975e\u5e38\u5173\u952e"),(0,s.kt)("p",null,"\u5982\u679c\u5df2\u5b89\u88c5postgresql\u5efa\u8bae\u5148\u8fdb\u884c\u5907\u4efd\u64cd\u4f5c\uff0c\u5907\u4efd\u64cd\u4f5c\u53c2\u8003\u5982\u4e0b\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"# \u521b\u5efa\u5907\u4efdSQL\u6587\u4ef6\u5b58\u653e\u76ee\u5f55\nmkdir -p /data/appData/backup /data/app/backup /data/tmp\n\n## \u5bfc\u51fa\u7cfb\u7edf\u5e93-\u975e\u5e38\u5173\u952e\ncd /data/appData/postgreSql/\npg_dumpall -U postgres -h 127.0.0.1 -p 5432 -f /data/appData/postgreSql/all_DB.sql\n\n# \u505c\u6b62\u670d\u52a1\npg_ctl stop -D /data/appData/postgreSql/\n\n# \u5907\u4efd\u6587\u4ef6\ncd /data/app\ncp -arp /data/app/postgreSql  /data/app/backup/\ncp -arp /data/appData/postgreSql  /data/appData/backup/\n\n# \u521b\u5efa\u4e3b\u4ece\u540c\u6b65\u7528\u6237\ncreate role repl login replication encrypted password '123456';\n")),(0,s.kt)("h3",{id:"23---pg_hbaconf-\u914d\u7f6e"},"2.3   pg_hba.conf \u914d\u7f6e"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'# \u6dfb\u52a0\u4ece\u5e93\u7f51\u6bb5\necho "host    replication     repl            172.21.48.5/24        md5" >> /data/appData/postgreSql/pg_hba.conf\n\n# \u67e5\u770b\n[postgres@server01 ~]$ cat /data/appData/postgreSql/pg_hba.conf    | grep md5\n# METHOD can be "trust", "reject", "md5", "password", "scram-sha-256",\n# Note that "password" sends passwords in clear text; "md5" or\nhost    replication     repl            172.21.48.5/24        md5\n\n')),(0,s.kt)("h3",{id:"24-postgresqlconf\u914d\u7f6e"},"2.4 postgresql.conf\u914d\u7f6e"),(0,s.kt)("p",null,"\u53c2\u8003\u914d\u7f6e"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir -p  /data/appData/postgreSql/pg_archive/xlog_files\n\nvim /data/appData/postgreSql/postgresql.conf\nlisten_addresses = '*'      # \u76d1\u542c\u6240\u6709ip\nwal_level = hot_standby     # \u70ed\u5907\u6a21\u5f0f\narchive_mode = on           #\u5141\u8bb8\u5f52\u6863\narchive_command = 'cp %p /data/appData/postgreSql/pg_archive/xlog_files/%f' # \u6b64\u76ee\u5f55\u9700\u8981\u521b\u5efa\nmax_wal_senders = 32        #\u540c\u6b65\u6700\u5927\u7684\u8fdb\u7a0b\u6570\u91cf\nwal_sender_timeout = 60s    #\u6d41\u590d\u5236\u4e3b\u673a\u53d1\u9001\u6570\u636e\u7684\u8d85\u65f6\u65f6\u95f4\nmax_connections = 200       #\u6700\u5927\u8fde\u63a5\u6570\uff0c\u4ece\u5e93\u7684max_connections\u5fc5\u987b\u8981\u5927\u4e8e\u4e3b\u5e93\u7684\n")),(0,s.kt)("h3",{id:"25-\u91cd\u542f\u4e3b\u5e93"},"2.5 \u91cd\u542f\u4e3b\u5e93"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"pg_ctl restart -D /data/appData/postgreSql/\n")),(0,s.kt)("h2",{id:"3-\u4ece\u6570\u636e\u5e93\u64cd\u4f5c"},"3. \u4ece\u6570\u636e\u5e93\u64cd\u4f5c"),(0,s.kt)("p",null,"\u6ce8\u610f\u4ece\u5e93\u65e0\u9700\u4e0a\u6587\u4e3b\u5e93\u5b89\u88c5\u6d41\u7a0b\u4e2d\u7684\u521d\u59cb\u5316\u6b65\u9aa4\uff0c\u4f7f\u7528pg_basebackup\u547d\u4ee4\u4ece\u4e3b\u5e93\u540c\u6b65\u6570\u636e"),(0,s.kt)("h3",{id:"31-\u4ece\u4e3b\u5e93\u540c\u6b65\u6570\u636e"},"3.1 \u4ece\u4e3b\u5e93\u540c\u6b65\u6570\u636e"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"###\u5907\u4efd\u4ece\u5e93\u6570\u636e\npg_ctl stop     -D /data/appData/postgreSql/\ncd /data/appData/postgreSql \ntar all.tar.gz ./*   && mv all.tar.gz  ~/  ##\u5907\u4efd\n\n###\u4ece\u4e3b\u5e93\u540c\u6b65\u6570\u636e\npg_basebackup -h  172.21.48.6  -p 5432 -U repl -F p -P -D /data/appData/postgreSql \n# \u8f93\u5165repl\u7528\u6237\u5bc6\u7801\uff1a123456\n\n\n###\u53c2\u6570\u8bf4\u660e\uff1a\n\n-h \u6307\u5b9a\u8fde\u63a5\u7684\u6570\u636e\u5e93\u7684\u4e3b\u673a\u540d\u6216IP\u5730\u5740\n-U \u6307\u5b9a\u8fde\u63a5\u7684\u7528\u6237\u540d\n-F \u6307\u5b9a\u4e86\u8f93\u51fa\u7684\u683c\u5f0f\uff0c\u652f\u6301p\uff08\u539f\u6837\u8f93\u51fa\uff09\u6216\u8005t\uff08tar\u683c\u5f0f\u8f93\u51fa\uff09\u3002\n-P \u8868\u793a\u5141\u8bb8\u5728\u5907\u4efd\u8fc7\u7a0b\u4e2d\u5b9e\u65f6\u7684\u6253\u5370\u5907\u4efd\u7684\u8fdb\u5ea6\u3002\n-D \u6307\u5b9a\u628a\u5907\u4efd\u5199\u5230\u54ea\u4e2a\u76ee\u5f55\uff0c\u5fc5\u987b\u4e3a\u7a7a\u76ee\u5f55\n")),(0,s.kt)("h3",{id:"32-postgresqlconf\u914d\u7f6e"},"3.2 postgresql.conf\u914d\u7f6e"),(0,s.kt)("p",null,"\u4ece PostgreSQL 12 \u5f00\u59cb\u5df2\u7ecf\u79fb\u9664\u4e86 ",(0,s.kt)("a",{parentName:"p",href:"https://so.csdn.net/so/search?q=recovery&spm=1001.2101.3001.7020"},"recovery"),".conf \u6587\u4ef6,\u76f8\u5173\u914d\u7f6e\u5408\u5e76\u5230\u4e86 postgresql.conf \u4e2d,\u56e0\u4e3a\u914d\u7f6epostgresql.conf  \u662f\u4ece\u4e3b\u5e93\u540c\u6b65\u8fc7\u6765\u7684\uff0c\u8fd9\u91cc\u9700\u8981\u4fee\u6539\u4e00\u4e9b\u914d\u7f6e\uff0c\u6539\u4e3a\u4ece\u5e93\u7684\u914d\u7f6e"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"vim /data/appData/postgreSql/postgresql.conf\n\n## \u79fb\u9664\u6216\u6ce8\u91ca wal_level\uff0c\u4ece\u5e93\u4e0d\u9700\u8981\u8fd9\u4e2a\u914d\u7f6e\n# wal_level = hot_standby\n\n## \u4fee\u6539\u6216\u6dfb\u52a0\u4ee5\u4e0b\nmax_standby_streaming_delay=30s #\u53ef\u9009\uff0c\u6d41\u590d\u5236\u6700\u5927\u5ef6\u8fdf\nwal_receiver_status_interval=10s #\u53ef\u9009\uff0c\u5411\u4e3b\u5e93\u62a5\u544a\u72b6\u6001\u7684\u6700\u5927\u95f4\u9694\u65f6\u95f4\nhot_standby_feedback=on #\u53ef\u9009\uff0c\u67e5\u8be2\u51b2\u7a81\u65f6\u5411\u4e3b\u5e93\u53cd\u9988\nmax_connections=1000 #\u6700\u5927\u8fde\u63a5\u6570\u4e00\u822c\u5927\u4e8e\u4e3b\u5e93\u5c31\u884c\nprimary_conninfo = 'host=host=172.21.48.6 port=5432 user=repl password=123456'  # \u8868\u793a\u4e3b\u5e93\u8fde\u63a5\u4fe1\u606f\nrecovery_target_timeline = 'latest'     # \u8868\u793a\u6062\u590d\u6700\u65b0\u7684\u6570\u636e\n\n")),(0,s.kt)("h3",{id:"33-\u521b\u5efa-standbysignal"},"3.3 \u521b\u5efa standby.signal"),(0,s.kt)("p",null,"\u521b\u5efa standby.signal \u6587\u4ef6,\u58f0\u660e\u4ece\u5e93"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'[postgres@server02 ~]$ echo "standby_mode = on" >> /data/appData/postgreSql/standby.signal\n')),(0,s.kt)("h3",{id:"34-\u542f\u52a8\u4ece\u5e93"},"3.4 \u542f\u52a8\u4ece\u5e93"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"pg_ctl start -D /data/appData/postgreSql/\n")),(0,s.kt)("h2",{id:"4\u4e3b\u4ece\u9a8c\u8bc1"},"4.\u4e3b\u4ece\u9a8c\u8bc1"),(0,s.kt)("h3",{id:"41-\u4e3b\u5e93\u9a8c\u8bc1\u65b9\u5f0f"},"4.1 \u4e3b\u5e93\u9a8c\u8bc1\u65b9\u5f0f"),(0,s.kt)("p",null,"4.1.1 \u67e5\u770b\u8fdb\u7a0b"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'[postgres@server01 ~]$ ps aux |grep "sender"|grep -v "grep"\npostgres 24020  0.0  0.0 274820  2588 ?        Ss   23:03   0:00 postgres: walsender repl 172.21.48.5(60640) streaming 0/3000148\n# \u8fd4\u56de postgres: walsender repl 172.16.98.201(53768) streaming\n')),(0,s.kt)("p",null,"4.1.2 \u67e5\u8868\u9a8c\u8bc1"),(0,s.kt)("p",null,"\u767b\u5f55\u4e3b\u5e93"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'[postgres@server01 ~]$ psql -h 127.0.0.1 -p 5432 -U postgres\npsql (13.1)\nType "help" for help.\n\npostgres=# select pid,application_name,state,client_addr,sync_priority,sync_state from pg_stat_replication;\n  pid  | application_name |   state   | client_addr | sync_priority | sync_state \n-------+------------------+-----------+-------------+---------------+------------\n 24020 | walreceiver      | streaming | 172.21.48.5 |             0 | async\n(1 row)\n\npostgres=#\n\n\n## \u8fd4\u56de async\n## \u5982\u679c\u8be5\u5b57\u6bb5\u7684\u503c\u4e3a "sync"\uff0c\u5219\u8868\u793a\u4f7f\u7528\u7269\u7406\u590d\u5236\u3002\u5982\u679c\u503c\u4e3a "async"\uff0c\u5219\u8868\u793a\u4f7f\u7528\u903b\u8f91\u590d\u5236\u3002\n')),(0,s.kt)("p",null,"\u4e3b\u4ece\u590d\u5236\u7684\u6a21\u5f0f\uff0c\u5728\u4ece\u670d\u52a1\u4e0a\u662f\u65e0\u6cd5\u5b9e\u73b0\u6570\u636e\u7684\u5199\u5165\uff0c\u5982\u679c\u60f3\u505c\u6b62\u4ece\u670d\u52a1\u7684\u590d\u5236\uff0c\u53ef\u4ee5\u4f7f\u7528\u4e0b\u9762\u7684\u8bed\u53e5"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'#\u505c\u6b62\u590d\u5236\u8fdb\u7a0b\uff1a\u5728\u8fde\u63a5\u5230\u4ece\u670d\u52a1\u5668\u7684\u5ba2\u6237\u7aef\u4f1a\u8bdd\u4e2d\uff0c\u6267\u884c\u4ee5\u4e0b SQL \u547d\u4ee4\u6765\u505c\u6b62\u590d\u5236\u8fdb\u7a0b\n#\u8be5\u547d\u4ee4\u5c06\u6682\u505c\u590d\u5236\u8fdb\u7a0b\uff0c\u5e76\u505c\u6b62\u5e94\u7528\u4e3b\u670d\u52a1\u5668\u4e0a\u7684\u4e8b\u52a1\u65e5\u5fd7\u3002\nSELECT pg_wal_replay_pause();\n\n#\u5982\u679c\u8be5\u67e5\u8be2\u8fd4\u56de\u7ed3\u679c\u4e3a "true"\uff0c\u5219\u8868\u793a\u590d\u5236\u8fdb\u7a0b\u5df2\u6210\u529f\u505c\u6b62\nSELECT pg_is_wal_replay_paused();\n\n')),(0,s.kt)("h3",{id:"42-\u4ece\u5e93\u9a8c\u8bc1"},"4.2 \u4ece\u5e93\u9a8c\u8bc1"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'[postgres@server02 postgreSql]$ ps aux |grep "receiver" |grep -v "grep"\npostgres 24574  0.0  0.0 323388  1888 ?        Ss   23:03   0:00 postgres: walreceiver streaming 0/3000148\n[postgres@server02 postgreSql]$\n\n# \u8fd4\u56de postgres: walreceiver streaming\n')),(0,s.kt)("h2",{id:"5\u6570\u636e\u5e93\u5907\u4efd\u8fd8\u539f"},"5.\u6570\u636e\u5e93\u5907\u4efd\u8fd8\u539f"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/uniqid/p/4154598.html"},"https://www.cnblogs.com/uniqid/p/4154598.html")),(0,s.kt)("p",null,"\u6570\u636e\u5e93\u5bfc\u51fa"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'#\u5907\u4efd\u5bfc\u51fa\u6570\u636e\npg_dump  -U postgres -c  gyjtcq -f /home/postgres/gangyan0623.sql\n\n#-U, --username=USERNAME  database user name (default: "postgres")\n')),(0,s.kt)("p",null,"\u6570\u636e\u5e93\u8fd8\u539f"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'psql  -d  gyjtcq  -f   /home/postgres/gangyan0623.sql  postgres\n#-d, --dbname=DBNAME      database name to connect to (default: "postgres")\n')),(0,s.kt)("p",null,"5.1 \u5173\u4e8e\u5907\u4efd\u7684\u4e00\u4e9b\u8bf4\u660e"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"Pg_restore \u6062\u590d\u3002\n\nTo dump a database into a custom-format archive file:\n\n\u4e00\u5b9a\u8981dump\u6210custom\u683c\u5f0f\u624d\u80fd\u7528pg_restore\u6062\u590d\u3002\n\npg_dump -Fc -U postgres -t test -t test1 -t test2 postgres  > c:\\test012-1.sql\n\nPassword:\n\npg_restore -d postgres -U postgres -t test1  c:\\test012-1.sql\n")),(0,s.kt)("p",null,"pg_dumpall\u5bfc\u51fa"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"pg_dump \u4e00\u6b21\u53ea\u80fd\u5bfc\u51fa\u4e00\u4e2a\u6570\u636e\u5e93\u3002\u800c\u4e14\u4e0d\u80fd\u5bfc\u51fa\u5173\u4e8e\u89d2\u8272\u548c\u8868\u7a7a\u95f4\u4fe1\u606f\u3002\uff08\u56e0\u4e3a\u8868\u7a7a\u95f4\u548c\u89d2\u8272\u8de8\u8d8a\u5355\u4e2a\u6570\u636e\u5e93\uff0c\u5c5e\u4e8ecluster\u6570\u636e \u5e93\u7684\u3002\uff09pg_dumpall  \u80fd\u591f\u5e2e\u4f60\u5bfc\u51facluster\u6570\u636e\u5e93\u7684\u5b8c\u6574\u5185\u5bb9\u3002\u4e5f\u53ef\u4ee5\u5355\u72ec\u5bfc\u51fa\u5355\u4e00\u6570\u636e\u5e93\uff0c\u89d2\u8272\u548c\u8868\u7a7a\u95f4\u7684\u5185\u5bb9\u3002(\u7531\u4e8ecluster\u4e0d \u597d\u7ffb\u8bd1\u3002\u53ef\u4ee5\u7406\u89e3\u4e3a\u591a\u6570\u636e\u5e93\u3002\u96c6\u7fa4\uff0c\u7c07\u6570\u636e\u5e93\uff0c\u4e0d\u77e5\u9053\u54ea\u4e2a\u66f4\u8d34\u5207\uff0c\u5c31\u4e0d\u7ffb\u8bd1\u4e86)\n\npg_dumpall > outfile\n\nThe resulting dump can be restored with psql: \u5bfc\u51fa\u7ed3\u679c\u80fd\u7528psql\u6062\u590d\u3002\n\npsql -f infile postgres\n")),(0,s.kt)("p",null,"\u4ece\u8282\u70b9\uff1a"),(0,s.kt)("p",null,"\u5982\u679c\u8ba9\u4ece\u8282\u70b9\u63d0\u5347\u4e3a\u4e3b\u8282\u70b9\u6267\u884c\u4e0b\u9762\u8bed\u53e5"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"SELECT pg_promote();\n\nselect pg_is_in_recovery();   \u7ed3\u679c\u662ff\u5219\u4e3a\u4e3b\u5e93\uff0ct\u4e3a\u5907\u5e93\n\n\ncreate database ilync  #\u6d4b\u8bd5\u662f\u5426\u6210\u529f\n")),(0,s.kt)("h3",{id:"6\u4e3b\u4ece\u5207\u6362"},"6\u3001\u4e3b\u4ece\u5207\u6362"),(0,s.kt)("p",null,"\u5148\u505c\u6b62\u4ece\u5e93"),(0,s.kt)("p",null,"\u4ece\u64cd\u4f5c"),(0,s.kt)("p",null,"\u5907\u4efd\u539f\u76ee\u5f55\u6587\u4ef6"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"###\u5907\u4efd\u4ece\u5e93\u6570\u636e\npg_ctl stop     -D /data/appData/postgreSql/\ncd /data/appData/postgreSql \ntar all.tar.gz ./*   && mv all.tar.gz  ~/  ##\u5907\u4efd\n\n###\u4ece\u4e3b\u5e93\u540c\u6b65\u6570\u636e\npg_basebackup -h  172.21.48.6  -p 5432 -U repl -F p -P -D /data/appData/postgreSql \n")),(0,s.kt)("p",null,"\u5220\u9664\u914d\u7f6e\u6587\u4ef6"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"rm -f /data/appData/postgreSql/standby.signal\n")),(0,s.kt)("p",null,"\u6ce8\u91ca\u6389\u4e3b\u8282\u70b9\u4fe1\u606f"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"vim /data/appData/postgreSql/postgresql.conf\n\n## \u79fb\u9664\u6216\u6ce8\u91ca wal_level\uff0c\u4ece\u5e93\u4e0d\u9700\u8981\u8fd9\u4e2a\u914d\u7f6e\nwal_level = hot_standby\nmax_connections=1000 #\u6700\u5927\u8fde\u63a5\u6570\u4e00\u822c\u5927\u4e8e\u4e3b\u5e93\u5c31\u884c\n#primary_conninfo = 'host=host=172.21.48.6 port=5432 user=repl password=123456'  # \u8868\u793a\u4e3b\u5e93\u8fde\u63a5\u4fe1\u606f\n")),(0,s.kt)("p",null,"\u7136\u540e\u91cd\u65b0\u542f\u52a8\u4ece\u5e93\uff0c\u505c\u6b62\u4e3b\u5e93"))}d.isMDXComponent=!0}}]);