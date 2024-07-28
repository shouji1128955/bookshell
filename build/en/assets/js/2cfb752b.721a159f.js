"use strict";(self.webpackChunkbookshell=self.webpackChunkbookshell||[]).push([[4476],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>k});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),s=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(i.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(t),d=r,k=u["".concat(i,".").concat(d)]||u[d]||m[d]||o;return t?a.createElement(k,p(p({ref:n},c),{},{components:t})):a.createElement(k,p({ref:n},c))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,p=new Array(o);p[0]=d;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[u]="string"==typeof e?e:r,p[1]=l;for(var s=2;s<o;s++)p[s]=t[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3064:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=t(7462),r=(t(7294),t(3905));const o={},p="\u63a7\u5236\u5668\uff1aCRD \u4ecb\u7ecd",l={unversionedId:"Kubernetes/kubernetes\u5f00\u53d1",id:"Kubernetes/kubernetes\u5f00\u53d1",title:"\u63a7\u5236\u5668\uff1aCRD \u4ecb\u7ecd",description:"\u4ecb\u7ecd",source:"@site/docs/Kubernetes/7.kubernetes\u5f00\u53d1.md",sourceDirName:"Kubernetes",slug:"/Kubernetes/kubernetes\u5f00\u53d1",permalink:"/en/docs/Kubernetes/kubernetes\u5f00\u53d1",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Kubernetes/7.kubernetes\u5f00\u53d1.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"Kubernetes",previous:{title:"ansible\u5b89\u88c5k8s-1.24.12",permalink:"/en/docs/Kubernetes/ansible\u5b89\u88c5k8s-1.24.12"},next:{title:"\u5bb9\u5668\u7406\u89e3",permalink:"/en/docs/Kubernetes/images/\u5bb9\u5668\u7406\u89e3"}},i={},s=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49",level:2},{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd-1",level:2},{value:"\u4ee3\u7801\u751f\u6210\u5668",id:"\u4ee3\u7801\u751f\u6210\u5668",level:2},{value:"code-generator",id:"code-generator",level:3},{value:"\u4ee3\u7801\u751f\u6210 tag",id:"\u4ee3\u7801\u751f\u6210-tag",level:3}],c={toc:s},u="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u63a7\u5236\u5668crd-\u4ecb\u7ecd"},"\u63a7\u5236\u5668\uff1aCRD \u4ecb\u7ecd"),(0,r.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,r.kt)("p",null,"\u524d\u9762\u6211\u4eec\u8bb2\u89e3\u4e86\u5f88\u591a\u5173\u4e8e client-go \u7684\u5b9e\u73b0\uff0c\u4e5f\u4ecb\u7ecd\u4e86\u5982\u4f55\u4f7f\u7528 client-go \u6765\u521b\u5efa\u4e00\u4e2a\u63a7\u5236\u5668\uff0c\u4f46\u662f\u6211\u4eec\u524d\u9762\u4ecb\u7ecd\u7684\u90fd\u662f Kubernetes \u4e2d\u5185\u7f6e\u7684\u8d44\u6e90\u5bf9\u8c61\uff0c\u6bd4\u5982 Pod\u3001Deployment \u8fd9\u4e9b\uff0c\u800c\u8fd9\u4e9b\u8d44\u6e90\u5bf9\u8c61\u5df2\u7ecf\u6709\u4e86\u5185\u7f6e\u7684\u63a7\u5236\u5668\u5b9e\u73b0\uff0c\u90a3\u4e48\u6211\u4eec\u8fd8\u53ef\u4ee5\u5982\u4f55\u53bb\u4f7f\u7528\u63a7\u5236\u5668\u5462\uff1f\u90a3\u5c31\u9700\u8981\u53bb\u4e86\u89e3 CRD \u8fd9\u79cd\u8d44\u6e90\u5bf9\u8c61\u4e86\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Custom Resource Define")," \u7b80\u79f0 CRD\uff0c\u662f Kubernetes\uff08v1.7+\uff09\u4e3a\u63d0\u9ad8\u53ef\u6269\u5c55\u6027\uff0c\u8ba9\u5f00\u53d1\u8005\u53bb\u81ea\u5b9a\u4e49\u8d44\u6e90\u7684\u4e00\u79cd\u65b9\u5f0f\u3002CRD \u8d44\u6e90\u53ef\u4ee5\u52a8\u6001\u6ce8\u518c\u5230\u96c6\u7fa4\u4e2d\uff0c\u6ce8\u518c\u5b8c\u6bd5\u540e\uff0c\u7528\u6237\u53ef\u4ee5\u901a\u8fc7 kubectl \u6765\u521b\u5efa\u8bbf\u95ee\u8fd9\u4e2a\u81ea\u5b9a\u4e49\u7684\u8d44\u6e90\u5bf9\u8c61\uff0c\u7c7b\u4f3c\u4e8e\u64cd\u4f5c Pod \u4e00\u6837\u3002\u4e0d\u8fc7\u9700\u8981\u6ce8\u610f\u7684\u662f CRD \u4ec5\u4ec5\u662f\u8d44\u6e90\u7684\u5b9a\u4e49\u800c\u5df2\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u9700\u8981\u4e00\u4e2a\u5bf9\u5e94\u7684\u63a7\u5236\u5668\u53bb\u76d1\u542c CRD \u7684\u5404\u79cd\u4e8b\u4ef6\u6765\u6dfb\u52a0\u81ea\u5b9a\u4e49\u7684\u4e1a\u52a1\u903b\u8f91\uff0c\u8fd9\u4e2a\u624d\u662f\u6211\u4eec\u8981\u91cd\u70b9\u5b66\u4e60\u7684"),"\u3002"),(0,r.kt)("h2",{id:"\u5b9a\u4e49"},"\u5b9a\u4e49"),(0,r.kt)("p",null,"\u5982\u679c\u8bf4\u53ea\u662f\u5bf9 CRD \u8d44\u6e90\u672c\u8eab\u8fdb\u884c CRUD \u64cd\u4f5c\u7684\u8bdd\uff0c\u4e0d\u9700\u8981 Controller \u4e5f\u662f\u53ef\u4ee5\u5b9e\u73b0\u7684\uff0c\u76f8\u5f53\u4e8e\u5c31\u662f\u53ea\u6709\u6570\u636e\u5b58\u5165\u4e86 etcd \u4e2d\uff0c\u800c\u6ca1\u6709\u5bf9\u8fd9\u4e2a\u6570\u636e\u7684\u76f8\u5173\u64cd\u4f5c\u800c\u5df2\u3002\u6bd4\u5982\u6211\u4eec\u53ef\u4ee5\u5b9a\u4e49\u4e00\u4e2a\u5982\u4e0b\u6240\u793a\u7684 CRD \u8d44\u6e90\u6e05\u5355\u6587\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# crd-demo.yaml\napiVersion: apiextensions.k8s.io/v1\nkind: CustomResourceDefinition\nmetadata:\n  # name \u5fc5\u987b\u5339\u914d\u4e0b\u9762\u7684spec\u5b57\u6bb5\uff1a<plural>.<group>  \n  name: crontabs.stable.example.com\nspec:\n  # group \u540d\u7528\u4e8e REST API \u4e2d\u7684\u5b9a\u4e49\uff1a/apis/<group>/<version>  \n  group: stable.example.com\n  # \u5217\u51fa\u81ea\u5b9a\u4e49\u8d44\u6e90\u7684\u6240\u6709 API \u7248\u672c  \n  versions:\n  - name: v1beta1  # \u7248\u672c\u540d\u79f0\uff0c\u6bd4\u5982 v1\u3001v2beta1 \u7b49\u7b49    \n    served: true  # \u662f\u5426\u5f00\u542f\u901a\u8fc7 REST APIs \u8bbf\u95ee `/apis/<group>/<version>/...`    \n    storage: true # \u5fc5\u987b\u5c06\u4e00\u4e2a\u4e14\u53ea\u6709\u4e00\u4e2a\u7248\u672c\u6807\u8bb0\u4e3a\u5b58\u50a8\u7248\u672c    \n    schema:  # \u5b9a\u4e49\u81ea\u5b9a\u4e49\u5bf9\u8c61\u7684\u58f0\u660e\u89c4\u8303      \n      openAPIV3Schema:\n        description: Define CronTab YAML Spec\n        type: object\n        properties:\n          spec:\n            type: object\n            properties:\n              cronSpec:\n                type: string\n              image:\n                type: string\n              replicas:\n                type: integer\n  # \u5b9a\u4e49\u4f5c\u7528\u8303\u56f4\uff1aNamespaced\uff08\u547d\u540d\u7a7a\u95f4\u7ea7\u522b\uff09\u6216\u8005 Cluster\uff08\u6574\u4e2a\u96c6\u7fa4\uff09  \n  scope: Namespaced\n  names:\n    # kind \u662f sigular \u7684\u4e00\u4e2a\u9a7c\u5cf0\u5f62\u5f0f\u5b9a\u4e49\uff0c\u5728\u8d44\u6e90\u6e05\u5355\u4e2d\u4f1a\u4f7f\u7528    \n    kind: CronTab\n    # plural \u540d\u5b57\u7528\u4e8e REST API \u4e2d\u7684\u5b9a\u4e49\uff1a/apis/<group>/<version>/<plural>    \n    plural: crontabs\n    # singular \u540d\u79f0\u7528\u4e8e CLI \u64cd\u4f5c\u6216\u663e\u793a\u7684\u4e00\u4e2a\u522b\u540d    \n    singular: crontab\n    # shortNames \u76f8\u5f53\u4e8e\u7f29\u5199\u5f62\u5f0f    \n    shortNames:\n    - ct\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u9700\u8981\u6ce8\u610f\u7684\u662f v1.16 \u7248\u672c\u4ee5\u540e\u5df2\u7ecf GA \u4e86\uff0c\u4f7f\u7528\u7684\u662f v1 \u7248\u672c\uff0c\u4e4b\u524d\u90fd\u662f v1beta1\uff0c\u5b9a\u4e49\u89c4\u8303\u6709\u90e8\u5206\u53d8\u5316\uff0c\u6240\u4ee5\u8981\u6ce8\u610f\u7248\u672c\u53d8\u5316\u3002")),(0,r.kt)("p",null,"\u8fd9\u4e2a\u5730\u65b9\u7684\u5b9a\u4e49\u548c\u6211\u4eec\u5b9a\u4e49\u666e\u901a\u7684\u8d44\u6e90\u5bf9\u8c61\u6bd4\u8f83\u7c7b\u4f3c\uff0c\u6211\u4eec\u8bf4\u6211\u4eec\u53ef\u4ee5\u968f\u610f\u5b9a\u4e49\u4e00\u4e2a\u81ea\u5b9a\u4e49\u7684\u8d44\u6e90\u5bf9\u8c61\uff0c\u4f46\u662f\u5728\u521b\u5efa\u8d44\u6e90\u7684\u65f6\u5019\uff0c\u80af\u5b9a\u4e0d\u662f\u4efb\u7531\u6211\u4eec\u968f\u610f\u53bb\u7f16\u5199 YAML \u6587\u4ef6\u7684\uff0c\u5f53\u6211\u4eec\u628a\u4e0a\u9762\u7684 CRD \u6587\u4ef6\u63d0\u4ea4\u7ed9 Kubernetes \u4e4b\u540e\uff0cKubernetes \u4f1a\u5bf9\u6211\u4eec\u63d0\u4ea4\u7684\u58f0\u660e\u6587\u4ef6\u8fdb\u884c\u6821\u9a8c\uff0c\u4ece\u5b9a\u4e49\u53ef\u4ee5\u770b\u51fa CRD \u662f\u57fa\u4e8e ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md#schemaObject"},"OpenAPI v3 schem")," \u8fdb\u884c\u89c4\u8303\u7684\u3002\u5f53\u7136\u8fd9\u79cd\u6821\u9a8c\u53ea\u662f\u5bf9\u4e8e\u5b57\u6bb5\u7684\u7c7b\u578b\u8fdb\u884c\u6821\u9a8c\uff0c\u6bd4\u8f83\u521d\u7ea7\uff0c\u5982\u679c\u60f3\u8981\u66f4\u52a0\u590d\u6742\u7684\u6821\u9a8c\uff0c\u8fd9\u4e2a\u65f6\u5019\u5c31\u9700\u8981\u901a\u8fc7 Kubernetes \u7684 admission webhook \u6765\u5b9e\u73b0\u4e86\u3002\u5173\u4e8e\u6821\u9a8c\u7684\u66f4\u591a\u7528\u6cd5\uff0c\u53ef\u4ee5\u524d\u5f80",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/access-kubernetes-api/custom-resources/custom-resource-definitions/#validation"},"\u5b98\u65b9\u6587\u6863"),"\u67e5\u770b\u3002"),(0,r.kt)("p",null,"\u540c\u6837\u73b0\u5728\u6211\u4eec\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 kubectl \u6765\u521b\u5efa\u8fd9\u4e2a CRD \u8d44\u6e90\u6e05\u5355\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ kubectl apply -f crd-demo.yaml\ncustomresourcedefinition.apiextensions.k8s.io/crontabs.stable.example.com created\n")),(0,r.kt)("p",null,"\u8fd9\u4e2a\u65f6\u5019\u6211\u4eec\u53ef\u4ee5\u67e5\u770b\u5230\u96c6\u7fa4\u4e2d\u5df2\u7ecf\u6709\u6211\u4eec\u5b9a\u4e49\u7684\u8fd9\u4e2a CRD \u8d44\u6e90\u5bf9\u8c61\u4e86\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ kubectl get crd |grep example\ncrontabs.stable.example.com                      2019-12-19T02:37:54Z\n")),(0,r.kt)("p",null,"\u8fd9\u4e2a\u65f6\u5019\u4e00\u4e2a\u65b0\u7684 namespace \u7ea7\u522b\u7684 RESTful API \u5c31\u4f1a\u88ab\u521b\u5efa\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/apis/stable/example.com/v1beta1/namespaces/*/crontabs/...\n")),(0,r.kt)("p",null,"\u7136\u540e\u6211\u4eec\u5c31\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e2a API \u7aef\u70b9\u6765\u521b\u5efa\u548c\u7ba1\u7406\u81ea\u5b9a\u4e49\u7684\u5bf9\u8c61\uff0c\u8fd9\u4e9b\u5bf9\u8c61\u7684\u7c7b\u578b\u5c31\u662f\u4e0a\u9762\u521b\u5efa\u7684 CRD \u5bf9\u8c61\u89c4\u8303\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"CronTab"),"\u3002"),(0,r.kt)("p",null,"\u73b0\u5728\u5728 Kubernetes \u96c6\u7fa4\u4e2d\u6211\u4eec\u5c31\u591a\u4e86\u4e00\u79cd\u65b0\u7684\u8d44\u6e90\u53eb\u505a ",(0,r.kt)("inlineCode",{parentName:"p"},"crontabs.stable.example.com"),"\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u4f7f\u7528\u5b83\u6765\u5b9a\u4e49\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"CronTab")," \u8d44\u6e90\u5bf9\u8c61\u4e86\uff0c\u8fd9\u4e2a\u81ea\u5b9a\u4e49\u8d44\u6e90\u5bf9\u8c61\u91cc\u9762\u53ef\u4ee5\u5305\u542b\u7684\u5b57\u6bb5\u6211\u4eec\u5728\u5b9a\u4e49\u7684\u65f6\u5019\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"schema")," \u8fdb\u884c\u4e86\u89c4\u8303\uff0c\u6bd4\u5982\u73b0\u5728\u6211\u4eec\u6765\u521b\u5efa\u4e00\u4e2a\u5982\u4e0b\u6240\u793a\u7684\u8d44\u6e90\u6e05\u5355\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'# crd-crontab-demo.yaml\napiVersion: "stable.example.com/v1beta1"\nkind: CronTab\nmetadata:\n  name: my-new-cron-object\nspec:\n  cronSpec: "* * * * */5"\n  image: my-awesome-cron-image\n')),(0,r.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u76f4\u63a5\u521b\u5efa\u8fd9\u4e2a\u5bf9\u8c61\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ kubectl apply -f crd-crontab-demo.yaml\ncrontab.stable.example.com/my-new-cron-object created\n")),(0,r.kt)("p",null,"\u7136\u540e\u6211\u4eec\u5c31\u53ef\u4ee5\u7528 kubectl \u6765\u7ba1\u7406\u6211\u4eec\u8fd9\u91cc\u521b\u5efa CronTab \u5bf9\u8c61\u4e86\uff0c\u6bd4\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ kubectl get ct  # \u7b80\u5199\nNAME                 AGE\nmy-new-cron-object   42s\n$ kubectl get crontab\nNAME                 AGE\nmy-new-cron-object   88s\n")),(0,r.kt)("p",null,"\u5728\u4f7f\u7528 kubectl \u7684\u65f6\u5019\uff0c\u8d44\u6e90\u540d\u79f0\u662f\u4e0d\u533a\u5206\u5927\u5c0f\u5199\u7684\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 CRD \u4e2d\u5b9a\u4e49\u7684\u5355\u6570\u6216\u8005\u590d\u6570\u5f62\u5f0f\u4ee5\u53ca\u4efb\u4f55\u7b80\u5199\u3002"),(0,r.kt)("p",null,"\u6211\u4eec\u4e5f\u53ef\u4ee5\u67e5\u770b\u521b\u5efa\u7684\u8fd9\u4e2a\u5bf9\u8c61\u7684\u539f\u59cb YAML \u6570\u636e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$ kubectl get ct -o yaml\napiVersion: v1\nitems:\n- apiVersion: stable.example.com/v1beta1\n  kind: CronTab\n  metadata:\n    annotations:\n      kubectl.kubernetes.io/last-applied-configuration: |\n        {"apiVersion":"stable.example.com/v1beta1","kind":"CronTab","metadata":{"annotations":{},\n        "name":"my-new-cron-object","namespace":"default"},"spec":{"cronSpec":"* * * * */5","image":"my-awesome-cron-image"}}\n    creationTimestamp: "2019-12-19T02:52:55Z"\n    generation: 1\n    name: my-new-cron-object\n    namespace: default\n    resourceVersion: "12342275"\n    selfLink: /apis/stable.example.com/v1beta1/namespaces/default/crontabs/my-new-cron-object\n    uid: dace308d-5f54-4232-9c7b-841adf6bab62\n  spec:\n    cronSpec: \'* * * * */5\'\n    image: my-awesome-cron-image\nkind: List\nmetadata:\n  resourceVersion: ""\n  selfLink: ""\n')),(0,r.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u770b\u5230\u5b83\u5305\u542b\u4e86\u4e0a\u9762\u6211\u4eec\u5b9a\u4e49\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"cronSpec")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"image")," \u5b57\u6bb5\u3002"),(0,r.kt)("p",null,"\u5c31\u5982\u4e0a\u9762\u6211\u4eec\u8bf4\u7684\uff0c\u73b0\u5728\u6211\u4eec\u81ea\u5b9a\u4e49\u7684\u8d44\u6e90\u521b\u5efa\u5b8c\u6210\u4e86\uff0c\u4f46\u662f\u4e5f\u53ea\u662f\u5355\u7eaf\u7684\u628a\u8d44\u6e90\u6e05\u5355\u6570\u636e\u5b58\u5165\u5230\u4e86 etcd \u4e2d\u800c\u5df2\uff0c\u5e76\u6ca1\u6709\u4ec0\u4e48\u5176\u4ed6\u7528\u5904\uff0c\u56e0\u4e3a\u6211\u4eec\u6ca1\u6709\u5b9a\u4e49\u4e00\u4e2a\u5bf9\u5e94\u7684\u63a7\u5236\u5668\u6765\u5904\u7406\u76f8\u5173\u7684\u4e1a\u52a1\u903b\u8f91\uff0c\u6240\u4ee5\u63a5\u4e0b\u6765\u6211\u4eec\u9700\u8981\u6765\u4e86\u89e3\u5982\u4f55\u4e3a CRD \u521b\u5efa\u81ea\u5b9a\u4e49\u7684\u63a7\u5236\u5668\u3002"),(0,r.kt)("h1",{id:"\u63a7\u5236\u5668\u4ee3\u7801\u751f\u6210\u5668"},"\u63a7\u5236\u5668\uff1a\u4ee3\u7801\u751f\u6210\u5668"),(0,r.kt)("h2",{id:"\u4ecb\u7ecd-1"},"\u4ecb\u7ecd"),(0,r.kt)("p",null,"\u4e0a\u8282\u8bfe\u6211\u4eec\u4ecb\u7ecd\u4e86 CRD \u7684\u4f7f\u7528\uff0c\u4e86\u89e3\u5230 CRD \u4ec5\u4ec5\u662f\u4e00\u79cd\u8d44\u6e90\u7684\u5b9a\u4e49\u800c\u5df2\uff0c\u9700\u8981\u4e00\u4e2a\u5bf9\u5e94\u7684\u63a7\u5236\u5668\u53bb\u76d1\u542c CRD \u7684\u5404\u79cd\u4e8b\u4ef6\u6765\u6dfb\u52a0\u81ea\u5df1\u7684\u4e1a\u52a1\u903b\u8f91\u624d\u6709\u5b9e\u9645\u610f\u4e49\uff0c\u63a5\u4e0b\u6765\u6211\u4eec\u5c31\u6765\u4ecb\u7ecd\u5982\u4f55\u4e3a CRD \u521b\u5efa\u4e00\u4e2a\u81ea\u5b9a\u4e49\u63a7\u5236\u5668\u3002"),(0,r.kt)("h2",{id:"\u4ee3\u7801\u751f\u6210\u5668"},"\u4ee3\u7801\u751f\u6210\u5668"),(0,r.kt)("p",null,"\u8981\u5b9e\u73b0\u81ea\u5df1\u7684\u63a7\u5236\u5668\u539f\u7406\u6bd4\u8f83\u7b80\u5355\uff0c\u524d\u9762\u6211\u4eec\u4e5f\u4ecb\u7ecd\u8fc7\u5982\u4f55\u7f16\u5199\u63a7\u5236\u5668\uff0c\u6700\u91cd\u8981\u7684\u5c31\u662f\u8981\u53bb\u5b9e\u73b0 ListAndWatch \u64cd\u4f5c\u3001\u83b7\u53d6\u8d44\u6e90\u7684 Informer \u548c Indexer\u3001\u4ee5\u53ca\u901a\u8fc7\u4e00\u4e2a workqueue \u53bb\u63a5\u6536\u4e8b\u4ef6\u6765\u8fdb\u884c\u5904\u7406\uff0c\u6240\u4ee5\u6211\u4eec\u5c31\u8981\u60f3\u529e\u6cd5\u6765\u7f16\u5199\u6211\u4eec\u81ea\u5b9a\u4e49\u7684 CRD \u8d44\u6e90\u5bf9\u5e94\u7684 Informer\u3001ClientSet \u8fd9\u4e9b\u5de5\u5177\uff0c\u524d\u9762\u6211\u4eec\u5df2\u7ecf\u4e86\u89e3\u4e86\u5bf9\u4e8e\u5185\u7f6e\u7684 ",(0,r.kt)("strong",{parentName:"p"},"Kubernetes \u8d44\u6e90\u5bf9\u8c61\u8fd9\u4e9b\u90fd\u662f\u5df2\u7ecf\u5185\u7f6e\u5230\u6e90\u7801\u4e2d\u4e86\uff0c\u5bf9\u4e8e\u6211\u4eec\u81ea\u5df1\u7684 CRD \u8d44\u6e90\u80af\u5b9a\u4e0d\u4f1a\u5185\u7f6e\u5230\u6e90\u7801\u4e2d\u7684\uff0c\u6240\u4ee5\u5c31\u9700\u8981\u6211\u4eec\u81ea\u5df1\u53bb\u5b9e\u73b0"),"\uff0c\u6bd4\u5982\u8981\u4e3a CronTab \u8fd9\u4e2a\u8d44\u6e90\u5bf9\u8c61\u5b9e\u73b0\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"DeepCopyObject")," \u51fd\u6570\uff0c\u8fd9\u6837\u624d\u4f1a\u5c06\u6211\u4eec\u81ea\u5b9a\u4e49\u7684\u5bf9\u8c61\u8f6c\u6362\u6210 ",(0,r.kt)("inlineCode",{parentName:"p"},"runtime.Object"),"\uff0c\u7cfb\u7edf\u624d\u80fd\u591f\u8bc6\u522b\uff0c\u4f46\u662f\u5ba2\u6237\u7aef\u76f8\u5173\u7684\u64cd\u4f5c\u5b9e\u73b0\u53c8\u975e\u5e38\u591a\uff0c\u800c\u4e14\u5b9e\u73b0\u65b9\u5f0f\u57fa\u672c\u4e0a\u90fd\u662f\u4e00\u81f4\u7684\uff0c\u6240\u4ee5 Kubernetes \u5c31\u4e3a\u6211\u4eec\u63d0\u4f9b\u4e86\u4ee3\u7801\u751f\u6210\u5668\u8fd9\u6837\u7684\u5de5\u5177\uff0c\u6211\u4eec\u53ef\u4ee5\u6765\u81ea\u52a8\u751f\u6210\u5ba2\u6237\u7aef\u8bbf\u95ee\u7684\u4e00\u4e9b\u4ee3\u7801\uff0c\u6bd4\u5982 Informer\u3001ClientSet \u7b49\u7b49\u3002"),(0,r.kt)("h3",{id:"code-generator"},"code-generator"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/code-generator"},"code-generator")," \u5c31\u662f Kubernetes \u63d0\u4f9b\u7684\u4e00\u4e2a\u7528\u4e8e\u4ee3\u7801\u751f\u6210\u7684\u9879\u76ee\uff0c\u5b83\u63d0\u4f9b\u4e86\u4ee5\u4e0b\u5de5\u5177\u4e3a Kubernetes \u4e2d\u7684\u8d44\u6e90\u751f\u6210\u4ee3\u7801\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"deepcopy-gen:")," \u751f\u6210\u6df1\u5ea6\u62f7\u8d1d\u65b9\u6cd5\uff0c\u4e3a\u6bcf\u4e2a T \u7c7b\u578b\u751f\u6210 ",(0,r.kt)("inlineCode",{parentName:"li"},"func (t* T) DeepCopy() *T")," \u65b9\u6cd5\uff0cAPI \u7c7b\u578b\u90fd\u9700\u8981\u5b9e\u73b0\u6df1\u62f7\u8d1d"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"client-gen:")," \u4e3a\u8d44\u6e90\u751f\u6210\u6807\u51c6\u7684 clientset"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"informer-gen:")," \u751f\u6210 informer\uff0c\u63d0\u4f9b\u4e8b\u4ef6\u673a\u5236\u6765\u54cd\u5e94\u8d44\u6e90\u7684\u4e8b\u4ef6"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"lister-gen:")," \u751f\u6210 Lister",(0,r.kt)("strong",{parentName:"li"},"\uff0c"),"\u4e3a get \u548c list \u8bf7\u6c42\u63d0\u4f9b\u53ea\u8bfb\u7f13\u5b58\u5c42\uff08\u901a\u8fc7 indexer \u83b7\u53d6\uff09")),(0,r.kt)("p",null,"Informer \u548c Lister \u662f\u6784\u5efa\u63a7\u5236\u5668\u7684\u57fa\u7840\uff0c\u4f7f\u7528\u8fd94\u4e2a\u4ee3\u7801\u751f\u6210\u5668\u53ef\u4ee5\u521b\u5efa\u5168\u529f\u80fd\u7684\u3001\u548c Kubernetes \u4e0a\u6e38\u63a7\u5236\u5668\u5de5\u4f5c\u673a\u5236\u76f8\u540c\u7684 production-ready \u7684\u63a7\u5236\u5668\u3002"),(0,r.kt)("p",null,"code-generator \u8fd8\u5305\u542b\u4e00\u4e9b\u5176\u5b83\u7684\u4ee3\u7801\u751f\u6210\u5668\uff0c\u4f8b\u5982 Conversion-gen \u8d1f\u8d23\u4ea7\u751f\u5185\u5916\u90e8\u7c7b\u578b\u7684\u8f6c\u6362\u51fd\u6570\u3001Defaulter-gen \u8d1f\u8d23\u5904\u7406\u5b57\u6bb5\u9ed8\u8ba4\u503c\u3002\u5927\u90e8\u5206\u7684\u751f\u6210\u5668\u652f\u6301",(0,r.kt)("inlineCode",{parentName:"p"},"--input-dirs"),"\u53c2\u6570\u6765\u8bfb\u53d6\u4e00\u7cfb\u5217\u8f93\u5165\u5305\uff0c\u5904\u7406\u5176\u4e2d\u7684\u6bcf\u4e2a\u7c7b\u578b\uff0c\u7136\u540e\u751f\u6210\u4ee3\u7801\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u90e8\u5206\u4ee3\u7801\u751f\u6210\u5230\u8f93\u5165\u5305\u6240\u5728\u76ee\u5f55\uff0c\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"li"},"deepcopy-gen")," \u751f\u6210\u5668\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528\u53c2\u6570",(0,r.kt)("inlineCode",{parentName:"li"},'--output-file-base "zz_generated.deepcopy"')," \u6765\u5b9a\u4e49\u8f93\u51fa\u6587\u4ef6\u540d"),(0,r.kt)("li",{parentName:"ol"},"\u5176\u5b83\u4ee3\u7801\u751f\u6210\u5230 ",(0,r.kt)("inlineCode",{parentName:"li"},"--output-package")," \u6307\u5b9a\u7684\u76ee\u5f55\uff0c\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"li"},"client-gen"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"informer-gen"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"lister-gen")," \u7b49\u751f\u6210\u5668")),(0,r.kt)("p",null,"\u5728\u5f00\u53d1 CRD \u7684\u63a7\u5236\u5668\u7684\u65f6\u5019\uff0c\u6211\u4eec\u53ef\u4ee5\u7f16\u5199\u4e00\u4e2a\u811a\u672c\u6765\u7edf\u4e00\u8c03\u7528\u751f\u6210\u5668\u751f\u6210\u4ee3\u7801\uff0c\u6211\u4eec\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/sample-controller"},"sample-controller")," \u4ed3\u5e93\u4e2d\u63d0\u4f9b\u7684 hack/update-codegen.sh \u811a\u672c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'#!/usr/bin/env bash\n\nset -o errexit\nset -o nounset\nset -o pipefail\n\nSCRIPT_ROOT=$(dirname "${BASH_SOURCE[0]}")/..\n# \u4ee3\u7801\u751f\u6210\u5668\u5305\u7684\u4f4d\u7f6e\nCODEGEN_PKG=${CODEGEN_PKG:-$(cd "${SCRIPT_ROOT}"; ls -d -1 ./vendor/k8s.io/code-generator 2>/dev/null || echo ../code-generator)}\n\n# generate-groups.sh <generators> <output-package> <apis-package> <groups-versions>\n#                    \u4f7f\u7528\u54ea\u4e9b\u751f\u6210\u5668\uff0c\u53ef\u9009\u503c deepcopy,defaulter,client,lister,informer\uff0c\u9017\u53f7\u5206\u9694\uff0call\u8868\u793a\u5168\u90e8\u4f7f\u7528\n#                    \u8f93\u51fa\u5305\u7684\u5bfc\u5165\u8def\u5f84  \n#                    CR \u5b9a\u4e49\u6240\u5728\u8def\u5f84\n#                    API \u7ec4\u548c\u7248\u672c\nbash "${CODEGEN_PKG}"/generate-groups.sh "deepcopy,client,informer,lister" \\\\\n  k8s.io/sample-controller/pkg/generated k8s.io/sample-controller/pkg/apis \\\\\n  samplecontroller:v1alpha1 \\\\\n  --output-base "$(dirname "${BASH_SOURCE[0]}")/../../.." \\\\\n  --go-header-file "${SCRIPT_ROOT}"/hack/boilerplate.go.txt\n\n# \u81ea\u52a8\u751f\u6210\u7684\u6e90\u7801\u5934\u90e8\u9644\u52a0\u7684\u5185\u5bb9:\n#   --go-header-file "${SCRIPT_ROOT}"/hack/custom-boilerplate.go.txt\n')),(0,r.kt)("p",null,"\u6267\u884c\u4e0a\u9762\u7684\u811a\u672c\u540e\uff0c\u6240\u6709 API \u4ee3\u7801\u4f1a\u751f\u6210\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"pkg/apis")," \u76ee\u5f55\u4e0b\uff0cclientsets\u3001informers\u3001listers \u5219\u751f\u6210\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"pkg/generated")," \u76ee\u5f55\u4e0b\u3002\u4e0d\u8fc7\u4ece\u811a\u672c\u53ef\u4ee5\u770b\u51fa\u9700\u8981\u5c06 code-generator \u7684\u5305\u653e\u7f6e\u5230 vendor \u76ee\u5f55\u4e0b\u9762\uff0c\u73b0\u5728\u6211\u4eec\u90fd\u662f\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"go modules")," \u6765\u7ba1\u7406\u4f9d\u8d56\u4fdd\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"go mod vendor")," \u547d\u4ee4\u5c06\u4f9d\u8d56\u5305\u653e\u7f6e\u5230 vendor \u76ee\u5f55\u4e0b\u9762\u6765\u3002"),(0,r.kt)("p",null,"\u6211\u4eec\u8fd8\u53ef\u4ee5\u8fdb\u4e00\u6b65\u63d0\u4f9b ",(0,r.kt)("inlineCode",{parentName:"p"},"hack/verify-codegen.sh")," \u811a\u672c\uff0c\u7528\u4e8e\u5224\u65ad\u751f\u6210\u7684\u4ee3\u7801\u662f\u5426 up-to-date\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'#!/usr/bin/env bash\n\nset -o errexit\nset -o nounset\nset -o pipefail\n\n# \u5148\u8c03\u7528 update-codegen.sh \u751f\u6210\u4e00\u4efd\u65b0\u4ee3\u7801\n# \u7136\u540e\u5bf9\u6bd4\u65b0\u8001\u4ee3\u7801\u662f\u5426\u4e00\u6837\n\nSCRIPT_ROOT=$(dirname "${BASH_SOURCE[0]}")/..\n\nDIFFROOT="${SCRIPT_ROOT}/pkg"\nTMP_DIFFROOT="${SCRIPT_ROOT}/_tmp/pkg"\n_tmp="${SCRIPT_ROOT}/_tmp"\n\ncleanup() {\n  rm -rf "${_tmp}"\n}\ntrap "cleanup" EXIT SIGINT\n\ncleanup\n\nmkdir -p "${TMP_DIFFROOT}"\ncp -a "${DIFFROOT}"/* "${TMP_DIFFROOT}"\n\n"${SCRIPT_ROOT}/hack/update-codegen.sh"\necho "diffing ${DIFFROOT} against freshly generated codegen"\nret=0\ndiff -Naupr "${DIFFROOT}" "${TMP_DIFFROOT}" || ret=$?\ncp -a "${TMP_DIFFROOT}"/* "${DIFFROOT}"\nif [[ $ret -eq 0 ]]\nthen\n  echo "${DIFFROOT} up to date."\nelse\n  echo "${DIFFROOT} is out of date. Please run hack/update-codegen.sh"\n  exit 1\nfi\n')),(0,r.kt)("h3",{id:"\u4ee3\u7801\u751f\u6210-tag"},"\u4ee3\u7801\u751f\u6210 tag"),(0,r.kt)("p",null,"\u9664\u4e86\u901a\u8fc7\u547d\u4ee4\u884c\u6807\u8bb0\u63a7\u5236\u4ee3\u7801\u751f\u6210\u5668\u4e4b\u5916\uff0c\u6211\u4eec\u4e00\u822c\u662f\u5728\u6e90\u7801\u4e2d\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"tag")," \u6765\u6807\u8bb0\u4e00\u4e9b\u4f9b\u751f\u6210\u5668\u4f7f\u7528\u7684\u5c5e\u6027\uff0c\u8fd9\u4e9b",(0,r.kt)("inlineCode",{parentName:"p"},"tag"),"\u4e3b\u8981\u5206\u4e3a\u4e24\u7c7b\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"doc.go")," \u7684 package \u8bed\u53e5\u4e4b\u4e0a\u63d0\u4f9b\u7684\u5168\u5c40 tag"),(0,r.kt)("li",{parentName:"ol"},"\u5728\u9700\u8981\u88ab\u5904\u7406\u7684\u7c7b\u578b\u4e0a\u63d0\u4f9b\u7684\u5c40\u90e8 tag")),(0,r.kt)("p",null,"tag \u7684\u4f7f\u7528\u65b9\u6cd5\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"// +tag-name\n// \u6216\u8005\n// +tag-name=value\n")),(0,r.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u770b\u5230 tag \u662f\u901a\u8fc7\u6ce8\u91ca\u7684\u5f62\u5f0f\u5b58\u5728\u7684\uff0c\u53e6\u5916\u9700\u8981\u6ce8\u610f\u7684\u662f tag \u7684\u4f4d\u7f6e\u975e\u5e38\u91cd\u8981\uff0c\u5f88\u591a tag \u5fc5\u987b\u76f4\u63a5\u4f4d\u4e8e type \u6216 package \u8bed\u53e5\u7684\u4e0a\u4e00\u884c\uff0c\u53e6\u5916\u4e00\u4e9b\u5219\u5fc5\u987b\u548c go \u8bed\u53e5\u9694\u5f00\u81f3\u5c11\u4e00\u884c\u7a7a\u767d\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5168\u5c40 tag")),(0,r.kt)("p",null,"\u5fc5\u987b\u5728\u76ee\u6807\u5305\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"doc.go")," \u6587\u4ef6\u4e2d\u58f0\u660e\uff0c\u4e00\u822c\u8def\u5f84\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"pkg/apis///doc.go"),"\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"// \u4e3a\u5305\u4e2d\u4efb\u4f55\u7c7b\u578b\u751f\u6210\u6df1\u62f7\u8d1d\u65b9\u6cd5\uff0c\u53ef\u4ee5\u5728\u5c40\u90e8 tag \u8986\u76d6\u6b64\u9ed8\u8ba4\u884c\u4e3a\n// +k8s:deepcopy-gen=package\n \n// groupName \u6307\u5b9a API \u7ec4\u7684\u5168\u9650\u5b9a\u540d\n// \u6b64 API \u7ec4\u7684 v1 \u7248\u672c\uff0c\u653e\u5728\u540c\u4e00\u4e2a\u5305\u4e2d\n// +groupName=example.com\npackage v1\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f: \u7a7a\u884c\u4e0d\u80fd\u7701")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5c40\u90e8 tag")),(0,r.kt)("p",null,"\u8981\u4e48\u76f4\u63a5\u58f0\u660e\u5728\u7c7b\u578b\u4e4b\u524d\uff0c\u8981\u4e48\u4f4d\u4e8e\u7c7b\u578b\u4e4b\u524d\u7684\u7b2c\u4e8c\u4e2a\u6ce8\u91ca\u5757\u4e2d\u3002\u4e0b\u9762\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"types.go")," \u4e2d\u58f0\u660e\u4e86 CR \u5bf9\u5e94\u7684\u7c7b\u578b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'// \u4e3a\u5f53\u524d\u7c7b\u578b\u751f\u6210\u5ba2\u6237\u7aef\uff0c\u5982\u679c\u4e0d\u52a0\u6b64\u6ce8\u89e3\u5219\u65e0\u6cd5\u751f\u6210 lister\u3001informer \u7b49\u5305\n// +genclient\n \n// \u63d0\u793a\u6b64\u7c7b\u578b\u4e0d\u57fa\u4e8e /status \u5b50\u8d44\u6e90\u6765\u5b9e\u73b0 spec-status \u5206\u79bb\uff0c\u4ea7\u751f\u7684\u5ba2\u6237\u7aef\u4e0d\u5177\u6709 UpdateStatus \u65b9\u6cd5\n// \u5426\u5219\uff0c\u53ea\u8981\u7c7b\u578b\u5177\u6709 Status \u5b57\u6bb5\uff0c\u5c31\u4f1a\u751f\u6210 UpdateStatus \u65b9\u6cd5\n// +genclient:noStatus\n \n// \u4e3a\u6bcf\u4e2a\u9876\u7ea7 API \u7c7b\u578b\u6dfb\u52a0\uff0c\u81ea\u52a8\u751f\u6210 DeepCopy \u76f8\u5173\u4ee3\u7801\n// +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object\n \n// K8S \u8d44\u6e90\uff0c\u6570\u636e\u5e93\ntype Database struct {\n    metav1.TypeMeta   `json:",inline"`\n    metav1.ObjectMeta `json:"metadata,omitempty"`\n \n    Spec DatabaseSpec `json:"spec"`\n}\n \n// \u4e0d\u4e3a\u6b64\u7c7b\u578b\u751f\u6210\u6df1\u62f7\u8d1d\u65b9\u6cd5\n// +k8s:deepcopy-gen=false\n\n// \u6570\u636e\u5e93\u7684\u89c4\u8303\ntype DatabaseSpec struct {\n    User     string `json:"user"`\n    Password string `json:"password"`\n    Encoding string `json:"encoding,omitempty"`\n}\n \n// +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object\n \n// \u6570\u636e\u5e93\u5217\u8868\uff0c\u56e0\u4e3a list \u83b7\u53d6\u7684\u662f\u5217\u8868\uff0c\u6240\u4ee5\u9700\u8981\u5b9a\u4e49\u8be5\u7ed3\u6784\ntype DatabaseList struct {\n    metav1.TypeMeta `json:",inline"`\n    metav1.ListMeta `json:"metadata"`\n \n    Items []Database `json:"items"`\n}\n')),(0,r.kt)("p",null,"\u5728\u4e0a\u9762 CR \u7684\u5b9a\u4e49\u4e0a\u9762\u5c31\u901a\u8fc7 tag \u6765\u6dfb\u52a0\u4e86\u81ea\u52a8\u751f\u6210\u76f8\u5173\u4ee3\u7801\u7684\u4e00\u4e9b\u6ce8\u91ca\u3002\u6b64\u5916\u5bf9\u4e8e\u96c6\u7fa4\u7ea7\u522b\u7684\u8d44\u6e90\uff0c\u6211\u4eec\u8fd8\u9700\u8981\u63d0\u4f9b\u5982\u4e0b\u6240\u793a\u7684\u6ce8\u91ca\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"// +genclient:nonNamespaced\n \n// \u4e0b\u9762\u7684 Tag \u4e0d\u80fd\u5c11\n// +genclient\n")),(0,r.kt)("p",null,"\u53e6\u5916\u6211\u4eec\u8fd8\u53ef\u4ee5\u63a7\u5236\u5ba2\u6237\u7aef\u63d0\u4f9b\u54ea\u4e9b HTTP \u65b9\u6cd5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"// +genclient:noVerbs\n// +genclient:onlyVerbs=create,delete\n// +genclient:skipVerbs=get,list,create,update,patch,delete,deleteCollection,watch\n// \u4ec5\u4ec5\u8fd4\u56de Status \u800c\u975e\u6574\u4e2a\u8d44\u6e90\n// +genclient:method=Create,verb=create,result=k8s.io/apimachinery/pkg/apis/meta/v1.Status\n \n// \u4e0b\u9762\u7684 Tag \u4e0d\u80fd\u5c11\n// +genclient\n")),(0,r.kt)("p",null,"\u4f7f\u7528 tag \u5b9a\u4e49\u5b8c\u9700\u8981\u751f\u6210\u7684\u4ee3\u7801\u89c4\u5219\u540e\uff0c\u6267\u884c\u4e0a\u9762\u63d0\u4f9b\u7684\u4ee3\u7801\u751f\u6210\u811a\u672c\u5373\u53ef\u81ea\u52a8\u751f\u6210\u5bf9\u5e94\u7684\u4ee3\u7801\u4e86\u3002"))}m.isMDXComponent=!0}}]);