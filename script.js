document.addEventListener("DOMContentLoaded", function () {
    var header = document.getElementById("myHeader");
    var lastScrollTop = 0;
    var openMenuButton = document.getElementById("openmenu"); 

    window.addEventListener("scroll", function () {
        var currentScrollTop = window.scrollY;

 
        if (currentScrollTop > lastScrollTop) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }

        lastScrollTop = currentScrollTop;
    });

    openMenuButton.addEventListener('click', function() {
        header.classList.remove('sticky');
        page.classList.add('menuopen');
    });

    var links = document.querySelectorAll('a[href^="#"]');

    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
           
            event.preventDefault();

           
            var targetId = this.getAttribute('href');
            var targetElement = document.querySelector(targetId);

          
            if (targetElement) {
                setTimeout(function() {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }, 100); 
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM Content Loaded");

    var scrollDownArrows = document.querySelectorAll('.scroll-down-arrow');

    if (scrollDownArrows) {
        console.log("Found scroll down arrows:", scrollDownArrows);

        scrollDownArrows.forEach(function (arrow) {
            arrow.addEventListener('click', function () {
                
                var targetSectionId = this.getAttribute('data-target');
        
                
                console.log("Arrow clicked! Target section ID:", targetSectionId);
        
                
                var targetSection = document.getElementById(targetSectionId);
        
                
                if (targetSection) {
                    console.log("Target section found:", targetSection);
                    setTimeout(function () {
                        console.log("Scrolling to target section...");
                        targetSection.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }, 100);
                } else {
                    console.error("Target section not found:", targetSectionId);
                }
            });
        });
    } else {
        console.error("No scroll down arrows found");
    }
});


