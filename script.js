const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    navMenu.classList.remove("active");
});

// Close when clicking outside
document.addEventListener("click", (e) => {
    if (
        navMenu.classList.contains("active") &&
        !navMenu.contains(e.target) &&
        !menuBtn.contains(e.target)
    ) {
        navMenu.classList.remove("active");
    }
});


