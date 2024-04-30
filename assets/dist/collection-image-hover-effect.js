/**
 * Centralize element selection to reduce DOM queries
 */
const container = document.querySelector('.collection__items');
const links = document.querySelectorAll('.collection__link');
const preview = document.querySelector('.collection__preview');
const previewImage = preview.querySelector('.preview__image');
const cmsImages = document.querySelectorAll('[data-img="product-img"]');
const imageUrls = Array.from(cmsImages, img => img.src); // Create an array from image sources

/**
 * Function to handle mouse-related effects
 */
const setupMouseEffects = () => {
  let targetX = 0,
    targetY = 0;
  let currentX = 0,
    currentY = 0;
  const speed = 0.1;

  document.addEventListener('mousemove', event => {
    targetX = event.clientX + window.scrollX;
    targetY = event.clientY + window.scrollY;
  });

  const animate = () => {
    currentX += (targetX - currentX) * speed;
    currentY += (targetY - currentY) * speed;
    preview.style.left = (currentX - preview.offsetWidth / 2) + 'px';
    preview.style.top = (currentY - preview.offsetHeight / 2) + 'px';
    requestAnimationFrame(animate);
  };

  animate();
};

/**
 * Function to manage hover effects for links and preview display
 */
const setupHoverEffects = () => {
  container.addEventListener('mouseover', event => {
    if (event.target.classList.contains('collection__link')) {
      const index = Array.from(links).indexOf(event.target);
      if (index !== -1) {
        previewImage.src = imageUrls[index];
        preview.style.opacity = '1';
        // Add 'hovering' class to all links except the one being hovered
        Array.from(links).forEach((link, idx) => {
          if (idx !== index) link.style.opacity = '0.6';
        });
      }
    }
  });

  container.addEventListener('mouseout', event => {
    if (event.target.classList.contains('collection__link')) {
      preview.style.opacity = '0';
      // Remove the 'hovering' effect by resetting opacity
      Array.from(links).forEach(link => {
        link.style.opacity = '1';
      });
    }
  });
};

/**
 * Initial setup function to organize the setup calls
 */
const setupEffects = () => {
  setupMouseEffects();
  setupHoverEffects();
};

setupEffects();
