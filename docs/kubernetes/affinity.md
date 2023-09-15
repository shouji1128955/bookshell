## affinity

实现对Pod均衡的调度到某些节点

需要对节点添加污点

```shell
  template:
    metadata:
      creationTimestamp: null
      labels:
        app: topo-dep

# 软性要求
# 如果节点上的pod标签存在满足app=topo-dep，也可以部署到节点上，尽可能先部署到其它节点，如果没有满足也可以部署到此节点
    spec:
      affinity:                  
        podAntiAffinity:             #pod反亲和
          preferredDuringSchedulingIgnoredDuringExecution:
          - weight: 100              #根据权重分配
            podAffinityTerm:
              labelSelector:
                matchExpressions:
                - key: "app"        #对于app=topo-dep的pod尽量不调度到该节点
                  operator: In
                  values: 
                  - topo-dep
              topologyKey: "kubernetes.io/hostname"
```





以上是软性要求，可以配置硬性要求

```shell
# 硬性要求
# 如果节点上的pod标签存在满足app=nginx，则不能部署到节点上
    spec:
      affinity:
        podAntiAffinity:
          requiredDuringSchedulingIgnoredDuringExecution:
          - labelSelector:
              matchExpressions:
              - key: app
                operator: In
                values:
                - nginx
            topologyKey: "kubernetes.io/hostname"
```

