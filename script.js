
document.addEventListener("DOMContentLoaded", function () {

    const dropdown = document.querySelector(".dropdown");
    const dropdownBtn = document.querySelector(".dropdown-btn");

    if (dropdown && dropdownBtn) {

        dropdownBtn.addEventListener("click", function (event) {
            event.stopPropagation();
            dropdown.classList.toggle("active");
        });

        document.addEventListener("click", function (event) {
            if (!dropdown.contains(event.target)) {
                dropdown.classList.remove("active");
            }
        });

        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape") {
                dropdown.classList.remove("active");
            }
        });
    }

    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    if (contactForm && formMessage) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const name = contactForm.elements.name.value.trim();
            const phone = contactForm.elements.phone.value.trim();
            const email = contactForm.elements.email.value.trim();

            if (!name || !phone || !email) {
                formMessage.textContent = "Please fill in all fields!";
                return;
            }

            formMessage.textContent =
                "Thank you! Your message has been received.";

            contactForm.reset();

        });
    }

    const serviceCards = document.querySelectorAll(".service-card");

    if ("IntersectionObserver" in window && serviceCards.length > 0) {

        const observer = new IntersectionObserver(function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);
                }

            });

        }, {
            threshold: 0.15
        });

        serviceCards.forEach(function (card, index) {

            card.style.transitionDelay = `${index * 150}ms`;

            observer.observe(card);

        });

    } else {

        serviceCards.forEach(function (card) {
            card.classList.add("visible");
        });

    }

    const cards = document.querySelectorAll(".card");

    cards.forEach(function (card) {

        card.addEventListener("click", function () {
            card.classList.toggle("active");
        });

    });

    const openModal = document.getElementById("openModal");
    const closeModal = document.getElementById("closeModal");
    const modal = document.getElementById("modal");
    const quoteForm = document.getElementById("quoteForm");

    function closeModalWindow() {

        if (modal) {
            modal.classList.remove("active");
        }

    }

    if (openModal && modal) {

        openModal.addEventListener("click", function () {
            modal.classList.add("active");
        });

    }

    if (closeModal) {

        closeModal.addEventListener("click", closeModalWindow);

    }

    if (modal) {

        modal.addEventListener("click", function (event) {

            if (event.target === modal) {
                closeModalWindow();
            }

        });

    }

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {
            closeModalWindow();
        }

    });

    if (quoteForm && modal) {

        quoteForm.addEventListener("submit", function (event) {

            event.preventDefault();

            alert("Thank you! Your request has been received.");

            quoteForm.reset();

            closeModalWindow();

        });

    }

    const track = document.querySelector(".team-track");
    const teamCards = document.querySelectorAll(".team-card");

    const prev = document.querySelector(".slider-arrow.prev");
    const next = document.querySelector(".slider-arrow.next");

    if (track && teamCards.length > 0 && prev && next) {

        let currentIndex = 0;

        function getVisibleCards() {

            if (window.innerWidth <= 700) {
                return 1;
            }

            return 3;

        }

        function updateSlider() {

            const visibleCards = getVisibleCards();

            const maxIndex = Math.max(
                0,
                teamCards.length - visibleCards
            );

            currentIndex = Math.max(
                0,
                Math.min(currentIndex, maxIndex)
            );

            const cardPosition = teamCards[currentIndex].offsetLeft
                - track.offsetLeft;

            track.style.transform =
                `translateX(-${cardPosition}px)`;

            prev.style.display =
                currentIndex === 0 ? "none" : "block";

            next.style.display =
                currentIndex >= maxIndex ? "none" : "block";

        }

        next.addEventListener("click", function () {

            currentIndex++;
            updateSlider();

        });

        prev.addEventListener("click", function () {

            currentIndex--;
            updateSlider();

        });

        window.addEventListener("resize", updateSlider);

        updateSlider();

    }
   

    const customerImage = document.getElementById("customerImage");
    const customerText = document.getElementById("customerText");
    const customerName = document.getElementById("customerName");
    const sliderDots = document.getElementById("sliderDots");

    if (
        customerImage &&
        customerText &&
        customerName &&
        sliderDots
    ) {

        let currentSlide = 0;

        // Создание точек переключения

        testimonials.forEach(function (item, index) {

            const dot = document.createElement("button");

            dot.type = "button";
            dot.setAttribute("aria-label", `Show testimonial ${index + 1}`);

            dot.addEventListener("click", function () {
                showSlide(index);
            });

            sliderDots.appendChild(dot);

        });


        // Переключение отзывов

        function showSlide(index) {

            currentSlide = index;

            customerImage.src = testimonials[index].image;
            customerImage.alt = testimonials[index].name;

            customerName.textContent =
                testimonials[index].name;

            customerText.textContent =
                testimonials[index].text;

            const dots = sliderDots.querySelectorAll("button");

            dots.forEach(function (dot, i) {

                dot.classList.toggle(
                    "active",
                    i === currentSlide
                );

            });

        }


        // Первый отзыв

        showSlide(0);


        // Автоматическое переключение каждые 5 секунд

        setInterval(function () {

            currentSlide++;

            if (currentSlide >= testimonials.length) {
                currentSlide = 0;
            }

            showSlide(currentSlide);

        }, 5000);

    }

});


document.addEventListener("DOMContentLoaded", function () {

    const elements = document.querySelectorAll(
        ".contacts-info, .contacts-image"
    );

    elements.forEach((element, index) => {

        setTimeout(() => {
            element.classList.add("show");
        }, 200 * index);

    });

});
