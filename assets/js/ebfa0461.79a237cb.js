"use strict";(self.webpackChunkbookshell=self.webpackChunkbookshell||[]).push([[210],{5680:(e,n,r)=>{r.d(n,{xA:()=>s,yg:()=>y});var t=r(6540);function l(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){l(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,l=function(e,n){if(null==e)return{};var r,t,l={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(l[r]=e[r]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var c=t.createContext({}),p=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},s=function(e){var n=p(e.components);return t.createElement(c.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(r),m=l,y=u["".concat(c,".").concat(m)]||u[m]||g[m]||a;return r?t.createElement(y,o(o({ref:n},s),{},{components:r})):t.createElement(y,o({ref:n},s))}));function y(e,n){var r=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=r.length,o=new Array(a);o[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[u]="string"==typeof e?e:l,o[1]=i;for(var p=2;p<a;p++)o[p]=r[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8627:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>g,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var t=r(8168),l=(r(6540),r(5680));const a={},o="\u63a7\u5236\u5668 CRD \u4ecb\u7ecd",i={unversionedId:"k8s/Controller",id:"k8s/Controller",title:"\u63a7\u5236\u5668 CRD \u4ecb\u7ecd",description:"1\u3001\u63a7\u5236\u5668\u7406\u89e3",source:"@site/docs/k8s/7.Controller.md",sourceDirName:"k8s",slug:"/k8s/Controller",permalink:"/bookshell/docs/k8s/Controller",draft:!1,editUrl:"https://github.com/shouji1128955/bookshell/edit/main/docs/k8s/7.Controller.md",tags:[],version:"current",lastUpdatedBy:"zhanglaiqiang",lastUpdatedAt:1727765685,formattedLastUpdatedAt:"2024\u5e7410\u67081\u65e5",sidebarPosition:7,frontMatter:{},sidebar:"k8s",previous:{title:"ansible\u5b89\u88c5k8s-1.24.12",permalink:"/bookshell/docs/k8s/ansible\u5b89\u88c5k8s-1.24.12"}},c={},p=[{value:"1\u3001\u63a7\u5236\u5668\u7406\u89e3",id:"1\u63a7\u5236\u5668\u7406\u89e3",level:2},{value:"1.1 \u9879\u76ee\u67b6\u6784\u63cf\u8ff0",id:"11-\u9879\u76ee\u67b6\u6784\u63cf\u8ff0",level:3},{value:"1.2 \u9879\u76ee\u7ed3\u6784\u7ec4\u6210\u63cf\u8ff0",id:"12-\u9879\u76ee\u7ed3\u6784\u7ec4\u6210\u63cf\u8ff0",level:3},{value:"1.3 \u4e3b\u8981\u6587\u4ef6\u793a\u4f8b",id:"13-\u4e3b\u8981\u6587\u4ef6\u793a\u4f8b",level:3},{value:"<code>api/v1alpha1/appservice_types.go</code> (\u7b80\u5316\u7248\u672c)",id:"apiv1alpha1appservice_typesgo-\u7b80\u5316\u7248\u672c",level:4},{value:"<code>controllers/appservice_controller.go</code>",id:"controllersappservice_controllergo",level:4},{value:"1.4 \u5982\u4f55\u751f\u6210\u8fd9\u4e9b\u6587\u4ef6",id:"14-\u5982\u4f55\u751f\u6210\u8fd9\u4e9b\u6587\u4ef6",level:3},{value:"2\u3001\u5e38\u7528\u7ec4\u4ef6\u7684\u4e00\u4e9b\u6982\u5ff5",id:"2\u5e38\u7528\u7ec4\u4ef6\u7684\u4e00\u4e9b\u6982\u5ff5",level:2},{value:"2.1 informer\u4f7f\u7528",id:"21-informer\u4f7f\u7528",level:3},{value:"2.2 Reflector",id:"22-reflector",level:3},{value:"2.2.1 Reflector \u7684\u5de5\u4f5c\u539f\u7406",id:"221-reflector-\u7684\u5de5\u4f5c\u539f\u7406",level:4},{value:"2.2.2 Reflector\u662f\u5982\u4f55\u5b9e\u73b0\u76d1\u89c6watch\u53d8\u5316",id:"222-reflector\u662f\u5982\u4f55\u5b9e\u73b0\u76d1\u89c6watch\u53d8\u5316",level:4},{value:"1. \u4f7f\u7528 Watch API",id:"1-\u4f7f\u7528-watch-api",level:5},{value:"2. \u5904\u7406\u4e8b\u4ef6",id:"2-\u5904\u7406\u4e8b\u4ef6",level:5},{value:"3. \u8fde\u63a5\u7ba1\u7406",id:"3-\u8fde\u63a5\u7ba1\u7406",level:5},{value:"2.2.3 watch\u7684demo\u5b9e\u73b0",id:"223-watch\u7684demo\u5b9e\u73b0",level:4}],s={toc:p},u="wrapper";function g(e){let{components:n,...r}=e;return(0,l.yg)(u,(0,t.A)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"\u63a7\u5236\u5668-crd-\u4ecb\u7ecd"},"\u63a7\u5236\u5668 CRD \u4ecb\u7ecd"),(0,l.yg)("h2",{id:"1\u63a7\u5236\u5668\u7406\u89e3"},"1\u3001\u63a7\u5236\u5668\u7406\u89e3"),(0,l.yg)("p",null,"\u5b66\u4e60demo\u5730\u5740: ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/schwarzeni/kubebuilder-appservice"},"https://github.com/schwarzeni/kubebuilder-appservice")),(0,l.yg)("h3",{id:"11-\u9879\u76ee\u67b6\u6784\u63cf\u8ff0"},"1.1 \u9879\u76ee\u67b6\u6784\u63cf\u8ff0"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-go"}," +---------------------+               +-----------------------------+\n |                     |  (1) Create   |                             |\n |      User (kubectl)  +---------------\x3e      Kubernetes API         |\n |                     |               |                             |\n +---------------------+               +-----------------------------+\n                                                ^\n                                                |\n                                                | (2) Watch\n                                                |\n+----------------------+          +-------------+-------------------+\n|                      |          |                                 |\n|     Operator         +-----------\x3e     Operator Controller         |\n|  Controller (Reconcile)          |                                 |\n|                      |          |    (Reconcile AppService)        |\n+----------------------+          +-------------+-------------------+\n                                                |\n                                                | (3) Create/Update\n                                                |\n                      +-----------------------+ |                +------------------+\n                      |                       | |                |                  |\n                      |   Kubernetes          | +----------------\x3e  Deployment      |\n                      |   Resources (Service, |                  |                  |\n                      |   Deployment, etc.)   |                  +------------------+\n                      +-----------------------+\n\n")),(0,l.yg)("h3",{id:"12-\u9879\u76ee\u7ed3\u6784\u7ec4\u6210\u63cf\u8ff0"},"1.2 \u9879\u76ee\u7ed3\u6784\u7ec4\u6210\u63cf\u8ff0"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},".\n\u251c\u2500\u2500 Dockerfile                   # Docker \u6587\u4ef6\uff0c\u7528\u4e8e\u6253\u5305 Operator \u955c\u50cf\n\u251c\u2500\u2500 Makefile                     # \u6784\u5efa\u548c\u7ba1\u7406\u9879\u76ee\u7684 Makefile\n\u251c\u2500\u2500 PROJECT                      # kubebuilder \u9879\u76ee\u7684\u5b9a\u4e49\u6587\u4ef6\n\u251c\u2500\u2500 config/                      # \u914d\u7f6e\u76ee\u5f55\uff0c\u5b58\u653e CRD\u3001RBAC\u3001Webhook \u7b49\u914d\u7f6e\n\u2502   \u251c\u2500\u2500 crd/\n\u2502   \u2502   \u251c\u2500\u2500 bases/\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 <group>_<version>_<resource>.yaml  # \u751f\u6210\u7684 CRD \u5b9a\u4e49\n\u2502   \u251c\u2500\u2500 default/\n\u2502   \u2502   \u2514\u2500\u2500 kustomization.yaml   # \u9ed8\u8ba4\u7684 kustomize \u6587\u4ef6\uff0c\u7528\u4e8e\u751f\u6210 YAML \u6e05\u5355\n\u2502   \u251c\u2500\u2500 manager/\n\u2502   \u2502   \u2514\u2500\u2500 manager.yaml         # \u7ba1\u7406\u5668 Deployment \u7684 YAML \u6587\u4ef6\n\u2502   \u251c\u2500\u2500 rbac/\n\u2502   \u2502   \u2514\u2500\u2500 role.yaml            # \u751f\u6210\u7684 RBAC \u6743\u9650\u63a7\u5236\u6587\u4ef6\n\u2502   \u251c\u2500\u2500 samples/\n\u2502   \u2502   \u2514\u2500\u2500 <group>_<version>_<resource>.yaml  # \u793a\u4f8b CRD \u6587\u4ef6\n\u251c\u2500\u2500 go.mod                       # Go \u4f9d\u8d56\u7ba1\u7406\u6587\u4ef6\n\u251c\u2500\u2500 go.sum                       # Go \u4f9d\u8d56\u7248\u672c\u9501\u5b9a\u6587\u4ef6\n\u251c\u2500\u2500 hack/                        # \u8f85\u52a9\u811a\u672c\n\u2502   \u2514\u2500\u2500 boilerplate.go.txt\n\u251c\u2500\u2500 api/                         # API \u5b9a\u4e49\u76ee\u5f55\n\u2502   \u251c\u2500\u2500 v1alpha1/                # \u5b9a\u4e49\u81ea\u5b9a\u4e49\u8d44\u6e90\u7684\u7248\u672c\n\u2502   \u2502   \u251c\u2500\u2500 appservice_types.go  # AppService CRD \u7684\u7ed3\u6784\u5b9a\u4e49\n\u2502   \u2502   \u251c\u2500\u2500 groupversion_info.go # \u6ce8\u518c API \u7ec4\u548c\u7248\u672c\u4fe1\u606f\n\u2502   \u2502   \u2514\u2500\u2500 zz_generated.deepcopy.go  # \u81ea\u52a8\u751f\u6210\u7684 deepcopy \u51fd\u6570\n\u251c\u2500\u2500 controllers/                 # \u63a7\u5236\u5668\u903b\u8f91\u76ee\u5f55\n\u2502   \u2514\u2500\u2500 appservice_controller.go # \u4e0a\u9762\u63d0\u4f9b\u7684 Reconcile \u4ee3\u7801\u5e94\u8be5\u653e\u5728\u8fd9\u91cc\n\u2514\u2500\u2500 main.go                      # \u9879\u76ee\u7684\u5165\u53e3\u6587\u4ef6\n\n")),(0,l.yg)("p",null,"\u7cbe\u7b80\u7248\u672c"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-go"},".\n\u251c\u2500\u2500 config/                        # \u914d\u7f6e\u76ee\u5f55\n\u2502   \u251c\u2500\u2500 crd/                       # CRD \u5b9a\u4e49\n\u2502   \u2502   \u2514\u2500\u2500 bases/\n\u2502   \u2502       \u2514\u2500\u2500 batch.example.com_appservices.yaml  # CRD YAML \u6587\u4ef6\n\u2502   \u251c\u2500\u2500 manager/                   # \u7ba1\u7406\u5668\u914d\u7f6e\n\u2502   \u2502   \u2514\u2500\u2500 manager.yaml           # \u90e8\u7f72\u63a7\u5236\u5668\u7684 YAML \u6587\u4ef6\n\u2502   \u251c\u2500\u2500 rbac/                      # RBAC \u914d\u7f6e\n\u2502   \u2502   \u2514\u2500\u2500 role.yaml              # \u63a7\u5236\u5668\u9700\u8981\u7684\u6743\u9650\n\u251c\u2500\u2500 api/                           # API \u5b9a\u4e49\u76ee\u5f55\n\u2502   \u2514\u2500\u2500 v1alpha1/\n\u2502       \u251c\u2500\u2500 appservice_types.go    # \u81ea\u5b9a\u4e49\u8d44\u6e90\u7684\u7ed3\u6784\u5b9a\u4e49\n\u2502       \u2514\u2500\u2500 groupversion_info.go   # API \u7ec4\u548c\u7248\u672c\u7684\u6ce8\u518c\n\u251c\u2500\u2500 controllers/                   # \u63a7\u5236\u5668\u903b\u8f91\u76ee\u5f55\n\u2502   \u2514\u2500\u2500 appservice_controller.go   # AppService \u63a7\u5236\u5668\u903b\u8f91\n\u251c\u2500\u2500 go.mod                         # Go \u4f9d\u8d56\u7ba1\u7406\u6587\u4ef6\n\u251c\u2500\u2500 go.sum                         # Go \u4f9d\u8d56\u7248\u672c\u9501\u5b9a\u6587\u4ef6\n\u2514\u2500\u2500 main.go                        # \u9879\u76ee\u7684\u5165\u53e3\u6587\u4ef6\n\n")),(0,l.yg)("p",null,"\u76ee\u5f55\u7b80\u8981\u8bf4\u660e\uff1a"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"config/"),": \u914d\u7f6e\u6587\u4ef6\u76ee\u5f55\uff0c\u5305\u542b CRD \u5b9a\u4e49\u3001RBAC \u548c\u63a7\u5236\u5668\u90e8\u7f72\u7b49\u76f8\u5173 YAML \u6587\u4ef6\u3002"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"api/v1alpha1/"),": API \u5b9a\u4e49\u76ee\u5f55\uff0c\u5305\u62ec\u81ea\u5b9a\u4e49\u8d44\u6e90\u7684 ",(0,l.yg)("inlineCode",{parentName:"li"},"Spec")," \u548c ",(0,l.yg)("inlineCode",{parentName:"li"},"Status")," \u7ed3\u6784\u4f53\uff0c\u4ee5\u53ca\u6ce8\u518c API \u7ec4\u548c\u7248\u672c\u7684\u4ee3\u7801\u3002"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"controllers/"),": \u63a7\u5236\u5668\u903b\u8f91\u6240\u5728\u76ee\u5f55\uff0c",(0,l.yg)("inlineCode",{parentName:"li"},"appservice_controller.go")," \u5b9e\u73b0\u4e86 ",(0,l.yg)("inlineCode",{parentName:"li"},"Reconcile")," \u903b\u8f91\u3002"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"main.go"),": \u9879\u76ee\u5165\u53e3\u6587\u4ef6\uff0c\u542f\u52a8\u63a7\u5236\u5668\u7ba1\u7406\u5668\u3002")),(0,l.yg)("h3",{id:"13-\u4e3b\u8981\u6587\u4ef6\u793a\u4f8b"},"1.3 \u4e3b\u8981\u6587\u4ef6\u793a\u4f8b"),(0,l.yg)("h4",{id:"apiv1alpha1appservice_typesgo-\u7b80\u5316\u7248\u672c"},(0,l.yg)("inlineCode",{parentName:"h4"},"api/v1alpha1/appservice_types.go")," (\u7b80\u5316\u7248\u672c)"),(0,l.yg)("p",null,"\u8fd9\u662f\u5b9a\u4e49 ",(0,l.yg)("inlineCode",{parentName:"p"},"AppService")," \u81ea\u5b9a\u4e49\u8d44\u6e90\u7684\u6587\u4ef6\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-go"},'package v1alpha1\n\nimport (\n    metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"\n)\n\n// AppServiceSpec defines the desired state of AppService\ntype AppServiceSpec struct {\n    // \u5b9a\u4e49\u4f60\u7684 AppService \u7684 Spec \u5b57\u6bb5\n    Replicas int32 `json:"replicas"`\n}\n\n// AppServiceStatus defines the observed state of AppService\ntype AppServiceStatus struct {\n    // \u5b9a\u4e49\u4f60\u7684 AppService \u7684 Status \u5b57\u6bb5\n    AvailableReplicas int32 `json:"availableReplicas"`\n}\n\n// +kubebuilder:object:root=true\n// +kubebuilder:subresource:status\n\n// AppService is the Schema for the appservices API\ntype AppService struct {\n    metav1.TypeMeta   `json:",inline"`\n    metav1.ObjectMeta `json:"metadata,omitempty"`\n\n    Spec   AppServiceSpec   `json:"spec,omitempty"`\n    Status AppServiceStatus `json:"status,omitempty"`\n}\n\n// +kubebuilder:object:root=true\n\n// AppServiceList contains a list of AppService\ntype AppServiceList struct {\n    metav1.TypeMeta `json:",inline"`\n    metav1.ListMeta `json:"metadata,omitempty"`\n    Items           []AppService `json:"items"`\n}\n\nfunc init() {\n    SchemeBuilder.Register(&AppService{}, &AppServiceList{})\n}\n')),(0,l.yg)("h4",{id:"controllersappservice_controllergo"},(0,l.yg)("inlineCode",{parentName:"h4"},"controllers/appservice_controller.go")),(0,l.yg)("p",null,"\u8fd9\u5c31\u662f\u4f60\u7ed9\u51fa\u7684 ",(0,l.yg)("inlineCode",{parentName:"p"},"Reconcile")," \u51fd\u6570\u7684\u5730\u65b9"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-go"},'package controllers\n\nimport (\n    "context"\n    "encoding/json"\n    "reflect"\n\n    "k8s.io/apimachinery/pkg/api/errors"\n    "k8s.io/apimachinery/pkg/types"\n    appsv1 "k8s.io/api/apps/v1"\n    corev1 "k8s.io/api/core/v1"\n    "sigs.k8s.io/controller-runtime/pkg/client"\n    "sigs.k8s.io/controller-runtime/pkg/reconcile"\n\n    batchv1alpha1 "example.com/api/v1alpha1"\n    ctrl "sigs.k8s.io/controller-runtime"\n)\n\nfunc (r *AppServiceReconciler) Reconcile(ctx context.Context, req ctrl.Request) (ctrl.Result, error) {\n    instance := &batchv1alpha1.AppService{}\n    if err := r.Client.Get(ctx, req.NamespacedName, instance); err != nil {\n        if errors.IsNotFound(err) {\n            return reconcile.Result{}, nil\n        }\n        return reconcile.Result{}, err\n    }\n\n    if instance.DeletionTimestamp != nil {\n        return reconcile.Result{}, nil\n    }\n\n    deployment := &appsv1.Deployment{}\n    if err := r.Client.Get(ctx, req.NamespacedName, deployment); err != nil {\n        if !errors.IsNotFound(err) {\n            return ctrl.Result{}, err\n        }\n\n        deployment = NewDeployment(instance)\n        if err := r.Client.Create(ctx, deployment); err != nil {\n            return ctrl.Result{}, err\n        }\n\n        svc := NewService(instance)\n        if err := r.Client.Create(ctx, svc); err != nil {\n            return ctrl.Result{}, err\n        }\n    } else {\n        oldSpec := &batchv1alpha1.AppServiceSpec{}\n        if err := json.Unmarshal([]byte(instance.Annotations["spec"]), oldSpec); err != nil {\n            return ctrl.Result{}, err\n        }\n        if !reflect.DeepEqual(instance.Spec, *oldSpec) {\n            newDeployment := NewDeployment(instance)\n            currDeployment := &appsv1.Deployment{}\n            if err := r.Client.Get(ctx, req.NamespacedName, currDeployment); err != nil {\n                return ctrl.Result{}, err\n            }\n            currDeployment.Spec = newDeployment.Spec\n            if err := r.Client.Update(ctx, currDeployment); err != nil {\n                return ctrl.Result{}, err\n            }\n\n            newService := NewService(instance)\n            currService := &corev1.Service{}\n            if err := r.Client.Get(ctx, req.NamespacedName, currService); err != nil {\n                return ctrl.Result{}, err\n            }\n            currIP := currService.Spec.ClusterIP\n            currService.Spec = newService.Spec\n            currService.Spec.ClusterIP = currIP\n            if err := r.Client.Update(ctx, currService); err != nil {\n                return ctrl.Result{}, err\n            }\n        }\n    }\n\n    data, _ := json.Marshal(instance.Spec)\n    if instance.Annotations != nil {\n        instance.Annotations["spec"] = string(data)\n    } else {\n        instance.Annotations = map[string]string{"spec": string(data)}\n    }\n    if err := r.Client.Update(ctx, instance); err != nil {\n        return ctrl.Result{}, err\n    }\n\n    return ctrl.Result{}, nil\n}\n')),(0,l.yg)("h3",{id:"14-\u5982\u4f55\u751f\u6210\u8fd9\u4e9b\u6587\u4ef6"},"1.4 \u5982\u4f55\u751f\u6210\u8fd9\u4e9b\u6587\u4ef6"),(0,l.yg)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u6b65\u9aa4\u4f7f\u7528 ",(0,l.yg)("inlineCode",{parentName:"p"},"kubebuilder")," \u5de5\u5177\u751f\u6210\u8fd9\u4e9b\u6587\u4ef6\uff1a"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"\u5b89\u88c5 ",(0,l.yg)("inlineCode",{parentName:"strong"},"kubebuilder")),"\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"go install sigs.k8s.io/kubebuilder/cmd@latest\n")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"\u521b\u5efa\u9879\u76ee"),"\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"kubebuilder init --domain example.com --repo example.com/api\n")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"\u521b\u5efa API \u548c\u63a7\u5236\u5668"),"\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"kubebuilder create api --group batch --version v1alpha1 --kind AppService\n")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"\u7f16\u8f91\u751f\u6210\u7684\u63a7\u5236\u5668\u6587\u4ef6\u548c API \u6587\u4ef6"),"\uff1a\u6839\u636e\u4f60\u7684\u903b\u8f91\uff0c\u4fee\u6539\u63a7\u5236\u5668\u6587\u4ef6\u5e76\u6dfb\u52a0 ",(0,l.yg)("inlineCode",{parentName:"p"},"AppService")," \u8d44\u6e90\u7684\u4e1a\u52a1\u903b\u8f91\u3002"),(0,l.yg)("h2",{id:"2\u5e38\u7528\u7ec4\u4ef6\u7684\u4e00\u4e9b\u6982\u5ff5"},"2\u3001\u5e38\u7528\u7ec4\u4ef6\u7684\u4e00\u4e9b\u6982\u5ff5"),(0,l.yg)("h3",{id:"21-informer\u4f7f\u7528"},"2.1 informer\u4f7f\u7528"),(0,l.yg)("p",null,"\u4e00\u4e2a\u63a7\u5236\u5668\u6bcf\u6b21\u83b7\u53d6\u5bf9\u8c61\u7684\u65f6\u5019\u90fd\u8981\u8bbf\u95eeAPIServer\uff0c\u8fd9\u4f1a\u7ed9\u7cfb\u7edf\u5e26\u6765\u5f88\u9ad8\u7684\u8d1f\u8f7d\uff0c Informers\u7684\u5185\u5b58\u7f13\u5b58\u5c31\u662f\u6765\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u7684\u3002Informers\u8fd8\u53ef\u4ee5\u51e0\u4e4e\u5b9e\u65f6\u7684\u76d1\u63a7\u5bf9\u8c61\u7684\u53d8\u5316\uff0c\u800c\u4e0d\u9700\u8981\u8f6e\u8bad\u8bf7\u6c42\uff0c\u8fd9\u6837\u5c31\u53ef\u4ee5\u4fdd\u8bc1\u5ba2\u6237\u7aef\u7684\u7f13\u5b58\u6570\u636e\u548c\u670d\u52a1\u7aef\u7684\u6570\u636e\u4e00\u81f4\u3002\u5c31\u53ef\u4ee5\u5927\u5927\u964d\u4f4eAPIServer\u7684\u538b\u529b\u3002"),(0,l.yg)("h3",{id:"22-reflector"},"2.2 Reflector"),(0,l.yg)("p",null,"Relector\u53cd\u5c04\u5668\u4ed6\u80fd\u611f\u77e5\u5230k8s\u4e2d\u7684\u4e8b\u4ef6\u53d1\u751f\u53d8\u5316\u65f6\uff0c\u4ed6\u80fd\u591f\u81ea\u52a8\u62c9\u53d6\u6700\u65b0\u7684\u6570\u636e\u5230Delta\u4e2d\uff0c\u8fd9\u4e2a\u903b\u8f91\u539f\u7406\u662f\u4ec0\u4e48\u5462\uff1f"),(0,l.yg)("h4",{id:"221-reflector-\u7684\u5de5\u4f5c\u539f\u7406"},"2.2.1 Reflector \u7684\u5de5\u4f5c\u539f\u7406"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("strong",{parentName:"li"},"\u76d1\u89c6 API Server"),"\uff1aReflector \u4f1a\u4f7f\u7528 Kubernetes \u7684 Watch \u63a5\u53e3\uff0c\u6301\u7eed\u76d1\u63a7\u7279\u5b9a\u8d44\u6e90\u7684\u53d8\u5316\uff08\u5982 Pod\u3001Service \u7b49\uff09\u3002\u901a\u8fc7 Watch\uff0cReflector \u53ef\u4ee5\u63a5\u6536\u4e8b\u4ef6\u901a\u77e5\uff0c\u800c\u4e0d\u9700\u8981\u9891\u7e41\u5730\u5411 API Server \u67e5\u8be2\u3002"),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("strong",{parentName:"li"},"\u4e8b\u4ef6\u5904\u7406"),"\uff1a\u5f53 Kubernetes \u4e2d\u53d1\u751f\u4e8b\u4ef6\uff08\u4f8b\u5982\u8d44\u6e90\u7684\u521b\u5efa\u3001\u66f4\u65b0\u6216\u5220\u9664\uff09\u65f6\uff0cReflector \u4f1a\u6536\u5230\u76f8\u5e94\u7684\u901a\u77e5\u3002\u8fd9\u4e9b\u901a\u77e5\u901a\u5e38\u662f\u57fa\u4e8e WebSocket \u6216 HTTP/2 \u7684\u957f\u8fde\u63a5\uff0c\u786e\u4fdd\u80fd\u5373\u65f6\u611f\u77e5\u53d8\u5316\u3002"),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("strong",{parentName:"li"},"\u66f4\u65b0\u672c\u5730\u7f13\u5b58"),"\uff1a\u4e00\u65e6\u6536\u5230\u4e8b\u4ef6\uff0cReflector \u4f1a\u6839\u636e\u4e8b\u4ef6\u7c7b\u578b\uff08\u6dfb\u52a0\u3001\u66f4\u65b0\u3001\u5220\u9664\uff09\u5bf9\u672c\u5730\u7f13\u5b58\u8fdb\u884c\u76f8\u5e94\u7684\u66f4\u65b0\u3002\u8fd9\u662f\u901a\u8fc7\u8c03\u7528\u76f8\u5e94\u7684\u5904\u7406\u51fd\u6570\uff08\u901a\u5e38\u662f\u540c\u6b65\u5230 Delta FIFO \u961f\u5217\uff09\u6765\u5b8c\u6210\u7684\u3002"),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("strong",{parentName:"li"},"Delta FIFO \u961f\u5217"),"\uff1aDelta FIFO \u961f\u5217\u662f\u7528\u6765\u5b58\u50a8\u6700\u65b0\u7684\u6570\u636e\u53d8\u66f4\uff0c\u5b83\u53ef\u4ee5\u6309\u987a\u5e8f\u5904\u7406\u4e8b\u4ef6\u5e76\u63d0\u4f9b\u7ed9\u4e0b\u6e38\u7684\u6d88\u8d39\u8005\uff08\u5982 Informer\uff09\u3002\u8fd9\u6837\uff0c\u6d88\u8d39\u8005\u5c31\u80fd\u5904\u7406\u6700\u65b0\u7684\u72b6\u6001\uff0c\u800c\u4e0d\u9700\u8981\u76f4\u63a5\u4e0e API Server \u4ea4\u4e92\u3002")),(0,l.yg)("p",null,"\u4e3a\u4ec0\u4e48\u80fd\u591f\u81ea\u52a8\u62c9\u53d6\u6700\u65b0\u6570\u636e"),(0,l.yg)("p",null,"Reflector \u4e0d\u9700\u8981\u624b\u52a8\u62c9\u53d6\u6700\u65b0\u6570\u636e\u7684\u539f\u56e0\u5728\u4e8e\uff1a"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("strong",{parentName:"li"},"\u4e8b\u4ef6\u9a71\u52a8"),"\uff1aReflector \u901a\u8fc7 Watch \u63a5\u53e3\u83b7\u53d6\u5b9e\u65f6\u4e8b\u4ef6\uff0c\u8fd9\u6837\u5b83\u4e0d\u9700\u8981\u4f9d\u8d56\u5b9a\u65f6\u62c9\u53d6\u3002"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("strong",{parentName:"li"},"\u9ad8\u6548\u7684\u8d44\u6e90\u7ba1\u7406"),"\uff1a\u5b83\u80fd\u8fc5\u901f\u53cd\u5e94\u5230\u72b6\u6001\u53d8\u5316\uff0c\u786e\u4fdd\u672c\u5730\u7f13\u5b58\u548c Kubernetes \u96c6\u7fa4\u7684\u72b6\u6001\u4e00\u81f4\u3002")),(0,l.yg)("p",null,"\u901a\u8fc7\u8fd9\u79cd\u673a\u5236\uff0cKubernetes \u7684 Informer \u80fd\u591f\u9ad8\u6548\u5730\u7ef4\u62a4\u72b6\u6001\u4e00\u81f4\u6027\uff0c\u540c\u65f6\u51cf\u5c11\u5bf9 API Server \u7684\u538b\u529b\u3002\u8fd9\u6837\u8bbe\u8ba1\u4f7f\u5f97\u7cfb\u7edf\u66f4\u4e3a\u9ad8\u6548\u4e14\u54cd\u5e94\u8fc5\u901f\u3002"),(0,l.yg)("h4",{id:"222-reflector\u662f\u5982\u4f55\u5b9e\u73b0\u76d1\u89c6watch\u53d8\u5316"},"2.2.2 Reflector\u662f\u5982\u4f55\u5b9e\u73b0\u76d1\u89c6watch\u53d8\u5316"),(0,l.yg)("p",null,"Reflector \u5b9e\u73b0\u76d1\u89c6 Kubernetes \u4e2d\u8d44\u6e90\u7684\u53d8\u5316\u4e3b\u8981\u4f9d\u8d56\u4e8e ",(0,l.yg)("strong",{parentName:"p"},"Watch")," API\uff0c\u800c\u4e0d\u662f\u5b9a\u65f6\u62c9\u53d6\u3002\u5177\u4f53\u6765\u8bf4\uff0cReflector \u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u6765\u76d1\u89c6\u53d8\u5316\uff1a"),(0,l.yg)("h5",{id:"1-\u4f7f\u7528-watch-api"},"1. \u4f7f\u7528 Watch API"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("strong",{parentName:"li"},"\u5efa\u7acb\u8fde\u63a5"),"\uff1aReflector \u5411 API Server \u53d1\u9001\u4e00\u4e2a Watch \u8bf7\u6c42\u3002\u8fd9\u4e2a\u8bf7\u6c42\u662f\u901a\u8fc7 HTTP/1.1 \u6216 HTTP/2 \u5efa\u7acb\u7684\u957f\u8fde\u63a5\u3002\u4e00\u65e6\u8fde\u63a5\u5efa\u7acb\uff0cAPI Server \u4f1a\u4fdd\u6301\u8be5\u8fde\u63a5\u5f00\u653e\u3002"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("strong",{parentName:"li"},"\u5b9e\u65f6\u63a8\u9001\u4e8b\u4ef6"),"\uff1a\u5f53\u8d44\u6e90\uff08\u5982 Pod\u3001Service \u7b49\uff09\u53d1\u751f\u53d8\u5316\u65f6\uff0cAPI Server \u4f1a\u7acb\u5373\u5c06\u8fd9\u4e9b\u53d8\u5316\uff08\u4e8b\u4ef6\uff09\u63a8\u9001\u5230 Reflector\uff0c\u800c\u4e0d\u662f\u8ba9 Reflector \u5b9a\u671f\u8be2\u95ee\u3002")),(0,l.yg)("h5",{id:"2-\u5904\u7406\u4e8b\u4ef6"},"2. \u5904\u7406\u4e8b\u4ef6"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("strong",{parentName:"li"},"\u4e8b\u4ef6\u7c7b\u578b"),"\uff1a\u6bcf\u5f53 Reflector \u6536\u5230\u4e8b\u4ef6\u65f6\uff0c\u4f1a\u6839\u636e\u4e8b\u4ef6\u7684\u7c7b\u578b\uff08\u6dfb\u52a0\u3001\u66f4\u65b0\u3001\u5220\u9664\uff09\u6765\u66f4\u65b0\u5176\u672c\u5730\u7f13\u5b58\u6216 Delta FIFO \u961f\u5217\u3002"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("strong",{parentName:"li"},"\u9ad8\u6548\u5904\u7406"),"\uff1a\u8fd9\u79cd\u65b9\u5f0f\u5141\u8bb8 Reflector \u51e0\u4e4e\u5b9e\u65f6\u5730\u611f\u77e5\u53d8\u5316\uff0c\u786e\u4fdd\u672c\u5730\u72b6\u6001\u4e0e\u96c6\u7fa4\u72b6\u6001\u4e00\u81f4\u3002")),(0,l.yg)("h5",{id:"3-\u8fde\u63a5\u7ba1\u7406"},"3. \u8fde\u63a5\u7ba1\u7406"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("strong",{parentName:"li"},"\u91cd\u8fde\u673a\u5236"),"\uff1a\u5982\u679c\u8fde\u63a5\u610f\u5916\u4e2d\u65ad\uff08\u5982\u7f51\u7edc\u95ee\u9898\u6216 API Server \u91cd\u542f\uff09\uff0cReflector \u4f1a\u5c1d\u8bd5\u91cd\u65b0\u5efa\u7acb\u8fde\u63a5\uff0c\u5e76\u4ece\u4e0a\u4e00\u6b21\u7684\u72b6\u6001\u5f00\u59cb\u7ee7\u7eed\u76d1\u542c\u3002"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("strong",{parentName:"li"},"\u521d\u59cb\u6570\u636e\u540c\u6b65"),"\uff1a\u5728\u5efa\u7acb Watch \u8fde\u63a5\u4e4b\u524d\uff0cReflector \u901a\u5e38\u4f1a\u5148\u4ece API Server \u62c9\u53d6\u5f53\u524d\u8d44\u6e90\u7684\u5b8c\u6574\u5217\u8868\uff0c\u4ee5\u4fbf\u5728\u540e\u7eed\u7684\u4e8b\u4ef6\u5904\u7406\u4e2d\u6709\u4e00\u4e2a\u521d\u59cb\u72b6\u6001\u3002")),(0,l.yg)("p",null,"\u5728kubernetes\u4e2d\uff0cwatch\u8fd9\u7c7b\u63a5\u53e3\u5f88\u591a\uff0c\u6bd4\u5982\u6709\u4e0b\u9762:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"kubernetes controller\ninformer\nkubelet\n  \u901a\u8fc7Watch\u63a5\u53e3\u76d1\u89c6\u4e0e\u5176\u76f8\u5173\u7684Pod\u548cNode\u72b6\u6001\u53d8\u5316\uff0c\u4ee5\u4fbf\u53ca\u65f6\u54cd\u5e94\nCustom Resource Definitions(CRD)\nKubectl\u547d\u4ee4\n  kubect get\u547d\u4ee4\u65f6\uff0c\u53ef\u4ee5\u52a0\u4e0a--watch\u9009\u9879\uff0c\u8fd9\u5b9e\u9645\u4e0a\u5229\u7528\u4e86Watch\u63a5\u53e3\u6765\u5b9e\u73b0\u663e\u793a\u8d44\u6e90\u72b6\u6001\u7684\u53d8\u5316\nMetrics Server\n  \u76d1\u89c6\u8282\u70b9\u548cPod\u7684\u8d44\u6e90\u4f7f\u7528\u60c5\u51b5\uff0c\u63d0\u4f9b\u96c6\u7fa4\u7684\u6027\u80fd\u6570\u636e\nKubernetes Dashboard\n  web ui \u4e5f\u4f1a\u4f7f\u7528Watch\u63a5\u53e3\u6765\u5b9e\u65f6\u66f4\u65b0\u754c\u9762\u4e0a\u7684\u8d44\u6e90\u72b6\u6001\n")),(0,l.yg)("p",null,"Watch\u7684\u57fa\u672c\u539f\u7406"),(0,l.yg)("p",null,"\u53cd\u5411\u63a8\u9001\uff1a\u4e0e\u4f20\u7edf\u7684\u62c9\u53d6\u6a21\u578b\uff08\u5ba2\u6237\u7aef\u5b9a\u671f\u8bf7\u6c42\u670d\u52a1\u5668\uff09\u4e0d\u540c\uff0cWatch \u4f7f\u7528\u957f\u8fde\u63a5\uff0cAPI Server \u4f1a\u4e3b\u52a8\u5c06\u53d8\u5316\u63a8\u9001\u7ed9\u5ba2\u6237\u7aef\u3002\u8fd9\u79cd\u65b9\u5f0f\u663e\u8457\u51cf\u5c11\u4e86\u4e0d\u5fc5\u8981\u7684\u7f51\u7edc\u8bf7\u6c42\u548c\u5ef6\u8fdf\u3002"),(0,l.yg)("p",null,"\u4e8b\u4ef6\u9a71\u52a8\uff1a\u5f53 Kubernetes \u96c6\u7fa4\u4e2d\u7684\u67d0\u4e2a\u8d44\u6e90\uff08\u5982 Pod\u3001Service \u7b49\uff09\u53d1\u751f\u53d8\u5316\u65f6\uff0cAPI Server \u4f1a\u7acb\u5373\u5c06\u76f8\u5173\u4e8b\u4ef6\uff08\u5982\u6dfb\u52a0\u3001\u66f4\u65b0\u3001\u5220\u9664\uff09\u53d1\u9001\u5230\u5df2\u5efa\u7acb Watch \u7684\u5ba2\u6237\u7aef\u3002"),(0,l.yg)("h4",{id:"223-watch\u7684demo\u5b9e\u73b0"},"2.2.3 watch\u7684demo\u5b9e\u73b0"),(0,l.yg)("p",null,"\u4ee5\u4e0b\u662f\u4e00\u4e2a\u7b80\u5355\u7684\u793a\u4f8b\u4ee3\u7801\uff0c\u6a21\u62df Watch \u673a\u5236\uff0c\u76d1\u542c Pod \u7684\u53d8\u5316"),(0,l.yg)("p",null,"go get k8s.io/",(0,l.yg)("a",{parentName:"p",href:"mailto:client-go@v0.23.0"},"client-go@v0.23.0"),"  # \u786e\u4fdd\u7248\u672c\u4e0e\u4f60\u7684\u96c6\u7fa4\u517c\u5bb9"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-golang"},'package main\n\nimport (\n    "context"\n    "fmt"\n    "log"\n    "time"\n\n    metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"\n    "k8s.io/apimachinery/pkg/watch"\n    "k8s.io/client-go/kubernetes"\n    "k8s.io/client-go/tools/clientcmd"\n)\n\nfunc main() {\n    // \u52a0\u8f7d kubeconfig\n    kubeconfig := "/path/to/your/kubeconfig"  // \u66ff\u6362\u4e3a\u4f60\u7684 kubeconfig \u8def\u5f84\n    config, err := clientcmd.BuildConfigFromFlags("", kubeconfig)\n    if err != nil {\n        log.Fatalf("Failed to build kubeconfig: %v", err)\n    }\n\n    // \u521b\u5efa Kubernetes \u5ba2\u6237\u7aef\n    clientset, err := kubernetes.NewForConfig(config)\n    if err != nil {\n        log.Fatalf("Failed to create clientset: %v", err)\n    }\n\n    // \u8bbe\u7f6e Watch \u9009\u9879\n    options := metav1.ListOptions{\n        Watch: true,\n    }\n\n    // \u542f\u52a8 Watch\n    watchPods(clientset, options)\n}\n\nfunc watchPods(clientset *kubernetes.Clientset, options metav1.ListOptions) {\n    // \u76d1\u542c Pod \u53d8\u5316\n    watchInterface, err := clientset.CoreV1().Pods("").Watch(context.TODO(), options)\n    if err != nil {\n        log.Fatalf("Failed to watch pods: %v", err)\n    }\n\n    fmt.Println("Watching for pod changes...")\n\n    // \u5904\u7406\u4e8b\u4ef6\n    for event := range watchInterface.ResultChan() {\n        pod, ok := event.Object.(*metav1.Pod)\n        if !ok {\n            log.Fatalf("Unexpected type")\n        }\n\n        switch event.Type {\n        case watch.Added:\n            fmt.Printf("Pod added: %s\\n", pod.Name)\n        case watch.Modified:\n            fmt.Printf("Pod modified: %s\\n", pod.Name)\n        case watch.Deleted:\n            fmt.Printf("Pod deleted: %s\\n", pod.Name)\n        }\n    }\n}\n\n')),(0,l.yg)("h5",{id:""}))}g.isMDXComponent=!0}}]);