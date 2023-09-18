import data from "./projects.json" assert { type:"json" };

const projects = document.querySelector('.projects');
for (let d in data) {
    projects.insertAdjacentHTML('beforeend', `
        <div class="project" id="${data[d].id}">
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

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();

