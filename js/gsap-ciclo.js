// Fibra
const ciclofibra = gsap.timeline({
  scrollTrigger: {
    trigger: '.ciclo_aux_fibra',  
    start: 'top center',  
    end: 'bottom center',      
    scrub: true,    
    markers: false, 
  },
});
// Fibra
	document.addEventListener("DOMContentLoaded", function () {
	  ciclofibra.to('#imagek0,#imagek1,#imagek2, #imagek3, #imagek4, #imagek5, #imagek6', {
	    backgroundImage: 'url(./img/ciclo/fibra.png)'
	  });
	});
	ciclofibra.to('.textPath-rotor', {
		fill: '#fff', 
		opacity:'.25'
	},'<');
	ciclofibra.to('#textpath-fibra', {
		opacity:'1'
	},'<');
	ciclofibra.to('#section_ciclo', {
		backgroundColor: '#1f4a4f'
	});
	ciclofibra.to('#k_circle_dashed', {
		borderColor: 'var(--lima)'
	});
	ciclofibra.to('#cicloh2', {
		color: '#cde35f'
	}, '<');
	ciclofibra.to('#ciclop', {
		color: '#fff'
	}, '<');
	ciclofibra.to('#ciclop2', {
		color: '#fff'
	}, '<');
	ciclofibra.to('#slice1, #slice2, #slice3', {
		height: '100%',
		backgroundColor:'#cde35f',
		top:'0%'
	}, '<');
	ciclofibra.to('#k_circle_1', {
		borderColor: 'rgba(31, 74, 79)',
		opacity:'.76',
		borderWidth:'40px'
	}, '<');
	ciclofibra.to('#k_circle_2', {
		visibility: 'visible',
		borderColor:'rgba(31, 74, 79)'
	}, '<');
	ciclofibra.from('#k_circle_F3', {
		width: '82%',
		height: '82%',
		opacity: '1',
		borderColor: 'rgba(212, 236, 107)',
		top: '9%',
		left: '9%',
		zIndex: '600',
	}, '<');
	ciclofibra.to('#k_circle_F3', {
		width: '82%',
		height: '82%',
		opacity: '1',
		borderColor: 'rgba(212, 236, 107)',
		top: '9%',
		left: '9%',
		zIndex: '600',
	}, '<');
	ciclofibra.from('#k_circle_4', {
		width: '94%',
		height: '94%',
		top: '3%',
		left: '3%',
		visibility: 'visible',
		borderColor: 'rgba(212,236,107)',
	}, '<');
	ciclofibra.to('#k_circle_4', {
		width: '94%',
		height: '94%',
		top: '3%',
		left: '3%',
		visibility: 'visible',
		borderColor: 'rgba(212,236,107)',
	}, '<');
	ciclofibra.to('#cuadro1, #cuadro2', {
		visibility:'visible',
	}, '<');
	ciclofibra.to('#k_rotor,#rotor_aux_div', {
		rotate: '30deg',
	},'<');

// Diseño
const ciclodis = gsap.timeline({
  scrollTrigger: {
    trigger: '.ciclo_aux_dis',  
    start: 'top center',  
    end: 'bottom center',      
    scrub: true,    
    markers: false, 
  },
});
// Diseño
	document.addEventListener("DOMContentLoaded", function () {
	  ciclodis.to('#imagek0,#imagek1,#imagek2, #imagek3, #imagek4, #imagek5, #imagek6', {
	    backgroundImage: 'url(./img/ciclo/diseño.png)'
	  });
	});

	ciclodis.to('#imagek1,#imagek2, #imagek3, #imagek4', {
		backgroundImage: 'url(./img/ciclo/diseño.png)'
	});
	ciclodis.to('.section_ciclo', {
		backgroundColor: '#4444db'
	},'<');
	ciclodis.to('.textPath-rotor', {
		fill: '#fff', 
		opacity:'.25'
	},'<');
	ciclodis.to('#textpath-dis', {
		opacity:'1'
	},'<');
	ciclodis.to('#k_circle_dashed', {
		borderColor: 'var(--lima)'
	});
	ciclodis.to('.textPath-rotor', {
		fill: '#fff'
	},'<');
	ciclodis.to('#k_circle_F3', {
		backgroundColor: 'rgba(212, 236, 107)',
		opacity:'.6', 
		borderColor: 'rgba(212, 236, 107)', 
		width:'88%',
		height:'88%',
		top:'6%', 
		left:'6%',
		zIndex:'0',
	}, '<');
	ciclodis.to('#cicloh2', {
		color: '#cde35f'
	}, '<');
	ciclodis.to('#ciclop', {
		color: '#fff'
	}, '<');
	ciclodis.to('#ciclop2', {
		color: '#fff'
	}, '<');
	ciclodis.to('#slice1, #slice2, #slice3', {
		height: '95%',
		top:'2.5%', 
		backgroundColor:'#cde35f',
	});
	ciclodis.to('#k_circle_1', {
		borderColor: 'rgba(212, 236, 107)',
		opacity: '.36', 
		borderWidth: '35px',
	}, '<');
	ciclodis.to('#k_circle_2', {
		opacity: '0',
	}, '<');


	ciclodis.to('#k_circle_4', {
		borderColor: 'rgba(212,236,107)', 
		width:'90%',
		height:'90%',
		top:'5%', 
		left:'5%',
	}, '<');

	ciclodis.to('#cuadro1, #cuadro2', {
		visibility:'hidden'
	}, '<');
	ciclodis.to('#k_rotor,#rotor_aux_div', {
		rotate: '-30deg',
	},'<');
	

// Manufactura
const ciclomanufactura = gsap.timeline({
  scrollTrigger: {
    trigger: '.ciclo_aux_manufactura',  
    start: 'top center',  
    end: 'bottom center',      
    scrub: true,    
    markers: false, 
  },
});
// Manufactura
	document.addEventListener("DOMContentLoaded", function () {
	  ciclomanufactura.to('#imagek0,#imagek1,#imagek2, #imagek3, #imagek4, #imagek5, #imagek6', {
	    backgroundImage: 'url(./img/ciclo/manufactura.png)'
	  });
	});
	ciclomanufactura.to('.section_ciclo', {
		backgroundColor: '#d4ec6b'
	});
	ciclomanufactura.to('.textPath-rotor', {
		fill: '#2c4c51', 
		opacity:'.25'
	},'<');
	ciclomanufactura.to('#textpath-manufactura', {
		opacity:'1'
	},'<');
	ciclomanufactura.to('#cicloh2', {
		color: '#1f4a4f'
	}, '<');
	ciclomanufactura.to('#ciclop', {
		color: '#1f4a4f'
	}, '<');
	ciclomanufactura.to('#k_circle_dashed', {
		borderColor: '#2c4c51'
	});
	ciclomanufactura.to('#ciclop2', {
		color: '#1f4a4f'
	}, '<');
	ciclomanufactura.to('#slice1, #slice2, #slice3', {
		height: '95%',
		top:'2.5%', 
		backgroundColor:'rgba(44,76,81,.36)',
	});
	ciclomanufactura.to('#k_circle_1', {
		borderColor: '#1f4a4f',
		opacity: '.36', 
		borderWidth: '1px',
	}, '<');
	ciclomanufactura.to('#k_circle_2', {
		opacity: '0',
	}, '<');
	ciclomanufactura.to('#k_circle_F3', {
		backgroundColor: 'rgba(31, 74, 79)',
		opacity:'.4', 
		borderColor: 'rgba(212, 236, 107)', 
		width:'88%',
		height:'88%',
		top:'6%', 
		left:'6%',
		zIndex:'0',
	}, '<');

	ciclomanufactura.to('#k_circle_4', {
		borderColor: 'rgba(31,74,79,.4)', 
		width:'86%',
		height:'86%',
		top:'7%', 
		left:'7%',
	}, '<');
	
	ciclomanufactura.to('#k_rotor,#rotor_aux_div', {
		rotate: '-88deg',
	},'<');

// Logística
const ciclologistica = gsap.timeline({
  scrollTrigger: {
    trigger: '.ciclo_aux_logistica',  
    start: 'top center',  
    end: 'bottom center',      
    scrub: true,    
    markers: false, 
  },
});
// Logística
	document.addEventListener("DOMContentLoaded", function () {
	  ciclologistica.to('#imagek0,#imagek1,#imagek2, #imagek3, #imagek4, #imagek5, #imagek6', {
	    backgroundImage: 'url(./img/ciclo/logistica.png)'
	  });
	});
	ciclologistica.to('.section_ciclo', {
		backgroundColor: '#ddd9d6'
	}, '<');
	ciclologistica.to('#cicloh2', {
		color: '#1f4a4f'
	}, '<');
	ciclologistica.to('.textPath-rotor', {
		fill: '#2c4c51', 
		opacity:'.25'
	},'<');
	ciclologistica.to('#textpath-logistica', {
		opacity:'1'
	},'<');
	ciclologistica.to('#k_circle_dashed', {
		borderColor: '#2c4c51'
	},'<');
	ciclologistica.to('#ciclop', {
		color: '#1f4a4f'
	}, '<');
	ciclologistica.to('#ciclop2', {
		color: '#1f4a4f'
	}, '<');
	ciclologistica.to('#slice1, #slice2, #slice3', {
		height: '95%',
		top:'2.5%', 
		backgroundColor:'rgba(44,76,81,.36)',
	});
	ciclologistica.to('#k_circle_1', {
		borderColor: 'rgba(68,68,219)',
		opacity: '.36', 
		borderWidth: '35px',
	}, '<');
	ciclologistica.to('#k_circle_2', {
		opacity: '0',
	}, '<');
	ciclologistica.to('#k_circle_F3', {
		backgroundColor: 'rgba(68, 68, 219)',
		opacity:'.8', 
		borderColor: 'rgba(68, 68, 219)', 
		width:'88%',
		height:'88%',
		top:'6%', 
		left:'6%',
		zIndex:'0',
	}, '<');

	ciclologistica.to('#k_circle_4', {
		opacity:'0'
	}, '<');
	ciclologistica.to('#k_rotor,#rotor_aux_div', {
		rotate: '-142deg',
	},'<');

// Uso
const ciclouso = gsap.timeline({
  scrollTrigger: {
    trigger: '.ciclo_aux_uso',  
    start: 'top center',  
    end: 'bottom center',      
    scrub: true,    
    markers: false, 
  },
});
// Uso
	document.addEventListener("DOMContentLoaded", function () {
	  ciclouso.to('#imagek0,#imagek1,#imagek2, #imagek3, #imagek4, #imagek5, #imagek6', {
	    backgroundImage: 'url(./img/ciclo/uso.png)'
	  });
	});
	ciclouso.to('.section_ciclo', {
		backgroundColor: '#df7e57'
	},'<');
	ciclouso.to('#cicloh2', {
		color: '#cde35f'
	}, '<');
	ciclouso.to('.textPath-rotor', {
		fill: '#fff', 
		opacity:'.25'
	},'<');
	ciclouso.to('#textpath-uso', {
		opacity:'1'
	},'<');
	ciclouso.to('#k_circle_dashed', {
		borderColor: '#fff'
	},'<');
	ciclouso.to('#ciclop', {
		color: '#fff'
	}, '<');
	ciclouso.to('#ciclop2', {
		color: '#fff'
	}, '<');
	ciclouso.to('#slice1, #slice2, #slice3', {
		height: '95%',
		top:'2.5%', 
		backgroundColor:'rgba(44,76,81,.36)',
	});
	ciclouso.to('#k_circle_1', {
		borderColor: 'rgba(212, 236, 107)',
		opacity: '.36', 
		borderWidth: '35px',
	}, '<');
	ciclouso.to('#k_circle_2', {
		opacity: '0',
	}, '<');
	ciclouso.to('#k_circle_F3', {
		backgroundColor: 'rgba(212, 236, 107)',
		opacity:'.76', 
		borderColor: 'rgba(44,76,81,.36)', 
		width:'88%',
		height:'88%',
		top:'6%', 
		left:'6%',
		zIndex:'0',
	}, '<');

	ciclouso.to('#k_circle_4', {
		width: '88%',
	    height: '88%',
	    top: '7%',
	    left: '7%',
	    visibility: 'visible',
	    borderColor: 'rgba(44, 76, 81,.36)',
	}, '<');
	ciclouso.to('#k_rotor,#rotor_aux_div', {
		rotate: '-210deg',
	},'<');

// Nueva Vida
const ciclonuevavida = gsap.timeline({
  scrollTrigger: {
    trigger: '.ciclo_aux_nuevavida',  
    start: 'top center',  
    end: 'bottom center',      
    scrub: true,    
    markers: false, 
  },
});
// Nueva vida
	document.addEventListener("DOMContentLoaded", function () {
	  ciclonuevavida.to('#imagek0,#imagek1,#imagek2, #imagek3, #imagek4, #imagek5, #imagek6', {
	    backgroundImage: 'url(./img/ciclo/nueva_vida.png)'
	  });
	});
	ciclonuevavida.to('.section_ciclo', {
		backgroundColor: '#5a75cd'
	});
	ciclonuevavida.to('.textPath-rotor', {
		fill: '#fff', 
		opacity:'.25'
	},'<');
	ciclonuevavida.to('#textpath-nuevavida', {
		opacity:'1'
	},'<');
	ciclonuevavida.to('#cicloh2', {
		color: '#cde35f'
	}, '<');
	ciclonuevavida.to('#ciclop', {
		color: '#fff'
	}, '<');
	ciclonuevavida.to('#k_circle_dashed', {
		borderColor: '#fff'
	},'<');
	ciclonuevavida.to('#ciclop2', {
		color: '#fff'
	}, '<');
	ciclonuevavida.to('#slice1, #slice2, #slice3', {
		height: '95%',
		top:'2.5%', 
		backgroundColor:'rgba(44,76,81,.36)',
	});
	ciclonuevavida.to('#k_circle_1', {
		borderColor: 'rgba(68,68,219)',
		opacity: '.36', 
		borderWidth: '35px',
	}, '<');
	ciclonuevavida.to('#k_circle_2', {
		opacity: '0',
	}, '<');
	ciclonuevavida.to('#k_circle_F3', {
		backgroundColor: 'rgba(68, 68, 219)',
		opacity:'.7', 
		borderColor: 'transparent', 
		width:'88%',
		height:'88%',
		top:'6%', 
		left:'6%',
		zIndex:'0',
	}, '<');

	ciclonuevavida.to('#k_circle_4', {
		width: '86%',
	    height: '86%',
	    top: '7%',
	    left: '7%',
	    visibility: 'visible',
	    borderColor: 'rgba(44, 76, 81)',
	}, '<');
	ciclonuevavida.to('#k_rotor,#rotor_aux_div', {
		rotate: '-265deg',
	},'<');