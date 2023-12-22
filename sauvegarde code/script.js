document.addEventListener("DOMContentLoaded", function () {
    var header = document.getElementById("myHeader");
    var lastScrollTop = 0;
    var openMenuButton = document.getElementById("openmenu"); // Ajout de la déclaration

    window.addEventListener("scroll", function () {
        var currentScrollTop = window.scrollY;

        // Ajoutez ou supprimez la classe "sticky" en fonction du défilement et du sens
        if (currentScrollTop > lastScrollTop) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }

        lastScrollTop = currentScrollTop;
    });

    // Event listener to remove the sticky class when the button is clicked
    openMenuButton.addEventListener('click', function() {
        header.classList.remove('sticky');
        page.classList.add('menuopen');
    });

    var links = document.querySelectorAll('a[href^="#"]');

    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            // Prevent the default action
            event.preventDefault();

            // Get the target element
            var targetId = this.getAttribute('href');
            var targetElement = document.querySelector(targetId);

            // Smooth scroll to target with a slight delay
            if (targetElement) {
                setTimeout(function() {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }, 100); // Change the delay time (in milliseconds) as needed
            }
        });
    });
});