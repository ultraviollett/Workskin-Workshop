function addText() {
    //updates whenever text is updated, adds text to inside button
    let x = $("#input-text").val().replace(/\r?\n/g, '<br />');
    x = DOMPurify.sanitize( x );

    //adds HTML to be copied to textarea
    const fullThing = `<div class="mcbuttondiv">
<p class="screenreader" align="center">
<small> -- Minecraft Button: -- </small>
</p><hr />
<p align="center">
${x}
</p><hr />
</div>
`;    $("#output-div").html(fullThing);
    document.getElementById("html-output").value = fullThing;
}

//textarea is css-to-copy
$(function() {

    fetch("CSS/mcbutton.txt").then(res => res.text()).then(text => {
        const contentDiv = document.getElementById("css-to-copy");
        contentDiv.textContent = text;
      });
});