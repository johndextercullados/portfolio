
document.addEventListener("DOMContentLoaded", () => {

    // added the vanta here, so clean 
    VANTA.NET({
        el: "#vanta-canvas",        // target to css
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xb39aa0,            /* lines color */
        backgroundColor: 0x23153c   /* bg color */
    });


    // the animation of opening, content goes up
    anime({
        targets: '#page-content',
        opacity: [0, 1],
        translateY: [30, 0],
        easing: 'easeOutExpo',
        duration: 1200,
        delay: 300
    });

    // going to next page animation, pataas to
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', e => {
            const dest = link.href;

            e.preventDefault();
            
            anime({
                targets: '#page-content',
                opacity: 0,
                translateY: -30,
                easing: 'easeInExpo',
                duration: 500,
                complete: () => window.location.href = dest
            });

        });
    });




});