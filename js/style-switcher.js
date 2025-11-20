/* ===== toggle Style Switcher ===== */ 
const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");
const styleSwitcher = document.querySelector(".style-switcher");

styleSwitcherToggler.addEventListener("click", () => {
  if (navTogglerBtn.classList.contains("open")) {
    aside.classList.remove("open");
    navTogglerBtn.classList.remove("open");
  }
  styleSwitcher.classList.toggle("open");
})

/* ===== hide style - switcher on scroll ===== */ 
window.addEventListener("scroll", () => {
  if (styleSwitcher.classList.contains("open")) {
    styleSwitcher.classList.remove("open");
  }
})


/* ===== theme color ===== */ 
const alternateStyle = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
  localStorage.setItem("color", color);
  changeColor();
  changePokemon(color);

  function changeColor() {
    alternateStyle.forEach((style) => {
      if(localStorage.getItem("color") === style.getAttribute("title")){
        style.removeAttribute("disabled");
      }
      else {
        style.setAttribute("disabled", "true");
      }
    })
  }

  function changePokemon(color) {
    const pokemonMap = {
      'color-1': 'eevee',
      'color-2': 'vaporeon',
      'color-3': 'flareon',
      'color-4': 'leafeon',
      'color-5': 'jolteon'
    };
    const pokemonName = pokemonMap[color];

    // Update logo in aside section
    document.querySelectorAll('#pokemon-logo-container .pokemon-svg').forEach(svg => {
      svg.style.display = 'none';
      svg.classList.remove('active');
    });

    const asideActiveSvg = document.getElementById(`${pokemonName}-svg`);
    if (asideActiveSvg) {
      asideActiveSvg.style.display = 'block';
      asideActiveSvg.classList.add('active');
    }

    // Update logo in home-img section
    document.querySelectorAll('#home-pokemon-logo-container .pokemon-svg').forEach(svg => {
      svg.style.display = 'none';
      svg.classList.remove('active');
    });

    const homeActiveSvg = document.getElementById(`home-${pokemonName}-svg`);
    if (homeActiveSvg) {
      homeActiveSvg.style.display = 'block';
      homeActiveSvg.classList.add('active');
    }
  }

  styleSwitcher.classList.remove("open");
}  


// if (localStorage.getItem("color") === style.getAttribute("title"))
// })

/* ===== theme light and dark mode ===== */ 
const dayNight = document.querySelector(".day-night");

dayNight.addEventListener("click", () => {
  dayNight.querySelector("i").classList.toggle("fa-sun");
  dayNight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark"); 
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark")
  } else {
    localStorage.setItem("theme", "")
  }
})


window.addEventListener("load", () => {
  if (document.body.classList.contains("dark")) {
    dayNight.querySelector("i").classList.add("fa-sun");
  } else {
    dayNight.querySelector("i").classList.add("fa-moon");
  }
})


// Local Storage
function themeSet() {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove('dark')
  }
}
themeSet();


function colorSet() {
  for (let i = 0; i < alternateStyle.length; i++) {
    if (localStorage.getItem('color') === `color-${i+1}`)
    setActiveStyle(`color-${i+1}`)
  }
}
colorSet();