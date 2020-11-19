document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(".scroll__animation");

    for (let link of links) {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            const sectionID = event.target.getAttribute("href").substr(1);
            
            document.getElementById(sectionID).scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            })
        })
    };

  });