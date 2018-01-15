$(function () {
    $('.YouBianWeiZhi_You4 li').mouseover(function () {
        var i = $('.YouBianWeiZhi_You4 li').index(this);
        // console.log(i);
        $(this).addClass('beijing').siblings().removeClass('beijing');
        $('.YouBianWeiZhi_You4 li .baibian').eq(i).css({'background':'#fff','border-botton':'none'});
        // console.log(i);
    }).mouseout(function () {
        $('.YouBianWeiZhi_You4 li .baibian').eq($(this).index()).css('background','none');
    });

    var s=0;
    var sum=0;
    $('#JiaRu').click(function () {
        var i=$('#DinGou').val();
        $('#gouwuche').html('('+i+')');
        if(i==0){
            $('#gouwuche').html('('+0+')');
        }
        s=parseInt($('.jiage').html());
        sum=s*i+sum;
        $('.gouwu').html(i+"件商品");
        $('.gouwu2').html("合计:"+sum+"元");
    });

    $('#JiRuDuiBi').click(function () {
        var i=$('#DinGou').val();
        $('#DuiBiKuang').html('('+i+')');
        if(i==0){
            $('#DuiBiKuang').html('('+0+')')
        }
    })

});