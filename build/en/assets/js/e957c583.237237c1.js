"use strict";(self.webpackChunkbookshell=self.webpackChunkbookshell||[]).push([[6577],{3905:(e,n,t)=>{t.d(n,{Zo:()=>i,kt:()=>d});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var m=a.createContext({}),p=function(e){var n=a.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},i=function(e){var n=p(e.components);return a.createElement(m.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,m=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),c=p(t),k=o,d=c["".concat(m,".").concat(k)]||c[k]||u[k]||r;return t?a.createElement(d,s(s({ref:n},i),{},{components:t})):a.createElement(d,s({ref:n},i))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,s=new Array(r);s[0]=k;var l={};for(var m in n)hasOwnProperty.call(n,m)&&(l[m]=n[m]);l.originalType=e,l[c]="string"==typeof e?e:o,s[1]=l;for(var p=2;p<r;p++)s[p]=t[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}k.displayName="MDXCreateElement"},1706:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=t(7462),o=(t(7294),t(3905));const r={},s=void 0,l={unversionedId:"DevOps/gitOps/tekton\u62c9\u53d6\u4ee3\u7801",id:"DevOps/gitOps/tekton\u62c9\u53d6\u4ee3\u7801",title:"tekton\u62c9\u53d6\u4ee3\u7801",description:"1\u3001Tekton\u4ee3\u7801\u62c9\u53d6\u5b9e\u73b0",source:"@site/docs/DevOps/2-gitOps/1-tekton\u62c9\u53d6\u4ee3\u7801.md",sourceDirName:"DevOps/2-gitOps",slug:"/DevOps/gitOps/tekton\u62c9\u53d6\u4ee3\u7801",permalink:"/en/docs/DevOps/gitOps/tekton\u62c9\u53d6\u4ee3\u7801",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/2-gitOps/1-tekton\u62c9\u53d6\u4ee3\u7801.md",tags:[],version:"current",lastUpdatedBy:"unknown",lastUpdatedAt:1694264605,formattedLastUpdatedAt:"Sep 9, 2023",sidebarPosition:1,frontMatter:{},sidebar:"DevOpsGitOps",previous:{title:"tekton\u5b89\u88c5",permalink:"/en/docs/DevOps/gitOps/tekton\u5b89\u88c5"},next:{title:"tekton-results",permalink:"/en/docs/DevOps/gitOps/tekton-results"}},m={},p=[{value:"1\u3001Tekton\u4ee3\u7801\u62c9\u53d6\u5b9e\u73b0",id:"1tekton\u4ee3\u7801\u62c9\u53d6\u5b9e\u73b0",level:2},{value:"2\u3001\u4ee3\u7801\u62c9\u53d6",id:"2\u4ee3\u7801\u62c9\u53d6",level:2},{value:"3\u3001git\u62c9\u53d6\u548charbor\u767b\u5f55",id:"3git\u62c9\u53d6\u548charbor\u767b\u5f55",level:2}],i={toc:p},c="wrapper";function u(e){let{components:n,...t}=e;return(0,o.kt)(c,(0,a.Z)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"1tekton\u4ee3\u7801\u62c9\u53d6\u5b9e\u73b0"},"1\u3001Tekton\u4ee3\u7801\u62c9\u53d6\u5b9e\u73b0"),(0,o.kt)("p",null,"Tekton \u7684\u524d\u8eab\u662f Knative \u7684\u5b50\u9879\u76ee build-pipeline\uff0c\u4e3b\u8981\u7528\u6765\u7ed9 Kantive \u7684 build \u6a21\u5757\u589e\u52a0 pipeline \u529f\u80fd\u3002\u4e4b\u540e\u72ec\u7acb\u51fa\u6765\uff0cTekton \u7684\u76ee\u6807\u662f\u4e00\u4e2a\u901a\u7528\u7684 CI/CD \u5de5\u5177\u3002\u8fd9\u662f\u4e00\u79cd\u5e38\u89c1\u7684\u4ea7\u54c1\u5b75\u5316\u673a\u5236\u3002"),(0,o.kt)("p",null,"\u76ee\u524d\uff0c\u79c1\u6709\u4e91\u5e02\u573a\u5360\u6709\u7387\u6bd4\u8f83\u9ad8\u7684 CICD \u5de5\u5177\u5bf9 Kubernetes \u90fd\u6709\u6240\u652f\u6301\uff0c\u6bd4\u5982 Jenkins\u3001GitLab CI\u3002\u4f46\u662f\uff0c\u8fd9\u4e9b\u5de5\u5177\u53ea\u662f\u5c06 Kubernetes \u4f5c\u4e3a\u5176\u6269\u5c55\u7684\u4e00\u4e2a\u65b9\u9762\uff0cKubernetes \u4f5c\u4e3a\u65b0\u7684\u57fa\u7840\u8bbe\u65bd\uff0c\u9700\u8981\u539f\u751f\u7684 CICD \u65b9\u6848\u3002"),(0,o.kt)("p",null,"\u53e6\u4e00\u65b9\u9762\uff0cJenkins \u7684\u5b50\u9879\u76ee JenkinsX \u4e5f\u5f00\u59cb\u9ed8\u8ba4\u4f7f\u7528 Tekton \u4f5c\u4e3a CI \u5f15\u64ce\u3002\u4f7f\u7528\u4e91\u539f\u751f\u4e00\u7b49\u516c\u6c11 CRD + Controller \u5b9e\u73b0\u7684 Tekton \uff0c\u65e0\u7591\u6709\u673a\u4f1a\u6210\u4e3a\u4e91\u539f\u751f\u7684\u4e3b\u6d41\u7f16\u6392\u5f15\u64ce\u3002 "),(0,o.kt)("p",null,"\u521b\u5efademo"),(0,o.kt)("p",null,"task"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'apiVersion: tekton.dev/v1beta1\nkind: Task\nmetadata:\n  name: demo-task\nspec:\n  params:\n    - name: message\n      description: The message to print\n      type: string\n    - name: hostname\n      description:  this is hostname\n      type: string\n  steps:\n    - name: print-message\n      image: busybox\n      script: |\n        #!/bin/sh\n        echo "Message: $(params.message)" \n        echo "Hostname: $(params.hostname)"\n')),(0,o.kt)("p",null,"\u521b\u5efatask-run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'root@k8s-master:~/tekton/demo# cat task01-run.yaml \napiVersion: tekton.dev/v1beta1\nkind: TaskRun\nmetadata:\n  name: demo-taskrun\nspec:\n  taskRef:\n    name: demo-task\n  params:\n    - name: message\n      value: "Hello, Tekton!"\n    - name: hostname\n      value: "www.zlqit.com"\n')),(0,o.kt)("p",null,"Task\u4e3b\u8981\u5305\u62ec\u4ee5\u4e0b\u5143\u7d20\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Parameters\uff1a\u7528\u4e8e\u5b9a\u4e49params\u53c2\u6570"),(0,o.kt)("li",{parentName:"ul"},"Resources\uff1a\u5b9a\u4e49\u8f93\u5165\u3001\u8f93\u51fa\u8d44\u6e90\uff0c\u8001\u7248\u672c\u7531PipelineResources\u5b9a\u4e49\uff0c\u4e0d\u8fc7\u5728\u65b0\u7248\u672c\u4e2dPipelineResources\u5c06\u88ab\u5f03\u7528"),(0,o.kt)("li",{parentName:"ul"},"Steps\uff1a\u5b9a\u4e49\u5177\u4f53\u7684\u64cd\u4f5c\u6b65\u9aa4"),(0,o.kt)("li",{parentName:"ul"},"Workspaces\uff1a\u5b9a\u4e49\u5de5\u4f5c\u533a\uff0cTask\u53ef\u4ee5\u5171\u4eab\u5de5\u4f5c\u533a"),(0,o.kt)("li",{parentName:"ul"},"Results\uff1a\u5b9a\u4e49\u7ed3\u679c\u8f93\u51fa\uff0c\u53ef\u4ee5\u7528\u4e8e\u5c55\u793a\u6216\u8005\u7ed9\u53e6\u5916\u7684Task\u4f7f\u7528")),(0,o.kt)("p",null,"\u6f14\u793aworkingDir"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'#\u6ce8\u610f\uff0cscript\u548ccommand\u4e0d\u80fd\u540c\u65f6\u4f7f\u7528\nroot@k8s-master:~/tekton/demo# cat task01.yaml \napiVersion: tekton.dev/v1beta1\nkind: Task\nmetadata:\n  name: demo-task\nspec:\n  params:\n    - name: message\n      description: The message to print\n      type: string\n    - name: hostname\n      description:  this is hostname\n      type: string\n  steps:\n    - name: print-message\n      image: busybox\n      script: |\n        #!/bin/sh\n        echo "Message: $(params.message)" \n        echo "Hostname: $(params.hostname)"\n        pwd\n      workingDir: /usr/local\nroot@k8s-master:~/tekton/demo# kubectl  logs  -f demo-taskrun-pod\nMessage: Hello, Tekton!\nHostname: www.zlqit.com\n/usr/local\n')),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/477393232"},"Tekton\u7cfb\u5217\u4e4b\u7406\u8bba\u7bc7 - \u77e5\u4e4e (zhihu.com)")),(0,o.kt)("h2",{id:"2\u4ee3\u7801\u62c9\u53d6"},"2\u3001\u4ee3\u7801\u62c9\u53d6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"root@k8s-master:~/tekton/demo/only-pull-code# ls -l\ntotal 28\n-rw-r--r-- 1 root root 356 Sep  5 17:01 demo-rescource.yaml\n-rw-r--r-- 1 root root 282 Sep  5 18:08 pipelinerun.yaml\n-rw-r--r-- 1 root root 444 Sep  5 18:13 pipeline.yaml\n-rw-r--r-- 1 root root  92 Sep  4 03:04 sa.yaml\n-rw-r--r-- 1 root root 227 Sep  4 03:04 secret.yaml\n-rw-r--r-- 1 root root 266 Sep  5 18:12 taskrun.yaml\n-rw-r--r-- 1 root root 573 Sep  5 18:29 task.yaml\nroot@k8s-master:~/tekton/demo/only-pull-code# pwd\n/root/tekton/demo/only-pull-code\n")),(0,o.kt)("p",null,"sa.yaml "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"root@k8s-master:~/tekton/demo/only-pull-code# cat sa.yaml \napiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: git-pull\nsecrets:\n  - name: basic-git\n")),(0,o.kt)("p",null," secret.yaml "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"root@k8s-master:~/tekton/demo/only-pull-code# cat secret.yaml \napiVersion: v1\nkind: Secret\nmetadata:\n  name: basic-git\n  annotations:\n    tekton.dev/git-0: https://gitee.com # Described below\ntype: kubernetes.io/basic-auth\nstringData:\n  username: 409003604@qq.com\n  password: xxxxxxxxxxxxxxx\n\n")),(0,o.kt)("p",null,"task.yaml "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"root@k8s-master:~/tekton/demo/only-pull-code# cat task.yaml \n# task-test.yaml\napiVersion: tekton.dev/v1beta1\nkind: Task\nmetadata:\n  name: test\nspec:\n  resources:\n    inputs:\n      - name: demo-resource\n        type: git\n  steps:\n    - name: run-test\n      image: alpine:3.15\n      workingDir: /workspace/demo-resource\n      script: |\n        pwd  && ls -l\n        for i in $(seq 1 20); do\n          touch /root/.m2/$i.txt\n        done\n        ls -l  /root/.m2/\n                \n      #args: ['-l']\n      volumeMounts:\n        - name: m2\n          mountPath: /root/.m2\n  volumes:\n    - name: m2\n      hostPath:\n        path: /root/.m2\n\n")),(0,o.kt)("p",null,"taskrun.yaml "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'root@k8s-master:~/tekton/demo/only-pull-code# cat taskrun.yaml \napiVersion: tekton.dev/v1beta1\nkind: TaskRun\nmetadata:\n  generateName: test-run-\n  namespace: default\nspec:\n  resources:\n    inputs:\n    - name: demo-resource \n      resourceRef:\n        name: demo-resource\n  serviceAccountName: "git-pull"\n  taskRef:\n    name: test\nroot@k8s-master:~/tekton/demo/only-pull-code# ls -l\n\n')),(0,o.kt)("p",null,"pipeline.yaml "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"root@k8s-master:~/tekton/demo/only-pull-code# cat pipeline.yaml \napiVersion: tekton.dev/v1beta1\nkind: Pipeline\nmetadata:\n  name: test-git\nspec:\n  resources:  # \u4e3a Tasks \u63d0\u4f9b\u8f93\u5165\u548c\u8f93\u51fa\u8d44\u6e90\u58f0\u660e\n    - name: demo-resource\n      type: git\n  tasks:  # \u6dfb\u52a0task\u5230\u6d41\u6c34\u7ebf\u4e2d\n    # \u8fd0\u884c\u5e94\u7528\u6d4b\u8bd5\n    - name: test-git\n      taskRef:\n        name: test\n      resources:\n        inputs:\n          - name: demo-resource # Task \u8f93\u5165\u540d\u79f0\n            resource: demo-resource # Pipeline \u8d44\u6e90\u540d\u79f0\n")),(0,o.kt)("p",null,"pipelinerun.yaml "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"root@k8s-master:~/tekton/demo/only-pull-code# cat pipelinerun.yaml \napiVersion: tekton.dev/v1beta1\nkind: PipelineRun\nmetadata:\n  name: test-git\n  namespace: default\nspec:\n  serviceAccountName: git-pull\n  pipelineRef:\n    name: test-git\n  resources:\n  - name: demo-resource  # \u6307\u5b9a\u8f93\u5165\u7684git\u4ed3\u5e93\u8d44\u6e90\n    resourceRef:\n      name: demo-resource\n\n\n")),(0,o.kt)("p",null,"demo-rescource.yaml "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"root@k8s-master:~/tekton/demo/only-pull-code# cat demo-rescource.yaml \napiVersion: tekton.dev/v1alpha1\nkind: PipelineResource\nmetadata:\n  name: demo-resource  # resource\u7684\u540d\u5b57\nspec:\n  type: git\n  params:\n  - name: revision\n    value: master  #\u6211\u8981\u62c9\u53d6\u4ed3\u5e93\u54ea\u4e2a\u5206\u652f\u7684\u4ee3\u7801\n  - name: url\n    value: https://gitee.com/zhang_lai_qiang/golang-test.git  #\u8fd9\u662f\u6211Github\u7684golang\u4ee3\u7801\u4ed3\u5e93\uff0c\u8fd0\u884c\u7684gin\u6846\u67b6\u4ee3\u7801\n")),(0,o.kt)("h2",{id:"3git\u62c9\u53d6\u548charbor\u767b\u5f55"},"3\u3001git\u62c9\u53d6\u548charbor\u767b\u5f55"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"root@k8s-master:~/tekton/demo/only-pull-code# cat demo-rescource.yaml \napiVersion: tekton.dev/v1alpha1\nkind: PipelineResource\nmetadata:\n  name: demo-resource  # resource\u7684\u540d\u5b57\nspec:\n  type: git\n  params:\n  - name: revision\n    value: master  #\u6211\u8981\u62c9\u53d6\u4ed3\u5e93\u54ea\u4e2a\u5206\u652f\u7684\u4ee3\u7801\n  - name: url\n    value: https://gitee.com/zhang_lai_qiang/golang-test.git  #\u8fd9\u662f\u6211Github\u7684golang\u4ee3\u7801\u4ed3\u5e93\uff0c\u8fd0\u884c\u7684gin\u6846\u67b6\u4ee3\u7801\n\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"root@k8s-master:~/tekton/demo/only-pull-code# cat sa.yaml \napiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: git-pull\nsecrets:\n  - name: basic-git\n  - name: basic-docker  \n")),(0,o.kt)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u5730\u65b9\uff1a "),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"annotations: \u9700\u8981\u5bf9\u6388\u6743\u7684\u7c7b\u578b\u8fdb\u884c\u8bf4\u660e\uff0c\u5b98\u7f51\u662f\u6839\u636e\u8fd9\u4e2a\u53bb\u767b\u5f55\u548c\u8bbf\u95eeharbor\u548cgit\u4ed3\u5e93")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"root@k8s-master:~/tekton/demo/only-pull-code# cat secret.yaml \napiVersion: v1\nkind: Secret\nmetadata:\n  name: basic-git\n  annotations:\n    tekton.dev/git-0: https://gitee.com # Described below\ntype: kubernetes.io/basic-auth\nstringData:\n  username: 409003604@qq.com\n  password: xxxxxxxxxxxxxxx\n")),(0,o.kt)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u5730\u65b9\uff1a "),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"annotations: \u9700\u8981\u5bf9\u6388\u6743\u7684\u7c7b\u578b\u8fdb\u884c\u8bf4\u660e\uff0c\u5b98\u7f51\u662f\u6839\u636e\u8fd9\u4e2a\u53bb\u767b\u5f55\u548c\u8bbf\u95eeharbor\u548cgit\u4ed3\u5e93")),(0,o.kt)("p",null,"\u6211\u4eec\u8fd9\u91cc\u5728 Secret \u5bf9\u8c61\u4e2d\u6dfb\u52a0\u4e86\u4e00\u4e2a tekton.dev/docker-0 \u7684 annotation\uff0c\u8be5\u6ce8\u89e3\u4fe1\u606f\u662f\u7528\u6765\u544a\u8bc9 Tekton \u8fd9\u4e9b\u8ba4\u8bc1\u4fe1\u606f\u6240\u5c5e\u7684 Docker \u955c\u50cf\u4ed3\u5e93\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"root@k8s-master:~/tekton/demo/only-pull-code# cat secret_docker.yaml \napiVersion: v1\nkind: Secret\nmetadata:\n  name: basic-docker\n  annotations:\n    tekton.dev/docker-0: https://registry.cn-hangzhou.aliyuncs.com # Described below\ntype: kubernetes.io/basic-auth\nstringData:\n  username: xxxxxxxxxxx@126.com\n  password: xxxxxxxxxxxxxxx\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'root@k8s-master:~/tekton/demo/only-pull-code# cat taskrun.yaml \napiVersion: tekton.dev/v1beta1\nkind: TaskRun\nmetadata:\n  generateName: test-run-\n  namespace: default\nspec:\n  resources:\n    inputs:\n    - name: demo-resource \n      resourceRef:\n        name: demo-resource\n  serviceAccountName: "git-pull"\n  taskRef:\n    name: test\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"root@k8s-master:~/tekton/demo/only-pull-code# cat task.yaml \n# task-test.yaml\napiVersion: tekton.dev/v1beta1\nkind: Task\nmetadata:\n  name: test\nspec:\n  resources:\n    inputs:\n      - name: demo-resource\n        type: git\n  params:\n  - name: dockerfile-path #\u6307\u660e dockerfile \u5728\u4ed3\u5e93\u4e2d\u7684\u54ea\u4e2a\u4f4d\u7f6e\n    type: string\n    default: $(inputs.resources.golang-resource.path)/ # repo\u8d44\u6e90\u7684\u8def\u5f84\n    description: dockerfile path\n\n  steps:\n    - name: run-test\n      image: alpine:3.15\n      workingDir: /workspace/demo-resource\n      script: |\n        pwd  && ls -l\n        for i in $(seq 1 20); do\n          touch /root/.m2/$i.txt\n        done\n        ls -l  /root/.m2/\n                \n      #args: ['-l']\n      volumeMounts:\n        - name: m2\n          mountPath: /root/.m2\n    - name: docker-login\n      image: docker:stable\n      env: \n        - name: DOCKER_USER\n          valueFROM:\n            secretKeyRef:\n              name:  basic-docker\n              key: username\n        - name: DOCKER_PASSWORD\n          valueFROM:\n            secretKeyRef:\n              name: basic-docker\n              key: password  \n      workingDir: /workspace/demo-resource\n      volumeMounts:\n      - name: docker-sock\n        mountPath: /var/run/docker.sock\n      script: | \n        docker login registry.cn-hangzhou.aliyuncs.com # -u $DOCKER_USER -p $DOCKER_PASSWORD\n  volumes:\n    - name: m2\n      hostPath:\n        path: /root/.m2\n    - name: docker-sock\n      hostPath:\n        path: /var/run/docker.sock\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"root@k8s-master:~/tekton/demo/only-pull-code# cat pipelinerun.yaml \napiVersion: tekton.dev/v1beta1\nkind: PipelineRun\nmetadata:\n  name: test-git\n  namespace: default\nspec:\n  serviceAccountName: git-pull\n  pipelineRef:\n    name: test-git\n  resources:\n  - name: demo-resource  # \u6307\u5b9a\u8f93\u5165\u7684git\u4ed3\u5e93\u8d44\u6e90\n    resourceRef:\n      name: demo-resource\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"root@k8s-master:~/tekton/demo/only-pull-code# cat pipeline.yaml \napiVersion: tekton.dev/v1beta1\nkind: Pipeline\nmetadata:\n  name: test-git\nspec:\n  resources:  # \u4e3a Tasks \u63d0\u4f9b\u8f93\u5165\u548c\u8f93\u51fa\u8d44\u6e90\u58f0\u660e\n    - name: demo-resource\n      type: git\n  tasks:  # \u6dfb\u52a0task\u5230\u6d41\u6c34\u7ebf\u4e2d\n    # \u8fd0\u884c\u5e94\u7528\u6d4b\u8bd5\n    - name: test-git\n      taskRef:\n        name: test\n      resources:\n        inputs:\n          - name: demo-resource # Task \u8f93\u5165\u540d\u79f0\n            resource: demo-resource # Pipeline \u8d44\u6e90\u540d\u79f0\n")),(0,o.kt)("p",null,"\u53c2\u8003\u94fe\u63a5 "),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://blog.51cto.com/u_14813740/4247653"},"https://blog.51cto.com/u_14813740/4247653")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.infvie.com/ops-notes/kubernetes-tekton.html"},"https://www.infvie.com/ops-notes/kubernetes-tekton.html")))}u.isMDXComponent=!0}}]);