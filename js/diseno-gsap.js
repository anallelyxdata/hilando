// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);


// Create a GSAP timeline with the animation
const pensar = gsap.timeline({
  scrollTrigger: {
    trigger: '.dis_aux01',  
    start: 'top center',  
    scrub: true,    
     markers: false,
  },
});
pensar.fromTo('#animatedPath1', { strokeDashoffset: 3000}, { strokeDashoffset: 0});
pensar.to('.dis1_variedad', {
  color:'#fff'
});

// Create a GSAP timeline with the animation
const dis1 = gsap.timeline({
  scrollTrigger: {
    trigger: '.dis_aux1',  
    start: 'top bottom',  
    scrub: true,    
     markers: false,
  },
});
dis1.fromTo('#animatedPath2', { strokeDashoffset: 3000 }, { strokeDashoffset: 0 });
dis1.to('.dis2_texto', {
  opacity:1
});

// Create a GSAP timeline with the animation
const dis2 = gsap.timeline({
  scrollTrigger: {
    trigger: '.dis_aux2',  
    start: 'top top',  
    scrub: true,    
     markers: false,
  },
});
dis2.fromTo('#animatedPath3', { strokeDashoffset: 3000 }, { strokeDashoffset: 0});
dis2.to('.dis3_texto', {
  opacity:1
});

// Create a GSAP timeline with the animation
const dis3 = gsap.timeline({
  scrollTrigger: {
    trigger: '.dis_aux2',  
    start: 'top bottom',  
    scrub: true,    
     markers: false,
  },
});
dis3.fromTo('#animatedPath3', { strokeDashoffset: 3000 }, { strokeDashoffset: 0, duration: 2 });



// Create a GSAP timeline with the animation
const dis4 = gsap.timeline({
  scrollTrigger: {
    trigger: '.dis_aux3',  
    start: 'top center',  
    scrub: true,    
     markers: false,
  },
});
dis4.fromTo('#animatedPath4', { strokeDashoffset: 3000 }, { strokeDashoffset: 0, duration: 2 });
dis4.to('.dis4_texto', {
  opacity:1
});

// Create a GSAP timeline with the animation
const dis5 = gsap.timeline({
  scrollTrigger: {
    trigger: '.dis_aux4',  
    start: 'top center',  
    scrub: true,    
     markers: false,
  },
});
dis5.fromTo('#animatedPath5', { strokeDashoffset: 3000 }, { strokeDashoffset: 0, duration: 2 });
dis5.to('.dis5_texto', {
  opacity:1
});

// Create a GSAP timeline with the animation
const dis6 = gsap.timeline({
  scrollTrigger: {
    trigger: '.dis_aux5',  
    start: 'top center',  
    scrub: true,    
     markers: false,
  },
});
dis6.fromTo('#animatedPath6', { strokeDashoffset: 3000 }, { strokeDashoffset: 0, duration: 2 });
dis6.to('.dis6_texto', {
  opacity:1
});

// Create a GSAP timeline with the animation
const dis7 = gsap.timeline({
  scrollTrigger: {
    trigger: '.dis_aux6',  
    start: 'top center',  
    scrub: true,    
     markers: false,
  },
});
dis7.fromTo('#animatedPath7', { strokeDashoffset: -3000 }, { strokeDashoffset: 0 },0);
dis7.to('.dis7_texto', {
  opacity:1
},1);

// Create a GSAP timeline with the animation
const dis8 = gsap.timeline({
  scrollTrigger: {
    trigger: '.dis_aux7',  
    start: 'top top',  
    scrub: true,    
     markers: false,
  },
});
dis8.fromTo('#animatedPath8', { strokeDashoffset: 3000 }, { strokeDashoffset: 0 });
dis8.to('.dis8_texto', {
  opacity:1
});
