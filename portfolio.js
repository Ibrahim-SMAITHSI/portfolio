// Array Object

const project1 = {
  title: "Kalkulator Zakat Emas",
  description:
    "Ini adalah project interaktif pertama saya, yang mana dibuat menggunakan JavaScript untuk  mengaktifkan logika kalkulasi langsung di browser.",
  image: "",
  tags: ["HTML", "CSS", "JavaScript", "LocalStorage"],
  link: "https://github.com/mahirdev/belajar-javascript/zakat-emas",
};

const project2 = {
  title: "Lampu Merah",
  description:
    "Ini adalah simulasi sederhana dari lampu merah yang dibuat untuk memahami konsep dasar pemrograman menggunakan JavaScript.",
  image: "",
  tags: [],
  link: "https://github.com/mahirdev/belajar-javascript/zakat-emas",
};

const projects = [project1, project2];

const projectsLagi = [
  {
    title: "Kalkulator Zakat Emas",
    description:
      "Ini adalah proyek interaktif sederhana yang dibuat menggunakan JavaScript untuk menghitung Zakat, dan datanya akan disimpan di LocalStorage.",
    image: "img/kalkulator-zakat.png",
    tags: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    link: "https://github.com/Ibrahim-SMAITHSI/Kalkulator-zakat-emas/tree/main/kalkulator%20zakat%20emas",
  },
  {
    title: "Kalkulator ",
    description:
      "Ini adalah proyek interaktif pertama saya, yang dibuat menggunakan JavaScript untuk mengaktifkan logika kalkulasi langsung di dalam browser.",
    image: "img/kalkulator.png",
    tags: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    link: "https://github.com/Ibrahim-SMAITHSI/Kalkulator-zakat-emas/tree/main/form-js-html/Calcuator",
  },
  {
    title: "Lampu merah",
    description:
      "Ini adalah simulasi lampu lalu lintas sederhana yang dibuat untuk memahami konsep-konsep dasar pemrograman menggunakan JavaScript",
    image: "img/lampu-merah.png",
    tags: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    link: "https://github.com/Ibrahim-SMAITHSI/Kalkulator-zakat-emas/tree/main/lampu-lalu-lintas",
  },
  {
    title: "English Language",
    description:
      "Ini adalah proyek bahasa Inggris saya, di mana selama semester satu ini saya telah membuat dua poster tentang kosakata (vocabulary) dan tata bahasa (grammar), serta satu video film pendek.",
    image: "img/english.png",
    link: "https://drive.google.com/drive/folders/1PT2VnfH-8a66nuhREJzRSsvkAftA1ZO1?usp=drive_link",
    tags: ["English", "Poster Design", "Video Editing"]
  },
  {
    title: "Nahwu",
    description:
      "Ini adalah proyek Nahwu saya. Selama semester satu ini, saya telah mempelajari cara meng-i'rob Al-Qur'an. Saya juga telah membuat satu poster i'rob Al-Qur'an dan satu video i'rob.",
    image: "img/kitab.png",
    link: "https://drive.google.com/drive/folders/1tH0J0XSGepiMP9MEumQRHXGOLgZCZSf6?usp=drive_link",
    tags: ["Nahwu", "I'rob", "Poster Design", "Video I'rob"]
  },
  {
    title: "Fotographer",
    description:
      "Ini adalah proyek yang saya tambahkan sendiri. Proyek ini tentang hobi saya, yaitu fotografi, dan saya telah mengambil banyak foto yang bagus.",
    image: "img/kamera.png",
    link: "https://drive.google.com/drive/folders/1TL4lKB7GkRL1DNIsEI5i1lKCZW-icOLx?usp=drive_link",
    tags: ["Photography", "Hobby", "Editing"]
  }
];

const gallery = document.getElementById("gallery");

for (let i = 0; i < projectsLagi.length; i++) {
  let project = projectsLagi[i];

  let card = document.createElement("div");
  card.className = "card reveal";

  // --- GAMBAR ---
  if (project.image) {
    let gambar = document.createElement("img");
    gambar.src = project.image;
    gambar.alt = project.title;
    gambar.className = "project-img";
    card.appendChild(gambar);
  }

  // --- KONTENNYA (JUDUL, DESKRIPSI) ---
  let title = document.createElement("h2");
  title.textContent = project.title;

  let description = document.createElement("p");
  description.textContent = project.description;

  let contentDiv = document.createElement("div");
  contentDiv.className = "card-content";
  contentDiv.appendChild(title);


  contentDiv.appendChild(description);
  card.appendChild(contentDiv);

  // --- LINK ---
  let link = document.createElement("a");
  link.href = project.link;
  link.textContent = "Lihat Detail →";
  link.rel = "noopener noreferrer";
  link.className = "project-link";

  card.appendChild(link);

  gallery.appendChild(card);
}

/* ============================================
   FORM VALIDATION & SUBMISSION
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const subjectInput = document.getElementById('subject');
  const messageInput = document.getElementById('message');
  const submitBtn = document.getElementById('submitBtn');
  const successMessage = document.getElementById('successMessage');
  const errorMessage = document.getElementById('errorMessage');
  const errorText = document.getElementById('errorText');
  const charCount = document.getElementById('charCount');

  // Character count for message
  messageInput.addEventListener('input', function() {
    charCount.textContent = this.value.length;
  });

  // Input validation functions
  const validateName = (value) => {
    if (!value.trim()) return 'Name is required';
    if (value.trim().length < 3) return 'Name must be at least 3 characters';
    if (value.trim().length > 50) return 'Name must be less than 50 characters';
    return '';
  };

  const validateEmail = (value) => {
    if (!value.trim()) return 'Email is required';
    const emailRegex = /^[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/i;
    if (!emailRegex.test(value.trim())) return 'Please enter a valid email address';
    return '';
  };

  const validateSubject = (value) => {
    if (value.trim().length > 100) return 'Subject must be less than 100 characters';
    return '';
  };

  const validateMessage = (value) => {
    if (!value.trim()) return 'Message is required';
    if (value.trim().length < 10) return 'Message must be at least 10 characters';
    if (value.trim().length > 1000) return 'Message must be less than 1000 characters';
    return '';
  };

  // Show error for specific field
  const showError = (input, errorElement, message) => {
    if (message) {
      input.classList.add('error');
      errorElement.textContent = message;
    } else {
      input.classList.remove('error');
      errorElement.textContent = '';
    }
  };

  // Real-time validation on input
  nameInput.addEventListener('blur', function() {
    const error = validateName(this.value);
    showError(this, document.getElementById('nameError'), error);
  });

  emailInput.addEventListener('blur', function() {
    const error = validateEmail(this.value);
    showError(this, document.getElementById('emailError'), error);
  });

  subjectInput.addEventListener('blur', function() {
    const error = validateSubject(this.value);
    showError(this, document.getElementById('subjectError'), error);
  });

  messageInput.addEventListener('blur', function() {
    const error = validateMessage(this.value);
    showError(this, document.getElementById('messageError'), error);
  });

  // Form submission
  contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();

    // Clear previous messages
    successMessage.style.display = 'none';
    errorMessage.style.display = 'none';

    // Validate all fields
    const nameError = validateName(nameInput.value);
    const emailError = validateEmail(emailInput.value);
    const subjectError = validateSubject(subjectInput.value);
    const messageError = validateMessage(messageInput.value);

    showError(nameInput, document.getElementById('nameError'), nameError);
    showError(emailInput, document.getElementById('emailError'), emailError);
    showError(subjectInput, document.getElementById('subjectError'), subjectError);
    showError(messageInput, document.getElementById('messageError'), messageError);

    // If there are errors, don't submit
    if (nameError || emailError || subjectError || messageError) {
      errorText.textContent = 'Please fix the errors above';
      errorMessage.style.display = 'flex';
      return;
    }

    // Show loading state
    submitBtn.disabled = true;
    submitBtn.classList.add('loading');

    try {
      // Submit form using Formspree
      const formData = new FormData(contactForm);
      const response = await fetch(contactForm.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        // Success
        successMessage.style.display = 'flex';
        contactForm.reset();
        charCount.textContent = '0';
        
        // Clear error states
        nameInput.classList.remove('error');
        emailInput.classList.remove('error');
        subjectInput.classList.remove('error');
        messageInput.classList.remove('error');
        
        // Scroll to success message
        successMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      } else {
        // Error from server
        errorText.textContent = 'Failed to send message. Please try again.';
        errorMessage.style.display = 'flex';
      }
    } catch (error) {
      // Network error or other error
      errorText.textContent = 'Error sending message. Please check your connection and try again.';
      errorMessage.style.display = 'flex';
      console.error('Form submission error:', error);
    } finally {
      // Remove loading state
      submitBtn.disabled = false;
      submitBtn.classList.remove('loading');
    }
  });
});
window.addEventListener('load', function() {
  const loadingScreen = document.getElementById('loadingScreen');
  
  // Tunggu 2 detik sebelum menghilangkan loading screen
  setTimeout(function() {
    loadingScreen.classList.add('hidden');
  }, 2000);
});

/* ============================================
   TYPING ANIMATION
   ============================================ */
const professions = ['Designer', 'Fotographer', 'Editor', 'Calon Web Development'];
const typingText = document.getElementById('typingText');
let professionIndex = 0;
let charIndex = 0;
let isDeleting = false;
let isPaused = false;

function typeEffect() {
  const current = professions[professionIndex];

  if (isPaused) {
    setTimeout(typeEffect, 1500);
    isPaused = false;
    return;
  }

  if (!isDeleting) {
    typingText.textContent = current.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === current.length) {
      isPaused = true;
      isDeleting = true;
      setTimeout(typeEffect, 2000);
      return;
    }
    setTimeout(typeEffect, 80 + Math.random() * 60);
  } else {
    typingText.textContent = current.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      professionIndex = (professionIndex + 1) % professions.length;
      setTimeout(typeEffect, 400);
      return;
    }
    setTimeout(typeEffect, 40 + Math.random() * 30);
  }
}

document.addEventListener('DOMContentLoaded', function () {
  setTimeout(typeEffect, 1000);
});

/* ============================================
   THEME TOGGLE (DARK / LIGHT)
   ============================================ */
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('i');

if (localStorage.getItem('theme') === 'light') {
  document.body.classList.add('light-theme');
  themeIcon.classList.replace('fa-moon', 'fa-sun');
}

themeToggle.addEventListener('click', function () {
  document.body.classList.toggle('light-theme');
  const isLight = document.body.classList.contains('light-theme');
  themeIcon.classList.replace(isLight ? 'fa-moon' : 'fa-sun', isLight ? 'fa-sun' : 'fa-moon');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
});

/* ============================================
   SCROLL REVEAL ANIMATION
   ============================================ */

// Function untuk check apakah element sudah visible
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85 &&
    rect.bottom >= 0
  );
}

// Function untuk reveal elements
function revealElements() {
  const elementsToReveal = document.querySelectorAll('.reveal:not(.active)');
  
  elementsToReveal.forEach((element, index) => {
    if (isElementInViewport(element)) {
      // Tambah delay untuk stagger effect
      setTimeout(() => {
        element.classList.add('active');
      }, index * 50);
    }
  });
}

// Trigger reveal on scroll with throttling
let scrollTimeout;
window.addEventListener('scroll', function() {
  if (scrollTimeout) {
    window.cancelAnimationFrame(scrollTimeout);
  }
  scrollTimeout = window.requestAnimationFrame(revealElements);
});

// Trigger reveal on load (untuk element yang sudah terlihat di awal)
document.addEventListener('DOMContentLoaded', function() {
  revealElements();
  
  /* ============================================
     NAVBAR ACTIVE LINK ANIMATION
     ============================================ */
  const navLinks = document.querySelectorAll('.nav a');
  
  // Hamburger menu toggle
  const hamburger = document.getElementById('hamburger');
  const nav = document.querySelector('.nav');

  hamburger.addEventListener('click', function () {
    nav.classList.toggle('active');
    const icon = this.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Remove active class dari semua link
      navLinks.forEach(l => l.classList.remove('active'));
      
      // Add active class ke link yang diklik
      this.classList.add('active');

      // Tutup menu hamburger di mobile
      nav.classList.remove('active');
      const icon = hamburger.querySelector('i');
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    });
  });
  
  // Set active link berdasarkan section saat scroll
  window.addEventListener('scroll', function() {
    let current = '';
    
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (scrollY >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      
      // Match href dengan current section
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  });
});
