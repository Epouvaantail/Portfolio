import data from "./projects.json" assert { type:"json" };
alert(data)

const projects = document.querySelector('.projects');
for (let d in data) {
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

