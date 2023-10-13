/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */ 
  SreOper: [
  
    {
      type: 'autogenerated',
      dirName: 'Sre/1-日常运维',
     // collapsed: false, //控制是否折叠或者打开

  },
], 


SreMiddleSoft: [
    {
        type: 'autogenerated',
        dirName: 'Sre/2-中间件',
        //collapsed: true,   //控制是否折叠或者打开
    },
], 


Kubernetes: [
  
    {
      type: 'autogenerated',
      dirName: 'Kubernetes',
     // collapsed: false, //控制是否折叠或者打开
  },
], 

PrometheusGrafana: [
{
    type: 'autogenerated',
    dirName: 'Prometheus/grafana',
   // collapsed: false, //控制是否折叠或者打开
},
], 

PrometheusServer: [
    {
    type: 'autogenerated',
    dirName: 'Prometheus/prometheus',
   // collapsed: false, //控制是否折叠或者打开
},
], 

PrometheusAlert: [
    {
    type: 'autogenerated',
    dirName: 'Prometheus/alertManager',
   // collapsed: false, //控制是否折叠或者打开
},
], 



DevOpsJenkins: [
  
    {
      type: 'autogenerated',
      dirName: 'DevOps/1-jenkins',
     // collapsed: false, //控制是否折叠或者打开
  },
//   {
//     type: 'category',
//     label: '基于ansible发布',
//    // collapsed: false, //控制是否折叠或者打开
//     items: [
//         {
//             type: 'autogenerated',
//             dirName: 'DevOps/1-jenkins/2-通过ansible实现服务发布', // Generate section automatically based on files
//         },
//     ],
// },  
],  

DevOpsGitOps: [
  
    {
      type: 'autogenerated',
      dirName: 'DevOps/2-gitOps',
     // collapsed: false, //控制是否折叠或者打开
  },
],  

DevOpsElk: [
  
    {
      type: 'autogenerated',
      dirName: 'DevOps/3-ELK',
     // collapsed: false, //控制是否折叠或者打开
  },
],  

DevOpsSkywalking: [
  
    {
      type: 'autogenerated',
      dirName: 'DevOps/4-skywalking',
     // collapsed: false, //控制是否折叠或者打开
  },
], 

GoalngJichu: [
  
    {
      type: 'autogenerated',
      dirName: 'Golang/golang基础',
     // collapsed: false, //控制是否折叠或者打开
  },
],  

GoalngJinjie: [
  
    {
      type: 'autogenerated',
      dirName: 'Golang/golang进阶',
     // collapsed: false, //控制是否折叠或者打开
  },
], 

GoalngOper: [
  
    {
      type: 'autogenerated',
      dirName: 'Golang/golang运维',
     // collapsed: false, //控制是否折叠或者打开
  },
], 
};

module.exports = sidebars;
