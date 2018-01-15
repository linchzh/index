$(function () {
    // * 变红色
    $("span:contains('*')").css("color", "red");
    //
    $('.JsGwcZfShr').click(function () {
        //判断*标记的是否为空
        //填写全部的带*标记的信息
        if($('.jsGWCxxSHR1').val()==''){
            alert('客户姓名不能为空！');
            $('.jsGWCxxSHR1').focus();
        }else{
            if($('.jsGWCxxSHR2').val()==''){
                alert('联系电话不能为空！');
                $('.jsGWCxxSHR2').focus();
            }else{
                if($('.jsGWCxxSHR3').val()==''){
                    alert('电子邮箱不能为空！');
                    $('.jsGWCxxSHR3').focus();
                }else{
                    if($('.jsGWCxxSHR4').val()==''){
                        alert('联系地址不能为空！');
                        $('.jsGWCxxSHR4').focus();
                    }else{
                        if($('.jsGWCxxSHR5').val()==''){
                            alert('邮政编码不能为空！');
                            $('.jsGWCxxSHR5').focus();
                        }else{
                            alert('购买成功！');
                        }
                    }
                }
            }
        }




    });

});

