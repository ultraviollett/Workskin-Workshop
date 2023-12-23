var prev = ""; //holds entire HTML before next is added
var childCount = 0; //stores the number of tweets, so you know when to add twtstart


$(document).ready(function(){

    $("#op-handle-div").hide();
    $("#quote-tweet-opt").hide();

    $("#image-opt").hide();
    $("#poll-opt").hide();
    
    $("#mention-opt").hide();
    //for quote tweets

    $("#quote-image-opt").hide();
    $("#quote-poll-opt").hide();
    $("#quote-mention-opt").hide();

    const contentDiv = document.getElementById("css-to-copy");

    fetch("CSS/tblr.txt").then(res => {
      if (!res.ok) {
        return "File coudn't be found. Please go to the ao3 page and find the CSS listed there";
      }
      return res.text();
    }).then(text => {
      contentDiv.textContent = text;
    });
  
  
  
});
  



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



//now onto the even more optional items, ie images and polls

function addSurroundingDiv(x){

    let style = $('input[name="stylename"]:checked').val();


    fullThing = `<div class="twtdiv ${style}"><hr>
${x}
</div> `;
    return fullThing;
/*


<div class="twtdiv twt-light">
    <div class="twt">
    <hr>
        <span class="screenreader">-- Tweet: -- </span>
        <div class="header">
            <div>
            <p><img  src="https://images.squidge.org/images/2023/09/14/00d56b33f5a708454d853fbad6d2e18a.jpeg" 
            width="50" height="50"  class="hidden" hidden alt=""></p>
            </div>
            <div class="name-handle-div">
                <p class="name"><span class="screenreader">Username: </span><b>HelloWorld</b></p>
                <p class="handle"><span class="screenreader">Handle: </span>@twitteruser</p>
            </div>
        </div>
        
        <div class="text">
            <p>Another poll, by itself this time </p>

        
        <table><tr>
            <td class="reply"><p><span class="screenreader">[Replies: </span> 234 <span class="screenreader">]</span></p></td>
            <td class="retweet"><p><span class="screenreader">[Retweets: </span> 32K <span class="screenreader">]</span></p></td>
            <td class="like"><p><span class="screenreader">[Likes: </span> 454M <span class="screenreader">]</span></p></td>
        </tr></table>
        <hr>
        </div>
    </div>
    </div>
    <br>
    <br>


*/
}


//images
function addImages(img="",alt=""){

    alt = alt ? ` alt="${alt}" ` : ""; //adds alt if provided
    const x = `<p class="twt-image"><img width="400" src="${img}"${alt}></p>`;

    return x;


/*
<p class="twt-image">
    <img src= ' https://images.squidge.org/images/2023/09/14/00d56b33f5a708454d853fbad6d2e18a.jpeg' 
    width="400" alt="Hawks from BNHA looking sexy">
    </p>

*/
}

//polls
function addPoll(p1="",p2="",p3="",p4="",votes=""){
    
    p1 = p1 ? `<li><span class="screenreader">Option: </span>${p1}</li>` : "";
    p2 = p2 ? `<li><span class="screenreader">Option: </span>${p2}</li>` : "";
    p3 = p3 ? `<li><span class="screenreader">Option: </span>${p3}</li>` : "";
    p4 = p4 ? `<li><span class="screenreader">Option: </span>${p4}</li>` : "";

    votes = votes ? `<p class="poll-info">${votes} votes</p>` : "";


    const x = `<div class="poll"><p class="screenreader">-- Poll: --</p><ul>${p1}${p2}${p3}${p4}</ul>${votes}</div>`;
    
    return x;

/*
<div class="poll"><p class="screenreader">-- Poll: --</p>
<ul>
<li><span class="screenreader">Option: </span> Hawks</li>
<li><span class="screenreader">Option: </span>Keigo Takami</li>
<li><span class="screenreader">Option: </span>Dabi's summer fling</li>
</ul>
<p class="poll-info">4 votes · 23 hours left</p>
</div>
*/

}

//#quote-tweet
function addQuoteTweet(){
    const icon = $("#input-quote-icon").val() ? `<p><img hidden class="hidden" alt="" width="50px" src="${ $("#input-quote-icon").val() }">
    </p>` : "";
    const name = $("#input-quote-username").val();
    const handle = $("#input-quote-handle").val() ? $("#input-quote-handle").val() : "";
    const date = $("#input-quote-date").val() ? $("#input-quote-date").val() : "";
    const text = $("#input-quote-text").val();

    const poll = $('input[id="show-quote-poll"]:checked').val() ? addPoll( $("#input-quote-poll-1").val(), $("#input-quote-poll-2").val(), $("#input-poll-3").val(), $("#input-quote-poll-4").val(), $("#input-quote-votes").val()) : "";

    const x = `<hr>
<blockquote>
<p><span class="screenreader">-- Quote Tweet: -- </span></p>
<div class="quote-div">
<div class="header">
<div class="icon-div">
${icon}
</div>

<div class="name-handle-div">
<p><span class="name"><span class="screenreader">Name: </span>
<b>${name}</b></span><span class="handle"> @thefirstmc  · 
<span class="screenreader">Posted</span> 20h <span class="screenreader">ago
</span></span></p>
</div>
</div>
<div class="text">${text}</div>
</div> 
</blockquote>
<hr>       
    
    
    `;
    return x;
/* 
<hr>
<blockquote>
<p><span class="screenreader">-- Quote Tweet: -- </span></p>
<div class="quote-div">


<div class="header">
<div class="icon-div">
<p><img hidden class="hidden" alt="" width="50px" src="https://images.squidge.org/images/2023/09/14/00d56b33f5a708454d853fbad6d2e18a.jpeg">
</p>
</div>

<div class="name-handle-div">
<p><span class="name"><span class="screenreader">Name: </span>
<b>steve</b></span><span class="handle"> @thefirstmc  · 
<span class="screenreader">Posted</span> 20h <span class="screenreader">ago
</span></span></p>
</div>
</div>

<p>images and polls also work in quote tweets!</p>

addImage();
addPoll();

</div> 
</blockquote>
<hr>    
    
*/
}

//function to compile the entire tweet, including previous
function addNewTweet(){

    const icon = $("#input-icon").val() ? `
<p>
<img  src="${ $("#input-icon").val() }" 
width="50" class="hidden" hidden alt="">
</p>` : "";

    const handle = $("#input-handle").val() ? `
<p class="handle"><span class="screenreader">Handle: </span>@${ $("#input-handle").val() }</p>` : "";
    
    const dateAndTimeSeparator = $("#input-date").val() && $("#input-time").val() ? " · " : "";
    const dateTime = $("#input-date").val() || $("#input-time").val() ? `
    <div class="timestamp"><p><span class="screenreader">Posted</span>${$("#input-time").val()}${dateAndTimeSeparator}${$("#input-date").val()}</p></div>` : "";

    const poll = $('input[id="show-poll"]:checked').val() ? addPoll( $("#input-poll-1").val(), $("#input-poll-2").val(), $("#input-poll-3").val(), $("#input-poll-4").val(), $("#input-votes").val()) : "";


    const quote = $('input[id="show-quote"]:checked').val() ? addQuoteTweet() : "";
    const text = DOMPurify.sanitize($("#input-text").val());

    const tweet = `
<div class="twt">
<span class="screenreader">-- Tweet: -- </span>
<div class="header">
    <div>${icon}
    </div>
    <div class="name-handle-div">
        <p class="name"><span class="screenreader">Username: </span><b>${$("#input-username").val()}</b></p>${handle}
    </div>
</div>

<div class="text">
    <p>${text}</p>
    ${quote}
    ${dateTime}
</div>

<table><tr>
    <td class="reply"><p><span class="screenreader">[Replies: </span>${$("#input-reply").val()}<span class="screenreader">]</span></p></td>
    <td class="retweet"><p><span class="screenreader">[Retweets: </span>${$("#input-retweet").val()}<span class="screenreader">]</span></p></td>
    <td class="like"><p><span class="screenreader">[Likes: </span>${$("#input-like").val()}<span class="screenreader">]</span></p></td>
</tr></table>
<hr></div>
    `;
        return tweet;
/*
<div class="twt">

    <span class="screenreader">-- Tweet: -- </span>
    <div class="header">
        <div>
        <p><img  src="https://images.squidge.org/images/2023/09/14/00d56b33f5a708454d853fbad6d2e18a.jpeg" 
        width="50" height="50" class="hidden" hidden alt=""></p>
        </div>
        <div class="name-handle-div">
            <p class="name"><span class="screenreader">Username: </span><b>HelloWorld</b></p>
            <p class="handle"><span class="screenreader">Handle: </span>@twitteruser</p>
        </div>
    </div>
    
    <div class="text">
        <p> Wow, what a very nice and accessible workskin. What should I tweet today?
        </p>
        <div class="timestamp"><p><span class="screenreader">Posted</span> 02:00 · 2023-12-16</p></div>
    </div>
    
    <table><tr>
        <td class="reply"><p><span class="screenreader">[Replies: </span> 2 <span class="screenreader">]</span></p></td>
        <td class="retweet"><p><span class="screenreader">[Retweets: </span> 32 <span class="screenreader">]</span></p></td>
        <td class="like"><p><span class="screenreader">[Likes: </span> 45 <span class="screenreader">]</span></p></td>
    </tr></table>
    <hr>
    </div>
*/
}

//compiles new reply
function addNewReply(){
    const icon = $("#input-icon").val() ? `
<p>
<img  src="${ $("#input-icon").val() }" 
width="50" class="hidden" hidden alt="">
</p>` : "";

    const handle = $("#input-handle").val() ? `
<p class="handle"><span class="screenreader">Handle: </span>@${ $("#input-handle").val() }</p>` : "";
    
    const handleAndDateSeparator = handle && $("#input-date").val() ? " · " : "";

    const poll = $('input[id="show-poll"]:checked').val() ? addPoll( $("#input-poll-1").val(), $("#input-poll-2").val(), $("#input-poll-3").val(), $("#input-poll-4").val(), $("#input-votes").val()) : "";

    const image = $('input[id="show-image"]:checked').val() ? addImages( $("#input-image").val(), $("#input-alt").val() ) : "";

    const text = $("#input-text").val().replace(/\r?\n/g, '<br />');

    const tweet = `
<div class="twt reply-twt">
<div class="twt reply-twt">
    <span class="screenreader">-- Reply Tweet: -- </span>
<div class="icon-div">
  ${icon}
</div>

<div class="reply-body">
<div class="header"> 
<p><span class="name"><span class="screenreader">Name: </span><b>steve</b></span><span class="handle"> @${handle} <span class="screenreader">Posted</span> ${handleAndDateSeparator}${ $("#input-date").val()  }</span></p>

</div>
<div class="text">
<p>
${text}
</p>

</div>
<table><tr>
    <td class="reply"><p><span class="screenreader">[Replies: </span>${$("#input-reply").val()}<span class="screenreader">]</span></p></td>
    <td class="retweet"><p><span class="screenreader">[Retweets: </span>${$("#input-retweet").val()}<span class="screenreader">]</span></p></td>
    <td class="like"><p><span class="screenreader">[Likes: </span>${$("#input-like").val()}<span class="screenreader">]</span></p></td>
</tr></table>
</div>
<hr>
</div>
    `;
        return tweet;
/*

    
<div class="twt reply-twt">
    <span class="screenreader">-- Reply Tweet: -- </span>
<div class="icon-div">
    <p><img  src="https://images.squidge.org/images/2023/12/07/stevemc.jpeg" width="50px" class="hidden" hidden alt=""></p>
</div>

<div class="reply-body">
<div class="header"> 
<p><span class="name"><span class="screenreader">Name: </span><b>steve</b></span><span class="handle"> @thefirstmc  · <span class="screenreader">Posted</span> 20h <span class="screenreader">ago</span></span></p>

</div>
<div class="text">
<p>
The reply tweet is seperated into two columns thanks to display: table. The div that holds the icon is set to 
a specified min-width and max-width, and the div that holds the body of the tweet's width is set to 
auto. 
</p><p>
the divider for the regular tweet is a pseudo element of the stats div, and its disabled 
in the reply tweet
</p>

</div>
<table><tr>
    <td class="reply"><p><span class="screenreader">[Replies: </span> 2 <span class="screenreader">]</span></p></td>
    <td class="retweet"><p><span class="screenreader">[Retweets: </span> 32 <span class="screenreader">]</span></p></td>
    <td class="like"><p><span class="screenreader">[Likes: </span> 45 <span class="screenreader">]</span></p></td>
</tr></table>
</div>
<hr>
</div>
*/
}

function compileCode(addNew = true){

    let x;

    if ( $("#twt-type").val() == 'Tweet'){
        x = $("#input-username").val() && $("#input-text").val() && addNew ? addNewTweet() : "";
    }else{
        x = $("#input-username").val() && $("#input-text").val() && addNew ? addNewReply() : "";
    }

    x = prev + x;

    fullThing = addSurroundingDiv(x);
    $('#output-div').html(fullThing);
    $('#html-output').text(fullThing);

    //now erase all that is needed
    


    prev = x;

}

//functions using jquery that generate the HTML to be used in the page and also put in the textbox
$(function() {

    fetch("CSS/twt.txt").then(res => res.text()).then(text => {
        const contentDiv = document.getElementById("css-to-copy");
        contentDiv.textContent = text;
    });


    $('#add').on('click', function() {

        compileCode();

        $('#input-text').val('');
    });

    $('#twt-style').on('change', function() {
        compileCode(false);
    });


    $('#twt-type').on('change', function() {
        if( $("#twt-type").val() == "Tweet"){
            $("#op-handle-div").slideUp();
            $("#input-time").slideDown();
        }else{
            $("#op-handle-div").slideDown();
            $("#input-time").slideUp();
        }
    });
//opens up options for extra features
    $("#show-image").on("click", function() {
        if( $('input[id="show-image"]:checked').val() ){
            $("#image-opt").slideDown();
        }else{
            $("#image-opt").slideUp();
        }
    });

    $("#add-image").on("click", function() {
        const image = addImages( $("#input-image").val(), $("#input-alt").val() );
        var x = $("#input-text").val();
        x = x + image
        $("#input-text").val(x);

        $('#show-image').prop('checked', false);
        $("#image-opt").slideUp();
        $("#input-image").val("");
        $("#input-alt").val("");

    });

    

    $("#show-poll").on("click", function() {
        if( $('input[id="show-poll"]:checked').val() ){
            $("#poll-opt").slideDown();
        }else{
            $("#poll-opt").slideUp();
        }
    });

    $("#add-poll").on("click", function() {
        const poll = addPoll( $("#input-poll-1").val(), $("#input-poll-2").val(), $("#input-poll-3").val(), $("#input-poll-4").val(), $("#input-votes").val());
        var x = $("#input-text").val();
        x = x + poll
        $("#input-text").val(x);

        $('#show-poll').prop('checked', false);
        $("#poll-opt").slideUp();
        $("#input-poll-1").val("");
        $("#input-poll-2").val("");
        $("#input-poll-3").val("");
        $("#input-poll-4").val("");
        $("#input-votes").val("")

        
    });

    $('#show-mention').on('click', function() {
        //reveals colored text div when checkmarked
        if( $('input[id="show-mention"]:checked').val() ){
            $("#mention-opt").slideDown();
        }else{
            $("#mention-opt").slideUp();
        }
    });

    $('#add-mention').on('click', function() {
        //compiles coloured text
        const text =  $("#input-mention").val();
        var x = $("#input-text").val();
        x = `${x}<span class="mention">@${text}</span>`
        $("#input-text").val(x);

        $('#show-mention').prop('checked', false);
        $("#mention-opt").slideUp();
        $("#input-mention").val("");
    });


    $("#show-quote").on("click", function() {
        if( $('input[id="show-quote"]:checked').val() ){
            $("#quote-tweet-opt").slideDown();
        }else{
            $("#quote-tweet-opt").slideUp();
        }
    });

//opens up options for extra features f quote tweets
    $("#show-quote-image").on("click", function() {
    if( $('input[id="show-quote-image"]:checked').val() ){
        $("#quote-image-opt").slideDown();
    }else{
        $("#quote-image-opt").slideUp();
        }
    });

    $("#add-quote-image").on("click", function() {
        const image = addImages( $("#input-quote-image").val(), $("#input-quote-alt").val() );
        var x = $("#input-quote-text").val();
        x = x + image
        $("#input-quote-text").val(x);

        $('#show-quote-image').prop('checked', false);
        $("#quote-image-opt").slideUp();
        $("#input-quote-image").val("");
        $("#input-quote-alt").val("");

    });

    $("#show-quote-poll").on("click", function() {
        if( $('input[id="show-quote-poll"]:checked').val() ){
            $("#quote-poll-opt").slideDown();
        }else{
            $("#quote-poll-opt").slideUp();
        }
    });

    $("#add-quote-poll").on("click", function() {
        const poll = addPoll( $("#input-quote-poll-1").val(), $("#input-quote-poll-2").val(), $("#input-quote-poll-3").val(), $("#input-quote-poll-4").val(), $("#input-quote-votes").val());
        var x = $("#input-text").val();
        x = x + poll
        $("#input-quote-text").val(x);

        $('#show-quote-poll').prop('checked', false);
        $("#quote-poll-opt").slideUp();
        $("#input-quote-poll-1").val("");
        $("#input-quote-poll-2").val("");
        $("#input-quote-poll-3").val("");
        $("#input-quote-poll-4").val("");
        $("#input-quote-votes").val("")

        
    });
    
    $('#show-quote-mention').on('click', function() {
        //reveals colored text div when checkmarked
        if( $('input[id="show-quote-mention"]:checked').val() ){
            $("#quote-mention-opt").slideDown();
        }else{
            $("#quote-mention-opt").slideUp();
        }
    });

    $('#add-quote-mention').on('click', function() {
        //compiles coloured text
        const text =  $("#input-quote-mention").val();
        var x = $("#input-quote-text").val();
        x = `${x}<span class="mention">@${text}</span>`
        $("#input-quote-text").val(x);

        $('#show-quote-mention').prop('checked', false);
        $("#quote-mention-opt").slideUp();
        $("#input-quote-mention").val("");
    });

});