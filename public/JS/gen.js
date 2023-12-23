 //makes sure all checkboxes are off by default
document.getElementsByTagName('input').checked = "false";

isDisabled = false; //for workskin
$("#disabled-workskin").attr("disabled", "disabled"); //starts off disabled

function allReplace(str, obj = 
{ '<(?!(/?)(span|div|p|hr|b|em|a|small|i|img)( (class|id|img|src|alt|href)=|>))' : '&lt;', 
"(?<!((<|</)(span|div|p|i|a|small|em))|\"|')>" : '&gt;',

'\r?\n' : '<br>',} ) {
    /*this replaces things that are inputted that html won't display right. 
    the default obj replaces <, > and line breaks
    however if < is part of a span it wont
    */
    for (const x in obj) {
      str = str.replace(new RegExp(x, 'g'), obj[x]);
    }
    return str;
};

function disableWorkskin(){
    if (!isDisabled){
        $("#ao3-workskin").attr("disabled", "disabled");
        $("#disabled-workskin").removeAttr("disabled");
        $("#disable-workskin-label").text("Workskin Disabled")
        isDisabled = true;
    }else{
        $("#ao3-workskin").removeAttr("disabled");
        $("#disabled-workskin").attr("disabled", "disabled");
        $("#disable-workskin-label").text("Workskin Enabled")
        isDisabled = false;
    }
}

//https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard 
//read above over


function pasteIconURL(idToPaste="", iconChoose=""){
    //when an icon is chosen from the dropdown box, it will paste it in the URL input.
    //this is mostly used on twitter and tumblr
        let x;
    
        switch (iconChoose){
    
            case "Steve Minecraft":
                x = "https://images.squidge.org/images/2023/12/07/stevemc.jpeg";
                break;
    
            case "Alex Minecraft":
                x = "https://images.squidge.org/images/2023/12/07/alexminecraftface.png";
                break;
    
            case "Walter White Breaking Bad":
                x = "https://images.squidge.org/images/2023/12/07/walterwhite.png";
                break;
    
            case "Hatsune Miku Vocaloid":
                x = "https://images.squidge.org/images/2023/12/07/hatsunemiku.png";
                break;
    
            case "Herobrine Minecraft":
                x = "https://images.squidge.org/images/2023/12/09/herobrinemc.webp";
                break;
    
            case "Sunflowers Van Gogh":
                x = "https://images.squidge.org/images/2023/12/09/sunflowersvinentvangogh.jpeg";
                break;
            
            case "Mona Lisa":
                x = "https://images.squidge.org/images/2023/12/09/monalisa.webp";
                break;
    
            case "Hong Kong Night":
                x = "https://images.squidge.org/images/2023/12/09/hongkongnight.jpeg";
                break;
    
            case "Railroad":
                x = "https://images.squidge.org/images/2023/12/09/railroad.jpeg";
                break;
    
            case "Shark Sandcastle":
                x = "https://images.squidge.org/images/2023/12/09/sharksandcastle.jpeg";
                break;
    
            case "Highway Drive":
                x = "https://images.squidge.org/images/2023/12/09/ukdrive.jpeg";
                break;
    
            case "Einstein with Tongue":
                x = "https://images.squidge.org/images/2023/12/09/einstein-with-tongue.png";
                break;
            case "X3 face":
                x = "https://images.squidge.org/images/2023/12/07/x3face.png";
                break;
    
            default:
                x = "";
            }
    
        idToPaste.value = x;
        
    }  


$(function() {
    $('#copy-html-button').on('click', function() {
      let tocopy = $("#html-output").val();
      navigator.clipboard.writeText(tocopy);
      $("#copy-html-button").text("Copied!");

  });
  
  $('#copy-css-button').on('click', function() {
    let tocopy = $("#css-to-copy").val();
    navigator.clipboard.writeText(tocopy);
    $("#copy-css-button").text("Copied!");
});

});

