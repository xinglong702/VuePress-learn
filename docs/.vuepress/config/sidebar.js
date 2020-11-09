module.exports = {
    // 对多模块的管控，顶部菜单栏只有一组，而侧边导航栏却有多组，所以要分开写，降低耦合性
    '/guide/': require('../../guide/sidebar'),

    '/baodian/zero': require('../../baodian/zero/sidebar'),
    '/baodian/high': require('../../baodian/high/sidebar'),
}
