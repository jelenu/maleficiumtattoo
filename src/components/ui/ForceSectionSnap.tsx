"use client";
// Este componente fuerza el snap a la sección más cercana al terminar el scroll, incluso si el usuario ha hecho zoom o desplazado mal.
import { useEffect } from "react";

export default function ForceSectionSnap() {
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout> | null = null;

    function onScroll() {
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => {
        // Si el usuario no ha hecho scroll en los últimos 120ms, forzamos el snap
        const sections = Array.from(document.querySelectorAll("section[scroll-snap-align], section.snap-start, section"));
        if (!sections.length) return;
        // Encuentra la sección más cercana al top visible
        const header = document.querySelector("header");
        const headerHeight = header ? header.getBoundingClientRect().height : 0;
        let minDist = Infinity;
        let closest: HTMLElement | null = null;
        for (const sec of sections) {
          const rect = (sec as HTMLElement).getBoundingClientRect();
          // Calcula la distancia desde el top real de la ventana (ajustando header fijo)
          const dist = Math.abs(rect.top - headerHeight);
          if (dist < minDist) {
            minDist = dist;
            closest = sec as HTMLElement;
          }
        }
        if (closest) {
          // Scroll suave a la sección más cercana, ajustando header fijo
          const top = closest.getBoundingClientRect().top + window.scrollY - headerHeight;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }, 120);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (timeout) clearTimeout(timeout);
    };
  }, []);
  return null;
}
