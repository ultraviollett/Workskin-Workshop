

//makes sure all checkboxes are off by default
document.getElementsByTagName('input').checked = "false";
$("#controls").hide();

$("#html-css-div").hide();

$("#disabled-workskin").attr("disabled", "disabled"); //starts off disabled


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

function switchDarkLight(isDark = false){
    //checks if website is in dark or light mode, used for both manual check and browser default
    if (isDark) {
        $("html").addClass("dark");
        $('#show-notes-img').attr('src','CSS/img/BRIGHTARROWUP.svg'); 
        $('#show-controls-img').attr('src','CSS/img/BRIGHTARROWDOWN.svg'); 
        $('#dark-mode').prop( "checked", true );
        $("#dark-mode-label").text("Dark Mode");

        //grabs arrow img url depending on if it needs to points up or down
        const arrowUrl = $("#html-css-div").is(":hidden") ? 'CSS/img/BLUEDARKARROWUP.svg' : 'CSS/img/BLUEDARKARROWDOWN.svg';

        $('#show-copy-grid-img').attr('src', arrowUrl); 
        
        
    }else{
        $("html").removeClass("dark");
        $('#show-notes-img').attr('src','CSS/img/BLUEDARKARROWUP.svg'); 
        $('#show-controls-img').attr('src','CSS/img/BLUEDARKARROWDOWN.svg'); 
        $('#dark-mode').prop( "checked", false );
        $("#dark-mode-label").text("Light Mode");

        //grabs arrow img url depending on if it needs to points up or down
        const arrowUrl = $("#html-css-div").is(":hidden") ? 'CSS/img/BRIGHTARROWUP.svg' : 'CSS/img/BRIGHTARROWDOWN.svg';

        $('#show-copy-grid-img').attr('src', arrowUrl); 
    }

}

$( document ).ready(function() {
    switchDarkLight(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);

    $('#disabled-workskin-btn').prop( "checked", true );


});

$(function() {
    $('#copy-html-button').on('click', function() {
        let tocopy = $("#html-output").val();
        navigator.clipboard.writeText(tocopy);
        $("#copy-html-button").text("Copied!");
        
        window.setTimeout(function () {
            $("#copy-html-button").text("Copy HTML");
        }, 2000);

  });
  
  $('#copy-css-button').on('click', function() {
    let tocopy = $("#css-to-copy").val();
    navigator.clipboard.writeText(tocopy);
    $("#copy-css-button").text("Copied!");
    window.setTimeout(function () {
        $("#copy-css-button").text("Copy CSS");
    }, 2000);
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

$('#show-copy-grid-button').on('click', function() {
    //compiles the whole code together as is currently
    if ( $("#html-css-div").is(":hidden") ){
        $("#html-css-div").slideDown();
        
        const arrowUrl = $('input[id="dark-mode"]:checked').val() ? 'CSS/img/BLUEDARKARROWDOWN.svg' : 'CSS/img/BRIGHTARROWDOWN.svg';

        $('#show-copy-grid-img').attr('src', arrowUrl); 

    }else{
        $("#html-css-div").slideUp();
        const arrowUrl = $('input[id="dark-mode"]:checked').val() ? 'CSS/img/BLUEDARKARROWUP.svg' : 'CSS/img/BRIGHTARROWUP.svg';

        $('#show-copy-grid-img').attr('src', arrowUrl); 
    }


});


$('#dark-mode').on('click', function() {
    switchDarkLight($('input[id="dark-mode"]:checked').val());

});


$('#disabled-workskin-btn').on('click', function() {

    if ($('input[id="disabled-workskin-btn"]:checked').val()){
        $("#ao3-workskin").removeAttr("disabled");
        $("#disabled-workskin").attr("disabled", "disabled");
        $("#disabled-workskin-label").text("Workskin Enabled");

    }else{

        $("#ao3-workskin").attr("disabled", "disabled");
        $("#disabled-workskin").removeAttr("disabled");
        $("#disabled-workskin-label").text("Workskin Disabled");
}

});

});

