const tlFruit = gsap
  .timeline({
    repeat: -1,
    yoyo: true
  })

  .to(".redApple", { scale: 1.25, ease: "linear", duration: 0.5, delay: 0.25 })
  .to(".pizza", { scale: 1.25, ease: "linear", duration: 0.5, delay: 0.25 })
  .to(".celery", { scale: 1.25, ease: "linear", duration: 0.5, delay: 0.25 })
  .to(".strawberry", {
    scale: 1.25,
    ease: "linear",
    duration: 0.5,
    delay: 0.25
  })
  .to(".burger", { scale: 1.25, ease: "linear", duration: 0.5, delay: 0.25 })
  .to(".watermelon", {
    scale: 1.25,
    ease: "linear",
    duration: 0.5,
    delay: 0.25
  })
  .to(".wing", { scale: 1.25, ease: "linear", duration: 0.5, delay: 0.25 })
  .to(".grappe", { scale: 1.25, ease: "linear", duration: 0.5, delay: 0.25 })
  .to(".greenApple", {
    scale: 1.25,
    ease: "linear",
    duration: 0.5,
    delay: 0.25
  });

gsap.registerPlugin(ScrollTrigger);

gsap.to("#idForm", {
  scrollTrigger: {
    markers: true,
    start: "top 75%",
    end: "bottom 25%",
    toggleActions: "play complete play reverse",
    trigger: "#idForm"
  },
  opacity: 1,
  delay: 1
});

gsap.to(".formBody", {
  scrollTrigger: {
    scrub: 0.3,
    toggleActions: "play complete play reverse",
    trigger: ".formBody"
  },
  backgroundColor: "#efefef"
});

gsap.to(".crayon", {
  scrollTrigger: {
    scrub: 0.3,
    toggleActions: "play complete play reverse",
    trigger: ".crayon"
  },
  x: "100%"
});
