var prev = "";//holds code (minus surrounding div) to be added to
//were adding a default example

$(document).ready(function(){

    
    const contentDiv = document.getElementById("css-to-copy");
    
      fetch("CSS/mcpoem.txt").then(res => {
        if (!res.ok) {
          return "File coudn't be found. Please go to the ao3 page and find the CSS listed there";
        }
        return res.text();
      }).then(text => {
        contentDiv.textContent = text;
      });
    
    
    
    });

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

function addNewText(){
    const color = findColor(); //find color picked

    let text = $("#input-text").val().replace(/\r?\n/g, '<br />');
    text = DOMPurify.sanitize( text );
    x = `
<p class="${color}">
<span class="screenreader"> ${color} text: </span>
${text}
</p>`;
    return x;
}


$(function() {

    $('#add').on('click', function() {
        //compiles the whole code together as is currently
  
        let x = $("#input-text").val() ? addNewText(): "";

        x = prev + x;
        prev = x;

        x = addSurroundingDiv(x);
        $('#output-div').html("");
        $('#output-div').html(x);
        $('#html-output').text(x);

        $("#input-text").val("");

    });



    fetch("CSS/mcpoem.txt").then(res => res.text()).then(text => {
        const contentDiv = document.getElementById("css-to-copy");
        contentDiv.textContent = text;
    });

});
