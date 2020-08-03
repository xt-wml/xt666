;
! function($) {
    const $Banner = $('.banner'); //获取轮播图这个大元素
    const $Banpic = $('.banner-box  li'); //获取图片
    const $Banyuan = $('.banner ol a'); //获取5个小长条
    const $Left = $('.left'); //获取左箭头
    const $right = $('.right'); //获取右箭头

    let index = 0; //用来存储索引
    let timer = null;
    let play = null;

    //点击小长条切换,自动改变索引
    $Banyuan.on('click', function() {
        //当前索引
        index = $(this).index();
        timer = setTimeout(function() {
            lun();
        }, 500);
    })

    //左箭头
    $Left.on('click', function() {
        index--;
        //如果索引小于0，让他等于最后一个长条的索引
        if (index < 0) {
            index = $Banyuan.length - 1;
        }
        lun();
    });
    //右箭头
    $right.on('click', function() {
        index++;
        //如果索引大于长条的长度，让他等于第一个长条的索引值
        if (index > $Banyuan.length - 1) {
            index = 0;
        }
        lun();
        // clearTimeout(timer);
    });

    // 自动播放
    play = setInterval(function() {
        //如果索引大于长条的长度，让他等于第一个长条的索引值
        index++;
        if (index > $Banyuan.length - 1) {
            index = 0;
        }
        lun();

    }, 2000);

    //鼠标移入停止轮播
    $Banner.hover(function() {
        //清除自动轮播
        clearTimeout(play);
    }, function() {

        play = setInterval(function() {
            index++;
            if (index > $Banyuan.length - 1) {
                index = 0;
            }
            lun();
        }, 2000);
    });

    //hover 两个参数，第一个是移入时触发的事件，第二个是移出时的事件


    function lun() {
        $Banyuan.eq(index).addClass('active').siblings('ol a').removeClass('active');
        $Banpic.eq(index).show().siblings('.banner-box li').hide();
    }
}(jQuery);