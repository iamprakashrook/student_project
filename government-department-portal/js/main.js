document.addEventListener("DOMContentLoaded", () => {

    /* Mobile Navigation */

    const mobileMenu =
        document.getElementById("mobileMenu");

    const navLinks =
        document.getElementById("navLinks");

    if (mobileMenu && navLinks) {

        mobileMenu.addEventListener("click", () => {

            navLinks.classList.toggle("show");

        });

    }


    /* Dark Mode */

    const themeToggle =
        document.getElementById("themeToggle");

    if (themeToggle) {

        themeToggle.addEventListener("click", () => {

            document.body.classList.toggle("dark");

            const dark =
                document.body.classList.contains("dark");

            localStorage.setItem(
                "government-theme",
                dark ? "dark" : "light"
            );

            themeToggle.textContent =
                dark ? "☀️" : "🌙";

        });

    }


    const savedTheme =
        localStorage.getItem("government-theme");

    if (savedTheme === "dark") {

        document.body.classList.add("dark");

        if (themeToggle) {
            themeToggle.textContent = "☀️";
        }

    }


    /* Font Size */

    const increase =
        document.getElementById("fontIncrease");

    const decrease =
        document.getElementById("fontDecrease");

    const normal =
        document.getElementById("fontNormal");


    increase?.addEventListener("click", () => {

        document.body.classList.add("large-text");

    });


    decrease?.addEventListener("click", () => {

        document.body.classList.remove("large-text");

    });


    normal?.addEventListener("click", () => {

        document.body.classList.remove("large-text");

    });


    /* Search Button */

    const searchButton =
        document.getElementById("searchButton");

    const globalSearch =
        document.getElementById("globalSearch");


    searchButton?.addEventListener("click", () => {

        searchDepartments(
            globalSearch.value
        );

        document
            .getElementById("departments")
            ?.scrollIntoView({
                behavior: "smooth"
            });

    });


    /* Close mobile menu after clicking link */

    document
        .querySelectorAll(".nav-links a")
        .forEach(link => {

            link.addEventListener("click", () => {

                navLinks?.classList.remove("show");

            });

        });

});
