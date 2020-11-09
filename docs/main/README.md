# VuePress-learn

学习使用VuePress来搭建个人博客     SSP冲冲冲！！！

---

**直接按照官方文档学习：**[VuePress](https://www.vuepress.cn/)

---

### 1. 项目初始化


```bash
mkdir vuepress-starter && cd vuepress-starter
yarn init

查看源：yarn config get registry
换源：yarn config set registry https://registry.npm.taobao.org/

yarn add -D vuepress
mkdir docs && echo '# Hello VuePress' > docs/README.md

在package中添加一些scripts:
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}

yarn docs:dev
```

---

### 2. 首页内容书写（默认主题提供）

```
---
home: true
heroImage: /logo.jpg
actionText: 快速上手 →
actionLink: /zh/guide/
features:
- title: 简洁至上
  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
- title: Vue驱动
  details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
- title: 高性能
  details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
footer: MIT Licensed | Copyright © 2018-present Evan You
---
```

### 3. 核心配置

```
cd docs
mkdir .vuepress
# 主要存放配置

cd .vuepress
touch config.js
# config是整个项目的核心配置文件，所有菜单、栏目相关的配置均配置在该模块中

在config.js中加入内容:
module.exports = {
    title: '知码学院',
    description: '君哥带你上王者',
    dest: './dist',
    port: '7777',
    head: [
        ['link', {rel: 'icon', href: '/logo.jpg'}]
    ],
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        nav: [{
            text: '懵逼指南', link: '/guide/'
        }],
        sidebar: {'/guide/':[
            {
                  title:'新手指南',
                  collapsable: true,
                  children:[
                    '/guide/notes/one',
                  ]
                },
                {
                  title:'知码学院',
                  collapsable: true,
                  children:[
                    '/guide/notes/two',
                  ]
                }
            ]
        },
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
        searchMaxSuggestoins: 10,
        serviceWorker: {
            updatePopup: {
                message: "有新的内容.",
                buttonText: '更新'
            }
        },
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页 ！'
    }
}

```

### 顶部菜单栏配置

```js
在.vuepress下新建nav.js文件

module.exports = [
    {
        text: '懵逼指南', link: '/guide/'       // 这里后面是默认README.md
    },
    {
        text: '面试宝典', link: '/baodian/',
		items: [
            {text: '初级开发篇', link: '/baodian/zero/'},
            {text: '中高进阶篇', link: '/baodian/high/'},
        ]
    },
    {
        text: '工具箱',
        items: [
			{
                text: '在线编辑',
				items: [
					{text: '图片压缩', link: 'https://tinypng.com/'}
				]
            },
			{
                text: '在线服务',
				items: [
					{text: '阿里云', link: 'https://www.aliyun.com/'},
					{text: '腾讯云', link: 'https://cloud.tencent.com/'}
				]
            },
			{
                text: '博客指南',
				items: [
					{text: '掘金', link: 'https://juejin.im/'},
					{text: 'CSDN', link: 'https://blog.csdn.net/'}
				]
            }
        ]
    }
]

```

### 左侧导航栏配置

```js
在.vuepress下新建主slider.js文件

module.exports = {
	'/guide/': require('../guide/sidebar'),

	'/baodian/zero': require('../baodian/zero/sidebar'),
	'/baodian/high': require('../baodian/high/sidebar'),
}	
```

```js
然后设置相应的文件,例如`../guide/sidebar`

module.exports = [
    {
        title:'新手指南',
        collapsable: true,
        children:[
            './notes/one',
        ]
    },
    {
        title:'知码学院',
        collapsable: true,
        children:[
            './notes/two',
        ]
    }
]

children里面的就是展示的md文档,在相应路径建立就行
```

---

