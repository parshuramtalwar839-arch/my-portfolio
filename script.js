// PERSONALISE THIS FILE: replace the sample details with your own.
const skills = [
  "HTML", "CSS", "JavaScript", "Python", "C++"
  // Add any other languages or tools you have learned.
];

const projects = [
  {
    name: "My First Project",
    description: "Write a short description of something you have actually built.",
    link: "https://github.com/parshuramtalwar839-arch"
  },
  {
    name: "Project Two",
    description: "Add another school, practice, or personal project here.",
    link: "https://github.com/parshuramtalwar839-arch"
  },
  {
    name: "Portfolio Website",
    description: "A personal website introducing me and showcasing my work.",
    link: "https://github.com/parshuramtalwar839-arch"
  }
];

const socials = [
  { label: "GitHub", url: "https://github.com/parshuramtalwar839-arch" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/parshuram-talwar-5624a1431" },
  { label: "Email", url: "mailto:your-email@example.com" }
];

document.getElementById("skills-list").innerHTML = skills
  .map(skill => `<span class="skill">${skill}</span>`).join("");

document.getElementById("project-list").innerHTML = projects.map(project => `
  <article class="project-card">
    <h3>${project.name}</h3>
    <p>${project.description}</p>
    <a href="${project.link}" target="_blank" rel="noopener noreferrer">View project ↗</a>
  </article>
`).join("");

document.getElementById("social-links").innerHTML = socials.map(social => `
  <a class="button secondary" href="${social.url}" target="_blank" rel="noopener noreferrer">${social.label} ↗</a>
`).join("");

document.getElementById("year").textContent = new Date().getFullYear();

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#navigation");
menuButton.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});
navigation.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  navigation.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}));
