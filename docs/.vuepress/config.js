const NavConf = require('./config/nav')
const SidebarConf = require('./config/sidebar')
const PluginsConf = require('./config/plugins/index')

module.exports = {
    title: 'VuePress高手',
    description: '学习，学习，什么tmd叫学习！！！',
    dest: './dist',
    port: '8888',
    head: [
        ['link', {rel: 'icon', href: '/image/logo.jpg'}],
        ['link', {rel: 'stylesheet', href: '/css/style.css'}],
        ['script', {charset: 'utf-8', src: '/js/main.js'}]
    ],
    markdown: {
        lineNumbers: true
    },
    theme: 'reco',
    themeConfig: {
        nav: NavConf,
        sidebar: SidebarConf,
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
        searchMaxSuggestions: 10,
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
