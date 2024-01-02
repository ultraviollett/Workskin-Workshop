
$(document).ready(function(){
$("#unfinished").hide();

});


$(function() {

    $('#show-unfinished').on('click', function() {
        
        if($('input[id="show-unfinished"]:checked').val()){
            $("#unfinished").slideDown();
        }else{
            $("#unfinished").slideUp();
        }

    });
});