let video1 = $("#video1");
let video2 = $("#video2");
let video3 = $("#video3");
let video4 = $("#video4");
let pause=$("#pauseBtn");
let play = $("#playBtn");
let videoCount=0;


video1.show();
video2.hide();
video3.hide();
video4.hide();

let videoplay = $("#playBtn");

videoplay.click(function (){



 
    if (videoCount==0){

    $('video')[0].play();
    $(play).css('z-index',-1);
    $(pause).css('z-index',1);
}
    if (videoCount==1){
    $('video')[1].play();
    $(play).css('z-index',-1);
    $(pause).css('z-index',1);}
    if (videoCount==2){
    $('video')[2].play();
    $(play).css('z-index',-1);
    $(pause).css('z-index',1);}
    if (videoCount==3){
    $('video')[3].play();
    $(play).css('z-index',-1);
    $(pause).css('z-index',1);}
   
});


let videopause = $("#pauseBtn");

videopause.click(function (){
if (videoCount==0){
    $('video')[0].pause();
    $(pause).css('z-index',-1);
    $(play).css('z-index',1);
}
if (videoCount==1){
    $('video')[1].pause();
    $(pause).css('z-index',-1);
    $(play).css('z-index',1);
}
if (videoCount==2){
    $('video')[2].pause();
    $(pause).css('z-index',-1);
    $(play).css('z-index',1);
}
if (videoCount==3){
    $('video')[3].pause();
    $(pause).css('z-index',-1);
    $(play).css('z-index',1);
}
   
});

$(".vid1").click(function() {
    video1.show();
    videoCount=0;
    console.log('klik vid1');
    console.log(videoCount);
    video2.hide();
    video3.hide();
    video4.hide();
    
    });
    $(".vid2").click(function() {
        video2.show();
        videoCount=1;
        console.log('klik vid2');
        console.log(videoCount);
        video1.hide();
        video3.hide();
        video4.hide();
    
    });
    $(".vid3").click(function() {
    
        video3.show();
        videoCount=2;
        console.log('klik vid3');
        console.log(videoCount);
        video1.hide();
        video2.hide();
        video4.hide();
    
    });
    $(".vid4").click(function() {
    
        video4.show();
        videoCount=3;
        console.log('klik vid4');
        console.log(videoCount);
        video1.hide();
        video2.hide();
        video3.hide();
    
    });



 
$("#skipBtn").click(function() {

    if(videoCount==3){
        videoCount=-1;
    }
    console.log(videoCount);
    videoCount++;

    if (videoCount == 0) {
        video1.show();
        console.log("video1");
        console.log(videoCount);
        video2.hide();
        video3.hide();
        video4.hide();
        
    } else if (videoCount == 1) {
        video2.show();
        console.log("video2");
        console.log(videoCount);
        video1.hide();
        video3.hide();
        video4.hide();
    } else if (videoCount == 2) {
        console.log("video3");
        console.log(videoCount);
        video3.show();
        video1.hide();
        video2.hide();
        video4.hide();
      
    } else if (videoCount == 3) {
        console.log("video4");
        console.log(videoCount);
        video4.show();
        video1.hide();
        video2.hide();
        video3.hide();
        
    }

    
});


$("#skipBtn1").click(function() {

    if(videoCount==3){
        videoCount=-1;
    }
    console.log(videoCount);
    videoCount++;

    if (videoCount == 0) {
        video1.show();
        console.log("video1");
        console.log(videoCount);
        video2.hide();
        video3.hide();
        video4.hide();
        
    } else if (videoCount == 1) {
        video2.show();
        console.log("video2");
        console.log(videoCount);
        video1.hide();
        video3.hide();
        video4.hide();
    } else if (videoCount == 2) {
        console.log("video3");
        console.log(videoCount);
        video3.show();
        video1.hide();
        video2.hide();
        video4.hide();
      
    } else if (videoCount == 3) {
        console.log("video4");
        console.log(videoCount);
        video4.show();
        video1.hide();
        video2.hide();
        video3.hide();
        
    }

    
});

$(document).ready(function(){
    $('#dark_light-toggle').click(function(){
        var element = document.body;
        element.classList.toggle("darkmode"); 
    });
}); 