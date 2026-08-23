function animateCounters() {

    const counters =
        document.querySelectorAll("[data-count]");

    counters.forEach(counter => {

        const target =
            Number(counter.dataset.count);

        let current = 0;

        const increment =
            Math.max(1, Math.ceil(target / 50));

        const timer = setInterval(() => {

            current += increment;

            if (current >= target) {

                current = target;

                clearInterval(timer);
            }

            counter.textContent =
                current.toLocaleString();

        }, 25);

    });

}


document.addEventListener(
    "DOMContentLoaded",
    animateCounters
);
