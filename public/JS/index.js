
$(document).ready(function(){
$("#unfinished").hide();

});

function showUnfinished(){
    if($('input[id="show-unfinished"]:checked').val()){
        $("#unfinished").slideDown();
    }else{
        $("#unfinished").slideUp();
    }
}
$(function() {
jQuery(".titlecard").fitText(0.5);

});