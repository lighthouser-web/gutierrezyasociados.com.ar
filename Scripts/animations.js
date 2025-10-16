document.addEventListener("DOMContentLoaded", function () {
    // Only modify classes if screen width is more than 996px
    if (window.innerWidth > 996) {
      const servicioItems = document.querySelectorAll('#servicios-texto-ul li');
      const serviciosSections = document.querySelectorAll('section.sub-section-servicios');
      const nosotrosTexts = document.querySelectorAll('#section-nosotros-nosotros');
      const sectionFAQ = document.querySelectorAll('#section-preguntas-frecuentes');

      servicioItems.forEach(item => {
        item.classList.remove('fade-in-element');
        item.classList.add('moving-text');
      });

      serviciosSections.forEach(section => {
        // Remove 'fade-in-element' from all matching children inside this section
        const movingTexts = section.querySelectorAll('.fade-in-element');
        movingTexts.forEach(el => {
          el.classList.remove('fade-in-element');
        });
      });

      nosotrosTexts.forEach(section => {
        // Remove 'fade-in-element' from all matching children inside this section
        const movingTexts = section.querySelectorAll('.fade-in-element');
        movingTexts.forEach(el => {
          el.classList.remove('fade-in-element');
        });
      });

      serviciosSections.forEach(item => {
        item.classList.remove('fade-in-element');
        item.classList.add('moving-text');
      });

      sectionFAQ.forEach(section => {
        // Remove 'fade-in-element' from all matching children inside this section
        const movingTexts = section.querySelectorAll('.fade-in-element');
        movingTexts.forEach(el => {
          el.classList.remove('fade-in-element');
        });
      });
    }
  
    const movingTexts = document.querySelectorAll('.moving-text');
    const movingTextsSlow = document.querySelectorAll('.moving-text-slow');
    const fadeInElements = document.querySelectorAll('.fade-in-element');
    const fadeInElementsH1 = document.querySelectorAll('.fade-in-element-h1');
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.01 });
  
    movingTexts.forEach(element => {
      observer.observe(element);
    });
  
    movingTextsSlow.forEach(element => {
      observer.observe(element);
    });
  
    fadeInElements.forEach(element => {
      observer.observe(element);
    });
  
    fadeInElementsH1.forEach(element => {
      observer.observe(element);
    });
  });
  