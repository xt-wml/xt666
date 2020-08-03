;
! function($) {
    const Return = $('.return');
    //给滚动条添加事件
    $(window).on('scroll', function() {
        //如果滚动条大于800，回到顶部这个元素显示
        if ($(window).scrollTop() >= 800) { //获取滚动条
            Return.show();
        } else {
            //小于800，元素隐藏
            Return.hide();
        }
    })


    //给回到顶部添加动画
    Return.on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        });
    });


    //animate(params,[speed],[easing],[fn])用于创建自定义动画的函数。
    // params:一组包含作为动画属性和终值的样式属性和及其值的集合
    // speed:三种预定速度之一的字符串("slow","normal", or "fast")或表示动画时长的毫秒数值(如：1000)
    // easing:要使用的擦除效果的名称(需要插件支持).默认jQuery提供"linear匀速" 和 "swing缓冲".
}(jQuery);