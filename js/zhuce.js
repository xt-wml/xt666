;
! function($) {
    const $username = $('.username'); //获取账户
    const $password = $('.password'); //获取密码
    const $repassword = $('.repassword'); //重复密码
    const $email = $('.email'); //获取邮箱

    //获取所有span
    let $span = $('span');
    //用户名获得焦点
    $username.on('focus', function() {
        $span.eq(0).html('请输入用户名，7个字符以内，中英文均可,必须英文开头');
    });

    //用户名失去焦点，进行判断
    $username.on('blur', function() {

        if ($username.html() !== '') {
            let reg = /^[(a-zA-Z)+\u4e00-\u9fa5]{2,7}$/g;

            //判断长度
            if ($username.html().length < 7 && $username.html().length >= 2) {

            } else {
                $span.eq(0).html('您输入的长度不够或者太长，请重新输入');
            }
        } else {
            $span.eq(0).html('您还没有输入用户名，请重新输入');
        }
    });
}(jQuery);