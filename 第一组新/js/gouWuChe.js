$(function () {
    //更改数量
    var aas = 0;
   $('.btnShuL1').click(function () {
        aas++;
       if(aas % 2 == 1){
           $('.GouWuCheJieSuanShuLiang1').html($('.GouWuCheJieSuanShuLiang1 input').val());
           // $('.GouWuCheJieSuanShuLiang1').html('<input type="text" value="1">');
       }else{
           $('.GouWuCheJieSuanShuLiang1').html('<input type="text" value="1">');
           // $('.GouWuCheJieSuanShuLiang1').html($('.GouWuCheJieSuanShuLiang1 input').val());
       }
       if(aas>5){
           aas=0;
       }
   });

    $('.btnShuL2').click(function () {
        aas++;
        if(aas % 2 == 1){
            // $('.GouWuCheJieSuanShuLiang2').html('<input type="text" value="1">');
            $('.GouWuCheJieSuanShuLiang2').html($('.GouWuCheJieSuanShuLiang2 input').val());
        }else{
            $('.GouWuCheJieSuanShuLiang2').html('<input type="text" value="1">');
            // $('.GouWuCheJieSuanShuLiang2').html($('.GouWuCheJieSuanShuLiang2 input').val());
        }
        if(aas>5){
            aas=0;
        }
    });
    //取消订购
    $(".btnDingG1").click(function () {
        if(confirm("确定取消订购？")){
            $('.gwcGouWuCheCC2').html(' ');
        }
    });
    $(".btnDingG2").click(function () {
        if(confirm("确定取消订购？")){
            $('.gwcGouWuCheCC3').html(' ');
        }
    });
    //商品总数
    var gwcJsSl1 =$('.GouWuCheJieSuanShuLiang1 input').val();         //商品A数量
    var gwcJsSl2 =$('.GouWuCheJieSuanShuLiang2 input').val();         //商品B数量
    var  gwcJsSl = parseInt(gwcJsSl1)+parseInt(gwcJsSl2);
    $('.GwcShangPinZongShu').html(gwcJsSl);


    //商品合计
    var gwcJsHj11 = $('.GouWuCheJieSuanDanJia1').html();
    var gwcJsHj01 = parseInt(gwcJsHj11)*parseInt(gwcJsSl1);
    $('.GouWuCheJieSuanZongJia1').html(gwcJsHj01+'.00');         //商品A总额

    var gwcJsHj21 = $('.GouWuCheJieSuanDanJia2').html();
    var gwcJsHj02 = parseInt(gwcJsHj21)*parseInt(gwcJsSl2);
    $('.GouWuCheJieSuanZongJia2').html(gwcJsHj02+'.00');        //商品B总额
    //商品总价
    $('.GwcShangPinZongJia').html(gwcJsHj01+gwcJsHj02+'.00');
    //商品总价积分
    $('.GwcShangPinZongJia0').html(gwcJsHj01+gwcJsHj02);
});