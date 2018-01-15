$(function(){
    function show(){
        var mydate = new Date();
        var Week = ['日','一','二','三','四','五','六'];
        var str = "" + mydate.getFullYear() + "/";
        str += (mydate.getMonth()+1) + "/";
        str += mydate.getDate();
        str += ' 星期' + Week[mydate.getDay()];
        return str;
    }
    $(".headerRightTop2title").html(show());
});