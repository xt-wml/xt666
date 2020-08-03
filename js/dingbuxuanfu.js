;
! function($) {
    const navWrap = $('.nav-wrap');
    $(window).on('scroll', function() {
        if ($(window).scrollTop() >= 50) { //当滚动条大于等于50
            navWrap.css({ //改变元素的定位
                position: 'fixed',
                top: 0,
                left: 50
                    // zIndex: 1
            })
        } else {
            //小于50不吸顶，取消固定定位  定位的默认值
            navWrap.css({
                position: 'static'
            })
        }
    });


}(jQuery);