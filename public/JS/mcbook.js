function addText() {
    //adds text from input-text in realtime to book on webpage
    
    let x = $("#input-text").val().replace(/\r?\n/g, '<br />');
    x = DOMPurify.sanitize( x );

    const fullThing = 
`
<div class="mcbook" align="center">
<p class="screenreader" align="center"<small> -- Minecraft Book: -- </small></p>
<hr>
<p>${x}</p>
<hr>
</div>

`;
    
    $('#output-div').html(fullThing);
    $('#html-output').text(fullThing);

}

$(function() {

fetch("CSS/mcbook.txt").then(res => res.text()).then(text => {
    
    const contentDiv = document.getElementById("css-to-copy");
    contentDiv.textContent = text;
  });
});