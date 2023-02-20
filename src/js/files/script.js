// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

// gsap.registerPlugin(ScrollTrigger);

const loader = document.querySelector(".loader");
let onload = false;
const bO = "back.out(1.7)";
const tl = gsap.timeline();
const tlPopular = gsap.timeline();

window.addEventListener("load", function(event) {
  loader.style.display = "none";
  tl.from('.header', 1.5, {x: "100%"})
    .from(".body-header__title", 1, {opacity: 0, y: 100, ease: bO})
    .from(".header__header", 1, {opacity: 0, y: 50, ease: bO})
    .from(".body-header__btns", .5, {opacity: 0, y: 100, ease: bO})
    .from(".body-header__social", .5, {opacity: 0, y: 100, ease: bO})
    .from(".body-header__controls", .5, {opacity: 0, y: 100, ease: bO});
    
    // .to(".body-header__title", {duration: 5, ease: "circ.out", repeat: -1, yoyo: true, repeatDelay: 3, delay: 1, text: "Animations created with use of GSAP"});

  gsap.from('.popular__text', {
    opacity: 0, 
    duration: 1.5,
    y: -100, 
    ease: bO,
    scrollTrigger: {
      trigger: ".popular__title",
      start: "top 80%",
      end: "top 15%",
      toggleActions: "play reverse restart reset",
    }
  })
  gsap.from('.popular__title', {
    opacity: 0, 
    duration: 1.5,
    delay: .3,
    y: -100, 
    ease: bO,
    scrollTrigger: {
      trigger: ".popular__title",
      start: "top 80%",
      end: "top 15%",
      toggleActions: "play reverse restart reset",
    }
  })

  gsap.from('.popular__slider > *', 1.5, {
    opacity: 0,
    y: -100, 
    ease: bO,
    scrollTrigger: {
      trigger: ".popular__slider > *",
      start: "top 80%",
      end: "bottom 15%",
      toggleActions: "play reverse restart reset",
    }
  })

  gsap.from('.personal__title--main', 1.5, {
    opacity: 0,
    x: -100, 
    ease: bO,
    scrollTrigger: {
      trigger: ".personal__title--main",
      start: "top 80%",
      end: "bottom 15%",
      toggleActions: "play reverse restart reset",
    }
  })

  gsap.from('.personal__text', 1.5, {
    opacity: 0,
    x: 100, 
    delay: .5,
    ease: bO,
    scrollTrigger: {
      trigger: ".personal__text",
      start: "top 80%",
      end: "bottom 15%",
      toggleActions: "play reverse restart reset",
    }
  })

  gsap.from('.personal__image', 1.5, {
    opacity: 0,
    rotate: 180,
    ease: bO,
    scrollTrigger: {
      trigger: ".personal__image",
      start: "top 80%",
      end: "bottom 15%",
      toggleActions: "play reverse restart reset",
    }
  })
  
  gsap.from('.personal__title--added', 1.5, {
    opacity: 0,
    x: 100, 
    ease: bO,
    scrollTrigger: {
      trigger: ".personal__title--added",
      start: "top 80%",
      end: "bottom 15%",
      toggleActions: "play reverse restart reset",
    }
  })

  gsap.from('.personal__suptitle', 1.5, {
    opacity: 0,
    x: 100, 
    delay: .5,
    ease: bO,
    scrollTrigger: {
      trigger: ".personal__suptitle",
      start: "top 80%",
      end: "bottom 15%",
      toggleActions: "play reverse restart reset",
    }
  })

  gsap.from('.personal__descr', 1.5, {
    opacity: 0,
    x: 100, 
    delay: 1,
    ease: bO,
    scrollTrigger: {
      trigger: ".personal__descr",
      start: "top 80%",
      end: "bottom 15%",
      toggleActions: "play reverse restart reset",
    }
  })

  gsap.from('.personal__gallery > *', 1.5, {
    opacity: 0,
    y: -100, 
    ease: bO,
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".personal__gallery > *",
      start: "top 80%",
      end: "bottom 15%",
      toggleActions: "play reverse restart reset",
    }
  })

  gsap.from('.subscribe__title', 1.5, {
    opacity: 0,
    x: 100, 
    ease: bO,
    scrollTrigger: {
      trigger: ".subscribe__title",
      start: "top 80%",
      end: "bottom 15%",
      toggleActions: "play reverse restart reset",
    }
  })
  gsap.from('.subscribe__text', 1.5, {
    opacity: 0,
    x: 100, 
    ease: bO,
    delay: .5,
    scrollTrigger: {
      trigger: ".subscribe__text",
      start: "top 80%",
      end: "bottom 15%",
      toggleActions: "play reverse restart reset",
    }
  })
  gsap.from('.subscribe__form', 1.5, {
    opacity: 0,
    x: 100, 
    ease: bO,
    delay: 1,
    scrollTrigger: {
      trigger: ".subscribe__form",
      start: "top 80%",
      end: "bottom 15%",
      toggleActions: "play reverse restart reset",
    }
  })

  gsap.from('.footer', 2, {
    opacity: 0,
    x: "100%", 
    ease: bO,
    scrollTrigger: {
      trigger: ".footer",
      start: "top bottom",
      end: "bottom 15%",
      toggleActions: "play reverse restart reset",
    }
  })
});
