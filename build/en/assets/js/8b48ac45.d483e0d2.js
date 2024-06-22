"use strict";(self.webpackChunkbookshell=self.webpackChunkbookshell||[]).push([[6931],{3905:(e,n,a)=>{a.d(n,{Zo:()=>c,kt:()=>d});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function s(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?s(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function p(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},s=Object.keys(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=t.createContext({}),l=function(e){var n=t.useContext(i),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},c=function(e){var n=l(e.components);return t.createElement(i.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},k=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(a),k=r,d=m["".concat(i,".").concat(k)]||m[k]||u[k]||s;return a?t.createElement(d,o(o({ref:n},c),{},{components:a})):t.createElement(d,o({ref:n},c))}));function d(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=k;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p[m]="string"==typeof e?e:r,o[1]=p;for(var l=2;l<s;l++)o[l]=a[l];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}k.displayName="MDXCreateElement"},8522:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>p,toc:()=>l});var t=a(7462),r=(a(7294),a(3905));const s={},o="Tektion-Workspaces",p={unversionedId:"DevOps/gitOps/Tekton-workspace",id:"DevOps/gitOps/Tekton-workspace",title:"Tektion-Workspaces",description:"workspace\u53ef\u4ee5\u5b9a\u4e49\u5728pipeline\u4e2d\uff0c\u7136\u540e\u5728\u591a\u4e2atask\u4e2d\u53ef\u4ee5\u5b9e\u73b0\u8c03\u7528\uff0c\u5c06\u9700\u8981\u7f13\u5b58\u7684\u6570\u636e\u4fdd\u5b58\u5230\u5176\u4e2d\u3002",source:"@site/docs/DevOps/2-gitOps/5-Tekton-workspace.md",sourceDirName:"DevOps/2-gitOps",slug:"/DevOps/gitOps/Tekton-workspace",permalink:"/en/docs/DevOps/gitOps/Tekton-workspace",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/2-gitOps/5-Tekton-workspace.md",tags:[],version:"current",lastUpdatedBy:"unknown",lastUpdatedAt:1694454725,formattedLastUpdatedAt:"Sep 11, 2023",sidebarPosition:5,frontMatter:{},sidebar:"DevOpsGitOps",previous:{title:"Tekton-sidecar",permalink:"/en/docs/DevOps/gitOps/Tekton-sidecar"},next:{title:"Tekton-triggers",permalink:"/en/docs/DevOps/gitOps/Tekton-triggers"}},i={},l=[],c={toc:l},m="wrapper";function u(e){let{components:n,...s}=e;return(0,r.kt)(m,(0,t.Z)({},c,s,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tektion-workspaces"},"Tektion-Workspaces"),(0,r.kt)("p",null,"workspace\u53ef\u4ee5\u5b9a\u4e49\u5728pipeline\u4e2d\uff0c\u7136\u540e\u5728\u591a\u4e2atask\u4e2d\u53ef\u4ee5\u5b9e\u73b0\u8c03\u7528\uff0c\u5c06\u9700\u8981\u7f13\u5b58\u7684\u6570\u636e\u4fdd\u5b58\u5230\u5176\u4e2d\u3002"),(0,r.kt)("p",null,"\u5728\u5b9e\u9645\u5de5\u4f5c\u4e2d\uff0c\u6211\u4eec\u7ecf\u5e38\u9700\u8981\u7684\u4e00\u4e2a\u529f\u80fd\u662f\u80fd\u591f\u5728\u4efb\u52a1\u4e4b\u95f4\u5171\u4eab\u5236\u54c1\uff0c\u4ee5\u4fbf\u7f13\u5b58\u6784\u5efa\u5de5\u5177\uff08\u6bd4\u5982 Maven \u548c NPM\uff09\u7684\u4f9d\u8d56\u9879\uff0c\u5728 Tekton 0.10 \u7248\u672c\u5c31\u53d1\u5e03\u589e\u52a0\u4e86\u5bf9 Workspaces \u7684\u652f\u6301\uff0c\u8fd9\u4f7f\u5f97\u6d41\u6c34\u7ebf\u4e2d\u7684\u4efb\u52a1\u53ef\u4ee5\u66f4\u52a0\u8f7b\u677e\u5730\u4f7f\u7528 PV \u6765\u5171\u4eab\u6570\u636e\u4e86\uff0cWorkspaces \u5141\u8bb8\u6307\u5b9a\u4e00\u4e2a\u6216\u591a\u4e2a pipeline \u4e2d task \u8fd0\u884c\u65f6\u9700\u8981\u7684 volume\u3002"),(0,r.kt)("p",null,"\u6b64\u5904\uff0c\u6211\u4f7f\u7528\u7684\u662fjava\u9879\u76ee ",(0,r.kt)("a",{parentName:"p",href:"https://gitee.com/zhang_lai_qiang/springboot-helloworld.git%EF%BC%8Cmvn%E6%89%93%E5%8C%85%E5%90%8E%E4%BE%9D%E8%B5%96%E7%BC%93%E5%AD%98%E5%88%B0workspaces%E4%B8%AD%E3%80%82"},"https://gitee.com/zhang_lai_qiang/springboot-helloworld.git\uff0cmvn\u6253\u5305\u540e\u4f9d\u8d56\u7f13\u5b58\u5230workspaces\u4e2d\u3002")," "),(0,r.kt)("p",null,"Tekton Pipeline\u4e2d\u7684Workspace\u6307\u7684\u662fPipeline\u5728\u8fd0\u884c\u65f6\u9700\u8981\u7684\u5171\u4eab\u5377\u7684\u58f0\u660e\u3002\u5b83\u4eec\u7c7b\u4f3c\u4e8e\u5377\uff0c\u53ea\u662f\u4e0d\u63d0\u4f9b\u5b9e\u9645\u7684\u5377\uff0c\u800c\u53ea\u662f\u58f0\u660e\u610f\u56fe\u3002\u5728Pipeline\u5b9a\u4e49\u4e2d\uff0cWorkspaces\u53ef\u4ee5\u4f5c\u4e3a\u5171\u4eab\u5377\u4f20\u9012\u7ed9\u76f8\u5173Task\u3002\u5f53\u540c\u4e00\u4e2aWorkspaces\u63d0\u4f9b\u7ed9\u591a\u4e2aTask\u65f6\uff0c\u8fd9\u4e9bTask\u53ef\u4ee5\u4ece\u5b8c\u5168\u76f8\u540c\u7684\u5377\u4e2d\u8bfb\u5199\uff0c\u5e76\u6839\u636e\u9700\u8981\u5171\u4eab\u6587\u4ef6\u548c\u5de5\u4ef6\u3002\u5c3d\u7ba1\u4ee5\u4e0a\u7684\u201c\u5377\u201d\u6307\u7684\u662f\u7528\u4e8e\u7f13\u5b58Maven\u4f9d\u8d56\u5173\u7cfb\u7684\u6301\u4e45\u5316\u5377\uff0c\u4f46\u5b83\u4e5f\u53ef\u4ee5\u662fConfigMap\uff0c\u6216\u8005\u662f\u4f20\u9012\u7ed9Pipeline\u8fd0\u884c\u7684Secret\uff0c\u8fd9\u4e9b\u8d44\u6e90\u90fd\u53ef\u4ee5\u5728Task\u4e4b\u95f4\u5171\u4eab\u3002"),(0,r.kt)("p",null,"demo-rescource.yaml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: tekton.dev/v1alpha1\nkind: PipelineResource\nmetadata:\n  name: repo  # resource\u7684\u540d\u5b57\nspec:\n  type: git\n  params:\n  - name: revision\n    value: master  #\u6211\u8981\u62c9\u53d6\u4ed3\u5e93\u54ea\u4e2a\u5206\u652f\u7684\u4ee3\u7801\n  - name: url\n    #value: https://gitee.com/zhang_lai_qiang/golang-test.git  #\u8fd9\u662f\u6211Github\u7684golang\u4ee3\u7801\u4ed3\u5e93\uff0c\u8fd0\u884c\u7684gin\u6846\u67b6\u4ee3\u7801\n    value: https://gitee.com/zhang_lai_qiang/springboot-helloworld.git\n\n---\napiVersion: tekton.dev/v1alpha1\nkind: PipelineResource\nmetadata: \n  name: harbor-image\nspec:\n  type: image\n  params:\n    - name: url\n      value: registry.cn-hangzhou.aliyuncs.com/zlq_registry/tekon-demo\n")),(0,r.kt)("p",null,"pipeline-mvn.yaml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'# workspace-mvn-pipeline.yaml\napiVersion: tekton.dev/v1beta1\nkind: Pipeline\nmetadata:\n  name: mvn-pipeline\nspec:\n  workspaces: # \u58f0\u660e workspaces\n    - name: local-maven-repo\n  resources: # \u58f0\u660e\u4f7f\u7528\u7684\u8d44\u6e90\n    - name: repo\n      type: git\n  tasks:\n\n    - name: build # \u6784\u5efa\u4efb\u52a1\n      taskRef:\n        name: mvn-task # \u5f15\u7528\u4e0a\u9762\u7684 mvn \u4efb\u52a1\n      resources: # \u4f20\u9012 resources \u8d44\u6e90\n        inputs:\n          - name: repo\n            resource: repo\n      params: # \u4f20\u9012 params \u53c2\u6570\n        - name: GOALS\n          value: ["package"]\n      workspaces: # \u4f20\u9012 workspaces\n        - name: maven-repo\n          workspace: local-maven-repo\n\n    - name: int-test # \u6d4b\u8bd5\u4efb\u52a1\n      taskRef:\n        name: mvn-task\n      runAfter: ["build"] # \u9700\u8981 build \u4efb\u52a1\u6267\u884c\u5b8c\u6210\u540e\n      resources:\n        inputs:\n          - name: repo\n            resource: repo\n      params:\n        - name: GOALS\n          value: ["verify"]\n      workspaces:\n        - name: maven-repo\n          workspace: local-maven-repo\n\n#    - name: gen-report # \u6d4b\u8bd5\u62a5\u544a\n#      taskRef:\n#        name: mvn-task\n#      runAfter: ["build"] # \u9700\u8981 build \u4efb\u52a1\u6267\u884c\u5b8c\u6210\u540e\n#      resources:\n#        inputs:\n#          - name: repo\n#            resource: repo\n#      params:\n#        - name: GOALS\n#          value: ["site"]\n#      workspaces:\n#        - name: maven-repo\n#          workspace: local-maven-repo\n#\n')),(0,r.kt)("p",null,"pipelinerun.yaml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: tekton.dev/v1beta1\nkind: PipelineRun\nmetadata:\n  name: mvn-pipelinerun\n  namespace: default\nspec:\n  #serviceAccountName: git-pull\n  pipelineRef:\n    name: mvn-pipeline\n  resources:\n  - name: repo  # \u6307\u5b9a\u8f93\u5165\u7684git\u4ed3\u5e93\u8d44\u6e90\n    resourceRef:\n      name: repo\n  workspaces:\n    - name: local-maven-repo\n      persistentVolumeClaim:\n        claimName: mvn-repo-pvc\n")),(0,r.kt)("p",null,"pvc.yaml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# workspace-mvn-pvc.yaml\napiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: mvn-repo-pvc\nspec:\n  resources:\n    requests:\n      storage: 5Gi\n  volumeMode: Filesystem\n  storageClassName: nfs-storage # \u4f7f\u7528 StorageClass \u81ea\u52a8\u751f\u6210 PV\n  accessModes:\n    - ReadWriteOnce\n")),(0,r.kt)("p",null,"sa.yaml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: git-pull\nsecrets:\n  - name: basic-git\n  - name: basic-docker\n")),(0,r.kt)("p",null,"secret_docker.yaml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Secret\nmetadata:\n  name: basic-docker\n  annotations:\n    tekton.dev/docker-0: https://registry.cn-hangzhou.aliyuncs.com # Described below\ntype: kubernetes.io/basic-auth\nstringData:\n  username: xxxxxxxxx\n  password: xxxxxxxxx\n")),(0,r.kt)("p",null,"secret.yaml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Secret\nmetadata:\n  name: basic-git\n  annotations:\n    tekton.dev/git-0: https://gitee.com # Described below\ntype: kubernetes.io/basic-auth\nstringData:\n  username: xxxxxxxxx\n  password: xxxxxxxxx\n")),(0,r.kt)("p",null,"task-maven.yaml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'# workspace-mvn-task.yaml\napiVersion: tekton.dev/v1beta1\nkind: Task\nmetadata:\n  name: mvn-task\nspec:\n  workspaces:\n    - name: maven-repo\n  resources:\n    inputs:\n      - name: repo\n        type: git\n  params:\n    - name: GOALS\n      description: The Maven goals to run\n      type: array\n      default: ["package"]\n  steps:\n    - name: mvn\n      #image: cnych/cloud-builders-mvn:tekton\n      image: zhanglaiqiang/mvn:v3.6.3.4\n      workingDir: /workspace/repo\n      command: ["/usr/bin/mvn"]\n      args:\n        - -Dmaven.repo.local=$(workspaces.maven-repo.path)\n        - "-s"\n        - "/usr/share/maven/ref/settings-docker.xml"   #\u6307\u5b9a\u4f7f\u7528\u963f\u91cc\u6e90\n        - "$(inputs.params.GOALS)"\n\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-Dmaven.repo.local=$(workspaces.maven-repo.path)")," \u547d\u4ee4\u5c06\u5de5\u4f5c\u533a\u7684\u8def\u5f84\u4f5c\u4e3a\u672c\u5730\u7684 Maven \u5e93\uff0c\u5f53\u7136\u4e5f\u53ef\u4ee5\u914d\u7f6e Workspace \u6302\u8f7d\u7684\u8def\u5f84\uff0c\u8fd9\u91cc\u6211\u4eec\u4f7f\u7528\u7684\u662f\u9ed8\u8ba4\u7684\u8def\u5f84\u3002"),(0,r.kt)("p",null,"\u6267\u884c\u521b\u5efa\u540e\u67e5\u770b\uff0c\u6b65\u9aa42\u4f7f\u7528\u7684\u65f6\u95f4\u4e00\u5171\u7528\u4e8617s\u5c31\u6267\u884c\u5b8c\u4e86\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20230910165137410",src:a(7845).Z,width:"1491",height:"539"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"root@k8s-master:~/tekton/demo/pipline-workspaces# tkn  pr describe mvn-pipelinerun \nName:              mvn-pipelinerun\nNamespace:         default\nPipeline Ref:      mvn-pipeline\nService Account:   default\nTimeout:           1h0m0s\nLabels:\n tekton.dev/pipeline=mvn-pipeline\n\n\ud83c\udf21\ufe0f  Status\n\nSTARTED          DURATION     STATUS\n32 minutes ago   32 seconds   Succeeded\n\n\ud83d\udce6 Resources\n\n NAME     RESOURCE REF\n \u2219 repo   repo\n\n\u2693 Params\n\n No params\n\n\ud83d\udcdd Results\n\n No results\n\n\ud83d\udcc2 Workspaces\n\n NAME                 SUB PATH   WORKSPACE BINDING\n \u2219 local-maven-repo   ---        PersistentVolumeClaim (claimName=mvn-repo-pvc)\n\n\ud83d\uddc2  Taskruns\n\n NAME                         TASK NAME   STARTED          DURATION     STATUS\n \u2219 mvn-pipelinerun-int-test   int-test    32 minutes ago   17 seconds   Succeeded\n \u2219 mvn-pipelinerun-build      build       32 minutes ago   15 seconds   Succeeded\n\n")))}u.isMDXComponent=!0},7845:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/image-20230910165137410-95b99cc0affd6eca18969388a771addd.png"}}]);