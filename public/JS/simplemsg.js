var prev = ""; //holds code (minus surrounding div) to be added to

function addSurroundingDiv(x){
    //adds div that wraps around the message.
x = `<p class="screenreader"><small> -- Text Messages: -- </small></p>
<div class="simplemsg">
<hr>${x}<hr>
</div>`;
    return x;
}

function addNewMessage(x){
    //adds new message
    let leftOrRight = "left"; //default is to the left
    if( $('input[id="rightchoose"]:checked').val() ){ 
        //check if right radio is checked
        leftOrRight = "right";
    }
    const inputText = allReplace($("#input-text").val() );

x =  `${x}
<p class="screenreader"><small> ${leftOrRight} text:</small></p>
<p class = "${leftOrRight} " align = "${leftOrRight}">
${inputText}
</p>`;
    return x;
}

$(function() {
    fetch("CSS/simplemsg.txt").then(res => res.text()).then(text => {
        const contentDiv = document.getElementById("css-to-copy");
        if(contentDiv){
            contentDiv.textContent = text;
        }else{

        }
        
      });

    $('#add').on('click', function() {
        //compiles the whole code together as is currently
        
        let x = addNewMessage(prev);

        prev = x;

        x = addSurroundingDiv(x);

        $('#output-div').html(x);
        $('#html-output').text(x);

        $("#input-text").val("");
    });
});
