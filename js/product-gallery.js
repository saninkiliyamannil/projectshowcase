// Change main product image when thumbnail is clicked
function changeMainImage(mainImageId, newSrc) {
  document.getElementById(mainImageId).src = newSrc;
  
  // Add active class to clicked thumbnail
  const thumbnails = document.querySelectorAll('.thumbnail-strip img');
  thumbnails.forEach(thumb => {
    thumb.classList.remove('active-thumbnail');
    if (thumb.src === newSrc) {
      thumb.classList.add('active-thumbnail');
    }
  });
}

// Initialize product galleries
document.addEventListener('DOMContentLoaded', function() {
  // Set first thumbnail as active by default
  const thumbnailStrips = document.querySelectorAll('.thumbnail-strip');
  thumbnailStrips.forEach(strip => {
    if (strip.firstElementChild) {
      strip.firstElementChild.classList.add('active-thumbnail');
    }
  });
  
  // Add touch event support for mobile swipe
  if ('ontouchstart' in window) {
    const mainImages = document.querySelectorAll('.main-image img');
    mainImages.forEach(img => {
      let touchStartX = 0;
      let touchEndX = 0;
      
      img.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
      }, false);
      
      img.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe(img, touchStartX, touchEndX);
      }, false);
    });
  }
});

function handleSwipe(imgElement, startX, endX) {
  const threshold = 50; // Minimum swipe distance
  
  if (startX - endX > threshold) {
    // Swipe left - next image
    navigateGallery(imgElement, 'next');
  } else if (endX - startX > threshold) {
    // Swipe right - previous image
    navigateGallery(imgElement, 'prev');
  }
}

function navigateGallery(imgElement, direction) {
  const gallery = imgElement.closest('.product-gallery');
  if (!gallery) return;
  
  const thumbnails = gallery.querySelectorAll('.thumbnail-strip img');
  const currentIndex = Array.from(thumbnails).findIndex(thumb => 
    thumb.classList.contains('active-thumbnail')
  );
  
  if (currentIndex === -1) return;
  
  let newIndex;
  if (direction === 'next') {
    newIndex = (currentIndex + 1) % thumbnails.length;
  } else {
    newIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
  }
  
  const newThumb = thumbnails[newIndex];
  changeMainImage(imgElement.id, newThumb.src);
}
