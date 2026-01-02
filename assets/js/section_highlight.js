document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('section h2[id]');
  const navLinks = document.querySelectorAll('header a[href^="#"]');
  
  if (sections.length === 0 || navLinks.length === 0) return;
  
  const sectionToLink = new Map();
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href && href.startsWith('#')) {
      const sectionId = href.substring(1);
      sectionToLink.set(sectionId, link);
    }
  });
  
  function highlightCurrentSection() {
    let currentSection = null;
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (scrollPosition >= sectionTop) {
        currentSection = section;
      }
    });
    
    navLinks.forEach(link => link.classList.remove('active-section'));
    
    if (currentSection) {
      const currentLink = sectionToLink.get(currentSection.id);
      if (currentLink) {
        currentLink.classList.add('active-section');
      }
    }
  }
  
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      this.blur();
      setTimeout(highlightCurrentSection, 100);
    });
  });
  
  let ticking = false;
  window.addEventListener('scroll', function() {
    if (!ticking) {
      window.requestAnimationFrame(function() {
        highlightCurrentSection();
        ticking = false;
      });
      ticking = true;
    }
  });
  
  highlightCurrentSection();
});
