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

const projects = fetch('https://portfolio-whve.onrender.com/api/project',{ method:'get'})
.then(projects => projects.json())
.then(data => {
	const projects = document.querySelector('.projects');
    for (let d in data) {
      function generate(data) {
        for (let d in data){
          projects.insertAdjacentHTML('beforeend', `
            <div class="project tile" id="${data[d].id}">
              <img src="${data[d].imageUrl}" alt="${data[d].title}">
                <div class="description">
                  <p>${data[d].description}</p>
			            <div>
			              <button onClick="window.location.href = '${data[d].code}'" class="github-code slide">
			                <a id='a' href="${data[d].code}">
		  	                <img src="./assets/images/logo/github-mark.png" alt="logo-github"/>
		                    Voir le code
		                  </a>
				            </button>
				            <button onClick="window.location.href = '${data[d].site}/'" class="site slide">
				              <a id='a' href="${data[d].site}/">Voir le site</a>
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
    console.log(data)
    generate(data)
    
    let elementsArray = document.querySelectorAll('.tile');
    window.addEventListener('scroll', fadeIn ); 
    function fadeIn() {
      for (var i = 0; i < elementsArray.length; i++) {
        var elem = elementsArray[i]
        var distInView = elem.getBoundingClientRect().top - window.innerHeight + 20;
        if (distInView < 0) {
            elem.classList.add("inView");
        } else {
            elem.classList.remove("inView");
        }
      }
    }
  fadeIn();
});

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

// function copyText() {
//   /* Copy text into clipboard */
//   navigator.clipboard.writeText
//       ("#epouvaantail");
//   // text to confirm that is copied to the clipboard
//   var btn = document.querySelector("#discord-btn");
//   btn.insertAdjacentHTML("beforebegin", 
//   '<div class="copy" ><p>copy to the clipboard</p></div>');
//   setTimeout('document.querySelector(".copy").remove(".copy")',1500)
// }

/* ---------------------------------------------------------------------------------- */