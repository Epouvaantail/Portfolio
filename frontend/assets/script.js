/* ---------------------------------------------------------------------------------- */

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/* ---------------------------------------------------------------------------------- */

clock();

function clock() {
  const date = new Date();
  const hours = ((date.getHours() + 11) % 12 + 1);
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const hour = hours * 30;
  const minute = minutes * 6;
  const second = seconds * 6;
  
  document.querySelector('.heure').style.transform = `rotate(${hour}deg)`;
  document.querySelector('.minute').style.transform = `rotate(${minute}deg)`;
  document.querySelector('.seconde').style.transform = `rotate(${second}deg)`;
}

setInterval(clock, 1000);

/* ---------------------------------------------------------------------------------- */

const projects = fetch('./assets/projects.json',{ method:'get'})
.then(projects => {
  if(!projects.ok) {
    throw new Error('Erreur de chargement des projects');
  }
  return projects.json();
})
.then(data => {
	const projects = document.querySelector('.projects');
    for (let d in data) {
      function generate(data) {
        for (let d in data){
          projects.insertAdjacentHTML('beforeend', `
            <div class="project reveal" id="${data[d].id}">
              <img src="${data[d].imageUrl}" alt="${data[d].title}">
                <div class="description">
                  <p>${data[d].description}</p>
			            <div class="projectFooter">
			              <button onClick="window.location.href = '${data[d].code}'" class="github-code slide">
		  	                <img src="./assets/images/logo/github-mark.png" alt="logo-github"/>
		                    Voir le code
				            </button>
				            <button onClick="window.location.href = '${data[d].site}/'" class="site slide">
                      Voir le site
			              </button>
		              </div>
				        </div>
                <ul class="langTools"> ${data[d].languages} </ul>
            </div>
            <hr>`
          )
        }
      }
    };
  generate(data)

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 50;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      }
      else {
        reveals[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll", reveal);
  reveal();
})
.catch(error => {
  console.error(error)
})


/* ---------------------------------------------------------------------------------- */

function lightDark() {

  var body = document.body;
  var lightDark = document.querySelector('.lightDark');
  var sunMoon = document.querySelector('.lightDark img')
  var a = document.querySelectorAll('#a');

  body.classList.toggle("dark-mode");
  lightDark.classList.toggle("dark-mode");

  if (lightDark.innerHTML === 'Light') {
    lightDark.innerHTML = 'Dark'

    for(var i=0; i < a.length; i++) {
      a[i].style.color = 'white';
    }
  }
  else if (lightDark.innerHTML === 'Dark') {
    lightDark.innerHTML = 'Light'

    for(var i=0; i < a.length; i++) {
      a[i].style.color = 'black';
    }
  }

  var v = sunMoon.getAttribute("src");
  if (v === "./assets/images/logo/sun.png") {
    v =  "./assets/images/logo/moon.png";
    sunMoon.style.filter = 'invert(100%)';
    sunMoon.setAttribute("src", v);
  }
  else if (v === "./assets/images/logo/moon.png") {
    v =  "./assets/images/logo/sun.png";
    sunMoon.style.filter = 'invert(0%)';
    sunMoon.setAttribute("src", v);
  }

}

/* ---------------------------------------------------------------------------------- */

function hover(x) {
  x.style.color = "darkred";
}

function noHover(x) {
  x.style.color = "inherit";
}

/* ---------------------------------------------------------------------------------- */

function copyText() {
  /* Copy text into clipboard */
  navigator.clipboard.writeText
      ("coutouzis.kilian@gmail.com");
  // text to confirm that is copied to the clipboard
  var btn = document.querySelector("#email-btn");
  btn.insertAdjacentHTML("beforebegin", 
  '<div class="copy" ><p>copy to the clipboard</p></div>');
  setTimeout('document.querySelector(".copy").remove(".copy")',1500)
}