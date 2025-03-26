document.addEventListener("DOMContentLoaded", () => {
    // Animasi hover pada link navigasi dengan menambahkan class CSS
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("mouseover", () => link.classList.add("hovered"));
        link.addEventListener("mouseout", () => link.classList.remove("hovered"));
    });

    // Validasi Form Kontak dengan pesan error di dalam form
    const contactForm = document.querySelector("#contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            const name = document.querySelector("#name");
            const email = document.querySelector("#email");
            const subject = document.querySelector("#subject");
            const message = document.querySelector("#message");

            let isValid = true;

            if (!name.value.trim()) {
                showError(name, "Nama harus diisi!");
                isValid = false;
            } else {
                clearError(name);
            }

            if (!email.value.trim() || !validateEmail(email.value)) {
                showError(email, "Email tidak valid!");
                isValid = false;
            } else {
                clearError(email);
            }

            if (!subject.value.trim()) {
                showError(subject, "Subjek harus diisi!");
                isValid = false;
            } else {
                clearError(subject);
            }

            if (!message.value.trim()) {
                showError(message, "Pesan harus diisi!");
                isValid = false;
            } else {
                clearError(message);
            }

            if (!isValid) e.preventDefault();
        });
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function showError(input, message) {
        input.style.borderColor = "red";
        let error = input.nextElementSibling;
        if (!error || !error.classList.contains("error-message")) {
            error = document.createElement("small");
            error.classList.add("error-message");
            input.after(error);
        }
        error.textContent = message;
    }

    function clearError(input) {
        input.style.borderColor = "";
        const error = input.nextElementSibling;
        if (error && error.classList.contains("error-message")) {
            error.remove();
        }
    }

    // Animasi tombol
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.addEventListener("mouseover", () => button.classList.add("button-hover"));
        button.addEventListener("mouseout", () => button.classList.remove("button-hover"));
    });

    // Toggle menu di layar kecil
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("nav ul");
    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => navMenu.classList.toggle("active"));
    }
});
