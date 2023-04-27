/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
const sections = document.querySelectorAll('section');
/**
 * End Global Variables
 * Start Helper Functions
 *
 */

// Checks if an element is in the viewport or not
const isInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
const buildNavigationMenu = () => {
  const listContainer = document.querySelector('#navbar__list');
  console.log(listContainer);
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < sections.length; ++i) {
    const item = document.createElement('li');
    const link = document.createElement('a');
    link.classList = 'menu__link';
    link.href = `#${sections[i].id}`;
    link.addEventListener('click', (e) => {
      const activeSection = document.querySelector('.your-active-class');
      if (activeSection.isSameNode(section)) return;
      activeSection.classList.remove('your-active-class');
      sections[i].classList.add('your-active-class');
    });
    const textNode = document.createTextNode(sections[i].dataset.nav);
    link.appendChild(textNode);
    item.appendChild(link);
    fragment.appendChild(item);
  }
  listContainer.appendChild(fragment);
};
/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
buildNavigationMenu();

// Set sections as active
// Add class 'active' to section when near top of viewport
document.addEventListener('scroll', () => {
  sections.forEach((section) => {
    if (isInViewport(section)) {
      const activeSection = document.querySelector('.your-active-class');
      if (activeSection.isSameNode(section)) return;
      activeSection.classList.remove('your-active-class');
      section.classList.add('your-active-class');
    }
  });
});
