function init() {
    console.log(123)
}
// 这个在头部，所以加个延迟，等页面加载完成再执行
setTimeout('init()',1000)
