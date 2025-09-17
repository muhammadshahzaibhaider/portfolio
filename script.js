// --- Initializations ---
var typed = new Typed('#element', {
  strings: ['Web Development', 'Video Editor', 'Graphic Designer'],
  typeSpeed: 50,
  backSpeed: 30,
  loop: true,
});

AOS.init({
  duration: 1200, // Duration of the animation in milliseconds
});

// --- Smooth Scrolling for Navigation Links ---
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-right ul li a');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      if (this.hash !== "") {
        e.preventDefault();
        const targetSection = document.querySelector(this.hash);
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    });
  });
});

// --- Dynamic Modal Functionality for Services ---
document.addEventListener('DOMContentLoaded', function() {
  // Data for each service to be displayed in the modal
  const servicesData = {
    'web-dev-modal': {
      title: 'Web Development Services',
      image: 'webdevelopment.png', // Replace with a more relevant image if you have one
      description: 'I specialize in building responsive and dynamic websites from scratch using modern web technologies. My services include:',
      list: [
        'Front-End Development: Crafting user-friendly interfaces with HTML, CSS, and JavaScript.',
        'Back-End Development: Building server-side logic and APIs with Node.js, Python, or PHP.',
        'Full-Stack Solutions: Developing end-to-end applications from database design to front-end implementation.',
        'CMS Integration: Customizing and managing websites on platforms like WordPress and Shopify.'
      ]
    },
    'ui-ux-modal': {
      title: 'UI/UX Design Services',
      image: 'uiux.png', // Placeholder
      description: 'I focus on creating intuitive and visually appealing user interfaces and experiences. My services include:',
      list: [
        'User Research & Analysis: Understanding user needs and behaviors.',
        'Wireframing & Prototyping: Creating low-fidelity to high-fidelity mockups.',
        'Visual Design: Developing style guides, color palettes, and typography.',
        'Usability Testing: Ensuring the final product is easy and enjoyable to use.'
      ]
    },
    'graphic-design-modal': {
      title: 'Graphic Design Services',
      image: 'graphic.png', // Placeholder
      description: 'I design compelling visuals that effectively communicate your brand\'s message. My services include:',
      list: [
        'Logo Design: Creating unique and memorable brand identities.',
        'Branding & Stationery: Designing business cards, letterheads, and other branded materials.',
        'Marketing Materials: Crafting brochures, flyers, and social media graphics.',
        'Digital Art: Creating custom illustrations and digital artwork.'
      ]
    },
    'seo-modal': {
      title: 'Search Engine Optimization (SEO) Services',
      image: 'seo.png', // Placeholder
      description: 'I help improve your website\'s ranking and visibility on search engines. My services include:',
      list: [
        'Keyword Research: Identifying the best keywords for your business.',
        'On-Page SEO: Optimizing content, titles, and meta descriptions.',
        'Technical SEO: Improving site speed, mobile-friendliness, and site architecture.',
        'Local SEO: Enhancing your presence in local search results.'
      ]
    },
    'video-editing-modal': {
      title: 'Video Editing Services',
      image: 'video editing.png', // Placeholder
      description: 'I transform raw footage into professional and engaging video content. My services include:',
      list: [
        'Trimming & Cutting: Removing unnecessary footage.',
        'Color Correction & Grading: Enhancing the visual quality.',
        'Audio Mixing & Sound Design: Improving sound quality and adding effects.',
        'Motion Graphics & Transitions: Creating dynamic visual elements.'
      ]
    },
    'wordpress-modal': {
      title: 'WordPress Development Services',
      image: 'wordpress.png', // Placeholder
      description: 'I build and maintain custom WordPress websites tailored to your needs. My services include:',
      list: [
        'Theme Customization: Modifying existing themes to fit your brand.',
        'Plugin Development: Creating custom plugins for specific functionality.',
        'Site Migration: Moving your website to a new host or domain.',
        'Maintenance & Support: Keeping your site secure, updated, and running smoothly.'
      ]
    },
  };

  const serviceCards = document.querySelectorAll('.service-card');
  const modal = document.getElementById('modal');
  const closeBtn = document.querySelector('.close-btn');
  const modalHeading = modal.querySelector('.modal-heading');
  const modalImage = modal.querySelector('.modal-image');
  const modalDescription = modal.querySelector('.modal-body p');
  const modalList = modal.querySelector('.modal-body ul');

  // Loop through each service card to add a click event listener
  serviceCards.forEach(card => {
    card.addEventListener('click', function() {
      const modalId = this.getAttribute('data-modal-target');
      const data = servicesData[modalId];

      if (data) {
        // Populate the modal with the correct content from the data object
        modalHeading.textContent = data.title;
        modalImage.src = data.image;
        modalImage.alt = data.title;
        modalDescription.textContent = data.description;

        // Clear previous list items and add new ones
        modalList.innerHTML = '';
        data.list.forEach(item => {
          const li = document.createElement('li');
          li.textContent = item;
          modalList.appendChild(li);
        });

        // Display the modal
        modal.style.display = 'block';
      }
    });
  });

  // When the user clicks on (x), close the modal
  closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
  });

  // When the user clicks anywhere outside of the modal, close it
  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});