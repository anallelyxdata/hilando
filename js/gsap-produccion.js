// Fibra
const prodMano = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_prod1',  
    start: 'bottom bottom',  
    end: 'bottom center',      
    scrub: true,    
    markers: false, 
  },
});
// Fibra
prodMano.to('.produccion-mano', {
  left: '0'
},'<');
prodMano.to('.produccion1_img_vertical', {
  height: '70%'
});

// Fondo
const prodFondoHilo = gsap.timeline({
  scrollTrigger: {
    trigger: '.section_produccion',  
    start: 'top top',  
    end: 'top 10%',      
    scrub: true,    
    markers: false, 
  },
});
// Fibra
prodFondoHilo.to('.produccion1_fondo', {
  opacity: '1'
},'<');

// grafica
const prodD3 = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_prod2',  
    start: 'top center',  
    end: 'bottom center',      
    scrub: true,    
    markers: false, 
  },
});
// Fibra
prodD3.to('.produccion_grafica', {
  opacity:'1'
},'<');
prodD3.to('.artificial', {
  opacity:'1'
},'<');
prodD3.to('.natural', {
  opacity:'1'
},'<');


const prodManoSube = gsap.timeline({
  scrollTrigger: {
    trigger: '.produccion2_texto_p',  
    start: 'bottom bottom',  
    end: 'top center',      
    scrub: true,    
    markers: false, 
  },
});
prodManoSube.to('.produccion1_texto', {
  top: '-50%'
});
prodManoSube.to('.produccion-mano', {
  left: '-35%'
},'<');
prodManoSube.to('.produccion1_fondo', {
  top: '-100%'
},'<');


// grafica
const prod25 = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_prod25',  
    start: 'top center',  
    end: 'bottom center',      
    scrub: true,    
    markers: false, 
  },
});
// Fibra
prod25.to('#produccion-texto2', {
  opacity:'0'
}, '<');
prod25.to('#momento', {
  opacity:'0'
}, '<');



// Fibras artificiales
const prodArtTexto = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_prod3',  
    start: 'top center',  
    end: 'bottom center',      
    scrub: true,    
    markers: false, 
  },
});
prodArtTexto.to('#produccion-texto3', {
  opacity:'1',
}, '<');
prodArtTexto.to('.artificial', {
  opacity:'1'
}, '<');

  
// Fibras artificiales
const prodArtTextoD = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_prod4',  
    start: 'top bottom',  
    end: 'top center',      
    scrub: true,    
    markers: false, 
  },
});
prodArtTextoD.to('#produccion-texto3', {
  opacity:'0',
});

const prodNatTexto = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_prod4',  
    start: 'bottom center',  
    end: 'bottom top',      
    scrub: true,    
    markers: false, 
  },
});

prodNatTexto.to('#produccion-texto4', {
  opacity:'1',
});

// Callback function to execute GSAP animation after D3.js operation
function executeGSAPAnimation() {
  prodArtTexto.to('path.line-0', {
    opacity: '1'
  }, '<');
  prodArtTexto.to('.path', {
  transitionDuration:'3000'
}, '<');
  prodNatTexto.to('path.line-1', {
    opacity: '1'
  }, '<');
}

function executeGSAPAnimationCircle() {
  prodArtTexto.to('g:nth-child(5) > circle', {
    opacity: '1'
  }, '<');
  prodNatTexto.to('g:nth-child(6) > circle', {
    opacity: '1'
  }, '<');
}

// Mano hilos
const prodManoHilo1 = gsap.timeline({
  scrollTrigger: {
    trigger: '.p3_auxManos',  
    start: 'top bottom',  
    end: 'bottom top',      
    scrub: true,    
    markers: false, 
  },
});
prodManoHilo1.to('.produccion3_mano_izq', {
  left:'0',
});
prodManoHilo1.to('.produccion3_mano_der', {
  right:'0',
},'<');
prodManoHilo1.to('.prod3_hilo1', {
  width:'82%',
});
prodManoHilo1.to('.prod3_hilo2', {
  width:'78%',
});
prodManoHilo1.to('.prod3_hilo3', {
  width:'80%',
});
prodManoHilo1.to('.prod3_hilo4', {
  width:'97%',
});
prodManoHilo1.to('.prod3_hilo5', {
  width:'91%',
});

const prodTabla = gsap.timeline({
  scrollTrigger: {
    trigger: '.p3_aux1',  
    start: 'top center',  
    end: 'bottom top',      
    scrub: true,    
    markers: false, 
  },
});
prodTabla.to('.produccion3-millones', {
  opacity:'1',
});
prodTabla.to('.td-poliester', {
  opacity:'1',
});
prodTabla.to('.td-algodon', {
  opacity:'1',
});
prodTabla.to('.td-non-cotton', {
  opacity:'1',
});
prodTabla.to('.td-poliamida', {
  opacity:'1',
});
prodTabla.to('.td-lana', {
  opacity:'1',
});
prodTabla.to('.td-cam', {
  opacity:'1',
});

const prodEnergia = gsap.timeline({
  scrollTrigger: {
    trigger: '.p3_aux2',  
    start: 'top center',  
    end: 'bottom center',      
    scrub: true,    
    markers: false, 
  },
});
prodEnergia.to('#tr-energia', {
  opacity:'1',
  borderBottom:'1px dashed rgba(255, 255, 255, .6)'
});

const prodAgua = gsap.timeline({
  scrollTrigger: {
    trigger: '.p3_aux3',  
    start: 'top center',  
    end: 'bottom center',      
    scrub: true,    
    markers: false, 
  },
});
prodAgua.to('#tr-agua', {
  opacity:'1',
  borderBottom:'1px dashed rgba(255, 255, 255, .6)'
});

const prodCO2 = gsap.timeline({
  scrollTrigger: {
    trigger: '.p3_aux4',  
    start: 'top center',  
    end: 'bottom center',      
    scrub: true,    
    markers: false, 
  },
});
prodCO2.to('#tr-co2', {
  opacity:'1',
});

const prod4 = gsap.timeline({
  scrollTrigger: {
    trigger: '.produccion4',  
    start: 'top center',  
    end: 'top top',      
    scrub: true,    
    markers: false, 
  },
});
prod4.to('.produccion4_hilo1', {
  left:'0',
});
prod4.to('.produccion4_hilo2', {
  right:'-5%',
});