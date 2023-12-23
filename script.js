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


function onSubmit() {
    var response = grecaptcha.getResponse();

    if (response.length === 0) {
        alert('Veuillez cocher la case "Je ne suis pas un robot".');
        return false; // Bloquez l'envoi du formulaire si le captcha n'est pas coché
    }

    // Collectez les données du formulaire
    var formData = {
        nom: document.getElementById('nom').value,
        email: document.getElementById('email').value,
        objet: document.getElementById('objet').value,
        message: document.getElementById('message').value,
        recaptchaResponse: response
    };

    // Envoyez les données au serveur (vous devrez implémenter cette partie)
    // Exemple avec une requête AJAX
    // Notez que ceci est un exemple basique et peut nécessiter des ajustements en fonction de vos besoins et de votre environnement.
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'votre_script_de_traitement.php', true);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Traitez la réponse du serveur si nécessaire
            console.log(xhr.responseText);
        }
    };
    xhr.send(JSON.stringify(formData));

    return true; // Envoyez le formulaire si le captcha est coché
}