// Bellora Foods - JavaScript

document.addEventListener("DOMContentLoaded", () => {
    const reservationForm = document.querySelector(".reservation-form");
    const dateInput = reservationForm?.querySelector('input[type="date"]');

    // Prevent customers from selecting a past reservation date
    if (dateInput) {
        const today = new Date();

        const localDate = new Date(
            today.getTime() - today.getTimezoneOffset() * 60000
        )
            .toISOString()
            .split("T")[0];

        dateInput.min = localDate;
    }

    // Handle reservation form
    reservationForm?.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = reservationForm
            .querySelector('input[type="text"]')
            ?.value.trim();

        const email = reservationForm
            .querySelector('input[type="email"]')
            ?.value.trim();

        const date = reservationForm
            .querySelector('input[type="date"]')
            ?.value;

        const guests = reservationForm
            .querySelector("select")
            ?.value;

        // Check that all fields are completed
        if (!name || !email || !date || !guests) {
            alert("Please complete all reservation fields.");
            return;
        }

        // Format reservation date
        const formattedDate = new Date(`${date}T00:00:00`)
            .toLocaleDateString("en-NG", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric"
            });

        // Confirmation message
        alert(
            `Thank you, ${name}!\n\n` +
            `Your reservation request has been received.\n\n` +
            `Date: ${formattedDate}\n` +
            `Guests: ${guests}\n\n` +
            `A confirmation will be sent to ${email}.`
        );

        // Clear form
        reservationForm.reset();
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener("click", (event) => {
            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    // Order Now buttons
    document.querySelectorAll(".menu-link").forEach((button) => {
        button.addEventListener("click", (event) => {
            const reservation = document.querySelector("#reservation");

            if (reservation) {
                event.preventDefault();

                reservation.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });
});