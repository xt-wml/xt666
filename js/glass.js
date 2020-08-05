;
! function($) {
    const $bigimg = $('.bigIMG'); //放图片的div
    const $glass = $('.glass'); //放大镜的div
    const $sf = $('.sf'); //小放大镜
    const $bf = $('.bf'); //大放大镜

    //设置比例
    $bili = $bigimg.width() / $glass.width();

    //小放大镜截取的尺寸
    $sf.width($bigimg.width() * $bf.width() / $glass.width());
    $sf.height($bigimg.height() * $bf.height() / $glass.width())


    console.log($bigimg);
    //鼠标经过图片放大镜显示
    $bigimg.on('mouseover', function(e) {
        $glass.show();
        $sf.show();
        //放大镜的位移
        let $left = e.pageX - $bigimg.offset().left - $sf.width() / 2;
        let $top = e.pageY - $bigimg.offset().top - $sf.height() / 2;

        //水平方向
        if ($left <= 0) {
            $left = 0
        }
        if ($left >= $bigimg.width() - $sf.width()) {
            $left = $bigimg.width() - $sf.width()
        }

        //垂直方向
        if ($top < 0) {
            $top = 0
        }
        if ($top >= $bigimg.height() - $sf.height()) {
            $top = $bigimg.height() - $sf.height()
        }

        $sf.css({
            left: $left,
            top: $top
        })

        $glass.css({
            left: $bili * $left,
            top: $bili - $top
        });
    });

    $bigimg.on('mouseout', function() {
        $glass.hide();
        $sf.hide();
    });








}(jQuery);