/* menu */
const hamMenu = document.querySelector(".menu-toggle"),
  hamIcon = document.querySelector(".menu-toggle i"),
  menu = document.querySelector(".menu-ul");

hamMenu.addEventListener("click", () => {
  hamIcon.classList.toggle("fa-times");
  menu.classList.toggle("active");
});
/* form */
const formBtn = document.querySelector(".formBtn");

formBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const textInputEl = document.querySelector("#inputText");
  const numberInputEl = document.querySelector("#inputNumber");

  const textInput = textInputEl.value.trim();
  const numberInput = numberInputEl.value.trim();

  const nameRegex = /^[\u0600-\u06FF\s]{3,}$/;
  const phoneRegex = /^0[1-9][0-9]{9}$/;

  if (textInput === "") {
    document.querySelector(".text").innerHTML = `
      <i class="fas fa-exclamation-triangle"></i>
      لطفاً نام و نام خانوادگی را وارد کنید.
    `;
    return;
  }

  if (numberInput === "") {
    document.querySelector(".text").innerHTML = `
      <i class="fas fa-exclamation-triangle"></i>
      لطفاً شماره تماس را وارد کنید.
    `;
    return;
  }

  if (!nameRegex.test(textInput)) {
    document.querySelector(".text").innerHTML = `
      <i class="fas fa-exclamation-triangle"></i>
      لطفا نام و نام خانوادگی خود را به درستی وارد نمایید.
    `;
    return;
  }

  if (!phoneRegex.test(numberInput)) {
    document.querySelector(".text").innerHTML = `
      <i class="fas fa-exclamation-triangle"></i>
      لطفا شماره موبایل خود را به درستی وارد نمایید.
    `;
    return;
  }

  document.querySelector(".text").innerHTML = `
    <i class="fas fa-check"></i>
    ممنون :) مشاورین ما به زودی با شما تماس می‌گیرند.
  `;

  textInputEl.value = "";
  numberInputEl.value = "";
});
/* blog */
const cards = document.querySelectorAll(".cards-container .card");
const pages = document.querySelectorAll(".pagination span");

function showPage(page) {
  cards.forEach((card) => (card.style.display = "none"));

  if (page === 1) {
    for (let i = 0; i < 3; i++) {
      if (cards[i]) cards[i].style.display = "flex";
    }
  } else if (page === 2) {
    for (let i = 3; i < 6; i++) {
      if (cards[i]) cards[i].style.display = "flex";
    }
  } else if (page === 3) {
    for (let i = 6; i < 9; i++) {
      if (cards[i]) cards[i].style.display = "flex";
    }
  }

  pages.forEach((p) => p.classList.remove("active"));
  pages[page - 1].classList.add("active");
}

showPage(1);

pages.forEach((p) => {
  p.addEventListener("click", () => {
    const pageNum = parseInt(p.getAttribute("data-page"));
    showPage(pageNum);
  });
});

