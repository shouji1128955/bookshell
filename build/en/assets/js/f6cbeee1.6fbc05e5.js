"use strict";(self.webpackChunkbookshell=self.webpackChunkbookshell||[]).push([[3836],{74641:n=>{n.exports=JSON.parse('{"blogPosts":[{"id":"/2024/4.npm\u64cd\u4f5c","metadata":{"permalink":"/en/blog/2024/4.npm\u64cd\u4f5c","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024/4.npm\u64cd\u4f5c.md","source":"@site/blog/2024/4.npm\u64cd\u4f5c.md","title":"npm\u5e38\u7528\u547d\u4ee4","description":"\u7b80\u4ecb","date":"2023-10-18T06:15:14.000Z","formattedDate":"October 18, 2023","tags":[],"readingTime":5.08,"hasTruncateMarker":true,"authors":[],"frontMatter":{},"nextItem":{"title":"config-docusaurus-v2","permalink":"/en/blog/config-docusaurus-v2"}},"content":"## \u7b80\u4ecb\\r\\n\\r\\n\x3c!--truncate--\x3e\\r\\nnpm\u662f\u8ddf\u968fnode\u4e00\u8d77\u5b89\u88c5\u7684\u5305\uff08\u6a21\u5757\uff09\u7ba1\u7406\u5668\u3002\u5e38\u89c1\u7684\u4f7f\u7528\u573a\u666f\u6709\u4ee5\u4e0b\u51e0\u79cd\uff1a\\r\\n\\r\\n* \u5141\u8bb8\u7528\u6237\u4ecenpm\u670d\u52a1\u5668\u4e0b\u8f7d\u522b\u4eba\u7f16\u5199\u7684\u7b2c\u4e09\u65b9\u5305\u5230\u672c\u5730\u4f7f\u7528\u3002\\r\\n* \u5141\u8bb8\u7528\u6237\u4ecenpm\u670d\u52a1\u5668\u4e0b\u8f7d\u5e76\u5b89\u88c5\u522b\u4eba\u7f16\u5199\u7684\u547d\u4ee4\u884c\u7a0b\u5e8f\u5230\u672c\u5730\u4f7f\u7528\u3002\\r\\n* \u5141\u8bb8\u7528\u6237\u5c06\u81ea\u5df1\u7f16\u5199\u7684\u5305\u6216\u547d\u4ee4\u884c\u7a0b\u5e8f\u4e0a\u4f20\u5230npm\u670d\u52a1\u5668\u4f9b\u522b\u4eba\u4f7f\u7528\u3002\\r\\n\\r\\n\x3c!-- more --\x3e\\r\\n\\r\\n\\r\\n## \u5e38\u7528\u547d\u4ee4\\r\\n\\r\\n#### \u68c0\u6d4b\u662f\u5426\u5b89\u88c5\u53ca\u7248\u672c\\r\\n\\r\\n```sh\\r\\nnpm -v # \u663e\u793a\u7248\u672c\u53f7\u8bf4\u660e\u5df2\u7ecf\u5b89\u88c5\u76f8\u5e94\u7684\u7248\u672c\\r\\n```\\r\\n\\r\\n#### \u751f\u6210package.json\u6587\u4ef6\\r\\n\\r\\n```sh\\r\\nnpm init\\r\\n```\\r\\n\\r\\n> package.json\u7528\u6765\u63cf\u8ff0\u9879\u76ee\u4e2d\u7528\u5230\u7684\u6a21\u5757\u548c\u5176\u4ed6\u4fe1\u606f\\r\\n\\r\\n#### \u5b89\u88c5\u6a21\u5757\\r\\n\\r\\n```sh\\r\\nnpm install # \u5b89\u88c5package.json\u5b9a\u4e49\u597d\u7684\u6a21\u5757\uff0c\u7b80\u5199 npm i\\r\\n\\r\\n# \u5b89\u88c5\u5305\u6307\u5b9a\u6a21\u5757\\r\\nnpm i <ModuleName>\\r\\n\\r\\n# \u5168\u5c40\u5b89\u88c5\\r\\nnpm i <ModuleName> -g\\r\\n\\r\\n# \u5b89\u88c5\u5305\u7684\u540c\u65f6\uff0c\u5c06\u4fe1\u606f\u5199\u5165\u5230package.json\u4e2d\u7684 dependencies \u914d\u7f6e\u4e2d\\r\\nnpm i <ModuleName> --save\\r\\n\\r\\n# \u5b89\u88c5\u5305\u7684\u540c\u65f6\uff0c\u5c06\u4fe1\u606f\u5199\u5165\u5230package.json\u4e2d\u7684 devDependencies \u914d\u7f6e\u4e2d\\r\\nnpm i <ModuleName> --save-dev\\r\\n\\r\\n# \u5b89\u88c5\u591a\u6a21\u5757\\r\\nnpm i <ModuleName1> <ModuleName2>\\r\\n\\r\\n# \u5b89\u88c5\u65b9\u5f0f\u53c2\u6570\uff1a\\r\\n-save # \u7b80\u5199-S\uff0c\u52a0\u5165\u5230\u751f\u4ea7\u4f9d\u8d56\u4e2d\\r\\n-save-dev # \u7b80\u5199-D\uff0c\u52a0\u5165\u5230\u5f00\u53d1\u4f9d\u8d56\u4e2d\\r\\n-g # \u5168\u5c40\u5b89\u88c5 \u5c06\u5b89\u88c5\u5305\u653e\u5728 /usr/local \u4e0b\u6216\u8005\u4f60 node \u7684\u5b89\u88c5\u76ee\u5f55\\r\\n```\\r\\n\\r\\n#### \u67e5\u770b\\r\\n\\r\\n```sh\\r\\n# \u67e5\u770b\u6240\u6709\u5168\u5c40\u5b89\u88c5\u7684\u5305\\r\\nnpm ls -g\\r\\n\\r\\n# \u67e5\u770b\u672c\u5730\u9879\u76ee\u4e2d\u5b89\u88c5\u7684\u5305\\r\\nnpm ls\\r\\n\\r\\n# \u67e5\u770b\u5305\u7684 package.json\u6587\u4ef6\\r\\nnpm view <ModuleName>\\r\\n\\r\\n# \u67e5\u770b\u5305\u7684\u4f9d\u8d56\u5173\u7cfb\\r\\nnpm view <ModuleName> dependencies\\r\\n\\r\\n# \u67e5\u770b\u5305\u7684\u6e90\u6587\u4ef6\u5730\u5740\\r\\nnpm view <ModuleName> repository.url\\r\\n\\r\\n# \u67e5\u770b\u5305\u6240\u4f9d\u8d56\u7684node\u7248\u672c\\r\\nnpm view <ModuleName> engines\\r\\n\\r\\n# \u67e5\u770b\u5e2e\u52a9\\r\\nnpm help\\r\\n```\\r\\n\\r\\n#### \u66f4\u65b0\u6a21\u5757\\r\\n\\r\\n```sh\\r\\n# \u66f4\u65b0\u672c\u5730\u6a21\u5757\\r\\nnpm update <ModuleName>\\r\\n\\r\\n# \u66f4\u65b0\u5168\u5c40\u6a21\u5757\\r\\nnpm update -g <ModuleName> # \u66f4\u65b0\u5168\u5c40\u8f6f\u4ef6\u5305\u3002\\r\\nnpm update -g # \u66f4\u65b0\u6240\u6709\u7684\u5168\u5c40\u8f6f\u4ef6\u5305\u3002\\r\\nnpm outdated -g --depth=0 # \u627e\u51fa\u9700\u8981\u66f4\u65b0\u7684\u5305\u3002\\r\\n```\\r\\n\\r\\n#### \u5378\u8f7d\u6a21\u5757\\r\\n\\r\\n```sh\\r\\n# \u5378\u8f7d\u672c\u5730\u6a21\u5757\\r\\nnpm uninstall <ModuleName>\\r\\n\\r\\n# \u5378\u8f7d\u5168\u5c40\u6a21\u5757\\r\\nnpm uninstall -g <ModuleName> # \u5378\u8f7d\u5168\u5c40\u8f6f\u4ef6\u5305\u3002\\r\\n```\\r\\n\\r\\n#### \u6e05\u7a7a\u7f13\u5b58\\r\\n\\r\\n```sh\\r\\n# \u6e05\u7a7anpm\u7f13\u5b58\\r\\nnpm cache clear\\r\\n```\\r\\n\\r\\n#### \u4f7f\u7528\u6dd8\u5b9d\u955c\u50cf\\r\\n\\r\\n```sh\\r\\n# \u4f7f\u7528\u6dd8\u5b9d\u955c\u50cf\\r\\nnpm install -g cnpm --registry=https://registry.npm.taobao.org\\r\\n```\\r\\n\\r\\n#### \u5176\u4ed6\\r\\n\\r\\n```sh\\r\\n# \u66f4\u6539\u5305\u5185\u5bb9\u540e\u8fdb\u884c\u91cd\u5efa\\r\\nnpm rebuild <ModuleName>\\r\\n\\r\\n# \u68c0\u67e5\u5305\u662f\u5426\u5df2\u7ecf\u8fc7\u65f6\uff0c\u6b64\u547d\u4ee4\u4f1a\u5217\u51fa\u6240\u6709\u5df2\u7ecf\u8fc7\u65f6\u7684\u5305\uff0c\u53ef\u4ee5\u53ca\u65f6\u8fdb\u884c\u5305\u7684\u66f4\u65b0\\r\\nnpm outdated\\r\\n\\r\\n# \u8bbf\u95eenpm\u7684json\u6587\u4ef6\uff0c\u6b64\u547d\u4ee4\u5c06\u4f1a\u6253\u5f00\u4e00\u4e2a\u7f51\u9875\\r\\nnpm help json\\r\\n\\r\\n# \u53d1\u5e03\u4e00\u4e2a\u5305\u7684\u65f6\u5019\uff0c\u9700\u8981\u68c0\u9a8c\u67d0\u4e2a\u5305\u540d\u662f\u5426\u5b58\u5728\\r\\nnpm search <ModuleName>\\r\\n\\r\\n# \u64a4\u9500\u81ea\u5df1\u53d1\u5e03\u8fc7\u7684\u67d0\u4e2a\u7248\u672c\u4ee3\u7801\\r\\nnpm unpublish <package> <version>\\r\\n```\\r\\n\\r\\n\\r\\n\\r\\n## \u4f7f\u7528\u6280\u5de7\\r\\n\\r\\n#### \u591a\u6b21\u5b89\u88c5\u4e0d\u6210\u529f\u5c1d\u8bd5\u5148\u6e05\u9664\u7f13\u5b58\\r\\n\\r\\n```sh\\r\\nnpm cache clean -f\\r\\n```\\r\\n\\r\\n\\r\\n\\r\\n#### \u67e5\u770b\u5df2\u5b89\u88c5\u7684\u4f9d\u8d56\u5305\u7248\u672c\u53f7\\r\\n\\r\\n```sh\\r\\nnpm ls <ModuleName>\\r\\n```\\r\\n\\r\\n> \u6ce8\u610f\uff1a\u7528\u6b64\u65b9\u6cd5\u624d\u80fd\u51c6\u786e\u7684\u77e5\u9053\u9879\u76ee\u4f7f\u7528\u7684\u7248\u672c\u53f7\uff0c\u67e5\u770bpackage.json\u65f6\uff0c\u6709\u201c^\\" \u7b26\u53f7\u8868\u793a\u5927\u4e8e\u6b64\u7248\u672c\\r\\n\\r\\n\\r\\n\\r\\n## npm\u53d1\u5e03\u5305\u6559\u7a0b\\r\\n\\r\\n[npm\u53d1\u5e03\u5305\u6559\u7a0b](https://segmentfault.com/a/1190000017461666)\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n## nrm\u7684\u4f5c\u7528\u4e0e\u4f7f\u7528\\r\\n\\r\\n#### nrm\u662f\u4ec0\u4e48\uff1f\\r\\n\\r\\nnrm(npm registry manager )\u662fnpm\u7684\u955c\u50cf\u6e90\u7ba1\u7406\u5de5\u5177\uff0c\u6709\u65f6\u5019\u56fd\u5916\u8d44\u6e90\u592a\u6162\uff0c\u4f7f\u7528\u8fd9\u4e2a\u5c31\u53ef\u4ee5\u5feb\u901f\u5730\u5728 npm \u6e90\u95f4\u5207\u6362\\r\\n\\r\\n\\r\\n\\r\\n#### nrm\u7684\u5b89\u88c5\\r\\n\\r\\n```sh\\r\\nnpm install -g nrm\\r\\n```\\r\\n\\r\\n\\r\\n\\r\\n#### nrm\u547d\u4ee4\\r\\n\\r\\n```sh\\r\\nnrm ls\u3000#\u67e5\u770b\u53ef\u7528\u7684\u6e90\uff08\u6709*\u53f7\u7684\u8868\u793a\u5f53\u524d\u6240\u4f7f\u7528\u7684\u6e90,\u4ee5\u4e0b<registry>\u8868\u793a\u6e90\u7684\u540d\u79f0\uff09\\r\\nnrm use <registry> # \u5c06npm\u4e0b\u8f7d\u6e90\u5207\u6362\u6210\u6307\u5b9a\u7684\u6e90\\r\\nnrm add <registry> <url> # \u6dfb\u52a0\u6e90\uff0curl\u4e3a\u6e90\u7684\u8def\u5f84\\r\\nnrm del <registry> # \u5220\u9664\u6e90\\r\\nnrm test <registry> # \u6d4b\u8bd5\u6e90\u7684\u54cd\u5e94\u65f6\u95f4\uff0c\u53ef\u4ee5\u4f5c\u4e3a\u4f7f\u7528\u54ea\u4e2a\u6e90\u7684\u53c2\u8003\\r\\n\\r\\nnrm help\u3000# \u67e5\u770bnrm\u5e2e\u52a9\\r\\nnrm home <registry>\u3000# \u8df3\u8f6c\u5230\u6307\u5b9a\u6e90\u7684\u5b98\u7f51\\r\\n```\\r\\n\\r\\n\\r\\n\\r\\n#### nrm\u4f7f\u7528\\r\\n\\r\\n\u5982\u679c\u5728\u4f60\u7684\u7f51\u7edc\u4e0d\u592a\u7406\u60f3\u6216\u8005\u53d7\u5230\u5176\u4ed6\u7f51\u7edc\u9650\u5236\u5bfc\u81f4\u4e0d\u80fd\u4f7f\u7528npm\u539f\u672c\u7684\u6e90\u8fdb\u884c\u4e0b\u8f7d\u65f6\uff0cnrm\u5c31\u975e\u5e38\u6709\u7528\u4e86\uff0c\u4f60\u53ea\u9700\u8981\uff1a\\r\\n\\r\\n```sh\\r\\nnrm ls # \u67e5\u770b\u53ef\u7528\u7684\u6e90\\r\\nnrm use <registry>\u3000# \u5207\u6362\u5230\u6307\u5b9a\u6e90\\r\\n```"},{"id":"config-docusaurus-v2","metadata":{"permalink":"/en/blog/config-docusaurus-v2","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023/10-18-config-docusaurus-v2.md","source":"@site/blog/2023/10-18-config-docusaurus-v2.md","title":"config-docusaurus-v2","description":"A short description of this page","date":"2023-10-18T00:00:00.000Z","formattedDate":"October 18, 2023","tags":[{"label":"action","permalink":"/en/blog/tags/action"},{"label":"docusaurus","permalink":"/en/blog/tags/docusaurus"}],"readingTime":3.985,"hasTruncateMarker":true,"authors":[{"name":"zhanglaiqiang","title":"liteshell.cn maintainer","url":"https://github.com/shouji1128955/bookshell","imageURL":"https://avatars.githubusercontent.com/u/49987752?v=4","key":"liteshell"}],"frontMatter":{"title":"config-docusaurus-v2","description":"A short description of this page","keywords":["docusaurus","describing","the main topics"],"authors":"liteshell","slug":"config-docusaurus-v2","tags":["action","docusaurus"]},"prevItem":{"title":"npm\u5e38\u7528\u547d\u4ee4","permalink":"/en/blog/2024/4.npm\u64cd\u4f5c"},"nextItem":{"title":"github\u7ed3\u5408actions\u5b9e\u73b0\u81ea\u52a8\u5316\u90e8\u7f72","permalink":"/en/blog/github\u7ed3\u5408actions\u5b9e\u73b0\u81ea\u52a8\u5316\u90e8\u7f72"}},"content":"\x3c!--truncate--\x3e\\r\\n\\r\\n\u7b80\u5355\u8bb0\u5f55\u4e00\u4e0b\u5982\u4f55\u5b89\u88c5\u548c\u4f7f\u7528 Docusaurus \u6765\u6784\u5efa\u81ea\u5df1\u7684\u535a\u5ba2\u548c\u6587\u6863\u7ad9\u70b9\u3002\\r\\n\\r\\n> Docusaurus \u7684\u5b98\u65b9\u6587\u6863 https://docusaurus.io/zh-CN/docs\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n## \u751f\u6210\u65b0\u7ad9\u70b9\\r\\n\\r\\n\u4f7f\u7528 `classic` \u6a21\u677f\u751f\u6210\u4e00\u4e2a\u65b0\u7684 Docusaurus \u7ad9\u70b9 `my-website`\u3002\\r\\n\\r\\n\u8fd0\u884c\u547d\u4ee4\u540e\uff0c\u7ecf\u5178\u6a21\u677f\u5c06\u81ea\u52a8\u6dfb\u52a0\u5230\u60a8\u7684\u9879\u76ee\u4e2d\\r\\n\\r\\n```bash npm2yarn\\r\\nnpm init docusaurus@latest my-website classic\\r\\n```\\r\\n\\r\\n\u8fdb\u5165\u751f\u6210\u7684\u7ad9\u70b9\u76ee\u5f55\\r\\n\\r\\n```bash\\r\\ncd my-website\\r\\n```\\r\\n\\r\\n\u542f\u52a8\u5e76\u8fd0\u884c\u5f00\u53d1\u670d\u52a1\u5668:\\r\\n\\r\\n```bash npm2yarn\\r\\nnpm run start\\r\\n```\\r\\n\\r\\n\u6253\u5f00\u9875\u9762 `docs/intro.md` \u5e76\u7f16\u8f91\u4e00\u4e9b\u884c,\u53ef\u4ee5\u770b\u5230\u8be5\u7ad9\u70b9\u4f1a\u81ea\u52a8\u91cd\u65b0\u52a0\u8f7d\u5e76\u663e\u793a\u6700\u65b0\u7684\u66f4\u6539\u3002\\r\\n\\r\\n## \u914d\u7f6e\u7ad9\u70b9\\r\\n\\r\\n\\r\\n\u57fa\u7840\u914d\u7f6e\\r\\n\\r\\n```js title=\\"docusaurus.config.js\\"\\r\\nconst config = {\\r\\n  title: \\"Inhere\'s Site\\",\\r\\n  tagline: \\"Inhere\'s site, blogs and project docs\\",\\r\\n  url: \'https://inhere.github.io\',\\r\\n  baseUrl: \'/\',\\r\\n  trailingSlash: false,\\r\\n\\r\\n  organizationName: \'inhere\', // Usually your GitHub org/user name.\\r\\n  projectName: \'inhere.github.io\', // Usually your repo name.\\r\\n  deploymentBranch: \'gh-pages\',\\r\\n\\r\\n  // ...\\r\\n}\\r\\n```\\r\\n\\r\\n\u6587\u6863\u548c\u535a\u5ba2\u914d\u7f6e\uff1a\\r\\n\\r\\n```js title=\\"docusaurus.config.js\\"\\r\\n  presets: [\\r\\n    [\\r\\n      \'classic\',\\r\\n      /** @type {import(\'@docusaurus/preset-classic\').Options} */\\r\\n      ({\\r\\n        docs: {\\r\\n          sidebarPath: require.resolve(\'./sidebars.js\'),\\r\\n          // Please change this to your repo.\\r\\n          // Remove this to remove the \\"edit this page\\" links.\\r\\n          editUrl: \'https://github.com/inhere/inhere.github.io/tree/main/\',\\r\\n        },\\r\\n        blog: {\\r\\n          showReadingTime: true,\\r\\n          postsPerPage: 6,\\r\\n          // routeBasePath: \'/\', // \u628a\u535a\u5ba2\u653e\u5728\u7ad9\u70b9\u6839\u90e8\\r\\n          blogSidebarCount: 6, // \u9ed8\u8ba4 5\\r\\n          // Remove this to remove the \\"edit this page\\" links.\\r\\n          editUrl: \'https://github.com/inhere/inhere.github.io/tree/main/\',\\r\\n        },\\r\\n      }),\\r\\n    ],\\r\\n  ],\\r\\n```\\r\\n\\r\\n:::info\\r\\n\\r\\n\u5b8c\u6574\u914d\u7f6e\u8bf7\u770b https://github.com/inhere/inhere.github.io/blob/main/docusaurus.config.js\\r\\n\\r\\n:::\\r\\n\\r\\n\\r\\n### \u914d\u7f6e\u591a\u8bed\u8a00\\r\\n\\r\\n```js title=\\"docusaurus.config.js\\"\\r\\ni18n: {\\r\\n    defaultLocale: \'zh-CN\',\\r\\n    locales: [ \\"zh-CN\\", \'en\'],\\r\\n    localeConfigs: {\\r\\n      en: {\\r\\n        htmlLang: \'en-GB\',\\r\\n      },\\r\\n    },\\r\\n  },\\r\\n```\\r\\n\\r\\n\\r\\n\u8fd9\u91cc\u6211\u662f\u4ee5 `zh-CN` \u4e3a\u4e3b\uff0c\u751f\u6210 `en` \u7ffb\u8bd1\u6587\u6863\\r\\n\\r\\n```bash\\r\\nnpm run write-translations -- --locale en\\r\\n```\\r\\n\\r\\n\\r\\n\\r\\n## GitHab Pages\\r\\n\\r\\n\u53c2\u8003\u5b98\u65b9\u6587\u6863\u6dfb\u52a0 GitHab Actions \u5982\u4e0b\u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u8fd9\u6837\u5728\u6bcf\u6b21\u63a8\u9001\u5230\u4ed3\u5e93\u65f6\u5c31\u4f1a\u89e6\u53d1\u81ea\u52a8\u6784\u5efa\uff0c\\r\\n\u5e76\u4e14\u4f1a\u81ea\u52a8\u90e8\u7f72\u6784\u5efa\u7684\u9759\u6001\u6587\u4ef6\u5230 `gh-pages` \u5206\u652f\u3002\\r\\n\\r\\n```text\\r\\n.github/workflows/deploy.yml\\r\\n.github/workflows/test-deploy.yml\\r\\n```\\r\\n\\r\\n## \u6dfb\u52a0\u5e38\u7528\u63d2\u4ef6\\r\\n\\r\\n\\r\\n### npm2yarn\\r\\n\\r\\n\u53ef\u4ee5\u540c\u65f6\u663e\u793a npm \u548c Yarn \u7684 CLI \u547d\u4ee4\u3002\\r\\n\u7136\u540e\u8981\u4f7f\u7528\u5b83\uff0c\u53ea\u9700\u5728\u4ee3\u7801\u5757\u4e2d\u6dfb\u52a0 `npm2yarn` \u952e\uff1a\\r\\n\\r\\n\\r\\n```bash npm2yarn\\r\\nnpm install @docusaurus/remark-plugin-npm2yarn\\r\\n```\\r\\n\\r\\n\u914d\u7f6e\u63d2\u4ef6\uff1a\\r\\n\\r\\n```js title=\\"docusaurus.config.js\\"\\r\\nmodule.exports = {\\r\\n  // ...\\r\\n  presets: [\\r\\n    [\\r\\n      \'@docusaurus/preset-classic\',\\r\\n      {\\r\\n        docs: {\\r\\n          // highlight-start\\r\\n          remarkPlugins: [\\r\\n            [require(\'@docusaurus/remark-plugin-npm2yarn\'), {sync: true}],\\r\\n          ],\\r\\n          // highlight-end\\r\\n        },\\r\\n        pages: {\\r\\n          // highlight-next-line\\r\\n          remarkPlugins: [require(\'@docusaurus/remark-plugin-npm2yarn\')],\\r\\n        },\\r\\n        blog: {\\r\\n          // ...\\r\\n        },\\r\\n      },\\r\\n    ],\\r\\n  ],\\r\\n};\\r\\n```\\r\\n\\r\\n### docusaurus-search-local\\r\\n\\r\\n\\r\\n\u7528\u4e8e Docusaurus v2 \u7684\u652f\u6301\u79bb\u7ebf\u672c\u5730\u641c\u7d22\u7684\u63d2\u4ef6\\r\\n\\r\\n> \u63d2\u4ef6\u4ed3\u5e93 https://github.com/easyops-cn/docusaurus-search-local\\r\\n\\r\\n\u5b89\u88c5\u63d2\u4ef6\uff1a\\r\\n\\r\\n```bash npm2yarn\\r\\nnpm install --save @easyops-cn/docusaurus-search-local\\r\\n```\\r\\n\\r\\n\u914d\u7f6e\u63d2\u4ef6\uff1a\\r\\n\\r\\n```js title=\\"docusaurus.config.js\\"\\r\\nmodule.exports = {\\r\\n  // ... Your other configurations.\\r\\n  themes: [\\r\\n    // ... Your other themes.\\r\\n    [\\r\\n      // highlight-start\\r\\n      require.resolve(\\"@easyops-cn/docusaurus-search-local\\"),\\r\\n      {\\r\\n        // ... Your options.\\r\\n        // `hashed` is recommended as long-term-cache of index file is possible.\\r\\n        hashed: true,\\r\\n        // For Docs using Chinese, The is recommended to set to:\\r\\n        language: [\\"en\\", \\"zh\\"],\\r\\n      },\\r\\n      // highlight-end\\r\\n    ],\\r\\n  ],\\r\\n};\\r\\n```\\r\\n\\r\\n\u7c7b\u4f3c\u63d2\u4ef6\uff1a\\r\\n\\r\\n- https://github.com/praveenn77/docusaurus-lunr-search\\r\\n- https://github.com/cmfcmf/docusaurus-search-local\\r\\n\\r\\n\\r\\n### openapi-docs\\r\\n\\r\\n> GitHub https://github.com/PaloAltoNetworks/docusaurus-openapi-docs\\r\\n\\r\\nInstallation\\r\\n\\r\\nPlugin:\\r\\n\\r\\n```bash\\r\\nyarn add docusaurus-plugin-openapi-docs\\r\\n```\\r\\n\\r\\nTheme:\\r\\n\\r\\n```bash\\r\\nyarn add docusaurus-theme-openapi-docs\\r\\n```\\r\\n\\r\\n## \u4e00\u4e9b\u4f7f\u7528\u8bf4\u660e\\r\\n\\r\\n\u4e00\u4e9b\u6709\u7528\u7684\u4f7f\u7528\u8bf4\u660e\\r\\n\\r\\n### \u5f3a\u8c03\u63d0\u793a\\r\\n\\r\\n```markdown\\r\\n:::note\\r\\n\\r\\n\u4e00\u4e9b\u5305\u542b _Markdown_ `\u8bed\u6cd5` \u7684 **\u5185\u5bb9**\u3002\\r\\n\\r\\n:::\\r\\n\\r\\n:::tip\\r\\n\\r\\n\u4e00\u4e9b\u5305\u542b _Markdown_ `\u8bed\u6cd5` \u7684 **\u5185\u5bb9**\u3002\\r\\n\\r\\n:::\\r\\n\\r\\n:::info\\r\\n\\r\\n\u4e00\u4e9b\u5305\u542b _Markdown_ `\u8bed\u6cd5` \u7684 **\u5185\u5bb9**\u3002\\r\\n\\r\\n:::\\r\\n\\r\\n:::caution\\r\\n\\r\\n\u4e00\u4e9b\u5305\u542b _Markdown_ `\u8bed\u6cd5` \u7684 **\u5185\u5bb9**\u3002\\r\\n\\r\\n:::\\r\\n\\r\\n:::danger\\r\\n\\r\\n\u4e00\u4e9b\u5305\u542b _Markdown_ `\u8bed\u6cd5` \u7684 **\u5185\u5bb9**\u3002\\r\\n\\r\\n:::\\r\\n```\\r\\n\\r\\n\u6548\u679c\u5982\u4e0b\uff1a\\r\\n\\r\\n\\r\\n:::info\\r\\n\\r\\n\u4e00\u4e9b\u5305\u542b _Markdown_ `\u8bed\u6cd5` \u7684 **\u5185\u5bb9**\u3002\\r\\n\\r\\n:::\\r\\n\\r\\n:::caution\\r\\n\\r\\n\u4e00\u4e9b\u5305\u542b _Markdown_ `\u8bed\u6cd5` \u7684 **\u5185\u5bb9**\u3002\\r\\n\\r\\n:::\\r\\n\\r\\n\\r\\n### \u4ee3\u7801\u884c\u9ad8\u4eae\\r\\n\\r\\n\u4f60\u53ef\u4ee5\u7528 `highlight-next-line`\u3001`highlight-start`\u3001`highlight-end` \u7b49\u6ce8\u91ca\u6765\u9009\u62e9\u8981\u9ad8\u4eae\u7684\u884c\u3002\\r\\n\\r\\n\u6548\u679c\u5982\u4e0b\uff1a\\r\\n\\r\\n```js\\r\\nfunction HighlightSomeText(highlight) {\\r\\n  if (highlight) {\\r\\n    // highlight-next-line\\r\\n    return \'\u8fd9\u884c\u88ab\u9ad8\u4eae\u4e86\uff01\';\\r\\n  }\\r\\n\\r\\n  return \'\u8fd9\u91cc\u4e0d\u4f1a\';\\r\\n}\\r\\n\\r\\nfunction HighlightMoreText(highlight) {\\r\\n  // highlight-start\\r\\n  if (highlight) {\\r\\n    return \'\u8fd9\u5757\u88ab\u9ad8\u4eae\u4e86\uff01\';\\r\\n  }\\r\\n  // highlight-end\\r\\n\\r\\n  return \'\u8fd9\u91cc\u4e0d\u4f1a\';\\r\\n}\\r\\n```\\r\\n\\r\\n> \u539f\u6587\u6863 https://docusaurus.io/zh-CN/docs/markdown-features/code-blocks#line-highlighting"},{"id":"github\u7ed3\u5408actions\u5b9e\u73b0\u81ea\u52a8\u5316\u90e8\u7f72","metadata":{"permalink":"/en/blog/github\u7ed3\u5408actions\u5b9e\u73b0\u81ea\u52a8\u5316\u90e8\u7f72","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023/10-13-github\u7ed3\u5408actions\u5b9e\u73b0\u81ea\u52a8\u5316\u90e8\u7f72.md","source":"@site/blog/2023/10-13-github\u7ed3\u5408actions\u5b9e\u73b0\u81ea\u52a8\u5316\u90e8\u7f72.md","title":"github\u7ed3\u5408actions\u5b9e\u73b0\u81ea\u52a8\u5316\u90e8\u7f72","description":"A short description of this page","date":"2023-10-13T00:00:00.000Z","formattedDate":"October 13, 2023","tags":[{"label":"action","permalink":"/en/blog/tags/action"},{"label":"docusaurus","permalink":"/en/blog/tags/docusaurus"}],"readingTime":6.57,"hasTruncateMarker":true,"authors":[{"name":"zhanglaiqiang","title":"liteshell.cn maintainer","url":"https://github.com/shouji1128955/bookshell","imageURL":"https://avatars.githubusercontent.com/u/49987752?v=4","key":"liteshell"}],"frontMatter":{"title":"github\u7ed3\u5408actions\u5b9e\u73b0\u81ea\u52a8\u5316\u90e8\u7f72","description":"A short description of this page","keywords":["docusaurus","describing","the main topics"],"authors":"liteshell","slug":"github\u7ed3\u5408actions\u5b9e\u73b0\u81ea\u52a8\u5316\u90e8\u7f72","tags":["action","docusaurus"]},"prevItem":{"title":"config-docusaurus-v2","permalink":"/en/blog/config-docusaurus-v2"}},"content":"\x3c!--truncate--\x3e\\r\\n\\r\\n##  \u6982\u8ff0\\r\\n\\r\\n  \u7b14\u8005\u4e4b\u524d\u4e00\u76f4\u5728\u4f7f\u7528wordpress\u8bb0\u5f55\u81ea\u5df1\u5de5\u4f5c\u4e2d\u7684\u70b9\u70b9\u6ef4\u6ef4\uff0c\u5206\u4eab\u81ea\u5df1\u7684\u6240\u611f\u6240\u89e6\uff0c\u4f46\u662f\u968f\u7740\u65e5\u79ef\u6708\u7d2f\uff0c\u53d1\u73b0\u6548\u7387\u5f88\u4f4e\uff0c\u5bf9\u4e8e\u7ba1\u7406\u81ea\u5df1\u7684\u7b14\u8bb0\u975e\u5e38\u4e0d\u65b9\u4fbf\u3002\u56e0\u4e3a\u6211\u4eec\u6709\u65f6\u5019\u90fd\u662f\u591a\u79cd\u573a\u666f\uff0c\u6bd4\u5982\uff0c\u6211\u4eec\u5de5\u4f5c\u4f7f\u7528markdown\u6765\u5199\u4f5c\uff0c\u4f46\u662f\u5199\u5b8c\u4e4b\u540e\u9700\u8981\u540c\u6b65\u5230wordpress,\u8fd9\u4e2a\u9700\u8981\u82b1\u8d39\u5f88\u591a\u7684\u65f6\u95f4\u3002\u7279\u6b64\uff0c\u7b14\u8005\u901a\u8fc7\u7f51\u53cb\u4ecb\u7ecd\u53d1\u73b0facebook\u65d7\u4e0b\u7684docusaurus\u975e\u5e38\u4e0d\u9519\u3002\u56e0\u4e3a\u5b83\u53ef\u4ee5\u5b9e\u73b0\u901a\u8fc7markdown\u6765\u5199\u4f5c\uff0c\u7136\u540e\u4e00\u952epush\u5230github\u8fdb\u884c\u9879\u76ee\u4fdd\u5b58\uff0c\u7136\u540e\u901a\u8fc7github\u7684action\u6765\u5b9e\u73b0\u4e00\u952e\u90e8\u7f72\u5230\u591a\u79cd\u573a\u666f,\u5982\u4e0b\u56fe\u3002\\r\\n \\r\\n![Example banner](./images/1.png)\\r\\n\\r\\n\\r\\n\u5f53\u7136\uff0c\u4e5f\u53ef\u4ee5\u90e8\u7f72\u5230\u81ea\u5df1\u7684\u670d\u52a1\u5668\u3002\\r\\n\u7531\u4e8e\u7b14\u8005\u81ea\u5df1\u6d4b\u8bd5\u540e\uff0c\u5982\u679c\u90e8\u7f72\u5230github\u4e2d\u7684page\u4e2d\uff0c\u7531\u4e8e\u7f51\u7edc\u539f\u56e0\uff0c\u8bbf\u95ee\u901f\u5ea6\u5f88\u6162\uff0c\u5c24\u5176\u52a0\u8f7d\u56fe\u7247\uff0c\u5982\u679c\u81ea\u5df1\u4e70\u4e86\u4e91\u670d\u52a1\u5668\uff0c\u5f53\u7136\u53ef\u4ee5\u90e8\u7f72\u5230\u81ea\u5df1\u7684\u4e91\u670d\u52a1\u5668\u4e2d\uff0c\u63a5\u4e0b\u6765\uff0c\u6211\u5c31\u662f\u4f7f\u7528\u8fd9\u79cd\u65b9\u5f0f\u6765\u90e8\u7f72\u81ea\u5df1docusaurus\u3002\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n:::tip\\r\\n\\r\\nSome **\u4e91\u670d\u52a1\u5668\u8d2d\u4e70\u65b9\u5f0f---\x3e  \u63a8\u8350\u8d2d\u4e70\u963f\u91cc\u4e91\uff0c\u817e\u8baf\u4e91\u7684\u8f7b\u91cf\u7ea7\u670d\u52a1\u5668\uff0c\u8d39\u7528\u6bd4\u8f83\u4f4e\u3002** \\r\\n\\r\\n:::\\r\\n\\r\\n\\r\\n## 1\u3001\u521b\u5efaaction\\r\\n\\r\\n\u4e0b\u9762\u8ddf\u7740\u6211\u4e00\u6b65\u4e00\u6b65\u64cd\u4f5c\u5982\u4f55\u5b9e\u73b0\u90e8\u7f72\uff0c\u5e9f\u8bdd\u4e0d\u591a\u8bf4\uff0c\u76f4\u63a5\u4e0a\u83dc\u3002\\r\\n\\r\\n\u9996\u5148\u5728\u4ed3\u5e93\u7684\u6839\u76ee\u5f55\u4e0b\uff0c\u521b\u5efa .github/workflows/main.yml \u6587\u4ef6\uff0c\u8fd9\u5c31\u662f GitHub Actions \u529f\u80fd\u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u7528\u4e8e\u544a\u8bc9 GitHub \u8981\u505a\u54ea\u4e9b\u4e8b\u60c5\uff0c\u5199\u5165\u4ee5\u4e0b\u5185\u5bb9\\r\\n\\r\\n### 1.1 \u521b\u5efaaction\u6587\u4ef6\\r\\n\\r\\n\\r\\n```shell\\r\\n.github/workflows/main.yml\\r\\n\\r\\nname: Deploy GitHub Pages\\r\\n\\r\\n# \u89e6\u53d1\u6761\u4ef6\uff1a\u5728 push \u5230 master \u5206\u652f\u540e\\r\\non:\\r\\n  push:\\r\\n    branches:\\r\\n      - main\\r\\n\\r\\n# \u4efb\u52a1\\r\\njobs:\\r\\n  build-and-deploy:\\r\\n    # \u670d\u52a1\u5668\u73af\u5883\uff1a\u6700\u65b0\u7248 Ubuntu\\r\\n    runs-on: ubuntu-latest\\r\\n    steps:\\r\\n\\r\\n      # 1\u3001\u62c9\u53d6\u4ee3\u7801\\r\\n      - name: Checkout\\r\\n        uses: actions/checkout@v2\\r\\n        with:\\r\\n          persist-credentials: false\\r\\n\\r\\n      # 2\u3001\u751f\u6210\u9759\u6001\u6587\u4ef6\\r\\n      - name: Build\\r\\n        run: |\\r\\n          npm install\\r\\n          npm run build\\r\\n                    \\r\\n      # \u6267\u884c ls -l \u547d\u4ee4\\r\\n      - name: List files\\r\\n        run: ls -l  && pwd\\r\\n\\r\\n      # 3\u3001\u90e8\u7f72\u5230 somenzz.cn \u670d\u52a1\u5668\\r\\n      - name: rsync deployments\\r\\n        uses: burnett01/rsync-deployments@4.1\\r\\n        with:\\r\\n          # \u8fd9\u91cc\u662f rsync \u7684\u53c2\u6570 switches: -avzh --delete --exclude=\\"\\" --include=\\"\\" --filter=\\"\\"\\r\\n          switches: -avzh  --delete\\r\\n          path: ./build/\\r\\n          remote_path: /apps/liteshell/\\r\\n          remote_host: xxx.abc.com\\r\\n          remote_port: xxxx\\r\\n          remote_user: root\\r\\n          remote_key: ${{ secrets.MY_UBUNTU_RSA_PRIVATE_KEY }}\\r\\n```\\r\\n\\r\\n### 1.2 \u521b\u5efasecret\u79c1\u94a5\u6587\u4ef6\\r\\n\\r\\n\u521b\u5efa\u79c1\u94a5\u6587\u4ef6\\r\\n\\r\\n\u8f93\u5165 ssh-keygen \u53ea\u6709\u4e00\u8def\u56de\u8f66\\r\\n```shell\\r\\n[root@110 ~]# ssh-keygen \\r\\nGenerating public/private rsa key pair.\\r\\nEnter file in which to save the key (/root/.ssh/id_rsa): \\r\\n/root/.ssh/id_rsa already exists.\\r\\nOverwrite (y/n)? y\\r\\nEnter passphrase (empty for no passphrase): \\r\\nEnter same passphrase again: \\r\\nYour identification has been saved in /root/.ssh/id_rsa.\\r\\nYour public key has been saved in /root/.ssh/id_rsa.pub.\\r\\nThe key fingerprint is:\\r\\nSHA256:ldbpGCcTXoR3ETFCIGM15FFRzpFmkXTOECtgg0VOtgg root@110\\r\\nThe key\'s randomart image is:\\r\\n+---[RSA 2048]----+\\r\\n|      E +*/*B+%O.|\\r\\n|       o.@.@.=*O |\\r\\n|        . %.=++ o|\\r\\n|         o B .   |\\r\\n|        S . .    |\\r\\n|                 |\\r\\n|                 |\\r\\n|                 |\\r\\n|                 |\\r\\n+----[SHA256]-----+\\r\\n[root@110 ~]# \\r\\n\\r\\n```\\r\\n:::danger\\r\\n\\r\\nSome **\u516c\u94a5\u548c\u79c1\u94a5\u5fc5\u987b\u6210\u5bf9\uff0c\u5fc5\u987b\u4fdd\u5b58\u597d\u516c\u94a5\u548c\u79c1\u94a5\uff0c\u516c\u94a5\u662f\u9700\u8981\u653e\u5230\u4e91\u670d\u52a1\u5668\u4e2d\uff0c\u79c1\u94a5\u662f\u9700\u8981\u653e\u5728github\u7684secret\u4e2d\uff0c\u5426\u5219\u4f1a\u51fa\u73b0\u767b\u5f55\u4e0d\u4e86\u7684\u60c5\u51b5**\\r\\n\\r\\n:::\\r\\n\\r\\n\u7136\u540e\u53d6\u51fa\u516c\u94a5\\r\\n\\r\\n```shell\\r\\n[root@110 ~]# cat /root/.ssh/id_rsa.pub  \\r\\nssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC2/QQTQyV0YFwbs9wTwJE9S6telGKtL9eTJVPluDQX4vEZq7u72xGLtrmug1Ax9Nxe53tOvIT8y5c5CNydBQssmrSIg57gy8L0Bnk1+J78wGKAawz0xz6ifTGET3XkAlvCesxBs/WkpVuQXcploG3jXwZJdKct7Nz8Y28Rbx0Re+Lgd+zEbqLiWUijdsjFab8mUg9k+5o2QTBU8YZQKyEwQ2etzjuE6mlh+EXepSbendVV4mNFqV/6Iuyy8ppyHkq/6MkPwewRLxm1h0w410YWWYrNJui2disx060PRYYmSAvM3sgfotgZg0wXHtART+v/VB/rmvMQW7qT/ShrEyF7 root@110\\r\\n```\\r\\n\\r\\n\\r\\n### 1.3\u5b9e\u73b0\u5bf9\u516c\u94a5\u4e0a\u4f20\u5230\u4e91\u670d\u52a1\u5668\\r\\n\\r\\n\\r\\n\u5bf9\u4e8e\u62ff\u51fa\u6765\u7684\u516c\u94a5\u5b9e\u73b0\u5728\u670d\u52a1\u5668\u6388\u6743(\u9700\u8981\u90e8\u7f72\u7684\u4e91\u670d\u52a1\u5668)\\r\\n\\r\\n1. \u767b\u5f55\u4e91\u670d\u52a1\u5668\uff0c\u521b\u5efa\u5982\u4e0b\u6587\u4ef6\\r\\n\\r\\n```shell\\r\\ntouch /root/.ssh/authorized_keys\\r\\n\\r\\n\u7136\u540e\u628a\u4e0a\u9762\u7684\u516c\u94a5\u653e\u5165\u5230\u4e0b/root/.ssh/authorized_keys\u6587\u4ef6\u4e2d\uff0c\u4fdd\u5b58\u5373\u53ef\\r\\n```\\r\\n\\r\\n2. \u65b9\u5f0f2 \\r\\n```shell\\r\\nssh-copy-id -i -P xxxx root@xxx.xx.xx.xx\\r\\n```\\r\\n\\r\\n\\r\\n\\r\\n## 2\u3001github\u914d\u7f6e\u79c1\u94a5\\r\\n\\r\\n### 2.1\u3001\u521b\u5efassh\u79c1\u94a5\u73af\u5883\u53d8\u91cf\\r\\nMY_UBUNTU_RSA_PRIVATE_KEY\uff1a SSH\u79c1\u94a5\u6587\u4ef6\u5185\u5bb9\\r\\n\\r\\n```shell\\r\\n          path: ./build/\\r\\n          remote_path: /apps/liteshell/\\r\\n          remote_host: xxx.abc.com\\r\\n          remote_port: xxxx\\r\\n          remote_user: root\\r\\n          remote_key: ${{ secrets.MY_UBUNTU_RSA_PRIVATE_KEY }}\\r\\n```\\r\\n\\r\\n\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0cMY_UBUNTU_RSA_PRIVATE_KEY\u662f\u670d\u52a1\u5668\u7684s\u79c1\u94a5\u6587\u4ef6\u3002\u90a3\u5177\u4f53\u7684\u521b\u5efa\u65b9\u5f0f\u5982\u4e0b\\r\\n\\r\\n\\r\\n![Example banner](./images/2.png)\\r\\n\\r\\n\u7136\u540e\u6309\u7167\u4e0b\u9762\u7684\u65b9\u5f0f\u8fdb\u884c\u4fee\u6539\u5373\u53ef\\r\\n\\r\\n\\r\\n![Example banner](./images/3.png)\\r\\n\\r\\n\\r\\n\u7136\u540e\u751f\u6210MY_UBUNTU_RSA_PRIVATE_KEY\u73af\u5883\u53d8\u91cf\\r\\n\\r\\n\\r\\n\\r\\n##  3\u3001\u5b9e\u73b0\u90e8\u7f72\\r\\n\\r\\n### 3.1\u3001\u521b\u5efa\u90e8\u7f72\u76ee\u5f55\\r\\n\\r\\n\u767b\u5f55\u4e91\u670d\u52a1\u5668\u521b\u5efa\u9759\u6001\u7ad9\u70b9\\r\\n```shell\\r\\nmkdir -p /apps/liteshell/\\r\\nmkdir -p /var/log/liteshell/\\r\\n\\r\\ndocker run -it -d  -p 28080:80  \\\\\\r\\n--name zlq-nginx-liteshell  -m 400M --memory-reservation 200M  \\\\\\r\\n--cpus=0.8 -v /apps/liteshell/:/usr/share/nginx/html/ \\\\\\r\\n-v /var/log/liteshell/:/var/log/nginx/ \\\\\\r\\n--restart=always  nginx\\r\\n```\\r\\n\\r\\n### 3.2\u3001\u63d0\u4ea4\u4ee3\u7801\\r\\n\\r\\n```shell\\r\\n$ git add --all\\r\\n$ git commit -m \\"add article\\"\\r\\n$ git push\\r\\n```\\r\\n \u7136\u540epush\u5230\u4ed3\u5e93\\r\\n \u89c2\u5bdfaction\u53d8\u5316\\r\\n\\r\\n### 3.3\u3001\u67e5\u770bactiong\u6784\u5efa\u8fc7\u7a0b\\r\\n![Example banner](./images/4.png)\\r\\n\\r\\n\\r\\n\\r\\n## \u6700\u540e\u7684\u8bdd\\r\\n\\r\\nGitHub \u7684 Actions \u9664\u4e86\u652f\u6301 push \u89e6\u53d1\uff0c\u4e5f\u652f\u6301 schedule \u89e6\u53d1\uff0c\u8fd9\u5c31\u53ef\u4ee5\u73a9\u51fa\u5f88\u591a\u82b1\u6837\u4e86\uff0c\u6bd4\u5982\u4f60\u53ef\u4ee5\u5728\u4ed3\u5e93\u4e2d\u5199\u4e00\u4e2a\u811a\u672c\uff0c\u7136\u540e\u7f16\u5199 workflow \u8ba9 GitHub \u6bcf\u5929\u5b9a\u65f6\u6267\u884c\uff0c\u76f8\u5f53\u4e8e\u514d\u8d39\u83b7\u5f97\u4e86\u670d\u52a1\u5668\u7684\u8ba1\u7b97\u8d44\u6e90\uff0c\u53ef\u4ee5\u53c2\u8003\u962e\u4e00\u5cf0\u8001\u5e08\u7684\u6587\u7ae0GitHub Actions \u6559\u7a0b\uff1a\u5b9a\u65f6\u53d1\u9001\u5929\u6c14\u90ae\u4ef6 (opens new window), \u5bf9\u4e8e\u6ca1\u6709\u670d\u52a1\u5668\u8dd1\u5b9a\u65f6\u4efb\u52a1\u7684\u4eba\u6765\u8bf4\u771f\u7684\u662f\u4e00\u5927\u798f\u5229\u3002\\r\\n\\r\\n\u672c\u6587\u8bb2\u8ff0\u4e86\u5982\u4f55\u7f16\u5199 workflow\uff0c\u8ba9 GitHub Actions \u81ea\u52a8\u5316\u90e8\u7f72\u9759\u6001\u535a\u5ba2\uff0c\u53ef\u4ee5\u8ba9\u7a0b\u5e8f\u5458\u4e13\u5fc3\u7684\u5199\u535a\u5ba2\uff0c\u65e0\u9700\u5904\u7406\u91cd\u590d\u7684\u90e8\u7f72\u64cd\u4f5c\uff0c\u63d0\u5347\u5199\u4f5c\u6548\u7387\u3002\u5728\u8fd9\u91cc\u629b\u7816\u5f15\u7389\uff0c\u4f9b\u5404\u4f4d\u535a\u5ba2\u5927\u4f6c\u53c2\u8003\u4f7f\u7528\uff0c\u4e0d\u5199\u535a\u5ba2\uff0c\u4e5f\u53ef\u4ee5\u4fee\u6539\u4e0b\uff0c\u53d8\u6210\u81ea\u5df1\u7684\u90e8\u7f72\u5de5\u4f5c\u6d41\u3002\u6700\u540e\uff0cGitHub Actions \u662f\u4e00\u4e2a CI/CD\uff08\u6301\u7eed\u96c6\u6210/\u6301\u7eed\u90e8\u7f72\uff09\u5de5\u5177\uff0c\u503c\u5f97\u6bcf\u4e00\u4e2a\u7a0b\u5e8f\u5458\u5b66\u4e60\u4f7f\u7528\u3002\\r\\n\\r\\n\\r\\n\u5982\u679c\u8981\u5b66\u4e60 GitHub Actions \u6765\u5b9e\u73b0\u81ea\u5df1\u7684\u90e8\u7f72\u6d41\u7a0b\uff0c\u4ee5\u4e0b\u5b66\u4e60\u8d44\u6e90\u4f9b\u4f60\u53c2\u8003\uff1a\\r\\n\\r\\nGitHub Actions \u5165\u95e8\u6559\u7a0b http://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html (opens new window)\u3002\\r\\n\\r\\nGitHub Actions \u5b98\u65b9\u6587\u6863 https://docs.github.com/en/actions (opens new window)\u3002\\r\\n\\r\\nGitHub Actions \u5b98\u65b9\u63d2\u4ef6\u5e02\u573ahttps://github.com/marketplace?type=actions (opens new window)\u3002\\r\\n\\r\\nawesome-actions https://github.com/sdras/awesome-actions (opens new window)\u3002\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\u7f51\u53cb\u535a\u5ba2\u53c2\u8003: \\r\\n```shell\\r\\nhttps://somenzz.gitee.io/auto-deploy-blog-by-github-actions.html#_2%E3%80%81secrets-gitee-rsa-private-key\\r\\n```\\r\\n\u8682\u8681\u5927\u8c61\u535a\u5ba2\\r\\nhttps://blog.ljbmxsm.com/docs/others/blog-building/"}]}')}}]);