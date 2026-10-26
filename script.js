/**
 * JOSHI FREIGHT CARRIERS — CLIENT SCRIPT (VANILLA JS)
 * Zero dependencies, ultra-lightweight, executes instantly.
 */

document.addEventListener("DOMContentLoaded", function () {
  // 1. Dynamic Current Year in Footer
  var yearElement = document.getElementById("current-year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // 2. Sticky Header Elevation on Scroll
  var header = document.querySelector(".site-header");
  var scrollTopBtn = document.getElementById("scroll-top-btn");

  window.addEventListener(
    "scroll",
    function () {
      var scrollPos = window.scrollY;

      if (header) {
        if (scrollPos > 20) {
          header.classList.add("header-scrolled");
        } else {
          header.classList.remove("header-scrolled");
        }
      }

      if (scrollTopBtn) {
        if (scrollPos > 400) {
          scrollTopBtn.classList.add("visible");
        } else {
          scrollTopBtn.classList.remove("visible");
        }
      }
    },
    { passive: true }
  );

  // 3. Scroll to Top Action
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // 4. Mobile Drawer Navigation
  var mobileToggleBtn = document.getElementById("mobile-toggle-btn");
  var drawerCloseBtn = document.getElementById("drawer-close-btn");
  var drawerOverlay = document.getElementById("drawer-overlay");
  var mobileDrawer = document.getElementById("mobile-drawer");
  var drawerLinks = document.querySelectorAll(".drawer-link");

  function openDrawer() {
    if (mobileDrawer && drawerOverlay) {
      mobileDrawer.classList.add("open");
      drawerOverlay.classList.add("open");
      document.body.style.overflow = "hidden";
    }
  }

  function closeDrawer() {
    if (mobileDrawer && drawerOverlay) {
      mobileDrawer.classList.remove("open");
      drawerOverlay.classList.remove("open");
      document.body.style.overflow = "";
    }
  }

  if (mobileToggleBtn) {
    mobileToggleBtn.addEventListener("click", openDrawer);
  }

  if (drawerCloseBtn) {
    drawerCloseBtn.addEventListener("click", closeDrawer);
  }

  if (drawerOverlay) {
    drawerOverlay.addEventListener("click", closeDrawer);
  }

  drawerLinks.forEach(function (link) {
    link.addEventListener("click", closeDrawer);
  });

  // Close on ESC key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && mobileDrawer && mobileDrawer.classList.contains("open")) {
      closeDrawer();
    }
  });
});

