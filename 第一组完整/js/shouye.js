window.onload = function () {
    var i=1;
    function tion() {
        var aImg = document.getElementsByClassName('cenImg')[0];
        i++;
        aImg.src = "images/"+i+".jpg";
        if(i==10){
            i=1;
        }
    }

    var time=setInterval(tion,1000);
    var oA = document.getElementsByClassName('rt')[0].getElementsByTagName('a');
    // console.log(oA);
    var oImg = document.getElementsByClassName('cenImg')[0];
    // console.log(oImg);
    for (var j=1;j<oA.length;j++){
        oA[j].index=j;
        oA[j].onmousemove = function () {
            oImg.src="images/"+(this.index+1)+".jpg";
            clearInterval(time);
        };
        oA[j].onmouseout = function () {
            time = setInterval(tion,1000);
        }
    }

};


