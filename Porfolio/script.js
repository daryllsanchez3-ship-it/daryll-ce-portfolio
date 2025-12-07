/**
 * SCROLL REVEAL FUNCTIONALITY
 * Nagdadagdag ng 'active' class kapag nakita na ang element sa viewport
 */

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    
    // Ang element ay magsisimulang lumabas kapag ang top edge nito ay nasa loob ng 80% ng viewport (windowHeight / 5 ay 20%)
    return (
        rect.top <= windowHeight - (windowHeight / 5) && 
        rect.bottom >= 0
    );
}

function reveal() {
    // Kunin lahat ng elements na may class na .reveal
    const reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
        // Tinitingnan kung nakikita ang element
        if (isElementInViewport(reveals[i])) {
            // Kung nakita, idagdag ang 'active' class para lumabas
            reveals[i].classList.add("active");
        } 
        // OPTIONAL: Kung gusto mo ring mag-fade out kapag nag-scroll up, 
        // idagdag ang 'else' block dito:
        /*
        else {
            reveals[i].classList.remove("active");
        }
        */
    }
}

// Patakbuhin ang reveal function kapag nag-scroll at pagka-load ng page
window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);
