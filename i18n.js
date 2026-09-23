const languageSwitch = document.querySelector('.language-switch');
const languageButtons = languageSwitch.querySelectorAll('button[data-lang]');
const description = document.querySelector('meta[name="description"]');

const pageMetadata = {
  es: { title: document.title, description: description.content },
  en: {
    title: 'Jesús Magdaleno | Software, automation and computer vision',
    description: 'Portfolio of Jesús Magdaleno. Biomedical engineering, studies in Systems Engineering and a master’s in Information and Communication Technologies; projects in Python, automation and computer vision.',
  },
};

// Spanish remains in the HTML so the page is readable when JavaScript is unavailable.
const englishCopy = {
  '.skip-link': 'Skip to content',
  '.main-nav a[href="#inicio"]': '<span>01</span> Opening',
  '.main-nav a[href="#trayectoria"]': '<span>02</span> Background',
  '.main-nav a[href="#proyectos"]': '<span>03</span> Projects',
  '.main-nav a[href="#habilidades"]': '<span>04</span> Practice',
  '.main-nav a[href="#contacto"]': '<span>05</span> Contact',
  '.rail-note': 'PORTFOLIO<br>SELECTED WORK · 2026',
  '.opening-topline span:last-child': 'SOFTWARE DEVELOPMENT · APPLIED AI',
  '.portrait figcaption': '<span>FIG. 01</span> Engineering, healthcare and technology',
  '.opening-copy .folio-label': '01 / OPENING',
  '#opening-title': 'From real problems <em>to software that works.</em>',
  '.opening-lead': 'I build tools with Python, automation and computer vision to turn images, data and processes into useful solutions.',
  '.opening-note': 'I am Jesús Magdaleno. My path combines biomedical engineering with studies in systems and information technology.',
  '.opening-actions a:first-child': 'Explore projects <span aria-hidden="true">↗</span>',
  '.opening-actions a:nth-child(2)': 'View GitHub <span aria-hidden="true">↗</span>',
  '.opening-actions .cv-download': 'Download CV · Spanish PDF <span aria-hidden="true">↓</span>',
  '.opening-bottomline span:nth-child(1)': 'COMPUTER VISION',
  '.opening-bottomline span:nth-child(2)': 'AUTOMATION',
  '.opening-bottomline span:nth-child(3)': 'APPLICATIONS',
  '.opening-bottomline span:nth-child(4)': 'DATA',
  '.chapter-intro .folio-label': '02 / BACKGROUND',
  '#education-title': 'The education behind the work.',
  '.chapter-intro > p:last-child': 'Clinical context, software engineering and technology research come together in my projects.',
  '.education-entry:nth-child(1) .entry-state': 'PROFESSIONAL FOUNDATION',
  '.education-entry:nth-child(1) h3': 'Biomedical Engineering',
  '.education-entry:nth-child(1) p:last-child': 'A way to approach healthcare problems, equipment, images and data with technical rigor.',
  '.education-entry:nth-child(2) .entry-state': 'IN PROGRESS',
  '.education-entry:nth-child(2) h3': 'Systems Engineering',
  '.education-entry:nth-child(2) p:last-child': 'Software development, data structures and building complete solutions.',
  '.education-entry:nth-child(3) .entry-state': 'IN PROGRESS',
  '.education-entry:nth-child(3) h3': 'Master’s in Information and Communication Technologies',
  '.education-entry:nth-child(3) p:last-child': 'Research and applied technology for solving real problems.',
  '.work-heading .folio-label': '03 / SELECTED WORK',
  '#work-title': 'Four projects.<br><em>Four banners.</em>',
  '.work-heading > p:last-child': 'Selected projects that show different ways of observing, building and automating.',
  '.project-banner:nth-child(1) .banner-type': 'BANNER I · COMPUTER VISION',
  '.project-banner:nth-child(1) h3': 'SAM AI: diabetic retinopathy and OCT',
  '.project-banner:nth-child(1) .banner-story > p:nth-of-type(2)': 'Two retinal image workflows: DDR2019 fundus photographs and OCT B-scans. They cover data preparation, training, evaluation and explainability.',
  '.project-banner:nth-child(1) .banner-tools': 'Python · PyTorch · deep learning · medical imaging',
  '.project-banner:nth-child(2) .banner-type': 'BANNER II · AUTOMATION',
  '.project-banner:nth-child(2) h3': 'Service Report Generator',
  '.project-banner:nth-child(2) .banner-story > p:nth-of-type(2)': 'A desktop application that turns equipment records and photographs into individual and consolidated Word reports.',
  '.project-banner:nth-child(3) .banner-type': 'BANNER III · DESKTOP APPLICATION',
  '.project-banner:nth-child(3) .banner-story > p:nth-of-type(2)': 'A desktop interface and browser automation that reduce repetitive steps in an internal invoice submission process.',
  '.project-banner:nth-child(4) .banner-type': 'BANNER IV · BACKEND',
  '.project-banner:nth-child(4) .banner-story > p:nth-of-type(2)': 'A REST API that organizes images, tasks and annotations for classification workflows, using PostgreSQL and file storage.',
  '.project-banner:nth-child(1) .banner-story a': 'View project <span aria-hidden="true">↗</span>',
  '.project-banner:nth-child(2) .banner-story a': 'View project <span aria-hidden="true">↗</span>',
  '.project-banner:nth-child(3) .banner-story a': 'View project <span aria-hidden="true">↗</span>',
  '.project-banner:nth-child(4) .banner-story a': 'View project <span aria-hidden="true">↗</span>',
  '.project-banner:nth-child(1) .banner-story a:nth-of-type(2)': 'Case study <span aria-hidden="true">↗</span>',
  '.project-banner:nth-child(1) .banner-story a:nth-of-type(3)': 'OCT results <span aria-hidden="true">↗</span>',
  '.project-banner:nth-child(2) .banner-story a:nth-of-type(2)': 'Case study <span aria-hidden="true">↗</span>',
  '.project-banner:nth-child(2) .banner-story a:nth-of-type(3)': 'Reproducible example <span aria-hidden="true">↗</span>',
  '.project-banner:nth-child(3) .banner-story a:nth-of-type(2)': 'Case study <span aria-hidden="true">↗</span>',
  '.project-banner:nth-child(4) .banner-story a:nth-of-type(2)': 'Case study <span aria-hidden="true">↗</span>',
  '.project-banner:nth-child(4) .banner-story a:nth-of-type(3)': 'API example <span aria-hidden="true">↗</span>',
  '.craft-intro .folio-label': '04 / PRACTICE',
  '#craft-title': 'Tools I use to build.',
  '.craft-intro > p:last-child': 'I choose the technology to fit the problem and document the process so the work can be reproduced.',
  '.craft-list > div:nth-child(1) h3': 'Images and models',
  '.craft-list > div:nth-child(1) p': 'PyTorch · scikit-learn · image processing · model evaluation',
  '.craft-list > div:nth-child(2) h3': 'Processes and applications',
  '.craft-list > div:nth-child(2) p': 'Python · Selenium · PyQt5 · Tkinter · XML · document generation',
  '.craft-list > div:nth-child(3) h3': 'Backend and data',
  '.craft-list > div:nth-child(3) p': 'Ruby on Rails · REST APIs · PostgreSQL · SQL · Git',
  '.craft-list > div:nth-child(4) h3': 'How I work',
  '.craft-list > div:nth-child(4) p': 'Problem analysis · documentation · technical communication · continuous learning',
  '.credentials .folio-label': 'MARGINAL NOTES',
  '#credentials-title': 'Always learning.',
  '.credential-line:nth-of-type(1) span:last-child': 'Queries and relational data',
  '.credential-line:nth-of-type(2) span:last-child': 'Python, SQL and problem solving',
  '.credential-line:nth-of-type(3) span:last-child': 'Fundamentals and application development',
  '.interlude-heading .folio-label': 'INTERLUDE / BEYOND CODE',
  '#interlude-title': 'Between systems <em>and stories.</em>',
  '.interlude-copy p:nth-child(1)': 'I am Jesús Magdaleno: a biomedical engineer studying Systems Engineering and a master’s in Information and Communication Technologies. My projects bring together medical imaging, automation and tools for practical needs.',
  '.interlude-copy p:nth-child(2)': 'Outside of software, I spend time writing my book, reading and training at the gym.',
  '.colophon .folio-label': '05 / CONTACT',
  '#contact-title': 'The next story <em>we can build together.</em>',
  '.colophon > p:not(.folio-label)': 'I am open to opportunities in software development, automation and applied AI.',
  '.contact-links a:first-child': 'Email me <span aria-hidden="true">↗</span>',
  '.contact-links a:last-child': 'Download CV · Spanish PDF <span aria-hidden="true">↓</span>',
  '.site-footer a': 'Back to top ↑',
};

const localizedElements = Object.entries(englishCopy).map(([selector, english]) => {
  const element = document.querySelector(selector);
  if (!element) throw new Error(`Missing translation target: ${selector}`);
  return { element, spanish: element.innerHTML, english };
});

function setLanguage(language, updateAddress = false) {
  const active = language === 'en' ? 'en' : 'es';
  localizedElements.forEach(({ element, spanish, english }) => {
    element.innerHTML = active === 'en' ? english : spanish;
  });
  document.documentElement.lang = active;
  document.title = pageMetadata[active].title;
  description.content = pageMetadata[active].description;
  document.querySelector('.brand').setAttribute('aria-label', active === 'en' ? 'Go to top' : 'Ir al inicio');
  document.querySelector('.portrait img').alt = active === 'en' ? 'Portrait of Jesús Magdaleno' : 'Retrato de Jesús Magdaleno';
  document.querySelector('.main-nav').setAttribute('aria-label', active === 'en' ? 'Main navigation' : 'Navegación principal');
  document.querySelector('.education-path').setAttribute('aria-label', active === 'en' ? 'Academic background' : 'Formación académica');
  languageSwitch.setAttribute('aria-label', active === 'en' ? 'Site language' : 'Idioma del sitio');
  languageButtons.forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.lang === active));
    button.setAttribute('aria-label', active === 'en'
      ? (button.dataset.lang === 'en' ? 'Show in English' : 'Switch to Spanish')
      : (button.dataset.lang === 'en' ? 'Mostrar en inglés' : 'Mostrar en español'));
  });
  updateMenuLabel();

  try { localStorage.setItem('portfolio-language', active); } catch { /* Storage may be disabled. */ }
  if (updateAddress) {
    const url = new URL(window.location.href);
    if (active === 'en') url.searchParams.set('lang', 'en');
    else url.searchParams.delete('lang');
    window.history.replaceState(null, '', url);
  }
}

function initialLanguage() {
  const requested = new URL(window.location.href).searchParams.get('lang');
  if (requested === 'es' || requested === 'en') return requested;
  try { return localStorage.getItem('portfolio-language') === 'en' ? 'en' : 'es'; } catch { return 'es'; }
}

languageButtons.forEach((button) => {
  button.addEventListener('click', () => setLanguage(button.dataset.lang, true));
});

setLanguage(initialLanguage());
