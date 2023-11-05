"use strict";(self.webpackChunkbookshell=self.webpackChunkbookshell||[]).push([[7769],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=a.createContext({}),u=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},s=function(e){var n=u(e.components);return a.createElement(i.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=u(t),m=o,f=d["".concat(i,".").concat(m)]||d[m]||c[m]||l;return t?a.createElement(f,r(r({ref:n},s),{},{components:t})):a.createElement(f,r({ref:n},s))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,r=new Array(l);r[0]=m;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p[d]="string"==typeof e?e:o,r[1]=p;for(var u=2;u<l;u++)r[u]=t[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},56789:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var a=t(87462),o=(t(67294),t(3905));const l={},r=void 0,p={unversionedId:"Kubernetes/affinity",id:"Kubernetes/affinity",title:"affinity",description:"affinity",source:"@site/docs/Kubernetes/2.affinity.md",sourceDirName:"Kubernetes",slug:"/Kubernetes/affinity",permalink:"/en/docs/Kubernetes/affinity",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Kubernetes/2.affinity.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"Kubernetes",previous:{title:"\u65e5\u5e38\u64cd\u4f5c\u547d\u540d",permalink:"/en/docs/Kubernetes/\u65e5\u5e38\u64cd\u4f5c\u547d\u540d"},next:{title:"helm",permalink:"/en/docs/Kubernetes/helm"}},i={},u=[{value:"affinity",id:"affinity",level:2},{value:"\u6848\u4f8b\u8bb2\u89e3",id:"\u6848\u4f8b\u8bb2\u89e3",level:2},{value:"food-match",id:"food-match",level:2},{value:"\u4eb2\u548c\u548c\u53cd\u4eb2\u548c\u7684\u6848\u4f8b",id:"\u4eb2\u548c\u548c\u53cd\u4eb2\u548c\u7684\u6848\u4f8b",level:2},{value:"\u4fee\u6539\u955c\u50cf\u7684\u65b9\u5f0f",id:"\u4fee\u6539\u955c\u50cf\u7684\u65b9\u5f0f",level:2},{value:"\u56de\u6eda\u7b56\u7565",id:"\u56de\u6eda\u7b56\u7565",level:2}],s={toc:u},d="wrapper";function c(e){let{components:n,...t}=e;return(0,o.kt)(d,(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"affinity"},"affinity"),(0,o.kt)("p",null,"\u5b9e\u73b0\u5bf9Pod\u5747\u8861\u7684\u8c03\u5ea6\u5230\u67d0\u4e9b\u8282\u70b9"),(0,o.kt)("p",null,"\u9700\u8981\u5bf9\u8282\u70b9\u6dfb\u52a0\u6c61\u70b9"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'  template:\n    metadata:\n      creationTimestamp: null\n      labels:\n        app: topo-dep\n\n# \u8f6f\u6027\u8981\u6c42\n# \u5982\u679c\u8282\u70b9\u4e0a\u7684pod\u6807\u7b7e\u5b58\u5728\u6ee1\u8db3app=topo-dep\uff0c\u4e5f\u53ef\u4ee5\u90e8\u7f72\u5230\u8282\u70b9\u4e0a\uff0c\u5c3d\u53ef\u80fd\u5148\u90e8\u7f72\u5230\u5176\u5b83\u8282\u70b9\uff0c\u5982\u679c\u6ca1\u6709\u6ee1\u8db3\u4e5f\u53ef\u4ee5\u90e8\u7f72\u5230\u6b64\u8282\u70b9\n    spec:\n      affinity:                  \n        podAntiAffinity:             #pod\u53cd\u4eb2\u548c\n          preferredDuringSchedulingIgnoredDuringExecution:\n          - weight: 100              #\u6839\u636e\u6743\u91cd\u5206\u914d\n            podAffinityTerm:\n              labelSelector:\n                matchExpressions:\n                - key: "app"        #\u5bf9\u4e8eapp=topo-dep\u7684pod\u5c3d\u91cf\u4e0d\u8c03\u5ea6\u5230\u8be5\u8282\u70b9\n                  operator: In\n                  values: \n                  - topo-dep\n              topologyKey: "kubernetes.io/hostname"\n')),(0,o.kt)("p",null,"\u4ee5\u4e0a\u662f\u8f6f\u6027\u8981\u6c42\uff0c\u53ef\u4ee5\u914d\u7f6e\u786c\u6027\u8981\u6c42"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'# \u786c\u6027\u8981\u6c42\n# \u5982\u679c\u8282\u70b9\u4e0a\u7684pod\u6807\u7b7e\u5b58\u5728\u6ee1\u8db3app=nginx\uff0c\u5219\u4e0d\u80fd\u90e8\u7f72\u5230\u8282\u70b9\u4e0a\n    spec:\n      affinity:\n        podAntiAffinity:\n          requiredDuringSchedulingIgnoredDuringExecution:\n          - labelSelector:\n              matchExpressions:\n              - key: app\n                operator: In\n                values:\n                - nginx\n            topologyKey: "kubernetes.io/hostname"\n')),(0,o.kt)("h2",{id:"\u6848\u4f8b\u8bb2\u89e3"},"\u6848\u4f8b\u8bb2\u89e3"),(0,o.kt)("h2",{id:"food-match"},"food-match"),(0,o.kt)("p",null,"\u5148\u7ed9\u670d\u52a1\u5668\u6dfb\u52a0lable\nkubec label nodes sanjiu-uat-0001 node_app=sanjiu\nkubec label nodes sanjiu-uat-0002 node_app=sanjiu\nkubec label nodes sanjiu-uat-0003 node_app=sanjiu"),(0,o.kt)("p",null,"\u9996\u5148\u9700\u8981\u7ed9\u4e1a\u52a1\u5728\u90e8\u7f72\u7684\u65f6\u5019\u6dfb\u52a0label, \u6bd4\u5982\u7ed9deployment\u6587\u4ef6\u4e2d \u6dfb\u52a0 app=food-match"),(0,o.kt)("p",null,"1.\u96c6\u7fa4\u65b0\u589e\u4e09\u4e2a\u8282\u70b9,sanjiu-uat-0001,sanjiu-uat-0002,sanjiu-uat-0003\uff0c\u8fd9\u4e09\u4e2a\u8282\u70b9\u4e0d\u80fd\u8ba9\u5176\u4ed6\u670d\u52a1\u8c03\u5ea6\u8fc7\u6765\n\u65b9\u6cd5\uff1a \u6dfb\u52a0\u6c61\u70b9\nkubectl taint nodes sanjiu-uat-0001 name=sanjiu:NoSchedule\nkubectl taint nodes sanjiu-uat-0002 name=sanjiu:NoSchedule\nkubectl taint nodes sanjiu-uat-0003 name=sanjiu:NoSchedule"),(0,o.kt)("p",null,"deploy\u6587\u4ef6\u53c2\u8003\u5982\u4e0b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'      tolerations:   #\u5bb9\u5fcd\u6c61\u70b9\n      - key: name\n        value: sanjiu\n        effect: NoSchedule  \n      nodeSelector:  #\u9009\u62e9node\u5e26\u6807\u7b7e\u7684\u8282\u70b9\n        node_app: sanjiu\n      affinity:\n        podAntiAffinity: #pod\u53cd\u4eb2\u548c\n          preferredDuringSchedulingIgnoredDuringExecution:\n          - weight: 100\n            podAffinityTerm:\n              labelSelector:\n                matchExpressions:\n                - key: "app"      #\u5bf9\u4e8eapp=food-match\u8fdb\u884c\u53cd\u4eb2\u548c\uff0c\u5c31\u662f\u4e00\u4e2a\u8282\u70b9\u5c3d\u91cf\u4e00\u4e2apod\n                  operator: In\n                  values: \n                  - food-match\n              topologyKey: "kubernetes.io/hostname"\n')),(0,o.kt)("p",null,"2.\u5148\u8c03\u5ea6\u5230sanjiu-uat-0001,sanjiu-uat-0002\uff0c\u5404\u4e00\u4e2aPod\uff0c\u4f46\u662f\u4e0d\u80fd\u8c03\u5ea6\u5230sanjiu-uat-0003"),(0,o.kt)("p",null,"\u65b9\u6cd5:\n\u5728sanjiu-uat-0003\u6267\u884c\nkubec label nodes sanjiu-uat-0003 node_app=sanjiu-"),(0,o.kt)("p",null,"deploy\u6587\u4ef6\u53c2\u8003\u5982\u4e0b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'      tolerations:\n      - key: name\n        value: sanjiu\n        effect: NoSchedule  \n      nodeSelector:\n        node_app: sanjiu\n      affinity:\n        podAntiAffinity:\n          preferredDuringSchedulingIgnoredDuringExecution:\n          - weight: 100\n            podAffinityTerm:\n              labelSelector:\n                matchExpressions:\n                - key: "app"\n                  operator: In\n                  values: \n                  - food-match\n              topologyKey: "kubernetes.io/hostname"\n')),(0,o.kt)("p",null,"3.\u8c03\u5ea6\u5230sanjiu-uat-0001,sanjiu-uat-0002\uff0csanjiu-uat-0003\u5404\u4e00\u4e2aPod\n\u65b9\u6cd5:\n\u5728sanjiu-uat-0003\u6267\u884c\nkubec label nodes sanjiu-uat-0003 node_app=sanjiu-"),(0,o.kt)("p",null,"deploy\u6587\u4ef6\u53c2\u8003\u5982\u4e0b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'      tolerations:\n      - key: name\n        value: sanjiu\n        effect: NoSchedule  \n      nodeSelector:\n        node_app: sanjiu\n      affinity:\n        podAntiAffinity:\n          preferredDuringSchedulingIgnoredDuringExecution:\n          - weight: 100\n            podAffinityTerm:\n              labelSelector:\n                matchExpressions:\n                - key: "app"\n                  operator: In\n                  values: \n                  - food-match\n              topologyKey: "kubernetes.io/hostname"\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  #io.rancher.scheduler.global: 'true'\n  #io.rancher.scheduler.affinity:host_label: node=foodmatch    \n  \n")),(0,o.kt)("h2",{id:"\u4eb2\u548c\u548c\u53cd\u4eb2\u548c\u7684\u6848\u4f8b"},"\u4eb2\u548c\u548c\u53cd\u4eb2\u548c\u7684\u6848\u4f8b"),(0,o.kt)("p",null,"ai-api/ai-admin\t  "),(0,o.kt)("p",null,"\u5747\u8861\u7684\u8c03\u5ea6\u6bcf\u4e2a\u8282\u70b9-pod\u53cd\u4eb2\u548c(\u8f6f)\t"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"  \n    spec:    \n      nodeSelector:\n        node_app: sanjiu\n      tolerations:\n      - key: name\n        value: sanjiu\n        effect: NoSchedule \n      affinity:\n        podAntiAffinity:\n          preferredDuringSchedulingIgnoredDuringExecution:\n          - weight: 100\n            podAffinityTerm:\n              labelSelector:\n                matchExpressions:\n                - key: app\n                  operator: In\n                  values: \n                  - health-cloud-ai-activity-api\n              topologyKey: kubernetes.io/hostname\n              \n")),(0,o.kt)("p",null,"\u5747\u8861\u7684\u8c03\u5ea6\u6bcf\u4e2a\u8282\u70b9-pod\u53cd\u4eb2\u548c(\u786c-\u8282\u70b9\u4e0a\u7684pod\u6807\u7b7e\u5b58\u5728\u6ee1\u8db3app=health-cloud-ai-activity-api\uff0c\u5219\u4e0d\u80fd\u90e8\u7f72\u5230\u8282\u70b9\u4e0a)\n\u90e8\u7f72\u5b9e\u4f8b\u6570\u9700\u8981\u5c0f\u4e8e\u5339\u914d\u6c61\u70b9\u7684\u56fa\u5b9a\u8282\u70b9\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},' spec:\n      nodeSelector:\n        node_app: sanjiu\n      tolerations:\n      - key: name\n        value: sanjiu\n        effect: NoSchedule\n      affinity:\n        podAntiAffinity:\n          requiredDuringSchedulingIgnoredDuringExecution:\n          - labelSelector:\n              matchExpressions:\n              - key: app\n                operator: In\n                values: \n                - health-cloud-ai-activity-api\n            topologyKey: "kubernetes.io/hostname"\n')),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u5982\u679cpod\u5b9e\u4f8b\u6570\u8ddf\u9700\u8981\u7ed1\u5b9a\u7684\u8282\u70b9\u6570\u76f8\u540c\u7684\u60c5\u51b5\u4e0b\uff0c\u7b2c\u4e00\u6b21\u90e8\u7f72\u6ca1\u6709\u95ee\u9898\uff0c\u5982\u679c\u9700\u8981\u66f4\u65b0\u5347\u7ea7\uff0c\u90a3\u4e48\u9700\u8981\u6709\u591a\u4f59\u5339\u914d\u7684\u8282\u70b9\u6570\uff0c\u5426\u5219\u4f1apending, \u56e0\u4e3a\n\u6eda\u52a8\u66f4\u65b0\u4e0d\u4f1a\u9996\u6b21\u5220\u9664\u8282\u70b9\uff0c\u6240\u4ee5\u4f1a\u989d\u5916\u7684\u7b5b\u9009\u8d44\u6e90\uff0c\u8fd9\u79cd\u60c5\u51b5\u4e0b\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539\u66f4\u65b0\u7b56\u7565\u6765\u5b9e\u73b0\u3002")),(0,o.kt)("p",null,"\u4e0b\u9762\u8fd9\u4e2a\u4f8b\u5b50\uff0c\u5c31\u662f\u4fdd\u8bc1\u6253\u4e86\u6c61\u70b9\u7684\u8282\u70b9\u80fd\u591f\u6309\u7167\u671f\u671b\u7684\u503c\u53bb\u90e8\u7f72\u4e00\u4e2a\u8282\u70b9\uff0c\u66f4\u65b0\u7684\u65f6\u5019\uff0c\u4f1a\u5148\u5220\u966430%\u7684pod\uff0c\u7136\u540e\u9010\u4e00\u66f4\u65b0"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'\n strategy:\n   type: RollingUpdate\n   rollingUpdate:\n     maxSurge: 0\n     maxUnavailable: 30%\n selector:\n   matchLabels:\n     app: topo-dep\n template:\n   metadata:\n     creationTimestamp: null\n     labels:\n       app: topo-dep\n   spec:\n     nodeSelector:\n       node_app: sanjiu\n     tolerations:\n     - key: name\n       value: sanjiu\n       effect: NoSchedule\n     affinity:\n       podAntiAffinity:\n         requiredDuringSchedulingIgnoredDuringExecution:\n         - labelSelector:\n             matchExpressions:\n             - key: app\n               operator: In\n               values: \n               - topo-dep\n           topologyKey: "kubernetes.io/hostname"\n')),(0,o.kt)("p",null,"maxSurge\uff1a  \u6307\u5b9a\u5347\u7ea7\u671f\u95f4\u5b58\u5728\u7684\u603bPod\u5bf9\u8c61\u6570\u91cf\u6700\u591a\u4ee5\u8d85\u51fa\u671f\u671b\u503c\u7684\u4e2a\u6570\uff0c\u5176\u503c\u53ef\u4ee5\u4e3a0\u6216\u8005\u6b63\u6574\u6570\uff0c\u4e5f\u53ef\u4ee5\u662f\u4e00\u4e2a\u671f\u671b\u503c\u7684\u767e\u5206\u6bd4\uff1a\u4f8b\u5982\u5982\u679c\u671f\u671b\u503c\u662f3\uff0c\u5f53\u524d\u7684\u5c5e\u6027\u503c\u4e3a1\uff0c\u5219\u8868\u793aPod\u5bf9\u8c61\u7684\u603b\u6570\u4e0d\u80fd\u8d85\u8fc74\u4e2a\u3002\nmaxUnavailable\uff1a\u5347\u7ea7\u671f\u95f4\u6b63\u5e38\u53ef\u7528\u7684Pod\u526f\u672c\u6570\uff08\u5305\u62ec\u65b0\u65e7\u7248\u672c\uff09\u6700\u591a\u4e0d\u80fd\u4f4e\u4e8e\u671f\u671b\u7684\u4e2a\u6570\u3001\u5176\u503c\u53ef\u4ee5\u662f0\u6216\u8005\u6b63\u6574\u6570\u3002\u4e5f\u53ef\u4ee5\u662f\u4e00\u4e2a\u671f\u671b\u503c\u7684\u767e\u5206\u6bd4\uff0c\u9ed8\u8ba4\u503c\u4e3a1\uff1b\u8be5\u503c\u610f\u5473\u7740\u5982\u679c\u671f\u671b\u503c\u662f3\uff0c\u90a3\u4e48\u5728\u5347\u7ea7\u671f\u95f4\u81f3\u5c11\u8981\u6709\u4e24\u4e2aPod\u5bf9\u8c61\u5904\u4e8e\u6b63\u5e38\u63d0\u4f9b\u670d\u52a1\u7684\u72b6\u6001\u3002"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"maxSurge\u548cmaxUnavailable\u7684\u6570\u91cf\u4e0d\u80fd\u540c\u65f6\u4e3a0\uff0c\u5426\u5219Pod\u5bf9\u8c61\u7684\u590d\u672c\u6570\u91cf\u5728\u7b26\u5408\u7528\u6237\u671f\u671b\u7684\u6570\u91cf\u540e\u65e0\u6cd5\u505a\u51fa\u5408\u7406\u53d8\u52a8\u4ee5\u8fdb\u884c\u6eda\u52a8\u66f4\u65b0\u64cd\u4f5c\u3002")),(0,o.kt)("p",null,"\u2003\u914d\u7f6e\u65f6\uff0c\u7528\u6237\u8fd8\u53ef\u4ee5\u4f7f\u7528 Deployment\u63a7\u5236\u5668\u7684 spec.min.Ready.Seconds\u5c5e\u6027\u6765\u63a7\u5236\u5e94\u7528\u5347\u7ea7\u7684\u901f\u5ea6\u3002\u65b0\u65e7\u66f4\u66ff\u8fc7\u7a0b\u4e2d\uff0c\u65b0\u521b\u5efa\u7684Pod\u5bf9\u8c61\u4e00\u65e6\u6210\u529f\u54cd\u5e94\u5c31\u7eea\u63a2\u6d4b\u5373\u88ab\u89c6\u4f5c\u53ef\u7528\uff0c\u800c\u540e\u5373\u53ef\u7acb\u5373\u5f00\u59cb\u4e0b\u4e00\u8f6e\u7684\u66ff\u6362\u64cd\u4f5c\u3002\u800c spec.minReady.Seconds\u80fd\u591f\u5b9a\u4e49\u5728\u65b0\u7684Pod\u5bf9\u8c61\u521b\u5efa\u540e\u81f3\u5c11\u8981\u7b49\u5f85\u591a\u4e45\u624d\u4f1a\u5c06\u5176\u89c6\u4f5c\u5c31\u7eea\uff0c\u5728\u6b64\u671f\u95f4\uff0c\u66f4\u65b0\u64cd\u4f5c\u4f1a\u88ab\u963b\u585e\u3002\u56e0\u6b64\uff0c\u5b83\u53ef\u4ee5\u7528\u6765\u8ba9 Kubernetes\u5728\u6bcf\u6b21\u521b\u5efa\u51faPod\u8d44\u6e90\u540e\u90fd\u8981\u7b49\u4e0a\u4e00\u6bb5\u65f6\u957f\u540e\u518d\u5f00\u59cb\u4e0b\u4e00\u8f6e\u7684\u66f4\u66ff\uff0c\u8fd9\u4e2a\u65f6\u95f4\u957f\u5ea6\u7684\u7406\u60f3\u503c\u662f\u7b49\u5230Pod\u5bf9\u8c61\u4e2d\u7684\u5e94\u7528\u5df2\u7ecf\u53ef\u4ee5\u63a5\u53d7\u5e76\u5904\u7406\u8bf7\u6c42\u6d41\u91cf\u3002\u4e8b\u5b9e\u4e0a\uff0c\u4e00\u4e2a\u7cbe\u5fc3\u8bbe\u8ba1\u7684\u7b49\u5f85\u65f6\u957f\u548c\u5c31\u7eea\u6027\u63a2\u6d4b\u80fd\u8ba9 Kubernetes\u7cfb\u7edf\u89c4\u907f\u4e00\u90e8\u5206\u56e0\u7a0b\u5e8fBug\u800c\u5bfc\u81f4\u7684\u5347\u7ea7\u6545\u969c\u3002"),(0,o.kt)("h2",{id:"\u4fee\u6539\u955c\u50cf\u7684\u65b9\u5f0f"},"\u4fee\u6539\u955c\u50cf\u7684\u65b9\u5f0f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'[root@master nginx-demo]# kubectl patch deployments myapp-deployment -p \'{"spec":{"minReadySeconds":8}}\'\ndeployment.extensions/myapp-deployment patched (change)\n[root@master nginx-demo]# kubectl set image deployments myapp-deployment myapp=ikubernetes/myapp:v2\ndeployment.extensions/myapp-deployment image updated\n')),(0,o.kt)("p",null,"\u6eda\u52a8\u66f4\u65b0\u65f6\uff0c myapp-deploy\u63a7\u5236\u5668\u4f1a\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 ReplicaSe\u63a7\u5236\u5668\u5bf9\u8c61\u6765\u7ba1\u63a7\u65b0\u7248\n\u672c\u7684Pod\u5bf9\u8c61\uff0c\u5347\u7ea7\u5b8c\u6210\u540e\uff0c\u65e7\u7248\u672c\u7684 Replicase\u4f1a\u4fdd\u7559\u5728\u5386\u53f2\u8bb0\u5f55\u4e2d\uff0c\u4f46\u5176\u6b64\u524d\u7684\u7ba1\u63a7\nPod\u5bf9\u8c61\u5c06\u4f1a\u88ab\u5220\u9664\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"root@k8s-master:~# kubectl  get replicasets -l app=topo-dep\nNAME                  DESIRED   CURRENT   READY   AGE\ntopo-dep-54b55fb587   2         2         2       105m\ntopo-dep-6b66c5b6c7   0         0         0       103m\nroot@k8s-master:~#  kubectl get pods -l app=topo-dep\nNAME                        READY   STATUS    RESTARTS   AGE\ntopo-dep-54b55fb587-74vxp   1/1     Running   0          42m\ntopo-dep-54b55fb587-vc2cp   1/1     Running   0          42m\n")),(0,o.kt)("h2",{id:"\u56de\u6eda\u7b56\u7565"},"\u56de\u6eda\u7b56\u7565"),(0,o.kt)("p",null,"1\uff1akubectl rollout history \u68c0\u67e5Deployment\u90e8\u7f72\u5386\u53f2\n2\uff1akubectl rollout undo deployment/\u2026 --revision=2"),(0,o.kt)("p",null,"\u6682\u505c\u7b56\u7565\nkubectl roollout pause deployment/\u2026"))}c.isMDXComponent=!0}}]);