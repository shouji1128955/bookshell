"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4815],{9121:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var a=n(4848),t=n(8453);const s={},i=void 0,o={id:"DevOps/gitOps/Tekton-sidecar",title:"Tekton-sidecar",description:"Tektion Sidecar",source:"@site/docs/DevOps/2-gitOps/4-Tekton-sidecar.md",sourceDirName:"DevOps/2-gitOps",slug:"/DevOps/gitOps/Tekton-sidecar",permalink:"/docs/DevOps/gitOps/Tekton-sidecar",draft:!1,unlisted:!1,editUrl:"https://github.com/shouji1128955/bookshell/edit/main/docs/DevOps/2-gitOps/4-Tekton-sidecar.md",tags:[],version:"current",lastUpdatedBy:"zhanglaiqiang",lastUpdatedAt:1728495211e3,sidebarPosition:4,frontMatter:{},sidebar:"DevOpsGitOps",previous:{title:"Tekton-catalog",permalink:"/docs/DevOps/gitOps/Tekton-catalog"},next:{title:"Tektion-Workspaces",permalink:"/docs/DevOps/gitOps/Tekton-workspace"}},c={},d=[{value:"Tektion Sidecar",id:"tektion-sidecar",level:2}];function m(e){const r={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.h2,{id:"tektion-sidecar",children:"Tektion Sidecar"}),"\n",(0,a.jsx)(r.p,{children:"\u4e24\u79cd\u65b9\u5f0f"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"Dood : Docker Outside of Docker  (\u901a\u8fc7\u6302\u8f7d\u5bbf\u4e3b\u673adocker daemon\u6765\u5b9e\u73b0)"}),"\n",(0,a.jsx)(r.li,{children:"Dind  \uff08\u901a\u8fc7docker\u4e2d\u8fd0\u884cdocker\u6765\u5b9e\u73b0\uff09"}),"\n"]}),"\n",(0,a.jsxs)(r.p,{children:["\u4ee5\u524d\u6211\u4eec\u5728\u6784\u5efa\u5bb9\u5668\u955c\u50cf\u7684\u65f6\u5019\u662f\u901a\u8fc7\u6302\u8f7d\u5bbf\u4e3b\u673a\u7684 ",(0,a.jsx)(r.code,{children:"docker.sock"})," \u6587\u4ef6\u5230\u5bb9\u5668\u4e2d\u6765\u6267\u884c\u7684\uff08\u4e0a\u9762\u6211\u4eec\u662f\u901a\u8fc7 ",(0,a.jsx)(r.code,{children:"DOCKER_HOST"})," \u73af\u5883\u53d8\u91cf\u6765\u6307\u5b9a Daemon \u5730\u5740\uff09\uff0c\u4e25\u683c\u610f\u4e49\u4e0a\u6765\u8bf4\u8fd9\u79cd\u65b9\u5f0f\u53eb ",(0,a.jsx)(r.code,{children:"Dood - Docker Outside of Docker"}),"\uff0c",(0,a.jsx)(r.code,{children:"DooD"})," \u901a\u8fc7\u7ed1\u5b9a\u5b89\u88c5 Docker \u5957\u63a5\u5b57\u6765\u4f7f\u7528\u5176\u5e95\u5c42\u5bbf\u4e3b\u673a\u7684 Docker Daemon\uff0c\u800c\u771f\u6b63\u7684 ",(0,a.jsx)(r.code,{children:"DinD"})," \u662f\u5728\u5176\u4e2d\u5305\u542b\u4e00\u4e2a\u5b8c\u6574\u7684 Docker \u670d\u52a1\u3002\u663e\u7136 ",(0,a.jsx)(r.code,{children:"DooD"})," \u8fd9\u79cd\u65b9\u5f0f\u66f4\u5feb\uff0c\u56e0\u4e3a\u53ef\u4ee5\u5229\u7528\u5b83\u7684\u7f13\u5b58\u673a\u5236\uff0c\u800c ",(0,a.jsx)(r.code,{children:"DinD"})," \u663e\u7136\u66f4\u52a0\u5b89\u5168\u3001\u66f4\u52a0\u5e72\u51c0\uff0c\u5bf9\u5bbf\u4e3b\u673a\u4ea7\u751f\u7684\u5f71\u54cd\u66f4\u5c0f\uff0c\u800c\u4e14\u652f\u6301\u5e76\u884c\u8fd0\u884c\uff0c\u56e0\u4e3a\u6bcf\u4e2a\u5bb9\u5668\u91cc\u9762\u90fd\u662f\u4e00\u4e2a\u72ec\u7acb\u7684 Docker Daemon\uff0c\u4e92\u76f8\u4e0d\u53d7\u5f71\u54cd\uff0c\u5f53\u7136 ",(0,a.jsx)(r.code,{children:"DooD"})," \u66f4\u52a0\u7b80\u5355\u6613\u7528\u3002\u8fd9\u91cc\u6211\u4eec\u5c31\u6765\u4f7f\u7528 Sidecar \u7684\u65b9\u5f0f\u4e3a Tekton \u4e2d\u7684\u5bb9\u5668\u6784\u5efa\u63d0\u4f9b\u4e00\u4e2a ",(0,a.jsx)(r.code,{children:"DinD"})," \u6a21\u5f0f\u7684\u6784\u5efa\u670d\u52a1\u3002"]}),"\n",(0,a.jsx)(r.p,{children:"root@k8s-master:~/tekton/demo/pipline-sidecar#"}),"\n",(0,a.jsx)(r.p,{children:"demo-rescource.yaml"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-yaml",children:"apiVersion: tekton.dev/v1alpha1\r\nkind: PipelineResource\r\nmetadata:\r\n  name: git-res  # resource\u7684\u540d\u5b57\r\nspec:\r\n  type: git\r\n  params:\r\n  - name: revision\r\n    value: master  #\u6211\u8981\u62c9\u53d6\u4ed3\u5e93\u54ea\u4e2a\u5206\u652f\u7684\u4ee3\u7801\r\n  - name: url\r\n    value: https://gitee.com/zhang_lai_qiang/golang-test.git  #\u8fd9\u662f\u6211Github\u7684golang\u4ee3\u7801\u4ed3\u5e93\uff0c\u8fd0\u884c\u7684gin\u6846\u67b6\u4ee3\u7801\r\n\r\n---\r\napiVersion: tekton.dev/v1alpha1\r\nkind: PipelineResource\r\nmetadata: \r\n  name: harbor-image\r\nspec:\r\n  type: image\r\n  params:\r\n    - name: url\r\n      value: registry.cn-hangzhou.aliyuncs.com/zlq_registry/tekon-demo\n"})}),"\n",(0,a.jsx)(r.p,{children:"pipelinerun.yaml"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-yaml",children:'apiVersion: tekton.dev/v1beta1\r\nkind: PipelineRun\r\nmetadata:\r\n  name: pipelinerun-results\r\n  namespace: default\r\nspec:\r\n  serviceAccountName: git-pull\r\n  pipelineRef:\r\n    name: pipeline-results\r\n  resources:\r\n  - name: git-res  # \u6307\u5b9a\u8f93\u5165\u7684git\u4ed3\u5e93\u8d44\u6e90\r\n    resourceRef:\r\n      name: git-res\r\n  - name: harbor-image\r\n    resourceRef:\r\n      name: harbor-image\r\n\r\n  params:\r\n    - name: image-tag\r\n      value: "v0.3.0"\r\n    - name: image\r\n      value: "registry.cn-hangzhou.aliyuncs.com/zlq_registry/tekon-demo"\n'})}),"\n",(0,a.jsx)(r.p,{children:"pipeline.yaml"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-yaml",children:'apiVersion: tekton.dev/v1beta1\r\nkind: Pipeline\r\nmetadata:\r\n  name: pipeline-results\r\nspec:\r\n  resources:  # \u4e3a Tasks \u63d0\u4f9b\u8f93\u5165\u548c\u8f93\u51fa\u8d44\u6e90\u58f0\u660e\r\n    - name: git-res\r\n      type: git\r\n    - name: harbor-image\r\n      type: image\r\n  params:\r\n    - name: image\r\n      type: string\r\n    - name: image-tag\r\n      type: string\r\n      default: "v0.4.0"\r\n    - name: registry_url\r\n      type: string\r\n      default: "registry.cn-hangzhou.aliyuncs.com"\r\n    - name: registry_mirror\r\n      type: string\r\n      default: "https://ot2k4d59.mirror.aliyuncs.com/"\r\n    - name: insecure_registry\r\n      type: string\r\n      default: "harbor.k8s.local"\r\n  tasks:  # \u6dfb\u52a0task\u5230\u6d41\u6c34\u7ebf\u4e2d\r\n\r\n    # \u62c9\u53d6\u4ee3\u7801\r\n    - name: clone-code\r\n      taskRef:\r\n        name: task-results\r\n      resources:\r\n        inputs:\r\n          - name: git-res # Task \u8f93\u5165\u540d\u79f0\r\n            resource: git-res # Pipeline \u8d44\u6e90\u540d\u79f0\r\n        outputs: \r\n          - name: builtImage\r\n            resource: harbor-image \r\n           \r\n    # \u83b7\u53d6\u6784\u5efaID\r\n    - name: get-build-id\r\n      taskRef:\r\n        name: task-generate-build-id\r\n      params:\r\n        - name: base-version\r\n          value: $(params.image-tag) \r\n\r\n    # \u6784\u5efa\u5e76\u4e14\u63a8\u9001\u955c\u50cf\u5230\u4ed3\u5e93\r\n    - name: build-and-push\r\n      taskRef:\r\n        name: task-build-and-push\r\n      runAfter:\r\n        - clone-code\r\n        - get-build-id\r\n      resources:\r\n        inputs:\r\n          - name: repo\r\n            resource: git-res\r\n        outputs:\r\n          - name: builtImage\r\n            resource: harbor-image\r\n      params:\r\n        - name: imageTag\r\n          value: "$(tasks.get-build-id.results.build-id)"\r\n        - name: hostnamets\r\n          value: "$(tasks.get-build-id.results.hostname-ts)"\r\n        - name: image\r\n          value: "$(params.image):$(tasks.get-build-id.results.build-id)"\r\n        - name: registry_url\r\n          value: $(params.registry_url)\r\n        - name: insecure_registry\r\n          value: $(params.insecure_registry)\r\n        - name: registry_mirror\r\n          value: $(params.registry_mirror)\n'})}),"\n",(0,a.jsx)(r.p,{children:"sa.yaml"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-yaml",children:"apiVersion: v1\r\nkind: ServiceAccount\r\nmetadata:\r\n  name: git-pull\r\nsecrets:\r\n  - name: basic-git\r\n  - name: basic-docker\n"})}),"\n",(0,a.jsx)(r.p,{children:"secret_docker.yaml"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-yaml",children:"apiVersion: v1\r\nkind: Secret\r\nmetadata:\r\n  name: basic-docker\r\n  annotations:\r\n    tekton.dev/docker-0: https://registry.cn-hangzhou.aliyuncs.com # Described below\r\ntype: kubernetes.io/basic-auth\r\nstringData:\r\n  username: xxxxxx\r\n  password: xxxxxxx\n"})}),"\n",(0,a.jsx)(r.p,{children:"secret.yaml"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-yaml",children:"apiVersion: v1\r\nkind: Secret\r\nmetadata:\r\n  name: basic-git\r\n  annotations:\r\n    tekton.dev/git-0: https://gitee.com # Described below\r\ntype: kubernetes.io/basic-auth\r\nstringData:\r\n  username: xxxxxx\r\n  password: xxxxxxx\n"})}),"\n",(0,a.jsx)(r.p,{children:"\u9700\u8981\u5728\u6b64\u5904\u505a\u9002\u5f53\u7684\u8c03\u6574"}),"\n",(0,a.jsx)(r.p,{children:"task-docker-build-push.yaml"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-yaml",children:'# task-build-push.yaml\r\napiVersion: tekton.dev/v1beta1\r\nkind: Task\r\nmetadata:\r\n  name: task-build-and-push\r\nspec:\r\n  resources:\r\n    inputs: # \u5b9a\u4e49\u8f93\u5165\u8d44\u6e90\r\n      - name: repo #\u8f93\u5165\u8d44\u6e90\uff0c\u5c31\u662fgithub\u7684\u90a3\u4e2a\u4ed3\u5e93\r\n        type: git\r\n    outputs: # \u5b9a\u4e49\u8f93\u51fa\u8d44\u6e90\r\n      - name: builtImage # \u8f93\u51fa\u955c\u50cf\u540d\u5b57\r\n        type: image\r\n  params:\r\n    - name: pathToDockerfile #\u6307\u660e dockerfile \u5728\u4ed3\u5e93\u4e2d\u7684\u54ea\u4e2a\u4f4d\u7f6e\r\n      type: string\r\n      default: $(resources.inputs.repo.path)/Dockerfile # repo\u8d44\u6e90\u7684\u8def\u5f84\r\n      description: The path to the dockerfile to build\r\n    - name: builder_image\r\n      description: The location of the docker builder image.\r\n      default: docker:stable\r\n    - name: pathToContext #\u6307\u660e dockerfile \u5728\u4ed3\u5e93\u4e2d\u7684\u54ea\u4e2a\u4f4d\u7f6e\r\n      type: string\r\n      default: $(resources.inputs.repo.path) # repo\u8d44\u6e90\u7684\u8def\u5f84\r\n      description: the build context used by docker daemon\r\n    - name: imageTag\r\n      type: string\r\n      default: "v0.2.0"\r\n      description: the docker image tag\r\n    - name: hostnamets\r\n      type: string\r\n      default: "hello"\r\n      description:  print host name\r\n    - name: registry_url\r\n      type: string\r\n      description: harbor registry url\r\n      default: "registry.cn-hangzhou.aliyuncs.com"  \r\n    - name: build_extra_args\r\n      description: Extra parameters passed for the build command when building images.\r\n      default: ""\r\n    - name: dockerfile\r\n      description: Path to the Dockerfile to build.\r\n      default: ./Dockerfile\r\n    - name: image\r\n      description: Reference of the image docker will produce.\r\n    - name: context\r\n      description: Path to the directory to use as context.\r\n      default: .\r\n    - name: push_extra_args\r\n      description: Extra parameters passed for the push command when pushing images.\r\n      default: ""\r\n  steps:\r\n    - name: docker-build # \u6784\u5efa\u6b65\u9aa4\r\n      image: $(params.builder_image)\r\n      env:\r\n        - name: DOCKER_HOST # \u7528 TLS \u5f62\u5f0f\u901a\u8fc7 TCP \u94fe\u63a5 sidecar\r\n          value: tcp://localhost:2376\r\n        - name: DOCKER_TLS_VERIFY # \u6821\u9a8c TLS\r\n          value: "1"\r\n        - name: DOCKER_CERT_PATH # \u4f7f\u7528 sidecar \u5b88\u62a4\u8fdb\u7a0b\u751f\u6210\u7684\u8bc1\u4e66\r\n          value: /certs/client\r\n      workingDir: $(resources.inputs.repo.path)\r\n      script: | # docker \u6784\u5efa\u547d\u4ee4\r\n        echo  \'[INFO]\'  \'\u5f53\u524d\u76ee\u5f55\u4e3a:\'  && pwd \r\n        ls -l \r\n        cat Dockerfile\r\n        docker login $(params.registry_url)\r\n        docker build \\\r\n          $(params.build_extra_args) \\\r\n          --no-cache \\\r\n          -f $(params.dockerfile) -t $(params.image) $(params.context)\r\n      volumeMounts: # \u58f0\u660e\u6302\u8f7d\u8bc1\u4e66\u76ee\u5f55\r\n        - mountPath: /certs/client\r\n          name: dind-certs\r\n    \r\n    - name: docker-push #\r\n      image: $(params.builder_image)\r\n      env:\r\n        - name: DOCKER_HOST\r\n          value: tcp://localhost:2376\r\n        - name: DOCKER_TLS_VERIFY\r\n          value: "1"\r\n        - name: DOCKER_CERT_PATH\r\n          value: /certs/client\r\n      workingDir: $(resources.inputs.repo.path)\r\n      script: | # \u63a8\u9001 docker \u955c\u50cf\r\n        docker push $(params.push_extra_args) $(params.image)\r\n      volumeMounts:\r\n        - mountPath: /certs/client\r\n          name: dind-certs\r\n\r\n  sidecars: # sidecar \u6a21\u5f0f\uff0c\u63d0\u4f9b docker daemon\u670d\u52a1\uff0c\u5b9e\u73b0\u771f\u6b63\u7684 DinD \u6a21\u5f0f\r\n    - image: docker:dind\r\n      name: server\r\n      args:\r\n        - --storage-driver=vfs\r\n        - --userland-proxy=false\r\n        - --debug\r\n        #- --insecure-registry=$(params.insecure_registry)\r\n        - --registry-mirror=$(params.registry_mirror)\r\n      securityContext:\r\n        privileged: true\r\n      env:\r\n        - name: DOCKER_TLS_CERTDIR # \u5c06\u751f\u6210\u7684\u8bc1\u4e66\u5199\u5165\u4e0e\u5ba2\u6237\u7aef\u5171\u4eab\u7684\u8def\u5f84\r\n          value: /certs\r\n      volumeMounts:\r\n        - mountPath: /certs/client\r\n          name: dind-certs\r\n      readinessProbe: # \u7b49\u5f85 dind daemon \u751f\u6210\u5b83\u4e0e\u5ba2\u6237\u7aef\u5171\u4eab\u7684\u8bc1\u4e66\r\n        periodSeconds: 1\r\n        exec:\r\n          command: ["ls", "/certs/client/ca.pem"]\r\n  volumes: # \u4f7f\u7528 emptyDir \u7684\u5f62\u5f0f\u5373\u53ef\r\n    - name: dind-certs\r\n      emptyDir: {}\n'})}),"\n",(0,a.jsx)(r.p,{children:"task-generate-build-id.yaml"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-yaml",children:'# generate-build-id.yaml\r\napiVersion: tekton.dev/v1beta1\r\nkind: Task\r\nmetadata:\r\n  name: task-generate-build-id\r\nspec:\r\n  description: >-\r\n    Given a base version, this task generates a unique build id by appending\r\n    the base-version to the current timestamp.\r\n  params:\r\n    - name: base-version\r\n      description: Base product version\r\n      type: string\r\n      default: "1.0"\r\n  results:\r\n    - name: timestamp\r\n      description: Current timestamp\r\n    - name: build-id\r\n      description: ID of the current build\r\n    - name: hostname-ts\r\n      description: get hostname-ts\r\n  steps:\r\n    - name: get-timestamp\r\n      image: bash:5.0.18\r\n      script: |\r\n        #!/usr/bin/env bash\r\n        ts=`date "+%Y%m%d-%H%M%S"`\r\n        echo "Current Timestamp: ${ts}"\r\n        echo ${ts} | tr -d "\\n" | tee $(results.timestamp.path)\r\n    - name: get-buildid\r\n      image: bash:5.0.18\r\n      script: |\r\n        #!/usr/bin/env bash\r\n        ts=`cat $(results.timestamp.path)`\r\n        buildId=$(inputs.params.base-version)-${ts}\r\n        echo ${buildId} | tr -d "\\n" | tee $(results.build-id.path)\r\n\r\n    - name: hostname-ts\r\n      image: bash:5.0.18\r\n      script: |\r\n        #!/usr/bin/env bash\r\n        ts=`cat $(results.timestamp.path)`\r\n        hostname-name=`hostname`\r\n        hostnamets=${hostname-name}-${ts}\r\n        echo ${hostnamets} | tr -d "\\n" | tee $(results.hostname-ts.path)\r\n        echo \'[INFO]\' hostnamets: ${hostnamets}\n'})}),"\n",(0,a.jsx)(r.p,{children:"task-pull-code.yaml"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-yaml",children:"# task-test.yaml\r\napiVersion: tekton.dev/v1beta1\r\nkind: Task\r\nmetadata:\r\n  name: task-results\r\nspec:\r\n  resources:\r\n    inputs:\r\n      - name: git-res\r\n        type: git\r\n    outputs:\r\n      - name: builtImage\r\n        type: image\r\n\r\n  params:\r\n  - name: dockerfile-path #\u6307\u660e dockerfile \u5728\u4ed3\u5e93\u4e2d\u7684\u54ea\u4e2a\u4f4d\u7f6e\r\n    type: string\r\n    default: $(inputs.resources.golang-resource.path)/ # repo\u8d44\u6e90\u7684\u8def\u5f84\r\n    description: dockerfile path\r\n\r\n  steps:\r\n    - name: run-test\r\n      image: alpine:3.15\r\n      workingDir: /workspace/git-res/\r\n      script: |\r\n        ls -l\r\n        #pwd  && ls -l\r\n        for i in $(seq 1 20); do\r\n          touch /root/.m2/$i.txt\r\n        done\r\n        #ls -l  /root/.m2/\r\n      volumeMounts:\r\n        - name: m2\r\n          mountPath: /root/.m2 \r\n  volumes:\r\n    - name: m2\r\n      hostPath:\r\n        path: /root/.m2\r\n    - name: docker-sock\r\n      hostPath:\r\n        path: /var/run/docker.sock\n"})})]})}function l(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>o});var a=n(6540);const t={},s=a.createContext(t);function i(e){const r=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),a.createElement(s.Provider,{value:r},e.children)}}}]);