
  const carousel = document.getElementById('carousel');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const slides = document.querySelectorAll('.slide');

  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  const closeBtn = document.querySelector('.modal .close');

  const scrollAmount = 250; // lebar per slide + padding

  prevBtn.addEventListener('click', () => {
    carousel.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth',
    });
  });

  nextBtn.addEventListener('click', () => {
    carousel.scrollBy({
      left: scrollAmount,
      behavior: 'smooth',
    });
  });

  // Modal show on click
  slides.forEach(slide => {
    slide.addEventListener('click', () => {
      const src = slide.getAttribute('data-src');
      modalImg.src = src;
      modal.classList.remove('hidden');
    });
  });

  // Close modal
  closeBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
    modalImg.src = '';
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.add('hidden');
      modalImg.src = '';
    }
  });

