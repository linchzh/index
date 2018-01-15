$(function () {
    changeShuLiang();

    //取消订购
    $(".btnDingG1").click(function () {
        if(confirm("确定取消订购？")){
            $('.gwcGouWuCheCC2').html('');
        }
    });
    $(".btnDingG2").click(function () {
        if(confirm("确定取消订购？")){
            $('.gwcGouWuCheCC3').html('');
        }
    });

});
//更改数量
function changeShuLiang() {
    var oBtn = $('.btnShuL');
    var oinNum = $('.inNum');
    var oGWCsl = $('.GWCshuLiangCCa');
    for(var i = 0;i<oBtn.length;i++){
        oBtn[i].index = i;
        oBtn[i].onclick = function (e) {
            oGWCsl[this.index].style.display = "block";
            oinNum[this.index].style.display = "none";
            oGWCsl[this.index].focus();
            oGWCsl[this.index].select();
            e.stopPropagation();
        };
        document.documentElement.onclick=function () {
            for(var k = 0;k<oinNum.length;k++){
                if(oinNum[k].style.display = "none"){
                    oGWCsl[k].style.display = "none";
                    oinNum[k].style.display = "block";
                    oinNum[k].innerHTML = oGWCsl[k].value;
                }
            }
            heJiJiaGe();
        };
    }
}
//更改总数
function heJiJiaGe() {
    var ospdanJia = $('.GouWuCheJieSuanDanJia1');
    var obuyNume = $('.inNum');
    var spHeJi = $('.GouWuCheJieSuanZongJia1');
    var spZongJi = $('.GwcShangPinZongJia');
    var spsl = $('.GwcShangPinZongShu');
    var spdanjia = [];
    var buynum = [];
    var sum = [];
    var zongJi = 0;
    var spNum = 0;
    for(var i=0;i<ospdanJia.length;i++) {
        spdanjia[i] = parseInt(ospdanJia[i].innerHTML);
        buynum[i] = parseInt(obuyNume[i].innerHTML);
        sum[i] = spdanjia[i]*buynum[i];
        spHeJi[i].innerHTML = sum[i] + '.00';
        zongJi += sum[i];
        spNum += buynum[i];
    }
    for(var s=0;s<spsl.length;s++){
        spsl[s].innerHTML = spNum;
    }
    for(var j=0;j<spZongJi.length;j++){
        spZongJi[j].innerHTML = zongJi;
    }
}