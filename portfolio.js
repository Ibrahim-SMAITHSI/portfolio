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
      "This is a simple interactive project, which is built using JavaScript to calculate Zakat and the data will be stored in LocalStorage.",
    image: "img/kalkulator-zakat.png",
    tags: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    link: "https://github.com/Ibrahim-SMAITHSI/Kalkulator-zakat-emas/tree/main/kalkulator%20zakat%20emas",
  },
  {
    title: "Kalkulator ",
    description:
      "This is my first interactive project, which is built using JavaScript to enable live calculation logic directly in the browser.",
    image: "img/kalkulator.png",
    tags: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    link: "https://github.com/Ibrahim-SMAITHSI/Kalkulator-zakat-emas/tree/main/form-js-html/Calcuator",
  },
  {
    title: "Lampu merah",
    description:
      "This is a simple traffic light simulation created to understand fundamental programming concepts using JavaScript.",
    image: "img/lampu-merah.png",
    tags: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    link: "https://github.com/Ibrahim-SMAITHSI/Kalkulator-zakat-emas/tree/main/lampu-lalu-lintas",
  },
  {
    title: "English Language",
    description:
    "This is my English project, where during this first semester I have made two posters about vocabulary and grammar, and one short movie video.",
    image: "img/english.png",
    link: "https://drive.google.com/drive/folders/1PT2VnfH-8a66nuhREJzRSsvkAftA1ZO1?usp=drive_link",
    tags: ["English", "Poster Design", "Video Editing"]
  },
  {
    title: "Nahwu",
    description:
    "This is my Nahwu project. During this first semester, I have learned how to I'rob on the Quran. I have also created one I'rob Al-Quran poster and one I'rob video.",
    image: "img/kitab.png",
    link: "https://drive.google.com/drive/folders/1tH0J0XSGepiMP9MEumQRHXGOLgZCZSf6?usp=drive_link",
    tags: ["Nahwu", "I'rob", "Poster Design", "Video I'rob"]
  },
  {
    title: "Fotographer",
    description:
    "This is a project I added myself. It is about my hobby, which is photography, and I have captured many good photos.",
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
