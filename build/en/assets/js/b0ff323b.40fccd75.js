"use strict";(self.webpackChunkbookshell=self.webpackChunkbookshell||[]).push([[450],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,l=e.originalType,i=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(a),m=s,h=p["".concat(i,".").concat(m)]||p[m]||u[m]||l;return a?n.createElement(h,r(r({ref:t},d),{},{components:a})):n.createElement(h,r({ref:t},d))}));function h(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var l=a.length,r=new Array(l);r[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[p]="string"==typeof e?e:s,r[1]=o;for(var c=2;c<l;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},43252:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=a(87462),s=(a(67294),a(3905));const l={},r=void 0,o={unversionedId:"Sre/\u4e2d\u95f4\u4ef6/clickhouse",id:"Sre/\u4e2d\u95f4\u4ef6/clickhouse",title:"clickhouse",description:"Clickhouse\u96c6\u7fa4\u90e8\u7f72",source:"@site/docs/Sre/2-\u4e2d\u95f4\u4ef6/12.clickhouse.md",sourceDirName:"Sre/2-\u4e2d\u95f4\u4ef6",slug:"/Sre/\u4e2d\u95f4\u4ef6/clickhouse",permalink:"/en/docs/Sre/\u4e2d\u95f4\u4ef6/clickhouse",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Sre/2-\u4e2d\u95f4\u4ef6/12.clickhouse.md",tags:[],version:"current",lastUpdatedBy:"zhanglaiqiang",lastUpdatedAt:1703872513,formattedLastUpdatedAt:"Dec 29, 2023",sidebarPosition:12,frontMatter:{},sidebar:"SreMiddleSoft",previous:{title:"nginx",permalink:"/en/docs/Sre/\u4e2d\u95f4\u4ef6/nginx"}},i={},c=[{value:"Clickhouse\u96c6\u7fa4\u90e8\u7f72",id:"clickhouse\u96c6\u7fa4\u90e8\u7f72",level:2},{value:"\u5e38\u89c4\u64cd\u4f5c",id:"\u5e38\u89c4\u64cd\u4f5c",level:2},{value:"\u5e38\u7528\u67e5\u8be2\u547d\u4ee4",id:"\u5e38\u7528\u67e5\u8be2\u547d\u4ee4",level:3},{value:"\u67e5\u770b\u6bcf\u4e2a\u5e93\u7684\u5927\u5c0f",id:"\u67e5\u770b\u6bcf\u4e2a\u5e93\u7684\u5927\u5c0f",level:3},{value:"\u67e5\u770b\u5f53\u524d\u6570\u636e\u5e93\u6267\u884c\u7684\u8bed\u53e5",id:"\u67e5\u770b\u5f53\u524d\u6570\u636e\u5e93\u6267\u884c\u7684\u8bed\u53e5",level:3},{value:"\u67e5\u8be2\u5355\u4e2a\u5e93\u7684\u5927\u5c0f",id:"\u67e5\u8be2\u5355\u4e2a\u5e93\u7684\u5927\u5c0f",level:3},{value:"\u67e5\u8be2\u591a\u4e2a\u5e93\u7684\u5927\u5c0f",id:"\u67e5\u8be2\u591a\u4e2a\u5e93\u7684\u5927\u5c0f",level:3},{value:"\u67e5\u770b\u4e00\u4e2a\u5e93\u4e2d\u6240\u6709\u7684\u8868\u5927\u5c0f",id:"\u67e5\u770b\u4e00\u4e2a\u5e93\u4e2d\u6240\u6709\u7684\u8868\u5927\u5c0f",level:3},{value:"clickhouse\u5f02\u6b65\u5904\u7406\u8bb0\u5f55",id:"clickhouse\u5f02\u6b65\u5904\u7406\u8bb0\u5f55",level:3},{value:"\u67e5\u770b\u78c1\u76d8",id:"\u67e5\u770b\u78c1\u76d8",level:3},{value:"\u67e5\u770b\u5b58\u50a8\u7b56\u7565",id:"\u67e5\u770b\u5b58\u50a8\u7b56\u7565",level:3},{value:"\u521b\u5efa\u6570\u636e\u5e93",id:"\u521b\u5efa\u6570\u636e\u5e93",level:4},{value:"clickhouse\u51b7\u70ed\u5206\u79bb",id:"clickhouse\u51b7\u70ed\u5206\u79bb",level:3},{value:"apk\u4fee\u6539\u6e90",id:"apk\u4fee\u6539\u6e90",level:3}],d={toc:c},p="wrapper";function u(e){let{components:t,...l}=e;return(0,s.kt)(p,(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"clickhouse\u96c6\u7fa4\u90e8\u7f72"},"Clickhouse\u96c6\u7fa4\u90e8\u7f72"),(0,s.kt)("p",null,"\u603b\u7ed3\u6587\u6863\uff1a "),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://blog.csdn.net/L13763338360/article/details/119210100"},"clickhouse\u642d\u5efa\u96c6\u7fa4\u95ee\u9898\u603b\u7ed3_clickhouse\u96c6\u7fa4\u6700\u5c11\u51e0\u4e2a\u8282\u70b9-CSDN\u535a\u5ba2")),(0,s.kt)("h2",{id:"\u5e38\u89c4\u64cd\u4f5c"},"\u5e38\u89c4\u64cd\u4f5c"),(0,s.kt)("h3",{id:"\u5e38\u7528\u67e5\u8be2\u547d\u4ee4"},"\u5e38\u7528\u67e5\u8be2\u547d\u4ee4"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"use bjgsbp20200828\n\nSELECT * FROM GPSContDataH3  WHERE timestamp_column >= toDateTime('2023-01-01 00:00:00') AND timestamp_column < toDateTime('2023-01-02 00:00:00');\n\n\nSELECT * FROM GPSContDataH3  WHERE timestamp_column >= toDateTime('2022-12-30 00:00:00') AND timestamp_column < toDateTime('2022-12-31 00:00:00');\n\nSELECT * FROM GPSContDataH3 WHERE unix_time= toDateTime('2023-01-01 00:00:00', 'Asia/Istanbul')\n\n\nselect * from GPSContDataH3 order by unix_time desc limit 1 \\G\n\n\ntmux new -s  datazip\ntmux  attach -t \n\n121.36.244.174\n123.60.41.178\n\ntar zcvf  202307-202311.tar.gz ./202307new ./202308 ./202309 ./202310  ./202311\n\n\nnohup bash select.sh 1 > select.log 2>&1 &\nnohup bash select.sh 2 > select2.log 2>&1 &\n")),(0,s.kt)("h3",{id:"\u67e5\u770b\u6bcf\u4e2a\u5e93\u7684\u5927\u5c0f"},"\u67e5\u770b\u6bcf\u4e2a\u5e93\u7684\u5927\u5c0f"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"SELECT\n    database,\n    formatReadableSize(sum(data_compressed_bytes)) AS total_compressed_data_size\nFROM system.parts\nGROUP BY database\nORDER BY total_compressed_data_size DESC;\n")),(0,s.kt)("p",null,"select count(1) from bshdq20220123.StressData_local WHERE unix_time<toDateTime('2023-01-01 00:00:00', 'Asia/Istanbul')"),(0,s.kt)("h3",{id:"\u67e5\u770b\u5f53\u524d\u6570\u636e\u5e93\u6267\u884c\u7684\u8bed\u53e5"},"\u67e5\u770b\u5f53\u524d\u6570\u636e\u5e93\u6267\u884c\u7684\u8bed\u53e5"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"##delete\nselect * from system.query_log where type='Delete'  order by event_time desc limit 10 \\G;\n\n##alert -> delete\nselect * from system.query_log where query_kind='Alter'  order by event_time desc limit 10 \\G;\n")),(0,s.kt)("h3",{id:"\u67e5\u8be2\u5355\u4e2a\u5e93\u7684\u5927\u5c0f"},"\u67e5\u8be2\u5355\u4e2a\u5e93\u7684\u5927\u5c0f"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n        table AS `\u8868\u540d`,\n        sum(rows) AS `\u603b\u884c\u6570`,\n        formatReadableSize(sum(data_uncompressed_bytes)) AS `\u539f\u59cb\u5927\u5c0f`,\n        formatReadableSize(sum(data_compressed_bytes)) AS `\u538b\u7f29\u5927\u5c0f`,\n        round(\n                (\n                        sum(data_compressed_bytes) / sum(data_uncompressed_bytes)\n                ) * 100,\n                0\n        ) AS `\u538b\u7f29\u7387`\nFROM\n        system.parts\nWHERE\n        database = 'wzskdq20211109' -- table IN ('temp_1')\nGROUP BY\n        table;\n        \n")),(0,s.kt)("h3",{id:"\u67e5\u8be2\u591a\u4e2a\u5e93\u7684\u5927\u5c0f"},"\u67e5\u8be2\u591a\u4e2a\u5e93\u7684\u5927\u5c0f"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"        \nSELECT\n        database,\n        formatReadableSize (sum(bytes)) AS bytes_size,\n        formatReadableSize (sum(primary_key_bytes_in_memory)) AS primary_keys_size,\n        formatReadableSize (sum(data_uncompressed_bytes)) AS `\u539f\u59cb\u5927\u5c0f`,\n        formatReadableSize (sum(data_compressed_bytes)) AS `\u538b\u7f29\u5927\u5c0f`,\n        round(\n                (\n                        sum(data_compressed_bytes) / sum(data_uncompressed_bytes)\n                ) * 100,\n                0\n        ) AS `\u538b\u7f29\u7387`\nFROM\n        system.parts\nWHERE\n        1 = 1 AND database in ('ymgdq20230712')\nGROUP BY\n        database\nORDER BY\n        bytes_size DESC\nLIMIT\n        10;     \n")),(0,s.kt)("h3",{id:"\u67e5\u770b\u4e00\u4e2a\u5e93\u4e2d\u6240\u6709\u7684\u8868\u5927\u5c0f"},"\u67e5\u770b\u4e00\u4e2a\u5e93\u4e2d\u6240\u6709\u7684\u8868\u5927\u5c0f"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"SELECT \n    sum(rows) AS `\u603b\u884c\u6570`,\n    formatReadableSize(sum(data_uncompressed_bytes)) AS `\u539f\u59cb\u5927\u5c0f`,\n    formatReadableSize(sum(data_compressed_bytes)) AS `\u538b\u7f29\u5927\u5c0f`,\n    round((sum(data_compressed_bytes) / sum(data_uncompressed_bytes)) * 100, 0) AS `\u538b\u7f29\u7387`,\n    `table` AS `\u8868\u540d`\nFROM system.parts where database = 'bzhhdq20220906' group by `table`\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"#\u8fc7\u6ee4\u6309\u7167\u5e74\u4efd - partition\nclickhouse-client --query=\"SELECT  partition,path,database  FROM system.parts where database = 'tzgjq20211109' and \\`table\\`= 'DistanceContData_local' and active and partition < '202301' ;\"\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT  partition,path,table,database  FROM system.parts where database = 'jnhhdegldq20200422' and `table`= 'TopInfoNodeData_local' and active ;\n\nroot@clickhouse04:~# clickhouse-client --query=\"SELECT  partition  FROM system.parts where database = 'jnhhdegldq20200422' and \\`table\\`= 'StressData_materialized_local' and active  and  partition < '202305' and partition > '202301' ;\"\n202302\n202302\n202303\n202303\n202303\n202304\n202304\n\n")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image-20231117202442355",src:a(29091).Z,width:"1228",height:"339"})),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"alter table system.query_log drop partition '202311';\n\n#\u83b7\u53d6\u4e0a\u9762\u6267\u884c\u5b8c\u7684query_id\nselect * from system.query_log WHERE query_id='be797ab2-7363-4161-9209-c592ca359ea7' \\G;   #\u83b7\u53d6\u67e5\u8be2\u652f\u6301\u54ea\u4e9b\u5b57\u6bb5\n\nSELECT  partition,path,table,database  FROM system.parts where database = 'system' and `table`= 'query_log' and active ;\n")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image-20231117202048652",src:a(8190).Z,width:"1124",height:"151"})),(0,s.kt)("p",null,"SELECT DISTINCT partition from  (SELECT  partition  FROM system.parts where database = 'jnhhdegldq20200422' and ",(0,s.kt)("inlineCode",{parentName:"p"},"table"),"= 'StressData_materialized_local' and active  and partition > '202301')  ORDER BY partition;"),(0,s.kt)("h3",{id:"clickhouse\u5f02\u6b65\u5904\u7406\u8bb0\u5f55"},"clickhouse\u5f02\u6b65\u5904\u7406\u8bb0\u5f55"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"select * from system.mutations limit 1\n")),(0,s.kt)("h3",{id:"\u67e5\u770b\u78c1\u76d8"},"\u67e5\u770b\u78c1\u76d8"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n        name,\n        path,\n        formatReadableSize (free_space) AS free,\n        formatReadableSize (total_space) AS total,\n        formatReadableSize (keep_free_space) AS reserved\nFROM\n        system.disks\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"ekc04 :) select * from system.disks;\n\nSELECT *\nFROM system.disks\n\nQuery id: be502040-6263-4479-b6d4-64ca055ccf89\n\n\u250c\u2500name\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500path\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500free_space\u2500\u252c\u2500\u2500\u2500total_space\u2500\u252c\u2500unreserved_space\u2500\u252c\u2500keep_free_space\u2500\u252c\u2500type\u2500\u2500\u252c\u2500is_encrypted\u2500\u252c\u2500is_read_only\u2500\u252c\u2500is_write_once\u2500\u252c\u2500is_remote\u2500\u252c\u2500is_broken\u2500\u252c\u2500cache_path\u2500\u2510\n\u2502 cloud_hdd_data2 \u2502 /data2/container/clickhouse/      \u2502 469926281216 \u2502 1056758804480 \u2502     469926281216 \u2502               0 \u2502 local \u2502            0 \u2502            0 \u2502             0 \u2502         0 \u2502         0 \u2502            \u2502\n\u2502 cloud_hdd_data3 \u2502 /data3/container/clickhouse/      \u2502      1548288 \u2502 2113652535296 \u2502          1548288 \u2502               0 \u2502 local \u2502            0 \u2502            0 \u2502             0 \u2502         0 \u2502         0 \u2502            \u2502\n\u2502 cloud_hdd_data4 \u2502 /data4/container/clickhouse/      \u2502 519495372800 \u2502 3170543869952 \u2502     519495372800 \u2502               0 \u2502 local \u2502            0 \u2502            0 \u2502             0 \u2502         0 \u2502         0 \u2502            \u2502\n\u2502 default         \u2502 /data1/container/clickhouse/data/ \u2502  32945684480 \u2502  211243667456 \u2502      32945684480 \u2502               0 \u2502 local \u2502            0 \u2502            0 \u2502             0 \u2502         0 \u2502         0 \u2502            \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n4 rows in set. Elapsed: 0.002 sec. \n")),(0,s.kt)("h3",{id:"\u67e5\u770b\u5b58\u50a8\u7b56\u7565"},"\u67e5\u770b\u5b58\u50a8\u7b56\u7565"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"ekc04 :) select * from system.storage_policies;\n\nSELECT *\nFROM system.storage_policies\n\nQuery id: 517044a2-d7f0-4e4d-bc1c-52ce3e80f161\n\n\u250c\u2500policy_name\u2500\u252c\u2500volume_name\u2500\u252c\u2500volume_priority\u2500\u252c\u2500disks\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500volume_type\u2500\u252c\u2500max_data_part_size\u2500\u252c\u2500move_factor\u2500\u252c\u2500prefer_not_to_merge\u2500\u252c\u2500perform_ttl_move_on_insert\u2500\u252c\u2500load_balancing\u2500\u2510\n\u2502 default     \u2502 default     \u2502               1 \u2502 ['default']         \u2502 JBOD        \u2502                  0 \u2502         0.1 \u2502                   0 \u2502                          1 \u2502 ROUND_ROBIN    \u2502\n\u2502 default     \u2502 data2       \u2502               2 \u2502 ['cloud_hdd_data2'] \u2502 JBOD        \u2502                  0 \u2502         0.1 \u2502                   0 \u2502                          1 \u2502 ROUND_ROBIN    \u2502\n\u2502 default     \u2502 data4       \u2502               3 \u2502 ['cloud_hdd_data4'] \u2502 JBOD        \u2502                  0 \u2502         0.1 \u2502                   0 \u2502                          1 \u2502 ROUND_ROBIN    \u2502\n\u2502 default     \u2502 data3       \u2502               4 \u2502 ['cloud_hdd_data3'] \u2502 JBOD        \u2502                  0 \u2502         0.1 \u2502                   0 \u2502                          1 \u2502 ROUND_ROBIN    \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/wshenjin/p/14583918.html"},"clickhouse\u7684\u591a\u8def\u5f84\u5b58\u50a8\u7b56\u7565 - wshenJin - \u535a\u5ba2\u56ed (cnblogs.com)")),(0,s.kt)("h4",{id:"\u521b\u5efa\u6570\u636e\u5e93"},"\u521b\u5efa\u6570\u636e\u5e93"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"\nCREATE TABLE iteshell.test_local on cluster cluster_test ( \n    CounterID UInt32,  \n    StartDate Date,  \n    Sign Int8,  \n    IsNew UInt8,  \n    VisitID UInt64,  \n    UserID UInt64,  \n    StartTime DateTime\n) ENGINE = ReplicatedMergeTree('/clickhouse/tables/{shard}/iteshell.test_local', '{replica}') \nPARTITION BY toYYYYMM(StartDate) \nORDER BY (CounterID, StartDate, intHash32(UserID), VisitID) \nSAMPLE BY intHash32(UserID) \nSETTINGS index_granularity = 8192\n\n\n\n\ncreate table iteshell.test_all on cluster cluster_test  as iteshell.test_local \nENGINE = Distributed(cluster_test,iteshell,test_local,rand())\n\n\n#\u63d2\u5165\u6570\u636e\ninsert into iteshell.test_local values(1, '2023-12-20 00:11:22', 1, 1, 1, 11, toDateTime('2021-07-08 00:11:22'));\ninsert into iteshell.test_all values(1, '2023-12-02 00:11:22', 1, 1, 1, 11, toDateTime('2021-07-08 00:11:22'));\ninsert into iteshell.test_all values(1, '2023-12-03 00:11:22', 1, 1, 1, 11, toDateTime('2021-07-08 00:11:22'));\ninsert into iteshell.test_all values(1, '2023-12-05 00:11:22', 1, 1, 1, 11, toDateTime('2021-07-08 00:11:22'));\ninsert into iteshell.test_all values(1, '2023-12-06 00:11:22', 1, 1, 1, 11, toDateTime('2021-07-08 00:11:22'));\ninsert into iteshell.test_all values(1, '2023-12-08 00:11:22', 1, 1, 1, 11, toDateTime('2021-07-08 00:11:22'));\n")),(0,s.kt)("h3",{id:"clickhouse\u51b7\u70ed\u5206\u79bb"},"clickhouse\u51b7\u70ed\u5206\u79bb"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://cloud.tencent.com/developer/article/2187885"},"\u6280\u672f\u5206\u4eab | ClickHouse \u51b7\u70ed\u5b58\u50a8\u5206\u79bb\u65b9\u6848\u7ebf\u4e0a\u5b9e\u8df5-\u817e\u8baf\u4e91\u5f00\u53d1\u8005\u793e\u533a-\u817e\u8baf\u4e91 (tencent.com)")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/wshenjin/p/14583918.html"},"clickhouse\u7684\u591a\u8def\u5f84\u5b58\u50a8\u7b56\u7565 - wshenJin - \u535a\u5ba2\u56ed (cnblogs.com)")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://blog.csdn.net/weixin_45320660/article/details/114692892"},"ClickHouse\u591a\u5377\u5b58\u50a8\u7b56\u7565_clickhouse storage_policy-CSDN\u535a\u5ba2")),(0,s.kt)("h3",{id:"apk\u4fee\u6539\u6e90"},"apk\u4fee\u6539\u6e90"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories\n\napk update  #\u66f4\u65b0\napk add  busybox-extras  #\u5b89\u88c5telnet\napk add \u5b89\u88c5\u8f6f\u4ef6\n\napk del \u5220\u9664\u8f6f\u4ef6\n\napk upgrade \u5347\u7ea7\u8f6f\u4ef6\n\napk info \u5217\u51fa\u5df2\u5b89\u88c5\u7684\u8f6f\u4ef6\u4fe1\u606f\n\napk search \u901a\u8fc7\u540d\u5b57\u6216\u63cf\u8ff0\u641c\u7d22\u6709\u6ca1\u6709\u6539\u8f6f\u4ef6\n\napk fetch  \u4ece\u4ed3\u5e93\u4e0b\u8f7d\u8f6f\u4ef6\u5230\u672c\u5730\u76ee\u5f55\uff0c\u4e0b\u8f7d\u4e0b\u6765\u7684\u662f.apk\u5305\n")),(0,s.kt)("p",null,"consul snapshot save --http-addr=",(0,s.kt)("a",{parentName:"p",href:"http://10.12.142.216:8500"},"http://10.12.142.216:8500")," -token=b3a9bca3-6e8e-9678-ea35-ccb8fb272d42 consul",(0,s.kt)("em",{parentName:"p"},"state"),"$ts.snap"))}u.isMDXComponent=!0},8190:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20231117202048652-9c8b93a7a87c51e94b1490a9b6f51df5.png"},29091:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20231117202442355-a325f0d74e6cc115ae0daf1491bbd96d.png"}}]);