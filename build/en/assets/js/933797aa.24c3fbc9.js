"use strict";(self.webpackChunkbookshell=self.webpackChunkbookshell||[]).push([[816],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),d=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=d(e.components);return r.createElement(i.Provider,{value:n},e.children)},p="mdxType",k={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(t),u=a,m=p["".concat(i,".").concat(u)]||p[u]||k[u]||l;return t?r.createElement(m,s(s({ref:n},c),{},{components:t})):r.createElement(m,s({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,s=new Array(l);s[0]=u;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o[p]="string"==typeof e?e:a,s[1]=o;for(var d=2;d<l;d++)s[d]=t[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6462:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>k,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var r=t(7462),a=(t(7294),t(3905));const l={},s=void 0,o={unversionedId:"Kubernetes/ansible\u5b89\u88c5k8s-1.24.12",id:"Kubernetes/ansible\u5b89\u88c5k8s-1.24.12",title:"ansible\u5b89\u88c5k8s-1.24.12",description:"\u73af\u5883\u914d\u7f6e",source:"@site/docs/Kubernetes/6.ansible\u5b89\u88c5k8s-1.24.12.md",sourceDirName:"Kubernetes",slug:"/Kubernetes/ansible\u5b89\u88c5k8s-1.24.12",permalink:"/en/docs/Kubernetes/ansible\u5b89\u88c5k8s-1.24.12",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Kubernetes/6.ansible\u5b89\u88c5k8s-1.24.12.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"Kubernetes",previous:{title:"\u66f4\u65b0\u5185\u6838",permalink:"/en/docs/Kubernetes/\u66f4\u65b0\u5185\u6838"},next:{title:"\u63a7\u5236\u5668\uff1aCRD \u4ecb\u7ecd",permalink:"/en/docs/Kubernetes/kubernetes\u5f00\u53d1"}},i={},d=[{value:"\u73af\u5883\u914d\u7f6e",id:"\u73af\u5883\u914d\u7f6e",level:4},{value:"\u4e00.\u914d\u7f6e\u9ad8\u53ef\u7528\u8d1f\u8f7d\u5747\u8861keepalived",id:"\u4e00\u914d\u7f6e\u9ad8\u53ef\u7528\u8d1f\u8f7d\u5747\u8861keepalived",level:4},{value:"1.\u5b89\u88c5keepalived",id:"1\u5b89\u88c5keepalived",level:5},{value:"2.master1\u4e0a\u914d\u7f6ekeepalived",id:"2master1\u4e0a\u914d\u7f6ekeepalived",level:5},{value:"3.master2\u4e0a\u914d\u7f6ekeepalived",id:"3master2\u4e0a\u914d\u7f6ekeepalived",level:5},{value:"4.\u91cd\u542fkeepalived",id:"4\u91cd\u542fkeepalived",level:5},{value:"\u4e8c.\u914d\u7f6ehaproxy",id:"\u4e8c\u914d\u7f6ehaproxy",level:4},{value:"1.master1\u4e0a\u914d\u7f6ehaproxy",id:"1master1\u4e0a\u914d\u7f6ehaproxy",level:5},{value:"2.master2\u4e0a\u914d\u7f6ehaproxy",id:"2master2\u4e0a\u914d\u7f6ehaproxy",level:5},{value:"3.\u91cd\u542fhaproxy",id:"3\u91cd\u542fhaproxy",level:5},{value:"\u4e09.\u5b89\u88c5k8s(master\u4e0a\u914d\u7f6e)",id:"\u4e09\u5b89\u88c5k8smaster\u4e0a\u914d\u7f6e",level:4},{value:"1.\u5b89\u88c5ansible",id:"1\u5b89\u88c5ansible",level:5},{value:"2.\u914d\u7f6e\u5404\u4e2a\u8282\u70b9\u514d\u5bc6\u767b\u9646",id:"2\u914d\u7f6e\u5404\u4e2a\u8282\u70b9\u514d\u5bc6\u767b\u9646",level:5},{value:"3.yum\u5b89\u88c5docker",id:"3yum\u5b89\u88c5docker",level:5},{value:"3.1\u4e0b\u8f7d\u4f9d\u8d56\u8f6f\u4ef6",id:"31\u4e0b\u8f7d\u4f9d\u8d56\u8f6f\u4ef6",level:6},{value:"3.2\u4e0b\u8f7ddocker\u6e90",id:"32\u4e0b\u8f7ddocker\u6e90",level:6},{value:"3.3\u5b89\u88c5docker",id:"33\u5b89\u88c5docker",level:6},{value:"3.54.\u914d\u7f6e\u955c\u50cf\u52a0\u901f\uff0c\u8bbe\u7f6e\u6587\u4ef6\u76ee\u5f55",id:"354\u914d\u7f6e\u955c\u50cf\u52a0\u901f\u8bbe\u7f6e\u6587\u4ef6\u76ee\u5f55",level:6},{value:"3.6\u91cd\u542fdocker",id:"36\u91cd\u542fdocker",level:6},{value:"4.\u90e8\u7f72\u8282\u70b9\u7684\u5404\u9879\u76ee\u7ec4\u4ef6",id:"4\u90e8\u7f72\u8282\u70b9\u7684\u5404\u9879\u76ee\u7ec4\u4ef6",level:5},{value:"4.1\u5b89\u88c5ezdown",id:"41\u5b89\u88c5ezdown",level:6},{value:"4.2\u521d\u59cb\u5316ezdown",id:"42\u521d\u59cb\u5316ezdown",level:6},{value:"4.3\u751f\u6210ansible hosts\u6587\u4ef6",id:"43\u751f\u6210ansible-hosts\u6587\u4ef6",level:6},{value:"4.4\u7f16\u8f91ansible hosts\u6587\u4ef6",id:"44\u7f16\u8f91ansible-hosts\u6587\u4ef6",level:6},{value:"4.5\u7f16\u8f91config.yml\u6587\u4ef6",id:"45\u7f16\u8f91configyml\u6587\u4ef6",level:6},{value:"4.6\u914d\u7f6e\u542f\u52a8\u73af\u5883",id:"46\u914d\u7f6e\u542f\u52a8\u73af\u5883",level:6},{value:"4.7\u914d\u7f6eetcd",id:"47\u914d\u7f6eetcd",level:6},{value:"4.8\u5b89\u88c5containerd",id:"48\u5b89\u88c5containerd",level:6},{value:"4.9\u5b89\u88c5master\u8282\u70b9",id:"49\u5b89\u88c5master\u8282\u70b9",level:6},{value:"4.10\u5b89\u88c5node\u8282\u70b9",id:"410\u5b89\u88c5node\u8282\u70b9",level:6},{value:"5.\u90e8\u7f72\u7f51\u7edc\u670d\u52a1",id:"5\u90e8\u7f72\u7f51\u7edc\u670d\u52a1",level:4},{value:"1.\u90e8\u7f72calico(\u4fee\u6539\u955c\u50cf)",id:"1\u90e8\u7f72calico\u4fee\u6539\u955c\u50cf",level:5},{value:"6.\u90e8\u7f72coredns\u548cmetrics(\u4fee\u6539\u955c\u50cf)",id:"6\u90e8\u7f72coredns\u548cmetrics\u4fee\u6539\u955c\u50cf",level:5}],c={toc:d},p="wrapper";function k(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"\u73af\u5883\u914d\u7f6e"},"\u73af\u5883\u914d\u7f6e"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u89d2\u8272"),(0,a.kt)("th",{parentName:"tr",align:null},"IP"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"K8s-master1"),(0,a.kt)("td",{parentName:"tr",align:null},"192.168.10.10"),(0,a.kt)("td",{parentName:"tr",align:null},"kube-scheduler\uff0ckubelet\uff0ckube-proxy\uff0cdocker\uff0ckeepalived\uff0cetcd")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"K8s-master2"),(0,a.kt)("td",{parentName:"tr",align:null},"192.168.10.11"),(0,a.kt)("td",{parentName:"tr",align:null},"kube-scheduler\uff0ckubelet\uff0ckube-proxy\uff0cdocker\uff0ckeepalived\uff0cetcd")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"K8s-node1"),(0,a.kt)("td",{parentName:"tr",align:null},"192.168.10.12"),(0,a.kt)("td",{parentName:"tr",align:null},"kubelet\uff0ckube-proxy\uff0cdocker")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ansible"),(0,a.kt)("td",{parentName:"tr",align:null},"192.168.10.100"),(0,a.kt)("td",{parentName:"tr",align:null},"ansible")))),(0,a.kt)("h4",{id:"\u4e00\u914d\u7f6e\u9ad8\u53ef\u7528\u8d1f\u8f7d\u5747\u8861keepalived"},"\u4e00.\u914d\u7f6e\u9ad8\u53ef\u7528\u8d1f\u8f7d\u5747\u8861keepalived"),(0,a.kt)("h5",{id:"1\u5b89\u88c5keepalived"},"1.\u5b89\u88c5keepalived"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"yum -y install ipvsadm keepalived haproxy\n")),(0,a.kt)("h5",{id:"2master1\u4e0a\u914d\u7f6ekeepalived"},"2.master1\u4e0a\u914d\u7f6ekeepalived"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[root@k8s-master1 ~]# vim /etc/keepalived/keepalived.conf\nvrrp_instance VI_1 {\n    state MASTER\n    interface eth0\n    virtual_router_id 88\n    priority 100\n    advert_int 2\n    authentication {\n        auth_type PASS\n        auth_pass 1111\n    }\n    virtual_ipaddress {\n        192.168.10.88\n    }\n}\n")),(0,a.kt)("h5",{id:"3master2\u4e0a\u914d\u7f6ekeepalived"},"3.master2\u4e0a\u914d\u7f6ekeepalived"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[root@k8s-master2 ~]# cat  /etc/keepalived/keepalived.conf\nvrrp_instance VI_1 {\n    state BACKUP\n    interface eth0\n    virtual_router_id 88\n    priority 80\n    advert_int 2\n    authentication {\n        auth_type PASS\n        auth_pass 1111\n    }\n    virtual_ipaddress {\n        192.168.10.88\n    }\n}\n\n")),(0,a.kt)("h5",{id:"4\u91cd\u542fkeepalived"},"4.\u91cd\u542fkeepalived"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"systemctl restart keepalived\nsystemctl enable  keepalived\n")),(0,a.kt)("h4",{id:"\u4e8c\u914d\u7f6ehaproxy"},"\u4e8c.\u914d\u7f6ehaproxy"),(0,a.kt)("h5",{id:"1master1\u4e0a\u914d\u7f6ehaproxy"},"1.master1\u4e0a\u914d\u7f6ehaproxy"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[root@k8s-master1 ~]# vim /etc/haproxy/haproxy.cfg\nlisten k8s_6443\n  mode tcp\n  bind 192.168.10.88:6443\n  server 192.168.10.10 192.168.10.10:6443 check inter 5s rise 2 fall 3\n  server 192.168.10.11 192.168.10.11:6443 check inter 5s rise 2 fall 3\n")),(0,a.kt)("h5",{id:"2master2\u4e0a\u914d\u7f6ehaproxy"},"2.master2\u4e0a\u914d\u7f6ehaproxy"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[root@k8s-master1 ~]# vim /etc/haproxy/haproxy.cfg\nlisten k8s_6443\n  mode tcp\n  bind 192.168.10.88:6443\n  server 192.168.10.10 192.168.10.10:6443 check inter 5s rise 2 fall 3\n  server 192.168.10.11 192.168.10.11:6443 check inter 5s rise 2 fall 3\n")),(0,a.kt)("h5",{id:"3\u91cd\u542fhaproxy"},"3.\u91cd\u542fhaproxy"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"systemctl restart haproxy\nsystemctl enable haproxy\n")),(0,a.kt)("h4",{id:"\u4e09\u5b89\u88c5k8smaster\u4e0a\u914d\u7f6e"},"\u4e09.\u5b89\u88c5k8s(master\u4e0a\u914d\u7f6e)"),(0,a.kt)("h5",{id:"1\u5b89\u88c5ansible"},"1.\u5b89\u88c5ansible"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"yum -y install ansible\n")),(0,a.kt)("h5",{id:"2\u914d\u7f6e\u5404\u4e2a\u8282\u70b9\u514d\u5bc6\u767b\u9646"},"2.\u914d\u7f6e\u5404\u4e2a\u8282\u70b9\u514d\u5bc6\u767b\u9646"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ssh-keygen -t rsa\nssh-copy-id -i .ssh/id_rsa.pub root@192.168.10.10\nssh-copy-id -i .ssh/id_rsa.pub root@192.168.10.11\nssh-copy-id -i .ssh/id_rsa.pub root@192.168.10.12\n")),(0,a.kt)("h5",{id:"3yum\u5b89\u88c5docker"},"3.yum\u5b89\u88c5docker"),(0,a.kt)("h6",{id:"31\u4e0b\u8f7d\u4f9d\u8d56\u8f6f\u4ef6"},"3.1\u4e0b\u8f7d\u4f9d\u8d56\u8f6f\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[root@jenkins ~]# yum install -y yum-utils device-mapper-persistent-data lvm2\n")),(0,a.kt)("h6",{id:"32\u4e0b\u8f7ddocker\u6e90"},"3.2\u4e0b\u8f7ddocker\u6e90"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo \n")),(0,a.kt)("h6",{id:"33\u5b89\u88c5docker"},"3.3\u5b89\u88c5docker"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[root@jenkins ~]# yum -y install docker-ce docker-ce-cli containerd.io\n")),(0,a.kt)("h6",{id:"354\u914d\u7f6e\u955c\u50cf\u52a0\u901f\u8bbe\u7f6e\u6587\u4ef6\u76ee\u5f55"},"3.54.\u914d\u7f6e\u955c\u50cf\u52a0\u901f\uff0c\u8bbe\u7f6e\u6587\u4ef6\u76ee\u5f55"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'cat > /etc/docker/daemon.json << EOF\n{\n  "registry-mirrors": ["https://7jauxlsb.mirror.aliyuncs.com"],\n  "insecure-registries":["192.168.3.133"],\n  "data-root": "/data/docker"\n}\nEOF\n')),(0,a.kt)("h6",{id:"36\u91cd\u542fdocker"},"3.6\u91cd\u542fdocker"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"systemctl daemon-reload \nsystemctl enable docker \nsystemctl restart docker\n")),(0,a.kt)("h5",{id:"4\u90e8\u7f72\u8282\u70b9\u7684\u5404\u9879\u76ee\u7ec4\u4ef6"},"4.\u90e8\u7f72\u8282\u70b9\u7684\u5404\u9879\u76ee\u7ec4\u4ef6"),(0,a.kt)("h6",{id:"41\u5b89\u88c5ezdown"},"4.1\u5b89\u88c5ezdown"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"wget https://github.com/easzlab/kubeasz/releases/download/3.3.5/ezdown\nchmod +x ./ezdown\n")),(0,a.kt)("h6",{id:"42\u521d\u59cb\u5316ezdown"},"4.2\u521d\u59cb\u5316ezdown"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[root@k8s-master1 ~]# vim ezdown\nDOCKER_VER=20.10.22\nKUBEASZ_VER=3.3.5\nK8S_BIN_VER=v1.24.12\n[root@k8s-master1 ~]# ./ezdown -D\n")),(0,a.kt)("h6",{id:"43\u751f\u6210ansible-hosts\u6587\u4ef6"},"4.3\u751f\u6210ansible hosts\u6587\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[root@k8s-master1 ~]# cd /etc/kubeasz/\n[root@k8s-master1 kubeasz]# ./ezctl new k8s-cluster1\n")),(0,a.kt)("h6",{id:"44\u7f16\u8f91ansible-hosts\u6587\u4ef6"},"4.4\u7f16\u8f91ansible hosts\u6587\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'[etcd]\n192.168.10.10\n192.168.10.11\n192.168.10.12\n\n[kube_master]\n192.168.10.10 k8s_nodename=\'master01\'\n192.168.10.11 k8s_nodename=\'master02\'\n\n[kube_node]\n192.168.10.12 k8s_nodename=\'node01\'\n\n[harbor]\n\n[ex_lb]\n192.168.10.11 LB_ROLE=backup EX_APISERVER_VIP=192.168.10.88 EX_APISERVER_PORT=8443\n192.168.10.10 LB_ROLE=master EX_APISERVER_VIP=192.168.10.88 EX_APISERVER_PORT=8443\n\n[chrony]\n\n[all:vars]\nSECURE_PORT="6443"\n\nCONTAINER_RUNTIME="containerd"\n\nCLUSTER_NETWORK="calico"\n\nPROXY_MODE="ipvs"\n\nSERVICE_CIDR="10.10.0.0/16"\n\nCLUSTER_CIDR="172.10.0.0/16"\n\nNODE_PORT_RANGE="1-65535"\n\nCLUSTER_DNS_DOMAIN="cluster.local"\n\nbin_dir="/usr/bin"\n\nbase_dir="/etc/kubeasz"\n\ncluster_dir="{{ base_dir }}/clusters/1.24.12"\n\nca_dir="/etc/kubernetes/ssl"\n\nk8s_nodename=\'\'\n\n')),(0,a.kt)("h6",{id:"45\u7f16\u8f91configyml\u6587\u4ef6"},"4.5\u7f16\u8f91config.yml\u6587\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'INSTALL_SOURCE: "online"\n\nOS_HARDEN: false\n\n\nCA_EXPIRY: "876000h"\nCERT_EXPIRY: "438000h"\n\nCHANGE_CA: false\n\nCLUSTER_NAME: "cluster1"\nCONTEXT_NAME: "context-{{ CLUSTER_NAME }}"\n\nK8S_VER: "1.24.12"\n\nK8S_NODENAME: "{%- if k8s_nodename != \'\' -%} \\\n                    {{ k8s_nodename|replace(\'_\', \'-\')|lower }} \\\n               {%- else -%} \\\n                    {{ inventory_hostname }} \\\n               {%- endif -%}"\n\nETCD_DATA_DIR: "/var/lib/etcd"\nETCD_WAL_DIR: ""\n\n\nENABLE_MIRROR_REGISTRY: true\n\nSANDBOX_IMAGE: "192.168.3.133/tools/pause:3.9"\n\nCONTAINERD_STORAGE_DIR: "/data/containerd"\n\nDOCKER_STORAGE_DIR: "/data/docker"\n\nENABLE_REMOTE_API: false\n\nINSECURE_REG: \'["192.168.3.133"]\'\n\n\nMASTER_CERT_HOSTS:\n  - "10.1.1.1"\n  - "k8s.easzlab.io"\n\nNODE_CIDR_LEN: 24\n\n\nKUBELET_ROOT_DIR: "/var/lib/kubelet"\n\nMAX_PODS: 300\n\nKUBE_RESERVED_ENABLED: "no"\n\nSYS_RESERVED_ENABLED: "no"\n\n\nFLANNEL_BACKEND: "vxlan"\nDIRECT_ROUTING: false\n\nflannel_ver: "v0.19.2"\n\nCALICO_IPV4POOL_IPIP: "Always"\n\nIP_AUTODETECTION_METHOD: "can-reach={{ groups[\'kube_master\'][0] }}"\n\nCALICO_NETWORKING_BACKEND: "brid"\n\nCALICO_RR_ENABLED: false\n\nCALICO_RR_NODES: []\n\ncalico_ver: "v3.24.5"\n\ncalico_ver_main: "{{ calico_ver.split(\'.\')[0] }}.{{ calico_ver.split(\'.\')[1] }}"\n\ncilium_ver: "1.12.4"\ncilium_connectivity_check: true\ncilium_hubble_enabled: false\ncilium_hubble_ui_enabled: false\n\nOVN_DB_NODE: "{{ groups[\'kube_master\'][0] }}"\n\nkube_ovn_ver: "v1.5.3"\n\nOVERLAY_TYPE: "full"\n\nFIREWALL_ENABLE: true\n\nkube_router_ver: "v0.3.1"\nbusybox_ver: "1.28.4"\n\n\ndns_install: "yes"\ncorednsVer: "1.9.3"\nENABLE_LOCAL_DNS_CACHE: true\ndnsNodeCacheVer: "1.22.13"\nLOCAL_DNS_CACHE: "10.10.0.2"\n\nmetricsserver_install: "yes"\nmetricsVer: "v0.5.2"\n\ndashboard_install: "no"\ndashboardVer: "v2.7.0"\ndashboardMetricsScraperVer: "v1.0.8"\n\nprom_install: "no"\nprom_namespace: "monitor"\nprom_chart_ver: "39.11.0"\n\nnfs_provisioner_install: "no"\nnfs_provisioner_namespace: "kube-system"\nnfs_provisioner_ver: "v4.0.2"\nnfs_storage_class: "managed-nfs-storage"\nnfs_server: "192.168.1.10"\nnfs_path: "/data/nfs"\n\nnetwork_check_enabled: false\nnetwork_check_schedule: "*/5 * * * *"\n\nHARBOR_VER: "v2.6.3"\nHARBOR_DOMAIN: "harbor.easzlab.io.local"\nHARBOR_PATH: /var/data\nHARBOR_TLS_PORT: 8443\nHARBOR_REGISTRY: "{{ HARBOR_DOMAIN }}:{{ HARBOR_TLS_PORT }}"\n\nHARBOR_SELF_SIGNED_CERT: true\n\nHARBOR_WITH_NOTARY: false\nHARBOR_WITH_TRIVY: false\nHARBOR_WITH_CHARTMUSEUM: true\n\n')),(0,a.kt)("h6",{id:"46\u914d\u7f6e\u542f\u52a8\u73af\u5883"},"4.6\u914d\u7f6e\u542f\u52a8\u73af\u5883"),(0,a.kt)("p",null,"\u4e00\u952e\u90e8\u7f72:ezctl setup k8s-01 all"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[root@k8s-master1 kubeasz]# ./ezctl setup 1.24.12 01\n")),(0,a.kt)("h6",{id:"47\u914d\u7f6eetcd"},"4.7\u914d\u7f6eetcd"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'[root@k8s-master1 kubeasz]# ./ezctl setup 1.24.12 02\n//\u67e5\u770betcd\u72b6\u6001\netcdctl --cacert=/etc/kubernetes/ssl/ca.pem --cert=/etc/kubernetes/ssl/etcd.pem --key=/etc/kubernetes/ssl/etcd-key.pem --endpoints="https://192.168.3.10.10:2379,https://192.168.10.11:2379,https://192.168.10.12:2379" endpoint health --write-out=table\n')),(0,a.kt)("h6",{id:"48\u5b89\u88c5containerd"},"4.8\u5b89\u88c5containerd"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[root@k8s-master1 kubeasz]# ./ezctl setup 1.24.12 03\n")),(0,a.kt)("p",null,"\u5b89\u88c5\u5b8ccontainerd\u540e\uff0c\u4fee\u6539containerd\u7684\u955c\u50cf\u5730\u5740"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'[root@localhost ~]# vim /etc/containerd/config.toml\n   [plugins."io.containerd.grpc.v1.cri".registry]\n     [plugins."io.containerd.grpc.v1.cri".registry.mirrors]\n       [plugins."io.containerd.grpc.v1.cri".registry.mirrors."docker.io"]\n         endpoint = ["https://8aj710su.mirror.aliyuncs.com" ,"https://registry-1.docker.io"]\n        [plugins."io.containerd.grpc.v1.cri".registry.mirrors."192.168.3.133"]\n          endpoint = ["http://192.168.3.133:80"]\n      [plugins."io.containerd.grpc.v1.cri".registry.configs]\n        [plugins."io.containerd.grpc.v1.cri".registry.configs."192.168.3.133".tls]\n          insecure_skip_verify = true\n        [plugins."io.containerd.grpc.v1.cri".registry.configs."192.168.3.133".auth]\n          username = "admin"\n          password = "123456"\n[root@k8s-master1 ]# systemctl restart containerd\n[root@k8s-master1 ]# systemctl enable containerd\n')),(0,a.kt)("h6",{id:"49\u5b89\u88c5master\u8282\u70b9"},"4.9\u5b89\u88c5master\u8282\u70b9"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[root@k8s-master1 kubeasz]# ./ezctl setup 1.24.12 04\n")),(0,a.kt)("h6",{id:"410\u5b89\u88c5node\u8282\u70b9"},"4.10\u5b89\u88c5node\u8282\u70b9"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[root@k8s-master1 kubeasz]# ./ezctl setup 1.24.12 05\n")),(0,a.kt)("h4",{id:"5\u90e8\u7f72\u7f51\u7edc\u670d\u52a1"},"5.\u90e8\u7f72\u7f51\u7edc\u670d\u52a1"),(0,a.kt)("p",null,"\u4e0b\u8f7d\u955c\u50cf\u540e\u4e0a\u4f20\u5230\u81ea\u5df1\u7684harbor\u4ed3\u5e93"),(0,a.kt)("h5",{id:"1\u90e8\u7f72calico\u4fee\u6539\u955c\u50cf"},"1.\u90e8\u7f72calico(\u4fee\u6539\u955c\u50cf)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[root@k8s-master1 kubeasz]# ./ezctl setup 1.24.12 06\n")),(0,a.kt)("h5",{id:"6\u90e8\u7f72coredns\u548cmetrics\u4fee\u6539\u955c\u50cf"},"6.\u90e8\u7f72coredns\u548cmetrics(\u4fee\u6539\u955c\u50cf)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[root@k8s-master1 kubeasz]# ./ezctl setup 1.24.12 07\n")))}k.isMDXComponent=!0}}]);