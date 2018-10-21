let n 
// 初始化
init()
function x(n) {
    if (n > 5) {
        n = n % 5
        if (n === 0) {
            n = 5
        }
        //n = 1 2 3
    }
    return n
}
setInterval(() => {
    makeLeave($('.images > img:nth-child('+x(n)+')'))
        .one('transitionend', (e) => {
            makeEnter($(e.currentTarget))
        })
        makeCurrent($(`.images > img:nth-child(${x(n+1)})`))
    n += 1
}, 1500)





//封装函数
function init(){
    n = 1
    makeCurrent(makeCurrent($(`.images > img:nth-child(${n})`)).siblings())
}
function makeCurrent($node){
    return $node.removeClass('enter leave').addClass('current')
    
}
function makeLeave($node){
    return $node.removeClass('enter current').addClass('leave')
    
}
function makeEnter($node){
    return $node.removeClass('leave current').addClass('enter')

}
