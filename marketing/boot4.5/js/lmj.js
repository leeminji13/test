
$(document).ready(function(){
    $('.tc > p').click(function(){
        $("#roomstyle .room").removeClass("on")
        $(this).parent().parent().addClass("on");
    })
});