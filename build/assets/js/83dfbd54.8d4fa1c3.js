"use strict";(self.webpackChunkbookshell=self.webpackChunkbookshell||[]).push([[1203],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>g});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(t),d=r,g=c["".concat(l,".").concat(d)]||c[d]||u[d]||s;return t?a.createElement(g,i(i({ref:n},m),{},{components:t})):a.createElement(g,i({ref:n},m))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,i=new Array(s);i[0]=d;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<s;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},34675:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var a=t(87462),r=(t(67294),t(3905));const s={},i=void 0,o={unversionedId:"DevOps/gitOps/Tekton-sidecar",id:"DevOps/gitOps/Tekton-sidecar",title:"Tekton-sidecar",description:"Tektion Sidecar",source:"@site/docs/DevOps/2-gitOps/4-Tekton-sidecar.md",sourceDirName:"DevOps/2-gitOps",slug:"/DevOps/gitOps/Tekton-sidecar",permalink:"/docs/DevOps/gitOps/Tekton-sidecar",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/2-gitOps/4-Tekton-sidecar.md",tags:[],version:"current",lastUpdatedBy:"unknown",lastUpdatedAt:1694285398,formattedLastUpdatedAt:"2023\u5e749\u67089\u65e5",sidebarPosition:4,frontMatter:{},sidebar:"DevOpsGitOps",previous:{title:"Tekton-catalog",permalink:"/docs/DevOps/gitOps/Tekton-catalog"},next:{title:"Tektion-Workspaces",permalink:"/docs/DevOps/gitOps/Tekton-workspace"}},l={},p=[{value:"Tektion Sidecar",id:"tektion-sidecar",level:2}],m={toc:p},c="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(c,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"tektion-sidecar"},"Tektion Sidecar"),(0,r.kt)("p",null,"\u4e24\u79cd\u65b9\u5f0f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Dood : Docker Outside of Docker  (\u901a\u8fc7\u6302\u8f7d\u5bbf\u4e3b\u673adocker daemon\u6765\u5b9e\u73b0)"),(0,r.kt)("li",{parentName:"ul"},"Dind  \uff08\u901a\u8fc7docker\u4e2d\u8fd0\u884cdocker\u6765\u5b9e\u73b0\uff09")),(0,r.kt)("p",null,"\u4ee5\u524d\u6211\u4eec\u5728\u6784\u5efa\u5bb9\u5668\u955c\u50cf\u7684\u65f6\u5019\u662f\u901a\u8fc7\u6302\u8f7d\u5bbf\u4e3b\u673a\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"docker.sock")," \u6587\u4ef6\u5230\u5bb9\u5668\u4e2d\u6765\u6267\u884c\u7684\uff08\u4e0a\u9762\u6211\u4eec\u662f\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"DOCKER_HOST")," \u73af\u5883\u53d8\u91cf\u6765\u6307\u5b9a Daemon \u5730\u5740\uff09\uff0c\u4e25\u683c\u610f\u4e49\u4e0a\u6765\u8bf4\u8fd9\u79cd\u65b9\u5f0f\u53eb ",(0,r.kt)("inlineCode",{parentName:"p"},"Dood - Docker Outside of Docker"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"DooD")," \u901a\u8fc7\u7ed1\u5b9a\u5b89\u88c5 Docker \u5957\u63a5\u5b57\u6765\u4f7f\u7528\u5176\u5e95\u5c42\u5bbf\u4e3b\u673a\u7684 Docker Daemon\uff0c\u800c\u771f\u6b63\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"DinD")," \u662f\u5728\u5176\u4e2d\u5305\u542b\u4e00\u4e2a\u5b8c\u6574\u7684 Docker \u670d\u52a1\u3002\u663e\u7136 ",(0,r.kt)("inlineCode",{parentName:"p"},"DooD")," \u8fd9\u79cd\u65b9\u5f0f\u66f4\u5feb\uff0c\u56e0\u4e3a\u53ef\u4ee5\u5229\u7528\u5b83\u7684\u7f13\u5b58\u673a\u5236\uff0c\u800c ",(0,r.kt)("inlineCode",{parentName:"p"},"DinD")," \u663e\u7136\u66f4\u52a0\u5b89\u5168\u3001\u66f4\u52a0\u5e72\u51c0\uff0c\u5bf9\u5bbf\u4e3b\u673a\u4ea7\u751f\u7684\u5f71\u54cd\u66f4\u5c0f\uff0c\u800c\u4e14\u652f\u6301\u5e76\u884c\u8fd0\u884c\uff0c\u56e0\u4e3a\u6bcf\u4e2a\u5bb9\u5668\u91cc\u9762\u90fd\u662f\u4e00\u4e2a\u72ec\u7acb\u7684 Docker Daemon\uff0c\u4e92\u76f8\u4e0d\u53d7\u5f71\u54cd\uff0c\u5f53\u7136 ",(0,r.kt)("inlineCode",{parentName:"p"},"DooD")," \u66f4\u52a0\u7b80\u5355\u6613\u7528\u3002\u8fd9\u91cc\u6211\u4eec\u5c31\u6765\u4f7f\u7528 Sidecar \u7684\u65b9\u5f0f\u4e3a Tekton \u4e2d\u7684\u5bb9\u5668\u6784\u5efa\u63d0\u4f9b\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"DinD")," \u6a21\u5f0f\u7684\u6784\u5efa\u670d\u52a1\u3002"),(0,r.kt)("p",null,"root@k8s-master:~/tekton/demo/pipline-sidecar# "),(0,r.kt)("p",null,"demo-rescource.yaml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: tekton.dev/v1alpha1\nkind: PipelineResource\nmetadata:\n  name: git-res  # resource\u7684\u540d\u5b57\nspec:\n  type: git\n  params:\n  - name: revision\n    value: master  #\u6211\u8981\u62c9\u53d6\u4ed3\u5e93\u54ea\u4e2a\u5206\u652f\u7684\u4ee3\u7801\n  - name: url\n    value: https://gitee.com/zhang_lai_qiang/golang-test.git  #\u8fd9\u662f\u6211Github\u7684golang\u4ee3\u7801\u4ed3\u5e93\uff0c\u8fd0\u884c\u7684gin\u6846\u67b6\u4ee3\u7801\n\n---\napiVersion: tekton.dev/v1alpha1\nkind: PipelineResource\nmetadata: \n  name: harbor-image\nspec:\n  type: image\n  params:\n    - name: url\n      value: registry.cn-hangzhou.aliyuncs.com/zlq_registry/tekon-demo\n")),(0,r.kt)("p",null,"pipelinerun.yaml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: tekton.dev/v1beta1\nkind: PipelineRun\nmetadata:\n  name: pipelinerun-results\n  namespace: default\nspec:\n  serviceAccountName: git-pull\n  pipelineRef:\n    name: pipeline-results\n  resources:\n  - name: git-res  # \u6307\u5b9a\u8f93\u5165\u7684git\u4ed3\u5e93\u8d44\u6e90\n    resourceRef:\n      name: git-res\n  - name: harbor-image\n    resourceRef:\n      name: harbor-image\n\n  params:\n    - name: image-tag\n      value: "v0.3.0"\n    - name: image\n      value: "registry.cn-hangzhou.aliyuncs.com/zlq_registry/tekon-demo"\n')),(0,r.kt)("p",null,"pipeline.yaml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: tekton.dev/v1beta1\nkind: Pipeline\nmetadata:\n  name: pipeline-results\nspec:\n  resources:  # \u4e3a Tasks \u63d0\u4f9b\u8f93\u5165\u548c\u8f93\u51fa\u8d44\u6e90\u58f0\u660e\n    - name: git-res\n      type: git\n    - name: harbor-image\n      type: image\n  params:\n    - name: image\n      type: string\n    - name: image-tag\n      type: string\n      default: "v0.4.0"\n    - name: registry_url\n      type: string\n      default: "registry.cn-hangzhou.aliyuncs.com"\n    - name: registry_mirror\n      type: string\n      default: "https://ot2k4d59.mirror.aliyuncs.com/"\n    - name: insecure_registry\n      type: string\n      default: "harbor.k8s.local"\n  tasks:  # \u6dfb\u52a0task\u5230\u6d41\u6c34\u7ebf\u4e2d\n\n    # \u62c9\u53d6\u4ee3\u7801\n    - name: clone-code\n      taskRef:\n        name: task-results\n      resources:\n        inputs:\n          - name: git-res # Task \u8f93\u5165\u540d\u79f0\n            resource: git-res # Pipeline \u8d44\u6e90\u540d\u79f0\n        outputs: \n          - name: builtImage\n            resource: harbor-image \n           \n    # \u83b7\u53d6\u6784\u5efaID\n    - name: get-build-id\n      taskRef:\n        name: task-generate-build-id\n      params:\n        - name: base-version\n          value: $(params.image-tag) \n\n    # \u6784\u5efa\u5e76\u4e14\u63a8\u9001\u955c\u50cf\u5230\u4ed3\u5e93\n    - name: build-and-push\n      taskRef:\n        name: task-build-and-push\n      runAfter:\n        - clone-code\n        - get-build-id\n      resources:\n        inputs:\n          - name: repo\n            resource: git-res\n        outputs:\n          - name: builtImage\n            resource: harbor-image\n      params:\n        - name: imageTag\n          value: "$(tasks.get-build-id.results.build-id)"\n        - name: hostnamets\n          value: "$(tasks.get-build-id.results.hostname-ts)"\n        - name: image\n          value: "$(params.image):$(tasks.get-build-id.results.build-id)"\n        - name: registry_url\n          value: $(params.registry_url)\n        - name: insecure_registry\n          value: $(params.insecure_registry)\n        - name: registry_mirror\n          value: $(params.registry_mirror)\n')),(0,r.kt)("p",null,"sa.yaml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: git-pull\nsecrets:\n  - name: basic-git\n  - name: basic-docker\n")),(0,r.kt)("p",null,"secret_docker.yaml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Secret\nmetadata:\n  name: basic-docker\n  annotations:\n    tekton.dev/docker-0: https://registry.cn-hangzhou.aliyuncs.com # Described below\ntype: kubernetes.io/basic-auth\nstringData:\n  username: xxxxxx\n  password: xxxxxxx\n")),(0,r.kt)("p",null,"secret.yaml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Secret\nmetadata:\n  name: basic-git\n  annotations:\n    tekton.dev/git-0: https://gitee.com # Described below\ntype: kubernetes.io/basic-auth\nstringData:\n  username: xxxxxx\n  password: xxxxxxx\n")),(0,r.kt)("p",null,"\u9700\u8981\u5728\u6b64\u5904\u505a\u9002\u5f53\u7684\u8c03\u6574"),(0,r.kt)("p",null,"task-docker-build-push.yaml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'# task-build-push.yaml\napiVersion: tekton.dev/v1beta1\nkind: Task\nmetadata:\n  name: task-build-and-push\nspec:\n  resources:\n    inputs: # \u5b9a\u4e49\u8f93\u5165\u8d44\u6e90\n      - name: repo #\u8f93\u5165\u8d44\u6e90\uff0c\u5c31\u662fgithub\u7684\u90a3\u4e2a\u4ed3\u5e93\n        type: git\n    outputs: # \u5b9a\u4e49\u8f93\u51fa\u8d44\u6e90\n      - name: builtImage # \u8f93\u51fa\u955c\u50cf\u540d\u5b57\n        type: image\n  params:\n    - name: pathToDockerfile #\u6307\u660e dockerfile \u5728\u4ed3\u5e93\u4e2d\u7684\u54ea\u4e2a\u4f4d\u7f6e\n      type: string\n      default: $(resources.inputs.repo.path)/Dockerfile # repo\u8d44\u6e90\u7684\u8def\u5f84\n      description: The path to the dockerfile to build\n    - name: builder_image\n      description: The location of the docker builder image.\n      default: docker:stable\n    - name: pathToContext #\u6307\u660e dockerfile \u5728\u4ed3\u5e93\u4e2d\u7684\u54ea\u4e2a\u4f4d\u7f6e\n      type: string\n      default: $(resources.inputs.repo.path) # repo\u8d44\u6e90\u7684\u8def\u5f84\n      description: the build context used by docker daemon\n    - name: imageTag\n      type: string\n      default: "v0.2.0"\n      description: the docker image tag\n    - name: hostnamets\n      type: string\n      default: "hello"\n      description:  print host name\n    - name: registry_url\n      type: string\n      description: harbor registry url\n      default: "registry.cn-hangzhou.aliyuncs.com"  \n    - name: build_extra_args\n      description: Extra parameters passed for the build command when building images.\n      default: ""\n    - name: dockerfile\n      description: Path to the Dockerfile to build.\n      default: ./Dockerfile\n    - name: image\n      description: Reference of the image docker will produce.\n    - name: context\n      description: Path to the directory to use as context.\n      default: .\n    - name: push_extra_args\n      description: Extra parameters passed for the push command when pushing images.\n      default: ""\n  steps:\n    - name: docker-build # \u6784\u5efa\u6b65\u9aa4\n      image: $(params.builder_image)\n      env:\n        - name: DOCKER_HOST # \u7528 TLS \u5f62\u5f0f\u901a\u8fc7 TCP \u94fe\u63a5 sidecar\n          value: tcp://localhost:2376\n        - name: DOCKER_TLS_VERIFY # \u6821\u9a8c TLS\n          value: "1"\n        - name: DOCKER_CERT_PATH # \u4f7f\u7528 sidecar \u5b88\u62a4\u8fdb\u7a0b\u751f\u6210\u7684\u8bc1\u4e66\n          value: /certs/client\n      workingDir: $(resources.inputs.repo.path)\n      script: | # docker \u6784\u5efa\u547d\u4ee4\n        echo  \'[INFO]\'  \'\u5f53\u524d\u76ee\u5f55\u4e3a:\'  && pwd \n        ls -l \n        cat Dockerfile\n        docker login $(params.registry_url)\n        docker build \\\n          $(params.build_extra_args) \\\n          --no-cache \\\n          -f $(params.dockerfile) -t $(params.image) $(params.context)\n      volumeMounts: # \u58f0\u660e\u6302\u8f7d\u8bc1\u4e66\u76ee\u5f55\n        - mountPath: /certs/client\n          name: dind-certs\n    \n    - name: docker-push #\n      image: $(params.builder_image)\n      env:\n        - name: DOCKER_HOST\n          value: tcp://localhost:2376\n        - name: DOCKER_TLS_VERIFY\n          value: "1"\n        - name: DOCKER_CERT_PATH\n          value: /certs/client\n      workingDir: $(resources.inputs.repo.path)\n      script: | # \u63a8\u9001 docker \u955c\u50cf\n        docker push $(params.push_extra_args) $(params.image)\n      volumeMounts:\n        - mountPath: /certs/client\n          name: dind-certs\n\n  sidecars: # sidecar \u6a21\u5f0f\uff0c\u63d0\u4f9b docker daemon\u670d\u52a1\uff0c\u5b9e\u73b0\u771f\u6b63\u7684 DinD \u6a21\u5f0f\n    - image: docker:dind\n      name: server\n      args:\n        - --storage-driver=vfs\n        - --userland-proxy=false\n        - --debug\n        #- --insecure-registry=$(params.insecure_registry)\n        - --registry-mirror=$(params.registry_mirror)\n      securityContext:\n        privileged: true\n      env:\n        - name: DOCKER_TLS_CERTDIR # \u5c06\u751f\u6210\u7684\u8bc1\u4e66\u5199\u5165\u4e0e\u5ba2\u6237\u7aef\u5171\u4eab\u7684\u8def\u5f84\n          value: /certs\n      volumeMounts:\n        - mountPath: /certs/client\n          name: dind-certs\n      readinessProbe: # \u7b49\u5f85 dind daemon \u751f\u6210\u5b83\u4e0e\u5ba2\u6237\u7aef\u5171\u4eab\u7684\u8bc1\u4e66\n        periodSeconds: 1\n        exec:\n          command: ["ls", "/certs/client/ca.pem"]\n  volumes: # \u4f7f\u7528 emptyDir \u7684\u5f62\u5f0f\u5373\u53ef\n    - name: dind-certs\n      emptyDir: {}\n')),(0,r.kt)("p",null,"task-generate-build-id.yaml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'# generate-build-id.yaml\napiVersion: tekton.dev/v1beta1\nkind: Task\nmetadata:\n  name: task-generate-build-id\nspec:\n  description: >-\n    Given a base version, this task generates a unique build id by appending\n    the base-version to the current timestamp.\n  params:\n    - name: base-version\n      description: Base product version\n      type: string\n      default: "1.0"\n  results:\n    - name: timestamp\n      description: Current timestamp\n    - name: build-id\n      description: ID of the current build\n    - name: hostname-ts\n      description: get hostname-ts\n  steps:\n    - name: get-timestamp\n      image: bash:5.0.18\n      script: |\n        #!/usr/bin/env bash\n        ts=`date "+%Y%m%d-%H%M%S"`\n        echo "Current Timestamp: ${ts}"\n        echo ${ts} | tr -d "\\n" | tee $(results.timestamp.path)\n    - name: get-buildid\n      image: bash:5.0.18\n      script: |\n        #!/usr/bin/env bash\n        ts=`cat $(results.timestamp.path)`\n        buildId=$(inputs.params.base-version)-${ts}\n        echo ${buildId} | tr -d "\\n" | tee $(results.build-id.path)\n\n    - name: hostname-ts\n      image: bash:5.0.18\n      script: |\n        #!/usr/bin/env bash\n        ts=`cat $(results.timestamp.path)`\n        hostname-name=`hostname`\n        hostnamets=${hostname-name}-${ts}\n        echo ${hostnamets} | tr -d "\\n" | tee $(results.hostname-ts.path)\n        echo \'[INFO]\' hostnamets: ${hostnamets}\n')),(0,r.kt)("p",null,"task-pull-code.yaml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# task-test.yaml\napiVersion: tekton.dev/v1beta1\nkind: Task\nmetadata:\n  name: task-results\nspec:\n  resources:\n    inputs:\n      - name: git-res\n        type: git\n    outputs:\n      - name: builtImage\n        type: image\n\n  params:\n  - name: dockerfile-path #\u6307\u660e dockerfile \u5728\u4ed3\u5e93\u4e2d\u7684\u54ea\u4e2a\u4f4d\u7f6e\n    type: string\n    default: $(inputs.resources.golang-resource.path)/ # repo\u8d44\u6e90\u7684\u8def\u5f84\n    description: dockerfile path\n\n  steps:\n    - name: run-test\n      image: alpine:3.15\n      workingDir: /workspace/git-res/\n      script: |\n        ls -l\n        #pwd  && ls -l\n        for i in $(seq 1 20); do\n          touch /root/.m2/$i.txt\n        done\n        #ls -l  /root/.m2/\n      volumeMounts:\n        - name: m2\n          mountPath: /root/.m2 \n  volumes:\n    - name: m2\n      hostPath:\n        path: /root/.m2\n    - name: docker-sock\n      hostPath:\n        path: /var/run/docker.sock\n")))}u.isMDXComponent=!0}}]);