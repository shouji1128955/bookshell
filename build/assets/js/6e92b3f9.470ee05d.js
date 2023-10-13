"use strict";(self.webpackChunkbookshell=self.webpackChunkbookshell||[]).push([[3123],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),i=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=i(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=i(t),m=o,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return t?r.createElement(f,s(s({ref:n},c),{},{components:t})):r.createElement(f,s({ref:n},c))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[u]="string"==typeof e?e:o,s[1]=l;for(var i=2;i<a;i++)s[i]=t[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5932:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>i});var r=t(7462),o=(t(7294),t(3905));const a={},s="deploy\u76f8\u5173\u529f\u80fd\u80fd\u4ecb\u7ecd",l={unversionedId:"kubernetes/deployment",id:"kubernetes/deployment",title:"deploy\u76f8\u5173\u529f\u80fd\u80fd\u4ecb\u7ecd",description:"deploy\u90e8\u7f72\u5b89\u88c5",source:"@site/docs/kubernetes/deployment.md",sourceDirName:"kubernetes",slug:"/kubernetes/deployment",permalink:"/docs/kubernetes/deployment",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/kubernetes/deployment.md",tags:[],version:"current",lastUpdatedBy:"unknown",lastUpdatedAt:1693082926,formattedLastUpdatedAt:"Aug 26, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"affinity",permalink:"/docs/kubernetes/affinity"},next:{title:"Harbor",permalink:"/docs/middle/Harbor"}},p={},i=[{value:"deploy\u90e8\u7f72\u5b89\u88c5",id:"deploy\u90e8\u7f72\u5b89\u88c5",level:2},{value:"\u5b9e\u73b0k8s\u4e2d\u7684\u90e8\u7f72",id:"\u5b9e\u73b0k8s\u4e2d\u7684\u90e8\u7f72",level:3},{value:"deploy\u8d44\u6e90\u63a7\u5236\u5668\u7c7b\u522b",id:"deploy\u8d44\u6e90\u63a7\u5236\u5668\u7c7b\u522b",level:2},{value:"\u8d44\u6e90\u6e05\u5355\u7684\u8bb2\u89e3",id:"\u8d44\u6e90\u6e05\u5355\u7684\u8bb2\u89e3",level:3}],c={toc:i},u="wrapper";function d(e){let{components:n,...a}=e;return(0,o.kt)(u,(0,r.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deploy\u76f8\u5173\u529f\u80fd\u80fd\u4ecb\u7ecd"},"deploy\u76f8\u5173\u529f\u80fd\u80fd\u4ecb\u7ecd"),(0,o.kt)("h2",{id:"deploy\u90e8\u7f72\u5b89\u88c5"},"deploy\u90e8\u7f72\u5b89\u88c5"),(0,o.kt)("h3",{id:"\u5b9e\u73b0k8s\u4e2d\u7684\u90e8\u7f72"},"\u5b9e\u73b0k8s\u4e2d\u7684\u90e8\u7f72"),(0,o.kt)("h2",{id:"deploy\u8d44\u6e90\u63a7\u5236\u5668\u7c7b\u522b"},"deploy\u8d44\u6e90\u63a7\u5236\u5668\u7c7b\u522b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="/src/components/HelloCodeTitle.js"',title:'"/src/components/HelloCodeTitle.js"'},"function HelloCodeTitle(props) {\n  return <h1>Hello, {props.name}</h1>;\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: minimal-ingress\n  annotations:\n    nginx.ingress.kubernetes.io/rewrite-target: /\nspec:\n  rules:\n    - http:\n        paths:\n          - path: /testpath\n            pathType: Prefix\n            backend:\n              service:\n                name: test\n                port:\n                  number: 80\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps/v1\nkind: DaemonSet\nmetadata:\n name: node-exporter\n namespace: kube-mon\n labels:\n   app: node-exporter\nspec:\n selector:\n   matchLabels:\n     app: node-exporter\n template:\n   metadata:\n     labels:\n       app: node-exporter\n   spec:\n     hostPID: true\n     hostIPC: true\n     hostNetwork: true\n     nodeSelector:\n       kubernetes.io/os: linux\n     containers:\n       - name: node-exporter\n         image: prom/node-exporter:v1.3.1\n         args:\n           - --web.listen-address=$(HOSTIP):9100\n           - --path.procfs=/host/proc\n           - --path.sysfs=/host/sys\n           - --path.rootfs=/host/root\n           - --no-collector.hwmon # \u7981\u7528\u4e0d\u9700\u8981\u7684\u4e00\u4e9b\u91c7\u96c6\u5668\n           - --no-collector.nfs\n           - --no-collector.nfsd\n           - --no-collector.nvme\n           - --no-collector.dmi\n           - --no-collector.arp\n           - --collector.filesystem.ignored-mount-points=^/(dev|proc|sys|var/lib/containerd/.+|/var/lib/docker/.+|var/lib/kubelet/pods/.+)($|/)\n           - --collector.filesystem.ignored-fs-types=^(autofs|binfmt_misc|cgroup|configfs|debugfs|devpts|devtmpfs|fusectl|hugetlbfs|mqueue|overlay|proc|procfs|pstore|rpc_pipefs|securityfs|sysfs|tracefs)$\n         ports:\n           - containerPort: 9100\n         env:\n           - name: HOSTIP\n             valueFrom:\n               fieldRef:\n                 fieldPath: status.hostIP\n         resources:\n           requests:\n             cpu: 150m\n             memory: 180Mi\n           limits:\n             cpu: 150m\n             memory: 180Mi\n         securityContext:\n           runAsNonRoot: true\n           runAsUser: 65534\n         volumeMounts:\n           - name: proc\n             mountPath: /host/proc\n           - name: sys\n             mountPath: /host/sys\n           - name: root\n             mountPath: /host/root\n             mountPropagation: HostToContainer\n             readOnly: true\n     tolerations: # \u6dfb\u52a0\u5bb9\u5fcd\n       - operator: "Exists"\n     volumes:\n       - name: proc\n         hostPath:\n           path: /proc\n       - name: dev\n         hostPath:\n           path: /dev\n       - name: sys\n         hostPath:\n           path: /sys\n       - name: root\n         hostPath:\n           path: /\n')),(0,o.kt)("h3",{id:"\u8d44\u6e90\u6e05\u5355\u7684\u8bb2\u89e3"},"\u8d44\u6e90\u6e05\u5355\u7684\u8bb2\u89e3"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"demo",src:t(6922).Z,width:"1752",height:"848"})))}d.isMDXComponent=!0},6922:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/demo-d8013737ec34e2bdfb6492419d11039c.gif"}}]);