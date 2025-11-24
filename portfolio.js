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
  tags: ["HTML", "CSS", "JavaScript", "LocalStorage"],
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

const themeKey = "theme";

window.onload = function () {
    let body = document.body; // hanya ada satu body
    let tombol = document.getElementById("toggle-mode");

    function setMode(mode) {
        if (mode === "dark") {
            body.classList.add("dark");
            localStorage.setItem(themeKey, "dark");
        } else {
            body.classList.remove("dark");
            localStorage.setItem(themeKey, "light");
        }
    }

    tombol.addEventListener("click", function () {
        const isDark = body.classList.contains("dark");

        if (isDark) {
            setMode("light");
        } else {
            setMode("dark");
        }
    });

    const mode = localStorage.getItem(themeKey);
    if (mode === "dark") {
        setMode("dark");
    } else {
        setMode("light");
    }
};