gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".panel");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: 2,
    // snap: 1 / (sections.length - 1),
    end: () => "+=" + document.querySelector(".container").offsetWidth
  }
});

document.querySelector('.dis2_button').addEventListener('mouseover', function() {
    const revealElements = document.querySelectorAll('.dis2_revealp');
    revealElements.forEach(function(element) {
        element.style.opacity = '1';
    });
    document.querySelector('.dis2_button').style.animationName='none'
});

document.querySelector('.dis2_button').addEventListener('mouseout', function() {
    const revealElements = document.querySelectorAll('.dis2_revealp');
    revealElements.forEach(function(element) {
        element.style.opacity = '0';
    });
    document.querySelector('.dis2_button').style.animationName='pulse-animation'
});

document.querySelector('.dis3_button').addEventListener('mouseover', function() {
    const revealElements = document.querySelectorAll('.dis3_revealp');
    revealElements.forEach(function(element) {
        element.style.opacity = '1';
    });
    document.querySelector('.dis3_button').style.animationName='none'
});

document.querySelector('.dis3_button').addEventListener('mouseout', function() {
    const revealElements = document.querySelectorAll('.dis3_revealp');
    revealElements.forEach(function(element) {
        element.style.opacity = '0';
    });
    document.querySelector('.dis3_button').style.animationName='pulse-animation'
});


document.querySelector('.dis3_button2').addEventListener('mouseover', function() {
    document.querySelector('.materiales').style.opacity='1'
});

document.querySelector('.dis3_button2').addEventListener('mouseout', function() {
    document.querySelector('.materiales').style.opacity='0'
});

document.querySelector('.dis4_button1').addEventListener('mouseover', function() {
    document.querySelector('.dis4_col1_reveal').style.opacity='1'
});

document.querySelector('.dis4_button1').addEventListener('mouseout', function() {
    document.querySelector('.dis4_col1_reveal').style.opacity='0'
});

document.querySelector('.dis4_button2').addEventListener('mouseover', function() {
    document.querySelector('.dis4_col2_reveal').style.opacity='1'
});

document.querySelector('.dis4_button2').addEventListener('mouseout', function() {
    document.querySelector('.dis4_col2_reveal').style.opacity='0'
});

document.querySelector('.dis5_button2').addEventListener('mouseover', function() {
    document.querySelector('.dis5_col1_reveal').style.opacity='1'
});

document.querySelector('.dis5_button2').addEventListener('mouseout', function() {
    document.querySelector('.dis5_col1_reveal').style.opacity='0'
});

