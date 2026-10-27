/* Behaviour from the source page, ported as its author wrote it. It is

   ordinary site code: edit it here. */

{
const navbar = document.getElementById('navbar');
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIconOpen = document.getElementById('menu-icon-open');
  const menuIconClose = document.getElementById('menu-icon-close');

  function updateNavbar() {
    if (window.scrollY > 30) {
      navbar?.classList.add('bg-[#061633]', 'shadow-[0_4px_20px_rgba(0,0,0,0.3)]');
      navbar?.classList.remove('bg-transparent');
    } else {
      navbar?.classList.remove('bg-[#061633]', 'shadow-[0_4px_20px_rgba(0,0,0,0.3)]');
      navbar?.classList.add('bg-transparent');
    }
  }
  window.addEventListener('scroll', updateNavbar, { passive: true });
  updateNavbar();

  function toggleMenu() {
    const isOpen = !mobileMenu?.classList.contains('hidden');
    if (isOpen) {
      mobileMenu?.classList.add('hidden');
      menuIconOpen?.classList.remove('hidden');
      menuIconClose?.classList.add('hidden');
      mobileMenuButton?.setAttribute('aria-expanded', 'false');
    } else {
      mobileMenu?.classList.remove('hidden');
      menuIconOpen?.classList.add('hidden');
      menuIconClose?.classList.remove('hidden');
      mobileMenuButton?.setAttribute('aria-expanded', 'true');
    }
  }

  mobileMenuButton?.addEventListener('click', toggleMenu);
  mobileMenu?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu?.classList.add('hidden');
      menuIconOpen?.classList.remove('hidden');
      menuIconClose?.classList.add('hidden');
      mobileMenuButton?.setAttribute('aria-expanded', 'false');
    });
  });
}

{
let currentHeroSlide = 0;
  const heroSlides = document.querySelectorAll('.hero-quote-slide');
  const heroDots = document.querySelectorAll('.hero-dot');

  function showHeroSlide(index) {
    heroSlides.forEach((s, i) => {
      s.classList.toggle('hidden', i !== index);
    });
    heroDots.forEach((d, i) => {
      if (i === index) {
        d.classList.remove('bg-white/30');
        d.classList.add('bg-[#C9A840]');
      } else {
        d.classList.remove('bg-[#C9A840]');
        d.classList.add('bg-white/30');
      }
    });
    currentHeroSlide = index;
  }

  heroDots.forEach((dot, idx) => {
    dot.addEventListener('click', () => showHeroSlide(idx));
  });

  setInterval(() => {
    const next = (currentHeroSlide + 1) % heroSlides.length;
    showHeroSlide(next);
  }, 6000);
}