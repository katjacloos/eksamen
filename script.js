document.addEventListener("DOMContentLoaded", function () {
    // Vælg menu-knap og mobilmenu
    const menuBtn = document.querySelector('.menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    // Tilføj klik-event for at vise/skjule menuen
    menuBtn.addEventListener('click', function () {
        mobileMenu.classList.toggle('show');
    });
});


// Fold-ud funktion til alle nyheder
document.addEventListener("DOMContentLoaded", () => {
    const titles = document.querySelectorAll(".title");

    titles.forEach(title => {
        title.addEventListener("click", () => {
            const extraContent = title.nextElementSibling;

            // Toggler display mellem "none" og "block"
            if (extraContent.style.display === "block") {
                extraContent.style.display = "none";
                title.innerHTML = title.innerHTML.replace("&or;", "&gt;");
            } else {
                extraContent.style.display = "block";
                title.innerHTML = title.innerHTML.replace("&gt;", "&or;");
            }
        });
    });
});