"use strict";

document.addEventListener("DOMContentLoaded", () => {
  setupLoadingSpinner();
  setupMobileNavigation();
  setupScrollButton();

  AOS.init({ disable: "mobile" });
});

const setupLoadingSpinner = () => {
  const loadingSpinner = document.querySelector("#loading-spinner");
  if (!loadingSpinner) return;

  const twitterTimeline = "twttr" in window ? twttr : null;
  const googleMap = document.querySelector("#google-map");

  if (twitterTimeline) {
    twitterTimeline.ready((timeline) => {
      timeline.events.bind("rendered", () => loadingSpinner.remove());
    });
  } else if (twitterTimeline) {
    googleMap.addEventListener("load", () => loadingSpinner.remove());
  } else {
    window.addEventListener("load", () => loadingSpinner.remove());
  }
};

const setupMobileNavigation = () => {
  const mobileNavShow = document.querySelector(".mobile-nav-show");
  const mobileNavHide = document.querySelector(".mobile-nav-hide");

  document.querySelectorAll(".mobile-nav-toggle").forEach((el) => {
    el.addEventListener("click", (event) => {
      event.preventDefault();
      document.querySelector("body").classList.toggle("mobile-nav-active");
      mobileNavShow.classList.toggle("d-none");
      mobileNavHide.classList.toggle("d-none");
    });
  });
};

const setupScrollButton = () => {
  const scrollTopButton = document.querySelector(".scroll-top");
  if (!scrollTopButton) return;

  scrollTopButton.addEventListener("click", window.scrollTo({ top: 0, behavior: "smooth" }));

  const toggleButtonVisibility = () => {
    window.scrollY > 100
      ? scrollTopButton.classList.add("active")
      : scrollTopButton.classList.remove("active");
  };

  window.addEventListener("load", toggleButtonVisibility);
  document.addEventListener("scroll", toggleButtonVisibility);
};
