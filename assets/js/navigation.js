document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav-link")) {
    console.log(e.target.getBoundingClientRect());
    const id = e.target.getAttribute("href");
    document
      .querySelector(id)
      .scrollIntoView({ behavior: "smooth", block: "start" });
  }
});
