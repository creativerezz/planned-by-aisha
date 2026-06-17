"use client";

import { useEffect } from "react";
import { homeHtml } from "./home-content-html";

declare global {
  interface Window {
    toggleMenu?: () => void;
    closeMenu?: () => void;
    handleSubmit?: (e: SubmitEvent) => void;
  }
}

export function HomeContent() {
  useEffect(() => {
    const yearEl = document.getElementById("hon-yr");
    if (yearEl) {
      yearEl.textContent = String(new Date().getFullYear());
    }

    const header = document.getElementById("hon-header");
    let menuOpen = false;

    const reveal = (factor?: number) => {
      const vh = window.innerHeight || 800;
      const f = factor ?? 0.92;
      document.querySelectorAll(".reveal:not(.in)").forEach((el) => {
        if (el.getBoundingClientRect().top < vh * f) {
          el.classList.add("in");
        }
      });
    };

    const onScroll = () => {
      header?.classList.toggle("scrolled", window.scrollY > 40);
      reveal();
    };

    window.toggleMenu = () => {
      menuOpen = !menuOpen;
      const nav = document.getElementById("hon-nav");
      if (nav) {
        nav.className = menuOpen ? "hon-nav open" : "hon-nav";
      }
    };

    window.closeMenu = () => {
      menuOpen = false;
      const nav = document.getElementById("hon-nav");
      if (nav) {
        nav.className = "hon-nav";
      }
    };

    window.handleSubmit = (e: SubmitEvent) => {
      e.preventDefault();
      const form = e.target;
      if (!(form instanceof HTMLFormElement)) {
        return;
      }

      const name = (form.elements.namedItem("name") as HTMLInputElement | null)?.value.trim() ?? "";
      const email = (form.elements.namedItem("email") as HTMLInputElement | null)?.value.trim() ?? "";

      if (!name || !email) {
        if (!name) {
          const nameInput = form.elements.namedItem("name") as HTMLInputElement | null;
          if (nameInput) {
            nameInput.style.borderBottomColor = "#e0a0a0";
          }
        }
        if (!email) {
          const emailInput = form.elements.namedItem("email") as HTMLInputElement | null;
          if (emailInput) {
            emailInput.style.borderBottomColor = "#e0a0a0";
          }
        }
        return;
      }

      form.style.display = "none";
      document.getElementById("hon-success")?.classList.add("visible");
      const inquire = document.getElementById("hon-inquire");
      if (inquire) {
        window.scrollTo({ top: inquire.offsetTop - 60, behavior: "smooth" });
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    requestAnimationFrame(() => reveal(1.4));
    const revealTimer = window.setTimeout(() => reveal(1.4), 220);
    const revealTimer2 = window.setTimeout(() => reveal(99), 550);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.clearTimeout(revealTimer);
      window.clearTimeout(revealTimer2);
      delete window.toggleMenu;
      delete window.closeMenu;
      delete window.handleSubmit;
    };
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: homeHtml }} />;
}
