$(function () {
    $('#anniu').click(function () {
        var i=$('#shurukuang').val();
        // console.log(i);
        $('#YeShu').html(i);
        $('#SuiJi').html(i);
        if(i>5){
            alert("sorry,i cant get it！");
        }
    });
});