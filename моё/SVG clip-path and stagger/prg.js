
let tl = gsap
  .timeline({
    delay: 1,
    repeat: -1,
    defaults: { duration: 1.1, stagger: 0.15, ease: "power1.inOut" }
  })
  .from("rect", { attr: { y: 0 } })
  .to("rect", { attr: { y: 360 } });
