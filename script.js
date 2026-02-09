document.addEventListener('DOMContentLoaded', () => {
    // Toggle Navbar
    let menuIcon = document.querySelector('.hamburger');
    let navbar = document.querySelector('.nav-links');

    if (menuIcon && navbar) {
        menuIcon.onclick = () => {
            menuIcon.classList.toggle('fa-times');
            navbar.classList.toggle('active');
        };
    }

    // Scroll Sections Active Link
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('nav a'); // Fixed selector: removed 'header'

    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    let target = document.querySelector('nav a[href*=' + id + ']'); // Fixed selector
                    if (target) target.classList.add('active');
                });
            };
        });

        // Sticky Navbar
        let header = document.querySelector('nav');
        if (header) {
            header.classList.toggle('sticky', window.scrollY > 100);
        }

        // Remove toggle icon and navbar when click navbar link (scroll)
        if (menuIcon && navbar) {
            menuIcon.classList.remove('fa-times');
            navbar.classList.remove('active');
        }
    };

    // Modal Logic
    const modal = document.getElementById("codeModal");
    const closeBtn = document.querySelector(".close-modal");
    const viewCodeBtns = document.querySelectorAll(".btn-sm");

    if (viewCodeBtns) {
        viewCodeBtns.forEach(btn => {
            btn.addEventListener("click", (e) => {
                e.preventDefault(); // Prevent default anchor behavior
                if (modal) {
                    modal.style.display = "block";
                    console.log("Modal opened");
                }
            });
        });
    }

    if (closeBtn) {
        closeBtn.onclick = () => {
            if (modal) modal.style.display = "none";
        }
    }

    window.onclick = (event) => {
        if (event.target == modal) {
            if (modal) modal.style.display = "none";
        }
    }
});
