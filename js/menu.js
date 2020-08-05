;
! function($) {
    const $menuWrap = $('.menu-wrap'); //获取放置菜单的div
    const $list = $('.banner-wrap ul li'); //获取导航上的所有列表菜单
    const $item = $('.item'); //获取每个二级菜单

    //鼠标移入菜单，显示相应的二级菜单
    $list.on('mouseover', function() {
        //鼠标滑过，每个一级菜单添加背景色
        $(this).css({ backgroundColor: 'black' }).siblings('.banner-wrap ul li').css({ backgroundColor: '#615346' })

        $menuWrap.show();
        $(this).addClass('active').siblings('a').removeClass('active');
        $item.eq($(this).index()).show().siblings('.item').hide();
    })

    //鼠标移出菜单，menuWrap隐藏
    $list.on('mouseout', function() {
        $menuWrap.hide();
        //对应的li恢复原来的背景色
        $(this).css({ backgroundColor: '#615346' })
    });

    //鼠标滑过放置菜单的div显示
    $menuWrap.on('mouseover', function() {
        $menuWrap.show();
    });

    //鼠标滑出放置菜单的div隐藏
    $menuWrap.on('mouseout', function() {
        $menuWrap.hide();
    });



}(jQuery);