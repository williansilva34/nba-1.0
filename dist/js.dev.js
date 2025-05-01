"use strict";

gsap.registerPlugin(ScrollTrigger);
var tl = gsap.timeline({
  scrollTrigger: {
    trigger: "h1",
    start: "top 50%",
    end: "bottom center",
    scrub: 1,
    markers: true
  }
});
tl.to("h1", {
  y: 50,
  color: "orange"
});