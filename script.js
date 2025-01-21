const hamburg = document.getElementById("hamburg");
  const menu = document.querySelector(".menu");

  hamburg.addEventListener("click", () => {
    // Toggle the visibility of the menu
    menu.classList.toggle("hidden");

    // Change the hamburger to a cross
    if (menu.classList.contains("hidden")) {
      hamburg.innerHTML = `
        <div class="h-[1.7px] w-5 bg-black"></div>
        <div class="h-[1.5px] w-5 bg-black"></div>
        <div class="h-[1.7px] w-5 bg-black"></div>
      `;
    } else {
      hamburg.innerHTML = `
        <div class="w-5 h-[1.7px] bg-black rotate-45 translate-y-[6px]"></div>
        <div class="w-5 h-[1.7px] bg-black -rotate-45"></div>
      `;
    }
  });