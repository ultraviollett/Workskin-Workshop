$("#controls").hide();

var prev = "";//holds code (minus surrounding div) to be added to
//were adding a default example

/*
function reveal-color-pick-div(){
    //not in use as I need to edit the CSS to add custom colours,
    //ill come back later
    if( $('input[id="colorpick"]:checked').val() ){

        document.getElementById("color-pick-div").style.display = "";
    }else{
        document.getElementById("color-pick-div").style.display = "none";
    }
}
*/

function findColor(){
    //finds colour of text picked in radio buttons
    //Its a separate function because I want to add a colorpicker later
    const x = $("input[type='radio'][name=color]:checked",'#choose-color-form').val();
    return x;
}

function addSurroundingDiv(x){ 
    //adds surrounding div to current code
    return `<div class="mcpoemdiv">
<p class="screenreader" align="center">
<small> -- Minecraft End Poem: -- </small>
</p><hr> ${x} <hr></div>`;

}

function addNewText(x){
    const color = findColor(); //find color picked

    const text = allReplace( $("#input-text").val() );//get text from input-text box, keeps paragraphs

    x = x + `
<p class="${color}">
<span class="screenreader"> ${color} text: </span>
${text}
</p>`;
    return x;
}


$(function() {

    $('#add').on('click', function() {
        //compiles the whole code together as is currently
        
        let x = addNewText(prev);

        prev = x;

        x = addSurroundingDiv(x);
        $('#output-div').html("");
        $('#output-div').html(x);
        $('#html-output').text(x);

        $("#input-text").val("");

    });

    $('#show-controls').on('click', function() {
        //compiles the whole code together as is currently
        
        $("#notes").slideUp();
        $("#controls").slideDown();
    });

    $('#show-notes').on('click', function() {
        //compiles the whole code together as is currently
        
        $("#notes").slideDown();
        $("#controls").slideUp();
    });

    fetch("CSS/mcpoem.txt").then(res => res.text()).then(text => {
        const contentDiv = document.getElementById("css-to-copy");
        contentDiv.textContent = text;
    });

});
