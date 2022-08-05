const container = document.querySelector(".container");
const button = document.querySelectorAll(".nav-links li a");
const content = document.querySelectorAll(".content");

container.addEventListener("click", function (e) {
  //   console.log(e.target.dataset.id);
  const id = e.target.dataset.id;
  if (id) {
    button.forEach((btn) => {
      btn.classList.remove("active");
    });

    e.target.classList.add("active");

    content.forEach((element) => {
      element.classList.remove("content-active");
    });

    const contentActive = document.getElementById(id);

    contentActive.classList.add("content-active");
  }
});
