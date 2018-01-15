$(function () {
    var i=0;
    var s=0;//parseInt把原本的字符串变成数组
    var sum=0;
    $('.gouwuche').click(function () {
        i++;
        s=parseInt($('.jiage').html());
        sum=s+sum;
        $('#GouWuChe').html("("+i+")");
        $('.gouwu').html(i+"件商品");
        $('.gouwu2').html("合计:"+sum+"元");
    })
    $('.gouwuche2').click(function () {
        i++;
        s=parseInt($('.jiage2').html());
        sum=s+sum;
        $('#GouWuChe').html("("+i+")");
        $('.gouwu').html(i+"件商品");
        $('.gouwu2').html("合计:"+sum+"元");
    })
    $('.gouwuche3').click(function () {
        i++;
        s=parseInt($('.jiage3').html());
        sum=s+sum;
        $('#GouWuChe').html("("+i+")");
        $('.gouwu').html(i+"件商品");
        $('.gouwu2').html("合计:"+sum+"元");
    })

    var t =0;
    // $('.JiaRuGouWuChe').click(function () {
    //     i++;
    //     $('#GouWuChe').html("("+i+")");
    // });
    $('.JiaRuDuiBi').click(function () {
        t++;
        $('#DuiBiKuang').html('('+t+')');
    });
    $('.JiaRuChouCang').click(function () {
        t++;
        $('#ShouCang').html('('+t+')');
    });
    $('#WeiYe4').click(function () {
        var t=$('#WeiYe3').val();
        $('#xianshi').html(t);
        $('#Ye').html(t)
    })
})