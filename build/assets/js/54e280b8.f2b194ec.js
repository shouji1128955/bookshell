"use strict";(self.webpackChunkbookshell=self.webpackChunkbookshell||[]).push([[5461],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),f=o,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||a;return t?n.createElement(m,i(i({ref:r},p),{},{components:t})):n.createElement(m,i({ref:r},p))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},1122:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=t(7462),o=(t(7294),t(3905));const a={},i=void 0,s={unversionedId:"Sre/\u4e2d\u95f4\u4ef6/Traefik",id:"Sre/\u4e2d\u95f4\u4ef6/Traefik",title:"Traefik",description:"\u53c2\u8003\u94fe\u63a5",source:"@site/docs/Sre/2-\u4e2d\u95f4\u4ef6/8.Traefik.md",sourceDirName:"Sre/2-\u4e2d\u95f4\u4ef6",slug:"/Sre/\u4e2d\u95f4\u4ef6/Traefik",permalink:"/docs/Sre/\u4e2d\u95f4\u4ef6/Traefik",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Sre/2-\u4e2d\u95f4\u4ef6/8.Traefik.md",tags:[],version:"current",lastUpdatedBy:"zhanglaiqiang",lastUpdatedAt:1697217709,formattedLastUpdatedAt:"2023\u5e7410\u670813\u65e5",sidebarPosition:8,frontMatter:{},sidebar:"SreMiddleSoft",previous:{title:"YAPI",permalink:"/docs/Sre/\u4e2d\u95f4\u4ef6/YAPI"},next:{title:"TongWeb",permalink:"/docs/Sre/\u4e2d\u95f4\u4ef6/TongWeb"}},c={},l=[{value:"1. \u521b\u5efatraefik\u5e94\u7528",id:"1-\u521b\u5efatraefik\u5e94\u7528",level:3},{value:"2.\u521b\u5efa server-demo \u5e94\u7528",id:"2\u521b\u5efa-server-demo-\u5e94\u7528",level:3}],p={toc:l},u="wrapper";function d(e){let{components:r,...t}=e;return(0,o.kt)(u,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u53c2\u8003\u94fe\u63a5\n",(0,o.kt)("a",{parentName:"p",href:"https://hexo.aufomm.com/2021/01/04/a-complete-guide-of-using-ssl-server-certificate-with-traefik-on-docker/"},"https://hexo.aufomm.com/2021/01/04/a-complete-guide-of-using-ssl-server-certificate-with-traefik-on-docker/")),(0,o.kt)("p",null,"curl -H Host:whoami.docker.localhost ",(0,o.kt)("a",{parentName:"p",href:"http://127.0.0.1"},"http://127.0.0.1"),"\n\u521b\u5efa\u914d\u7f6e\u6587\u4ef6 "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'[root@es003 config]# cat /apps/config/traefik.toml\n# traefik.toml\n\n[global]\n  checkNewVersion = true\n  sendAnonymousUsage = false\n\n[api]\n  dashboard = true\n  insecure=true\n  debug=true\n\n[entryPoints]\n  [entryPoints.http]\n    address = ":80"\n  [entryPoints.https]\n    address = ":443"\n\n[http.routers.service-demo]\n  rule = "Host(`zlqit.com`)"\n  service = "service-demo"\n#  [http.routers.service-demo.tls]  # \u5982\u679c\u9700\u8981\u4f7f\u7528TLS/SSL\uff0c\u8bf7\u6dfb\u52a0\u6b64\u90e8\u5206\u914d\u7f6e\n#    certResolver = "my-cert-resolver"\n\n\n[http.services.service-demo]\n  [http.services.service-demo.loadBalancer]\n    [[http.services.service-demo.loadBalancer.servers]]\n      url = "http://service-demo:80"\n\n\n\n[providers]\n  [providers.docker]\n    endpoint = "unix:///var/run/docker.sock"\n    swarmMode = true\n    exposedByDefault = false\n    network = "traefik-public"\n\n[certificatesResolvers.default]\n  [certificatesResolvers.default.acme]\n    email = "ilync@zlqit.com"\n    storage = "acme.json"\n    [certificatesResolvers.default.acme.httpChallenge]\n      entryPoint = "web"\n\n\n')),(0,o.kt)("h3",{id:"1-\u521b\u5efatraefik\u5e94\u7528"},"1. \u521b\u5efatraefik\u5e94\u7528"),(0,o.kt)("p",null,"\u521b\u5efa traefik"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"  docker service create   --name traefik \\\n  --constraint=node.role==manager  \\\n  --publish 80:80 --publish 8080:8080 --publish 443:443  \\\n  --mount type=bind,source=/var/run/docker.sock,target=/var/run/docker.sock \\\n  --mount type=bind,source=/apps/config/traefik.toml,target=/traefik.toml  \\\n  --network traefik-public   traefik:v2.3.4 \\\n  --configFile=/traefik.toml\n")),(0,o.kt)("h3",{id:"2\u521b\u5efa-server-demo-\u5e94\u7528"},"2.\u521b\u5efa server-demo \u5e94\u7528"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'docker service create \\\n  --name service-demo \\\n  --network traefik-public \\\n  --label "traefik.enable=true" \\\n  --label "traefik.http.services.service-demo.loadbalancer.server.port=80" \\\n  --label "traefik.http.routers.service-demo.entrypoints=http" \\\n  --label "traefik.http.routers.service-demo.rule=Host(\\"service-demo.zlqit.com\\")" \\\n  nginx:latest\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"}," //\u67e5\u770b\u65e5\u5fd7\u72b6\u6001(\u8fd9\u6761\u547d\u4ee4\u5fc5\u987b\u5728docker swarm leader\u7aef\u6267\u884c)\n //docker service logs -f service-demo\n")))}d.isMDXComponent=!0}}]);