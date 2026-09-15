"use strict";

document.addEventListener("DOMContentLoaded", () => {

  // ================================
  // MENU HAMBURGER
  // ================================

  const menuButton = document.getElementById("menuButton");
  const closeMenu = document.getElementById("closeMenu");
  const sideMenu = document.getElementById("sideMenu");
  const menuOverlay = document.getElementById("menuOverlay");

  function openMenu() {
    if (sideMenu) {
      sideMenu.classList.add("open");
    }

    if (menuOverlay) {
      menuOverlay.classList.add("show");
    }

    document.body.classList.add("menu-open");
  }

  function closeMenuPanel() {
    if (sideMenu) {
      sideMenu.classList.remove("open");
    }

    if (menuOverlay) {
      menuOverlay.classList.remove("show");
    }

    document.body.classList.remove("menu-open");
  }

  if (menuButton) {
    menuButton.addEventListener("click", openMenu);
  }

  if (closeMenu) {
    closeMenu.addEventListener("click", closeMenuPanel);
  }

  if (menuOverlay) {
    menuOverlay.addEventListener("click", closeMenuPanel);
  }


  // ================================
  // TOMBOL ESC UNTUK MENUTUP MENU
  // ================================

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenuPanel();
    }
  });


  // ================================
  // MENU AKTIF SESUAI HALAMAN
  // ================================

  const menuLinks = document.querySelectorAll(".menu-link");

  let currentPage = window.location.pathname.split("/").pop();

  // Kalau URL tidak menunjukkan nama file,
  // anggap sedang berada di index.html
  if (!currentPage) {
    currentPage = "index.html";
  }

  menuLinks.forEach((link) => {
    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });


  // ================================
  // TUTUP MENU SAAT PINDAH HALAMAN
  // ================================

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      closeMenuPanel();
    });
  });


  // ================================
  // ANIMASI SAAT ELEMEN MUNCUL
  // ================================

  const animatedElements = document.querySelectorAll(
    ".hero-content, .section-heading, .center-card, .footer"
  );

  animatedElements.forEach((element, index) => {
    element.style.animationDelay = `${index * 0.08}s`;
  });


  // ================================
  // EFEK CARD SAAT DITEKAN
  // ================================

  const cards = document.querySelectorAll(".center-card");

  cards.forEach((card) => {

    card.addEventListener("touchstart", () => {
      card.classList.add("pressed");
    }, { passive: true });

    card.addEventListener("touchend", () => {
      card.classList.remove("pressed");
    }, { passive: true });

    card.addEventListener("touchcancel", () => {
      card.classList.remove("pressed");
    }, { passive: true });

  });


  // ================================
  // TAHUN OTOMATIS DI FOOTER
  // ================================

  const footerYear = document.querySelector(".footer-year");

  if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
  }

});
