document.addEventListener("DOMContentLoaded", function () {
  // Mobile Menu
  const toggleButton = document.querySelector(".navbar__mobile-menu-toggle");
  const mobileMenu = document.querySelector(".navbar__mobile-menu-items");

  toggleButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
  });
  // Video Modal
  const modal = document.getElementById("videoModal");
  const videoButton = document.querySelector(".preview__video-button");
  const closeButton = document.querySelector(".modal__close-button");
  const videoPlayer = document.getElementById("videoPlayer");
  // Open Modal On Click
  videoButton.addEventListener("click", function () {
    modal.style.display = "block";
    // Replace src Attribute
    videoPlayer.src = "https://youtu.be/ZDRZvFNK-ek?si=VTp3ZTEUkZBQB06J";
    // Close Modal
    closeButton.addEventListener("click", function () {
      modal.style.display = "none";
      videoPlayer.src = "";
    });
    window.addEventListener("click", function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
        videoPlayer.src = "";
      }
    });
  });
});
// Navigation Background On Scroll
window.addEventListener("scroll", function () {
  const navbar = this.document.querySelector(".navbar");

  if (window.scrollY > 0) {
    navbar.classList.add("navbar__scroll");
  } else {
    navbar.classList.remove("navbar__scroll");
  }
});
