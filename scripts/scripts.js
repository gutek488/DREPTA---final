document.addEventListener("DOMContentLoaded", function(){
    var scroll = new SmoothScroll('a[href*="#"]');

    var mobileMenu = document.querySelector(".header-mobile_menu");
    var hamburger = document.querySelector(".menu-btn");
    var header = document.querySelector('header');
    var timeout;
    var anchors = document.querySelectorAll('a[href*="#"]');

    for (var x of anchors) {
        x.addEventListener('click', function() {
            mobileMenu.classList.remove("header-mobile_menu--active");
        }
            )
    }

    hamburger.addEventListener("click", function(){
        mobileMenu.classList.toggle("header-mobile_menu--active");
    })

    var scrollStop = function (callback) {
        if (!callback|| typeof callback !== 'function') return;
        var isScrolling;
        window.addEventListener('scroll', function (event) {
            window.clearTimeout(isScrolling);
            isScrolling = setTimeout(function() {
            callback();
            }, 66);
    
        }, false);
    
    };

    function displayHeader() {
        if (window.pageYOffset == 0) {
            header.style.height = "60px";
            header.style.overflow = "visible";
            header.style.transition = "none";
        }
        
        timeout = setTimeout(function(){
            header.style.height = "60px";
            header.style.overflow = "visible";


        },700);        
    }

    document,addEventListener("scroll", function() {
        header.style.height ="0";
        header.style.overflow = "hidden";

        clearTimeout(timeout);
    })
    scrollStop(displayHeader);
})