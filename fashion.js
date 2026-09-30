document.addEventListener("DOMContentLoaded", () => {


    /* =========================================
       MOBILE MENU
    ========================================= */

    const menuButton = document.getElementById("menuButton");
    const navLinks = document.querySelector(".nav-links");

    if (menuButton && navLinks) {

        menuButton.addEventListener("click", () => {
            navLinks.classList.toggle("open");
        });

    }


    /* =========================================
       CLOSE MOBILE MENU
    ========================================= */

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("open");

        });

    });


    /* =========================================
       PRODUCT REVEAL ANIMATION
    ========================================= */

    const cards = document.querySelectorAll(".fashion-card");

    const observer = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


    cards.forEach(card => {

        observer.observe(card);

    });


    /* =========================================
       FILTER PRODUCTS
    ========================================= */

    const filterButtons =
        document.querySelectorAll(".filter-btn");

    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            const selectedCategory =
                button.dataset.filter;


            /* Active button */

            filterButtons.forEach(btn => {

                btn.classList.remove("active");

            });

            button.classList.add("active");


            /* Filter cards */

            cards.forEach(card => {

                const category =
                    card.dataset.category;


                if (
                    selectedCategory === "all" ||
                    category.includes(selectedCategory)
                ) {

                    card.style.display = "";

                    setTimeout(() => {
                        card.classList.add("visible");
                    }, 50);

                } else {

                    card.style.display = "none";

                }

            });

        });

    });


    /* =========================================
       IMAGE FALLBACK
    ========================================= */

    document.querySelectorAll(".product-image img")
        .forEach(image => {

            image.addEventListener("error", () => {

                image.style.display = "none";

                image.parentElement.style.background =
                    "linear-gradient(135deg, #ead8d2, #f8f3ed)";

            });

        });


    /* =========================================
       AMAZON LINK CHECK
    ========================================= */

    document.querySelectorAll(".shop-button")
        .forEach(button => {

            button.addEventListener("click", event => {

                const link = button.getAttribute("href");

                if (
                    !link ||
                    link === "#" ||
                    link === "PASTE_ASSOCIATES_LINK_HERE"
                ) {

                    event.preventDefault();

                    alert(
                        "Add your Amazon Associates link to this product first."
                    );

                }

            });

        });


    /* =========================================
       CURRENT YEAR
    ========================================= */

    const year = document.getElementById("year");

    if (year) {

        year.textContent = new Date().getFullYear();

    }


});