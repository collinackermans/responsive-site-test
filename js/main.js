let btnNav=$('.mobile-nav-toggle');
let navPanel = $('nav ul');
let main = $('main');


btnNav.click(function(){


    if (navPanel.hasClass('open')) {

        navPanel.removeClass('open');
        main.removeClass('nav-open');
    } 
    
    else {
    
        navPanel.addClass('open');
        main.addClass('nav-open');
    }



});


let navOpen = $('.mobile-nav-toggle');



btnNav.click(function(){


    if (navOpen.hasClass('open')) {

        navOpen.removeClass('open');
        main.removeClass('nav-open');
    } 
    
    else {
    
        navOpen.addClass('open');
        main.addClass('nav-open');
    }



});