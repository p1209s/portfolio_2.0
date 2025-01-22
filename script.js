document.addEventListener("DOMContentLoaded", () => {
  console.log("Projects section loaded successfully!");
});

// JavaScript for toggling the navigation menu on small screens
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector("nav");

  // Toggle the 'active' class on the nav element when the hamburger icon is clicked
  hamburger.addEventListener("click", function () {
    nav.classList.toggle("active");
  });
});
