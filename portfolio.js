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
  card.className = "card";

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
