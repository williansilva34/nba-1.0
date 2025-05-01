

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "h1",
      start: "top 19%",
      end: "bottom center",
      scrub: 1,
      markers: true
    }
  });
  
  tl.to(".tit2",
    {
      color:"orange",
   
    
    
  })
  
  