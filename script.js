/* =========================================================
   THE LITTLE EDIT
   JavaScript
   ========================================================= */


/* =========================================================
   1. WAIT FOR PAGE TO LOAD
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    console.log("The Little Edit is ready ✦");


    /* =====================================================
       2. MOBILE MENU
       ===================================================== */

    const menuButton = document.querySelector(".menu-button");
    const navbar = document.querySelector(".navbar");
    const navLinks = document.querySelector(".nav-links");

    if (menuButton && navLinks) {

        menuButton.addEventListener("click", () => {

            navLinks.classList.toggle("mobile-menu");

            menuButton.classList.toggle("menu-open");

            if (navLinks.classList.contains("mobile-menu")) {
                menuButton.textContent = "✕";
            } else {
                menuButton.textContent = "☰";
            }

        });


        /* Close menu when a link is clicked */

        const links = navLinks.querySelectorAll("a");

        links.forEach(link => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("mobile-menu");

                menuButton.classList.remove("menu-open");

                menuButton.textContent = "☰";

            });

        });

    }



    /* =====================================================
       3. SMOOTH SCROLL
       ===================================================== */

    const internalLinks = document.querySelectorAll(
        'a[href^="#"]'
    );

    internalLinks.forEach(link => {

        link.addEventListener("click", function (event) {

            const targetID = this.getAttribute("href");

            if (
                targetID &&
                targetID !== "#" &&
                document.querySelector(targetID)
            ) {

                event.preventDefault();

                const target = document.querySelector(targetID);

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });



    /* =====================================================
       4. SCROLL REVEAL ANIMATION
       ===================================================== */

    const revealElements = document.querySelectorAll(
        ".collection-card, .product-card, .inspiration-card, .about-content, .about-image, .intro"
    );


    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("revealed");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


    revealElements.forEach(element => {

        element.classList.add("reveal");

        revealObserver.observe(element);

    });



    /* =====================================================
       5. PRODUCT CARD INTERACTION
       ===================================================== */

    const productCards = document.querySelectorAll(
        ".product-card"
    );

    productCards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.classList.add("product-hover");

        });

        card.addEventListener("mouseleave", () => {

            card.classList.remove("product-hover");

        });

    });



    /* =====================================================
       6. NEWSLETTER FORM
       ===================================================== */

    const newsletterForm = document.querySelector(
        ".newsletter-form"
    );

    if (newsletterForm) {

        newsletterForm.addEventListener("submit", event => {

            event.preventDefault();

            const emailInput =
                newsletterForm.querySelector("input");

            const button =
                newsletterForm.querySelector("button");

            const email = emailInput.value.trim();


            /* Basic email validation */

            if (!email || !email.includes("@")) {

                emailInput.style.borderBottom =
                    "1px solid #a4775b";

                emailInput.placeholder =
                    "Please enter a valid email";

                return;

            }


            /* Success state */

            button.textContent = "You're on the list ✦";

            emailInput.value = "";

            emailInput.placeholder =
                "Thank you for joining ♡";

            button.disabled = true;

        });

    }



    /* =====================================================
       7. IMAGE FALLBACK
       ===================================================== */

    const images = document.querySelectorAll("img");

    images.forEach(image => {

        image.addEventListener("error", () => {

            /*
                If an image is missing, hide the broken
                image icon instead of showing an ugly error.
            */

            image.style.display = "none";

            image.parentElement.classList.add(
                "image-missing"
            );

        });

    });



    /* =====================================================
       8. CURRENT YEAR
       ===================================================== */

    const footerYear = document.querySelector(
        ".footer-bottom p"
    );

    if (footerYear) {

        const currentYear = new Date().getFullYear();

        footerYear.textContent =
            `© ${currentYear} The Little Edit. All rights reserved.`;

    }



    /* =====================================================
       9. NAVBAR SHADOW WHEN SCROLLING
       ===================================================== */

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            navbar?.classList.add("scrolled");

        } else {

            navbar?.classList.remove("scrolled");

        }

    });



    /* =====================================================
       10. BACK TO TOP
       ===================================================== */

    const backToTop = document.createElement("button");

    backToTop.innerHTML = "↑";

    backToTop.setAttribute(
        "aria-label",
        "Back to top"
    );

    backToTop.classList.add("back-to-top");

    document.body.appendChild(backToTop);


    window.addEventListener("scroll", () => {

        if (window.scrollY > 600) {

            backToTop.classList.add("visible");

        } else {

            backToTop.classList.remove("visible");

        }

    });


    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });



    /* =====================================================
       11. PRODUCT LINKS
       ===================================================== */

    const productLinks = document.querySelectorAll(
        ".product-link"
    );

    productLinks.forEach(link => {

        link.addEventListener("click", event => {

            const href = link.getAttribute("href");

            /*
                For now, '#' is just a placeholder.
                Later we'll replace these with your
                Amazon Associates affiliate URLs.
            */

            if (!href || href === "#") {

                event.preventDefault();

                alert(
                    "This product link will be connected soon ✦"
                );

            }

        });

    });



    /* =====================================================
       12. COLLECTION CARD MICRO-INTERACTION
       ===================================================== */

    const collectionCards =
        document.querySelectorAll(".collection-card");

    collectionCards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.cursor = "pointer";

        });

    });


});