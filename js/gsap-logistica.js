// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSRulePlugin);

// Create a GSAP timeline with the animation
const log1 = gsap.timeline({
scrollTrigger: {
  trigger: '.logistica1',  
  start: 'top top', 
  // end: 'top 5%',      
  scrub: true,    
  markers: true, 
  pin:true
},
});
// Add animations to the timeline
log1.to('.logistica1', {
  backgroundPosition:'0% 0%'
});
log1.to('.log1_titulo', {
  opacity:'1'
});
log1.to('.logistica1 p', {
  opacity:'1'
});

var spinBefore = CSSRulePlugin.getRule(".spin::before"); //get the rule
var spinAfter = CSSRulePlugin.getRule(".spin::after"); //get the rule

const log2 = gsap.timeline({
scrollTrigger: {
  trigger: '.logistica2-pin',  
  start: 'top top',
  // end: 'top top',
  scrub: true,    
  markers: true, 
  pin:true
},
});
log2.to(spinBefore, {
  borderTopColor: 'var(--azul)',
  borderRightColor: 'var(--azul)',
  borderBottomColor: 'var(--azul)',
  delay:4
});
log2.to(spinAfter, {
  borderTop: '2px dashed var(--azul)',
  borderLeftWidth: '2px',
  borderRightWidth: '2px',
  rotate: '270deg',
  ease: 'linear',
}, '<');
log2.to('.log2_transportes', {
  animationName:'grow2',
},'<'); 
log2.to('.log2_transporte_tren img, .log2_transporte_tren p', {
  opacity:1,
  delay:4
});
log2.to('.log2_transporte_camion img, .log2_transporte_camion p', {
  opacity:1,
},'<'); 
log2.to('.log2_transporte_barco img, .log2_transporte_barco p', {
  opacity:1,
},'<'); 
log2.to('.log2_transporte_avion img, .log2_transporte_avion p', {
  opacity:1,
},'<'); 
log2.to('.log_p_uso', {
  opacity:1,
  delay:4
}); 

const log21 = gsap.timeline({
scrollTrigger: {
  trigger: '.logistica2-pin',  
  start: 'top bottom',
  end: 'top center',
  scrub: true,    
  markers: true, 
  // pin:true
},
});
log21.to('.logistica2_titulo', {
  transform:'translateY(150px)'
});
const log22 = gsap.timeline({
scrollTrigger: {
  trigger: '.logistica2-pin',  
  start: 'top center',
  end: 'top top',
  scrub: true,    
  markers: true, 
  // pin:true
},
});
log22.to('.logistica2_titulo', {
  animationName:'moveUp',
  transform:'translateY(0)'
});

const log3 = gsap.timeline({
scrollTrigger: {
  trigger: '.logistica3',  
  start: 'top top', 
  // end: 'top 5%',      
  scrub: true,    
  markers: true, 
  pin:true
},
});
// Add animations to the timeline
log3.to('.log3_fondo_fabrica', {
  bottom:'0'
});
log3.to('.log_indicadores', {
  opacity:'1', 
  delay:4
});
log3.to('.log_energia', {
  opacity:'1', 
  delay:4
});
log3.to('.log_emision', {
  opacity:'1', 
  delay:4
});

const log4 = gsap.timeline({
scrollTrigger: {
  trigger: '.logistica4',  
  start: 'top top',
  scrub: true,    
  markers: true, 
  pin:true
},
});
log4.to('.log4_playeras_img', {
 left:'240%'
});

const log41 = gsap.timeline({
scrollTrigger: {
  trigger: '.logistica4',  
  start: 'top bottom',
  end: 'top center',
  scrub: true,    
  markers: true, 
  // pin:true
},
});
log41.to('.log4_texto', {
  transform:'translateY(150px)'
});
const log42 = gsap.timeline({
scrollTrigger: {
  trigger: '.logistica4',  
  start: 'top center',
  end: 'top top',
  scrub: true,    
  markers: true, 
  // pin:true
},
});
log42.to('.log4_texto', {
  animationName:'moveUp',
  transform:'translateY(0)'
});

// log 5
  const log5 = gsap.timeline({
  scrollTrigger: {
    trigger: '.logistica5',  
    start: 'top top',
    scrub: true,    
    markers: true, 
    pin:true
  },
  });
  log5.to('.ruta_internacional', {
   opacity:'1'
  });
  log5.to('.ruta_int_img', {
   opacity:'1'
  });
  log5.fromTo('#log_path1', { strokeDashoffset: 3000 }, { strokeDashoffset: 0 });
  log5.fromTo('#log_path2', { strokeDashoffset: 3000 }, { strokeDashoffset: 0 });
  log5.to('.ruta_internacional_timeline', {
   opacity:'1'
  });
  log5.to('.timeline_p_texas', {
   opacity:'1'
  });
  log5.to('.timeline_p_china', {
   opacity:'1'
  });
  log5.to('.timeline_p_ban', {
   opacity:'1'
  });
  log5.to('.timeline_p_china2', {
   opacity:'1'
  });
  log5.to('.timeline_p_sanf', {
   opacity:'1'
  });

  log5.to('.ruta_internacional, #log_path1, #log_path2, .ruta_internacional_timeline', {
   opacity:'0'
  });

  log5.to('.ruta_int_img', {
    backgroundColor:'transparent',
    borderColor:'transparent'
  });
  log5.to('.ruta_int_img', {
    overflow:'visible',
    borderRadius:0,
  });
  log5.to('.ruta_int_img', {
   transform:'scale(1.8) translateX(-20%) translateY(10%)',
   zIndex:'0'
  });
  log5.to('.log56', {
   opacity:'1'
  });
  log5.to('.log6_ejemplo', {
   opacity:'1'
  });
  log5.to('.log6_ejemplo', {
   opacity:'1'
  });
  log5.to('.log6_barco', {
   left:'1%'
  });
  log5.to('.log6_cotas', {
   bottom:'0'
  });

  // Texas
  log5.to('.ruta_int_img', {
   transform:'scale(5) translateX(6%) translateY(.5%)',
  });
  log5.to('.texas', {
   opacity:'1'
  });
  log5.to('.ruta_int_img', {
    transform:'scale(1.8) translateX(-20%) translateY(10%)',
  });
  log5.to('.linea_pin_verde', {
   opacity:'1'
  });

  // China 1
  log5.to('.linea_pin_naranja', {
   opacity:'1'
  });
  log5.to('.ruta_int_img', {
   transform:'scale(5) translateX(-50%) translateY(2%)',
  });
  log5.to('.linea_pin_verde, .texas', {
   opacity:'0'
  },'<');
  log5.to('.shandong1', {
   opacity:'1'
  });


  // Bangladesh
  log5.to('.linea_pin_d2', {
   opacity:'1'
  });
  log5.to('.bangladesh', {
   opacity:'1'
  });

  // China 2
  log5.to('.linea_pin_d1', {
   opacity:'1'
  });
  log5.to('.ruta_int_img', {
   transform:'scale(5) translateX(-50%) translateY(2%)',
  });
  log5.to('.shandong2', {
   opacity:'1'
  });
  log5.to('.ruta_int_img', {
    transform:'scale(1.8) translateX(-20%) translateY(10%)',
  });
  log5.to('.linea_pin_verde, .texas', {
   opacity:'1'
  },'<');
  log5.to('.linea_pin_azul', {
   opacity:'1'
  });


  log5.to('.linea_pin_blanco', {
   opacity:'1'
  });
  log5.to('.ruta_int_img', {
   transform:'scale(5) translateX(6%) translateY(.5%)',
  });
  log5.to('.shandong1, .shandong2, .bangladesh, .linea_pin_verde, .linea_pin_azul, .linea_pin_naranja, .linea_pin_d1, .linea_pin_d2', {
   opacity:'0'
  },'<');
  log5.to('.sanfr', {
   opacity:'1'
  });

  log5.to('.ruta_int_img', {
    transform:'scale(1.8) translateX(-20%) translateY(10%)',
  });
  log5.to('.shandong1, .shandong2, .bangladesh, .linea_pin_verde, .linea_pin_azul, .linea_pin_naranja, .linea_pin_d1, .linea_pin_d2', {
   opacity:'1'
  },'<');


// log7
  const log7 = gsap.timeline({
  scrollTrigger: {
    trigger: '.logistica7',  
    start: 'top top',
    scrub: true,    
    markers: true, 
    pin:true
  },
  });
  log7.to('.ruta_internacionalN', {
   opacity:'1'
  });
  log7.to('.ruta_int_imgN', {
   opacity:'1'
  });
  log7.fromTo('#log_path1N', { strokeDashoffset: 3000 }, { strokeDashoffset: 0 });
  log7.fromTo('#log_path2N', { strokeDashoffset: 3000 }, { strokeDashoffset: 0 });
  log7.to('.ruta_internacional_timelineN', {
   opacity:'1'
  });
  log7.to('.timeline_p_tepito', {
   opacity:'1'
  });
  log7.to('.timeline_p_centro', {
   opacity:'1'
  });
  log7.to('.timeline_p_iztapalapa', {
   opacity:'1'
  });
  log7.to('.timeline_p_insurgentes', {
   opacity:'1'
  });


  log7.to('.ruta_internacionalN, #log_path1N, #log_path2N, .ruta_internacional_timelineN', {
   opacity:'0'
  });
  log7.to('.ruta_int_imgN', {
    backgroundColor:'transparent',
    borderColor:'transparent'
  });
  log7.to('.ruta_int_imgN', {
    overflow:'visible',
    borderRadius:0,
  });

  log7.to('.ruta_int_imgN', {
   transform:'scale(7) translateX(2%) translateY(20%)',
   zIndex:'0'
  });
   log7.to('.ruta_int_img_imgN', {
   opacity:'0'
  },'<');
  log7.to('.logistica8', {
   opacity:'1'
  });
  log7.to('.log8_ejemplo', {
   opacity:'1'
  });
  log7.to('.log8_auto', {
   left:'35%'
  });
  log7.to('.log8_cotas', {
  right:'10%'
  });
  log7.to('.tepito', {
    opacity:'1'
  });
  log7.fromTo('#log8_path1', { strokeDashoffset: 3000, duration:4 }, { strokeDashoffset: 0, duration:4 });
  log7.to('.centro', {
    opacity:'1'
  });
  log7.fromTo('#log8_path2', { strokeDashoffset: 3000, duration:4 }, { strokeDashoffset: 0, duration:4 });
  log7.to('.iztapalapa', {
    opacity:'1'
  });
  log7.fromTo('#log8_path3', { strokeDashoffset: 3000, duration:4 }, { strokeDashoffset: 0, duration:4 });
  log7.to('.insurgentes', {
    opacity:'1'
  });
