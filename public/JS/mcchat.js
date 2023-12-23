var prev = ""; //holds all of previous text so you can keep adding to it

$("#colored-text-opt").hide();


function findTextType(){
    var x = $("input[type='radio'][name=color]:checked",'#choose-type').val();
    return x;
}


function addSurroundingDiv(x){ 
    const fade = $('input[id="fade"]:checked').val() ? " fade" : "";
    //adds surrounding div to current code
    var bg = $("select#bg-choose").children("option:selected").val();
    

    const fullThing = `<div class="mcchat ${bg}${fade}">
    <div class="screenreader" align=center><small>-- Minecraft Chat: --</small></div>
    <hr>
    ${x}
    <hr>
</div>`;
    return fullThing;
}

function addNewText(){
    const type = findTextType(); //find color picked
    var text = allReplace( $("#input-text").val() ); //gets text and replaces any values that confuse html

    if (type == "joinleft"){
        text = `[${text}]`;
    } else if (type == "whisper"){
        text = `(${text})`;
    }

    const x = `<p>
    <span class="${type}">
    ${text}
    </span>
</p>`;
    return x;
}


function compileCode(add=true){

    let x =  $("#input-text").val() && add ? addNewText() : "";

    x = prev + x;

    fullThing = addSurroundingDiv(x);

    $('#output-div').html(fullThing);

    $('#html-output').text(fullThing);

    prev = x;
}


$(function() {

    $('#add').on('click', function() {
        //compiles the whole code together as is currently
        compileCode();
    
        $("#input-text").val("");
        $('#show-colored-text').prop('checked', false);
    });

    $('#bg-choose').on('click', function() {
        //updates bg

        compileCode(false);

    });

    $('#add-colored-text').on('click', function() {
        //compiles coloured text
        const color = $("select#colored-text-choose").children("option:selected").val();
        const text =  $("#input-colored-text").val();
        var x = $("#input-text").val();
        x = `${x}<span class="${color}"> ${text} </span>`
        $("#input-text").val(x);

        $('#show-colored-text').prop('checked', false);
        $("#colored-text-opt").slideUp();
        $("#input-colored-text").val("");


    });

    $('#show-colored-text').on('click', function() {
        //reveals colored text div when checkmarked
        if( $('input[id="show-colored-text"]:checked').val() ){
            $("#colored-text-opt").slideDown();
        }else{
            $("#colored-text-opt").slideUp();
        }

    });

    $('#fade').on('click', function() {
        //reveals colored text div when checkmarked
        if( $('input[id="fade"]:checked').val() ){
            compileCode(false);
        }else{
            compileCode(false);
        }
    });

    $('#colored-text-choose').on('click', function() {
        //compiles the whole code together as is currently
        
        var x = $("select#colored-text-choose").children("option:selected").val();
        $("#display-colored-text").text(x);
        

    });

    fetch("CSS/mcchat.css").then(res => res.text()).then(text => {
        //grabs css needed to disaply in css-to-copy
        const contentDiv = document.getElementById("css-to-copy");
        contentDiv.textContent = text;
    });

});
