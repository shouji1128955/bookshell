"use strict";(self.webpackChunkbookshell=self.webpackChunkbookshell||[]).push([[5461],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(t),f=a,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||o;return t?n.createElement(m,s(s({ref:r},p),{},{components:t})):n.createElement(m,s({ref:r},p))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=f;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},8445:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=t(7462),a=(t(7294),t(3905));const o={},s=void 0,i={unversionedId:"Sre/\u4e2d\u95f4\u4ef6/Traefik",id:"Sre/\u4e2d\u95f4\u4ef6/Traefik",title:"Traefik",description:"\u53c2\u8003\u94fe\u63a5",source:"@site/docs/Sre/2-\u4e2d\u95f4\u4ef6/8.Traefik.md",sourceDirName:"Sre/2-\u4e2d\u95f4\u4ef6",slug:"/Sre/\u4e2d\u95f4\u4ef6/Traefik",permalink:"/en/docs/Sre/\u4e2d\u95f4\u4ef6/Traefik",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Sre/2-\u4e2d\u95f4\u4ef6/8.Traefik.md",tags:[],version:"current",lastUpdatedBy:"AMiner",lastUpdatedAt:1719066785,formattedLastUpdatedAt:"Jun 22, 2024",sidebarPosition:8,frontMatter:{},sidebar:"SreMiddleSoft",previous:{title:"databasebackup-restore",permalink:"/en/docs/Sre/\u4e2d\u95f4\u4ef6/databasebackup-restore"},next:{title:"TongWeb",permalink:"/en/docs/Sre/\u4e2d\u95f4\u4ef6/TongWeb"}},c={},l=[{value:"1. \u521b\u5efatraefik\u5e94\u7528",id:"1-\u521b\u5efatraefik\u5e94\u7528",level:3},{value:"2.\u521b\u5efa server-demo \u5e94\u7528",id:"2\u521b\u5efa-server-demo-\u5e94\u7528",level:3}],p={toc:l},u="wrapper";function d(e){let{components:r,...t}=e;return(0,a.kt)(u,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u53c2\u8003\u94fe\u63a5\n",(0,a.kt)("a",{parentName:"p",href:"https://hexo.aufomm.com/2021/01/04/a-complete-guide-of-using-ssl-server-certificate-with-traefik-on-docker/"},"https://hexo.aufomm.com/2021/01/04/a-complete-guide-of-using-ssl-server-certificate-with-traefik-on-docker/")),(0,a.kt)("p",null,"curl -H Host:whoami.docker.localhost ",(0,a.kt)("a",{parentName:"p",href:"http://127.0.0.1"},"http://127.0.0.1"),"\n\u521b\u5efa\u914d\u7f6e\u6587\u4ef6 "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'[root@es003 config]# cat /apps/config/traefik.toml\n# traefik.toml\n\n[global]\n  checkNewVersion = true\n  sendAnonymousUsage = false\n\n[api]\n  dashboard = true\n  insecure=true\n  debug=true\n\n[entryPoints]\n  [entryPoints.http]\n    address = ":80"\n  [entryPoints.https]\n    address = ":443"\n\n[http.routers.service-demo]\n  rule = "Host(`zlqit.com`)"\n  service = "service-demo"\n#  [http.routers.service-demo.tls]  # \u5982\u679c\u9700\u8981\u4f7f\u7528TLS/SSL\uff0c\u8bf7\u6dfb\u52a0\u6b64\u90e8\u5206\u914d\u7f6e\n#    certResolver = "my-cert-resolver"\n\n\n[http.services.service-demo]\n  [http.services.service-demo.loadBalancer]\n    [[http.services.service-demo.loadBalancer.servers]]\n      url = "http://service-demo:80"\n\n\n\n[providers]\n  [providers.docker]\n    endpoint = "unix:///var/run/docker.sock"\n    swarmMode = true\n    exposedByDefault = false\n    network = "traefik-public"\n\n[certificatesResolvers.default]\n  [certificatesResolvers.default.acme]\n    email = "ilync@zlqit.com"\n    storage = "acme.json"\n    [certificatesResolvers.default.acme.httpChallenge]\n      entryPoint = "web"\n\n\n')),(0,a.kt)("h3",{id:"1-\u521b\u5efatraefik\u5e94\u7528"},"1. \u521b\u5efatraefik\u5e94\u7528"),(0,a.kt)("p",null,"\u521b\u5efa traefik"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"  docker service create   --name traefik \\\n  --constraint=node.role==manager  \\\n  --publish 80:80 --publish 8080:8080 --publish 443:443  \\\n  --mount type=bind,source=/var/run/docker.sock,target=/var/run/docker.sock \\\n  --mount type=bind,source=/apps/config/traefik.toml,target=/traefik.toml  \\\n  --network traefik-public   traefik:v2.3.4 \\\n  --configFile=/traefik.toml\n")),(0,a.kt)("h3",{id:"2\u521b\u5efa-server-demo-\u5e94\u7528"},"2.\u521b\u5efa server-demo \u5e94\u7528"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'docker service create \\\n  --name service-demo \\\n  --network traefik-public \\\n  --label "traefik.enable=true" \\\n  --label "traefik.http.services.service-demo.loadbalancer.server.port=80" \\\n  --label "traefik.http.routers.service-demo.entrypoints=http" \\\n  --label "traefik.http.routers.service-demo.rule=Host(\\"service-demo.zlqit.com\\")" \\\n  nginx:latest\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," //\u67e5\u770b\u65e5\u5fd7\u72b6\u6001(\u8fd9\u6761\u547d\u4ee4\u5fc5\u987b\u5728docker swarm leader\u7aef\u6267\u884c)\n //docker service logs -f service-demo\n")))}d.isMDXComponent=!0}}]);