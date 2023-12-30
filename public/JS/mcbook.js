function addText() {
    //adds text from input-text in realtime to book on webpage
    
    const x = $('#input-text').val();

    document.getElementById("output-div").innerHTML = x;
    const fullThing = 
`
<div class="mcbook" align="center">
<p class="screenreader" align="center"<small> -- Minecraft Book: -- </small></p>
<hr>
<p>${x}</p>
<hr>
</div>

`;
    
    
    document.getElementById("html-output").value = fullThing;
    $('#output-div').html(fullThing);

}

$(function() {

fetch("CSS/mcbook.txt").then(res => res.text()).then(text => {
    
    const contentDiv = document.getElementById("css-to-copy");
    contentDiv.textContent = text;
  });
});