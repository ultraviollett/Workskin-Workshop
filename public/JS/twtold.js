document.getElementById("imageURLs").style.display = "none";
document.getElementById("polloptions").style.display = "none";
document.getElementById("opurldiv").style.display = "none";

//for quote tweets
document.getElementById("quotetweet").style.display = "none";
document.getElementById("qimageURLs").style.display = "none";
document.getElementById("qpolloptions").style.display = "none";

var prev = ""; //holds entire HTML before next is added
var childCount = 0; //stores the number of tweets, so you know when to add twtstart



function roundNum(x){
//rounds numbers so it obeys the twitter format, ie 123, 54K, 45M, etc
    if (x>999999){
        num = Math.round(x/1000000,2)+"M";
    }else if(x>999){
        num = Math.round(x/1000,2)+"K";
    }else{
        num = x;
    }
    return num;
}


function findIcon(iconURLText = ""){
    //gets the url of the chosen icon
    let x = iconURLText;
    return x;
}

function pasteIconURL(idToPaste="", iconChoose=""){
//when an icon is chosen from the dropdown box, it will paste it in the URL input
    let x;

    switch (iconChoose){

        case "Steve Minecraft":
            x = "https://images.squidge.org/images/2023/12/07/stevemc.jpeg";
            break;

        case "Alex Minecraft":
            x = "https://images.squidge.org/images/2023/12/07/alexminecraftface.png";
            break;

        case "Walter White Breaking Bad":
            x = "https://images.squidge.org/images/2023/12/07/walterwhite.jpeg";
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
            x = "https://images.squidge.org/images/2023/12/09/x3face.png";
            break;

        default:
            x = "";
        }

    idToPaste.value = x;
    
}  


function findTWTURL(){
    //grabs twturl from the twturl input, but also stores the value so can be used in 'replying to'
    var x = document.getElementById("twturl").value;

    document.getElementById('opurl').value = x;

    return x;
}

//now onto the even more optional items, ie images and polls

//images
function addImages(i1="",alt=""){
    let x="";
    if(i1){ 
        //if there are two images
        x = x + '<p class="twt-image"><img class="twt-image" src=';
        x = x + " ' "+i1+"'"; 

        if(alt){
            //if only one image is there
            x = x + 'alt = "'+alt+'"'
        }
    x = x + "></p>"
    }
    return x


/*
      <p class="twt-image"><img class="twt-image"
       src="CSS/img/eiffeltower.png" alt="ALT TEXT"></p>

*/
}

//polls
function addPoll(p1="",p2="",p3="",p4="",votes=""){
    let ispoll = false;
    let x = "";
    if(p1){
        x = x + '<span class="screenreader">Poll:</span><div class="twtpoll"><span class="screenreader">First option: </span><span class="twtpolltext">'+p1+'</span></div>'
        ispoll = true;
    }
    if(p2){
        x = x + ' <div class="twtpoll"><span class="screenreader">Second option: </span><span class="twtpolltext">'+p2+'</span></div>'
        ispoll = true;
    }
    if(p3){
        x = x + ' <div class="twtpoll"><span class="screenreader">Third option: </span><span class="twtpolltext">'+p3+'</span></div>'
        ispoll = true;
    }
    if(p4){
        x = x + ' <div class="twtpoll"><span class="screenreader">Fourth option: </span><span class="twtpolltext">'+p4+'</span></div>'
        ispoll = true;
    }
    if (ispoll && votes){
        let votenum = roundNum(votes);
        x = x + '<span class="pollvotes">'+votenum+' votes</span>';
    }
    return x;

/*
      <span class="screenreader">Poll:</span>
          <div class="twtpoll"><span class="screenreader">First option: </span><span class="twtpolltext">OPTION1</span></div>
          <div class="twtpoll"><span class="screenreader">Second option: </span><span class="twtpolltext">OPTION2</span></div>
          <div class="twtpoll"><span class="screenreader">Third option: </span><span class="twtpolltext">OPTION3</span></div>
          <div class="twtpoll"><span class="screenreader">Fourth option: </span><span class="twtpolltext">OPTION4</span></div>
      <span class="pollvotes">324 votes</span>
*/

}

//quotetweet
function addQuoteTweet(){

    let x = '<div class="twt-quotebox"><span class="screenreader">Quote Tweet: </span><div class="twt-header"> ';
    
    let iconURLtext = document.getElementById("qicon").value ;

    if(findIcon(iconURLtext)){
        x = x + '<div class="twt-icon-container" hidden> <img class="twt-iconquote" src="'+findIcon(iconURLtext)+'"> </div> ';
    }
    x = x + ' <div class="twt-id twt-quote-id"> <span class="twt-name"> '+$("#qusername").val()+'</span>';
    
    if(findTWTURL()){
    x = x + '<span class="twt-handle"> @'+findTWTURL();
    }
    if($("#qdate").val()){
        x = x + " · "+ $("#qdate").val();
    }
    x = x +'</span> </div> </div> <div class="twt-contentquote">'+$("#qtweet").val();

    x = x + addImages($("#qimage1").val(),$("#qalt").val());
    x = x + addPoll($("#qpoll1").val(),$("#qpoll2").val(),$("#qpoll3").val(),$("#qpoll4").val(),$("#qvotes").val());
    
    x = x + '</div></div>';

    return x;
/* 
        <div class="twt-quotebox"><span class="screenreader">Quote Tweet: </span>
      <div class="twt-header"> 
        <div class="twt-icon-container"> <img class="twt-iconquote" src="https://images.squidge.org/images/2023/12/07/alexminecraftface.png">
         </div> 
          <div class="twt-id twt-quote-id"> <span class="twt-name"> quoteNAME</span>
          <span class="twt-handle"> @quoteURL</span> 
          </div> </div> <div class="twt-contentquote">QUOTE TWEET CONTENT
[image]
[poll]
          </div>
        </div>  
    
*/
}

//function to compile the entire tweet, including previous
function addNewTweet(previous){
   
    //add starting div
    var x = previous + '<div class="twt ';
 
    //if this is the first tweet added, add twtstart so it has a top border
    if (childCount == 0){ x = x + 'twtstart '; }
    childCount += 1;

    //add correct classes for different styles
    if ($('input[id="white"]:checked').val()){
        x = x + ' twtwhite ';
    }else if($('input[id="black"]:checked').val()){
        x = x + ' twtblack ';
    }else if($('input[id="minimal"]:checked').val()){
        x = x + ' twtminimal ';
    }

    x = x + '"><div class="twt-header">';
    
    let iconURLtext = document.getElementById("icon").value ;

    if ( findIcon(iconURLtext) ){ 
    x = x + '<div class="twt-icon-container hidden"> <img class="twt-icon" src="'+findIcon(iconURLtext)+'"> </div>';
    }
    let username = document.getElementById("username").value;
    x = x + ' <div class="twt-id"> <span class="twt-name"> '+username+'</span>';

    if(findTWTURL()){
        x = x + '<span class="twt-handle"> @'+findTWTURL()+'</span>';
    }
    let tweetText = document.getElementById("tweet").value;
    x = x +'<br/></div> </div> <div class="twt-content"><span class="screenreader">Tweet: </span> '+tweetText+' </div>';

    x = x + addImages($("#image1").val(),$("#image2").val());

    x = x + addPoll($("#poll1").val(),$("#poll2").val(),$("#poll3").val(),$("#poll4").val(),$("#votes").val());

    if ($('input[id="quotetweetopt"]:checked').val()){
        x = x + addQuoteTweet();
    }
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;
    if (time && date){
        x = x + '<div class="twt-timestamp"> '+time+' · '+date+'</div>';
    }else if(time){
        x = x + '<div class="twt-timestamp"> '+time+'</div>';
    }else if(date){
        x = x + '<div class="twt-timestamp"> '+date+'</div>';
    }

    let retweet = roundNum(document.getElementById("retweet").value);
    let reply = roundNum(document.getElementById("reply").value);
    let like = roundNum(document.getElementById("like").value);
 
    x = x + '<hr class="twt-sep"><div class="twt-stat">  <p><img class="twt-socialimg hidden" src="https://images.squidge.org/images/2023/12/09/replies.png"> '+reply+'<span class="screenreader"> replies</span></p><p><img class="twt-socialimg hidden" src="https://images.squidge.org/images/2023/12/09/retweets.png"> '+retweet+'<span class="screenreader"> retweets</span></p><p><img class="twt-socialimg hidden" src="https://images.squidge.org/images/2023/12/09/likes.png"> '+like+'<span class="screenreader"> likes</span></p></div></div>';
 
   
        return (x);
/*
<div class="twt twtstart twtwhite ">
  <hr class="noworkskin">
  <div class="twt-header">
    <div class="twt-icon-container hidden">
       <img class="twt-icon" src="https://images.squidge.org/images/2023/12/07/stevemc.jpeg"> 
      </div> 
      <div class="twt-id"> <span class="twt-name">NAME<span class="twt-handle"> @URL</span> <br/>
      </div>
    </div> 
    <div class="twt-content"><span class="screenreader">Tweet: </span> TyWEET CONTENT 

        <div class="twt-timestamp"> 03:45 · 2023-12-11</div>
        </div>
<hr class="twt-sep">
<div class="twt-stat"> 
  <p><img class="twt-socialimg hidden" src="https://images.squidge.org/images/2023/12/09/replies.png"> '+reply()+'<span class="screenreader"> replies</span></p><p><img class="twt-socialimg hidden" src="https://images.squidge.org/images/2023/12/09/retweets.png"> '+retweet()+'<span class="screenreader"> retweets</span></p><p><img class="twt-socialimg hidden" src="https://images.squidge.org/images/2023/12/09/likes.png"> '+like()+'<span class="screenreader"> likes</span></p></div></div>

*/
}

//compiles new reply
function addNewReply(previous){
    var x = previous + '<div class="twt ';
    
    // //if this is the first tweet added, add twtstart so it has a top border
    if (childCount == 0){ x = x + 'twtstart '; }
    childCount += 1;

     //add correct classes for different styles
    if ($('input[id="white"]:checked').val()){
        x = x + ' twtwhite ';
    }else if($('input[id="black"]:checked').val()){
        x = x + ' twtblack ';
    }else if($('input[id="minimal"]:checked').val()){
        x = x + ' twtminimal ';
    }

    x = x + ' twt-replybox">';
    
    let iconURLtext = document.getElementById("icon").value ;

    if (findIcon(iconURLtext)){
        x = x + '<div class="twt-icon-replycontainer hidden"> <img class="twt-icon" src="'+findIcon(iconURLtext)+'"> </div>';
    }
    let username = document.getElementById("username").value;
    x = x + '<div class="twt-replycontainer"><div> <span class="twt-name">'+username+'</span>';
    
    if(findTWTURL()){
        x = x + '<span class="twt-handle">@'+findTWTURL();
    }

    let date = document.getElementById("date").value;
    if (date){
        x = x + ' · '+date + '</span>';
    }

    x = x + "</div>";

    let opURL = document.getElementById("opurl").value;
    if(opURL){
        x = x + '<div class="twt-replying-to"> Replying to <span class="twt-hl">@'+opURL+'</span></div>';
    }

    let tweetText = document.getElementById("tweet").value;
    x = x + '<div class="twt-replycontent"><span class="screenreader">Reply: </span>'+tweetText;

    x = x + addImages($("#image1").val(),$("#qalt").val());
    x = x + addPoll($("#poll1").val(),$("#poll2").val(),$("#poll3").val(),$("#poll4").val(),$("#votes").val());
    
    if ($('input[id="quotetweetopt"]:checked').val()){
        x = x + addQuoteTweet(x);
    }

    //pull variables for stats and round them
    let retweet = roundNum(document.getElementById("retweet").value);
    let reply = roundNum(document.getElementById("reply").value);
    let like = roundNum(document.getElementById("like").value);

    x = x + '<div class="twt-stat">  <p><img class="twt-socialimg hidden" src="https://images.squidge.org/images/2023/12/09/replies.png"> '+reply+'<span class="screenreader"> replies</span></p><p><img class="twt-socialimg hidden" src="https://images.squidge.org/images/2023/12/09/retweets.png"> '+retweet+'<span class="screenreader"> retweets</span></p><p><img class="twt-socialimg hidden" src="https://images.squidge.org/images/2023/12/09/likes.png"> '+like+'<span class="screenreader"> likes</span></p></div></div></div></div>';
    return x;
/*
<div class="twt twtwhite twt-replybox">

  <div class="twt-icon-replycontainer">
  <img class="twt-icon" src="https://images.squidge.org/images/2023/12/07/alexminecraftface.png">
  </div><div class="twt-replycontainer">
      <div><span class="twt-name">replyNAME</span><span class="twt-handle"> @replyURL · 2023-11-27</span>
  </div>
  <div class="twt-replying-to"> Replying to <span class="twt-hl">@opURL</span></div>
  
  <div class="twt-replycontent"><span class="screenreader">Reply: </span> REPLY TWEET



  </div> 
  <div class="twt-stat"> 
    <p><img class="twt-socialimg hidden" src="https://images.squidge.org/images/2023/12/09/replies.png"> 234<span class="screenreader"> replies</span></p>
    <p><img class="twt-socialimg" src="https://images.squidge.org/images/2023/12/09/retweets.png"> 324K<span class="screenreader"> retweets</span></p>
     <p><img class="twt-socialimg" src="https://images.squidge.org/images/2023/12/09/likes.png"> 234K<span class="screenreader"> likes</span></p>
  </div> 
</div> 
</div>
<br>
*/
}

//functions using jquery that generate the HTML to be used in the page and also put in the textbox
$(function() {

    fetch("CSS/twt.txt").then(res => res.text()).then(text => {
        const contentDiv = document.getElementById("css-to-copy");
        contentDiv.textContent = text;
    });


    $('#add').on('click', function() {
        let x;
        if ( $("#twttype").val() == 'Tweet'){
            x = addNewTweet(prev);
        }else{
            x = addNewReply(prev);
        }

        $('#twtdiv').html(x);
        $('#html-output').text(x);

        //now erase all that is needed
        $('#tweet').val('');
        $('#reply').val('');
        $('#retweet').val('');
        $('#like').val('');
        $('#image1').val('');
        $('#alt').val('');
        $('#poll1').val('');
        $('#poll2').val('');
        $('#poll3').val('');
        $('#poll4').val('');
        $('#votes').val('');

        //now for qtweet erasing
        $('#qicon').val('');
        $('#qusername').val('');
        $('#qtwturl').val('');
        $('#qtweet').val('');
        $('#qtweet').val('');
        $('#qimage1').val('');
        $('#qalt').val('');
        $('#qdate').val('');
        $('#qpoll1').val('');
        $('#qpoll2').val('');
        $('#qpoll3').val('');
        $('#qpoll4').val('');
        $('#qvotes').val('');

        prev = x;
    });

    $('#twttype').on('change', function() {
        if( $("#twttype").val() == "Tweet"){
            document.getElementById("opurldiv").style.display = "none";
        }else{
            document.getElementById("opurldiv").style.display = "";
        }
    });
//opens up options for extra features
    $("#image").on("click", function() {
        if( $('input[id="image"]:checked').val() ){
            document.getElementById("imageURLs").style.display = "";
        }else{
            document.getElementById("imageURLs").style.display = "none";
        }
    });

    

    $("#poll").on("click", function() {
        if( $('input[id="poll"]:checked').val() ){
            document.getElementById("polloptions").style.display = "";
        }else{
            document.getElementById("polloptions").style.display = "none";
        }
    });

    $("#quotetweetopt").on("click", function() {
        if( $('input[id="quotetweetopt"]:checked').val() ){
            document.getElementById("quotetweet").style.display = "";
        }else{
            document.getElementById("quotetweet").style.display = "none";
        }
    });

//opens up options for extra features f quote tweets
    $("#qimage").on("click", function() {
        if( $('input[id="qimage"]:checked').val() ){
            document.getElementById("qimageURLs").style.display = "";
        }else{
            document.getElementById("qimageURLs").style.display = "none";
        }

        $("#qimageURLs").toggle();//reveals images
    });

    $("#qpoll").on("click", function() {
        if( $('input[id="qpoll"]:checked').val() ){
            document.getElementById("qpolloptions").style.display = "";
        }else{
            document.getElementById("qpolloptions").style.display = "none";
        }
    });


});