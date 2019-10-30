'use strict';

console.log("JavaScript is running.");

var header_content = document.querySelector("#header_content");
const currentScroll = window.pageYOffset;



$(window).scroll(function(){
    if ($(window).scrollTop() >= 130) {
        $('.header_content').addClass('fixed_header');

        console.log("dddd");
    }
    else {
        $('.header_content').removeClass('fixed_header');
        console.log('dsfsdf');
    }

    if($(window).scrollTop() >= 50){
        $('.hamburgur').addClass('fixed_ham');
    }
    else {
        $('.hamburgur').removeClass('fixed_ham');
    }
});
document.querySelector('.main_content').addEventListener('click', closeNav);
document.querySelector('.header_img').addEventListener('click', closeNav);
function openNav(){
  console.log('ddd');
  document.getElementById("mySidenav").style.width = "200px";
}

function closeNav(){
  console.log('ddd');
  document.getElementById("mySidenav").style.width = "0px";

}
