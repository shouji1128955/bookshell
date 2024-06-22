"use strict";(self.webpackChunkbookshell=self.webpackChunkbookshell||[]).push([[4175],{3905:(e,n,t)=>{t.d(n,{Zo:()=>k,kt:()=>N});var l=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=l.createContext({}),m=function(e){var n=l.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},k=function(e){var n=m(e.components);return l.createElement(p.Provider,{value:n},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},u=l.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,k=i(e,["components","mdxType","originalType","parentName"]),s=m(t),u=a,N=s["".concat(p,".").concat(u)]||s[u]||c[u]||r;return t?l.createElement(N,o(o({ref:n},k),{},{components:t})):l.createElement(N,o({ref:n},k))}));function N(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=u;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[s]="string"==typeof e?e:a,o[1]=i;for(var m=2;m<r;m++)o[m]=t[m];return l.createElement.apply(null,o)}return l.createElement.apply(null,t)}u.displayName="MDXCreateElement"},163:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>m});var l=t(7462),a=(t(7294),t(3905));const r={},o=void 0,i={unversionedId:"Sre/\u9762\u8bd5\u9898/golang\u9762\u8bd5\u9898",id:"Sre/\u9762\u8bd5\u9898/golang\u9762\u8bd5\u9898",title:"golang\u9762\u8bd5\u9898",description:"\u7b2c\u4e00\u7bc7\uff1a\u57fa\u7840\u8bed\u6cd5",source:"@site/docs/Sre/3-\u9762\u8bd5\u9898/8.golang\u9762\u8bd5\u9898.md",sourceDirName:"Sre/3-\u9762\u8bd5\u9898",slug:"/Sre/\u9762\u8bd5\u9898/golang\u9762\u8bd5\u9898",permalink:"/en/docs/Sre/\u9762\u8bd5\u9898/golang\u9762\u8bd5\u9898",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Sre/3-\u9762\u8bd5\u9898/8.golang\u9762\u8bd5\u9898.md",tags:[],version:"current",lastUpdatedBy:"AMiner",lastUpdatedAt:1719066785,formattedLastUpdatedAt:"Jun 22, 2024",sidebarPosition:8,frontMatter:{},sidebar:"SreMianshi",previous:{title:"\u5bb9\u5668\u6280\u672f",permalink:"/en/docs/Sre/\u9762\u8bd5\u9898/\u5bb9\u5668\u6280\u672f"}},p={},m=[{value:"\u7b2c\u4e00\u7bc7\uff1a\u57fa\u7840\u8bed\u6cd5",id:"\u7b2c\u4e00\u7bc7\u57fa\u7840\u8bed\u6cd5",level:2},{value:"\u7b2c\u4e8c\u7bc7\uff1a\u8ba1\u7b97\u673a\u7f51\u7edc&amp;\u5e76\u53d1",id:"\u7b2c\u4e8c\u7bc7\u8ba1\u7b97\u673a\u7f51\u7edc\u5e76\u53d1",level:2},{value:"\u7b2c\u4e09\u7bc7\uff1a\u6846\u67b6",id:"\u7b2c\u4e09\u7bc7\u6846\u67b6",level:2},{value:"\u7b2c\u56db\u7bc7\uff1a\u6570\u636e\u5e93",id:"\u7b2c\u56db\u7bc7\u6570\u636e\u5e93",level:2},{value:"4.1 \u3001MySQL",id:"41-mysql",level:3},{value:"4.2\u3001redis",id:"42redis",level:3},{value:"4.3\u3001\u6d88\u606f\u961f\u5217",id:"43\u6d88\u606f\u961f\u5217",level:3},{value:"\u7b2c\u4e94\u7bc7\uff1a\u6570\u636e\u7ed3\u6784\u4e0e\u7b97\u6cd5",id:"\u7b2c\u4e94\u7bc7\u6570\u636e\u7ed3\u6784\u4e0e\u7b97\u6cd5",level:2},{value:"\u7b2c\u516d\u7bc7\uff1a\u7efc\u5408\u7bc7",id:"\u7b2c\u516d\u7bc7\u7efc\u5408\u7bc7",level:2}],k={toc:m},s="wrapper";function c(e){let{components:n,...t}=e;return(0,a.kt)(s,(0,l.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u7b2c\u4e00\u7bc7\u57fa\u7840\u8bed\u6cd5"},"\u7b2c\u4e00\u7bc7\uff1a\u57fa\u7840\u8bed\u6cd5"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u6570\u7ec4\u548cslice\u533a\u522b\uff0cslice\u6269\u5bb9\u673a\u5236"),(0,a.kt)("li",{parentName:"ol"},"\u8bf4\u4e0bGo\u7684map\u5e95\u5c42\u5b9e\u73b0"),(0,a.kt)("li",{parentName:"ol"},"map\u5982\u4f55\u5b9e\u73b0\u6709\u5e8f\u8bfb\u53d6")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Bash"},"map\u4e0d\u80fd\u987a\u5e8f\u8bfb\u53d6\uff0c\u662f\u56e0\u4e3a\u4ed6\u662f\u65e0\u5e8f\u7684\uff0c\u60f3\u8981\u6709\u5e8f\u8bfb\u53d6\uff0c\u9996\u5148\u7684\u89e3\u51b3\u7684\u95ee\u9898\u5c31\u662f\uff0c\u628a\uff4b\uff45\uff59\u53d8\u4e3a\u6709\u5e8f\uff0c\u6240\u4ee5\u53ef\u4ee5\u628akey\u653e\u5165\u5207\u7247\uff0c\u5bf9\u5207\u7247\u8fdb\u884c\u6392\u5e8f\uff0c\u904d\u5386\u5207\u7247\uff0c\u901a\u8fc7key\u53d6\u503c\u3002\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4ee3\u7801\u6267\u884c\u7ed3\u679c\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Go"}," s := make([]int, 5)\n s = append(s, 1, 2, 3)\n fmt.Println(s)\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4ee3\u7801\u6267\u884c\u7ed3\u679c\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Go"},"p1 := 1\np2 := &p1\n*p2++\nfmt.Println(p1)\nfmt.Println(*p2)\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4ee3\u7801\u6267\u884c\u7ed3\u679c\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Go"},"a := [3]int{0, 1, 2}\ns := a[1:2]\n\ns[0] = 11\ns = append(s, 12)\ns = append(s, 13)\ns[0] = 21\n\nfmt.Println(a)\nfmt.Println(s)\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4ee3\u7801\u6267\u884c\u7ed3\u679c\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Go"},'var a = [5]int{1, 2, 3, 4, 5}\n    var r [5]int\n    for i, v := range &a {\n        if i == 0 {\n            a[1] = 12\n            a[2] = 13\n        }\n        r[i] = v\n    }\nfmt.Println("r = ", r)\nfmt.Println("a = ", a)\n')),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5207\u7247\u7684\u53cd\u8f6c ",(0,a.kt)("inlineCode",{parentName:"li"},"s:= []int{1,2,3,5,4}")),(0,a.kt)("li",{parentName:"ol"},"\u4ee3\u7801\u6267\u884c\u7ed3\u679c")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Go"},'const (\n     x = iota\n     _\n     y\n     z = "zzz"\n     k \n     p = iota\n )\n\nfunc main()  {\n    fmt.Println(x,y,z,k,p)\n}\n')),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4ee3\u7801\u6267\u884c\u7ed3\u679c")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Go"},'slice := []int{10, 11, 12, 13}\nm := make(map[int]*int)\n\nfor key, val := range slice {\n   m[key] = &val\n}\nfmt.Println(m)\n\nfor k, v := range m {\n   fmt.Println(k, "->", *v)\n}\n')),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4ee3\u7801\u6267\u884c\u7ed3\u679c")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Go"},"func test(x int) (func(), func()) {\n    return func() {\n        println(x)\n        x += 10\n    }, func() {\n        println(x)\n    }\n}\n\nfunc main() {\n    foo, bar := test(10)\n    foo()\n    bar()\n}\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"new()")," \u4e0e ",(0,a.kt)("strong",{parentName:"li"},"make()")," \u7684\u533a\u522b"),(0,a.kt)("li",{parentName:"ol"},"golang\u53d8\u91cf\u5185\u5b58\u5206\u914d\uff0c\u4ec0\u4e48\u65f6\u5019\u5206\u914d\u5728\u6808\uff0c\u4f55\u65f6\u5206\u914d\u5728\u5806"),(0,a.kt)("li",{parentName:"ol"},"golang\u54ea\u4e9b\u7c7b\u578b\u662f\u6307\u4f20\u9012\uff0c\u54ea\u4e9b\u662f\u5f15\u7528\u4f20\u9012\uff0c\u533a\u522b\u662f\u4ec0\u4e48\uff0c\u5206\u522b\u7684\u4f7f\u7528\u7684\u573a\u666f"),(0,a.kt)("li",{parentName:"ol"},"\u4ee3\u7801\u6267\u884c\u7ed3\u679c")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Go"},'package main\n\nimport "fmt"\n\nfunc main() {\n    c := make(chan int)\n    for i := 0; i <= 10; i++ {\n        c <- i\n    }\n    go func() {\n        for item := range c {\n            fmt.Println(item)\n        }\n    }()\n}\n')),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u600e\u4e48\u5b89\u5168\u7684\u4f7f\u7528\u5168\u5c40\u53d8\u91cf"),(0,a.kt)("li",{parentName:"ol"},"\u95ed\u5305\uff0c\u628a\u5168\u5c40\u53d8\u91cf\u5f53\u4f5c\u95ed\u5305\u51fd\u6570\u7684\u5c40\u90e8\u53d8\u91cf\uff0c\u8fd4\u56de\u4e00\u4e2a\u51fd\u6570\uff0c\u7a0b\u5e8f\u4f7f\u7528\u8fd9\u4e2a\u51fd\u6570\u6765\u5b89\u5168\u7684\u4f7f\u7528\u8fd9\u79cd\u5168\u5c40\u53d8\u91cf"),(0,a.kt)("li",{parentName:"ol"},"golang\u7684\u63a5\u53e3\u539f\u7406\uff0c\u600e\u4e48\u7528\uff0c\u63a5\u53e3\u7684\u4f5c\u7528"),(0,a.kt)("li",{parentName:"ol"},"Golang\u7684\u5185\u5b58\u5206\u914d\u548c\u5185\u5b58\u7ba1\u7406"),(0,a.kt)("li",{parentName:"ol"},"context\u5305\u7684\u7528\u9014 ")),(0,a.kt)("h2",{id:"\u7b2c\u4e8c\u7bc7\u8ba1\u7b97\u673a\u7f51\u7edc\u5e76\u53d1"},"\u7b2c\u4e8c\u7bc7\uff1a\u8ba1\u7b97\u673a\u7f51\u7edc&\u5e76\u53d1"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"OSI\u4e03\u5c42\u6a21\u578b"),(0,a.kt)("li",{parentName:"ol"},"DNS\u534f\u8bae\u8be6\u7ec6\u8fc7\u7a0b\u3010or \u5411\u6d4f\u89c8\u5668\u91cc\u9762\u8f93\u5165\u4e00\u4e2a\u7f51\u5740\uff0c\u8fc7\u7a0b\u662f\u600e\u4e48\u6837\u7684\uff1f\uff08DNS\uff0cTCP\uff09\u3011"),(0,a.kt)("li",{parentName:"ol"},"ip\u67e5mac\u5730\u5740\u662f\u4ec0\u4e48\u534f\u8bae\uff1f\uff08ARP\uff09"),(0,a.kt)("li",{parentName:"ol"},"http\u548chttps\u7684\u533a\u522b"),(0,a.kt)("li",{parentName:"ol"},"\u7ec6\u8bf4\u4e0bhttps\u5b9e\u73b0\u8fc7\u7a0b\u3010\u5148\u975e\u5bf9\u79f0\u52a0\u5bc6\u7136\u540e\u5bf9\u79f0\u52a0\u5bc6\uff0cssl\u534f\u8bae\u3011"),(0,a.kt)("li",{parentName:"ol"},"TCP\u4e09\u6b21\u63e1\u624b\u8fc7\u7a0b\uff1f"),(0,a.kt)("li",{parentName:"ol"},"TCP\u548cUDP\u7684\u533a\u522b\uff1f"),(0,a.kt)("li",{parentName:"ol"},"\u4e3a\u4ec0\u4e48\u97f3\u89c6\u9891\u4f20\u8f93\u4f7f\u7528UDP\u534f\u8bae\uff1f"),(0,a.kt)("li",{parentName:"ol"},"TCP\u56db\u6b21\u6325\u624b\u540e\uff0c\u4e3a\u4ec0\u4e48\u8981time_wait 2MSL\uff1f\u7b491MSL\u4e3a\u5565\u4e0d\u53ef\u4ee5\uff1f"),(0,a.kt)("li",{parentName:"ol"},"\u65e2\u7136TCP\u6709seq\uff0cTime_wait\u8fd9\u4e2a\u72b6\u6001\u6709\u5565\u7528\u5462\uff1f\u6ca1\u6709\u884c\u4e0d\u884c\uff1f"),(0,a.kt)("li",{parentName:"ol"},"TCP\u7684\u7279\u6027\uff08\u8d85\u65f6\u91cd\u4f20\u3001\u6ed1\u52a8\u7a97\u53e3\u3001\u6d41\u91cf\u63a7\u5236\u3001\u62e5\u585e\u63a7\u5236\uff09"),(0,a.kt)("li",{parentName:"ol"},"http keep-alive ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Bash"},'client\u53d1\u51fa\u7684HTTP\u8bf7\u6c42\u5934\u9700\u8981\u589e\u52a0Connection:keep-alive\u5b57\u6bb5 \nWeb-Server\u7aef\u8981\u80fd\u8bc6\u522bConnection:keep-alive\u5b57\u6bb5\uff0c\u5e76\u4e14\u5728http\u7684response\u91cc\u6307\u5b9aConnection:keep-alive\u5b57\u6bb5\uff0c\u544a\u8bc9client\uff0c\u6211\u80fd\u63d0\u4f9bkeep-alive\u670d\u52a1\uff0c\u5e76\u4e14"\u5e94\u5141"client\u6211\u6682\u65f6\u4e0d\u4f1a\u5173\u95edsocket\u8fde\u63a5 \n')),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u7ebf\u7a0b\uff0c\u534f\u7a0b\uff0c\u8fdb\u7a0b\u7684\u533a\u522b\uff1f"),(0,a.kt)("li",{parentName:"ol"},"\u4e92\u65a5\u9501\uff0c\u8bfb\u5199\u9501\u5e94\u7528\u4ec0\u4e48\u573a\u666f"),(0,a.kt)("li",{parentName:"ol"},"\u7b80\u5355\u8bf4\u4e00\u4e0bGMP\u6a21\u578b"),(0,a.kt)("li",{parentName:"ol"},"channel\u7684\u4f5c\u7528\uff0c\u5728Go\u91cc\u9762\u6709\u4ec0\u4e48\u4f7f\u7528\u573a\u666f\uff1f"),(0,a.kt)("li",{parentName:"ol"},"channel\u5173\u95ed\u4e86\u53bb\u8bfb\u53bb\u5199\u4f1a\u600e\u6837\uff1f"),(0,a.kt)("li",{parentName:"ol"},"IO\u6a21\u578b\uff0c\u540c\u6b65\u963b\u585e\uff0c\u540c\u6b65\u975e\u963b\u585e\uff0cIO\u591a\u8def\u590d\u7528\uff0c\u5f02\u6b65"),(0,a.kt)("li",{parentName:"ol"},"IO\u591a\u8def\u590d\u7528\u7b80\u5355\u4ecb\u7ecd\u4e0b\uff0c\u5176\u4e2depoll\u548cpoll\u7684\u533a\u522b"),(0,a.kt)("li",{parentName:"ol"},"goroutine\u6cc4\u9732\u600e\u4e48\u6392\u67e5"),(0,a.kt)("li",{parentName:"ol"},"\u4e3b\u534f\u7a0b\u5982\u4f55\u7b49\u5176\u4f59\u534f\u7a0b\u5b8c\u518d\u64cd\u4f5c\u3010\u4f7f\u7528channel\u8fdb\u884c\u901a\u4fe1\uff0ccontext,select \u3011")),(0,a.kt)("h2",{id:"\u7b2c\u4e09\u7bc7\u6846\u67b6"},"\u7b2c\u4e09\u7bc7\uff1a\u6846\u67b6"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"gin\u6846\u67b6"),(0,a.kt)("li",{parentName:"ol"},"Go-zero"),(0,a.kt)("li",{parentName:"ol"},"micro\u6846\u67b6")),(0,a.kt)("h2",{id:"\u7b2c\u56db\u7bc7\u6570\u636e\u5e93"},"\u7b2c\u56db\u7bc7\uff1a\u6570\u636e\u5e93"),(0,a.kt)("h3",{id:"41-mysql"},"4.1 \u3001MySQL"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"mysql\u7684\u4e0d\u540c\u7d22\u5f15\u7c7b\u578b"),(0,a.kt)("li",{parentName:"ol"},"mysql\u6709\u51e0\u79cd\u65e5\u5fd7\uff0cbinlog\u4ec0\u4e48\u60c5\u51b5\u53ef\u4ee5\u4ea7\u751f\uff0c\u4e3b\u8981\u662f\u5e72\u561b\u7528\u7684")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Bash"},"\u91cd\u505a\u65e5\u5fd7\uff08redo log\uff09\n\u56de\u6eda\u65e5\u5fd7\uff08undo log\uff09\n\u4e8c\u8fdb\u5236\u65e5\u5fd7\uff08binlog\uff09\n\u9519\u8bef\u65e5\u5fd7\uff08errorlog\uff09\n\u6162\u67e5\u8be2\u65e5\u5fd7\uff08slow query log\uff09\n\u4e00\u822c\u67e5\u8be2\u65e5\u5fd7\uff08general log\uff09\n\u4e2d\u7ee7\u65e5\u5fd7\uff08relay log\uff09\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Mysql\u4e8b\u52a1\u9694\u79bb\u7ea7\u522b"),(0,a.kt)("li",{parentName:"ol"},"MyISAM \u548c InnoDB \u7684\u533a\u522b\u6709\u54ea\u4e9b\uff1f"),(0,a.kt)("li",{parentName:"ol"},"\u4ec0\u4e48\u662f\u8986\u76d6\u7d22\u5f15\uff1f"),(0,a.kt)("li",{parentName:"ol"},"\u6211\u4eec\u4e00\u822c\u9009\u62e9\u4ec0\u4e48\u6837\u7684\u5b57\u6bb5\u6765\u5efa\u7acb\u7d22\u5f15\uff1f"),(0,a.kt)("li",{parentName:"ol"},"\u4e3a\u4ec0\u4e48\u7d22\u5f15\u7ed3\u6784\u9ed8\u8ba4\u4f7f\u7528B+Tree\uff1f"),(0,a.kt)("li",{parentName:"ol"},"MySQL\u4e3b\u4ece\u590d\u5236\u6d41\u7a0b\u548c\u539f\u7406\uff1f"),(0,a.kt)("li",{parentName:"ol"},"\u8bf4\u4e0b\u805a\u7c07\u7d22\u5f15 & \u975e\u805a\u7c07\u7d22\u5f15\u533a\u522b"),(0,a.kt)("li",{parentName:"ol"},"\u4e86\u89e3Mysql\u7684\u60b2\u89c2\u9501\u548c\u4e50\u89c2\u9501\u5417\uff1f\u7b80\u5355\u4ecb\u7ecd\u4e00\u4e0b\u3002")),(0,a.kt)("h3",{id:"42redis"},"4.2\u3001redis"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u9879\u76ee\u4e2dredis\u4f7f\u7528\u4e86\u54ea\u4e9b\u6570\u636e\u7ed3\u6784\uff1f\u54ea\u4e9b\u573a\u666f\u4e0b\u7528\u4e86\u4ec0\u4e48\u6570\u636e\u7ed3\u6784\uff1f\u600e\u4e48\u8003\u8651\u7684\uff1f"),(0,a.kt)("li",{parentName:"ol"},"Redis\u7684\u4e3b\u8981\u4f7f\u7528\u573a\u666f"),(0,a.kt)("li",{parentName:"ol"},"\u4e3a\u4ec0\u4e48redis\u662f\u5355\u7ebf\u7a0b\u7684\uff1f")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Bash"},"Redis\u662f\u57fa\u4e8e\u5185\u5b58\u7684\u64cd\u4f5c\uff0cCPU\u4e0d\u662fRedis\u7684\u74f6\u9888\uff0cRedis\u7684\u74f6\u9888\u6700\u6709\u53ef\u80fd\u662f\u673a\u5668\u5185\u5b58\u7684\u5927\u5c0f\u6216\u8005\u7f51\u7edc\u5e26\u5bbd\u3002\u65e2\u7136\u5355\u7ebf\u7a0b\u5bb9\u6613\u5b9e\u73b0\uff0c\u800c\u4e14CPU\u4e0d\u4f1a\u6210\u4e3a\u74f6\u9888\uff0c\u90a3\u5c31\u987a\u7406\u6210\u7ae0\u5730\u91c7\u7528\u5355\u7ebf\u7a0b\u7684\u65b9\u6848\u4e86\uff08\u6bd5\u7adf\u91c7\u7528\u591a\u7ebf\u7a0b\u4f1a\u6709\u5f88\u591a\u9ebb\u70e6\uff01\uff09\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Redis"),"\u662f\u5355\u7ebf\u7a0b\u7684\uff0c\u4f46",(0,a.kt)("strong",{parentName:"li"},"Redis"),"\u4e3a\u4ec0\u4e48\u8fd9\u4e48\u5feb\uff1f")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Bash"},"1\u3001\u5b8c\u5168\u57fa\u4e8e\u5185\u5b58\uff0c\u7edd\u5927\u90e8\u5206\u8bf7\u6c42\u662f\u7eaf\u7cb9\u7684\u5185\u5b58\u64cd\u4f5c\uff0c\u975e\u5e38\u5feb\u901f\u3002\u6570\u636e\u5b58\u5728\u5185\u5b58\u4e2d\uff0c\u7c7b\u4f3c\u4e8eHashMap\uff0cHashMap\u7684\u4f18\u52bf\u5c31\u662f\u67e5 \u627e\u548c\u64cd\u4f5c\u7684\u65f6\u95f4\u590d\u6742\u5ea6\u90fd\u662fO(1)\uff1b \n2\u3001\u6570\u636e\u7ed3\u6784\u7b80\u5355\uff0c\u5bf9\u6570\u636e\u64cd\u4f5c\u4e5f\u7b80\u5355\uff0cRedis\u4e2d\u7684\u6570\u636e\u7ed3\u6784\u662f\u4e13\u95e8\u8fdb\u884c\u8bbe\u8ba1\u7684\uff1b \n3\u3001\u91c7\u7528\u5355\u7ebf\u7a0b\uff0c\u907f\u514d\u4e86\u4e0d\u5fc5\u8981\u7684\u4e0a\u4e0b\u6587\u5207\u6362\u548c\u7ade\u4e89\u6761\u4ef6\uff0c\u4e5f\u4e0d\u5b58\u5728\u591a\u8fdb\u7a0b\u6216\u8005\u591a\u7ebf\u7a0b\u5bfc\u81f4\u7684\u5207\u6362\u800c\u6d88\u8017 CPU\uff0c\u4e0d\u7528\u53bb\u8003\u8651\u5404\u79cd\u9501\u7684\u95ee\u9898\uff0c\u4e0d\u5b58\u5728\u52a0\u9501\u91ca\u653e\u9501\u64cd\u4f5c\uff0c\u6ca1\u6709\u56e0\u4e3a\u53ef\u80fd\u51fa\u73b0\u6b7b\u9501\u800c\u5bfc\u81f4\u7684\u6027\u80fd\u6d88\u8017\uff1b \n4\u3001\u4f7f\u7528\u591a\u8defI/O\u590d\u7528\u6a21\u578b\uff0c\u975e\u963b\u585eIO\uff1b\u8fd9\u91cc\u201c\u591a\u8def\u201d\u6307\u7684\u662f\u591a\u4e2a\u7f51\u7edc\u8fde\u63a5\uff0c\u201c\u590d\u7528\u201d\u6307\u7684\u662f\u590d\u7528\u540c\u4e00\u4e2a\u7ebf\u7a0b \n5\u3001\u4f7f\u7528\u5e95\u5c42\u6a21\u578b\u4e0d\u540c\uff0c\u5b83\u4eec\u4e4b\u95f4\u5e95\u5c42\u5b9e\u73b0\u65b9\u5f0f\u4ee5\u53ca\u4e0e\u5ba2\u6237\u7aef\u4e4b\u95f4\u901a\u4fe1\u7684\u5e94\u7528\u534f\u8bae\u4e0d\u4e00\u6837\uff0cRedis\u76f4\u63a5\u81ea\u5df1\u6784\u5efa\u4e86VM \u673a\u5236 \uff0c\u56e0\u4e3a\u4e00\u822c\u7684\u7cfb\u7edf\u8c03\u7528\u7cfb\u7edf\u51fd\u6570\u7684\u8bdd\uff0c\u4f1a\u6d6a\u8d39\u4e00\u5b9a\u7684\u65f6\u95f4\u53bb\u79fb\u52a8\u548c\u8bf7\u6c42\uff1b \n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Redis\u6bcf\u79d2\u8bfb\u5199\u901f\u7387\uff1f"),(0,a.kt)("li",{parentName:"ol"},"Redis\u4e3b\u4ece\u6a21\u5f0f\u548c\u96c6\u7fa4\u6a21\u5f0f\u7684\u533a\u522b"),(0,a.kt)("li",{parentName:"ol"},"Redis\u5206\u5e03\u5f0f\u9501\u7684\u5e95\u5c42\u539f\u7406\u662f\u4ec0\u4e48\uff1f")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Bash"},"\u5148\u62ffsetnx\u6765\u4e89\u62a2\u9501\uff0c\u62a2\u5230\u4e4b\u540e\uff0c\u518d\u7528expire\u7ed9\u9501\u52a0\u4e00\u4e2a\u8fc7\u671f\u65f6\u95f4\u9632\u6b62\u9501\u5fd8\u8bb0\u4e86\u91ca\u653e\u3002\u5982\u679c\u5728setnx\u4e4b\u540e\u6267\u884cexpire\u4e4b\u524d\u8fdb\u7a0b \u3002\u610f\u5916crash\u6216\u8005\u8981\u91cd\u542f\u7ef4\u62a4\u4e86\uff0c\u90a3\u4f1a\u600e\u4e48\u6837\uff1fset\u6307\u4ee4\u6709\u975e\u5e38\u590d\u6742\u7684\u53c2\u6570\uff0c\u8fd9\u4e2a\u5e94\u8be5\u662f\u53ef\u4ee5\u540c\u65f6\u628asetnx\u548cexpire\u5408\u6210\u4e00\u6761\u6307\u4ee4 \u6765\u7528\u7684\uff01\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"redis\u7684\u53ef\u6301\u4e45\u5316\u673a\u5236"),(0,a.kt)("li",{parentName:"ol"},"\u4ec0\u4e48\u662f\u7f13\u5b58\u96ea\u5d29\uff1f\u5982\u4f55\u89e3\u51b3\u7f13\u5b58\u96ea\u5d29\uff1f"),(0,a.kt)("li",{parentName:"ol"},"\u8bf4\u4e0b\u7f13\u5b58\u51fb\u7a7f\uff0c\u5982\u4f55\u89e3\u51b3\uff1f"),(0,a.kt)("li",{parentName:"ol"},"\u8bbe\u7f6e\u70ed\u70b9\u6570\u636e\u6c38\u4e0d\u8fc7\u671f\u3001\u66f4\u65b0\u7f13\u5b58\u65f6\uff0c\u52a0\u5168\u5c40\u9501\uff0c\u4fdd\u8bc1\u53ea\u6709\u4e00\u4e2a\u8d70\u6570\u636e\u5e93"),(0,a.kt)("li",{parentName:"ol"},"\u9879\u76ee\u4e2d\u7f13\u5b58\u540c\u6b65\u600e\u4e48\u5b9e\u73b0\u7684\uff1f")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Plain"},"\u6211\u91c7\u7528\u7684\u662f\u672c\u5730\u7f13\u5b58\u540c\u6b65(\u5f53\u524d\u5fae\u670d\u52a1\u7684\u6570\u636e\u5e93\u6570\u636e\u4e0e\u7f13\u5b58\u6570\u636e\u540c\u6b65\uff0c\u53ef\u4ee5\u76f4\u63a5\u5728\u6570\u636e\u5e93\u4fee\u6539\u65f6\u52a0\u5165\u5bf9Redis\u7684\u4fee\u6539\u903b\u8f91\uff0c\u4fdd\u8bc1\u6570\u636e\u4e00\u81f4) + \u8de8\u670d\u52a1\u7f13\u5b58\u540c\u6b65\u7b56\u7565(\u5bf9\u4e8e\u670d\u52a1A\u8c03\u7528\u4e86\u670d\u52a1B\uff0c\u5e76\u5bf9\u67e5\u8be2\u7ed3\u679c\u7f13\u5b58\u3002\u670d\u52a1B\u6570\u636e\u5e93\u4fee\u6539\uff0c\u53ef\u4ee5\u901a\u8fc7rabbitmq\u901a\u77e5\u670d\u52a1A\uff0c\u670d\u52a1A\u4fee\u6539Redis\u7f13\u5b58\u6570\u636e\uff09\u3002\u53e6\u5916\u8bf4\u4e86\uff0c\u5176\u5b9e\u53ef\u4ee5\u4f7f\u7528Canal\u6846\u67b6\uff0c\u7528\u6765\u4f2a\u88c5\u6210MySQL\u7684salve\u8282\u70b9\uff0c\u76d1\u542cMySQL\u7684binLog\u662f\u5426\u53d8\u5316\uff0c\u7136\u540e\u518d\u53bb\u4fee\u6539Redis\u7f13\u5b58\u6570\u636e\uff08\u4f46\u662f\u5728\u9879\u76ee\u4e2d\u6ca1\u6709\u4f7f\u7528\u5230\uff09\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"redis\u7684zeset\u7684\u5e95\u5c42\u539f\u7406")),(0,a.kt)("h3",{id:"43\u6d88\u606f\u961f\u5217"},"4.3\u3001\u6d88\u606f\u961f\u5217"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Rabbitmq\u662f\u5982\u4f55\u786e\u4fdd\u6d88\u606f\u7684\u4e0d\u4e22\u5931\uff1f"),(0,a.kt)("li",{parentName:"ol"},"Rabbitmq\u5982\u4f55\u907f\u514d\u6d88\u606f\u5806\u79ef\u95ee\u9898\uff1f"),(0,a.kt)("li",{parentName:"ol"},"rabbitMQ\u6d88\u606f\u4e0d\u6d88\u8d39\u4f1a\u600e\u6837")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Bash"},"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6d88\u606f\u662f\u4e0d\u4f1a\u8fc7\u671f\u7684\uff0c\u4e5f\u5c31\u662f\u6211\u4eec\u5e73\u65e5\u91cc\u5728\u6d88\u606f\u53d1\u9001\u65f6\uff0c\u5982\u679c\u4e0d\u8bbe\u7f6e\u4efb\u4f55\u6d88\u606f\u8fc7\u671f\u7684\u76f8\u5173\u53c2\u6570\uff0c\u90a3\u4e48\u6d88\u606f\u662f\u4e0d\u4f1a\u8fc7\u671f\u7684\uff0c\u5373\u4f7f\u6d88\u606f\u6ca1\u88ab\u6d88\u8d39\u6389\uff0c\u4e5f\u4f1a\u4e00\u76f4\u5b58\u50a8\u5728\u961f\u5217\u4e2d\u3002\nTTL\uff08Time-To-Live\uff09\uff0c\u6d88\u606f\u5b58\u6d3b\u7684\u65f6\u95f4\uff0c\u5373\u6d88\u606f\u7684\u6709\u6548\u671f\u3002\u5982\u679c\u6211\u4eec\u5e0c\u671b\u6d88\u606f\u80fd\u591f\u6709\u4e00\u4e2a\u5b58\u6d3b\u65f6\u95f4\uff0c\u90a3\u4e48\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e TTL \u6765\u5b9e\u73b0\u8fd9\u4e00\u9700\u6c42\u3002\u5982\u679c\u6d88\u606f\u7684\u5b58\u6d3b\u65f6\u95f4\u8d85\u8fc7\u4e86 TTL \u5e76\u4e14\u8fd8\u6ca1\u6709\u88ab\u6d88\u606f\uff0c\u6b64\u65f6\u6d88\u606f\u5c31\u4f1a\u53d8\u6210\u6b7b\u4fe1\uff0c\u5f53\u6d88\u606f\u961f\u5217\u8bbe\u7f6e\u8fc7\u671f\u65f6\u95f4\u7684\u65f6\u5019\uff0c\u90a3\u4e48\u6d88\u606f\u8fc7\u671f\u4e86\u5c31\u4f1a\u88ab\u5220\u9664\n")),(0,a.kt)("h2",{id:"\u7b2c\u4e94\u7bc7\u6570\u636e\u7ed3\u6784\u4e0e\u7b97\u6cd5"},"\u7b2c\u4e94\u7bc7\uff1a\u6570\u636e\u7ed3\u6784\u4e0e\u7b97\u6cd5"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5e38\u7528\u7684\u6570\u636e\u7ed3\u6784\uff1a\u7ebf\u6027\u7ed3\u6784\u3001\u975e\u7ebf\u6027\u7ed3\u6784\uff0c\u5806\u6808\uff0c\u6570\u7ec4\uff0c\u94fe\u8868"),(0,a.kt)("li",{parentName:"ol"},"\u94fe\u8868\u7684\u7ed3\u6784\u662f\u4ec0\u4e48\u6837\u3001\u6307\u9488\u662f\u5e72\u561b"),(0,a.kt)("li",{parentName:"ol"},"\u7b80\u5355\u8bf4\u4e00\u4e0b\u7b80\u5355\u7684\u6392\u5e8f\u7b97\u6cd5\uff1f"),(0,a.kt)("li",{parentName:"ol"},"\u5192\u6ce1\u6392\u5e8f\u548c\u5feb\u901f\u6392\u5e8f\u7684\u65f6\u95f4\u590d\u6742\u5ea6\u662f\u600e\u6837\u7684\uff1f"),(0,a.kt)("li",{parentName:"ol"},"\u6709\u4e00\u4e2a\u6574\u578b\u7684\u65e0\u5e8f\u6570\u7ec4\uff0c\u5982\u4f55\u5feb\u901f\u627e\u51fa\u7b2ck\u5927\u7684\u6570\uff1f"),(0,a.kt)("li",{parentName:"ol"},"\u4ec0\u4e48\u662f\u5355\u4f8b\u6a21\u5f0f\uff0c\u4ec0\u4e48\u573a\u666f\u7528\u5230\u5355\u4f8b\u6a21\u5f0f\uff1f")),(0,a.kt)("h2",{id:"\u7b2c\u516d\u7bc7\u7efc\u5408\u7bc7"},"\u7b2c\u516d\u7bc7\uff1a\u7efc\u5408\u7bc7"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u8bf7\u4f60\u81ea\u6211\u4ecb\u7ecd\u4e00\u4e0b\u4f60\u81ea\u5df1\uff1f "),(0,a.kt)("li",{parentName:"ol"},"\u80fd\u4e0d\u80fd\u63a5\u53d7996\u3010\u4e07\u6076\u7684\u8d44\u672c\u5bb6\u3011\uff0c\u4f1a\u4e0d\u4f1a\u6392\u65a5\u52a0\u73ed\uff1f"),(0,a.kt)("li",{parentName:"ol"},"\u4e3a\u4ec0\u4e48\u79bb\u804c\uff1f")))}c.isMDXComponent=!0}}]);