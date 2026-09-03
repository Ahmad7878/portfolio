var typed = new Typed(".cursor-text", {
    strings: ["Containerization", "Automation", "Cloud & Infrastructure", "AI/ML Enthusiast"],
    typeSpeed: 55,
    backSpeed: 30,
    backDelay: 1400,
    loop: true
});

var hamburger = document.getElementById("hamburger");
var sidebar = document.getElementById("sidebar");

hamburger.addEventListener("click", function () {
    sidebar.classList.toggle("open");
    hamburger.querySelector("i").classList.toggle("bx-menu");
    hamburger.querySelector("i").classList.toggle("bx-x");
});

var navLinks = document.querySelectorAll(".side-nav a");
navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.forEach(function (l) { l.classList.remove("active"); });
        link.classList.add("active");
        sidebar.classList.remove("open");
        hamburger.querySelector("i").classList.add("bx-menu");
        hamburger.querySelector("i").classList.remove("bx-x");
    });
});

var sections = document.querySelectorAll("main section[id]");
var sectionObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            var id = entry.target.getAttribute("id");
            navLinks.forEach(function (l) {
                l.classList.toggle("active", l.getAttribute("href") === "#" + id);
            });
        }
    });
}, { rootMargin: "-40% 0px -50% 0px" });

sections.forEach(function (s) { sectionObserver.observe(s); });
