$(document).ready(function(){$(document).on("scroll",function(){$(this).scrollTop()>25?$(".navbar").addClass("sticky"):$(".navbar").removeClass("sticky")});const o=document.querySelector(".menu-btn");let e=!1;o.addEventListener("click",()=>{e?(o.classList.remove("open"),e=!1):(o.classList.add("open"),e=!0)}),$(".company-branding").owlCarousel({margin:0,nav:!1,loop:!0,autoplay:!0,responsive:{0:{items:1},600:{items:3},1000:{items:5}}}),$(".totop").tottTop({scrollTop:0}),$(window).on("load",function(){$(".preloader").length&&$(".preloader").delay(100).fadeOut("slow",function(){$(this).remove()})});new SmoothScroll('a[href*="#"]',{speed:500});$(document).ready(function(){const o=document.querySelector(".menu-btn");let e=!1;o.addEventListener("click",()=>{e?(o.classList.remove("open"),e=!1):(o.classList.add("open"),e=!0)}),$(document).on("scroll",function(){$(this).scrollTop()>400?$(".navbar").addClass("sticky"):$(".navbar").removeClass("sticky")}),$(document).on("scroll",function(){$(this).scrollTop()>400?$(".navbar").addClass("sti"):$(".navbar").removeClass("sti")}),$(".client-comment").owlCarousel({margin:0,nav:!1,loop:!0,autoplay:!0,responsive:{0:{items:1},600:{items:1},1000:{items:1}}}),$("#youtube").magnificPopup({type:"iframe",iframe:{patterns:{youtube:{index:"youtube.com/",id:"v=",src:"http://www.youtube.com/embed/%id%?autoplay=1"}},srcAction:"iframe_src"}});new SmoothScroll('a[href*="#"]',{speed:500});$(".totop").tottTop({scrollTop:0}),$(window).on("load",function(){$("#preload").length&&$("#preload").delay(100).fadeOut("slow",function(){$(this).remove()})}),$(".about-post-c").owlCarousel({loop:!0,autoplay:!0,autoplaySpeed:100,autoplaySpeed:400,autoplayHoverPause:!0,nav:!0,navText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],dots:!1,margin:5,responsive:{0:{items:1},600:{items:1},1000:{items:1}}}),$(document).ready(function(){$(document).on("scroll",function(){$(this).scrollTop()>22?$(".navbar").addClass("sticky"):$(".navbar").removeClass("sticky")});const o=document.querySelector(".menu-btn");let e=!1;o.addEventListener("click",()=>{e?(o.classList.remove("open"),e=!1):(o.classList.add("open"),e=!0)}),$(".menu-btn").click(function(){$(".navbar-nav").toggleClass("nav-animation")});new SmoothScroll('a[href*="#"]',{speed:500});$(".team-carousel").owlCarousel({loop:!0,autoplay:!0,autoplayTimeout:4200,autoplayHoverPause:!0,nav:!1,dots:!0,margin:25,responsive:{0:{items:1},600:{items:2},1000:{items:4}}}),$(".totop").tottTop({scrollTop:0}),$(window).on("load",function(){$(".preloader").length&&$(".preloader").delay(100).fadeOut("slow",function(){$(this).remove()})})})})});