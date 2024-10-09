import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/bookshell/en/blog',
    component: ComponentCreator('/bookshell/en/blog', '34d'),
    exact: true
  },
  {
    path: '/bookshell/en/blog/2023/12/19/mongodb数据库恢复',
    component: ComponentCreator('/bookshell/en/blog/2023/12/19/mongodb数据库恢复', '08b'),
    exact: true
  },
  {
    path: '/bookshell/en/blog/2024/4.npm操作',
    component: ComponentCreator('/bookshell/en/blog/2024/4.npm操作', 'd9d'),
    exact: true
  },
  {
    path: '/bookshell/en/blog/archive',
    component: ComponentCreator('/bookshell/en/blog/archive', 'ee8'),
    exact: true
  },
  {
    path: '/bookshell/en/blog/authors',
    component: ComponentCreator('/bookshell/en/blog/authors', 'aa6'),
    exact: true
  },
  {
    path: '/bookshell/en/blog/config-docusaurus-v2',
    component: ComponentCreator('/bookshell/en/blog/config-docusaurus-v2', '0bb'),
    exact: true
  },
  {
    path: '/bookshell/en/blog/github结合actions实现自动化部署',
    component: ComponentCreator('/bookshell/en/blog/github结合actions实现自动化部署', '9f5'),
    exact: true
  },
  {
    path: '/bookshell/en/blog/tags',
    component: ComponentCreator('/bookshell/en/blog/tags', '1c4'),
    exact: true
  },
  {
    path: '/bookshell/en/blog/tags/action',
    component: ComponentCreator('/bookshell/en/blog/tags/action', 'c27'),
    exact: true
  },
  {
    path: '/bookshell/en/blog/tags/docusaurus',
    component: ComponentCreator('/bookshell/en/blog/tags/docusaurus', '2cd'),
    exact: true
  },
  {
    path: '/bookshell/en/markdown-page',
    component: ComponentCreator('/bookshell/en/markdown-page', 'f3e'),
    exact: true
  },
  {
    path: '/bookshell/en/search',
    component: ComponentCreator('/bookshell/en/search', '7e9'),
    exact: true
  },
  {
    path: '/bookshell/en/docs',
    component: ComponentCreator('/bookshell/en/docs', 'afa'),
    routes: [
      {
        path: '/bookshell/en/docs',
        component: ComponentCreator('/bookshell/en/docs', '11b'),
        routes: [
          {
            path: '/bookshell/en/docs',
            component: ComponentCreator('/bookshell/en/docs', 'ab9'),
            routes: [
              {
                path: '/bookshell/en/docs/DevOps/ELK/elasticsearch操作',
                component: ComponentCreator('/bookshell/en/docs/DevOps/ELK/elasticsearch操作', 'fb0'),
                exact: true,
                sidebar: "DevOpsElk"
              },
              {
                path: '/bookshell/en/docs/DevOps/ELK/ELK日志告警',
                component: ComponentCreator('/bookshell/en/docs/DevOps/ELK/ELK日志告警', '371'),
                exact: true,
                sidebar: "DevOpsElk"
              },
              {
                path: '/bookshell/en/docs/DevOps/ELK/ELK测试部署',
                component: ComponentCreator('/bookshell/en/docs/DevOps/ELK/ELK测试部署', 'ad4'),
                exact: true,
                sidebar: "DevOpsElk"
              },
              {
                path: '/bookshell/en/docs/DevOps/gitOps/Tekton-catalog',
                component: ComponentCreator('/bookshell/en/docs/DevOps/gitOps/Tekton-catalog', 'f23'),
                exact: true,
                sidebar: "DevOpsGitOps"
              },
              {
                path: '/bookshell/en/docs/DevOps/gitOps/tekton-results',
                component: ComponentCreator('/bookshell/en/docs/DevOps/gitOps/tekton-results', '3c9'),
                exact: true,
                sidebar: "DevOpsGitOps"
              },
              {
                path: '/bookshell/en/docs/DevOps/gitOps/Tekton-sidecar',
                component: ComponentCreator('/bookshell/en/docs/DevOps/gitOps/Tekton-sidecar', '29a'),
                exact: true,
                sidebar: "DevOpsGitOps"
              },
              {
                path: '/bookshell/en/docs/DevOps/gitOps/Tekton-triggers',
                component: ComponentCreator('/bookshell/en/docs/DevOps/gitOps/Tekton-triggers', 'd06'),
                exact: true,
                sidebar: "DevOpsGitOps"
              },
              {
                path: '/bookshell/en/docs/DevOps/gitOps/Tekton-workspace',
                component: ComponentCreator('/bookshell/en/docs/DevOps/gitOps/Tekton-workspace', '5af'),
                exact: true,
                sidebar: "DevOpsGitOps"
              },
              {
                path: '/bookshell/en/docs/DevOps/gitOps/tekton安装',
                component: ComponentCreator('/bookshell/en/docs/DevOps/gitOps/tekton安装', '551'),
                exact: true,
                sidebar: "DevOpsGitOps"
              },
              {
                path: '/bookshell/en/docs/DevOps/gitOps/tekton拉取代码',
                component: ComponentCreator('/bookshell/en/docs/DevOps/gitOps/tekton拉取代码', '70a'),
                exact: true,
                sidebar: "DevOpsGitOps"
              },
              {
                path: '/bookshell/en/docs/DevOps/jenkins/hello',
                component: ComponentCreator('/bookshell/en/docs/DevOps/jenkins/hello', '774'),
                exact: true,
                sidebar: "DevOpsJenkins"
              },
              {
                path: '/bookshell/en/docs/DevOps/jenkins/jenkins安装配置/jenkins安装配置',
                component: ComponentCreator('/bookshell/en/docs/DevOps/jenkins/jenkins安装配置/jenkins安装配置', 'ccc'),
                exact: true,
                sidebar: "DevOpsJenkins"
              },
              {
                path: '/bookshell/en/docs/DevOps/jenkins/通过ansible实现服务发布/配置ansible',
                component: ComponentCreator('/bookshell/en/docs/DevOps/jenkins/通过ansible实现服务发布/配置ansible', '229'),
                exact: true,
                sidebar: "DevOpsJenkins"
              },
              {
                path: '/bookshell/en/docs/DevOps/observability/OpenTelemetry',
                component: ComponentCreator('/bookshell/en/docs/DevOps/observability/OpenTelemetry', '81f'),
                exact: true,
                sidebar: "DevOpsobservability"
              },
              {
                path: '/bookshell/en/docs/DevOps/skywalking/elasticsearch容器集群安装',
                component: ComponentCreator('/bookshell/en/docs/DevOps/skywalking/elasticsearch容器集群安装', '33b'),
                exact: true,
                sidebar: "DevOpsSkywalking"
              },
              {
                path: '/bookshell/en/docs/DevOps/skywalking/zookeeper安装',
                component: ComponentCreator('/bookshell/en/docs/DevOps/skywalking/zookeeper安装', '9e0'),
                exact: true,
                sidebar: "DevOpsSkywalking"
              },
              {
                path: '/bookshell/en/docs/DevOps/terraform/terraform',
                component: ComponentCreator('/bookshell/en/docs/DevOps/terraform/terraform', '503'),
                exact: true,
                sidebar: "DevOpsterraform"
              },
              {
                path: '/bookshell/en/docs/Golang/golang基础/golang环境信息配置/golang环境信息配置',
                component: ComponentCreator('/bookshell/en/docs/Golang/golang基础/golang环境信息配置/golang环境信息配置', 'cb8'),
                exact: true,
                sidebar: "GoalngJichu"
              },
              {
                path: '/bookshell/en/docs/Golang/golang基础/Go核心编程2023/golang',
                component: ComponentCreator('/bookshell/en/docs/Golang/golang基础/Go核心编程2023/golang', 'a7a'),
                exact: true,
                sidebar: "GoalngJichu"
              },
              {
                path: '/bookshell/en/docs/Golang/golang基础/go语言读取多种格式配置文件/Golang读取各种配置文件',
                component: ComponentCreator('/bookshell/en/docs/Golang/golang基础/go语言读取多种格式配置文件/Golang读取各种配置文件', '6d2'),
                exact: true,
                sidebar: "GoalngJichu"
              },
              {
                path: '/bookshell/en/docs/Golang/golang基础/笔记总结/笔记总结',
                component: ComponentCreator('/bookshell/en/docs/Golang/golang基础/笔记总结/笔记总结', '412'),
                exact: true,
                sidebar: "GoalngJichu"
              },
              {
                path: '/bookshell/en/docs/Golang/golang运维/项目1-Bingo/Bingo',
                component: ComponentCreator('/bookshell/en/docs/Golang/golang运维/项目1-Bingo/Bingo', '57c'),
                exact: true,
                sidebar: "GoalngOper"
              },
              {
                path: '/bookshell/en/docs/Golang/golang进阶/gin框架2023/Gin框架',
                component: ComponentCreator('/bookshell/en/docs/Golang/golang进阶/gin框架2023/Gin框架', 'b98'),
                exact: true,
                sidebar: "GoalngJinjie"
              },
              {
                path: '/bookshell/en/docs/Golang/golang进阶/mysql数据库/Mysql基础',
                component: ComponentCreator('/bookshell/en/docs/Golang/golang进阶/mysql数据库/Mysql基础', '6cf'),
                exact: true,
                sidebar: "GoalngJinjie"
              },
              {
                path: '/bookshell/en/docs/Golang/golang进阶/问题汇总/ORM数据库汇总',
                component: ComponentCreator('/bookshell/en/docs/Golang/golang进阶/问题汇总/ORM数据库汇总', 'e43'),
                exact: true,
                sidebar: "GoalngJinjie"
              },
              {
                path: '/bookshell/en/docs/Golang/VUE/vue入门教程/html基础',
                component: ComponentCreator('/bookshell/en/docs/Golang/VUE/vue入门教程/html基础', 'c00'),
                exact: true,
                sidebar: "GoalngVue"
              },
              {
                path: '/bookshell/en/docs/Golang/VUE/vue入门教程/vue入门教程1',
                component: ComponentCreator('/bookshell/en/docs/Golang/VUE/vue入门教程/vue入门教程1', '2b0'),
                exact: true,
                sidebar: "GoalngVue"
              },
              {
                path: '/bookshell/en/docs/Golang/VUE/vue入门教程/vue入门教程2',
                component: ComponentCreator('/bookshell/en/docs/Golang/VUE/vue入门教程/vue入门教程2', 'ff6'),
                exact: true,
                sidebar: "GoalngVue"
              },
              {
                path: '/bookshell/en/docs/Golang/VUE/vue入门教程/vue环境安装',
                component: ComponentCreator('/bookshell/en/docs/Golang/VUE/vue入门教程/vue环境安装', '56d'),
                exact: true,
                sidebar: "GoalngVue"
              },
              {
                path: '/bookshell/en/docs/Golang/VUE/vue入门教程/vue项目学习',
                component: ComponentCreator('/bookshell/en/docs/Golang/VUE/vue入门教程/vue项目学习', '867'),
                exact: true,
                sidebar: "GoalngVue"
              },
              {
                path: '/bookshell/en/docs/Java/JAVA/admin组件',
                component: ComponentCreator('/bookshell/en/docs/Java/JAVA/admin组件', 'aa0'),
                exact: true,
                sidebar: "JAVA"
              },
              {
                path: '/bookshell/en/docs/k8s/ansible安装k8s-1.24.12',
                component: ComponentCreator('/bookshell/en/docs/k8s/ansible安装k8s-1.24.12', '50d'),
                exact: true,
                sidebar: "k8s"
              },
              {
                path: '/bookshell/en/docs/k8s/Controller',
                component: ComponentCreator('/bookshell/en/docs/k8s/Controller', '25b'),
                exact: true,
                sidebar: "k8s"
              },
              {
                path: '/bookshell/en/docs/k8s/helm',
                component: ComponentCreator('/bookshell/en/docs/k8s/helm', '01b'),
                exact: true,
                sidebar: "k8s"
              },
              {
                path: '/bookshell/en/docs/k8s/k8s_studay',
                component: ComponentCreator('/bookshell/en/docs/k8s/k8s_studay', 'abd'),
                exact: true,
                sidebar: "k8s"
              },
              {
                path: '/bookshell/en/docs/k8s/kubernetes_cka',
                component: ComponentCreator('/bookshell/en/docs/k8s/kubernetes_cka', '0f1'),
                exact: true,
                sidebar: "k8s"
              },
              {
                path: '/bookshell/en/docs/k8s/operator',
                component: ComponentCreator('/bookshell/en/docs/k8s/operator', '46c'),
                exact: true,
                sidebar: "k8s"
              },
              {
                path: '/bookshell/en/docs/k8s/更新内核',
                component: ComponentCreator('/bookshell/en/docs/k8s/更新内核', '4fe'),
                exact: true,
                sidebar: "k8s"
              },
              {
                path: '/bookshell/en/docs/Prometheus/alertManager/alertmanager告警配置',
                component: ComponentCreator('/bookshell/en/docs/Prometheus/alertManager/alertmanager告警配置', '44b'),
                exact: true,
                sidebar: "PrometheusAlert"
              },
              {
                path: '/bookshell/en/docs/Prometheus/grafana',
                component: ComponentCreator('/bookshell/en/docs/Prometheus/grafana', '64c'),
                exact: true,
                sidebar: "PrometheusGrafana"
              },
              {
                path: '/bookshell/en/docs/Prometheus/prometheus/prometheus指标',
                component: ComponentCreator('/bookshell/en/docs/Prometheus/prometheus/prometheus指标', '8ee'),
                exact: true,
                sidebar: "PrometheusServer"
              },
              {
                path: '/bookshell/en/docs/Prometheus/prometheus/ServiceMoinitor',
                component: ComponentCreator('/bookshell/en/docs/Prometheus/prometheus/ServiceMoinitor', 'd19'),
                exact: true,
                sidebar: "PrometheusServer"
              },
              {
                path: '/bookshell/en/docs/Prometheus/prometheus/告警指标汇总',
                component: ComponentCreator('/bookshell/en/docs/Prometheus/prometheus/告警指标汇总', '63f'),
                exact: true,
                sidebar: "PrometheusServer"
              },
              {
                path: '/bookshell/en/docs/Sre/中间件/cilium',
                component: ComponentCreator('/bookshell/en/docs/Sre/中间件/cilium', '27a'),
                exact: true,
                sidebar: "SreMiddleSoft"
              },
              {
                path: '/bookshell/en/docs/Sre/中间件/clickhouse',
                component: ComponentCreator('/bookshell/en/docs/Sre/中间件/clickhouse', 'f24'),
                exact: true,
                sidebar: "SreMiddleSoft"
              },
              {
                path: '/bookshell/en/docs/Sre/中间件/databasebackup-restore',
                component: ComponentCreator('/bookshell/en/docs/Sre/中间件/databasebackup-restore', '023'),
                exact: true,
                sidebar: "SreMiddleSoft"
              },
              {
                path: '/bookshell/en/docs/Sre/中间件/Elasticsearch',
                component: ComponentCreator('/bookshell/en/docs/Sre/中间件/Elasticsearch', 'c30'),
                exact: true,
                sidebar: "SreMiddleSoft"
              },
              {
                path: '/bookshell/en/docs/Sre/中间件/Harbor',
                component: ComponentCreator('/bookshell/en/docs/Sre/中间件/Harbor', '696'),
                exact: true,
                sidebar: "SreMiddleSoft"
              },
              {
                path: '/bookshell/en/docs/Sre/中间件/Mysql',
                component: ComponentCreator('/bookshell/en/docs/Sre/中间件/Mysql', 'a1f'),
                exact: true,
                sidebar: "SreMiddleSoft"
              },
              {
                path: '/bookshell/en/docs/Sre/中间件/nginx',
                component: ComponentCreator('/bookshell/en/docs/Sre/中间件/nginx', '396'),
                exact: true,
                sidebar: "SreMiddleSoft"
              },
              {
                path: '/bookshell/en/docs/Sre/中间件/nomad',
                component: ComponentCreator('/bookshell/en/docs/Sre/中间件/nomad', '76f'),
                exact: true,
                sidebar: "SreMiddleSoft"
              },
              {
                path: '/bookshell/en/docs/Sre/中间件/openvpn',
                component: ComponentCreator('/bookshell/en/docs/Sre/中间件/openvpn', 'd1d'),
                exact: true,
                sidebar: "SreMiddleSoft"
              },
              {
                path: '/bookshell/en/docs/Sre/中间件/Postgresql',
                component: ComponentCreator('/bookshell/en/docs/Sre/中间件/Postgresql', '07d'),
                exact: true,
                sidebar: "SreMiddleSoft"
              },
              {
                path: '/bookshell/en/docs/Sre/中间件/pulsar',
                component: ComponentCreator('/bookshell/en/docs/Sre/中间件/pulsar', '190'),
                exact: true,
                sidebar: "SreMiddleSoft"
              },
              {
                path: '/bookshell/en/docs/Sre/中间件/Redis',
                component: ComponentCreator('/bookshell/en/docs/Sre/中间件/Redis', 'd44'),
                exact: true,
                sidebar: "SreMiddleSoft"
              },
              {
                path: '/bookshell/en/docs/Sre/中间件/TongWeb',
                component: ComponentCreator('/bookshell/en/docs/Sre/中间件/TongWeb', '8bf'),
                exact: true,
                sidebar: "SreMiddleSoft"
              },
              {
                path: '/bookshell/en/docs/Sre/中间件/Traefik',
                component: ComponentCreator('/bookshell/en/docs/Sre/中间件/Traefik', '027'),
                exact: true,
                sidebar: "SreMiddleSoft"
              },
              {
                path: '/bookshell/en/docs/Sre/中间件/YAPI',
                component: ComponentCreator('/bookshell/en/docs/Sre/中间件/YAPI', '7d2'),
                exact: true,
                sidebar: "SreMiddleSoft"
              },
              {
                path: '/bookshell/en/docs/Sre/中间件/zookeeper',
                component: ComponentCreator('/bookshell/en/docs/Sre/中间件/zookeeper', 'fd7'),
                exact: true,
                sidebar: "SreMiddleSoft"
              },
              {
                path: '/bookshell/en/docs/Sre/日常运维/clickhouse集群节点重新加入',
                component: ComponentCreator('/bookshell/en/docs/Sre/日常运维/clickhouse集群节点重新加入', 'cf2'),
                exact: true,
                sidebar: "SreOper"
              },
              {
                path: '/bookshell/en/docs/Sre/日常运维/conflunce安装',
                component: ComponentCreator('/bookshell/en/docs/Sre/日常运维/conflunce安装', '7fc'),
                exact: true,
                sidebar: "SreOper"
              },
              {
                path: '/bookshell/en/docs/Sre/日常运维/git操作',
                component: ComponentCreator('/bookshell/en/docs/Sre/日常运维/git操作', 'da1'),
                exact: true,
                sidebar: "SreOper"
              },
              {
                path: '/bookshell/en/docs/Sre/日常运维/mac办公协作',
                component: ComponentCreator('/bookshell/en/docs/Sre/日常运维/mac办公协作', '2ef'),
                exact: true,
                sidebar: "SreOper"
              },
              {
                path: '/bookshell/en/docs/Sre/日常运维/npm操作',
                component: ComponentCreator('/bookshell/en/docs/Sre/日常运维/npm操作', '3e0'),
                exact: true,
                sidebar: "SreOper"
              },
              {
                path: '/bookshell/en/docs/Sre/日常运维/operator',
                component: ComponentCreator('/bookshell/en/docs/Sre/日常运维/operator', '552'),
                exact: true,
                sidebar: "SreOper"
              },
              {
                path: '/bookshell/en/docs/Sre/日常运维/安全配置',
                component: ComponentCreator('/bookshell/en/docs/Sre/日常运维/安全配置', 'b8f'),
                exact: true,
                sidebar: "SreOper"
              },
              {
                path: '/bookshell/en/docs/Sre/日常运维/磁盘管理',
                component: ComponentCreator('/bookshell/en/docs/Sre/日常运维/磁盘管理', 'eb0'),
                exact: true,
                sidebar: "SreOper"
              },
              {
                path: '/bookshell/en/docs/Sre/日常运维/网络相关',
                component: ComponentCreator('/bookshell/en/docs/Sre/日常运维/网络相关', '890'),
                exact: true,
                sidebar: "SreOper"
              },
              {
                path: '/bookshell/en/docs/Sre/日常运维/脚本管理',
                component: ComponentCreator('/bookshell/en/docs/Sre/日常运维/脚本管理', 'ede'),
                exact: true,
                sidebar: "SreOper"
              },
              {
                path: '/bookshell/en/docs/Sre/日常运维/计算机网络软考',
                component: ComponentCreator('/bookshell/en/docs/Sre/日常运维/计算机网络软考', '451'),
                exact: true,
                sidebar: "SreOper"
              },
              {
                path: '/bookshell/en/docs/Sre/日常运维/镜像列表',
                component: ComponentCreator('/bookshell/en/docs/Sre/日常运维/镜像列表', 'bae'),
                exact: true,
                sidebar: "SreOper"
              },
              {
                path: '/bookshell/en/docs/Sre/面试题/golang面试题',
                component: ComponentCreator('/bookshell/en/docs/Sre/面试题/golang面试题', '3d9'),
                exact: true,
                sidebar: "SreMianshi"
              },
              {
                path: '/bookshell/en/docs/Sre/面试题/kubernetes面试题',
                component: ComponentCreator('/bookshell/en/docs/Sre/面试题/kubernetes面试题', '0d6'),
                exact: true,
                sidebar: "SreMianshi"
              },
              {
                path: '/bookshell/en/docs/Sre/面试题/prometheus部署文档输出',
                component: ComponentCreator('/bookshell/en/docs/Sre/面试题/prometheus部署文档输出', '648'),
                exact: true,
                sidebar: "SreMianshi"
              },
              {
                path: '/bookshell/en/docs/Sre/面试题/python',
                component: ComponentCreator('/bookshell/en/docs/Sre/面试题/python', '77e'),
                exact: true,
                sidebar: "SreMianshi"
              },
              {
                path: '/bookshell/en/docs/Sre/面试题/基础面试题',
                component: ComponentCreator('/bookshell/en/docs/Sre/面试题/基础面试题', '432'),
                exact: true,
                sidebar: "SreMianshi"
              },
              {
                path: '/bookshell/en/docs/Sre/面试题/容器技术',
                component: ComponentCreator('/bookshell/en/docs/Sre/面试题/容器技术', '7a6'),
                exact: true,
                sidebar: "SreMianshi"
              },
              {
                path: '/bookshell/en/docs/Sre/面试题/监控',
                component: ComponentCreator('/bookshell/en/docs/Sre/面试题/监控', '907'),
                exact: true,
                sidebar: "SreMianshi"
              },
              {
                path: '/bookshell/en/docs/Sre/面试题/缓存服务',
                component: ComponentCreator('/bookshell/en/docs/Sre/面试题/缓存服务', '924'),
                exact: true,
                sidebar: "SreMianshi"
              },
              {
                path: '/bookshell/en/docs/Treasure/Studytour/莱卡',
                component: ComponentCreator('/bookshell/en/docs/Treasure/Studytour/莱卡', '4e2'),
                exact: true,
                sidebar: "Studytour"
              },
              {
                path: '/bookshell/en/docs/Treasure/Wisdom/国学经典',
                component: ComponentCreator('/bookshell/en/docs/Treasure/Wisdom/国学经典', 'd85'),
                exact: true,
                sidebar: "Wisdom"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/bookshell/en/',
    component: ComponentCreator('/bookshell/en/', '81f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
