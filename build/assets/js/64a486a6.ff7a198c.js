"use strict";(self.webpackChunkbookshell=self.webpackChunkbookshell||[]).push([[4744],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(n),d=s,k=u["".concat(l,".").concat(d)]||u[d]||c[d]||r;return n?a.createElement(k,i(i({ref:t},m),{},{components:n})):a.createElement(k,i({ref:t},m))}));function k(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,i=new Array(r);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:s,i[1]=o;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8670:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(7462),s=(n(7294),n(3905));const r={},i=void 0,o={unversionedId:"DevOps/gitOps/tekton-results",id:"DevOps/gitOps/tekton-results",title:"tekton-results",description:"\u4f7f\u7528 Results \u4f20\u9012\u6570\u636e",source:"@site/docs/DevOps/2-gitOps/2-tekton-results.md",sourceDirName:"DevOps/2-gitOps",slug:"/DevOps/gitOps/tekton-results",permalink:"/docs/DevOps/gitOps/tekton-results",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/2-gitOps/2-tekton-results.md",tags:[],version:"current",lastUpdatedBy:"unknown",lastUpdatedAt:1694949728,formattedLastUpdatedAt:"2023\u5e749\u670817\u65e5",sidebarPosition:2,frontMatter:{},sidebar:"DevOpsGitOps",previous:{title:"tekton\u62c9\u53d6\u4ee3\u7801",permalink:"/docs/DevOps/gitOps/tekton\u62c9\u53d6\u4ee3\u7801"},next:{title:"Tekton-catalog",permalink:"/docs/DevOps/gitOps/Tekton-catalog"}},l={},p=[{value:"\u4f7f\u7528 Results \u4f20\u9012\u6570\u636e",id:"\u4f7f\u7528-results-\u4f20\u9012\u6570\u636e",level:2},{value:"\u6848\u4f8b \u4f7f\u7528results\u5b9e\u73b0 commit",id:"\u6848\u4f8b-\u4f7f\u7528results\u5b9e\u73b0-commit",level:2},{value:"\u83b7\u53d6commit\u4fe1\u606f",id:"\u83b7\u53d6commit\u4fe1\u606f",level:4},{value:"pipeline\u4e2d\u83b7\u53d6commit\u4fe1\u606f",id:"pipeline\u4e2d\u83b7\u53d6commit\u4fe1\u606f",level:4}],m={toc:p},u="wrapper";function c(e){let{components:t,...r}=e;return(0,s.kt)(u,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"\u4f7f\u7528-results-\u4f20\u9012\u6570\u636e"},"\u4f7f\u7528 Results \u4f20\u9012\u6570\u636e"),(0,s.kt)("p",null,"\u6211\u4eec\u5728build\u955c\u50cf\u7684\u65f6\u5019\uff0c\u56e0\u4e3a\u90fd\u662f\u56fa\u5b9a\u5199\u6b7b\u7684\uff0c\u6240\u4ee5\uff0c\u6211\u4eec\u73b0\u5728\u9700\u8981\u5b9e\u73b0\u4fee\u6539\u955c\u50cftag, \u9700\u8981\u7528\u5230results\u8fd9\u4e2a\u65b9\u6cd5"),(0,s.kt)("p",null,"\u4e24\u79cd\u65b9\u5f0f"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u901a\u8fc7Build-id\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7commit-id\u6765\u5b9e\u73b0\u3002"),(0,s.kt)("li",{parentName:"ul"},"\u8fd8\u9700\u8981\u83b7\u53d6\u5230\u6784\u5efa\u7684\u65f6\u95f4")),(0,s.kt)("p",null,"\u8fd9\u91cc\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u5b9a\u4e49\u4e00\u4e2a Task \u4efb\u52a1\uff0c\u7136\u540e\u901a\u8fc7 ",(0,s.kt)("inlineCode",{parentName:"p"},"script")," \u811a\u672c\u53bb\u83b7\u53d6\u5230\u6570\u636e\u540e\u4f20\u5165\u5230 results \u4e2d\u53bb\uff0c\u6211\u4eec\u53ef\u4ee5\u628a\u8fd9\u4e9b results \u6570\u636e\u4f20\u9012\u5230\u6d41\u6c34\u7ebf\u4e2d\u7684\u5176\u4ed6\u4efb\u52a1\u4e2d\u53bb\uff0c\u6bd4\u5982\u6211\u4eec\u60f3\u8981\u83b7\u53d6 git commit \u7684 SHA \u503c\uff0c\u6216\u8005\u751f\u6210\u4e00\u4e2a\u968f\u673a\u7684 ID \u6765\u4f5c\u4e3a\u955c\u50cf TAG\uff0c\u6bd4\u5982\u8fd9\u91cc\u6211\u4eec\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a ",(0,s.kt)("inlineCode",{parentName:"p"},"generate-build-id")," \u7684 Task \u4efb\u52a1\uff0c\u5b9a\u4e49\u4e86 ",(0,s.kt)("inlineCode",{parentName:"p"},"get-timestamp")," \u548c ",(0,s.kt)("inlineCode",{parentName:"p"},"get-buildid")," \u4e24\u4e2a Steps\uff0c\u4e00\u4e2a\u7528\u4e8e\u751f\u6210\u65f6\u95f4\u6233\uff0c\u4e00\u4e2a\u7528\u4e8e\u751f\u6210\u4e00\u4e2a\u5305\u542b\u57fa\u672c\u7248\u672c\u7684\u7ed3\u679c\u503c\uff0c\u5c06\u7ed3\u679c\u6dfb\u52a0\u5230 ",(0,s.kt)("inlineCode",{parentName:"p"},"results")," \u4e2d\u53bb\u3002"),(0,s.kt)("p",null,"sa.yaml "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"root@k8s-master:~/tekton/demo/pipline-results# cat sa.yaml \napiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: git-pull\nsecrets:\n  - name: basic-git\n  - name: basic-docker\n")),(0,s.kt)("p",null,"secret_docker.yaml "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"root@k8s-master:~/tekton/demo/pipline-results# cat secret_docker.yaml \napiVersion: v1\nkind: Secret\nmetadata:\n  name: basic-docker\n  annotations:\n    tekton.dev/docker-0: https://registry.cn-hangzhou.aliyuncs.com # Described below\ntype: kubernetes.io/basic-auth\nstringData:\n  username: xxxxxxxxxx\n  password: xxxxxxxxxxx\n")),(0,s.kt)("p",null,"secret.yaml "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"root@k8s-master:~/tekton/demo/pipline-results# cat secret.yaml \napiVersion: v1\nkind: Secret\nmetadata:\n  name: basic-git\n  annotations:\n    tekton.dev/git-0: https://gitee.com # Described below\ntype: kubernetes.io/basic-auth\nstringData:\n  username: xxxxxxx\n  password: xxxxxxx\n")),(0,s.kt)("p",null,"task-pull-code.yaml  "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"root@k8s-master:~/tekton/demo/pipline-results# cat task-pull-code.yaml  \n# task-test.yaml\napiVersion: tekton.dev/v1beta1\nkind: Task\nmetadata:\n  name: task-results\nspec:\n  resources:\n    inputs:\n      - name: git-res\n        type: git\n    outputs:\n      - name: builtImage\n        type: image\n\n  params:\n  - name: dockerfile-path #\u6307\u660e dockerfile \u5728\u4ed3\u5e93\u4e2d\u7684\u54ea\u4e2a\u4f4d\u7f6e\n    type: string\n    default: $(inputs.resources.golang-resource.path)/ # repo\u8d44\u6e90\u7684\u8def\u5f84\n    description: dockerfile path\n\n  steps:\n    - name: run-test\n      image: alpine:3.15\n      workingDir: /workspace/demo-resource\n      script: |\n        pwd  && ls -l\n        for i in $(seq 1 20); do\n          touch /root/.m2/$i.txt\n        done\n        ls -l  /root/.m2/\n      volumeMounts:\n        - name: m2\n          mountPath: /root/.m2 \n  volumes:\n    - name: m2\n      hostPath:\n        path: /root/.m2\n    - name: docker-sock\n      hostPath:\n        path: /var/run/docker.sock\n")),(0,s.kt)("p",null,"task-generate-build-id.yaml "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'root@k8s-master:~/tekton/demo/pipline-results# cat task-generate-build-id.yaml \n# generate-build-id.yaml\napiVersion: tekton.dev/v1beta1\nkind: Task\nmetadata:\n  name: task-generate-build-id\nspec:\n  description: >-\n    Given a base version, this task generates a unique build id by appending\n    the base-version to the current timestamp.\n  params:\n    - name: base-version\n      description: Base product version\n      type: string\n      default: "1.0"\n  results:\n    - name: timestamp\n      description: Current timestamp\n    - name: build-id\n      description: ID of the current build\n    - name: hostname-ts\n      description: get hostname-ts\n  steps:\n    - name: get-timestamp\n      image: bash:5.0.18\n      script: |\n        #!/usr/bin/env bash\n        ts=`date "+%Y%m%d-%H%M%S"`\n        echo "Current Timestamp: ${ts}"\n        echo ${ts} | tr -d "\\n" | tee $(results.timestamp.path)\n    - name: get-buildid\n      image: bash:5.0.18\n      script: |\n        #!/usr/bin/env bash\n        ts=`cat $(results.timestamp.path)`\n        buildId=$(inputs.params.base-version)-${ts}\n        echo ${buildId} | tr -d "\\n" | tee $(results.build-id.path)\n\n    - name: hostname-ts\n      image: bash:5.0.18\n      script: |\n        #!/usr/bin/env bash\n        ts=`cat $(results.timestamp.path)`\n        hostname-name=`hostname`\n        hostnamets=${hostname-name}-${ts}\n        echo ${hostnamets} | tr -d "\\n" | tee $(results.hostname-ts.path)\n        echo \'[INFO]\' hostnamets: ${hostnamets}\n')),(0,s.kt)("p",null,"task-docker-build-push.yaml"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"root@k8s-master:~/tekton/demo/pipline-results# cat task-docker-build-push.yaml  \n# task-build-push.yaml\napiVersion: tekton.dev/v1beta1\nkind: Task\nmetadata:\n  name: task-build-and-push\nspec:\n  resources:\n    inputs: # \u5b9a\u4e49\u8f93\u5165\u8d44\u6e90\n      - name: repo #\u8f93\u5165\u8d44\u6e90\uff0c\u5c31\u662fgithub\u7684\u90a3\u4e2a\u4ed3\u5e93\n        type: git\n    outputs: # \u5b9a\u4e49\u8f93\u51fa\u8d44\u6e90\n      - name: builtImage # \u8f93\u51fa\u955c\u50cf\u540d\u5b57\n        type: image\n  params:\n    - name: pathToDockerfile #\u6307\u660e dockerfile \u5728\u4ed3\u5e93\u4e2d\u7684\u54ea\u4e2a\u4f4d\u7f6e\n      type: string\n      default: $(resources.inputs.repo.path)/Dockerfile # repo\u8d44\u6e90\u7684\u8def\u5f84\n      description: The path to the dockerfile to build\n    - name: pathToContext #\u6307\u660e dockerfile \u5728\u4ed3\u5e93\u4e2d\u7684\u54ea\u4e2a\u4f4d\u7f6e\n      type: string\n      default: $(resources.inputs.repo.path) # repo\u8d44\u6e90\u7684\u8def\u5f84\n      description: the build context used by docker daemon\n    - name: imageTag\n      type: string\n      default: \"v0.2.0\"\n      description: the docker image tag\n    - name: hostnamets\n      type: string\n      default: \"hello\"\n      description:  print host name\n  steps:\n    - name: build-and-push\n      image: docker:stable\n      script: |\n        #!/usr/bin/env sh\n        docker login registry.cn-hangzhou.aliyuncs.com\n        docker build -t $(resources.outputs.builtImage.url):$(params.imageTag) -f $(params.pathToDockerfile) $(params.pathToContext)\n        echo '[INFO]' pathToDockerfile $(resources.inputs.repo.path)/Dockerfile \n        echo '[INFO]' pathToContext    $(resources.inputs.repo.path)\n        docker push $(resources.outputs.builtImage.url):$(params.imageTag)  # \u8fd9\u8fb9\u7684\u53c2\u6570\u90fd\u662f\u5728 input \u548c output \u4e2d\u5b9a\u4e49\u7684\n        echo  '[INFO] hostname-ts:'  $(params.hostnamets)\n      volumeMounts:\n      - name: docker-sock # \u5c06docker.sock\u6587\u4ef6\u6302\u8f7d\u8fdb\u6765\uff0c\u4f7f\u7528\u5bbf\u4e3b\u673adocker daemon \u6784\u5efa\u955c\u50cf\n        mountPath: /var/run/docker.sock\n      - name: hosts # registry.nanjun\u7684\u89e3\u6790\u5728\u5916\u90e8\u5bbf\u4e3b\u673a\u7684hosts\u6587\u4ef6\u4e2d\uff0c\u8fd9\u8fb9\u4e5f\u8981\u6302\u8f7d\u8fdb\u6765\n        mountPath: /etc/host      \n  volumes:\n    - name: docker-sock\n      hostPath:\n        path: /var/run/docker.sock\n    - name: hosts\n      hostPath:\n        path: /etc/hosts\n")),(0,s.kt)("p",null,"\u589e\u52a0task-generate-build-id \u4efb\u52a1\uff0c\u7528\u6765\u751f\u6210\u6784\u5efaid"),(0,s.kt)("p",null," pipeline.yaml "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'root@k8s-master:~/tekton/demo/pipline-results# cat pipeline.yaml \napiVersion: tekton.dev/v1beta1\nkind: Pipeline\nmetadata:\n  name: pipeline-results\nspec:\n  resources:  # \u4e3a Tasks \u63d0\u4f9b\u8f93\u5165\u548c\u8f93\u51fa\u8d44\u6e90\u58f0\u660e\n    - name: git-res\n      type: git\n    - name: harbor-image\n      type: image\n  params:\n    - name: image-tag\n      type: string\n\n  tasks:  # \u6dfb\u52a0task\u5230\u6d41\u6c34\u7ebf\u4e2d\n\n    # \u62c9\u53d6\u4ee3\u7801\n    - name: clone-code\n      taskRef:\n        name: task-results\n      resources:\n        inputs:\n          - name: git-res # Task \u8f93\u5165\u540d\u79f0\n            resource: git-res # Pipeline \u8d44\u6e90\u540d\u79f0\n        outputs: \n          - name: builtImage\n            resource: harbor-image \n           \n    # \u83b7\u53d6\u6784\u5efaID\n    - name: get-build-id\n      taskRef:\n        name: task-generate-build-id\n      params:\n        - name: base-version\n          value: $(params.image-tag) \n         \n    # \u6784\u5efa\u5e76\u4e14\u63a8\u9001\u955c\u50cf\u5230\u4ed3\u5e93\n    - name: build-and-push\n      taskRef:\n        name: task-build-and-push\n      runAfter:\n        - clone-code\n        - get-build-id\n      resources:\n        inputs:\n          - name: repo\n            resource: git-res\n        outputs:\n          - name: builtImage\n            resource: harbor-image\n      params:\n        - name: imageTag\n          value: "$(tasks.get-build-id.results.build-id)"\n        - name: hostnamets\n          value: "$(tasks.get-build-id.results.hostname-ts)"  #\u83b7\u53d6\u4e0a\u4e00task\u53d8\u91cf\u503c\uff0c\u7136\u540e\u5728build-and-push\u4e2d\u5b9e\u73b0\u8c03\u7528\u548c\u6253\u5370\n')),(0,s.kt)("p",null,"pipelinerun.yaml "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'root@k8s-master:~/tekton/demo/pipline-results# cat pipelinerun.yaml \napiVersion: tekton.dev/v1beta1\nkind: PipelineRun\nmetadata:\n  name: pipelinerun-results\n  namespace: default\nspec:\n  serviceAccountName: git-pull\n  pipelineRef:\n    name: pipeline-results\n  resources:\n  - name: git-res  # \u6307\u5b9a\u8f93\u5165\u7684git\u4ed3\u5e93\u8d44\u6e90\n    resourceRef:\n      name: git-res\n  - name: harbor-image\n    resourceRef:\n      name: harbor-image\n\n  params:\n    - name: image-tag\n      value: "v0.3.0"\n')),(0,s.kt)("p",null,"demo-rescource.yaml "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"root@k8s-master:~/tekton/demo/pipline-results# cat demo-rescource.yaml \napiVersion: tekton.dev/v1alpha1\nkind: PipelineResource\nmetadata:\n  name: git-res  # resource\u7684\u540d\u5b57\nspec:\n  type: git\n  params:\n  - name: revision\n    value: master  #\u6211\u8981\u62c9\u53d6\u4ed3\u5e93\u54ea\u4e2a\u5206\u652f\u7684\u4ee3\u7801\n  - name: url\n    value: https://gitee.com/zhang_lai_qiang/golang-test.git  #\u8fd9\u662f\u6211Github\u7684golang\u4ee3\u7801\u4ed3\u5e93\uff0c\u8fd0\u884c\u7684gin\u6846\u67b6\u4ee3\u7801\n\n---\napiVersion: tekton.dev/v1alpha1\nkind: PipelineResource\nmetadata: \n  name: harbor-image\nspec:\n  type: image\n  params:\n    - name: url\n      value: registry.cn-hangzhou.aliyuncs.com/zlq_registry/tekon-demo\n")),(0,s.kt)("p",null,"start.sh "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"root@k8s-master:~/tekton/demo/pipline-results# cat start.sh \nfor i in `ls *.yaml | grep -v  run`; do kubectl delete  -f $i; done\nfor i in `ls *.yaml | grep -v  run`; do kubectl apply  -f $i; done\n\nkubectl  delete  -f pipelinerun.yaml \nkubectl  apply   -f pipelinerun.yaml \n")),(0,s.kt)("p",null,"\u6240\u6709\u4fee\u6539\u5b8c\u6210\u540e\uff0c\u91cd\u65b0\u6267\u884c\u6211\u4eec\u7684\u6574\u4e2a\u6d41\u6c34\u7ebf\u5373\u53ef"),(0,s.kt)("p",null,"tkn pipelinerun logs test-pipelinerun"),(0,s.kt)("h2",{id:"\u6848\u4f8b-\u4f7f\u7528results\u5b9e\u73b0-commit"},"\u6848\u4f8b \u4f7f\u7528results\u5b9e\u73b0 commit"),(0,s.kt)("p",null,"\u6b64\u5904\uff0c\u901a\u8fc7\u5b9a\u4e49commit\u6765\u5b9e\u73b0\u5728docker build\u7684\u65f6\u5019\u6765\u901a\u8fc7commit\u6765\u5b9e\u73b0\u90e8\u7f72"),(0,s.kt)("h4",{id:"\u83b7\u53d6commit\u4fe1\u606f"},"\u83b7\u53d6commit\u4fe1\u606f"),(0,s.kt)("p",null,"\u8fd9\u4e00\u6b65\u9700\u8981\u5728clone\u4ee3\u7801\u7684\u65f6\u5019\u5c31\u9700\u8981\u83b7\u53d6\u5230\uff0c\u5177\u4f53\u7684yaml\u53ef\u4ee5\u53c2\u8003\u5b98\u65b9\u6587\u6863\uff0c\u7136\u540e\u8fdb\u884c\u4fee\u6539\u5373\u53ef\n",(0,s.kt)("a",{parentName:"p",href:"https://hub.tekton.dev/tekton/task/git-clone"},"https://hub.tekton.dev/tekton/task/git-clone")," "),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image-20230917190859202",src:n(8907).Z,width:"1172",height:"766"})),(0,s.kt)("h4",{id:"pipeline\u4e2d\u83b7\u53d6commit\u4fe1\u606f"},"pipeline\u4e2d\u83b7\u53d6commit\u4fe1\u606f"),(0,s.kt)("p",null,"\u56e0\u4e3a\u5728pipeline\u4e2d\uff0c\u901a\u8fc7task\u6765\u5b9a\u4e49\u6bcf\u4e2atask\u6267\u884c\u7684\u90e8\u5206\uff0c\u4e0b\u9762\u662f\u62c9\u53d6\u4ee3\u7801\u7684task ,\u7136\u540e\u5728pipeline\u4e2d\u547d\u540d\u4e3aclone ,\u5173\u8054\u4e86git-clone\u7684\u4efb\u52a1\u3002\u6240\u4ee5\u5982\u679c\u60f3\u8981\u83b7\u53d6commit\u4fe1\u606f\uff0c\u9700\u8981\u4ececlone\u4e2d\u83b7\u53d6\u53d8\u91cf\u4fe1\u606f"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image-20230917191253053",src:n(1395).Z,width:"800",height:"276"})),(0,s.kt)("p",null,"\u7136\u540e\u5728pipeline\u4e2d\u9700\u8981\u628a\u53d8\u91cf\u6ce8\u5165\u8fdb\u53bb\uff0c\u9700\u8981\u5b9a\u4e49\uff0c\u7136\u540e\u5173\u8054\u7684\u4efb\u52a1\u4e3adocker ,  \u65b9\u5f0f\u5982\u4e0b\u3002"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image-20230917191754527",src:n(923).Z,width:"1130",height:"383"})),(0,s.kt)("p",null,"\u5728task-docker\u4e2d\u6dfb\u52a0\u6ce8\u5165\u7684\u53d8\u91cf"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image-20230917191956662",src:n(770).Z,width:"1308",height:"873"})))}c.isMDXComponent=!0},8907:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-20230917190859202-552d93e92b3b377c4ea668acc4892842.png"},1395:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-20230917191253053-d35afa4ec69ef385f6d2e39d5aa03fdf.png"},923:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-20230917191754527-800a432c500476429125b1c2ea4d1437.png"},770:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-20230917191956662-4c95edc9594353739e3939c24a054cb7.png"}}]);